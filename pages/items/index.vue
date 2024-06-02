<template>
  <div class="bg-default">
    <div class="content-default">
      <header class="header-bg">
        <h1 style="font-size: 22px; font-weight: 700; line-height: 28px;">
          Items
        </h1>
        <div style="font-size: 14px">Most Used, This Month</div>
      </header>
      <!-- //<Button label="Check" icon="pi pi-check" /> -->
      <Dropdown 
        :options="timeArr"
        v-model="selectedTime"
        class="text-neutral-950 h-[30px] mt-2 w-[158px]"
        />
      <div>
        <div ref="table" style="height: 100%; margin-top: 15px;"></div>
      </div>  
    </div>
  </div>
</template>

<script>
import Dropdown from 'primevue/dropdown';
import { onMounted, ref, watch } from 'vue';
import {TabulatorFull as Tabulator} from 'tabulator-tables';
import gridFunctions from '@/composables/gridFunctions'

export default {
  name: 'items',
  components: {
    Dropdown
  },
  setup() {
    onMounted(async () => {
      tabulator.value = new Tabulator(table.value, {
        data: [
          {name: 'Desolator', time_use: '23232323', rate_use: '23232323', win_rate: '23232323', img: 'desolator.jpg'},
          {name: 'Helm of the Dominator', time_use: '222', rate_use: '3333', win_rate: '444', img: 'helm-of-the-dominator.jpg'},
          {name: 'Blink Dagger', time_use: '222', rate_use: '3333', win_rate: '444', img: 'blink-dagger.jpg'}
        ],
        reactiveData:true,
        columns: [
          {
            title: 'Item',
            field: 'name',
            width: '20%',
            resizable: false,
            headerFilter: false,
            formatter: gridFunctions.imgItemCellRenderer,
          },
          {
            title: 'Times Used',
            field: 'time_use',
            width: '30%',
            resizable: false,
            headerFilter: false,
          },
          {
            title: 'Use Rate',
            field: 'rate_use',
            width: '30%',
            headerFilter: false,
            resizable: false,
          },
          {
            title: 'Win Rate',
            field: 'win_rate',
            width: '20%',
            headerFilter: false,
            resizable: false,
          }
        ],
      });
    })

    const timeArr = ['All time', 'This week', 'Last 3 months', 'Last 6 months', 'Last 12 months'];
    const table = ref(null);
    const tabulator = ref(null);
    let selectedTime = ref('This week');
    watch(selectedTime, (oldVal, newVal) => {
      console.log(oldVal, newVal);
    })


    return {
      timeArr,
      selectedTime,
      tabulator,
      table,
    }
  },
};
</script>

<style lang="scss">
@import "tabulator-tables";

.tabulator-header-filter {
  height: 20px !important;
  input {
    height: 20px;
  }
}
</style>