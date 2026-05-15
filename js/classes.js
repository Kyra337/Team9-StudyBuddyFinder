const classInElement = document.getElementById("classInput");
const addClassButtonElement = document.getElementById("addClassButton");
const classListElement = document.getElementById("classList");

let savedClassStrings = [];

addClassButtonElement.addEventListener("click", function () {
    const classNameIn = classInElement.value.trim(); // trimming whitespace

    if (classNameIn === "") {
        alert("Please enter a class name.");
        return;
    }

    savedClassStrings.push(classNameIn);
    localStorage.setItem("savedClassStrings", JSON.stringify(savedClassStrings)); // store

    const toAddClassListElement = document.createElement("li");
    toAddClassListElement.textContent = classNameIn;
    classListElement.appendChild(toAddClassListElement);

    classInElement.value = "";
});