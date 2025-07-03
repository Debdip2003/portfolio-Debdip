import forever from "..//assets/forever.jpeg";
import mma from "..//assets/mma.jpg";
import spotifyClone from "..//assets/spotifyClone.jpeg";
import megatronix from "../assets/megatronix.png";

const projects = [
  {
    id: 1,
    img: forever,
    name: "E-Commerce Website",
    desc: "Built a responsive frontend interface using React and Tailwind CSS showcasing 50+ products. Implemented dynamic cart and product filtering with data stored in Firebase Firestore. Enhanced mobile experience and performance optimization.",
    firstButton: "Live Demo",
    secondButton: "GitHub",
    firstLink: "https://e-commerce-pi-teal.vercel.app/",
    secondLink: "https://github.com/Debdip2003/e-commerce",
    firstButtonDisabled: false,
    secondButtonDisabled: false,
  },
  {
    id: 2,
    img: mma,
    name: "Next Level MMA Website",
    desc: "Designed content-managed website; improved user retention by 45%. Enhanced UI responsiveness and load speed.",
    firstButton: "Live Demo",
    secondButton: "GitHub",
    firstLink: "https://nextlevelmma.vercel.app/",
    secondLink: "https://github.com/Debdip2003/mma-website",
    firstButtonDisabled: false,
    secondButtonDisabled: false,
  },
  {
    id: 3,
    img: megatronix,
    name: "Tech Fest Sites (Paridhi/Megatronix)",
    desc: "Built registration system for 700+ users with automated GID/TID. Created animated, responsive interfaces for multi-event coordination.",
    firstButton: "Demo",
    secondButton: "GitHub",
    firstButtonDisabled: false,
    secondButtonDisabled: false,
  },
  {
    id: 4,
    img: spotifyClone,
    name: "Spotify-Clone",
    desc: " Fully functional Spotify clone, expertly crafted with React and Tailwind CSS, utilizing Spotify's own API for a seamless music streaming experience.",
    firstButton: "Demo",
    secondButton: "Github Link",
    firstLink: "https://spotify-clone-hazel-beta.vercel.app/",
    secondLink: "https://github.com/Debdip2003/spotify-clone",
    firstButtonDisabled: false,
    secondButtonDisabled: false,
  },
];

export default projects;
