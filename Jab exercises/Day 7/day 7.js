window.onload=inicio;


        let rojo="https://www.html6.es/img/rojo.png";
        let azul="https://www.html6.es/img/azul.png";
        let caja;

        function inicio(){
            document.querySelectorAll("button")[0].onclick=button1;
            document.querySelectorAll("button")[1].onclick=button2;
            document.querySelectorAll("button")[2].onclick=button3;
            document.querySelectorAll("button")[3].onclick=button4;
            document.querySelectorAll("button")[4].onclick=button5;
        }  

        function button1(){
        document.getElementById("caja").insertAdjacentHTML(("beforeend"),"<img src="+rojo+">");
        }

        function button2(){
            for(let i= 0; i < 4 ; i ++){
                document.getElementById("caja").insertAdjacentHTML(("beforeend"),"<img src="+azul+">");
            }
            
        }
        function button3(){

            let cambio = document.querySelectorAll("img").length;

            for(let i= 0; i < cambio ; i++){
                document.querySelectorAll("img")[i].src=rojo;
            }
        }
        function button4() {
            const imagenes = document.querySelectorAll("img");
        
            for (let i = 0; i < imagenes.length; i++) {
            if (imagenes[i].src === rojo) {
                imagenes[i].remove();
            }
            }
        }
        function button5(){
            const remover = document.querySelectorAll("img");

            for(let i = 0; i < remover.length; i++){
                remover[i].remove();
            }
        }