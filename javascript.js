
    const gridBody = document.querySelector("div.gridContainer");

    //creates the grid
    for(let i =0; i< 9; i++){
        const gridItem = document.createElement("button");
        gridItem.classList.add("gridItem");
     //   gridItem.textContent = i;
        gridBody.appendChild(gridItem);
    }



const gridItems = document.querySelectorAll(".gridItem");
gridItems.forEach((item) =>{
    item.addEventListener("click", (e) => {
        const clickedItem = e.target;
        clickedItem.classList.toggle("clicked");
        console.log(clickedItem);
    });
});
