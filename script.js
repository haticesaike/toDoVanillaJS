const inputValue = document.getElementById("input");
const addTaskButton = document.getElementById("addTaskButton");
const todoContainer = document.getElementsByClassName("todo-container")[0]; //ne alaka anlamadim

const todotext =inputValue.value;

const generateElement= (type,className) => {
    const div = document.createElement(type);
    div.classList.add(className);
    return div;
}


const addTask = () => {
    if(inputValue.value === "") {
        alert("You must write something!");
    }
    else {

        const todoDiv = generateElement("div","todo");
        const todoLeft= generateElement("div","todo-left");

        const input = document.createElement("input");
        input.type = "checkbox";
        input.classList.add("checkbox");

        const todoTask=generateElement("span","todo-task");
        todoTask.innerText = inputValue.value;

        const todoRight= generateElement("div","todo-right");

        const deleteButton = generateElement("button","todo-delete");
        deleteButton.innerText = "Delete";
        deleteButton.setAttribute('onclick','deleteTask(this.parentElement.parentElement)')


        const editButton = generateElement("button","todo-edit");
        editButton.innerText = "Edit";
        editButton.setAttribute('onclick','editTask(this.parentElement.parentElement)')



        todoLeft.appendChild(input);
        todoLeft.appendChild(todoTask);
        todoRight.appendChild(deleteButton);
        todoRight.appendChild(editButton);

        todoDiv.appendChild(todoLeft);
        todoDiv.appendChild(todoRight);
        
        todoContainer.appendChild(todoDiv);


        inputValue.value = "";
        console.log(todoDiv);
        
    
    }
}   

const deleteTask = (e) => {
    e.remove();
}

const editTask = (e) => {
    console.log(e);
    const todo = e;
    const text = e.children[0].children[1];
    const textValue = text.innerText;
    todo.innerHTML ="";
    const editDiv = document.createElement("div");
    editDiv.classList.add("todo-edit-div");
    todo.appendChild(editDiv);
    

    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("todo-edit-input");
    input.value = textValue;
    editDiv.appendChild(input);

    const updateButton = document.createElement("button");
    updateButton.classList.add("todo-edit-button");
    updateButton.innerText = "Update";
    updateButton.setAttribute('onclick','updateTask(this.parentElement.parentElement)');
    console.log(updateButton);
    editDiv.appendChild(updateButton);
}


const updateTask = (e) => {
    
    const todo = e;
    const text = e.children[0].children[1];
    const input = e.children[0].children[0];
    text.innerText = input.value;
    todo.innerHTML ="";
    const todoLeft= generateElement("div","todo-left");

    const input2 = document.createElement("input");
    input2.type = "checkbox";
    input2.classList.add("checkbox");

    const todoTask=generateElement("span","todo-task");
    todoTask.innerText = input.value;

    const todoRight= generateElement("div","todo-right");

    const deleteButton = generateElement("button","todo-delete");
    deleteButton.innerText = "Delete";
    deleteButton.setAttribute('onclick','deleteTask(this.parentElement.parentElement)')
    const editButton = generateElement("button","todo-edit");
    editButton.innerText = "Edit";
    editButton.setAttribute('onclick','editTask(this.parentElement.parentElement)')
    todoLeft.appendChild(input2);
    todoLeft.appendChild(todoTask);
    todoRight.appendChild(deleteButton);
    todoRight.appendChild(editButton);
    todo.appendChild(todoLeft);
    todo.appendChild(todoRight);
    console.log(todo);
    
}