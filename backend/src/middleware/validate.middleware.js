import asyncHandler from "../utils/asyncHandler.js";

const validate = (schema) =>
  asyncHandler(async (req, res, next) => {
    const validatedData = await schema.parseAsync(req.body);

    req.validatedData = validatedData;

    next();
  });

export default validate;