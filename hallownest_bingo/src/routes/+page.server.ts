import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";
import challenges from "../public/challenges.json";

export const load: PageServerLoad = async () => {
  var short_entries : Int16Array[] = [];
  var mid_entries : Int16Array[] = [];
  var long_entries : Int16Array[] = [];
  return {
    short : {short_entries},
    mid : {mid_entries},
    long : {long_entries},
    chall : {challenges}
  }
};