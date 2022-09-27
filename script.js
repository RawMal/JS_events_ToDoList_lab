const enterButton =
document.getElementById('enter');
// const form = document.getElementById('list')

enterButton.addEventListener('click', () => {
    const ul = document.getElementById("list");

        const input = document.getElementById('new-todo').value;
        
        //Lists Item
        const newListItem = document.createElement("li");
        newListItem.innerText = input;

        //creating the delete Button

        const deleteButton = document.createElement('button');
        deleteButton.innerText = "Delete";

        deleteButton.addEventListener("click", () =>{
            ul.removeChild(task);

        })

        task.appendChild(task);
        

        

        

        form.appendChild(task);
    }
    );


