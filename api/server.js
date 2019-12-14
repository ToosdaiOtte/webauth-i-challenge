const express = require('express');
const session = require('express-session');
const knexSessionStore = require('connect-session-knex')(session);

const apiRouter = require('./api-router.js');
const configureMiddleware = require('./configure-middleware');

const sessionOptions = {
    name: 'mycookie',
    secret: 'cookiesareyummymewantcookies',
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: false,
        httpOnly: true
    },
    resave: false,
    saveUninitialized: false,

    store: new knexSessionStore({
        knex: require('../data/db-config.js'),
        tablename: 'sessions',
        sidfieldname: 'sid',
        createtable: true,
        clearInterval: 1000 * 60 * 60
    })
}

const server = express();

configureMiddleware(server);
server.use(session(sessionOptions));

server.use('/api', apiRouter);

module.exports = server;