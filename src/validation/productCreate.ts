import Joi from "joi";
import { ValidationError } from "../helpers/err/validationError";

export default async (req: any, res: any, next: any) => {
  try {
    const product = Joi.object({
      id: Joi.string().required(),
      name: Joi.string().required(),
      description: Joi.string().required(),
      value: Joi.string().required(),
    });

    const { error } = await product.validate(req.body, { abortEarly: true });
    if (error) {
      throw new ValidationError(error, 400);
    }
    return next();
  } catch (error) {
    res.send(error);
  }
};
