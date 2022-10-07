const router = require('express').Router();

const {getFlight, saveFlight, saveTicket, getTicketById, getTickets} = require("./controle")

router.get('/flight', getFlight)
router.post('/saveflight', saveFlight)
router.post('/bookticket',saveTicket)
router.get('/tickets', getTickets)


module.exports = router;