require('dotenv').config();

module.exports = {
  environment: process.env.ELEVENTY_ENV || 'development'
}
