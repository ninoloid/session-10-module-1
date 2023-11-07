// Given a non-empty array of integers nums,
// every element appears twice except for one. Find that single one.

// inputnya array of integer
// setiap angka akan muncul sebanyak 2 kali, kecuali 1 angka unique
// outputnya angka yg unique
// akan ditampung dulu ke dalem array supaya kalau yg unique lebih dari 1 pun bisa

const findSingle = (arr) => {
  const dict = {};
  const unique = [];

  // misal input [3,3,2,2,1]
  // {
  //   '3': 2,
  //   '2': 2,
  //   '1': 1
  // }
  for (const item of arr) {
    dict[item] = (dict[item] || 0) + 1;
    // if (!dict[item]) {
    //   dict[item] = 1;
    // } else {
    //   dict[item] += 1;
    // }
  }

  for (entry in dict) {
    if (dict[entry] === 1) {
      unique.push(parseInt(entry));
    }
  }

  return unique[0];
};

console.log(findSingle([3, 3, 2, 2, 1, 1, 8, 7, 8]));
