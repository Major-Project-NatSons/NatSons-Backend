const { sequelize } = require("./dbConfig");

module.export = (sequelize, DataTypes) => {
    const HomeData = sequelize.define('HomeData', {
        home_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
        property_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
    });

    return Home

}