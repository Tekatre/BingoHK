
export function handle_cell_click(event: MouseEvent) {
  if (event.currentTarget instanceof HTMLButtonElement){
    cell_select_switch(event.currentTarget)
  }
  else {
    console.log(typeof(event.currentTarget))
  }
}

function cell_select_switch(bingo_cell:HTMLButtonElement) {
  if (bingo_cell.classList.contains("selected")) {
    bingo_cell.classList.remove("selected")
  }
  else {
    bingo_cell.classList.add("selected")
  }
}