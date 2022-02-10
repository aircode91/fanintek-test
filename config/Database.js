import {Sequelize} from "sequelize";

const db = new Sequelize('services','postgres','bismillah',{
    host: "localhost",
    dialect: "postgres",
    port:5432
});

export default db;