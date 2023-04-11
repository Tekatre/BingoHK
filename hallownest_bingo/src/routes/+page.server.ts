import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";
import challenges from "../public/challenges.json";
import { build_grid_id } from "../public/bingo-maker";
import { json } from "@sveltejs/kit";

let seed: number = Math.floor(Math.random() * 10000);
let grid_id : number[][] = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];


export const load: PageServerLoad = async () => {
  var short_entries : number[] = [];
  var mid_entries : number[] = [];
  var long_entries : number[] = [];
  var translator : any[] = [];
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
    first_grid : {grid_id},
    short : {"value" :short_entries},
    mid : {"value" :mid_entries},
    long : {"value" :long_entries},
    translator : {"trans" : translator}
  }
};