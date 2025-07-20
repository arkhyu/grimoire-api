import { allowedBoundInValues } from "../../../domain/book/book.model.js";
import { ValidationResult } from "../../common/validations/validationResult.js";
import { CreateBookRequest } from "../book.createRequest.js";

function addError(errors: Record<string, string[]>, field: string, message: string) {
  if (!errors[field]) {
    errors[field] = [];
  }
  errors[field].push(message);
}

export class CreateBookValidator {
    
  static validate(input: CreateBookRequest): ValidationResult {
    
    const FORBIDDEN_KEYWORD = 'forbidden';
    const logicErrors: Record<string, string[]> = {};

    if (input.boundIn === "do not ask" && !input.isCursed) {
       addError(logicErrors, 'boundIn', 'Only cursed books can be bound in "do not ask"');
    }

    if (input.title.toLowerCase().includes(FORBIDDEN_KEYWORD) && !input.isCursed) {
      addError(logicErrors, 'title', `${FORBIDDEN_KEYWORD} books must be marked as "cursed"`);
    }
   
    if (input.boundIn !== undefined && !allowedBoundInValues.includes(input.boundIn)) {
        addError(logicErrors, 'boundIn', `boundIn must be one of ${allowedBoundInValues.join(', ')}.`);
    }


    if (Object.keys(logicErrors).length > 0) {
      return {
        success: false,
        errors: logicErrors,
      };
    }

    return { success: true};
  }

}
