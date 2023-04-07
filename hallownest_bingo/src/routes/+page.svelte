<script lang="ts">
  import type { PageData } from "./$types";
  import "../public/bingo-maker.ts";

  export let data: PageData;

  let grid_id: number[][] = data.first_grid.grid_id;
</script>

<main>
  <section class="bingo-grid">
    <div class="bingo-row">
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text">{grid_id[0][0]}</span>
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text">{grid_id[0][1]}</span>
        </div></button
      >
      <button class="bingo-cell selected"
        ><div class="cell-handler">
          <span class="cell-text">{grid_id[0][2]}</span>
        </div></button
      >
      <button class="bingo-cell selected"
        ><div class="cell-handler">
          <span class="cell-text">{grid_id[0][3]}</span>
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text">{grid_id[0][4]}</span>
        </div></button
      >
    </div>
    <div class="bingo-row">
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text">{grid_id[1][0]}</span>
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text">{grid_id[1][1]}</span>
        </div></button
      >
      <button class="bingo-cell selected"
        ><div class="cell-handler">
          {grid_id[1][2]}
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text">{grid_id[1][3]}</span>
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text">{grid_id[1][4]}</span>
        </div></button
      >
    </div>
    <div class="bingo-row">
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text">{grid_id[2][0]}</span>
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text">{grid_id[2][1]}</span>
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text">{grid_id[2][2]}</span>
        </div></button
      >
      <button class="bingo-cell selected"
        ><div class="cell-handler">
          <span class="cell-text">{grid_id[2][3]}</span>
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text">{grid_id[2][4]}</span>
        </div></button
      >
    </div>
    <div class="bingo-row">
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text">{grid_id[3][0]}</span>
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text">{grid_id[3][1]}</span>
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text">{grid_id[3][2]}</span>
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text">{grid_id[3][3]}</span>
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text">{grid_id[3][4]}</span>
        </div></button
      >
    </div>
    <div class="bingo-row">
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text">{grid_id[4][0]}</span>
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text">{grid_id[4][1]}</span>
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text">{grid_id[4][2]}</span>
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text">{grid_id[4][3]}</span>
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text">{grid_id[4][4]}</span>
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
        <button class="inter-button"><div class="button-handler">X</div></button
        >
        <button class="inter-button"><div class="button-handler">X</div></button
        >
        <button class="inter-button"><div class="button-handler">X</div></button
        >
        <button class="inter-button"><div class="button-handler">X</div></button
        >
        <button class="inter-button"><div class="button-handler">X</div></button
        >
        <button class="inter-button"><div class="button-handler">X</div></button
        >
        <button class="inter-button"><div class="button-handler">X</div></button
        >
      </div>
    </section>
  </aside>
</main>

<footer>
  <h2>GENERATE GRID</h2>
  <section class="bingo-generator">
    <div class="button-list">
      <button class="inter-button selected">
        <div class="button-handler">X</div></button
      >
      <button class="inter-button"><div class="button-handler">X</div></button>
      <button class="inter-button"><div class="button-handler">X</div></button>
      <button class="inter-button"><div class="button-handler">X</div></button>
    </div>
    <form class="seed-form">
      <span>SEED :</span>
      <input type="text" />
      <input type="button" value="RUN" class="run-button" />
    </form>
  </section>
</footer>
