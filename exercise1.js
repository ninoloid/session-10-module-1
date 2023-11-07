// bikin function untuk convert dari excel header ke number
// misalnya A -> 1, B -> 2, Z -> 26, AA -> 27, AB -> 28

// max 26 -> untuk 1 alfabet
// kalau 2 alfabet berarti 26 * 26 max
// kalau 3 alfabet berarti 26 * 26 * 26 max

const convertExcelColumnTitleToNumber = (title) => {
  // kalau dapet input A, maka yg harusnya 1 kalau dari charcode valuenya 65
  if (!title || typeof title !== "string") {
    throw new Error("Invalid Input");
  }

  const uppercaseTitle = title.toUpperCase();

  let result = 0;
  for (let i = 0; i < uppercaseTitle.length; i++) {
    const currentCharCodeAt = uppercaseTitle[i].charCodeAt() - 64;

    // misalnya CB
    // untuk yg B, bisa kita langsung return 66 (charcodeat) - 64 -> 2
    // untuk yg C, kita kaliin 26

    // misal CBA
    // Math.pow(26, 2)
    if (i === uppercaseTitle.length - 1) {
      result += currentCharCodeAt;
    } else {
      result += Math.pow(26, i + 1) * currentCharCodeAt;
    }
  }

  return result;
};

// const A = convertExcelColumnTitleToNumber("A");
// console.log(A);

// const Z = convertExcelColumnTitleToNumber("Z");
// console.log(Z);

// const AA = convertExcelColumnTitleToNumber("AA");
// console.log(AA);

// const AZ = convertExcelColumnTitleToNumber("AZ");
// console.log(AZ);

// const ZZ = convertExcelColumnTitleToNumber("ZZ");
// console.log(ZZ);

// const AAA = convertExcelColumnTitleToNumber("AAA");
// console.log(AAA);

const AB = convertExcelColumnTitleToNumber("AB");
console.log(AB);

const BA = convertExcelColumnTitleToNumber("BA");
console.log(BA);
