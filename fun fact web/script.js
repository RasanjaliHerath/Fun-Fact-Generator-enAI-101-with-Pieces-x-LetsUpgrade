const funFacts = [
    "Honey never spoils.",
    "A day on Venus is longer than a year on Venus.",
    "Bananas are berries, but strawberries aren't.",
    "There are more stars in the universe than grains of sand on Earth.",
    "Octopuses have three hearts."
];

function generateFunFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    const funFactElement = document.getElementById('fun-fact');
    funFactElement.textContent = funFacts[randomIndex];
}

function addFunFact() {
    const newFactInput = document.getElementById('new-fact');
    const newFact = newFactInput.value.trim();
    
    if (newFact) {
        funFacts.push(newFact);
        newFactInput.value = ''; // Clear the input field
        alert('Fun fact added!');
    } else {
        alert('Please enter a fun fact.');
    }
}
