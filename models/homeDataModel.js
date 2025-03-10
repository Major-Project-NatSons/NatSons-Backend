const { sequelize } = require("./dbConfig");

module.exports = (sequelize, DataTypes) => {
    const HomeData = sequelize.define('HomeData', {
        home_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        owner_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        seller_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        seller_contact:{
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
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
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zip_code: {
            type: DataTypes.STRING,
            allowNull: false
        },
        area: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        number_of_rooms: {
            type: DataTypes.INTEGER,
        },
        number_of_bathrooms: {
            type: DataTypes.INTEGER,
        },
        no_of_kitchens:{
            type: DataTypes.INTEGER,
        },
        no_of_halls:{
            type: DataTypes.INTEGER,
        },
        property_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        home_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: DataTypes.ARRAY(DataTypes.STRING),
        },
        main_img:{
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return HomeData;
}