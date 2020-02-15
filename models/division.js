"use strict";
module.exports = (sequelize, DataTypes) => {
  const Division = sequelize.define(
    "Division",
    {
      name: { type: DataTypes.STRING, allowNull: false }
    },
    { paranoid: true, defaultScope: { attributes: { exclude: ["deletedAt"] } } }
  );
  Division.associate = function(models) {
    // associations can be defined here
  };
  return Division;
};
