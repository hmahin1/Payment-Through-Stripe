'use strict';
module.exports = (sequelize, DataTypes) => {
  var Card = sequelize.define('Card', {
    source_id: DataTypes.STRING,
    brand: DataTypes.STRING,
    country: DataTypes.STRING,
    exp_month: DataTypes.INTEGER,
    fingerprint: DataTypes.STRING,
    last4: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    customer: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {});
  Card.associate = function(models) {
    // associations can be defined here
  };
  return Card;
};