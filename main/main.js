const X = (id) => document.querySelector(id);
const botonPost = X(".botonPost");
const text = X("#post");
const divPost = X(".post");
const sectionPost = X("#posted");
const botonPosted = document.createElement("button");
const newPost = document.createElement("h2");
const textArea = document.createElement("textarea");


botonPost.addEventListener("click", ()=>{console.log(text.value);
botonPosted.classList = "botonPosted"
botonPosted.innerText = "comentar"
const newPostValue = text.value;
newPost.classList = "newPostParrafo"
sectionPost.classList = "posted";
newPost.append(newPostValue);
sectionPost.append(newPost, botonPosted);
});

// botonPosted.addEventListener("click", ()=>{console.log(text.value);
//     textArea
// });
