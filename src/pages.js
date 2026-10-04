// Per-page titles and descriptions. Used at runtime to set document.title,
// and by vite.config.js to write a static HTML file for each page so search
// engines and link previews see the right tags without running JavaScript.
export const SITE_URL = "https://msxbocachica.org";

const pages = {
    "/": {
        title: "MSX | Maker Space Exploration",
        description: "Maker Space Exploration (MSX) builds hands-on maker spaces, large scale art and STEM projects that bring communities together, in Boca Chica, Texas and Saudi Arabia.",
    },
    "/art": {
        title: "Art | MSX Maker Space Exploration",
        description: "Large scale sculpture, installations and collaborations by MSX: the Starship Nosecone and Fibonacci sculptures, voronoi animals, a crew painting with Reid Stowe and more.",
    },
    "/about": {
        title: "About & Contact | MSX Maker Space Exploration",
        description: "What MSX Maker Space Exploration does, where it works (Boca Chica, Texas and Saudi Arabia) and how to book a workshop, event or build.",
    },
    "/projects": {
        title: "Projects | MSX Maker Space Exploration",
        description: "Projects from MSX and Sawy-Sawy: Sawy the Camel, the Barbacoa longhorn bull and the Sawy-Sawy burger assembler.",
    },
    "/downloads": {
        title: "Sawy-Sawy Downloads | MSX Maker Space Exploration",
        description: "Firmware, code and build guides for the Sawy-Sawy microcontroller kits.",
    },
    "/privacy": {
        title: "Privacy Policy | MSX Maker Space Exploration",
        description: "Privacy policy for msxbocachica.org.",
    },
};

export default pages;
