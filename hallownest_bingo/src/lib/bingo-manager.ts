
/**
 * Checks if the grid has winning cells and changes the classes accordingly
 * @param win_grid a number matrix which values are one where the grid is selected and 0 where it isn't
 * @param classes_grid a string matrix with the classes of each grid cell
 */
export function check_win(win_grid: number [][], classes_grid: string[][]) {
  check_line(win_grid, classes_grid);
  check_column(win_grid, classes_grid);
  check_diag(win_grid, classes_grid);
}

/**
 * Check if any row is completly selected and chnages the classes accordingly
 * @param grid a number matrix which values are one where the grid is selected and 0 where it isn't
 * @param classes_grid a string matrix with the classes of each grid cell
 */
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

/**
 * Check if any column is completly selected and chnages the classes accordingly
 * @param grid a number matrix which values are one where the grid is selected and 0 where it isn't
 * @param classes_grid a string matrix with the classes of each grid cell
 */
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

/**
 * Check if any diagonal is completly selected and chnages the classes accordingly
 * @param grid a number matrix which values are one where the grid is selected and 0 where it isn't
 * @param classes_grid a string matrix with the classes of each grid cell
 */
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
      set_win(classes_grid, grid.length -1 - index, index);
    }
  }
}

/**
 * Changes the class of the indicated cell to display the win
 * @param classes_grid a string matrix with the classes of each grid cell
 * @param row number : the cell's row index
 * @param column number : the cell's column index
 */
function set_win(classes_grid:string[][], row : number ,column: number) {
  if (classes_grid[row][column] == "selected" || classes_grid[row][column] == "win") {
    classes_grid[row][column] = "win"
  }
}
