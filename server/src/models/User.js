module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        name: DataTypes.STRING,
        lastname: DataTypes.STRING,
    })
    User.prototype.comparePassword = function (password) {
        if (password == this.password) {
        return true
        }
        return false
       }
       User.associate = function (models) {}
    return User
}