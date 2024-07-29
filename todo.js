const list = document.getElementById('todo-list');
list.style.listStyle = "decimal";

document.getElementById('todo-btn').addEventListener('click', function () {
    const inputField = document.getElementById('inputField');
    const li = document.createElement('li');
    li.innerText = inputField.value;
    li.setAttribute('class', "relative mb-6");
    // li.className = "relative mb-6";
    inputField.value = '';
    const button = document.createElement('button');
    button.innerText = "Remove";
    button.setAttribute('class', "btn btn-sm btn-outline btn-error absolute right-4");
    // button.className = "btn btn-sm btn-outline btn-error absolute right-4";
    
    li.appendChild(button);
    
    list.appendChild(li);
});

// Enter button 

document.getElementById('inputField').addEventListener('keyup', function(event){
    if(event.key === 'Enter'){
    const inputField = document.getElementById('inputField');
    const li = document.createElement('li');
    li.innerText = inputField.value;
    // li.setAttribute('class', "relative mb-6");
    li.className = "relative mb-6";
    inputField.value = '';
    const button = document.createElement('button');
    button.innerText = "Remove";
    // button.setAttribute('class', "btn btn-sm btn-outline btn-error absolute right-4");
    button.className = "btn btn-sm btn-outline btn-error absolute right-4";
    
    li.appendChild(button);
    
    list.appendChild(li);


}
});

list.addEventListener('click', function(event){
    if(event.target.tagName == "LI"){
        event.target.classList.toggle("line-through");
        // event.target.classList.add("line-through");
    }
    if(event.target.tagName == "BUTTON"){
        event.target.parentElement.remove();
    }
});



document.getElementById('clear-btn').addEventListener('click', function () {
    // while(list.lastElementChild){
    //     list.removeChild(list.lastElementChild);
    // }
    list.innerHTML = '';
})