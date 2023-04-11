<script lang="ts">
  import type { PageData } from "./$types";
  import { build_grid_id, translate, manage_seed } from "../public/bingo-maker";
  import { cell_select_switch, check_win } from "../public/bingo-manager";

  export let data: PageData;

  function handle_cell_click(event: MouseEvent) {
    if (event.currentTarget instanceof HTMLButtonElement) {
      cell_select_switch(event.currentTarget, win_grid);
      check_win(win_grid);
    } else {
      console.log(typeof event.currentTarget);
    }
    //console.log(win_grid);
  }

  function handle_length_mode_select(event: MouseEvent) {
    len = (<HTMLButtonElement>event.currentTarget).id;
    generate_bingo(len, false);
  }

  let win_grid: number[][] = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];

  let grid_id: number[][] = data.first_grid.grid_id;
  let lang: string = "fr";
  let len: string = "short";

  function generate_bingo(len: string, seeded: boolean) {
    let seed: number = manage_seed(seeded);
    switch (len) {
      case "short":
        grid_id = build_grid_id(grid_id, seed, data.short.value);
        break;
      case "mid":
        grid_id = build_grid_id(grid_id, seed, data.mid.value);
        break;
      case "long":
        grid_id = build_grid_id(grid_id, seed, data.long.value);
        break;
      default:
        grid_id = build_grid_id(grid_id, seed, data.short.value);
        break;
    }
    (<HTMLInputElement>document.getElementById("seed-input")).value =
      seed.toString();
  }
</script>

<main>
  <section class="bingo-grid">
    <div class="bingo-row">
      <button class="bingo-cell" id="00" on:click={handle_cell_click}
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[0][0], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell" id="01" on:click={handle_cell_click}
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[0][1], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell" id="02" on:click={handle_cell_click}
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[0][2], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell" id="03" on:click={handle_cell_click}
        ><div class="cell-handler lock">
          <span class="cell-text"
            >{translate(grid_id[0][3], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell" id="04" on:click={handle_cell_click}
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[0][4], lang, data.translator.trans)}</span
          >
        </div></button
      >
    </div>
    <div class="bingo-row">
      <button class="bingo-cell" id="10" on:click={handle_cell_click}
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[1][0], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell" id="11" on:click={handle_cell_click}
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[1][1], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell" id="12" on:click={handle_cell_click}
        ><div class="cell-handler">
          {translate(grid_id[1][2], lang, data.translator.trans)}
        </div></button
      >
      <button class="bingo-cell" id="13" on:click={handle_cell_click}
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[1][3], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell" id="14" on:click={handle_cell_click}
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[1][4], lang, data.translator.trans)}</span
          >
        </div></button
      >
    </div>
    <div class="bingo-row">
      <button class="bingo-cell" id="20" on:click={handle_cell_click}
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[2][0], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell" id="21" on:click={handle_cell_click}
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[2][1], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell" id="22" on:click={handle_cell_click}
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[2][2], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell" id="23" on:click={handle_cell_click}
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[2][3], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell" id="24" on:click={handle_cell_click}
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[2][4], lang, data.translator.trans)}</span
          >
        </div></button
      >
    </div>
    <div class="bingo-row">
      <button class="bingo-cell" id="30" on:click={handle_cell_click}
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[3][0], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell" id="31" on:click={handle_cell_click}
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[3][1], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell" id="32" on:click={handle_cell_click}
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[3][2], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell" id="33" on:click={handle_cell_click}
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[3][3], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell" id="34" on:click={handle_cell_click}
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[3][4], lang, data.translator.trans)}</span
          >
        </div></button
      >
    </div>
    <div class="bingo-row">
      <button class="bingo-cell" id="40" on:click={handle_cell_click}
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[4][0], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell" id="41" on:click={handle_cell_click}
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[4][1], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell" id="42" on:click={handle_cell_click}
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[4][2], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell" id="43" on:click={handle_cell_click}
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[4][3], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell" id="44" on:click={handle_cell_click}
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[4][4], lang, data.translator.trans)}</span
          >
        </div></button
      >
    </div>
  </section>

  <div class="vline" />

  <aside>
    <section class="option-display">
      <h4>SELECTION</h4>
      <div class="button-list">
        <button class="inter-button"><div class="button-handler">X</div></button
        >
        <button class="inter-button"><div class="button-handler">X</div></button
        >
      </div>
    </section>
    <section class="option-display">
      <h4>THEME</h4>
      <div class="button-list">
        <button class="inter-button"><div class="button-handler">W</div></button
        >
        <button class="inter-button"><div class="button-handler">I</div></button
        >
        <button class="inter-button"><div class="button-handler">P</div></button
        >
      </div>
    </section>
  </aside>
</main>

<footer>
  <h2>GENERATE GRID</h2>
  <section class="bingo-generator">
    <div class="button-list">
      <button
        class="inter-button selected"
        id="short"
        on:click={handle_length_mode_select}
      >
        <div class="button-handler">Short</div></button
      >
      <button class="inter-button" id="mid" on:click={handle_length_mode_select}
        ><div class="button-handler">Mid</div></button
      >
      <button
        class="inter-button"
        id="long"
        on:click={handle_length_mode_select}
        ><div class="button-handler">Long</div></button
      >
      <button class="inter-button" id="?"
        ><div class="button-handler">?</div></button
      >
    </div>
    <form class="seed-form">
      <span>SEED :</span>
      <input type="text" id="seed-input" />
      <input type="button" value="RUN" class="run-button" />
    </form>
  </section>
</footer>
