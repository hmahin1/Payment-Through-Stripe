'use strict';
module.exports = function(sequelize, DataTypes)  {
  var User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    token: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    expired: DataTypes.BOOLEAN
  });

    User.associate = function (models) {
       
    };
    return User;
};