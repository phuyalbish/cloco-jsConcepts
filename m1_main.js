let obj1 = { name: "Bishal", age: 24 };

let obj2 = {
  title: "Auto Biography of a yogi",
  body: "This is a best book",
};

let obj3 = { ...obj1, ...obj2 };

console.log(obj3);
console.log(obj2);

let button = document.querySelectorAll(".toggle");

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    let color = btn.style.backgroundColor === "red" ? "blue" : "red";
    btn.style.backgroundColor = color;
    const node = document.createElement("div");
    const nodeattribute = document.createAttribute("class");
    nodeattribute.value = "inner_toggle";
    node.setAttribute(nodeattribute);
    btn.appendChild(node);
  });
});
