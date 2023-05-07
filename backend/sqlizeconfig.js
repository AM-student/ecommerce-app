/*import { Sequelize } from 'sequelize';
const sequelize = new Sequelize({
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true, // For Windows authentication
      trustServerCertificate: true // Change to true for local dev / self-signed certs
    },
  },
  host: 'XR-RX',
  database: 'ecommdb',
  username: 'pseudoadmin',
  password: 'pseudoadmin'
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

export default sequelize;
*/