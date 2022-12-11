const Contact = require("../models/contact");
const { RequestError } = require("../helpers");

const deleteContact = async (req, res, next) => {
  const contactId = req.params.contactId;
  try {
    const result = await Contact.remove({ _id: contactId });
    res.json({ message: "contact deleted" });
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

module.exports = deleteContact;
