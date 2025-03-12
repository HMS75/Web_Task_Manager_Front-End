const inputBox = document.getElementById("to-do-text");
const listContainer = document.getElementById("list-items");

function create() { 
    if (inputBox.value === '')
       { alert("Please enter your to do text!"); }
    else
        { let li = document.createElement("li");
          li.innerHTML = inputBox.value;
          listContainer.appendChild(li);
          let cross = document.createElement("cross");
          cross.innerHTML = "\u00d7";
          li.appendChild(cross);
        }
    inputBox.value = ''; 
    saveData();
}

listContainer.addEventListener("click", function(e){
  if (e.target.tagName === "LI") 
    {e.target.classList.toggle("checked");
     saveData();
    }
  else if (e.target.tagName === "CROSS")
    {e.target.parentElement.remove();
     saveData();
    }
}, false);

//to store our tasks

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML );
}

//to display the data

function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showData();