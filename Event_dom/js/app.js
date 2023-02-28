// Mmebuat generate warna random menggunakan addeventlistener
// const button = document.querySelector("button");
// const h1 = document.querySelector("h1");
// const body = document.body;

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `RGB(${r}, ${g}, ${b})`;
};

// button.addEventListener("click", () => {
//   const newColorBackground = generateRandomColor();
//   body.style.background = newColorBackground;
//   h1.innerHTML = newColorBackground;
// });

const buttons = document.querySelectorAll("button");

for (let button of buttons) {
  button.addEventListener("click", () => {
    button.style.background = generateRandomColor();
    button.style.color = generateRandomColor();
    button.style.border = generateRandomColor();
  });
}
