const reviews = [
    
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: 
            "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sed, itaque sequi facere voluptatum aperiam,"
    },
    {
        id: 2,
        name: "Anna Johnson",
        job: "Back-End Engineer" ,
        img: 
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sed, itaque sequi facere voluptatum aperiam,"
        
    },
    {
        id: 3,
        name: "Deepti Roy",
        job: "Graphic Designer",
        img: 
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sed, itaque sequi facere voluptatum aperiam,"

    },
    {
        id: 4,
        name: "Jack Johns",
        job: "Analyst",
        img: 
            "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sed, itaque sequi facere voluptatum aperiam,"

    },
    {
        id: 5,
        name: "Chris Mathew",
        job: "Finance",
        img: 
            "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sed, itaque sequi facere voluptatum aperiam,"

    }
];
// select items

const img  = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");


const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set strating item

let currentItem = 0 ;
// load initial item
window.addEventListener("DOMContentLoaded", function (){
    showPerson(currentItem);
})

// show person based on item 
function showPerson(person){

    const item = reviews[person];

    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", function (){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
})
// show prev person
prevBtn.addEventListener("click", function (){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length-1;
    }
    showPerson(currentItem);
})

// random showing 

randomBtn.addEventListener("click", function() {

    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    
    showPerson(currentItem);
    
})