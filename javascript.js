function enableDisable(crushNameInput) {
  var btnSubmit = document.getElementById("loveSubmit");
  if (testerNameInput.value.trim()  != "" && crushNameInput.value.trim() != "" ) {
    loveSubmit.disabled = false;
  }else {
    loveSubmit.disabled = true;
  }
};

var loveScore = Math.floor(Math.random() * 100) + 1;

function scoreCalc() {
  var crushName = document.getElementById("crushNameInput").value;
  var testName = document.getElementById("testerNameInput").value;
  document.getElementById("contents").style.display = "none";
  document.getElementById("contentsResult").style.display = "block";
  document.getElementById("scoreBoard").innerText = loveScore + "%"
  document.getElementById("testedName").innerText = testName;
  document.getElementById("crushedName").innerText = crushName;

  if (loveScore <= 10 ) {
    document.getElementById("scoreMessage10").style.display = "block";
  } else if(loveScore <= 30 ){
    document.getElementById("scoreMessage30").style.display = "block";
  }else if(loveScore > 30 && loveScore <= 50) {
    document.getElementById("scoreMessage50").style.display = "block";
  }else if(loveScore > 50  && loveScore <= 70 ) {
    document.getElementById("scoreMessage70").style.display = "block";
  }else if(loveScore > 70  && loveScore <= 80 ) {
    document.getElementById("scoreMessage80").style.display = "block";
  }else if(loveScore > 80  && loveScore <= 100 ) {
    document.getElementById("scoreMessage100").style.display = "block";
  }
  document.getElementById("messageTestedName10").innerText = testName;
  document.getElementById("messageCrushName10").innerText = crushName;
  document.getElementById("messageTestedName30").innerText = testName;
  document.getElementById("messageCrushName30").innerText = crushName;
  document.getElementById("messageTestedName50").innerText = testName;
  document.getElementById("messageCrushName50").innerText = crushName;
  document.getElementById("messageTestedName70").innerText = testName;
  document.getElementById("messageCrushName70").innerText = crushName;
  document.getElementById("messageTestedName80").innerText = testName;
  document.getElementById("messageCrushName80").innerText = crushName;
  document.getElementById("messageCrushName100").innerText = crushName;
};
