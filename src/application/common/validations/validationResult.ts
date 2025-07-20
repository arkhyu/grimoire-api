export type ValidationResult<T = void> = 
  | { success: true }
  | { success: false; errors: Record<string, string[]> };