let bar = document.querySelector('.bar');
let sideBar = document.querySelector('#sideBar');
let cross = document.querySelector('.cross');
bar.addEventListener(`click`, function(){
    sideBar.classList.add(`active`);
})
cross.addEventListener(`click`, function(){
    sideBar.classList.remove (`active`);
    
})
sideBar.addEventListener(`click`,function(e){
    if(e.target.classList.contains(`active`) == true){
        
        sideBar.classList.remove (`active`);
    }
})