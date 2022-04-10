export class ValidationError extends Error {
  type: string;
  details: { path: any; type: any; context: any } | undefined;
  status: any;

  constructor(error: any, status: any) {
    super(error);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
    this.type = "Validadion Error";
    for (let key of Object.keys(error.details)) {
      this.message = error.details[key].message;
      this.details = {
        path: error.details[key].path,
        type: error.details[key].type,
        context: error.details[key].context,
      };
    }
    this.status = status || 500;
  }
}
