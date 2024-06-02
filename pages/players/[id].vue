<template>
  <div class="bg-default">
    <div class="content-default">
      <header class="header-bg flex justify-between">
        <div class="flex">
          <img alt="Пёсик" class="image-player" rel="tooltip-remote" data-tooltip-url="/players/248754619/tooltip" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/d6/d67f97fad5e55e4f5bfed9a87db8bc38d29ffbb6_full.jpg" data-hasqtip="247" oldtitle="Пёсик" title="" aria-describedby="ui-tooltip-247">
          <div class="pl-2 leading-[22px]">
            <ul>
              <li class="font-bold">Пёсик</li>
              <li>Overview</li>
              <li>
                <font-awesome icon="phone" width="13" height="16" />
              </li>
            </ul>
          </div>
        </div>
        <div>2</div>
      </header>
      <!-- //<Button label="Check" icon="pi pi-check" /> -->
      <div class="grid" style="grid-template-columns: 2fr 1fr;">
        <div>
          <section>
            ROLES AND LANES
          </section>
          <section>
            MOST PLAYED HEROES 
          </section>
          <section>
            LATEST MATCHES
          </section>
        </div>
        <div>
          <section>
            ACTIVITY
          </section>
          <section>
            LIFETIME STATS
          </section>
          <section>
            FRIENDS
          </section>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>

export default {
  name: 'playerMatches'
}
</script>

<style>

</style>