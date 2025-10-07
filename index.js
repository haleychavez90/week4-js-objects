// DAY ONE
// Create A Pet
const petObject = {
  name: "Loki",
  species: "Dog", 
  happiness: 50,

    // Play With Pet
    play: function() {
        if (this.happiness < 60) {
            this.happiness += 10;
            console.log(`${this.name} is having fun playing! Happiness increased to ${this.happiness}.`);
        } else {
            console.log(`${this.name} is already very happy!`);
        }
    },
    // Feed Pet
    feed: function() {
        if (this.happiness < 70) {
            this.happiness += 20;
            console.log(`${this.name} is busy eating! Happiness increased to ${this.happiness}.`);
        } else {
            console.log(`${this.name} is not very hungry right now!`);
        }
    },
    // Status Of Pet
    status: function() {
        console.log(`${this.name} the ${this.species} has a happiness level of ${this.happiness}.`);
    }
};  

// Status, Play, And Feed The Pet
petObject.status();
petObject.play();
petObject.feed();
petObject.status();

// Rename The Pet
petObject.name = "Boost";
console.log(`My pet's new name is ${petObject.name}.`);