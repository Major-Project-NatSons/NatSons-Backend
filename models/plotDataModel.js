const { DataTypes } = require("sequelize");
const { sequelize } = require("./dbConfig");

module.exports = (sequelize,DataTypes)=>{
    const plotData = sequelize.define('PLotData',{
        plot_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        plot_name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        plot_area:{
            type:DataTypes.STRING,
            allowNull:false
        },
        plot_price:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        plot_address:{
            type:DataTypes.STRING,
            allowNull:false
        },
        country_id: {
            type: DataTypes.INTEGER,
            references : {
                modle: 'Country',
                key: 'country_id',
            },
            allowNull: false
        },
        state_id: {
            type: DataTypes.INTEGER,
            references : {
                modle: 'State',
                key: 'state_id',
            },
            allowNull: false
        },
        plot_image:{
            type:DataTypes.ARRAY(DataTypes.STRING),
        }
    });
    return plotData;
}