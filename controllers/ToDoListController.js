// voir tous les messages
const ToDoList_affichage = (req, res) => {
    // On affiche la todolist et le formulaire
    res.render("todo.ejs", { todolist: req.session.todolist });
};

const ToDoList_creation = (req, res) => {
    // ajouter un élément à la liste (si le champs n'est pas vide)
    const tache = req.body.newtodo
    if (req.body.priorite != '') {
        req.session.todolist.push(tache);
    }
    res.redirect('/todo');
};

//Modifie un élément par id
const ToDoList_modifier = (req, res) => {
    let i = parseInt(req.params.id);
    if (req.params.id != '') {
        console.log(i);
        req.session.todolist[i] = req.body.itemupdate
    }
    res.redirect('/todo');
};

// supprimer l'élément 'id' de la liste
const ToDoList_suppression = (req, res) => {
    if (req.params.id != '') {
        req.session.todolist.splice(req.params.id, 1);
    }
    res.redirect('/todo');
};

module.exports = {
    ToDoList_affichage,
    ToDoList_creation,
    ToDoList_modifier,
    ToDoList_suppression
};