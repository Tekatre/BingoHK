

/**
 * Upate the grid with the ids of challenges in the list of entries
 * @param grid  a matrix representing the bingo grid
 * @param seed  a randomly generated integer
 * @param entries  the list of ids of all the entries that can appear in the bingo grid 
 */
export function build_grid_id(grid:number[][], seed:number, entries:number[]) : number[][]{
  let entries_cpy : number[] = JSON.parse(JSON.stringify(entries))
  for (let row = 0; row < grid.length; row++) {
    for (let line = 0; line < grid[row].length; line++) {
      seed = gcl_step(seed)
      let index = seed % entries_cpy.length
      grid[row][line] = entries_cpy[index]
      entries_cpy.splice(index,1)
    }
  }
  return grid
}

let coef_a : number = 74;
let coef_c : number = 75;
let modulo : number = 2 ** 16+1;

/**
 * Take one step on the seed wthout any risk of cycling to a previous step
 * @param seed  a randomly generated integer
 * @returns  The seed after one step
 */
function gcl_step(seed:number) : number {
  return (coef_a * seed + coef_c) % modulo;
}

/**
 * Takes an id to link it to the challenge description in the correct langage
 * @param id the id of the challenge put in the grid
 * @param langage a string code that indicates a langage ("en" for english)
 * @param translator a list of Json elements containing an id and the different descriptions
 * @returns the description of the challenge with the id
 */
export function translate(id:number, langage:String, translator: any[]) : string {
  let desc : string = "placeholder"
  translator.forEach(element => {
    if (element.id == id) {
      switch (langage) {
        case "fr":
          desc = element.desc_fr
          break
        case "en":
          desc = element.desc_en
          break
        default:
          desc = element.desc_en
      }
    }
  });
  return desc
}

export function manage_seed(seeded : boolean) : number {
  if (seeded) {
    return(parseInt((<HTMLInputElement>document.getElementById("seed-input")).value))
  }
  else {
    return Math.floor(Math.random() * 10000);
  }
}