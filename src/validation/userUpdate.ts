import Joi from "joi";
import { ValidationError } from "../helpers/err/validationError";

export default async (req: any, res: any, next: any) => {
  try {
    const user = Joi.object({
      name: Joi.string(),
      email: Joi.string(),
      password: Joi.string(),
      passwordConfirmation: Joi.string(),
    });

    const { error } = await user.validate(req.body, { abortEarly: true });
    if (error) {
      throw new ValidationError(error, 400);
    }
    return next();
  } catch (error) {
    res.send(error);
  }
};
