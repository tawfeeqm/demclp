import Joi from '@hapi/joi';

export const assetSchema = Joi.object({
    type: Joi.string().valid('picture', 'video').required(),
    url: Joi.string().uri().required(),
    title: Joi.string().max(255).required(),
    description: Joi.string().optional(),
});

export const userSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().max(20).required()
})
