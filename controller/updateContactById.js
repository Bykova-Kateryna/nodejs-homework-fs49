const { validContactExemple } = require("../schemas/validation");
const { RequestError } = require("../helpers");

const Contact = require("../models/contact");

const updateContactById = async (req, res, next) => {
  const contactId = req.params.contactId;
  try {
    const { error } = validContactExemple.validate(req.body);
    if (error) {
      throw RequestError(400, "missing field");
    }
    const result = await Contact.replaceOne({ _id: contactId }, req.body);
    res.json({ message: "Changes made"});
  } catch (error) {
    if (
      error.message ===
      `Cast to ObjectId failed for value "${contactId}" (type string) at path "_id" for model "contact"`
    ) {
      return next(RequestError(404, `Not found contact ${contactId}`));
    }
    next(error);
  }
};

module.exports = updateContactById;
