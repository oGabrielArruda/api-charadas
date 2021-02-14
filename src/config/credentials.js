const credentials = {
    connectionString: process.env.MONGO_DB,
    securityToken: process.env.SECURITY_TOKEN
}

module.exports = credentials;