<template>
  <div class="bg-default">
    <div class="content-default">
      <header class="header-bg">
        <h1 style="font-size: 22px; font-weight: 700; line-height: 28px;">
          Recent Matches
        </h1>
        <div style="font-size: 14px">Last 24 Hours</div>
      </header>
      <!-- //<Button label="Check" icon="pi pi-check" /> -->
      <div>ALL HEROES, ANY MODE, ANY LOBBY, ANY SKILL, ANY REGION</div>
      <Dropdown 
        :options="timeArr"
        v-model="selectedTime"
        class="text-neutral-950 h-[30px] mt-2 w-[158px] mr-5"
        />
      <Dropdown 
        :options="timeArr"
        v-model="selectedTime"
        class="text-neutral-950 h-[30px] mt-2 w-[158px] mr-5"
        />
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
import axios from 'axios';
import { ref, reactive, onMounted } from 'vue';
import { TabulatorFull as Tabulator } from 'tabulator-tables';
import { matchAllPickColumns } from '@/composables/gridColumns';

export default {
  name: 'heroes',
  async setup() {
    onMounted(() => {
      tabulator.value = new Tabulator(table.value, {
        data: matches,
        reactiveData:true,
        columns: matchAllPickColumns,
      });
    })

    const matches = (await axios(`https://api.opendota.com/api/publicMatches`)).data.slice(0);
    matches[0].max_duration = matches[0].duration;
    matches.forEach(item => {
      if (item.duration > matches[0].max_duration) matches[0].max_duration = item.duration;
    })
    const table = ref(null);
    const tabulator = ref(null);
    const selectedTime = ref('now');
    const timeArr = reactive(['232323233', 'now']);

    return {
      selectedTime,
      timeArr,
      table,
      tabulator
    }
  }
}
</script>

<style>

</style>