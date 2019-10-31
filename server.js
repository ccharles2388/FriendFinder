const express = require('express');
const path = require('path');
const fs = require('fs');
const morgan = require('morgan');
var bodyParser = require('body-parser');
const mysql = require('mysql');

//==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server 
// ==============================================================================

const PORT = process.env.PORT || 8081;
const app = express();

const createApp = () => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    process.env.NODE_ENV === 'development' && app.use(morgan('dev'))

    app.use('/', require('./app/routing/htmlRoutes'));
    // BodyParser makes it easy for our server to interpret data sent to it.
    // The code below is pretty standard.
    // app.use(bodyParser.json());
    // app.use(bodyParser.urlencoded({ extended: true }));
    // app.use(bodyParser.text());
    // app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

    // ================================================================================
    // ROUTER
    // The below points our server to a series of "route" files.
    // These routes give our server a "map" of how to respond when users 
    // visit or request data from various URLs. 
    // ================================================================================

    require('./app/routing/apiRoutes.js')(app);
    require('./app/routing/htmlRoutes.js')(app);

    // No Need Public Folder In This App 
    // app.use(express.static(path.join(__dirname,  'public')));

    app.use((err, req, res, next) => {
        console.error(err);
        res.pipe(
            err.status || 500,
            err.message || 'Internal Server Error'
        );
    });
};

const createConnection = () => {
    // console.log(db)
};

const serverListen = () => {
    app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
};

const run = async () => {
    await createApp();
    // Disabled For Now 
    // await createConnection();
    await serverListen();
};

run();
