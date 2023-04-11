<script lang="ts">
  import type { PageData } from "./$types";
  import { translate, generate_bingo } from "../public/bingo-maker";
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
    [grid_id, seed] = generate_bingo(len, seed, grid_id, false, data.entries);
  }

  let win_grid: number[][] = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];

  let grid_id: number[][] = data.first_grid;
  let lang: string = "fr";
  let len: string = "short";
  let seed: string = data.first_seed;
  let select_state: boolean = true;
</script>

<main>
  <section class="bingo-grid">
    {#each grid_id as row, i}
      <div class="bingo-row">
        {#each row as cell, j}
          <button
            class="bingo-cell"
            id={`${i}${j}`}
            on:click={handle_cell_click}
          >
            <div class="cell-handler">
              <span class="cell-text">
                {translate(cell, lang, data.translator.trans)}
              </span>
            </div>
          </button>
        {/each}
      </div>
    {/each}
  </section>

  <div class="vline" />

  <aside>
    <section class="option-display">
      <h4>SELECTION</h4>
      <div class="button-list">
        <button class="inter-button"
          ><div class="button-handler">
            <img src="../src/sel_icon.png" sizes="120%" />
          </div></button
        >
        <button class="inter-button"
          ><div class="button-handler">
            <img src="../src/lock_icon.png" />
          </div></button
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
      <input type="text" id="seed-input" bind:value={seed} />
      <input type="button" value="RUN" class="run-button" />
    </form>
  </section>
</footer>
