'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const dbhost = process.env.NODE_DBHOST;
const dbname = process.env.NODE_DBNAME;
const dbuser = process.env.NODE_DBUSER;
const dbpass = process.env.NODE_DBPASS;
const db = {};
console.log(dbhost,dbname,dbuser,dbpass);

let sequelize;
if ( dbhost, dbname, dbuser, dbpass ) {
  sequelize = new Sequelize( dbname, dbuser, dbpass, { host: dbhost, dialect: config.dialect, operatorsAliases: config.operatorsAliases});
}else{
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
