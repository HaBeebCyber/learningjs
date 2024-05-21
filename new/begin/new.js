function sayHello(){
    for(var i = 0; i < 5; i++){
        console.log(i)
    }
}

sayHello();

const users  = {
    name: "Habeeb",
    talk() {},
    walk() {
        console.log(this);
    }
};

users.walk()
const walk = users.walk.bind(users);

walk();

// Arrow functions
const newUser = number => number * number;
console.log(newUser(5));