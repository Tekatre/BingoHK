import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";
import challenges from "../public/challenges.json";
import { build_grid_id } from "../public/bingo-maker";

let seed: number = Math.floor(Math.random() * 10000);
let grid_id : number[][] = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];


export const load: PageServerLoad = async () => {
  var short_entries : number[] = [];
  var mid_entries : number[] = [];
  var long_entries : number[] = [];
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
  });
  grid_id = build_grid_id(grid_id, seed, short_entries)
  return {
    first_grid : {grid_id},
    short : {short_entries},
    mid : {mid_entries},
    long : {long_entries},
    chall : {challenges}
  }
};