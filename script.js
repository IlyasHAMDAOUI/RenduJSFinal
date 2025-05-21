const productContainer = document.getElementById("productContainer");
fetch(
  "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/sneakers.json"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const heroContent = document.createElement("div");

    // function Affichage() {
        
        // nomCommercial
        const nomCommercial = document.createElement("h1");
        nomCommercial.textContent = data.nomCommercial;
        console.log(nomCommercial);
        
        // phraseAccroche
        const phraseAccroche = document.createElement("h2");
        phraseAccroche.textContent = data.phraseAccroche;
        console.log(phraseAccroche);
        
        // texteAppelAction
        const texteAppelAction = document.createElement("h3");
        texteAppelAction.textContent = data.texteAppelAction;
        console.log(texteAppelAction);
        
        
        // bouton meme si je sais pas a quoi sa sert.
        const btn = document.createElement("button");
        
        
        // avantagesClients
        const outAvantagesClient = document.createElement("div");
        const avantagesClients = data.avantagesClients;
        avantagesClients.forEach((element) => {
            const paraAvantagesClients = document.createElement("h4");
            paraAvantagesClients.textContent = element;
            outAvantagesClient.appendChild(paraAvantagesClients);
        });
    // }
        
        // Affichage()
        heroContent.appendChild(nomCommercial);
        heroContent.appendChild(phraseAccroche);
        heroContent.appendChild(texteAppelAction);
        heroContent.appendChild(outAvantagesClient);
        heroContent.appendChild(btn);


    // console.log(heroContent);

    productContainer.appendChild(heroContent);
  });

function Affichage(data) {
  productContainer.innerHTML = "";
}
