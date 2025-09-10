const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.getElementById("add-btn");

function addTask() {
  const text = inputBox.value.trim();
  if (text === '') {
    alert("Você deve escrever algo!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = text; 
  const span = document.createElement("span");
  span.textContent = "\u00d7";
  li.appendChild(span);
  listContainer.appendChild(li);

  inputBox.value = "";
  saveData();
}


addBtn.addEventListener("click", addTask);

inputBox.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    addTask();
  }
});


listContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  const data = localStorage.getItem("data");
  if (data) listContainer.innerHTML = data;
}


window.addEventListener("DOMContentLoaded", showTask);
