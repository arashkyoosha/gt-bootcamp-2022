var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW


console.log(constellations);

constellations.unshift("Canis Major");

console.log(constellations);

console.log(planets);

planets.pop("Venus");

console.log(planets);

var galaxy = constellations.concat(planets);

console.log(galaxy);

var newStar = star.toUpperCase();

console.log(star);
console.log(newStar);