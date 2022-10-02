import { readable } from 'svelte/store';

export const cards = readable([
    {
        "title": "Make a Difference",
        "description": "In a team of 6 students we tried to bridge the needs of humanitarian organizations and people's will to contribute with donations of items or engagement.",
        "url": "make_a_difference"

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