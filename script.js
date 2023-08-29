const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Add Tasks
function addTask(){
	if(inputBox.value === '') {
		alert("You must write something!");
	}
	else{
		let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "&times";
		li.appendChild(span);
	}
	inputBox.value = "";
	saveData();
}

// Enter to add task
inputBox.addEventListener("keypress", function(e){
	if (e.key === "Enter"){ 
		e.preventDefault();
	  addTask();
	  saveData();
	}
} )

//Done (checked) when clicked and remove on click
listContainer.addEventListener("click", function(e){
	if(e.target.tagName === "LI") {
		e.target.classList.toggle("checked");
		saveData();
	}
	else if(e.target.tagName === "SPAN"){
		e.target.parentElement.remove();
		saveData();
	}
}, false);

// Save to local storage
function saveData(){
	localStorage.setItem("data", listContainer.innerHTML);
}

// Display saved data
function showTasks(){
	listContainer.innerHTML = localStorage.getItem("data");
}
showTasks();