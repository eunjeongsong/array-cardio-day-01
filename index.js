const inventors = [
  { firstName: "Bhaskar", lastName: "Das", year: 1571, passed: 1630 },
  { firstName: "Mohit", lastName: "Raj", year: 1473, passed: 1543 },
  { firstName: "Manish", lastName: "Pundir", year: 1858, passed: 1947 }
];

const people = [
  "Bhaskar, Das",
  "Mohit, Raj",
  "Manish, Pundir",
  "Pundir, Das",
  "Das, Raj",
  "Bhaskar, Pundir",
  "Das, Raj"
];

/**
 * year가 1500 이상 1600 이하인 사람 구하기.
 */
const fifteen = inventors.filter(
  inventor => inventor.year >= 1500 && inventor.year <= 1600
);
// console.log(fifteen);

/**
 * `${inventor.firstName}, ${inventor.lastName}` 형태로 출력하기.
 */
const fullNames = inventors.map(
  inventor => `${inventor.firstName}, ${inventor.lastName}`
);
// console.log(fullNames);

/**
 * year 를 기준으로 오름차순 정렬하기.
 */
const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
// console.log(ordered);

/**
 * 모든 inventor 의 살아 숨쉰 년도의 총합 구하기.
 */
const totalYears = inventors.reduce((total, inventor) => {
  return total + inventor.passed - inventor.year;
}, 0);
// console.log(totalYears);

/**
 * year 를 기준으로 더 오랫동안 숨쉰 사람을 오름차순 정렬하기.
 */
const oldest = inventors.sort((a, b) => {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  return lastGuy > nextGuy ? -1 : 1;
});
// console.log(oldest);

/**
 * https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
 * Need! NodeList to Arrary.
 *  1) const links = Array.from(category.querySelectorAll("a"));
 *  2) const links = [...category.querySelectorAll("a")];
 */
// const category = document.querySelector("mw-category");
// const links = [...category.querySelectorAll("a")];

// const de = links
//   .map(link => link.textContent)
//   .fiilter(streetName => streetName.includes("de"));

/**
 * lastName 을 기준으로 오름차순 Sorting 하기.
 */
const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(", ");
  const [bLast, bFirst] = nextOne.split(", ");
  return aLast > bLast ? 1 : -1;
});
// console.log(alpha);

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "bike",
  "walk",
  "car",
  "walk",
  "bike"
];

/**
 * 중복된 데이터 counting 하기.
 */
const transportation = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
console.log(transportation);
