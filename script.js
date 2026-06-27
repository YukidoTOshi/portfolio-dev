// ================================
// SCROLL SUAVE NOS LINKS
// ================================


const links = document.querySelectorAll("nav a, .btn, .btn-secundario");


links.forEach(link => {


    link.addEventListener("click", function(event){


        const destino = document.querySelector(
            this.getAttribute("href")
        );


        if(destino){

            event.preventDefault();


            destino.scrollIntoView({

                behavior:"smooth"

            });

        }


    });


});



// ================================
// ANIMAÇÃO AO APARECER NA TELA
// ================================


const elementos = document.querySelectorAll(
    ".card, .info, section"
);



const observador = new IntersectionObserver(
    (entradas)=>{


        entradas.forEach(entrada=>{


            if(entrada.isIntersecting){


                entrada.target.classList.add("mostrar");


            }


        });


    },


    {

        threshold:0.15

    }


);



elementos.forEach(elemento=>{


    observador.observe(elemento);


});



// ================================
// BOTÃO VOLTAR AO TOPO
// ================================


const botaoTopo = document.createElement("button");


botaoTopo.innerHTML="↑";


botaoTopo.classList.add("topo");


document.body.appendChild(botaoTopo);



botaoTopo.addEventListener(
"click",

()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});




window.addEventListener(
"scroll",

()=>{


    if(window.scrollY > 500){


        botaoTopo.classList.add("ativo");


    }

    else{


        botaoTopo.classList.remove("ativo");


    }


});




// ================================
// MENSAGEM DE TESTE
// ================================


console.log(
"Portfólio Klyen.dev carregado 🚀"
);