const { validContactExemple } = require("../schemas/validation");
const { RequestError } = require("../helpers");
const Contact = require("../models/contact");

const addNewContact = async (req, res, next) => {
  try {
    const { error } = validContactExemple.validate(req.body);
    if (error) {
      throw RequestError(400, "missing required name field");
    }
    const result = await Contact.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = addNewContact;
