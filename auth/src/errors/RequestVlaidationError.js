const { ValidationError } = require("express-validator");
export class RequestValidationError extends Error {
/*   errors: ValidationError[]; */
  constructor(errors) {
    Object.setPrototypeOf(this, RequestValidationError.Prototype);
  }
}
/* throw new RequestValidationError(errors); */
