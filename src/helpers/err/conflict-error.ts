class ConflictError extends Error {
  description: string;
  statusCode: number;
  constructor(description: string) {
    super(`ConflictError: ${description}`);
    this.description = description;
    this.statusCode = 409;
    this.name = 'ConflictError';
  }
}

export default ConflictError;
