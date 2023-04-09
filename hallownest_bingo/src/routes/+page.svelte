<script lang="ts">
  import type { PageData } from "./$types";
  import { translate } from "../public/bingo-maker";

  export let data: PageData;

  let grid_id: number[][] = data.first_grid.grid_id;
  let lang: string = "fr";
</script>

<main>
  <section class="bingo-grid">
    <div class="bingo-row">
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[0][0], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[0][1], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell selected"
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[0][2], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell selected"
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[0][3], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[0][4], lang, data.translator.trans)}</span
          >
        </div></button
      >
    </div>
    <div class="bingo-row">
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[1][0], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[1][1], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell selected"
        ><div class="cell-handler">
          {translate(grid_id[1][2], lang, data.translator.trans)}
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[1][3], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[1][4], lang, data.translator.trans)}</span
          >
        </div></button
      >
    </div>
    <div class="bingo-row">
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[2][0], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[2][1], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[2][2], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell selected"
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[2][3], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[2][4], lang, data.translator.trans)}</span
          >
        </div></button
      >
    </div>
    <div class="bingo-row">
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[3][0], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[3][1], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[3][2], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[3][3], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[3][4], lang, data.translator.trans)}</span
          >
        </div></button
      >
    </div>
    <div class="bingo-row">
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[4][0], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[4][1], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[4][2], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >{translate(grid_id[4][3], lang, data.translator.trans)}</span
          >
        </div></button
      >
      <button class="bingo-cell"
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
