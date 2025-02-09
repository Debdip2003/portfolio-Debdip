import forever from "..//assets/forever.jpeg";
import mma from "..//assets/mma.jpg";
import spotifyClone from "..//assets/spotifyClone.jpeg";

const projects = [
  {
    id: 1,
    img: forever,
    name: "Forever (e-commerce)",
    desc: "Complete and fully functional e-commerce website built with ReactJS and Tailwind CSS, offering a sleek design and seamless shopping experience.",
    firstButton: "Demo",
    secondButton: "Github Link",
    firstLink: "https://e-commerce-pi-teal.vercel.app/",
    secondLink: "https://github.com/Debdip2003/e-commerce",
    firstButtonDisabled: false,
    secondButtonDisabled: false,
  },
  {
    id: 2,
    img: mma,
    name: "Next Level MMA",
    desc: "Fully functional website developed for a boxing academy in Kolkata, designed with ReactJS and Tailwind CSS for a modern, user-friendly experience.",
    firstButton: "Demo",
    secondButton: "Github Link",
    firstLink: "https://nextlevelmma.vercel.app/",
    secondLink: "https://github.com/Debdip2003/mma-website",
    firstButtonDisabled: false,
    secondButtonDisabled: false,
  },
  {
    id: 3,
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
