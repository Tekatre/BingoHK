<script lang="ts">
  import "$lib/style/fonts.css";
  import "../app.postcss";
  import "$lib/style/style.css";
  import inter_text from "../interface.json";
  import { inter_translate } from "$lib/bingo-maker";
  import { writable } from "svelte/store";
  import { setContext } from "svelte";

  const lang = writable();
  lang.set("en");
  console.log(lang);
  setContext("lang", lang);
</script>

<header>
  <img src="./images/Husk-header.png" />
  <h1>HALLOWNEST BINGO</h1>
  <img src="./images/HK-header.png" />
</header>

<nav>
  <a href="/"> GAME </a>
  <a href="/challenges">CHALLENGES</a>
</nav>

<slot />
