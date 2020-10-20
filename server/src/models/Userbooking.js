module.exports = (sequelize, DataTypes) => {
    const Userbooking = sequelize.define('Userbooking', {
        name: DataTypes.STRING,
        lastname: DataTypes.STRING,
        email: DataTypes.STRING,
        tell: DataTypes.STRING,
        status: DataTypes.STRING
    })
    return Userbooking
}