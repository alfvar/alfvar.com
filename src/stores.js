import { readable } from 'svelte/store';
import { pb } from '$lib/pocketbase';
import { onMount } from 'svelte';

let posts = [];

async function fetchData() {
    const resultList = await pb.collection('portfolio_posts').getList(1, 20, {
        sort: 'created'
    });
    posts = resultList.items;
}
onMount(() => {
    fetchData();
});

export const cards = readable([
    {
        "title": "Make a Difference",
        "description": "Bridging the needs of humanitarian organizations and people's will to contribute.",
        "url": "/work/make_a_difference"



    },

    /**{
            "title": "Active8 Planet",
            "description": "Exploring barriers to sharing of personal mobility. An international sustainability project co-founded by the EU Erasmus+ programme.",
            "url": "/work/active8"
    
        }
        */


]);
