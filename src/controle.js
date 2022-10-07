const Flight = require("../src/model/Flight")
const Ticket = require("../src/model/Ticket")

//get Flight data 
exports.getFlight = async (req, res) => {
    try {
        const data = await Flight.find()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

//save data in Flight
exports.saveFlight = async (req, res) => {
    const flight = new Flight({
        flightNo: req.body.flightNo,
        travelCities: req.body.travelCities,
        flightTimmings: req.body.flightTimmings,
        planeCategory: req.body.planeCategory
    })

    try {
        const data = await flight.save()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}


//save data in Ticket
exports.saveTicket = async (req, res) => {
    const ticket = new Ticket({
        ticketNo: req.body.ticketNo,
        passenger: req.body.passenger,
        destination: req.body.destination,
        flight: req.body.flight
    })

    try {
        const data = await ticket.save()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}



//get all Ticket data 
exports.getTickets = async (req, res) => {
    try {
        const data = await Ticket.find()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}