var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = JSON.parse (localStorage.getItem('list_todos')) || []

function renderTodos() {
    listElement.innerHTML = "";
    for( todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var pos = todos.indexOf(todo);


        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');
        linkElement.setAttribute ('href','#');
        linkElement.setAttribute('onclick','deleteTodo('+ pos +')');
        
        linkElement.appendChild(linkText);

        listElement.appendChild(todoElement);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = "";
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos,1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}