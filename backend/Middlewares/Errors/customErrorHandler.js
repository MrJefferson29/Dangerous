const CustomError = require("../../Helpers/error/CustomError");

const customErrorHandler = (err, req, res, next) => {
    // Handling specific error types and converting them to CustomError instances
    if (err.code == 11000) {
        err = new CustomError("Duplicate Field Value Enter ", 404);
    }

    if (err.name === 'SyntaxError') {
        err = new CustomError('Unexpected Sytax ', 400);
    }

    if (err.name === 'ValidationError') {
        err = new CustomError(err.message, 400);
    }

    if (err.name === "CastError") {
        err = new CustomError("Please provide a valid id  ", 400);
    }

    if (err.name === "TokenExpiredError") {
        err = new CustomError("Jwt expired  ", 401);
    }

    if (err.name === "JsonWebTokenError") {
        err = new CustomError("Jwt malformed  ", 401);
    }

    // Logging the error details for debugging
    console.log("Custom Error Handler => ", err.name, err.message, err.statusCode);

    // Returning a JSON response with the appropriate status code and error message
    return res.status(err.statusCode || 500)
        .json({
            success: false,
            error: err.message || "Server Error"
        });
};

// Add a generic catch block to log any unanticipated errors
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

module.exports = customErrorHandler;
