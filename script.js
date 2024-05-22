//Random Color Genarator
const getColor = () => {
  const r = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  const g = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  const b = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");

  return `#${r}${g}${b}`;
};

//
// Funtion to remove btnBlocks
const minus = (btn) => {
  const parent = btn.parentElement;
  parent.remove();
};

// Creating the split Function
const split = (dir, btn) => {
  const parent = btn.parentElement; //Accessing the parent element of Target Button
  parent.className = "wrapper"; //changed the Button class from btnWrapper to wrapper

  //Setting the flex direction
  dir === "row"
    ? (parent.style.flexDirection = "row")
    : (parent.style.flexDirection = "column");
};

// Creating div for btnBlocks
const btnBlock1 = document.createElement("div");
const btnBlock2 = document.createElement("div");

// Giving them btnWrapper Class
btnBlock1.className = "btnWrapper";
btnBlock2.className = "btnWrapper";

//Setting Random color to btnBlocks Background
btnBlock2.style.backgroundColor = getColor();

//Setting innerHTML for btnBlocks
btnBlock1.innerHTML = `
    <button class="minus" onclick="minus(this)">-</button>
    <button class="split-btn" onclick="split('vertical', this)">V</button>
    <button class="split-btn" onclick="split('horizontal', this)">H</button>
    `;

btnBlock2.innerHTML = `
    <button class="minus" onclick="minus(this)">-</button>
    <button class="split-btn" onclick="split('vertical', this)">V</button>
    <button class="split-btn" onclick="split('horizontal', this)">H</button>
    `;

// Made parent div empty and appended btnBlocks to it

parent.innerHTML = "";
parent.appendChild(btnBlock1);
parent.appendChild(btnBlock2);
