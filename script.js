const menu = [
  //////////////boots
  {
    id: 1,
    title: "Adidas light",
    category: "Boots",
    price: "15.99$",
    img: "./boots/boots-1.jpg",
    desc: " Engineered with breathable materials to keep your feet cool and dry during intense matches. Lightweight and comfortable boots for agile movements on the field.",
  },
  {
    id: 2,
    title: "Nike tiempo",
    category: "Boots",
    price: "15.99$",

    img: "./boots/boots-2.jpg",
    desc: "Designed with a snug fit and textured upper for exceptional ball control in all weather conditions. Premium boots with superior control and durability for precise ball handling.",
  },
  {
    id: 3,
    title: "Tiempo black",
    category: "Boots",
    price: "15.99$",
    img: "./boots/boots-3.jpg",
    desc: "Combines classic style with modern technology for optimum performance on the field. Sleek black boots designed for power and accuracy in every shot.",
  },

  ////////////////////balls

  {
    id: 21,
    title: "Brazuca",
    price: "15.99$",
    category: "Balls",
    img: "./balls/ball-1.jpg",
    desc: "FIFA-approved ball crafted with advanced aerodynamics, ensuring stable and precise flight paths. Official match ball with exceptional flight stability and excellent touch.",
  },
  {
    id: 22,
    title: "Nike sculpt",
    category: "Balls",
    price: "15.99$",
    price: "15.99$",
    img: "./balls/ball-2.jpg",
    desc: "Features innovative paneling for enhanced accuracy and a soft touch, delivering exceptional playability. Innovative ball designed for enhanced control and accurate passes on the field.",
  },
  {
    id: 23,
    title: "Adidas Qatar",
    category: "Balls",
    price: "15.99$",
    price: "15.99$",
    img: "./balls/ball-3.jpg",
    desc: " Constructed with a durable cover and reinforced bladder, offering long-lasting performance and consistent shape retention. High-quality ball with optimal responsiveness and durability for professional play.",
  },

  ////////////////shoes

  {
    id: 31,
    title: "Adidas light",
    category: "Shoes",
    price: "15.99$",
    price: "15.99$",
    img: "./shoes/shoe-1.jpg",
    desc: "Flexible and responsive shoes that provide excellent cushioning for long-lasting comfort. Versatile athletic shoes suitable for various sports and activities.",
  },
  {
    id: 32,
    title: "Adidas ultra",
    category: "Shoes",
    price: "15.99$",
    price: "15.99$",
    img: "./shoes/shoe-2.jpg",
    desc: "Ideal for runners seeking lightweight shoes with superior energy return for explosive strides. Ultra-cushioned shoes engineered for maximum comfort and support during workouts.",
  },
  {
    id: 33,
    title: "Adidas orange",
    category: "Shoes",
    price: "15.99$",
    price: "15.99$",
    img: "./shoes/shoe-3.jpg",
    desc: " Eye-catching shoes that offer excellent ankle support and reliable traction on various surfaces. Stylish and vibrant shoes that provide excellent traction and stability for sports enthusiasts.",
  },

  /////////Tshits

  {
    id: 41,
    title: "Argintina kit",
    category: "Tshirt",
    price: "15.99$",
    price: "15.99$",
    img: "./Tshirts/shirt-1.jpg",
    desc: " Showcasing iconic national colors, the kit represents Argentina's rich football legacy and fierce determination. Authentic national team kit with iconic blue and white stripes, representing passion and pride.",
  },
  {
    id: 42,
    title: "Brazil kit",
    category: "Tshirt",
    price: "15.99$",
    price: "15.99$",
    img: "./Tshirts/shirt-2.jpg",
    desc: " Designed with lightweight, sweat-wicking fabric, the kit allows players to perform at their best in any climate. Vibrant yellow jersey with green accents, embodying the samba spirit of Brazilian football.",
  },
  {
    id: 43,
    title: "ortugal kit",
    category: "Tshirt",
    img: "./Tshirts/shirt-3.jpg",
    desc: "Crafted with attention to detail and comfort, the kit embodies Portugal's commitment to excellence and style. Elegant red and green ensemble showcasing the Portuguese heritage and football excellence.",
  },

  //////////// equipment

  {
    id: 51,
    title: "Trainig dots",
    category: "Equipment",
    price: "15.99$",
    price: "15.99$",
    img: "./equipment/eq-1.jpg",
    desc: "Perfect for improving speed and agility, these versatile dots can be arranged in various patterns for dynamic training sessions. Essential equipment for agility and speed drills, improving footwork and coordination.",
  },
  {
    id: 52,
    title: "Training kit",
    category: "Equipment",
    price: "15.99$",
    price: "15.99$",
    img: "./equipment/eq-2.jpg",
    desc: "Designed for coaches and athletes, the comprehensive kit offers a range of training options to enhance performance and skills. Complete set of cones, hurdles, and markers for comprehensive training sessions.",
  },
  {
    id: 53,
    title: "Training equipment",
    category: "Equipment",
    price: "15.99$",
    price: "15.99$",
    img: "./equipment/eq-3.jpg",
    desc: "From resistance bands to agility ladders, the equipment provides athletes with versatile tools to improve strength, speed, and overall fitness levels. Durable training accessories to enhance strength, agility, and overall performance on the pitch.",
  },
];

const sectionCenter = document.querySelector(".section-center");

const filterButtons = document.querySelectorAll(".btn");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
});

filterButtons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;

    const menuCategory = menu.filter(function (items) {
      if (items.category === category) {
        return items;
      }
      if (category === "all") {
        return menu;
      }
    });

    displayMenuItems(menuCategory);
  });
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `  <article class="menu-item">
        <img src=${item.img} alt=${item.title} />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </header>
          <p>
            ${item.desc}
          </p>
        </div>
      </article>`;
  });
  displayMenu = displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
}
