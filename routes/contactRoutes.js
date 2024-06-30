const express = require('express');
const router = express.Router();
const { getContact, createContact, UpdateContact, DeleteContact } = require('../controllers/Contactcontrollers');

router.route("/").get(getContact).post(createContact);
router.route("/:id").put(UpdateContact).delete(DeleteContact);


module.exports = router;