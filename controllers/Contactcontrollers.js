
const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');


const getContact = asyncHandler(async (req, res) => {

    const contacts = await Contact.find();
    // res.send('get all the contacts from the database');
    res.status(200).json(contacts);
});


const createContact = asyncHandler(async (req, res) => {
    // res.send('get all the contacts from the database');
    console.log("the request body is:", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error('All fields are mandatory');
    }

    const contact = await Contact.create({
        name, email, phone,
    });
    res.status(201).json({ contact });
});


const UpdateContact = asyncHandler(async (req, res) => {

    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error('contact Not found');
    }

    const Update = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true
        }
    );
    // res.send('get all the contacts from the database');
    res.status(201).json(Update);
});



const DeleteContact = asyncHandler(async (req, res) => {

    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error('Contact Not Found to delete');

    }

    await Contact.deleteOne();
    // res.send('get all the contacts from the database');
    res.status(201).json({ contact });
});


module.exports = { getContact, createContact, UpdateContact, DeleteContact };