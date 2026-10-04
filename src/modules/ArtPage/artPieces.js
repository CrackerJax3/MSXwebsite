// Art pieces shown on the /art page. Images live in ./images/<piece>/ as
// NN.webp (full size, max 1920px) and NN-small.webp (thumbnail, max 480px).
const files = import.meta.glob("./images/*/*.webp", { eager: true, import: "default" });

const img = (piece, name) => ({
    full: files[`./images/${piece}/${name}.webp`],
    small: files[`./images/${piece}/${name}-small.webp`],
});

const artPieces = [
    {
        id: "nosecone",
        title: "Nosecone Sculpture",
        location: "MSX Boca Chica, Brownsville TX",
        description: "A life-size aluminum wire frame of the SpaceX Starship nose cone, taken from concept to installation in 40 days.",
        stats: ["30 FT DIAMETER", "40 FT TALL", "40 DAYS"],
        images: ["01", "02", "03", "04", "05", "06"].map((n) => img("nosecone", n)),
    },
    {
        id: "fibonacci",
        title: "Fibonacci Sculpture",
        location: "MSX Boca Chica, Brownsville TX",
        description: "An aluminum Fibonacci spiral built from leftover Nosecone material. Designed in CAD, bent on a tube roller and TIG welded, with students from Denmark and France trained along the way.",
        stats: ["30 FT TALL", "48 FT WIDE", "12 DAYS"],
        images: ["00", "01", "02", "03", "04", "06", "07"].map((n) => img("fibonacci", n)),
    },
    {
        id: "sofa",
        title: "Corbusier Saudi Sofa",
        location: "MSX Saudi Arabia",
        description: "A 3 meter sofa welded from 1.5 inch rebar and upholstered in a Saudi cultural pattern, built by three apprentices who started with zero experience.",
        stats: ["3 M WIDE", "REBAR FRAME", "3 APPRENTICES"],
        images: ["01", "02", "03", "04", "05"].map((n) => img("sofa", n)),
    },
    {
        id: "camel",
        title: "Voronoi Camel",
        location: "Saudi Arabia",
        description: "A 2 meter tall, 2 meter long 3D printed camel sculpture built from a voronoi structural pattern.",
        stats: ["2 M TALL", "2 M LONG", "3D PRINTED"],
        images: ["01", "02"].map((n) => img("camel", n)),
    },
    {
        id: "leopard",
        title: "Voronoi Arabian Leopard",
        location: "Saudi Arabia",
        description: "A life-sized Arabian leopard built from a voronoi structural pattern.",
        stats: ["LIFE SIZED", "VORONOI PATTERN"],
        images: ["01"].map((n) => img("leopard", n)),
    },
    {
        id: "moa",
        title: "MOA Crew Painting",
        location: "New York City",
        description: "A collaborative crew painting made with ocean voyager and artist Reid Stowe.",
        stats: ["COLLABORATION", "REID STOWE"],
        images: ["01", "02", "03", "04"].map((n) => img("moa", n)),
    },
    {
        id: "piano",
        title: "UN SDG Floor Piano",
        location: "Al-Khobar, Saudi Arabia",
        description: "A 4 x 12 ft interactive LED floor piano, programmed in one week. 120 participants drew UN Sustainable Development Goal artwork that was scanned into the keys.",
        stats: ["4 X 12 FT", "120 ARTISTS", "1 WEEK"],
        images: ["01", "02", "03", "04", "05"].map((n) => img("piano", n)),
    },
];

export default artPieces;
