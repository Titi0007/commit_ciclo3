/*
let titulo = document.getElementById('title-header');
titulo.style.color="#FF0000"; cambia el color al titulo
titulo.style.backgroundColor="#00FF00";
let elementos = document.getElementsByClassName('title'); llamo el elemento con el nonbre (title)
// console.log(elementos);
elementos[1].style.color="#00F"; 
// escojo el elemento especifico para cambiar el color 
let elemento = document.getElementsByTagName('li');
// console.log(elementos);
elemento[1].style.backgroundColor="#0F06";
elemento = document.querySelector('#title-header');
elemento.classList.add('success');
// console.log(elemento);
elemento.style.setProperty('color', 'initial');
// setea 
elemento.style.setProperty('background-color', 'initial');
elemento = document.querySelector('.list-group-item');
elemento.style.color="#F00";
elementos = document.querySelectorAll('.list-group-item');
// console.log(elementos);
elementos[2].style.color="#00F";
*/

$(document).ready(function () {
    $('.myNavbar').load('./navbar.html');
  });

const itemsArray = JSON.parse(localStorage.getItem('itemsArray')) || [];

const render = () => {
    const itemList = document.getElementById('items');
 // para resetiar y no se repita
    itemList.innerHTML = '';
//    este for recorre el array que se capturo por los li
    for (let i = 0; i < itemsArray.length; i++) {
        itemList.innerHTML += `<li>${itemsArray[i]}</li>`;
    }

    const elementos = document.querySelectorAll('#items li');
    elementos.forEach((elemento, i) => {
//  añado el elemento a la lista
        elemento.classList.add('list-group-item');
//  selecciono el ellemento de la lista para eliminar  
        elemento.addEventListener('click', () => {
            // console.log("Me van a elminar!");
            // elimino el elemento por sesicion del padre
            elemento.parentNode.removeChild(elemento);
            // tengo que eliminar el elemento del array para que no me aparesca de  nuevo
            itemsArray.splice(i,1);

            //localstorage
            // No deja perder la infoformacion cuando cargo la pagina nueva mente
            const itemsString = JSON.stringify(itemsArray);
            localStorage.setItem('itemsArray', itemsString);

            render();
            //son tiene la informacion 
        })
    })
}
//   cargo la pagina para empezar a interactuar
  window.onload = () => { 

    render();
//    selecciono todo el formulario 
    const form = document.getElementById('inputForm');
    form.onsubmit = (e) => {

        e.preventDefault();
        // console.log("Se hizo click sobre el submit del formulario");

        const inputAdd = document.getElementById('inputItem');
        const txtItem = inputAdd.value;
        inputAdd.value = '';
        if (txtItem != '') {
            itemsArray.push(txtItem);
        }
        
        //localstorage
        const itemsString = JSON.stringify(itemsArray);
        localStorage.setItem('itemsArray', itemsString);

        render();
    }
} 