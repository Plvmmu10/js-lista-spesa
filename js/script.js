const listaSpesa = [
    'nutella',
    'arancino',
    'ketchup',
    'maionese',
    'ringo',
    'lattuga'
];

let text = "";
listItem= 0;

while(listItem < listaSpesa.length){
    
    document.getElementById('paper').innerHTML += `<li>Compra ${listaSpesa[listItem]}</li>`;

    listItem++;
   
    console.log(listItem)
}

