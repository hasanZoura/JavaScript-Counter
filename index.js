const theOwner = "ILYA"; //The owner of this project.

let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
  btn.addEventListener("click", function(a) {
    const styles = a.currentTarget.classList;
    if(styles.contains('decrease')) {
      count --;
    } else if(styles.contains('increase')) {
      count ++;
    } else {
      count = 0;
    };
    value.innerHTML = count;
    if(count > 0) {
      value.style.color = '#6dbd66';
    } else if(count < 0) {
      value.style.color = '#E15349';
    } else {
      value.style.color = '#262626';
    };
  });
});