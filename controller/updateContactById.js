const validContactExemple = require("../schemas/validation");
const { RequestError } = require("../helpers");
const { updateContact } = require("../models/contacts");
const updateContactById = async (req, res, next) => {
  try {
    const { error } = validContactExemple.validate(req.body);
    if (error) {
      throw RequestError(400, "missing field");
    }
    const contactId = req.params.contactId;
    const result = await updateContact(contactId, req.body);
    if (!result) {
      throw RequestError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateContactById;
