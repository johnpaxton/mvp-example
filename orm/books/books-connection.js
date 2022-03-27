const { Sequelize } = require('sequelize');
const config = require('./books-connection-config');

// prettier-ignore
let connectionString = `mysql://${config.host ?? 'localhost'}:3306/${config.database}`;
console.log(`**** Connection String ********
${connectionString}
**** End Connection String ****`);

// Step 3 couldn't happen without this
const connection = new Sequelize(connectionString, {
  username: config.username,
  password: config.password,
  dialectOptions: config.dialectOptions,
  // logging: false,
  // Default for all Models, saves us some typing
  define: {
    timestamps: false,
    underscored: true,
  },
});

module.exports = connection;
