export class ServerError extends Error {
    statusCode = 500;

    constructor(msg = 'Network error') {
        super(msg);
    }
}

export class UnprocessableEntity extends ServerError {
    statusCode = 422;

    constructor(msg = 'Unprocessable entity') {
        super(msg);
    }
}