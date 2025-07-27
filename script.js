const videoLinks = {
  cartoons: [
    "https://www.youtube.com/embed/2Xc9gXyf2G4",
    "https://www.youtube.com/embed/0bGjlvukgHU",
    "https://www.youtube.com/embed/j1VJgB8_Lxg",
    "https://www.youtube.com/embed/TttM04yVZtM"
  ],
  rhymes: [
    "https://www.youtube.com/embed/j02C2G4dTMo",
    "https://www.youtube.com/embed/U7zS3kLBRzo",
    "https://www.youtube.com/embed/zJ1f0OnEqlQ",
    "https://www.youtube.com/embed/fHI8X4OXluQ"
  ],
  learning: [
    "https://www.youtube.com/embed/1I5ZMmrOfnA",
    "https://www.youtube.com/embed/hRLukslv74M",
    "https://www.youtube.com/embed/qWc7vPb5jUo",
    "https://www.youtube.com/embed/vbKHiJ3jPEI"
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
