const allContacts = require("./listContacts");
const updateContact = async (contactId, body) => {
  const contacts = await allContacts();
  const indexId = contacts.findIndex((contact) => contact.id === contactId);
  if (indexId === -1) {
    return null;
  }
  contacts[indexId] = { contactId, ...body };
  return contacts[indexId];
};

module.exports = updateContact;
