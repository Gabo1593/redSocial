const X = (id) => document.querySelector(id);
const botonPost = X(".botonPost");
const text = X("#post");
const divPost = X(".post");
const sectionPost = X("#posted");
let imagePreview = X("#imagePreview");
const galeria = X(".galeria");
const labelGaleria = X(".label--galeria");
let imagenPreviaPost = X(".imagenPrevia");
const headerImgGaleria = X(".header--img__galeria");
const mainPost = X(".section--post")



botonPost.addEventListener("click", ()=>{
    const botonPosted = document.createElement("button");
    const newPost = document.createElement("h2");
    const textArea = document.createElement("input");
    const postedDiv = document.createElement("div");
    let imgPerfil = document.createElement("img");
    imgPerfil.classList = "imgPerfil";
    imgPerfil.src = imagePreview.src;
   
    let imgPost = document.createElement("img");
    imgPost.classList = "imgPost";
    imgPost.src =  imagenPreviaPost.src;
   
    postedDiv.classList = "postedDiv";    
    botonPosted.classList = "botonPosted";
    botonPosted.innerText = "comentar";
    const newPostValue = text.value;
    newPost.classList = "newPostParrafo";
    sectionPost.classList = "posted";
    newPost.append(newPostValue);
    text.value = "";
    if(imgPost.src === "https://github.com/Gabo1593/redSocial/blob/master/icons/icons-image-negro-64.png"){
        postedDiv.append(imgPerfil, newPost, textArea, botonPosted);
    }else{
        postedDiv.append(imgPerfil, newPost, imgPost, textArea, botonPosted);
    }
    imagenPreviaPost.src = "./icons/icons-image-negro-64.png";
    sectionPost.append(postedDiv)
    
    //funtion botonComentario
    botonPosted.addEventListener("click",()=> crearComentario(textArea, postedDiv) );

  
}); 

function crearComentario(prop, prop2){
    const botonComentar = document.createElement("button");
    botonComentar.classList = "botonComentar";
    botonComentar.innerText = "Responder"
    const newComentario = document.createElement("p");
    const newComentarioValue = prop.value;
    newComentario.append(newComentarioValue);
    prop.value = "";
    const inputComentario = document.createElement("input");
    const divComentario = document.createElement("div");
    divComentario.classList = "divComentario";
    divComentario.append(newComentario, inputComentario, botonComentar);
    prop2.append(divComentario);
    botonComentar.addEventListener("click", ()=>respuestaComentario(inputComentario));

}

function respuestaComentario(prop){
    const newRespuesta = document.createElement("p");
    const newRespuestaValue = prop.value;
    newRespuesta.append(newRespuestaValue);
    prop.value = "";
    const divRespuesta = document.createElement("div");
    divRespuesta.classList = "divRespuesta";
    divRespuesta.append(newRespuesta);
    prop.insertAdjacentElement("beforeBegin", divRespuesta)
}



//miniatura al caragar la imagen
function previewImage () {
    
    const reader = new FileReader();
    const filePreview = document.querySelector('#file').files[0];

    reader.addEventListener('load', () => {
  
        imagePreview.src = reader.result; 
    }, false);
  
    if(filePreview) {
        reader.readAsDataURL(filePreview)
    }

}
  

function crearGaleria(){
    const imagenGaleria = document.createElement("img");
    imagenGaleria.classList = "imagenGaleria";
    const reader = new FileReader();
    const filePreview = document.querySelector("#for--galeria").files[0];
    reader.addEventListener('load', () => {
  
        imagenGaleria.src = reader.result; 
    }, false);
    if(filePreview) {
        reader.readAsDataURL(filePreview)
    }
    galeria.append(imagenGaleria);
}

function imagenPost(){
    

    const reader = new FileReader();
    const filePreview = document.querySelector("#imagePost").files[0];
    reader.addEventListener('load', () => {
  
        imagenPreviaPost.src = reader.result; 
        // imgPost.src  = reader.result; 
    }, false);
    if(filePreview) {
        reader.readAsDataURL(filePreview)
    }

   

}

headerImgGaleria.addEventListener("click", ()=>{
    galeria.classList.toggle("active");
    mainPost.classList.toggle("active");
})
