const button = document.getElementById("enter");

button.addEventListener("click",()=>{
    const input = document.getElementById("new-todo").value 
    const listItem = document.createElement("li")
    const completedList = document.getElementById("completed_list")
    listItem.innerText = input;

    const deleteBtn = document.createElement("button")
    deleteBtn.innerText ="Delete"

    const checkBox = document.createElement("input")
    checkBox.type = "checkbox"

    listItem.appendChild(deleteBtn);
    listItem.appendChild(checkBox);
    list.appendChild(listItem)
    
        deleteBtn.addEventListener("click",()=>{
            list.removeChild(listItem);
        })

    const completedItem = document.createElement("li")
    completedItem.innerText = input;
    const deleteCompletedBtn = document.createElement("button")
    deleteCompletedBtn.innerText ="Delete"
    completedItem.appendChild(deleteCompletedBtn)

        deleteCompletedBtn.addEventListener("click",()=>{
            completedList.removeChild(completedItem);
        })

    
        checkBox.addEventListener("click",()=>{
            
            listItem.style.backgroundColor = "#d9dad7";
            completedItem.style.backgroundColor = "white";
            completedList.appendChild(completedItem)
        })
})

const dateButton = document.getElementById("date");
const showDate = document.getElementById("show_date");

dateButton.addEventListener("click", () => {
    showDate.innerText = "";
    const date = document.createElement("p");
    date.innerText = Date();
    showDate.appendChild(date);
});§