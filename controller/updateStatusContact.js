const { validContactExempleForStatus } = require("../schemas/validation");
const { RequestError } = require("../helpers");

const Contact = require("../models/contact");

const updateStatusContact = async (req, res, next) => {
  const contactId = req.params.contactId;
  try {
    const { error } = validContactExempleForStatus.validate(req.body);
    if (error) {
      throw RequestError(400, "missing field favorite");
    }
    const findContact = await Contact.findOne({ _id: contactId });
    const newContact = {
      name: findContact.name,
      email: findContact.email,
      phone: findContact.phone,
      favorite: req.body.favorite,
    };
    const result = await Contact.replaceOne({ _id: contactId }, newContact);
    res.json({ message: "Status changed" });
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

module.exports = updateStatusContact;
