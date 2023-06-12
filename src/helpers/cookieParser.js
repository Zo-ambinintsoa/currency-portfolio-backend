/**
 * Parses the cookies from the request headers and returns them as an object.
 * @param {Object} request - The request object.
 * @returns {Object} - The parsed cookies as key-value pairs.
 */
export const cookieParser = (request) => {
    const parsedCookies = {};

    const cookieHeader = request.headers?.cookie;

    if (!cookieHeader) {
        return parsedCookies;
    }

    const cookies = cookieHeader.split(';');

    cookies.forEach((cookie) => {
        const [name, value] = cookie.split('=');

        const trimmedName = name?.trim();
        if (!trimmedName) {
            return;
        }

        const trimmedValue = value?.trim();
        if (!trimmedValue) {
            return;
        }

        const decodedValue = decodeURIComponent(trimmedValue);
        parsedCookies[trimmedName] = decodedValue;
    });

    return parsedCookies;
};
