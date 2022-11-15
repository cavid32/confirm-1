var h1 = document.getElementById('h1')
function btn(){
    if(confirm() == true){
        h1.style.display = "block"
    }
    else{
        h1.style.display = 'none'
    }
}