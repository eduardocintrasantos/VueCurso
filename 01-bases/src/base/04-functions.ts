//function greetPerson(name: string) {
//    return `Olá ${name}`
//};

const greetPerson = (name: string) => {
    return `Olá ${name}`
};

console.log(greetPerson('Eduardo'));

const heroes = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman',
    }
]

const hero = heroes.find((h) => h.id === 1);
console.log(hero?.name);