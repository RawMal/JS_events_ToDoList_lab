const enterButton =
document.getElementById('enter');
// const form = document.getElementById('list')
const showDateButton = document.getElementById("show-date");
const dateText = document.getElementById("date")

enterButton.addEventListener('click', () => {
    const ul = document.getElementById("list");

        const input = document.getElementById('new-todo').value;
        
        //Lists Item
        const newListItem = document.createElement("li");
        newListItem.innerText = input;

        //creating the delete Button
        const deleteButton = document.createElement('button');
        deleteButton.innerText = "Delete";
        
        //Listening to the delete
        deleteButton.addEventListener("click", () =>{
            ul.removeChild(newListItem);
        });

        newListItem.appendChild(deleteButton);

        ul.appendChild(newListItem);
    }
    );

    showDateButton.addEventListener("click", () => {
        dateText.innerText = Date();
    });


