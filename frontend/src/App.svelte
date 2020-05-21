<script>
  import Navb from "./Navbar.svelte";
  import Router from "svelte-spa-router";
  import Index from "./routes/index.svelte";

  const routes = {
    "/": Index
  };
</script>

<Navb />

<Router {routes}/>