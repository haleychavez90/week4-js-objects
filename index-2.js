// DAY TWO
// Create a Pet Function
function createPet(name, species) {
    return {
        name: "Loki",
        species: "Dog",
        happiness: 50,
        energy: 100,

// Play With Pet
        play: function() {
            if (this.happiness < 60) {
                this.happiness += 10;
                this.energy -= 80;
                console.log(`${this.name} is having fun playing! Happiness increased to ${this.happiness}, energy decreased to ${this.energy}.`);
            } else {
                console.log(`${this.name} is already very happy!`);
            }
        },

// Feed Pet
        feed: function() {
            if (this.happiness < 80) {
                this.happiness += 20;   
                this.energy += 100;
                console.log(`${this.name} is busy eating! Happiness increased to ${this.happiness}, energy increased to ${this.energy}.`);
            } else {
                console.log(`${this.name} is not very hungry right now!`);
            }   
        },

// Status Of Pet
        status: function() {
            console.log(`${this.name} the ${this.species} has a happiness level of ${this.happiness} and energy level of ${this.energy}.`);
        }
    };  
}

// Create Multiple Pets
const pet1 = createPet("Loki", "Dog");
const pet2 = createPet("Luna", "Cat");
const pet3 = createPet("Frank", "Fish");

// Status, Play, And Feed Each Pet
pet1.status();
pet1.play();
pet1.feed();
pet1.status();  
pet2.status();
pet2.play();
pet2.feed();
pet2.status();  
pet3.status();
pet3.play();
pet3.feed();
pet3.status();

// Pet Resting
pet1.energy += 100;
console.log(`${pet1.name} is resting. Energy is restored to ${pet1.energy}.`);
pet1.status();
