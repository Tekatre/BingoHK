import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";
import challenges from "../challenges.json";
import { build_grid_id } from "$lib/bingo-maker";
import { json } from "@sveltejs/kit";

let seed: string = Math.floor(Math.random() * 10000).toString();
let grid_id : number[][] = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];


export const load: PageServerLoad = async () => {
  var short_entries : number[] = [];
  var mid_entries : number[] = [];
  var long_entries : number[] = [];
  var translator : unknown[] = [];
  challenges.forEach(chall => {
    switch (chall.diff) {
      case 1:
        short_entries.push(chall.id) 
        break;
      case 2:
        mid_entries.push(chall.id) 
        break;
      case 3:
        long_entries.push(chall.id) 
        break;
      default:
        long_entries.push(chall.id)
        break;
    }
    translator.push({"id":chall.id, "desc_en": chall.desc_en,"desc_fr": chall.desc_fr})
  });
  grid_id = build_grid_id(grid_id, seed, short_entries)
  return {
    first_seed : seed,
    first_grid : grid_id,
    entries : { "short" : short_entries, "mid" : mid_entries, "long" : long_entries},
    translator : {"trans" : translator}
  }
};