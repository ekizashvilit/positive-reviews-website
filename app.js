// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "We put our house on the market in September. It took a couple of months to sell we had several offers witch 2 of them fell thru. We finally sold our home end of October. But our agent Steven was always available he answered all questions we asked via texts and phone calls trust me I had several. And saving some money well you can’t beat that. I would refer family and friends to Ideal agent.",
  },
  {
    id: 2,
    name: "anna johnson",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "We recently closed on our house sale listed through Amanda Tucker in Winston Salem. Went very smoothly and we got a good price for the house and land, very happy with her handling of it. She was always reachable, kept us informed and looked out for our interest, great experience!!",
  },
  {
    id: 3,
    name: "peter jones",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Our agent, Eric, was great! Very knowledgeable & up to date on market prices. He guided us through the whole process from listing to closing. We also were appreciative of the lower commissions. We will recommend Eric & IdealAgent to everyone.",
  },
  {
    id: 4,
    name: "bill anderson",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "There follow through from start to finish was amazing. Constantly updating me on a consistent time table. Closing coordinator was fully equipped to handle all of her responsibilities. Thank you all!",
  },
  {
    id: 5,
    name: "Ivka Xiao",
    img:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    text:
      "Sherry Mercer skillfully and patiently guided us through the sales process. We are extremely pleased with Ideal Agent for recommending her to be our agent and advise anyone wishing to sell real estate property of any type to get in touch with her through Dallas and Ideal Agent.",
  },
  {
    id: 6,
    name: "Ellinor Yukimura",
    img:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
    text:
      "My realtor, Rhoda, is knowledgeable, personable and professional. The systems used to communicate were easy to use and highly efficient. We listed and closed the sale in 5 weeks. I will definitely use Rhoda again",
  },
  {
    id: 7,
    name: "Julio Olayinka",
    img:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    text:
      "Kaitlyn explains things well knew how to do everything was very helpful helping me get everything done and very fast I recommend her to everyone",
  },
  {
    id: 8,
    name: "Adolf Cline",
    img:
      "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80",
    text:
      "Working with Kelly Cook was great, my agent Mr. Norris was amazing! Awesome communication by all parties involved every step of the way. We sold the house in one week for an amazing price",
  },
  {
    id: 9,
    name: "Katharina Garver",
    img:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    text:
      "Realtor had good knowledge of area and pricing. Took time to do some free staging of my empty house. One of the bedrooms needed to be painted and she had a person that did the job for a very reasonable price. Made the process fast and easy. Highly recommend",
  },
  {
    id: 10,
    name: "Raimund Deacon",
    img:
      "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    text:
      "Desiree Carroll was nice down to earth and understanding. She was understanding and accommodating. She helped me get my house on the market quick and sold very quick! Thank you all!",
  },
];

// SELECT ITEMS
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const info = document.getElementById("info");
const prevBtn = document.querySelector('.hidden-1');
const nextBtn = document.querySelector('.hidden-2');
const prevBtn2 = document.querySelector('.shown-1');
const nextBtn2 = document.querySelector('.shown-2');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

// LOAD INITIAL ITEM
window.addEventListener("DOMContentLoaded", function() {
  showPerson(currentItem);
});

// SHOW PERSON
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  info.textContent = item.text;
}

// SHOW NEXT PERSON
nextBtn.addEventListener("click", function() {
  currentItem++;
  if(currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// SHOW PREVIOUS PERSON
prevBtn.addEventListener("click", function() {
  currentItem--;
  if(currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

nextBtn2.addEventListener("click", function() {
  currentItem++;
  if(currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn2.addEventListener("click", function() {
  currentItem--;
  if(currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

// SHOW RANDOM PERSON
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});