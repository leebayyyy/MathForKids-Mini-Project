    let currentOp = "+";
  let n1 = 0;
  let n2 = 0;
  let correctCount = 0;
  let triedCount = 0;

  const num1El = document.getElementById("num1");
  const num2El = document.getElementById("num2");
  const opSignEl = document.getElementById("opSign");
  const answerInput = document.getElementById("answerInput");
  const resultEl = document.getElementById("result");
  const scoreEl = document.getElementById("score");
  const opButtons = document.querySelectorAll(".op-btn");

  //CORE 1
  //CORE 1
  //CORE 1
  //CORE 1
  //CORE 1
  //CORE 1
  function randomNum() {
    return Math.floor(Math.random() * 11);
  }


  function newProblem() {
    if (currentOp === "+") {
      n1 = randomNum();
      n2 = randomNum();
    }
    else if (currentOp === "-") {
      
      n1 = randomNum();
      n2 = randomNum();
      if (n2 >= n1) {
        let temp = n1;
        n1 = n2;
        n2 = temp;
      }
      if (n1 === n2) n1 = n1 + 1; 
    }
    else if (currentOp === "×") {
      n1 = randomNum();
      n2 = randomNum();
    }
    else if (currentOp === "÷") {   
      
      n2 = Math.floor(Math.random() * 9 + 1) ;     
      let multiplier = Math.floor(Math.random() * 9 + 1); 
      n1 = n2 * multiplier;
      if (n1 <= n2) n1 = n2 * 2;
    }

    num1El.textContent = n1;
    num2El.textContent = n2;
    opSignEl.textContent = currentOp;
    answerInput.value = "";
    resultEl.textContent = "";
    resultEl.className = "";
  }


  function getCorrectAnswer() {
    if (currentOp === "+") return n1 + n2;
    if (currentOp === "-") return n1 - n2;
    if (currentOp === "×") return n1 * n2;
    if (currentOp === "÷") return n1 / n2;
  }

  //CORE 1.2
  //CORE 1.2
  //CORE 1.2
  //CORE 1.2
  //CORE 1.2
  //CORE 1.2
  //CORE 1.2
  opButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      opButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentOp = btn.dataset.op;
      newProblem();
    });
  });

  
  //CORE 
  //CORE 
  //CORE 
  //CORE 
  //CORE 
  //CORE 
  //CORE 
  document.getElementById("checkBtn").addEventListener("click", () => {
    const userAnswer = Number(answerInput.value);
    const correctAnswer = getCorrectAnswer();

    triedCount++;

    if (answerInput.value !== "" && userAnswer === correctAnswer) {
      correctCount++;
      resultEl.textContent = "CORRECT! 🎉";
      resultEl.className = "correct";
    } else {
      resultEl.textContent = "WRONG! The answer was " + correctAnswer;
      resultEl.className = "wrong";
    }

    //CORE 
    //CORE 
    //CORE 
    //CORE 
    //CORE 
    //CORE 
    //CORE 
    scoreEl.textContent = "Score: " + correctCount + " correct / " + triedCount + " tried";

    setTimeout(newProblem, 2000);
  });

  
  document.getElementById("generateBtn").addEventListener("click", () => {
    newProblem();
  });

  
  newProblem();