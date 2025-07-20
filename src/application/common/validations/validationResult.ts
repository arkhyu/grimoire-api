export class ValidationResult {
  success: boolean;
  errors?: Record<string, string[]>;

  private constructor(success: boolean, errors?: Record<string, string[]>) {
    this.success = success;
    this.errors = errors;
  }

  static ok(): ValidationResult {
    return new ValidationResult(true);
  }

  static fail(errors: Record<string, string[]>): ValidationResult {
    return new ValidationResult(false, errors);
  }
}