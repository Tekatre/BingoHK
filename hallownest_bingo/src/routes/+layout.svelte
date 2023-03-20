<script>
  import { assets } from "$app/paths";
  import "../style.css";
</script>

<header>
  <img src="%sveltekit.assets%/Husk_header.png" />
  <h1>HALLOWNEST BINGO</h1>
  <img src="%sveltekit.assets%/HK-hearder.png" />
</header>

<nav>
  <a href="/">GAME</a>
  <a href="/challenges">CHALLENGES</a>
</nav>

<slot />
