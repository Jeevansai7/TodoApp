//This file is for error handling. It is tend to evolve.
exports.error = (httpcode, message) => {
    return {
        statusCode: httpcode,
        body: JSON.stringify({ error: message }),
        headers: {
            'Content-Type': 'application/json',
        }
    }
}