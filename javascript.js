
const gridBody = document.querySelector("div.gridContainer");

//creates the grid
for(let i =0; i< 9; i++){
    const gridItem = document.createElement("button");
    gridItem.classList.add("gridItem");
//    gridItem.textContent = i;
    gridBody.appendChild(gridItem);
}

let playerO = true; //lets player start

const winPattern =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [2,5,8]
]


const gridItems = document.querySelectorAll(".gridItem");
gridItems.forEach((item) =>{
    item.addEventListener("click", () => {
        if(playerO){
            item.innerHTML = "O"
            playerO = false;
            item.disabled = true;
            checkWinner();
        }else{
            item.innerHTML = "X"
            playerO = true;
            item.disabled = true;
            checkWinner();
        }
    });
});


function checkWinner(){
    for(let pattern of winPattern){
        const [a,b,c] = pattern;

        if( gridItems[a].innerHTML !== "" && 
            gridItems[a].innerHTML === gridItems[b].innerHTML &&
            gridItems[b].innerHTML === gridItems[c].innerHTML
        ){
            alert(`Player ${gridItems[a].textContent} wins!`);
            disableBox();
            return;
        }
    }
}

function enableGrid(){
    gridItems.forEach(item =>{
        item.disabled = false;
        item.innerHTML = "";
    })
}

function disableBox(){

    for(let box of gridItems){
            box.disabled = true;
            console.log(box);
    }
}

function resetGame(){
    playerO = true;
    enableGrid();
}