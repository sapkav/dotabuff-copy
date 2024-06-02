<template>
  <div>
    <GChart
      type="LineChart"
      :data="chartData"
      :options="chartOptions"
      />
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts';

export default {
  name: 'Activity',
  components: {
    GChart,
  },
  data() {
      return {
          chartOptions: {
              curveType: 'function',
              width: '600',
              height: 140,
              backgroundColor: {
                  fill: 'transparent',
                  stroke: 'transparent',
              }
          },
          chartData: [
              ['Year', 'Sales'],
              ['2004', 1000],
              ['2005', 1170],
              ['2006', 660],
              ['2007', 1030],
          ]
      }
  }
}
</script>

<style>

</style>