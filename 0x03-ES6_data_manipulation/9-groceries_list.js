export default function groceriesList() {
  const array = [['Apples', 10], ['Tomatoes', 10], ['Pasta', 1], ['Rice', 1], ['Banana', 5]];
  const groceries = new Map();
  for (const i of array) groceries.set(i[0], i[1]);
  return groceries;
}
