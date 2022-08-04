const input = document.querySelectorAll(".dig")[0]
const btn = document.querySelectorAll(".btn")[0]
const foto = document.querySelectorAll(".foto")[0]
const userId = document.querySelectorAll(".user_id")[0]
const userName = document.querySelectorAll(".user_name")[0]
const userBio = document.querySelectorAll(".user_bio")[0]


btn.addEventListener("click", function(){
    fetch(`https://api.github.com/users/${input.value}`)
    .then((response) => response.json())
    
    .then((response) => {
        const profilePic = response.avatar_url;
        foto.innerHTML = `<img src="${profilePic}" />`;
        userId.innerHTML=  response.id;
        userName.innerHTML = response.name;
        userBio.innerHTML = response.bio;
    });
});




