
/**
 * Upate the grid with the ids of challenges in the list of entries
 * @param grid  a matrix representing the bingo grid
 * @param seed  a randomly generated integer
 * @param entries  the list of ids of all the entries that can appear in the bingo grid 
 */
export function build_grid_id(grid:number[][], seed:number, entries:number[]) : number[][]{
  for (let row = 0; row < grid.length; row++) {
    for (let line = 0; line < grid[row].length; line++) {
      seed = gcl_step(seed)
      let index = seed % entries.length
      grid[row][line] = entries[index]
      entries.splice(index,1)
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

