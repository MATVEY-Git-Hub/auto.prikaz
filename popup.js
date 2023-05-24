const inputFieldS = document.getElementById('myInput2'); //смещение
const inputField1 = document.getElementById('myInput3'); //неверный начало
const inputField2 = document.getElementById('myInput4'); //неверный конец

const buttons = document.querySelectorAll('.clipboard-btn');

function copy() {
  const orderOffset = Number(inputFieldS.value); // смещение
  let badOrderNumber = Number(inputField1.value); // номер первого неправильного приказа
  let badFinishOrderNumber = Number(inputField2.value); // номер последнего неправильного приказа

  if (badFinishOrderNumber < badOrderNumber) {
    Toastify({
      text: 'Как последний приказ может быть меньше первого?',
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #cc2e55, #cc2e55)",
      },
      onClick: function () { } // Callback after click
    }).showToast();
    return;
  }

  let stroke = `Приказы:\n`
  console.log(inputField1.value, inputField2.value, inputFieldS.value)

  while (badOrderNumber < badFinishOrderNumber + 1) {
    stroke += `#${badOrderNumber} -> #${badOrderNumber + orderOffset}\n`;
    badOrderNumber++;
  }
  console.log(stroke)
  navigator.clipboard.writeText(stroke);
  Toastify({
    text: "Приказы скопированы!",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #2ecc71, #2ecc71",
    },
    onClick: function () { } // Callback after click
  }).showToast();
}
