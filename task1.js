parityCheck = () => {
    const arr = [0, null, NaN, 0, 1, 2, 4, "str"];

    let even = 0;
    let odd = 0;
    let zero = 0;

  for (let item of arr) {
    if (typeof item !== 'number' || isNaN(item)) {
      continue;
    }
    if (item === 0) {
      zero++;
    } else if (item % 2 === 0 ) {
      even++;
    } else {
      odd++;
    }
  }

  console.log("четных - " + even);
  console.log("нечетных - " + odd);
  console.log("нулей - " + zero);
}

parityCheck();