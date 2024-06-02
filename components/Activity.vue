<template>
  <div>
    <GChart
      type="Calendar"
      :data="chartData"
      :options="chartOptions"
      :settings="settings"
      />
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts';

export default {
  name: 'Activity',
  props: {
    games: {
      type: Object,
      default() {
        return []
      }
    }
  },
  components: {
    GChart,
  },
  setup(props) {
    console.log(props.games);
    const chartOptions = {
      width: '100%',
      height: 140,
      calendar: { 
        cellSize: 8,
        unusedMonthOutlineColor: {
          stroke: 'yellow',
          strokeOpacity: 0.8,
          strokeWidth: 2
        },
        underMonthSpace: 6,
        monthOutlineColor: {
          stroke: 'blue',
          strokeOpacity: 0.8,
          strokeWidth: 2
        },
        monthLabel: {
          fontName: 'Times-Roman',
          fontSize: 12,
          color: 'green',
          bold: true,
          italic: false
        },
      },
      noDataPattern: {
        backgroundColor: '#76a7fa',
        color: '#a0c3ff'
      }
    };
    const settings = {
      packages: ['calendar'],
    };
    const chartData = [
      [
        {
          type: 'date',
          id: 'Date',
        },
        {
          type: 'number',
          id: 'Won/Loss',
        },
      ],
      [new Date(2024,5,2), 2323232323]
    ];
    let nowDate =  new Date();
    const check = new Date(2024,5,2);
    //console.log(nowDate, check);
    for (let i = 0; i < 90; i++) {
      //nowDate.setDate(nowDate.getDate());
      //console.log(nowDate)
      chartData.push([new Date(2024, 5, 3), '2-1']);
    }
    //console.log(chartData)
    return {
      chartOptions,
      chartData,
      settings
    }
  },
}
</script>

<style>

</style>