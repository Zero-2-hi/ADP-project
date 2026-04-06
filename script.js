function showProfile() {

document.getElementById("homeSection").style.display = "none";

document.getElementById("profileSection").style.display = "block";

}

function showHome() {

document.getElementById("homeSection").style.display = "block";

document.getElementById("profileSection").style.display = "none";

}
function addTask(){

let taskInput = document.getElementById("taskInput");

let taskText = taskInput.value;

if(taskText === ""){
alert("Please enter a task");
return;
}

let li = document.createElement("li");

li.textContent = taskText;

let deleteBtn = document.createElement("button");

deleteBtn.textContent = "Delete";

deleteBtn.onclick = function(){
li.remove();
};

li.appendChild(deleteBtn);

document.getElementById("taskList").appendChild(li);



}
