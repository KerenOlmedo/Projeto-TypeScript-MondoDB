class InvalidRequestError extends Error {
  constructor(erros: any) {
    super(`InvalidRequestError: ${erros}`);
    this.name = 'InvalidRequestError';
  }
}

export default InvalidRequestError;
