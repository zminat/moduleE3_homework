const getAddFunction = x => {
  return y => {
    return x + y
  }
};

const addFunction = getAddFunction(9);
const result = addFunction(4);

console.log(result);