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
