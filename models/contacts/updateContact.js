const fs = require("fs/promises");
const contactsPath = require("./contactsPath");
const allContacts = require("./listContacts");
const updateContact = async (contactId, body) => {
  const contacts = await allContacts();
  const indexId = contacts.findIndex((contact) => contact.id === contactId);
  if (indexId === -1) {
    return null;
  }
  contacts[indexId] = { id: contactId, ...body };
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return contacts[indexId];
};

module.exports = updateContact;
