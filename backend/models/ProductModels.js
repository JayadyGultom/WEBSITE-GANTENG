import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Product = db.define('Product', {
    nama : DataTypes.STRING,
    image : DataTypes.STRING,
    url : DataTypes.STRING
},{
    freezeTableName: true
})

export default Product;

(async()=>{
    await db.sync()
})()