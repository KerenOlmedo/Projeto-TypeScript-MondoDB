import InternalServerError from "./err/internal-server-error";
import InvalidRequestError from "./err/invalid-request-error";
import NotFoundError from "./err/not-found-error";

class HttpResponse {
  static ok(data: any) {
    return {
      statusCode: 200,
      body: data
    };
  }

  static badRequest(error: any) {
    return {
      statusCode: 400,
      body: { error: error.message }
    };
  }

  static notFound(error: any) {
    return {
      statusCode: 404,
      body: { error: new NotFoundError(error).message }
    };
  }

  static invalidRequest(error: any) {
    return {
      statusCode: 500,
      body: { error: new InvalidRequestError(error).message }
    };
  }

  static exceptionHandler(error: any) {
    return {
      statusCode: error.statusCode || 500,
      body: {
        error: error.description || new InternalServerError().message
      }
    };
  }
}

export default HttpResponse;
