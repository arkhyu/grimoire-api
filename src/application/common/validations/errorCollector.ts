export class ErrorCollector {
  private errors: Record<string, string[]> = {};

  add(field: string, message: string): void {
    if (!this.errors[field]) {
      this.errors[field] = [];
    }
    this.errors[field].push(message);
  }

  get(): Record<string, string[]> {
    return this.errors;
  }

  isEmpty(): boolean {
    return Object.keys(this.errors).length === 0;
  }
}
