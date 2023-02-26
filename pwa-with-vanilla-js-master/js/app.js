const container = document.querySelector(".container");
const coffees = [
  {
    name: "Octavio Paz, cambio de milenio",
    image: "images/moneda1.jpg"
  },
  {
    name: "Vigésimo aniversario de la entrega del Premio Nobel de Literatura a Octavio Paz",
    image: "images/moneda2.jpg"
  },
  {
    name: "Centenario del Ejército Mexicano",
    image: "images/moneda3.jpg"
  },
  {
    name: "150 aniversario del natalicio y 100 aniversario luctuoso de Belisario Domínguez",
    image: "images/moneda4.jpg"
  },
  {
    name: " Centenario de la gesta heroica de Veracruz",
    image: "images/moneda5.jpg"
  },
  {
    name: " Centenario de la toma de Zacatecas",
    image: "images/moneda6.jpg"
  },
  {
    name: "Centenario de la Fuerza Aérea Mexicana",
    image: "images/moneda7.jpg"
  },
  {
    name: "Bicentenario luctuoso del generalísimo José María Morelos y Pavón",
    image: "images/moneda8.jpg"
  },
  {
    name: "50 aniversario de la aplicación del Plan Marina",
    image: "images/moneda9.jpg"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#"></a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
