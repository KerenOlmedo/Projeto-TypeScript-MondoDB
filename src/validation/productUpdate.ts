import Joi from "joi";
import { ValidationError } from "../helpers/err/validationError";

export default async (req: any, res: any, next: any) => {
  try {
    const product = Joi.object({
      id: Joi.string(),
      name: Joi.string(),
      description: Joi.string(),
      value: Joi.string(),
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
