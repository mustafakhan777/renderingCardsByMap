let arr = [
  {
    id: 4,
    title: "newTitle",
    price: 205,
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    image_url: "https://i.imgur.com/R2PN9Wq.jpeg",
  },
  {
    id: 4,
    title: "newTitle",
    price: 205,
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    image_url: "https://i.imgur.com/R2PN9Wq.jpeg",
  },
  {
    id: 9,
    title: "Electronic Bronze Chips",
    price: 808,
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    image_url: "https://i.imgur.com/R3iobJA.jpeg",
  },
  {
    id: 11,
    title: "Awesome Bronze Car",
    price: 382,
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    image_url: "https://i.imgur.com/R3iobJA.jpeg",
  },
  {
    id: 12,
    title: "Recycled Rubber Cheese",
    price: 30,
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    image_url: "https://i.imgur.com/KeqG6r4.jpeg",
  },
  {
    id: 12,
    title: "Recycled Rubber Cheese",
    price: 30,
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    image_url: "https://i.imgur.com/KeqG6r4.jpeg",
  },
];
let mainDiv = document.getElementById("main");

arr.map((e, index) => {
  console.log(index);
  mainDiv.innerHTML += `<div class="card" style="width: 18rem;display:inline-block;margin:4px">
  <img src="${e.image_url}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${e.title}</h5>
    <h6 class="card-text">${e.title}</h6>
    <p class="card-text">${e.description}"
    <a style="display:block">Go somewhere</a>
  </div>
</div>`;
});
