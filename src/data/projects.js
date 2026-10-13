// Each project needs `title`, `category` and `image` ({ small, large }).
// Optional: `description`, `tags`, `liveUrl`, `repoUrl` — cards show links when present.
// Generate images with: node scripts/optimize-images.mjs <file> src/assets/img/<name> 600 1170
import project1Sm from "../assets/img/project-1-600.webp";
import project1Lg from "../assets/img/project-1-1170.webp";
import project2Sm from "../assets/img/project-2-600.webp";
import project2Lg from "../assets/img/project-2-1170.webp";
import project3Sm from "../assets/img/project-3-600.webp";
import project3Lg from "../assets/img/project-3-1170.webp";
import project4Sm from "../assets/img/project-4-600.webp";
import project4Lg from "../assets/img/project-4-1170.webp";
import project5Sm from "../assets/img/project-5-600.webp";
import project5Lg from "../assets/img/project-5-1170.webp";
import project6Sm from "../assets/img/project-6-600.webp";
import project6Lg from "../assets/img/project-6-1170.webp";

const projects = [
  {
    title: "University Landing Page",
    category: "Web Design",
    image: { small: project1Sm, large: project1Lg },
  },
  {
    title: "Music Streaming Dashboard",
    category: "Dashboard UI",
    image: { small: project2Sm, large: project2Lg },
  },
  {
    title: "Movie Streaming Dashboard",
    category: "Dashboard UI",
    image: { small: project3Sm, large: project3Lg },
  },
  {
    title: "NFT Marketplace",
    category: "Web Design",
    image: { small: project4Sm, large: project4Lg },
  },
  {
    title: "Dental Clinic Website",
    category: "Web Design",
    image: { small: project5Sm, large: project5Lg },
  },
  {
    title: "Agency & Portfolio Theme",
    category: "Web Design",
    image: { small: project6Sm, large: project6Lg },
  },
];

export default projects;
