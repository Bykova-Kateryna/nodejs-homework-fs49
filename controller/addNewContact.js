const validContactExemple = require("../schemas/validation");
const { RequestError } = require("../helpers");
const { addContact } = require("../models/contacts");
const addNewContact = async (req, res, next) => {
  try {
    const { error } = validContactExemple.validate(req.body);
    if (error) {
      throw RequestError(400, "missing required name field");
    }
    const result = await addContact(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = addNewContact;
