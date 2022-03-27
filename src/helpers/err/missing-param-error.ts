class MissingParamError extends Error {
  constructor(paramName: any) {
    super(`Missing Param: ${paramName}`);
    this.name = 'MissingParamError';
  }
}

export default MissingParamError;
