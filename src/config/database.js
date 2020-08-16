const {connect} = require("mongoose");
const {server, database} = require("./config").db;

class Database {
    constructor() {
        this._connect();
    }

    _connect() {
        connect(`mongodb://${server}/${database}`)
        .then(() => {
            console.log('Database connection successful')
        })
        .catch(err => {
            console.error('Database connection error')
        })
    }
}

module.exports = new Database();