// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// ForEach Basics

// 1. Log each name and each province
names.forEach(name => console.log(name));
provinces.forEach(province => console.log(province));

// 2. Log each name with a matching province in the format "Name (Province)"
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// Uppercase Transformation

// Create a new array of province names in all uppercase
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

// Name Lengths

// Create a new array that contains the length of each name
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// Sorting

// Alphabetically sort the provinces
const sortedProvinces = [...provinces].sort(); // Using spread operator to avoid mutating the original array
console.log(sortedProvinces);

// Filtering Cape

// Remove provinces containing "Cape" and log the count of remaining provinces
const nonCapeProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(nonCapeProvinces.length);

// Finding 'S'

// Create a boolean array to determine if a name contains the letter 'S'
const containsS = names.map(name => name.includes('S'));
console.log(containsS);

// Creating Object Mapping

// Transform the names array into an object mapping names to their respective provinces
const nameProvinceMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMap);

// Advanced Exercises

// 1. Log Products

// Iterate over the products array, logging each product name
console.log(products.map(product => product.product).join(', '));

// 2. Filter by Name Length

// Filter out products with names longer than 5 characters
console.log(products.filter(product => product.product.length <= 5));

// 3. Price Manipulation

// Filter out products without prices, convert string prices to numbers, and calculate the total price using reduce
const totalValidPrices = products
  .filter(product => product.price.trim() !== '')
  .map(product => ({ ...product, price: Number(product.price) }))
  .reduce((total, product) => total + product.price, 0);
console.log(totalValidPrices);

// 4. Concatenate Product Names

// Use reduce to concatenate all product names into a single string
const concatenatedNames = products.reduce((acc, product) => acc + product.product + ' ', '').trim();
console.log(concatenatedNames);

// 5. Find Extremes in Prices

// Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
const validProducts = products
  .filter(product => product.price.trim() !== '')
  .map(product => ({ ...product, price: Number(product.price) }));

const highestPricedProduct = validProducts.reduce((max, product) => product.price > max.price ? product : max);
const lowestPricedProduct = validProducts.reduce((min, product) => product.price < min.price ? product : min);

console.log(`Highest: ${highestPricedProduct.product}. Lowest: ${lowestPricedProduct.product}.`);

// 6. Object Transformation

// Using Object.entries and reduce, recreate the products object with keys 'name' and 'cost', maintaining their original values
const transformedProducts = products.reduce((acc, { product, price }) => {
  acc[product] = { name: product, cost: price };
  return acc;
}, {});
console.log(transformedProducts);
