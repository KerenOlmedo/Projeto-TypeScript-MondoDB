class NotFoundError extends Error {
  description: string;
  statusCode: number;

  constructor(description: any) {
    super(`NotFoundError: ${description}`);
    this.description = description;
    this.statusCode = 404;
    this.name = 'NotFoundError';
  }
}

export default NotFoundError;
