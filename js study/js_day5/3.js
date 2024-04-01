class Person {
    age;
    name;
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
}
const person = new Person(12 ,"asv");
console.log(person);


const observer = new IntersectionObserver();
observer.