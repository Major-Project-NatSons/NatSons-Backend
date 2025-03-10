const { sequelize } = require("./dbConfig");

module.exports = (sequelize, DataTypes) => {
    const HomeDocs = sequelize.define('HomeDocs', {
        home_doc_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        home_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'HomeData',
                key: 'home_id',
            },
            allowNull: false
        },
        registry_doc: {
            type: DataTypes.STRING,
            allowNull: false
        },
        affidavit: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tax_reciepty:{
            type: DataTypes.STRING,
            allowNull: false
        },
        property_noc:{
            type: DataTypes.STRING,
            allowNull: false
        },
        seller_aadhar:{
            type: DataTypes.STRING,
            allowNull: false
        },
        seller_pan:{
            type: DataTypes.STRING,
            allowNull: false
        },
        gov_approval: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        power_of_attorney: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        property_receipt: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    })
    return HomeDocs;
};