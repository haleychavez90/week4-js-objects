//DAY 5
// Create Three Kennels
let dogs = [];
let cats = [];
let fishTank = [];

// Add Dogs
dogs.push({ name: "Loki", breed: "Husky", happiness: 50, energy: 100});
dogs.push({ name: "Boost", breed: "Chihuahua", happiness: 50, energy: 100});
dogs.push({ name: "Bella", breed: "Pit", happiness: 50, energy: 100});

// Add Cats
cats.push({ name: "Meow", breed: "Siamese", happiness: 50, energy: 100});
cats.push({ name: "Purr", breed: "Maine Coon", happiness: 50, energy: 100});
cats.push({ name: "Prissy", breed: "Persian", happiness: 50, energy: 100});

// Add Fish
fishTank.push({ name: "Bubbles", species: "Clownfish", happiness: 50, energy: 100});
fishTank.push({ name: "Luna", species: "Blue Tang", happiness: 50, energy: 100});
fishTank.push({ name: "Flame", species: "Clownfish", happiness: 50, energy: 100});

//Play With Each Pet
function playWithDog(dog) {
    console.log(`${dog.name} the ${dog.breed} is playing catch!`);
}   
function playWithCat(cat) {
    console.log(`${cat.name} the ${cat.breed} is chasing a mouse!`);
}
function playWithFish(fish) {
    console.log(`${fish.name} the ${fish.species} is blowing bubbles!`);
}

//Pets Happiness and Energy
function increaseHappinessAndEnergy(pet) {
    if (!pet.happiness) pet.happiness = 0;
    if (!pet.energy) pet.energy = 0;
    pet.happiness += 10;
    pet.energy += 15;
    console.log(`${pet.name}'s happiness is now ${pet.happiness} and energy is now ${pet.energy}`);
}   
// Play With Pets
dogs.forEach(dog => {
    playWithDog(dog);
    increaseHappinessAndEnergy(dog);
});
cats.forEach(cat => {
    playWithCat(cat);
    increaseHappinessAndEnergy(cat);
});
fishTank.forEach(fish => {
    playWithFish(fish);
    increaseHappinessAndEnergy(fish);
});

// Feed Pets
function feedLowEnergyPets() {
    for (let i = 0; i < dogs.length; i++) {
        if (dogs[i].energy < 30) {
            console.log(`Feed ${dogs[i].name} the ${dogs[i].breed} because energy is ${dogs[i].energy}`);
            dogs[i].energy += 20;
        }
    }
    for (let i = 0; i < cats.length; i++) {
        if (cats[i].energy < 30) {
            console.log(`Feed ${cats[i].name} the ${cats[i].breed} because energy is ${cats[i].energy}`);
            cats[i].energy += 20;
        }   
    }
    for (let i = 0; i < fishTank.length; i++) {
        if (fishTank[i].energy < 30) {
            console.log(`Feed ${fishTank[i].name} the ${fishTank[i].species} because energy is ${fishTank[i].energy}`);
            fishTank[i].energy += 20;
        }
    }
}
feedLowEnergyPets();