const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/userModel');
const Ticket = require('../models/ticketModel');

// @desc Get user tickets
// @route GET /api/tickets
// @access Private
const getTickets = asyncHandler(async (req, res) => {

    //get user using the id in the JWT
    const user = await User.findById(req.user.id);

    if (!user) {
        res.status(401);
        throw new Error('User not found');
    }

    const tickets = await Ticket.find({
        user: req.user.id
    })
   
     res.status(200).json(tickets);
     
 })

 // @desc Get user tickets
// @route POST /api/tickets
// @access Private
const createTicket = asyncHandler(async (req, res) => {

    const {product, description} = req.body;

    if (!product || !description) {
        res.status(400)
        throw new Error('Please add a product and description')
    }

    //get user using the id in the JWT
    const user = await User.findById(req.user.id);

    if (!user) {
        res.status(401);
        throw new Error('User not found');
    }
 
    const ticket = await Ticket.create({
        product: product,
        description: description,
        user: req.user.id,
        status: 'new'
    })
   
    res.status(201).json(ticket);
    
})

module.exports = {
    getTickets,
    createTicket
}