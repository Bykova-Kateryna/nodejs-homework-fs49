const Contact = require("../models/contact");
const { RequestError } = require("../helpers");
const getOneContactById = async (req, res, next) => {
  const contactId = req.params.contactId;
  try {
    const result = await Contact.findOne({ _id: contactId });
    res.json(result);
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

module.exports = getOneContactById;
