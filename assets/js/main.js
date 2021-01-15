document.addEventListener('DOMContentLoaded', () => {
///const input=document.getElementsByClassName('input-container').item(0);
const botonCo=document.getElementById('buttons-container');
    //1


const boton1 = document.createElement('button');
const boton2 = document.createElement('button');
botonCo.appendChild(boton1) 
botonCo.appendChild(boton2) 
boton1.innerText='contar palabras';
boton2.innerText='restablecer';
const span=document.createElement('span');
botonCo.appendChild(span);

boton1.addEventListener('click', () => {
    const countWord = (texto) => {
        let count = 0;
        const text = texto.textContent.replace(',', '');
        const textContent = text.replace('.', '');
        const words = textContent.split('');
        for (let i = 0; i < words.length; i++) {
            if (words[i].length > 0) {
                count++;
            }
        }
        return count;
    }
    const result = () => {
        span.textContent = countWord(botonCo);
       
    }
        result();

});
boton2.addEventListener('click', () => {

    

});




    //2



    //3



    //4

    const texto = document.getElementsByClassName('text-container');
    document.body.appendChild(texto);

    texto.addEventListener('mouseover', () => {
        document.body.texto.style.fontSize='100px'
    });
        



    //5

    let nombre= document.createElement('p');
    texto.appendChild(nombre);

    let numero= document.createElement('p');
    texto.appendChild(numero);



});