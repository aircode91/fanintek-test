import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Expresence = db.define('expresences',{
    userId:{
        type: DataTypes.INTEGER
    },
    type:{
        type: DataTypes.STRING
    },
    is_approve:{
        type: DataTypes.BOOLEAN
    },
    waktu:{
        type: DataTypes.STRING
    }
},{
    freezeTableName:true
});

export default Expresence;