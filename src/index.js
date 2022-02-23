/**
 * Gets app module from app.js file
 */
var app = require('./app');
/**
 * Port where the server will listening
 */
var port = process.env.PORT || 3700;

/**
 * Sets the port on the listen method
 */
app.listen(port, () => {
    console.log(`Server running in URL: localhost:${port}`)
});