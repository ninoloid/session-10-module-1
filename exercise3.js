// palindrome
// abcba ===  abcba yg udah di reverse
// abcba <=> abcba true
// abcb <=> bcba false

// kalau di anagram, abcb <=> bcba ini akan true

// abcb akan jd abbc, bcba juga akan jadi abbc, lalu di compare
const isAnagram = (s, t) => {
  if (!s || !t || s.length !== t.length) return false;

  const sortedS = s.split("").sort().join("");
  const sortedT = t.split("").sort().join("");

  return sortedS === sortedT;
};

const firstExample = isAnagram("anagram", "nagaram");
const secondExample = isAnagram("rat", "car");

console.log(firstExample);
console.log(secondExample);
