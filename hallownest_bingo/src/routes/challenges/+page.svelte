<script lang="ts">
  import chall from "../../challenges.json";
  const display: string[] = [];
  const boss_list: string[] = [];
  const item_list: string[] = [];
  const charm_list: string[] = [];
  const coll_list: string[] = [];
  const dream_boss_list: string[] = [];
  const event_list: string[] = [];
  chall.forEach((item) => {
    switch (item.kind) {
      case "boss":
        boss_list.push(item.desc_fr);
        break;
      case "item":
        item_list.push(item.desc_fr);
        break;
      case "charm":
        charm_list.push(item.desc_fr);
        break;
      case "coll":
        coll_list.push(item.desc_fr);
        break;
      case "db":
        dream_boss_list.push(item.desc_fr);
        break;
      default:
        event_list.push(item.desc_fr);
        break;
    }
  });
</script>

<h1>Challenges page</h1>

<form>
  <input type="text" id="name" placeholder="name" />
  <select>
    <option value="boss">boss</option>
    <option value="item">item</option>
    <option value="charm">charm</option>
    <option value="coll">collectible</option>
    <option value="db">dream boss</option>
    <option value="event">boss</option>
  </select>
  <input type="text" id="desc_en" placeholder="English desc" />
  <input type="Text" id="desc_fr" placeholder="French desc" />
  <input type="number" id="diff" value="1" />
  <input type="button" value="add" />
</form>

<p>{display}</p>
<br />
<p>{boss_list}</p>
<br />
<p>{item_list}</p>
<br />
<p>{charm_list}</p>
<br />
<p>{coll_list}</p>
<br />
<p>{dream_boss_list}</p>
<br />
<p>{dream_boss_list}</p>
