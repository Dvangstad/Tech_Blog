const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(
        'MVC_blog',
        'root',
        'Dmoney31!',
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        }
    )

module.exports = sequelize