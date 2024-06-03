<template>
  <div>
    <div ref="table" style="height: 100%; margin-top: 3px; width: auto"></div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import {TabulatorFull as Tabulator} from 'tabulator-tables';
import gridFunctions from '@/composables/gridFunctions';
import { objHero } from '@/composables/dotaObjects';

export default {
  name: 'MostPlayed',
  props: {
    games: {
      type: Object,
      default() {
        return []
      }
    }
  },
  async setup(props) {
    const obj = {};
    const table = ref(null);
    const tabulator = ref(null);
    props.games.forEach(item => {
      if (obj[item.hero_id]) {
        obj[item.hero_id].count++;
        obj[item.hero_id].kills += item.kills;
        obj[item.hero_id].deaths += item.deaths;
        obj[item.hero_id].assists += item.assists;
      } else {
        obj[item.hero_id] = {count: 1, kills: item.kills, deaths: item.deaths, assists: item.assists, name: objHero[item.hero_id].localized_name, img: objHero[item.hero_id].name + '.jpg', winCount: 0, loseCount: 0}
      }
      if (item.player_slot < 128 && item.radiant_win || item.player_slot >= 128 && !item.radiant_win) {
        obj[item.hero_id].winCount++;
      } else {
        obj[item.hero_id].loseCount++;
      }
    })
    const final = [];
    for (const item of Object.entries(obj)) {
      item[1].hero_id = item[0];
      item[1].win_rate = (item[1].winCount / (item[1].winCount + item[1].loseCount) * 100).toFixed(2)
      item[1].kda = ((item[1].kills + item[1].assists) / item[1].deaths).toFixed(2);
      final.push(item[1]);
    }
    final.sort((a, b) => b.count - a.count);
    const finalData = final.slice(0, 10);

    finalData[0].max_kda = finalData[0].kda;
    finalData[0].max_win_rate = finalData[0].win_rate;

    for (let i = 0; i < finalData.length; i++) {
      finalData[i].max_match = finalData[0].count;
      if (finalData[i].kda > finalData[0].max_kda) {
        finalData[0].max_kda = finalData[i].kda;
      }
      if (finalData[i].win_rate > finalData[0].max_win_rate) {
        finalData[0].max_win_rate = finalData[i].win_rate;
      }
    }

    onMounted(async () => {
      tabulator.value = new Tabulator(table.value, {
        data: finalData,
        reactiveData:true,
        columns: [
          {
            title: 'Item',
            field: 'name',
            resizable: false,
            headerFilter: false,
            width: '30%',
            formatter: gridFunctions.imgHeroCellRenderer,
          },
          {
            title: 'Matches',
            field: 'count',
            resizable: false,
            width: '12%',
            formatter: gridFunctions.matchesCellRenderer,
          },
          {
            title: 'Win %',
            field: 'win_rate',
            headerFilter: false,
            width: '12%',
            resizable: false,
            formatter: gridFunctions.winrateCellRenderer,
          },
          {
            title: 'KDA',
            field: 'kda',
            headerFilter: false,
            width: '12%',
            resizable: false,
            formatter: gridFunctions.kdaCellRenderer,
          },
          {
            title: 'Role',
            field: 'role',
            headerFilter: false,
            width: '17%',
            resizable: false,
          },
          {
            title: 'Lane',
            field: 'lane',
            headerFilter: false,
            width: '17%',
            resizable: false,
          }
        ],
      });
    })

    return {
      tabulator,
      table,
    }
  }
}
</script>

<style>

</style>