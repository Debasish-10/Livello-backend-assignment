import Joi from 'joi';

export const createUserSchema = Joi.object({
  name: Joi.string().required(),
  hobbies: Joi.array().items(Joi.string()),
});

export const updateUserSchema = Joi.object({
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
  name: Joi.string().required(),
  hobbies: Joi.array().items(Joi.string()),
});

export const createHobbySchema = Joi.object({
  passionLevel: Joi.string().required(),
  name: Joi.string().required(),
  year: Joi.number().integer().required(),
});

export const updateHobbySchema = Joi.object({
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
  passionLevel: Joi.string().required(),
  name: Joi.string().required(),
  year: Joi.number().integer().required(),
});
