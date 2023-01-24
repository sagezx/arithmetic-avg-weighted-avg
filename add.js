const  addBtn = document.querySelector(".add");
const input = document.querySelector(".inpt");


function removeInput() {
  this.parentElement.remove();
}
const addInput = () => {
  const grade = document.createElement("input");
  grade.type="number";
  grade.placeholder="Enter your grade";
  grade.id="grade"
  
  const weight = document.createElement("input");
  weight.type="number";
  weight.placeholder="Enter weight of grade";
  weight.id="weight";


  const btn=document.createElement("a");
  btn.className = "delete";
  btn.innerHTML = "&times";
  
  btn.addEventListener("click", removeInput);

  const flex=document.createElement("div");
  flex.className="flex";

  input.appendChild(flex);
  flex.appendChild(grade);
  flex.appendChild(weight);
  flex.appendChild(btn);
}


addBtn.addEventListener("click", addInput);
