// création du routeur Express pour ce module
const { Router } = require("express");
const ToDoListController = require("../controllers/ToDoListController");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const routeur = Router();

// voir tous les messages
// insérer une nouvelle valeur
// effacer un message choisi par ID (parameters)
routeur.get('/todo', ToDoListController.ToDoList_affichage)
    .post('/todo/ajouter', urlencodedParser, ToDoListController.ToDoList_creation)
    .post('/todo/modifier/:id', urlencodedParser, ToDoListController.ToDoList_modifier)
    .get('/todo/supprimer/:id', ToDoListController.ToDoList_suppression)

module.exports = routeur;