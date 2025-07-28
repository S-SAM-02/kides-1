const videoLinks = {
  cartoons: [
    "https://www.youtube.com/embed/MtN1YnoL46Q", // Peppa Pig - The Balloon Ride
    "https://www.youtube.com/embed/2S__fbCGwOM", // Masha and The Bear - Recipe for Disaster
    "https://www.youtube.com/embed/9xv-FjbXaqk", // Paw Patrol - Pups Save the Penguins
    "https://www.youtube.com/embed/1jv0G6w5BzY"  // Tom & Jerry - Classic Cartoon Compilation
  ],
  rhymes: [
    "https://www.youtube.com/embed/Jr8l8p2WkZk", // Wheels on the Bus
    "https://www.youtube.com/embed/yCjJyiqpAuU", // Baby Shark Dance
    "https://www.youtube.com/embed/75p-N9YKqNo", // Johny Johny Yes Papa
    "https://www.youtube.com/embed/0peZ5AN5vs8"  // Five Little Ducks
  ],
  learning: [
    "https://www.youtube.com/embed/h0Kp_J9kvNM", // ABC Song
    "https://www.youtube.com/embed/2Xy2e78qxNg", // Colors Song
    "https://www.youtube.com/embed/OPzIbbvoiMA", // Shapes Song
    "https://www.youtube.com/embed/8yteMugRAc0"  // Counting 1-20
  ]
};

function respond(type) {
  const chatText = document.getElementById('aiText');
  const videoArea = document.getElementById('videoArea');

  chatText.innerText = `Yay! Let's watch some ${type}! 🎬`;

  videoArea.innerHTML = '';
  videoLinks[type].forEach(link => {
    const iframe = document.createElement('iframe');
    iframe.width = "300";
    iframe.height = "200";
    iframe.src = link;
    iframe.allowFullscreen = true;
    videoArea.appendChild(iframe);
     });
}
