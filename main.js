class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
    console.log('k');
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10); //This is determining if the wait is a number 
    this.type(); //main method that actually types
    this.isDeleting = false; //Deleting text
    }

    type() {
        const current = this.wordIndex % this.words.length;

        //Get Full text of current word
        const fulltxt = this.words[current];

        //Check if deleting
        if(this.isDeleting) {
            //remove char
            this.txt = fulltxt.substring(0, this.txt.length - 1);
        } else {
            //Add char
            this.txt = fulltxt.substring(0, this.txt.length + 1);
        }
        

        // Insert txt into element
        this.txtElement.innerHTML = `<span class = "txt">${this.txt}</span>`; //` for templates

        //Initial Type speed
        let typespeed =  100;

        if (this.isDeleting){
            typespeed /= 2;
        }

        //if word is complete
        if (!this.isDeleting && this.txt === fulltxt) {

            //make pause at end 
            typespeed = this.wait;

            //set delete to true
            this.isDeleting = true;

        } else if (this.isDeleting && this.txt === ''){

            this.isDeleting = false;

            //move to next word
            this.wordIndex++;

            // Pause before start typing
            typespeed = 200;
        }
        setTimeout(() => this.type(), typespeed);
    }
}

    

//Init On DOM Load
document.addEventListener('DOMContentLoaded', init);
//Inits app
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words')); //need to parse to use in javascript or else list will be seen as a string
    const wait = txtElement.getAttribute('data-wait');
    //Init Typewriter
    console.log('hi')

    new TypeWriter(txtElement, words, wait);
    
}


AOS.init() ({
    duration:1200,s
})

































//DOM - Document Object Model
//EVENTS

/*
const list = document.querySelector('ul');
const listitems = document.querySelectorAll('ul li a');
console.log(listitems)
listitems.addEvent
*/


/*
listitems.forEach(item => {
    console.log(item.textContent)
})
*/

/*
list.firstElementChild.remove()
list.lastElementChild.remove()
*/



/*
// Single Element Selectors
const list = document.getElementById('list');
console.log(list);
*/


/*
const list = document.querySelector('#list')
const listItems = document.querySelector('list-item')
console.log(list);

list.firstElementChild.remove();
list.lastElementChild.style.background = 'red'
*/


//CONDITIONALS

/*
let animal = 'dog';
switch(animal) {
    case 'dog':
        console.log('dog');
        break
    case 'cat':
        console.log('cat');
        break
    default:
        console.log("neither");
        break
}
*/

/*
let animal = 'cat';
const likecats = animal === 'cat' ? true : false;
console.log(likecats);
*/

/*
let a,b;
a = 1;
b = 2;

function evaluate() {
    return a < b
}
console.log(evaluate())
*/


/*
let age = 30;

if ( age < "35" && age > 18) {
    console.log(true)
}
else if (age > 25) {
console.log('Greater 25')
} else {
    console.log('less 25')
}
*/





//LOOOPS
/*
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

for (let i = 0; i < 10; i++){
    console.log(i);
}
*/

/*
const people = [
    {
        firstname: 'John',
        lastname: 'Smith',
        age: 30
    },
    {
        firstname: 'Lovely',
        lastname: 'god',
        age:28

    }

]
*/

/*///////////////
const personAgeUnder30 = people.filter(people => people.age < 30);
console.log(personAgeUnder30);
*/

/*
people.forEach(function(x){
    console.log(x);
})
*/
/*
for (let i = 0; i < people.length; i++) { //length determines num of items in class
    console.log(people[i].firstname);
}

// OR


for (let person of people) {
    console.log(person)
}
*/







/*
//FUNCTIONS 

function hi(){
    console.log('Hello World');

}

hi();
*/


/*
//ARRAY LITERALS

const person = [
{
    firstname: 'Evan',
    lastname: 'Wong',
    age:30,
    pets:['dogs','cats'],
    address: {
        street: '123 street',
        city: 'toronto',
        state: 'texas'
        }   
},
{
    firstname: 'Evan',
    lastname: 'Wong',
    age:30,
    pets:['dogs','cats'],
    address: {
        street: '123 street',
        city: 'toronto',
        state: 'texas'
    }
}
]

const ppl = JSON.stringify(person);
console.log(ppl);
*/