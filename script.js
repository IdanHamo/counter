const buttons = Array.from(document.getElementsByClassName("btn"));
const counter = Array.from(document.getElementsByClassName("counter"))[0];
console.log(counter);
console.log(buttons);
let count = 0;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.classList.contains("decrease")) {
      count--;
    } else if (e.target.classList.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      counter.style.color = "#5254CD";
    } else if (count < 0) {
      counter.style.color = "#C52434";
    } else {
      counter.style.color = "black";
    }
    counter.innerText = count;
  });
});
