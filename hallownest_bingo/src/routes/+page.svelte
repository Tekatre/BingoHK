<script lang="ts">
  import type { PageData } from "./$types";
  import { translate, inter_translate, generate_bingo } from "$lib/bingo-maker";
  import { check_win } from "$lib/bingo-manager";
  import { getContext } from "svelte";
  import inter_text from "../interface.json";

  export let data: PageData;

  let lang: string = getContext("lang");

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
  }

  function switch_lang(new_lang: string) {
    lang = new_lang;
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
      <h4>{inter_translate(lang, inter_text.side_selection)}</h4>
      <div class="button-list">
        <button
          class={`inter-button ${check_select(select_state)}`}
          on:click={() => {
            select_state = true;
          }}
          ><div class="button-handler">
            <img src="./images/sel_icon.png" />
          </div></button
        >
        <button
          class={`inter-button ${check_lock(select_state)}`}
          on:click={() => {
            select_state = false;
          }}
          ><div class="button-handler">
            <img src="./images/lock_icon.png" />
          </div></button
        >
      </div>
    </section>
    <section class="option-display">
      <h4>{inter_translate(lang, inter_text.side_theme)}</h4>
      <div class="button-list">
        <button class="inter-button"><div class="button-handler">W</div></button
        >
        <button class="inter-button"><div class="button-handler">I</div></button
        >
        <button class="inter-button"><div class="button-handler">P</div></button
        >
      </div>
    </section>
    <section class="option-display">
      <h4>{inter_translate(lang, inter_text.side_lang)}</h4>
      <div class="button-list column-gap-10px">
        <button class="flag-button" on:click={() => switch_lang("en")}
          ><img class="flag-display" src="./images/en_flag.png" /></button
        >
        <button class="flag-button" on:click={() => switch_lang("fr")}
          ><img class="flag-display" src="./images/fr_flag.png" /></button
        >
      </div>
    </section>
  </aside>
</main>

<footer>
  <h2>{inter_translate(lang, inter_text.footer_title)}</h2>
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
          <img src="./images/short_icon.png" />
        </div></button
      >
      <button
        class={`inter-button ${check_mid(len)}`}
        id="mid"
        on:click={() => {
          handle_length_mode_select("mid", false);
        }}
        ><div class="button-handler">
          <img src="./images/mid_icon.png" />
        </div></button
      >
      <button
        class={`inter-button ${check_long(len)}`}
        id="long"
        on:click={() => {
          handle_length_mode_select("long", false);
        }}
        ><div class="button-handler">
          <img src="./images/long_icon.png" />
        </div></button
      >
      <button class="inter-button" id="?"
        ><div class="button-handler">?</div></button
      >
    </div>
    <form class="seed-form">
      <span>{inter_translate(lang, inter_text.footer_seed)}</span>
      <input type="text" id="seed-input" bind:value={seed} />
      <input
        type="button"
        value={inter_translate(lang, inter_text.footer_run)}
        class="run-button"
        on:click={() => {
          handle_length_mode_select(len, true);
        }}
      />
    </form>
  </section>
  <span class="hidden-text">
    This website was created by Tekatre. If you want to provide some feedback,
    you can fill up <a
      class="form-link"
      href="https://docs.google.com/forms/d/e/1FAIpQLSfvfOpJMLAsfPe9TLvBljk-wBtnX-82hybLQMXYBksgDsMkUg/viewform?usp=sf_link"
    >
      this form
    </a> .
  </span>
</footer>
