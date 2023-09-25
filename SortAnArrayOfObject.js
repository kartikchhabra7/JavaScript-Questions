let Arr = [
  {
    name: "express",
    id: 1,
  },
  {
    name: "react",
    id: 4,
  },
  {
    name: "noSql",
    id: 3,
  },
  {
    name: "mongo",
    id: 2,
  },
  {
    name: "sql",
    id: 5,
  },
];

const sortArrayObject = (array) => {
  let newArr = array.sort((a, b) => {
    if (a.id < b.id) {
      return -1;
    }
  });
  return newArr;
};

let result = sortArrayObject(Arr);
console.log(result);
