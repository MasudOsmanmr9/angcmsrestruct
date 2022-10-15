const Joi = require("joi");

const frontStore = Joi.object({
    FAreaID: Joi.string().required(),
    FAreaName: Joi.string().max(199).required(),
    FAreadSize: Joi.string().max(100).required(),
    isActive: Joi.boolean().required(),
    createdAt: Joi.number().max(100).required(),
    createdBy: Joi.string().max(100).required(),
    lastModified: Joi.number().max(100).required(),
    lastModifiedBy: Joi.string().max(100).required(),
});

module.exports = {
    frontStore,
};
