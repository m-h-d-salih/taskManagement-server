import Joi from "joi";

export const taskValidation = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});