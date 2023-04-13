

export function check_win(win_grid: number [][], classes_grid: string[][]) {
  check_line(win_grid, classes_grid);
  check_column(win_grid, classes_grid);
  check_diag(win_grid, classes_grid);
}

function check_line(grid: number[][], classes_grid: string[][]) {
  for (let row = 0; row < grid.length; row++) {
    let buffer : number = 1
    for (let column = 0; column < grid[row].length; column++) {
      buffer = buffer * grid[row][column];
    }
    if (buffer == 1) {
      for (let column = 0; column < grid[row].length; column++) {
        set_win(classes_grid, row, column);
      }
    }
  }
}

function check_column(grid : number[][], classes_grid: string[][]) {
  for (let column = 0; column < grid[0].length; column++) {
    let buffer :number = 1;
    for (let row = 0; row < grid.length; row++) {
      buffer = buffer * grid[row][column];
    }
    if (buffer == 1) {
      for (let row = 0; row < grid.length; row++) {
        set_win(classes_grid, row, column);
      }
    }
  }
}

function check_diag(grid :number[][], classes_grid: string[][]) {
  let NW_buffer = 1
  let NE_buffer = 1
  for (let index = 0; index < grid.length; index++) {
    NW_buffer = NW_buffer * grid[index][index]
    NE_buffer = NE_buffer * grid[grid.length - 1 - index][index]
  }
  if (NW_buffer == 1) {
    for (let index = 0; index < grid.length; index++) {
      set_win(classes_grid, index, index);
    }
  }
  if (NE_buffer == 1) {
    for (let index = 0; index < grid.length; index++) {
      set_win(classes_grid, grid.length- index, index);
    }
  }
}

function set_win(classes_grid:string[][], row : number ,column: number) {
  if (classes_grid[row][column] == "selected" || classes_grid[row][column] == "win") {
    classes_grid[row][column] = "win"
  }
}



export function clear_grid_select(win_grid:number[][], classes_grid:string[][]) : [number[][],string[][]] {
  return([[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],[["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""]]])
}