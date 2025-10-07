// DAY 4
// Create Three Kennels - Arrays - Dogs Cats FishTank
let dogs = [];
let cats = [];
let fishTank = [];

// Add Dogs
dogs.push({ name: "Loki", breed: "Husky"});
dogs.push({ name: "Boost", breed: "Chihuahua"});
dogs.push({ name: "Bella", breed: "Pit"});
dogs.push({ name: "Tiny", breed: "Dane"});
dogs.push({ name: "Toby", breed: "Bulldog"});
dogs.push({ name: "Lucky", breed: "Beagle"});

// Add Cats
cats.push({ name: "Meow", breed: "Siamese",});
cats.push({ name: "Girl", breed: "Maine Coon"});
cats.push({ name: "Prissy", breed: "Persian"});
cats.push({ name: "Thor", breed: "Bengal"});
cats.push({ name: "Theo", breed: "Sphynx"});

// Add Fish
fishTank.push({ name: "Bubbles", species: "Clownfish"});
fishTank.push({ name: "Luna", species: "Blue Tang"});
fishTank.push({ name: "Flame", species: "Clownfish"});
fishTank.push({ name: "iBite", species: "Great White Shark"});
fishTank.push({ name: "Doc", species: "Surgeonfish"});

// Feed All Pets
function feedAllPets() {
    for (let i = 0; i < dogs.length; i++) {
        console.log(`Feed ${dogs[i].name} the ${dogs[i].breed}`);
    }
    for (let i = 0; i < cats.length; i++) {
        console.log(`Feed ${cats[i].name} the ${cats[i].breed}`);
    }
    for (let i = 0; i < fishTank.length; i++) {
        console.log(`Feed ${fishTank[i].name} the ${fishTank[i].species}`);
    }
}
feedAllPets();

// Status Report Of All Pets
function statusReport() {
    console.log("\n--- Status Report ---");
    console.log(`Dogs: ${dogs.length}`);
    dogs.forEach(dog => console.log(`- ${dog.name}, Breed: ${dog.breed}`));
    console.log(`Cats: ${cats.length}`);
    cats.forEach(cat => console.log(`- ${cat.name}, Breed: ${cat.breed}`));
    console.log(`Fish: ${fishTank.length}`);
    fishTank.forEach(fish => console.log(`- ${fish.name}, Species: ${fish.species}`));
}
statusReport();
