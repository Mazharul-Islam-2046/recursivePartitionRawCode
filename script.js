// Creating the split Function
const split = (dir, btn) => {
  const parent = btn.parentElement; //Accessing the parent element of Target Button
  parent.className = "wrapper"; //changed the Button class from btnWrapper to wrapper

  //Setting the flex direction
  dir === "row"
    ? (parent.style.flexDirection = "row")
    : (parent.style.flexDirection = "column");
};
