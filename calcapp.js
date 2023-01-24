const btn = document.getElementById("calc");
const wBtn = document.getElementById("weightCalc");

const calculate = () => {
  const weightValues = Array.from(
    document.querySelectorAll("#weight"),
    (weight) => +weight.value
  );
  const gradeValues = Array.from(
    document.querySelectorAll("#grade"),
    (grade) => +grade.value
  );

  let gradeSum = 0;
  let numOf = 0;
  let gradeAvg = 0;

  for (const grade of gradeValues) {
    numOf++;
    gradeAvg = (gradeSum += grade) / numOf;
  }

  document.getElementById("avgResult").textContent = gradeAvg;
};

btn.addEventListener("click", calculate);

const weightedAverage = () => {
  const weightValues = Array.from(
    document.querySelectorAll("#weight"),
    (weight) => +weight.value
  );
  const gradeValues = Array.from(
    document.querySelectorAll("#grade"),
    (grade) => +grade.value
  );

  const weightValueSum = weightValues.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const multiplyValues = (weightValues, gradeValues) => {
    return resultMultiply = weightValues.map(
      (weight, index) => weight * gradeValues[index]
    );
  };

  let sum = 0;

  for (const value of multiplyValues(weightValues, gradeValues)) {
    sum += value;
  }
 
  const finalResult = (sum / weightValueSum).toFixed(2);

  document.getElementById("weightedResult").textContent = finalResult;
};

wBtn.addEventListener("click", weightedAverage);
