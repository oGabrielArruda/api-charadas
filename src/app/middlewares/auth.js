const credentials = require('../../config/credentials');

const auth = async (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return res.status(401).json({ error: 'Token not provided' });
    }

    if (token !== credentials.securityToken) {
        return res.status(401).json({ error: 'Token invalid' });
    }

    return next();
}

module.exports = auth;