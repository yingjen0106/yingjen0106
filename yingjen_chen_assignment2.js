const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

//doubles
let arr1 = [];
for (const elem of itemsObject) {
  let val = {};
  val["quantity"] = elem["quantity"] * 2;
  val["price"] = elem["price"] * 2;
  arr1.push(val);
}

console.log(arr1);

//contains item  quantity > 2 & price > 300
let arr2 = [];
for (const elem of itemsObject) {
  if (elem["quantity"] > 2 && elem["price"] > 300) arr2.push(elem);
}

console.log(arr2);

// total value
const sum = itemsObject
  .map((item) => item.price)
  .reduce((prev, curr) => prev + curr, 0);

console.log(sum);

// string
const string =
  " Perhaps The Easiest-to-understand  Case  For Reduce Is  To Return The Sum Of  All The Elements In  An Array ";

const newStr = string.replace(/[^a-zA-Z ]/g, "");
const finalStr = newStr.replace(/\s+/g, " ").trim().toLowerCase();

console.log(finalStr);
