<script lang="ts">
  import challs from "../../public/challenges.json";
  console.log("oui ça démarre");
</script>

<h1>Challenges page</h1>
<main>
  <div class="chall-displays">
    <div class="chall-table" id="chall-boss">
      <th>BOSSES</th>
      <div class="hline" />
      {#each challs as chall}
        {#if chall.kind == "boss"}
          <tr>{chall.desc_fr}</tr>
        {/if}
      {/each}
    </div>
    <div class="chall-table" id="chall-item">
      <th>ITEMS</th>
      <div class="hline" />
      {#each challs as chall}
        {#if chall.kind == "item"}
          <tr>{chall.desc_fr}</tr>
        {/if}
      {/each}
    </div>
    <div class="chall-table" id="chall-charm">
      <th>CHARMS</th>
      <div class="hline" />
      {#each challs as chall}
        {#if chall.kind == "charm"}
          <tr>{chall.desc_fr}</tr>
        {/if}
      {/each}
    </div>
    <div class="chall-table" id="chall-db">
      <th>DREAM BOSSES</th>
      <div class="hline" />
      {#each challs as chall}
        {#if chall.kind == "db"}
          <tr>{chall.desc_fr}</tr>
        {/if}
      {/each}
    </div>
    <div class="chall-table" id="chall-event">
      <th>EVENTS</th>
      <div class="hline" />
      {#each challs as chall}
        {#if chall.kind == "event"}
          <tr>{chall.desc_fr}</tr>
        {/if}
      {/each}
    </div>
    <div class="chall-table" id="chall-coll">
      <th>COLLECTIBLE</th>
      <div class="hline" />
      {#each challs as chall}
        {#if chall.kind == "coll"}
          <tr>{chall.desc_fr}</tr>
        {/if}
      {/each}
    </div>
  </div>
</main>
