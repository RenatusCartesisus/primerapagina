function nComentario(){
    let li = document.createElement("li");
    let valorIngresado = document.getElementById("nuevoComentario").value;
    let text = document.createTextNode(valorIngresado);
    li.appendChild(text);

    if(valorIngresado === ''){
        alert('Inserte un comentario');
    }
    else{
        document.getElementById('comentarios').appendChild(li);
    }
    // document.getElementById('comentarios').appendChild(li);
    document.getElementById('nuevoComentario').value = "";
    li.className = 'comentario';
    li.style.position="relative";
    // li.style.marginBottom="20px";
    // li.className = "comentario";

    let borrar = document.createElement('p');
    borrar.innerHTML = ("Borrar");
    borrar.className = "close";
    li.appendChild(borrar);

    let close = document.getElementsByClassName("close");
    for(let i = 0; i<close.length; i++){ 
        close[i].onclick = function(){
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}