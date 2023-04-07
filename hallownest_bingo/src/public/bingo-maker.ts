
let grid_id : number[][] = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];

/**
 * Upate the golbal variable grid_id with the ids of challenges 
 * @param seed : a randomly generated integer
 * @param entries : the list of ids of all the entries that can appear in the bingo grid 
 */
function build_grid_id(seed:number, entries:number[]) {
  for (let row = 0; row < grid_id.length; row++) {
    for (let line = 0; line < grid_id[row].length; line++) {
      let index = seed % entries.length;
      grid_id[row][line] = entries[index]
      entries.splice(index,1)
    }
  }
}

