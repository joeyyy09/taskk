

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
  event.target.classList.add("dragging");
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text/plain");
  var draggedItem = document.getElementById(data);
  event.target.appendChild(draggedItem);
  draggedItem.classList.remove("dragging");
  alert("Item dropped successfully!");
}

function resetContainers() {
  var container1 = document.getElementById("container1");
  var container2 = document.getElementById("container2");
  while (container2.firstChild) {
    container1.appendChild(container2.firstChild);
  }
}
