import studioWireless from "../assets/products/studio-wireless.webp";
import pocketSpeaker from "../assets/products/pocket-speaker.webp";
import arcDeskLamp from "../assets/products/arc-desk-lamp.webp";
import dailyBackpack from "../assets/products/daily-backpack.webp";
import everydayEarbuds from "../assets/products/everyday-earbuds.webp";
import compactKeyboard from "../assets/products/compact-keyboard.webp";
import dayBottle from "../assets/products/day-bottle.webp";
import canvasTote from "../assets/products/canvas-tote.webp";



export const products = [
    {
        id: "studio-wireless",
        name: "Studio Wireless",
        category: "Audio",
        price: 129,
        image: studioWireless,
        alt: "Ivory over-ear headphones with cushioned ear cups.",
        tagline: "Less noise. More of what matters.",
        description: "Comfortable wireless headphones for focused mornings, long playlists, and everything in between.",
        features: ["Over-ear fit", "Soft fabric ear cushions", "Wireless listening"],
        badge: "Bestseller",
    },
    {
        id: "pocket-speaker",
        name: "Pocket Speaker",
        category: "Audio",
        price: 69,
        image: pocketSpeaker,
        alt: "Sage-green portable speaker with a woven grille and carry loop.",
        tagline: "Good sound, wherever you settle.",
        description: "A compact wireless speaker that moves easily from your desk to your weekend bag.",
        features: ["Compact design", "Woven fabric finish", "Integrated carry loop"],
        badge: "",
    },
    {
        id: "arc-desk-lamp",
        name: "Arc Desk Lamp",
        category: "Workspace",
        price: 89,
        image: arcDeskLamp,
        alt: "Off-white desk lamp with a curved arm and circular base.",
        tagline: "A softer light for your workspace.",
        description: "A minimal desk lamp with a slim curved arm and a compact base that leaves room for your work.",
        features: ["LED light", "Compact circular base", "Matte finish"],
        badge: "New",
    },
    {
        id: "daily-backpack",
        name: "Daily Backpack",
        category: "Everyday carry",
        price: 79,
        image: dailyBackpack,
        alt: "Sand-coloured canvas backpack with dark olive details.",
        tagline: "Your day, neatly packed.",
        description: "A versatile canvas backpack with a roomy main compartment and an easy-access front pocket.",
        features: ["Canvas exterior", "Adjustable shoulder straps", "Zipped front pocket"],
        badge: "",
    },
    {
        id: "everyday-earbuds",
        name: "Everyday Earbuds",
        category: "Audio",
        price: 59,
        image: everydayEarbuds,
        alt: "Ivory wireless earbuds inside an open matching charging case.",
        tagline: "Small size. Everyday freedom.",
        description: "Lightweight wireless earbuds with soft silicone tips and a pocket-sized charging case.",
        features: ["In-ear fit", "Silicone ear tips", "Charging case included"],
        badge: "New",
    },
    {
        id: "compact-keyboard",
        name: "Compact Keyboard",
        category: "Workspace",
        price: 99,
        image: compactKeyboard,
        alt: "Compact keyboard with ivory and light grey blank keycaps.",
        tagline: "More room to think.",
        description: "A compact wireless keyboard with an aluminium body and unprinted keycaps for a clean, considered desk.",
        features: ["Wireless connection", "Compact layout", "Unprinted keycaps"],
        badge: "",
    },
    {
        id: "day-bottle",
        name: "Day Bottle",
        category: "Everyday carry",
        price: 29,
        image: dayBottle,
        alt: "Matte olive-green reusable bottle with a matching screw cap.",
        tagline: "A little less disposable.",
        description: "An insulated stainless-steel bottle with a simple screw cap, made to accompany your daily routine.",
        features: ["Stainless-steel body", "Insulated construction", "Screw-top lid"],
        badge: "",
    },
    {
        id: "canvas-tote",
        name: "Canvas Tote",
        category: "Everyday carry",
        price: 39,
        image: canvasTote,
        alt: "Natural ecru canvas tote bag with two sturdy handles.",
        tagline: "Carry the everyday.",
        description: "A structured cotton canvas tote with comfortable handles and space for your daily essentials.",
        features: ["Cotton canvas", "Reinforced handles", "Open main compartment"],
        badge: "",
    },
];
