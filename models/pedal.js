'use strict';
module.exports = (sequelize, DataTypes) => {
  const pedal = sequelize.define('pedal', {
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    type: DataTypes.STRING,
    serialnumber: DataTypes.STRING,
    note: DataTypes.STRING
  }, {});
  pedal.associate = function(models) {
    // associations can be defined here
  };
  return pedal;
};