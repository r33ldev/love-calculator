function enableDisable(crushNameInput) {
  var btnSubmit = document.getElementById('loveSubmit');
  if (testerNameInput.value.trim() != '' && crushNameInput.value.trim() != '') {
    loveSubmit.disabled = false;
  } else {
    loveSubmit.disabled = true;
  }
}

document.querySelector('option').style.color = 'pink';
function scoreCalc() {
  var crushName = document.getElementById('crushNameInput').value;
  var testName = document.getElementById('testerNameInput').value;
  let names = crushName + testName;

  const l = (names.match(/l/g) || []).length;
  const o = (names.match(/o/g) || []).length;
  const v = (names.match(/v/g) || []).length;
  const e = (names.match(/e/g) || []).length;
  const t = (names.match(/t/g) || []).length;
  const r = (names.match(/r/g) || []).length;
  let u = (names.match(/u/g) || []).length;

  let loveStrScore = String(l + o + v + e);
  let trueScore = String(t + r + u + e);

  let loveScore = loveStrScore + trueScore;

  document.getElementById('contents').style.display = 'none';
  document.getElementById('contentsResult').style.display = 'block';
  document.getElementById('scoreBoard').innerText = loveScore + '%';
  document.getElementById('testedName').innerText = testName;
  document.getElementById('crushedName').innerText = crushName;

  if (loveScore <= 10) {
    document.getElementById('scoreMessage10').style.display = 'block';
  } else if (loveScore <= 30) {
    document.getElementById('scoreMessage30').style.display = 'block';
  } else if (loveScore > 30 && loveScore <= 50) {
    document.getElementById('scoreMessage50').style.display = 'block';
  } else if (loveScore > 50 && loveScore <= 70) {
    document.getElementById('scoreMessage70').style.display = 'block';
  } else if (loveScore > 70 && loveScore <= 80) {
    document.getElementById('scoreMessage80').style.display = 'block';
  } else if (loveScore > 80 && loveScore <= 100) {
    document.getElementById('scoreMessage100').style.display = 'block';
  }
  document.getElementById('messageTestedName10').innerText = testName;
  document.getElementById('messageCrushName10').innerText = crushName;
  document.getElementById('messageTestedName30').innerText = testName;
  document.getElementById('messageCrushName30').innerText = crushName;
  document.getElementById('messageTestedName50').innerText = testName;
  document.getElementById('messageCrushName50').innerText = crushName;
  document.getElementById('messageTestedName70').innerText = testName;
  document.getElementById('messageCrushName70').innerText = crushName;
  document.getElementById('messageTestedName80').innerText = testName;
  document.getElementById('messageCrushName80').innerText = crushName;
  document.getElementById('messageCrushName100').innerText = crushName;
}

// generate png image of the score
const shareScore = (_) => {
  var crushName = document.getElementById('crushNameInput').value;
  var testName = document.getElementById('testerNameInput').value;
  console.log('share');
  const canvas = document.getElementById('canvas');
  function fillCanvas(imagePath, domain, crushName, testName, percentage) {
    var circle_canvas = document.getElementById('canvas');
    var context = circle_canvas.getContext('2d');

    // Draw Image function
    var img = new Image();
    img.src = imagePath;
    loveImage = new Image();
    loveImage.src = '../assets/img/heart.jpg';
    img.onload = function () {
      context.drawImage(img, 0, 0);
      context.lineWidth = 1;
      context.fillStyle = 'rgb(234, 100, 167)';
      context.lineStyle = 'rgb(234, 100, 167)';
      context.font = '12px Ubuntu';
      context.fillText(domain, 70, 285);

      context.fillStyle = '#f87e9b';
      context.lineStyle = '#f87e9b';
      context.font = '23px Ubuntu';
      context.fillText(crushName, 70, 60);

      context.fillStyle = 'red';
      context.lineStyle = 'red';
      context.font = '50px cursive';
      context.fillText(percentage, 340, 90);

      context.drawImage(loveImage, 150, 90, 80, 60);

      context.fillStyle = '#f87e9b';
      context.lineStyle = '#f87e9b';
      context.font = '23px Ubuntu';
      context.fillText(testName, 210, 200);

      context.fillStyle = '#f87e9b';
      context.lineStyle = '#f87e9b';
      context.font = '17px Ubuntu';
      context.fillText(`Percentage of love is ${percentage} 💝💝 `, 70, 240);
    };
  }
  fillCanvas(
    '../assets/img/love_card.png',
    'Love Calculator at https://calulate.lol',
    crushName,
    testName,
    document.getElementById('scoreBoard').innerText
  );

  const canvasImage = canvas.toDataURL('image/png');
  // const convertedImage = new Image();
  //   convertedImage.src = canvasImage;
  // console.log('convertedImage', convertedImage);

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  //Usage example:
  var file = dataURLtoFile(canvasImage, 'love.png');
  console.log(file);

  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    navigator
      .share({
        files: [file],
        title: 'Love Calculator',
        text: 'Calculate your love percentage by going to https://calulate.lol',
      })
      .then(() => console.log('Share was successful.'))
      .catch((error) => console.log('Sharing failed', error));
  } else {
    console.log(`Your system doesn't support sharing files.`);
  }
};
