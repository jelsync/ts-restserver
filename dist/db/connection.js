"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//mySql
// const db = new Sequelize('node', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql',
//     // logging: false
// });
//POSTGRESQL
const db = new sequelize_1.Sequelize('Node', 'postgres', 'post', {
    host: 'localhost',
    dialect: 'postgres'
    // logging: false
});
exports.default = db;
//# sourceMappingURL=connection.js.map