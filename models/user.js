"use strict";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: DataTypes.STRING,
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        User.hasMany(models.UserPost)
      }
    }
  });

  return User;
};

'use strict';

module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define("Blog", {
        title: DataTypes.STRING,
        blogPost: DataTypes.STRING
    }, {
        classMethods: {
            associate: (models) => {
                Blog.hasMany(models.)
            }
        }
    }
}