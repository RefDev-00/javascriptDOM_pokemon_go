const p1Button = document.querySelector("#p1-button");
const p2Button = document.querySelector("#p2-button");
const p1Display = document.querySelector("#p1-display");
const p2Display = document.querySelector("#p2-display");
const buttonReset = document.querySelector("#reset");
const buttonGamePoint = document.querySelector("#winpoint");

let p1Score = 0;
let p2Score = 0;
let winPoint = 3;
let isGamePoint = false;

p1Button.addEventListener("click", function () {
  if (isGamePoint == false) {
    p1Score += 1;
    if (p1Score === winPoint) {
      isGamePoint = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function () {
  if (isGamePoint == false) {
    p2Score += 1;
    if (p2Score === winPoint) {
      isGamePoint = true;
    }
    p2Display.textContent = p2Score;
  }
});

function reset() {
  p1Score = 0;
  p2Score = 0;
  isGamePoint = false;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
}
buttonReset.addEventListener("click", reset);

buttonGamePoint.addEventListener("change", function () {
  winPoint = parseInt(this.value);
  reset();
});
