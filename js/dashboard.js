//edit modal 
const addRecipeModal = document.querySelector(".add-recipe-modal");
const editRecipeModal = document.querySelector(".edit-recipe-modal");

const openEditRecipe = document.querySelectorAll(".edit-recipe");
const openAddRecipeModal = document.querySelector(".add-recipe-btn");

const closeAddRecipeModal = document.querySelector(".close-add-recipe-modal");
const closeRecipeModal = document.querySelector(".close-edit-recipe-modal");

const shadow = document.querySelector(".shadow");

openAddRecipeModal.addEventListener("click", () => {
    addRecipeModal.style.display = "block";
    shadow.style.display = "block";
});

openEditRecipe.forEach(button => {
    button.addEventListener("click", (event) => {
        editRecipeModal.style.display = "block";
        shadow.style.display = "block";
        console.log(event.target.parentNode.parentNode)
    });
});


closeAddRecipeModal.addEventListener("click", () => {
    addRecipeModal.style.display = "none";
    shadow.style.display = "none";
});

closeRecipeModal.addEventListener("click", () => {
    editRecipeModal.style.display = "none";
    shadow.style.display = "none";
});


const removeRecord = document.querySelectorAll(".remove-button");

removeRecord.forEach(button => {
    button.addEventListener("click", (event) => {
        console.log(event);
    });
});


const file = document.getElementById("image");
const fileName = document.querySelector(".image-file-name");

file.addEventListener("change", () => {
    const name = file.files[0].name;
    if (name) {
        fileName.innerHTML = `Selected file: ${name}`;
    }
});

//choose buttons
const userTableBtn = document.querySelector(".users");
const recipesTableBtn = document.querySelector(".recipes");

const userTable = document.querySelector(".user-table");
const userRecipe = document.querySelector(".recipe-table");


userTableBtn.addEventListener("click", () => {
    userTable.style.display = "block";
    userRecipe.style.display = "none";
});

recipesTableBtn.addEventListener("click", () => {
    userTable.style.display = "none";
    userRecipe.style.display = "block";
});
