require('dotenv').config()
const mongoose = require('mongoose');
const mysql = require('mysql2/promise');
const { options } = require('../routes/web');

const dbState = [
    { value: 0, label: "disconnected" },
    { value: 1, label: "connected" },
    { value: 2, label: "connecting" },
    { value: 3, label: "disconnecting" }
];

const connection = async () => {
    try {
        const options = {
            user: process.env.DB_USER,
            pass: process.env.DB_PASSWORD
        }
        await mongoose.connect(process.env.DB_HOST, options)
        const state = Number(mongoose.connection.readyState);
        console.log(dbState.find(f => f.value === state).label, "to db"); // connected to db
    } catch (error) {
        console.log('>> chekc', error);
    }
}


module.exports = connection;