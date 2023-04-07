import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";
import challenges from "../public/challenges.json";

export const load: PageServerLoad = async () => {
  var short_entries : number[] = [];
  var mid_entries : number[] = [];
  var long_entries : number[] = [];
  return {
    short : {short_entries},
    mid : {mid_entries},
    long : {long_entries},
    chall : {challenges}
  }
};