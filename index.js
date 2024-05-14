let todoList = []; // global array for the ToDo list
let completedItems = []; // global array for completed tasks

function addItemToList (item) {
    // Takes in a new item "item" as a string and adds it to the end of the List
    todoList.push(item);
    // Calls addElement and passes the global array if items
    addElement(todoList);
} 

function addElement (list){
    // if this is the first item being added to the main list
    if(list.length === 1){
        // create the instructions 
        const instruct = document.createElement("h2");
        instruct.textContent= "Click the item to delete it!";
        instruct.classList.add("h2");
        instruct.id = "instruction";
        document.getElementById("itemList").appendChild(instruct);
    }
    // establishes a newItem that is a button
    const newItem = document.createElement("button");
    // makes the text for the button whatever the last items is on the list
    const buttonText =  document.createTextNode(list[list.length - 1]);
    // adds an eventListener to each new button to allow you to delete bu clicking it
    newItem.addEventListener("click", function() {
        // add the text from the button to the completed array
        completedItems.push(newItem.innerHTML);
        // add the same item "text" to the completed list view
        updateCompletedContainer(newItem.innerHTML);
        // remove item from list
        newItem.parentNode.removeChild(newItem);
        // remove item from the array
        list.pop();
        // if there are no more tasks, delete the instructions
        if(list.length === 0){
            const instruct = document.getElementById("instruction");
            instruct.parentNode.removeChild(instruct);
        }
       // localStorage.setItem("tasks", JSON.stringify(list));
    })
    
    // adds the text from the list to the button
    newItem.appendChild(buttonText);
    // adds the button to the div list
    document.getElementById("itemList").appendChild(newItem);
}

function submitHandle(event){
    event.preventDefault();

    if(document.getElementById("newItem").value === ""){
        alert("Enter a new task!");
        return;
    }
    // takes the input text from the textbox and passes it to
    // addItemToList as a string
    addItemToList(document.getElementById("newItem").value);
    document.getElementById("newItem").value = "";
}

// event listener for the submit button to handle a click
document.getElementById("addItemButton").addEventListener("click", submitHandle);
// event listener for pressing the enter key
document.getElementById("newItem").addEventListener("keydown", function(e){
    if(e.key === "Enter"){
       submitHandle(e);
    }
})

function updateCompletedContainer(item){
    const newItem = document.createElement("p");
    // makes the text for the button whatever the last items is on the list
    newItem.textContent = item;
    // adds the button to the div list
    document.getElementById("completed-container").appendChild(newItem);
}

// function loadListFromStorage(){
//     const storedList = localStorage.getItem("tasks");
//     if(storedList){
//         return JSON.parse(storedList);
//     }else{
//         return [];
//     }
// }

// window.addEventListener("load", function(){
//     const list = loadListFromStorage();
//     list.forEach(function(item) {
//         addElement([item]);
//     });
// })