const carrusel = document.querySelector(".carrusel__imagenes")
const boton1 = document.querySelector(".botones__boton--1")
const boton2 = document.querySelector(".botones__boton--2")
const boton3 = document.querySelector(".botones__boton--3")

let posicion = 2

boton1.addEventListener("click", () => {
    posicion = 1
    clearInterval(intervalo);
    cambiarPosicion(1)
    intervalo = setInterval(ejecutarIntevalo,15000)
})

boton2.addEventListener("click", () => {
    posicion = 2
    clearInterval(intervalo);
    cambiarPosicion(2)
    intervalo = setInterval(ejecutarIntevalo,15000)
})

boton3.addEventListener("click", () => {
    posicion = 3
    clearInterval(intervalo);
    cambiarPosicion(3)
    intervalo = setInterval(ejecutarIntevalo,15000)
})

function cambiarPosicion(valor) {
    switch (valor) {
        case 1: carrusel.style.transform = "translateX(0)"
            boton2.classList.remove("activo")
            boton3.classList.remove("activo")
            boton1.classList.add("activo")
            break;
        case 2: carrusel.style.transform = "translateX(-100%)"
            boton1.classList.remove("activo")
            boton3.classList.remove("activo")
            boton2.classList.add("activo")
            break;
        case 3: carrusel.style.transform = "translateX(-200%)"
            boton1.classList.remove("activo")
            boton2.classList.remove("activo")
            boton3.classList.add("activo")
            break;
    }
}

function ejecutarIntevalo(){
    if(posicion == 3){
        cambiarPosicion(posicion)
        posicion = 1;
    }else{
        cambiarPosicion(posicion)
        posicion ++
    }
    
}

let intervalo = setInterval(ejecutarIntevalo,15000)



