const count = (start, stop) => {
let current = start;
const timerId = setInterval(() => {
  console.log(current);
  if (current == stop) {
    clearInterval(timerId);
  }
  current++;
  }, 1000);
}

count(5, 15);