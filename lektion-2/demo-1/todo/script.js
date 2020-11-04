const form = document.querySelector('#todoForm');
const input = document.querySelector('#todoInput');
const addBtn = document.querySelector('#addTodo');
const output = document.querySelector('#todos');
let todos = [];

const listTodos = () => {
    output.innerHTML = ''
    todos.forEach(todo => {
        output.innerHTML += `<div id="${todo._id}" class="d-flex justify-content-between align-items-center border rounded p-2 mt-1 bg-white todo">${todo.title}<button class="btn btn-danger px-3">X</button></div>`
    })
}

const getTodos = () => {
    fetch('http://localhost:9999/api/todos/')
    .then(res => res.json())
    .then(data => {
        todos = data;
        listTodos();
    })
}



const addTodo = () => {
    if(input.value !== '') {
        input.classList.remove('is-invalid');
        let title = input.value;

        fetch('http://localhost:9999/api/todos/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                title: title
            })
        })
        .then(res => res.json())
        .then(() => getTodos())

        input.value = '';
    } else {
        input.classList.add('is-invalid');
    }
}

const deleteTodo = (id) => {
    fetch(`http://localhost:9999/api/todos/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(() => getTodos())
}

getTodos();

output.addEventListener('click', (e) => {
    deleteTodo(e.target.parentNode.id)
})

addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    addTodo()
})