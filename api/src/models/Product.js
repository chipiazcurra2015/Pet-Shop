const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('Product',{
         id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
         },
         brand: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         description: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         kilogram: {
            type: DataTypes.FLOAT,
            allowNull: false,
         },
         stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
         },
         price: {
            type: DataTypes.FLOAT,
            allowNull: false,
         },
         image: {
            type: DataTypes.STRING,
            allowNull: false,
         }
    },{timestamps: false})
}