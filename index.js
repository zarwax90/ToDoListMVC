var express = require('express')
var session = require('cookie-session')
var routeur = require('./routes/ToDoListRoutes');
var app = express();

// création de la session
app.use(session({ secret: 'todotopsecret' }))
    .use(routeur)
    .use(function(req, res, next) {
        // vérification s'il existe déjà une liste (middleware 'maison')
        if (typeof(req.session.todolist) == 'undefined') {
            req.session.todolist = [];
        }
        next();
    })
    .use(function(req, res, next) {
        // redirection vers l'affichage de la liste si la vue n'existe pas
        res.redirect('/todo');
    })
    .listen(3000);