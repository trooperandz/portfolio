"use strict";

module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define("Contact", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    message: DataTypes.STRING,
  });
  return Contact;
};
