const enterButton =
document.getElementById('enter');
const form = document.getElementById('list')

enterButton.addEventListener('click', () => {
    function newTask() {
        ul = document.createElement('ul'); 
        inputTask = document.getElementById('text').value;
        task = document.createTextNode(inputValue);
        ul.appendChild(task);

        document.getElementById("list").appendChild(li);
          
          document.getElementById("text").value = "";

    }
    

});

// document.querySelector("list").innerHTML = "To Do List";


// removeChild()

// list.removeChild(list.lastChild)


