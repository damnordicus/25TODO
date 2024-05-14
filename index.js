let todoList = []; // global array for the ToDo list

function addItemToList (item) {
    // Takes in a new item "item" as a string and adds it to the end of the List
    todoList.push(item);
    // Calls addElement and passes the global array if items
    addElement(todoList);
} 

function addElement (list){
    // establishes a newItem that is a button
    const newItem = document.createElement("button");
    // makes the text for the button whatever the last items is on the list
    const buttonText =  document.createTextNode(list[list.length - 1]);
    // adds an eventListener to each new button to allow you to delete bu clicking it
    newItem.addEventListener("click", function() {
        newItem.parentNode.removeChild(newItem);
    })
    // adds the text from the list to the button
    newItem.appendChild(buttonText);
    // adds the button to the div list
    document.getElementById("itemList").appendChild(newItem);
}

function submitHandle(event){
    event.preventDefault();
    // takes the input text from the textbox and passes it to
    // addItemToList as a string
    addItemToList(document.getElementById("newItem").value);
}

// event listener for the submit button to handle a click
document.getElementById("addItemButton").addEventListener("click", submitHandle);