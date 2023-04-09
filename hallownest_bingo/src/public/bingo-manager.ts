export function cell_select_switch(bingo_cell:HTMLButtonElement, win_grid : number[][]): void {
  let button_id : number = parseInt(bingo_cell.id)
  if (bingo_cell.classList.contains("selected")) {
    bingo_cell.classList.remove("selected")
    win_grid[Math.floor(button_id/10)][button_id-(Math.floor(button_id/10))*10] = 0
  }
  else {
    bingo_cell.classList.add("selected")
    win_grid[Math.floor(button_id/10)][button_id-(Math.floor(button_id/10))*10] = 1
  }
}

export function check_win(win_grid: number [][]) {
  clear_grid_win(win_grid);
  check_line(win_grid);
  check_column(win_grid);
  check_diag(win_grid);
}

function clear_grid_win(win_grid:number[][]) {
  for (let line = 0; line < win_grid.length; line++) {
    for (let column = 0; column < win_grid.length; column++) {
      document.getElementById(line.toString()+column.toString())?.getElementsByClassName("cell-handler")[0].classList.remove("win")
    }
  }
}

function check_line(grid: number[][]) {
  for (let line = 0; line < grid.length; line++) {
    let buffer : number = 1
    for (let column = 0; column < grid[line].length; column++) {
      buffer = buffer * grid[line][column];
    }
    if (buffer == 1) {
      switch_win_line(line, grid[line].length)
    }
  }
}

function switch_win_line(line:number, n_column:number) {
  for (let index = 0; index < n_column; index++) {
    document.getElementById(line.toString()+index.toString())?.getElementsByClassName("cell-handler")[0].classList.add("win")
  }
}

function check_column(grid : number[][]) {
  for (let column = 0; column < grid[0].length; column++) {
    let buffer :number = 1;
    for (let line = 0; line < grid.length; line++) {
      buffer = buffer * grid[line][column];
    }
    if (buffer == 1) {
      switch_win_column(column, grid.length)
    }
  }
}

function switch_win_column(column:number, n_line:number) {
  for (let index = 0; index < n_line; index++) {
    document.getElementById(index.toString()+column.toString())?.getElementsByClassName("cell-handler")[0].classList.add("win")
  }
}

function check_diag(grid :number[][]) {
  let NW_buffer = 1
  let NE_buffer = 1
  for (let index = 0; index < grid.length; index++) {
    NW_buffer = NW_buffer * grid[index][index]
    NE_buffer = NE_buffer * grid[grid.length - 1 - index][index]
  }
  if (NW_buffer == 1) {
    for (let index = 0; index < grid.length; index++) {
      document.getElementById(index.toString()+index.toString())?.getElementsByClassName("cell-handler")[0].classList.add("win")
    }
  }
  if (NE_buffer == 1) {
    for (let index = 0; index < grid.length; index++) {
      document.getElementById((grid.length - 1 - index).toString()+index.toString())?.getElementsByClassName("cell-handler")[0].classList.add("win")
    }
  }
}