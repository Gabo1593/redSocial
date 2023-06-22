const X = (id) => document.querySelector(id);
const botonPost = X(".botonPost");
const text = X("#post");
const divPost = X(".post");

botonPost.addEventListener("click", ()=>{console.log(text.value);
const newPost = document.createElement("p");
const newPostValue = text.value;
newPost.style.color = "red";
newPost.classList = "newPostParrafo"
newPost.append(newPostValue);
divPost.append(newPost);
});

