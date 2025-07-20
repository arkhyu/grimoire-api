import { allowedBoundInValues } from "../../../domain/book/book.model.js";
import { ErrorCollector } from "../../common/validations/errorCollector.js";
import { ValidationResult } from "../../common/validations/validationResult.js";
import { CreateBookRequest } from "../book.createRequest.js";

export class CreateBookValidator {

  static validate(input: CreateBookRequest): ValidationResult {
    
    const logicErrors: ErrorCollector = new ErrorCollector();;

    this.validateBoundIn(input, logicErrors);
    this.validateTitle(input, logicErrors);

    return (logicErrors.isEmpty())
     ? ValidationResult.ok()
      : ValidationResult.fail(logicErrors.get());
  }

  private static validateBoundIn(
    input: CreateBookRequest,
    errors: ErrorCollector
  ) {

    const BINDING_OPTION_SECRET = "do not ask";

    if (input.boundIn === BINDING_OPTION_SECRET && !input.isCursed) {
      errors.add(
        "boundIn",
        `Only cursed books can be bound in ${BINDING_OPTION_SECRET}`
      );
    }

    if (
      input.boundIn !== undefined &&
      !allowedBoundInValues.includes(input.boundIn)
    ) {
      errors.add(
        "boundIn",
        `boundIn must be one of ${allowedBoundInValues.join(", ")}.`
        );
    }
  }

  private static validateTitle(input: CreateBookRequest, errors: ErrorCollector) {
    const FORBIDDEN_KEYWORD = "forbidden";
     
    if (
      input.title.toLowerCase().includes(FORBIDDEN_KEYWORD) &&
      !input.isCursed
    ) {
        errors.add(
        "title",
        `${FORBIDDEN_KEYWORD} books must be marked as "cursed"`
      );
    }
  }
}
