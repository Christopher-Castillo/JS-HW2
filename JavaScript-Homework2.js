//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for (let i = 0; i < Object.keys(person3).length; i++) {
    const key = Object.keys(person3)[i];
    console.log(`${key}:`);
    console.log(person3[key]);
    if(key === 'shakes'){
        const value = Object.values(person3)[i];
        for(const shake of value){
            for(const [shakeKey, shakeValue] of Object.entries(shake)){
                console.log(`${shakeKey}: ${shakeValue}`);
            }
        }
    }
}
//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function person1(name,age){
    this.name = name;
    this.age = age;
    
    this.printInfo = ()=>{
        console.log(`Their name is ${this.name}, ${this.name} is ${this.age} years old`);
        
    }
    this.incrementAge = ()=>{
        this.age++;
    }}

    let Chris = new person1 ('Chris', 21)
    let Gisselle = new person1 ('Gisselle', 20)
    
Chris.printInfo()
Gisselle.incrementAge()
Gisselle.incrementAge()
Gisselle.incrementAge()
Gisselle.printInfo()


// =============Exercise #3 ============//
  //  Create a Promised based function that will check a string to determine if it's length is greater than 10.
   // If the length is greater than ten console log "Big word". 
   /// If the length of the string is less than 10 console log "Small Number



const isLenString = (text) =>{
    return new Promise ((resolve, reject) =>{
        if(text.length > 10){
            resolve(true)
        }else{
            reject(false)
        }
}   )
}

//Using the JS Promise 
isLenString('Chris')
//Happy path (Resolve)
.then((result)=> {
    console.log("Big Word")
})
//Sad Reject path
.catch ((error)=>{
    console.log("Small Word")
})
