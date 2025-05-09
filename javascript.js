const gridBody = document.querySelector("div.gridContainer");

//creates the grid
for(let i =0; i< 9; i++){
    const gridItem = document.createElement("div");
    gridItem.classList.add("gridItem");
    gridItem.textContent = i;
    gridBody.appendChild(gridItem);
}