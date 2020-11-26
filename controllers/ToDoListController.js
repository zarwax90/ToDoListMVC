// voir tous les messages
const ToDoList_affichage = (req, res) => {
    // On affiche la todolist et le formulaire
    res.render("todo.ejs", { todolist: req.session.todolist });
};
const ToDoList_creation = (req, res) => {
    // ajouter un élément à la liste (si le champs n'est pas vide)
    const tache = req.body.newtodo
    if (req.body.priorite != '') {
        req.session.todolist.push(tache)
    }
    res.redirect('/')
};

const ToDoList_modifier = (req, res) => {
    let i = parseInt(req.params.id);
    if (req.params.id != '') {
        console.log(i);
        req.session.todolist[i] = req.body.itemupdate
    }
    res.redirect('/');
};

const ToDoList_suppression = (req, res) => {
    // supprimer l'élément 'id' de la liste
    if (req.params.id != '') {
        req.session.todolist.splice(req.params.id, 1)
    }
    res.redirect('/')
};

module.exports = {
    ToDoList_affichage,
    ToDoList_creation,
    ToDoList_modifier,
    ToDoList_suppression
}