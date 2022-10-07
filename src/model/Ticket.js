const {Schema, model} = require('mongoose')

const ticketSchema = new Schema({
    ticketNo: {
        type: Number,
        required: true
    },
    passenger: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    flight: {
        type: String,
        required:true
    }


})

module.exports = model('Ticket', ticketSchema)