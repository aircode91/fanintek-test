import Expresence from "../models/ExpresenceModel.js";
import dateFormat from 'dateformat';
import Users from "../models/UserModel.js";
import { Op } from "sequelize";


export const getDataExpresence = async (req, res) => {
    try {
        const expresence = await Expresence.findAll();
        const data = expresence.map(function(item,key){   
            return {
                "id_user":item.userId,
                "name_user":item.name_user,
                "waktu_masuk": item.waktu_masuk,
                "waktu_pulang":item.waktu_pulang,
                "status_masuk":item.status_masuk,
                "status_pulang":item.status_pulang,
                
            }
        });
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}


export const CheckInOut = async (req, res) => {
    const {
        type
    } = req.body;

    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(204);

    const user = await Users.findAll({
        where: {
            refresh_token: refreshToken
        }
    });

    if (user[0] == null) return res.status(400).json({
        msg: "User tidak ditemukan !"
    });

    const userId = user[0].id;
    const now = new Date();
    
    const dateNowTime = dateFormat(now, "dd/mm/yy H:MM");
    try {
        
        const checkExpresence =  await Expresence.findOne({
            attributes: ['id','userId' ,'type', 'waktu']
        },{
            where:{ 
             [Op,and]:[
              {"userId":userId}, 
              {"type":type}
             ]
            }
        });

        return res.json(checkExpresence);

        if(checkExpresence){
            const waktu=dateFormat(checkExpresence.waktu, "dd/mm/yy");
            const dateNow=dateFormat(now, "mm/dd/yy");
            if (waktu == dateNow && checkExpresence.type == type){
                return res.sendStatus(204).json({
                    msg: `User sudah pernah melakukan ${type} !`
                });
            }
        }

        const dataExpresence =  await Expresence.create({
            "userId":userId,
            "type":type,
            "is_approve":false,
            "waktu":dateNowTime
        });

        res.json({
            msg: `Chek ${type} has been succesfully !`,
            data: {
                type:dataExpresence.type,
                waktu:dataExpresence.waktu
            }
        });
    } catch (error) {
        console.log(error);
    }
}
