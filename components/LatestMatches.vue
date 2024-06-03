<template>
  <div>
    <div ref="table" style="height: 100%; margin: 3px 0 20px 0; width: auto"></div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import {TabulatorFull as Tabulator} from 'tabulator-tables';
import gridFunctions from '@/composables/gridFunctions';
import { objHero } from '@/composables/dotaObjects';

export default {
  name: 'LatestMatches',
  props: {
    games: {
      type: Object,
      default() {
        return []
      }
    }
  },
  setup(props) {
    const table = ref(null);
    const tabulator = ref(null);
    const data = props.games.slice(0);
    data[0].max_duration = data[0].duration;
    data.forEach(item => {
      item.name = objHero[item.hero_id].localized_name;
      item.img = objHero[item.hero_id].name + '.jpg';
      if (item.duration > data[0].max_duration) data[0].max_duration = item.duration;
    })
    console.log(data);

    onMounted(async () => {
      tabulator.value = new Tabulator(table.value, {
        data: props.games,
        reactiveData:true,
        columns: [
          {
            title: 'Hero',
            field: 'name',
            resizable: false,
            headerFilter: false,
            width: '40%',
            formatter: gridFunctions.imgHeroCellRenderer,
          },
          {
            title: 'Result',
            field: 'count',
            resizable: false,
            width: '24%',
            formatter: gridFunctions.matchesCellRenderer,
          },
          {
            title: 'Type',
            field: 'win_rate',
            headerFilter: false,
            width: '12%',
            resizable: false,
            formatter: gridFunctions.winrateCellRenderer,
          },
          {
            title: 'Duration',
            field: 'duration',
            headerFilter: false,
            width: '12%',
            resizable: false,
            formatter: gridFunctions.durationRenderer,
          },
          {
            title: 'KDA',
            field: 'role',
            headerFilter: false,
            width: '12%',
            resizable: false,
            formatter: gridFunctions.matchKdaCellRenderer,
          },
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