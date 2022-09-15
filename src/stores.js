import { readable } from 'svelte/store';

export const cards = readable([

    {
        "title": "Make a Difference",
        "description": "Enabling humanitarian organisations to request support from individuals through a simple interface.",
        "url":"make_a_difference"

    },

    {
        "title": "Ikea Pre-owned",
        "description": "Service design concept for letting Ikea collect and refurbish furniture.",
        "url":"servicedesign"
    },

    {
        "title": "Dental aid",
        "description": "Mobile concept for communicating the importance of good dental hygiene for children",
        "url":"dental"
    },
]);

export const artPosts = readable([
    {
        "title": "Peak",
        "tools": ["Blender", "Photoshop"],
        "source":"$lib/img/1.png",
        "alt": "A surreal neon 80's landscape"
    },
]);