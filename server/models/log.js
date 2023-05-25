const fs = require('fs')

class Log {
    constructor(message = '') {
        this.date = new Date();
        this.message = message;
    }

    saveAsCSV() {
        const csv = `${this.date.toLocaleString()},${this.message}\n`;
        try {
            fs.appendFileSync('../logs.csv', csv);
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = Log;