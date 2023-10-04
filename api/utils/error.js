export const createError = (status, message) => {
    const err = new Error();
    err.status = status;
    err.message = message;
    return err;
}
//here we are handling error by the middleware