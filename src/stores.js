import { readable } from 'svelte/store';

export const cards = readable([
    {
        "title": "Make a Difference",
        "description": "Enabling humanitarian organisations to request support from individuals through a simple interface.",
        "url": "make_a_difference"

    },
    {
        "title": "Dental aid",
        "description": "This case study hasn't been written yet :)",
    },
    {
        "title": "Ikea Pre-owned",
        "description": "Service design concept for letting Ikea collect and refurbish furniture.",
        "url": "servicedesign"
    }


]);

export const artPosts = readable([
    {
        "title": "Peak",
        "tools": ["Blender", "Photoshop"],
        "source": "$lib/img/1.png",
        "alt": "A surreal neon 80's landscape"
    },
]);