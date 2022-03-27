const { Sequelize } = require('sequelize');

// prettier-ignore
let connectionString = `mysql://${process.env.MYSQL_HOST ?? 'localhost'}:3306/${process.env.MYSQL_DATABASE}`;
console.log(`**** Connection String ********
${connectionString}
cert: ${process.env.MYSQL_CERTIFICATE}
**** End Connection String ****`);

// Step 3 couldn't happen without this
const connection = new Sequelize(connectionString, {
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  dialectOptions: process.env.MYSQL_CERTIFICATE
    ? {
        ssl: {
          rejectUnauthorized: true,
          ca: [process.env.MYSQL_CERTIFICATE],
        },
      }
    : {},
  // logging: false,
  // Default for all Models, saves us some typing
  define: {
    timestamps: false,
    underscored: true,
  },
});

module.exports = connection;
