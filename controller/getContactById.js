const { getContactById } = require("../models/contacts");
const { RequestError } = require("../helpers");
const getOneContactById = async (req, res, next) => {
  try {
    const contactId = req.params.contactId;
    const result = await getContactById(contactId);
    if (!result) {
      throw RequestError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getOneContactById;
