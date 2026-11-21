require('dotenv').config({ path: require('path').join(__dirname, '.env') })

if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not set. Copy Backend/.env.example to Backend/.env and set it.')
}

module.exports = {
    secret: process.env.JWT_SECRET
}
