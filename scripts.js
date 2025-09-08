const addTaskBtn = document.querySelector("#addTaskBtn");
const taskInput = document.querySelector("#taskInput");
const importanceInput = document.querySelector("#importance");

let taskText = "";
let importanceNum = 0;
let highImp = [];
let medImp = [];
let lowImp = [];

addTaskBtn.addEventListener("click", function () {
  taskText = taskInput.value;
  importanceNum = Number(importanceInput.value);
  console.log(importanceNum)
  let importanceText = "";

  if (taskText === "") {
    alert("Please Enter a Task!");
    return;
  }

  const li = document.createElement("li");
  li.classList.add("task");

  const p = document.createElement("p");
  p.textContent = taskText;

  const btn = document.createElement("button");
  btn.innerText = "Done";
  btn.addEventListener("click", function(){
    li.remove();
  })

  li.appendChild(p);
  li.appendChild(btn);

  switch (importanceNum) {
    case (1):
      importanceText = "low";
      break
    case (2):
      importanceText = "med";
      break
    case (3):
      importanceText = "high";
      break
  }
  console.log(importanceText)
  const ul = document.querySelector(`#${importanceText} .taskList`);
  ul.appendChild(li)
});
