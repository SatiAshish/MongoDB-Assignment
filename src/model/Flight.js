const {Schema, model} = require('mongoose')

const flightSchema = new Schema({
    flightNo : {
        type:Number,
        required : true
    },
    travelCities :{
        type: String,
        required : true
    },
    flightTimmings: {
        type:String,
        required : true
    },
    planeCategory:{
        type:String,
        required : true
    }


}) 

module.exports = model('Flight',flightSchema)