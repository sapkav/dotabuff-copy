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
            <span class="font-bold text-[16px] green-default">{{ winCount }}</span> - <span class="font-bold text-[16px] red-default">{{ loseCount }}</span> - <span class="text-[16px]">64</span><br>
            RECORD
          </div>
          <div class="pr-2 leading-[16px]">          
            <span class="font-bold text-[16px]">{{ (winCount / (winCount + loseCount) * 100).toFixed(2) }}%</span><br>
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
          <section class="mt-3">
            MOST PLAYED HEROES ALL TIME
            <MostPlayed
              :games="games"
              />
          </section>
          <section class="mt-3">
            LATEST MATCHES
            <LatestMatches
              :games="games.slice(0, 15)"
              />
          </section>
        </div>
        <div>
          <section>
            <div class="flex justify-between">
              <div>ACTIVITY LAST 3 MONTHS</div>
              <div>more</div>
            </div>
            <Activity
              :games="games"
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
import { useGamesStore } from '~/store'
import { onMounted, ref, watch } from 'vue';
import axios from 'axios';

export default {
  name: 'playerMatches',
  async setup() {
    const { id } = useRoute().params;
    let winCount = 0,
    loseCount = 0,
    leaveCount = 0;
    const games = (await axios(`https://api.opendota.com/api/players/${id}/matches`)).data.slice(0);
    games.forEach(item => {
      if (item.player_slot < 128 && item.radiant_win || item.player_slot >= 128 && !item.radiant_win) {
        winCount++;
      } else {
        loseCount++;
      }
    })
    return {
      winCount,
      loseCount,
      leaveCount,
      games
    }
  },
}
</script>

<style>

</style>