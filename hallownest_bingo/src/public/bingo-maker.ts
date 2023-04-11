

/**
 * Upate the grid with the ids of challenges in the list of entries
 * @param grid  a matrix representing the bingo grid
 * @param seed  a randomly generated integer
 * @param entries  the list of ids of all the entries that can appear in the bingo grid 
 */
export function build_grid_id(grid:number[][], seed:string, entries:number[]) : number[][]{
  let num_seed : number = parseInt(seed,10);
  let entries_cpy : number[] = JSON.parse(JSON.stringify(entries))
  for (let row = 0; row < grid.length; row++) {
    for (let line = 0; line < grid[row].length; line++) {
      num_seed = gcl_step(num_seed)
      let index = num_seed % entries_cpy.length
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

function manage_seed(seeded : boolean) : string {
  if (seeded) {
    return((<HTMLInputElement>document.getElementById("seed-input")).value)
  }
  else {
    return Math.floor(Math.random() * 10000).toString();
  }
}

type Entries = {"short": number[], "mid":number[], "long": number[]}

export function generate_bingo(len: string, seed: string, grid_id:number[][] ,seeded: boolean, entries: Entries) : [number[][],string] {
    seed = manage_seed(seeded);
    let new_grid_id : number [][];
    switch (len) {
      case "short":
        new_grid_id = build_grid_id(grid_id, seed, entries.short);
        break;
      case "mid":
        new_grid_id = build_grid_id(grid_id, seed, entries.mid);
        break;
      case "long":
        new_grid_id = build_grid_id(grid_id, seed, entries.long);
        break;
      default:
        new_grid_id = build_grid_id(grid_id, seed, entries.short);
        break;
    }
    return[new_grid_id, seed];
  }