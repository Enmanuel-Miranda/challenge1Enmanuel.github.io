
var btnencriptar = document.querySelector(".btn-encriptar");

var btndesencriptar = document.querySelector(".btn-desencriptar");
var doll = document.querySelector(".imagendoll");
var contenedor = document.querySelector(".divcontenedor-parrafo");

//var resultado = document.querySelector(".divcontenedor-resultado");

var resultado = document.querySelector(".texto-resultados");


btnencriptar.onclick= encriptar;

btndesencriptar.onclick = desencriptar;

function isEmpty(val) {
    return (val === undefined || val == null || val.length <= 0) ? true : false;
  }

function encriptar(){

    //cosas que no se pueden añadir
    const caracteres = /[A-Z0-9~!@#$%&*()_+|{}[\]\\\/?><^:"`;.,áéíóúàèìòù']/g;
    var cajatexto=recuperarTexto();
    const caracterespermitidos = /[a-z]/g;

    
   


        
        if (cajatexto==""){

            
            resultado.textContent = encriptarTexto("");

            doll.classList.remove("ocultar");
            contenedor.classList.remove("ocultar");
            alert("Por favor ingrese su mensaje");
           


        }   else if (cajatexto.match(caracteres) != cajatexto.match(caracteres)){

            resultado.textContent = encriptarTexto("");
            
            doll.classList.remove("ocultar");
            contenedor.classList.remove("ocultar");
            alert("Solo esta permitido letras minusculas.");

        }   else {
            resultado.textContent = encriptarTexto("");
            ocultarAdelante();
            
            resultado.textContent = encriptarTexto(cajatexto);
        }



//    if(isEmpty(cajatexto)){
        
  //  }
    

}

function desencriptar(){

    ocultarAdelante();
    var cajatexto=recuperarTexto();
    resultado.textContent = desencriptarTexto(cajatexto);

}


function recuperarTexto(){
    //esta funcion me permite obtener el texto de la seccion anterior
    var cajatexto = document.querySelector(".cajadetexto");
    return cajatexto.value

}

function ocultarAdelante(){
    doll.classList.add("ocultar");
    contenedor.classList.add("ocultar");
    //esto llamado ocultar adelante ocultara la imagen y palabras de texto no encontrado
}


function encriptarTexto(mensaje){

    var texto=mensaje;
    var textoFinal="";
    
    for (var i=0; i <texto.length;i++){

        
        if(texto[i]=="a"){
            textoFinal = textoFinal + "ai"
        }

        else if(texto[i]=="e"){
            textoFinal = textoFinal + "enter"
        }

        else if(texto[i]=="i"){
            textoFinal = textoFinal + "imes"
        }

        else if(texto[i]=="o"){
            textoFinal = textoFinal + "ober"
        }

        else if (texto[i]=="u"){
            textoFinal = textoFinal + "ufat"
        }

        else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;

}





function desencriptarTexto(mensaje){

    var texto=mensaje;
    var textoFinal="";
    
    for (var i=0; i <texto.length;i++){

        
        if(texto[i]=="a"){
            textoFinal = textoFinal + "a"
            i=i+1;
        }

        else if(texto[i]=="e"){
            textoFinal = textoFinal + "e"
            i=i+4;
        }

        else if(texto[i]=="i"){
            textoFinal = textoFinal + "i"
            i=i+3;
        }

        else if(texto[i]=="o"){
            textoFinal = textoFinal + "o"
            i=i+3;
        }

        else if (texto[i]=="u"){
            textoFinal = textoFinal + "u"
            i=i+3;
        }

        else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}


//const btncopiar = document.querySelector(".btn-copiar");

//btncopiar.addEventListener("click",copiar=()=> {
  // var contenido = document.querySelector(".texto-resultados").textContent;
   
    //navigator.clipboard.writeText(contenido);
    //console.log("hola");
  //  alert("Texto copiado")
//});

const btncopiar = document.querySelector(".btn-copiar");

btncopiar.addEventListener("click", copiar = () => {
  var contenido = document.querySelector(".texto-resultados");
  if (contenido !== null) {
 

    navigator.clipboard.writeText(contenido.textContent);
    console.log("hola");
    alert("Texto copiado");
  } else {
    console.log("El elemento no existe");
  }
});











