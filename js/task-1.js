const ulEl = document.querySelector("#categories");

const listElem = document.querySelectorAll(".item");
const numberList = listElem.length;

console.log("Number of categories:", numberList);

listElem.forEach((item) => {
    const headingText = item.querySelector("h2").textContent;
    const liItems = item.querySelectorAll("ul>li");
    console.log("Category:", headingText);
    console.log("Elements:", liItems.length);
});