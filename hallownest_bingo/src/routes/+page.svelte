<script lang="ts">
  import type { PageData } from "./$types";
  import { translate, generate_bingo } from "../public/bingo-maker";
  import { check_win } from "../public/bingo-manager";

  export let data: PageData;

  function handle_cell_click(row: number, column: number) {
    if (select_state) {
      if (classes_grid[row][column] == "") {
        classes_grid[row][column] = "selected";
        win_grid[row][column] = 1;
      } else if (
        classes_grid[row][column] == "selected" ||
        classes_grid[row][column] == "win"
      ) {
        classes_grid[row][column] = "";
        win_grid[row][column] = 0;
      }
    } else {
      if (classes_grid[row][column] == "") {
        classes_grid[row][column] = "locked";
      } else if (classes_grid[row][column] == "locked") {
        classes_grid[row][column] = "";
      }
    }
    check_win(win_grid, classes_grid);
    classes_grid = classes_grid;
  }

  function handle_length_mode_select(len_code: string, seeded: boolean) {
    classes_grid = [
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
    ];
    win_grid = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];
    len = len_code;
    [grid_id, seed] = generate_bingo(len, seed, grid_id, seeded, data.entries);
    console.log(len);
  }

  function check_short(len: string): string {
    if (len == "short") {
      return "selected";
    } else {
      return "";
    }
  }

  function check_mid(len: string): string {
    if (len == "mid") {
      return "selected";
    } else {
      return "";
    }
  }

  function check_long(len: string): string {
    if (len == "long") {
      return "selected";
    } else {
      return "";
    }
  }

  function check_select(select_state: boolean): string {
    if (select_state) {
      return "selected";
    } else {
      return "";
    }
  }

  function check_lock(select_state: boolean): string {
    if (!select_state) {
      return "selected";
    } else {
      return "";
    }
  }

  let win_grid: number[][] = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];

  let classes_grid: string[][] = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ];

  let grid_id: number[][] = data.first_grid;
  let lang: string = "en";
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
            class={`bingo-cell ${classes_grid[i][j]}`}
            id={`${i}${j}`}
            on:click={() => handle_cell_click(i, j)}
          >
            <div class={`cell-handler ${classes_grid[i][j]}`}>
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
        <button
          class={`inter-button ${check_select(select_state)}`}
          on:click={() => {
            select_state = true;
          }}
          ><div class="button-handler">
            <img src="../src/sel_icon.png" />
          </div></button
        >
        <button
          class={`inter-button ${check_lock(select_state)}`}
          on:click={() => {
            select_state = false;
          }}
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
        class={`inter-button ${check_short(len)}`}
        id="short"
        on:click={() => {
          handle_length_mode_select("short", false);
        }}
      >
        <div class="button-handler">
          <img src="../src/short_icon.png" />
        </div></button
      >
      <button
        class={`inter-button ${check_mid(len)}`}
        id="mid"
        on:click={() => {
          handle_length_mode_select("mid", false);
        }}
        ><div class="button-handler">
          <img src="../src/mid_icon.png" />
        </div></button
      >
      <button
        class={`inter-button ${check_long(len)}`}
        id="long"
        on:click={() => {
          handle_length_mode_select("long", false);
        }}
        ><div class="button-handler">
          <img src="../src/long_icon.png" />
        </div></button
      >
      <button class="inter-button" id="?"
        ><div class="button-handler">?</div></button
      >
    </div>
    <form class="seed-form">
      <span>SEED :</span>
      <input type="text" id="seed-input" bind:value={seed} />
      <input
        type="button"
        value="RUN"
        class="run-button"
        on:click={() => {
          handle_length_mode_select(len, true);
        }}
      />
    </form>
  </section>
</footer>
