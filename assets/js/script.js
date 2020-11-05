document.getElementById('onkeypress').onkeyup = press;
// appel de la fonction
// onkeyup l'événement se déclenche lorsque l'utilisateur relâche une touche du clavier
function press(){
// déclaration de la fonction
    var result = document.getElementById('onkeypress').value;
// déclaration de la variable
    alert('l\'action est : ' + result);
// ouverture de la boîte de dialogue
}