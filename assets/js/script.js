let b = document.querySelector('#boton');

b.addEventListener("click", function(){

    let p1 = parseInt(document.querySelector('#cant1').value);
    let p2 = parseInt(document.querySelector('#cant2').value);
    let p3 = parseInt(document.querySelector('#cant3').value);
    calculo = (p1 + p2 + p3);
if (calculo > 10) {
    par = document.querySelector('#resultado')
    par.innerHTML = 'Llevas demasiados items';
}
    
    else {
        par = document.querySelector('#resultado')
        par.innerHTML = "Llevas:" + calculo;
}
    
});
