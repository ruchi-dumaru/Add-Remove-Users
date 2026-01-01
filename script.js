let nameInput = document.querySelector("#name");
let roleInput = document.querySelector("#role");
let bioInput = document.querySelector("#bio");
let imgInput = document.querySelector("#img");
let submitBtn = document.querySelector("button");
let users = document.querySelector(".users");
let form = document.querySelector(".form");

function createUserCard(name, role, bio, img) {
  //create div in memory
  let card = document.createElement("div");
  //apply card css in card div
  card.className = "card";

  let editCard = document.createElement("button");
  editCard.textContent = "Edit";
  editCard.classList.add("edit-btn");

  editCard.addEventListener("click", () => {
    nameInput.value = name;
    roleInput.value = role;
    bioInput.value = bio;
    imgInput.value = img;

    card.remove();
  });
  editCard.style.rigt = "60px";
  card.appendChild(editCard);

  let removeCard = document.createElement("button");
  removeCard.textContent = "Remove";
  removeCard.classList.add("remove-btn");
  removeCard.style.rigth = "8px";

  removeCard.addEventListener("click", () => {
    if (confirm("Are you sure?")) card.remove();
  });
  card.style.position = "relative";
  card.appendChild(removeCard);

  let photo = document.createElement("img");
  photo.src = img || "https://putImage.com";
  photo.alt = name;
  card.appendChild(photo);

  let h3 = document.createElement("h3");
  h3.textContent = name;
  card.appendChild(h3);

  let roleP = document.createElement("p");
  roleP.textContent = role;
  roleP.className = "role";
  card.appendChild(roleP);

  let bioP = document.createElement("p");
  bioP.textContent = bio;
  card.appendChild(bioP);

  return card;
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //taking value
  nam = nameInput.value.trim();
  role = roleInput.value.trim();
  bio = bioInput.value.trim();
  img = imgInput.value.trim();

  if (!nam || !role || !bio || !img) {
    alert("Fill all field!!");
    return;
  }
  let card1 = createUserCard(nam, role, bio, img);
  users.appendChild(card1);

  nameInput.value = "";
  roleInput.value = "";
  bioInput.value = "";
  imgInput.value = "";
});


//using object and this

// let nameInput=document.querySelector("#name");
// let roleInput=document.querySelector("#role");
// let bioInput=document.querySelector("#bio");
// let imgInput=document.querySelector("#img");
// let submitBtn=document.querySelector("button");
// let userContainer=document.querySelector(".users");
// let form=document.querySelector(".form");

// //empty arr to store userCreated
// let userList = [];

// function user(name, role, bio, img) {
//   //as new obj is created this itself is the empty new object
//   this.name = name;
//   this.role = role;
//   this.bio = bio;
//   this.img = img;

//   //creating card using dom to show inside userContainer in browser
//   this.createUser = function () {
//     let card = document.createElement("div");
//     card.className = "card";
//     card.style.position="relative";

//     let editBtn = document.createElement("button");
//     editBtn.textContent = "Edit";
//     editBtn.classList.add("edit-btn");

//     editBtn.addEventListener("click", () => {
//       //populate
//       nameInput.value = this.name;
//       roleInput.value = this.role;
//       bioInput.value = this.bio;
//       imgInput.value = this.img;

//       //removing old card
//       card.remove();

//       //removing card from array such that new updated card only remain in array
//       userList=userList.filter(v=> v!==this);

//     });

//     card.appendChild(editBtn);


//     let removeBtn = document.createElement("button");
//     removeBtn.textContent = "Remove";
//     removeBtn.classList.add("remove-btn");

//     removeBtn.addEventListener("click", () => {
//       card.remove();
//       userList=userList.filter(v=> v!==this);
//     });

//     card.appendChild(removeBtn);

//     let h3 = document.createElement("h3");
//     h3.textContent = this.name;
//     card.appendChild(h3);

//     let roleP = document.createElement("p");
//     roleP.textContent = this.role;
//     roleP.className = "role";
//     card.appendChild(roleP);

//     let bioP = document.createElement("p");
//     bioP.textContent = this.bio;
//     card.appendChild(bioP);

//     let photo = document.createElement("img");
//     photo.src = this.img;
//     photo.alt = this.name;
//     card.appendChild(photo);

//     return card;
//   };
// }

// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault(); // prevent reload of form

//   nam=nameInput.value;
//   role=roleInput.value;
//   bio=bioInput.value;
//   img=imgInput.value;


//   let newUser = new user(nam, role, bio, img);
//   //newUser=newObj created=this={}
//   //{name: ;role ;bio: ;img: ; createUser= ()...}

//   userList.push(newUser);
//   //userList=[{name: ; role: ;bio: ; img: ; createUser= ()...},
//   // {name: ; role: ;bio: ; img: ; createUser= ()..}]

//   let card = newUser.createUser();
//   userContainer.appendChild(card);
//   //card --> created dom card

//   nameInput.value = "";
//   roleInput.value = "";
//   bioInput.value = "";
//   imgInput.value = "";

// });
