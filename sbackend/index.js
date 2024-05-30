const app = require('./app');
const db = require('./database');

//Setting the port and listening for connections
const port = 3001;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})