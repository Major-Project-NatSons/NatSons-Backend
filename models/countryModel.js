
module.exports = (sequelize, DataTypes) => {
    const Country = sequelize.define('Country', {
        country_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        country_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country_code: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
);
    return Country;
}