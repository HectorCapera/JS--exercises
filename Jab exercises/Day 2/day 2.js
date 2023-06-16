
window.onload = inicio;

function inicio(){
    document.querySelectorAll(".button-style")[0].onclick=button1;
    document.querySelectorAll(".button-style")[1].onclick=button2;
    document.querySelectorAll(".button-style")[2].onclick=button3;
}




// function button1(){
//     const imagen = '<img src="./html-5 (1).png"  width="100%" height="100%">'
//     document.querySelector(".containerItems").insertAdjacentHTML("beforeend", imagen);
// }

function button1(){
    
    let imagen = document.querySelector(".containerItems")

    imagen.style.backgroundColor = "#1162ac";
    imagen.style.borderRadius = "50%";
    imagen.style.transform = "rotate(10deg)";
    
    document.querySelectorAll(".button-style")[0].style.visibility = "hidden";
}

function button2(){

    let imagen = document.querySelector(".containerItems")

    if (imagen.style.visibility == "hidden"){
        imagen.style.visibility = "visible";
    }else{
        imagen.style.visibility = "hidden";
    }

}

function button3(){
    document.querySelector(".containerItems");

    document.querySelector(".containerItems").style.backgroundColor = null;
    document.querySelector(".containerItems").style.borderRadius = null;
    document.querySelector(".containerItems").style.transform = null;
    document.querySelectorAll(".button-style")[0].style.visibility = "visible";
    

}
