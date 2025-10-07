var add = document.getElementById('add');
var toDoContainer = document.getElementById('todocontainer');
var addToDoButton = document.getElementById('inputtache');


//fonction lorsqu'on ajoute avec le boutton
add.onclick=function(){

    //vérifie si l'input est vide
    if(addToDoButton.value !=""){
        //si l'input n'est pas vide, créer un paragraphe
        var paragraph= document.createElement('p')
    }
    //valorisé ce paragraphe avec le contenu de l'input
    paragraph.innerText= inputField.value;

    //stylisé le paragraphe
    paragraph.classList.add('paragraphe_style');

    //insérer le paragraphe dans l'élélement toDoContainer
    //removeChild(child) → on demande au parent de supprimer un enfant donné
    toDoContainer.appendChild(paragraph);

    //vide l'input quand le paragraphe est ajouté
    inputField.value=" ";

    //barré le paragraphe quand on clique dessus
    paragraph.addEventListener('click',function(){
        paragraph.classList.add('paragraphe_click');
    })

    //supprimer la tâche quand on double click sur la tâche
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
}