<template>
  <div class="bg-default">
    <div class="content-default pt-1">
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
        <div class="flex text-[12px] pt-1">
          <div class="pr-2 leading-[16px]">          
            <span class="font-bold text-[16px]">12 hours ago</span><br>
            LAST MATCH
          </div>
          <div class="pr-2 leading-[16px]">          
            <span class="font-bold text-[16px] green-default">1,884</span> - <span class="font-bold text-[16px] red-default">1,632</span> - <span class="text-[16px]">64</span><br>
            RECORD
          </div>
          <div class="pr-2 leading-[16px]">          
            <span class="font-bold text-[16px]">52.63%</span><br>
            WIN RATE
          </div>
          <div class="pr-2 relative">
            <img src="assets/img/rank/5zvezd.png" class="image-rank">
            <img src="assets/img/rank/vlastelin.png" class="image-rank-main" style="position: absolute; top: 4px; left: 7.5px">
          </div>
        </div>
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
            <Activity
              />
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