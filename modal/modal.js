// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

let checkBox = document.getElementById("ifDeadline");
document.getElementById("deadLine").disabled =true;

let listPos =0;
let taskList=[];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}


let ifChecked = () => 
{
  let checkBox = document.getElementById("ifDeadline");
  let result = !checkBox.checked;  // Disable if checked, enable if unchecked
  document.getElementById("deadLine").disabled = result;
}

checkBox.addEventListener("click", ifChecked);

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function invertColor(hex) {
    // Remove the hash at the start if it's there
    hex = hex.replace(/^#/, '');

    // Parse the hex color to get the RGB values
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    // Invert the RGB values
    r = 255 - r;
    g = 255 - g;
    b = 255 - b;

    // Convert the inverted RGB values back to hex
    let invertedColor = ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

    return `#${invertedColor}`;
}

function addToList() 
{
  // Get the value of the input field
  let todoText = document.getElementById("todoInput").value;
  let colorBG = document.getElementById("colorPicker").value;
  let date = document.getElementById("deadLine").value
  console.log(date);

  console.log(colorBG);
  let textColor=invertColor(colorBG);

  // Check if input is not empty
  if (todoText.trim() !== "") 
  {
    // Create a new list item
    let listItem = document.createElement("li");
    listItem.id = "pos"+listPos; 
    // Set the text of the list item

    listItem.style.backgroundColor = colorBG; 
    listItem.style.color = textColor; 
    listItem.classList.add = "oswaldFONT"; 
    
    listItem.innerHTML = '<input type="checkbox" id="'+ listPos+'">'+todoText+ '<div class="endBox">' + date+ "</div>";
    // Add the list item to the to-do list
    document.getElementById("toDoList").appendChild(listItem);

    // Clear the input field
    let taskItems =[todoText, colorBG, date, listPos];
    
    taskList.push(taskItems);
    console.log(taskList[listPos])
    listPos++; 
    console.log();
       
    document.getElementById("todoInput").value = "";
    document.getElementById("deadLine").value = "";
    document.getElementById("ifDeadline").checked = false;
    document.getElementById("deadLine").disabled = true;
    
    modal.style.display = "none";

    console.log(document.getElementById("toDoList").getElementsByTagName("li").length);
  }
}

function cleanList() {
  const listItems = document.getElementById("toDoList").getElementsByTagName("li");

  for (let i = 0; i < listItems.length; i++) {
    const checkbox = listItems[i].querySelector("input[type='checkbox']");

    if (checkbox && checkbox.checked) {
      console.log("Checkbox with ID " + checkbox.id + " is checked");

      listItems[i].remove();
      i--; // Decrement `i` to account for the removed item
    }
  }
}

function toJSON()
{
  JSON.stringify(listItems)

}
