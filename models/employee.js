"use strict";
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define(
    "Employee",
    {
      name: { type: DataTypes.STRING, allowNull: false },
      divisionId: { type: DataTypes.INTEGER, allowNull: false },
      positionId: { type: DataTypes.INTEGER, allowNull: false }
    },
    { paranoid: true, defaultScope: { attributes: { exclude: ["deletedAt"] } } }
  );
  Employee.associate = function(models) {
    // associations can be defined here
    Employee.belongsTo(models.Division);
    Employee.belongsTo(models.Position);
  };
  return Employee;
};
