module.exports = (sequelize, DataTypes) => {
    const State = sequelize.define('State', {
        state_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        state_name: {
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
        }
    });
    return State
}