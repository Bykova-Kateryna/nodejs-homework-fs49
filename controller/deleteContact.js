const { RequestError } = require("../helpers");
const { removeContact } = require("../models/contacts");
const deleteContact = async (req, res, next) => {
  try {
    const contactId = req.params.contactId;
    const result = await removeContact(contactId);
    if (!result) {
      throw RequestError(404, "Not found");
    }
    res.json({ message: "contact deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteContact;
