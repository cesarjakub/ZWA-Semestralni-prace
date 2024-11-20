const editRecipeModal = document.querySelector(".edit-my-recipe-modal");

const openEditRecipe = document.querySelectorAll(".edit-recipe");

const closeRecipeModal = document.querySelector(".close-edit-recipe-modal");

const shadow = document.querySelector(".shadow");

openEditRecipe.forEach(button => {
    button.addEventListener("click", (event) => {
        editRecipeModal.style.display = "block";
        shadow.style.display = "block";
        console.log(event.currentTarget.parentNode.parentNode.parentNode)
    });
});

closeRecipeModal.addEventListener("click", () => {
    editRecipeModal.style.display = "none";
    shadow.style.display = "none";
});

const removeRecord = document.querySelectorAll(".remove-button");

removeRecord.forEach(button => {
    button.addEventListener("click", (event) => {
        console.log(event.currentTarget.parentNode.parentNode.parentNode);
    });
});

const file = document.getElementById("edit-image");
const fileName = document.querySelector(".image-file-name");

file.addEventListener("change", () => {
    const name = file.files[0].name;
    if (name) {
        fileName.innerHTML = `Selected file: ${name}`;
    }else{
        fileName.innerHTML = `Selected file: None`;
    }
});