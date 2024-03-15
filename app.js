const containerDiv = document.querySelector(".container");

const getUsers = async () => {
  try {
    const responsive = await fetch("https://randomuser.me/api/");

    console.log(responsive);

    if (!responsive.ok) {
      throw new Error(`Something went wrong ${responsive.status}`);
    }

    const dataUsers = await responsive.json();
    console.log(dataUsers.results);
    showUsers(dataUsers.results)


  } catch (error) {
    containerDiv.innerHTML = `
            <h5>${error}</h5>
        `;
  }
};

const showUsers = (user) => {
  const defaultImg = "./img/error.gif";
  const cardDiv = document.querySelector(".card");

  user.forEach(({ picture, name, email, phone, gender }) => {
    
    if(gender == "male"){
        containerDiv.classList.add("male")
        btn.classList.add("btn-male")
    }else{
        containerDiv.classList.add("female")
        btn.classList.add("btn-female")
    }


    cardDiv.innerHTML += `
            <img src="${
              picture.large || defaultImg
            }" class="card-image-top" alt="picture">
            <div class="card-body">
            <h5 class="card-title">${Object.values(name).join(" ")}</h5>
            <p>${email}</p>
            <a href="${email}" class="btn btn-primary">Send Message</a>
            </div>
        `;
  });
};

const btn = document.querySelector("button")
btn.addEventListener("click", () => window.location.reload())

getUsers();
