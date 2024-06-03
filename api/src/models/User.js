const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('User',{
         id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
          },
         firstname: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         lastname: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         email: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true,
            unique: true,
         },
         password: {
            type: DataTypes.STRING,
            allowNull: false,
         }
    },{timestamps: false})
}