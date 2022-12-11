const Joi = require("joi");

const validContactExemple = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

const validContactExempleForStatus = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = {
  validContactExemple,
  validContactExempleForStatus,
};
