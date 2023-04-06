<script lang="ts">
  import challs from "../public/challenges.json";

  const short_entries: String[] = [];
</script>

<main>
  <section class="bingo-grid">
    <div class="bingo-row">
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >A fucking long placeholder i mean like really long</span
          >
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >A fucking long placeholder i mean like really long</span
          >
        </div></button
      >
      <button class="bingo-cell selected"
        ><div class="cell-handler">
          <span class="cell-text"
            >A fucking long placeholder i mean like really long</span
          >
        </div></button
      >
      <button class="bingo-cell selected"
        ><div class="cell-handler">
          <span class="cell-text"
            >A fucking long placeholder i mean like really long</span
          >
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</span>
        </div></button
      >
    </div>
    <div class="bingo-row">
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >A fucking long placeholder i mean like really long</span
          >
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >A fucking long placeholder i mean like really long</span
          >
        </div></button
      >
      <button class="bingo-cell selected"
        ><div class="cell-handler">
          A fucking long placeholder i mean like really long
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >A fucking long placeholder i mean like really long</span
          >
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >A fucking long placeholder i mean like really long</span
          >
        </div></button
      >
    </div>
    <div class="bingo-row">
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >A fucking long placeholder i mean like really long</span
          >
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >A fucking long placeholder i mean like really long</span
          >
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >A fucking long placeholder i mean like really long</span
          >
        </div></button
      >
      <button class="bingo-cell selected"
        ><div class="cell-handler">
          <span class="cell-text"
            >A fucking long placeholder i mean like really long</span
          >
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >A fucking long placeholder i mean like really long</span
          >
        </div></button
      >
    </div>
    <div class="bingo-row">
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >A fucking long placeholder i mean like really long</span
          >
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >A fucking long placeholder i mean like really long</span
          >
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >A fucking long placeholder i mean like really long</span
          >
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >A fucking long placeholder i mean like really long</span
          >
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >A fucking long placeholder i mean like really long</span
          >
        </div></button
      >
    </div>
    <div class="bingo-row">
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >A fucking long placeholder i mean like really long</span
          >
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >A fucking long placeholder i mean like really long</span
          >
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >A fucking long placeholder i mean like really long</span
          >
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >A fucking long placeholder i mean like really long</span
          >
        </div></button
      >
      <button class="bingo-cell"
        ><div class="cell-handler">
          <span class="cell-text"
            >A fucking long placeholder i mean like really long</span
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
