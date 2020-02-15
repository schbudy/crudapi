"use strict";
module.exports = (sequelize, DataTypes) => {
  const Position = sequelize.define(
    "Position",
    {
      name: { type: DataTypes.STRING, allowNull: false }
    },
    { paranoid: true, defaultScope: { attributes: { exclude: ["deletedAt"] } } }
  );
  Position.associate = function(models) {
    // associations can be defined here
  };
  return Position;
};
