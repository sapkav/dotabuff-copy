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
        TESST
        <div ref="table" style="height: 535px;"></div>
      </div>  
    </div>
  </div>
</template>

<script lang="ts">
import Dropdown from 'primevue/dropdown';
import { onMounted, ref, watch } from 'vue';
import {TabulatorFull as Tabulator} from 'tabulator-tables';

export default {
  name: 'Items',
  components: {
    Dropdown
  },
  setup() {
    onMounted(() => {
      console.log('Компонент примонтирован!');
      tabulator.value = new Tabulator(table.value, {
        data: [],
        reactiveData:true,
        columns: [
          {
            title: 'Item',
            field: 'admin_name',
            width: '20%',
            resizable: false,
            headerFilter: true,
          },
          {
            title: 'Times Used',
            field: 'city',
            width: '30%',
            resizable: false,
            headerFilter: true,
          },
          {
            title: 'Use Rate',
            field: 'population',
            width: '30%',
            headerFilter: true,
            resizable: false,
          },
          {
            title: 'Win Rate',
            field: 'population',
            width: '20%',
            headerFilter: true,
            resizable: false,
          }
        ], //define table columns
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