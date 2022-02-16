const bombs=[];

function addgrid(){
    const appelement = document.getElementById("app");
    for(let i=0; i<9; i++){
        const row = document.createElement("div");
        
        for(let j=0; j<9; j++){
            const index = i*9+j;
            const column = document.createElement("div");
            column.style.display = "inline-block";
            column.style.width = "50px";
            column.style.height = "50px";
            column.style.border = "2px solid black";
            // column.style.textAlign = "center";
            column.style.verticalAlign = "middle";
            column.setAttribute("index",index);
            column.innerHTML = index


            column.addEventListener("click", function(){
                if (bombs.includes(index)){
                    column.style.background = "red"
                    
                    
                }else{
                    column.style.background = "green"

                }
            })
            row.appendChild(column);


        }
        appelement.appendChild(row);
    }
    


}
function generatebombs(){
   
    while (bombs.length<10){
        const randomnumber = Math.floor(Math.random()*100);
        if(randomnumber<81 && !bombs.includes(randomnumber)){
            bombs.push(randomnumber);
            
        }

    }
   

}

addgrid();
generatebombs();
console.log(bombs)