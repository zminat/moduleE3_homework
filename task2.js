primeNumberCheck = () => {
  let number = prompt('Введите любое число для проверки');

  if (number < 0 || number > 1000) {
    console.log("Данные не верны");
    return;
  }

  if (number == 0 || number == 1){
    console.log("Не является ни простым, ни составным числом");
    return;
  }

  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      console.log("Число является составным");
      return;
    }
  }

  console.log("Число является простым");
};

primeNumberCheck();