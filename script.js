const productContainer = document.getElementById("productContainer");
fetch(
  "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/sneakers.json"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    //     const heroContent = document.createElement("div");
    // heroContent.classList.add("heroContent")
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
    btn.classList.add("bouton");
    btn.textContent = "Acheter une paire";

    // avantagesClients
    const outAvantagesClient = document.createElement("div");
    outAvantagesClient.classList.add("avantage");
    const avantagesClients = data.avantagesClients;
    avantagesClients.forEach((element) => {
      const paraAvantagesClients = document.createElement("h4");
      paraAvantagesClients.textContent = element;
      outAvantagesClient.appendChild(paraAvantagesClients);
    });

    // produits

    const backOutProduits = document.createElement("div");
    backOutProduits.classList.add("grosProduit");
    const produits = data.produits;
    produits.forEach((element) => {
      const outProduits = document.createElement("div");
      outProduits.classList.add("produit");

      const imageUrl = document.createElement("img");
      imageUrl.src = element["image-url"];
      imageUrl.alt = element.nom;

      const nom = document.createElement("h5");
      nom.textContent = element.nom;

      const description = document.createElement("p");
      description.textContent = element.description;

      outProduits.appendChild(imageUrl);
      outProduits.appendChild(nom);
      outProduits.appendChild(description);

      backOutProduits.appendChild(outProduits);
    });

    //service
    const backOutServices = document.createElement("div");
    backOutServices.classList.add("grosProduit");
    const services = data.services;
    services.forEach((element) => {
      const outServices = document.createElement("div");
      outServices.classList.add("service");

      const nom = document.createElement("h5");
      nom.textContent = element.nom;

      const description = document.createElement("p");
      description.textContent = element.description;

      outServices.appendChild(nom);
      outServices.appendChild(description);

      backOutServices.appendChild(outServices);
    });

    // temoignages
    const backOuttemoignages = document.createElement("div");
    backOuttemoignages.classList.add("grosProduit");
    const temoignages = data.temoignages;
    temoignages.forEach((element) => {
      const outtemoignages = document.createElement("div");
      outtemoignages.classList.add("temoignage");

      const prenom = document.createElement("h5");
      prenom.textContent = `${element.prenom}`;

      const note = document.createElement("h6");
      note.textContent = `${element.note}/5`;

      const typeExperience = document.createElement("h5");
      typeExperience.textContent = `${element.typeExperience}`;

      const commentaire = document.createElement("p");
      commentaire.textContent = `commentaire : ${element.commentaire}`;

      outtemoignages.appendChild(prenom);
      outtemoignages.appendChild(note);
      outtemoignages.appendChild(typeExperience);
      outtemoignages.appendChild(commentaire);

      backOuttemoignages.appendChild(outtemoignages);
    });

    // map
    //     function map(map) {

    //         const backOutMap = document.createElement("div");
    //         backOutMap.classList.add("grosProduit");
    //         let map = L.map("map").setView([51.505, -0.09], 13);

    //         L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    //       attribution:
    //       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    //     }).addTo(map);

    //     L.marker([51.5, -0.09])
    //     .addTo(map)
    //     .bindPopup("A pretty CSS popup.<br> Easily customizable.")
    //     .openPopup();
    // }

    productContainer.appendChild(nomCommercial);
    productContainer.appendChild(phraseAccroche);
    productContainer.appendChild(texteAppelAction);
    productContainer.appendChild(outAvantagesClient);
    productContainer.appendChild(btn);
    productContainer.appendChild(backOutProduits);
    productContainer.appendChild(backOutServices);
    productContainer.appendChild(backOuttemoignages);

    // productContainer.appendChild(heroContent);
  });
