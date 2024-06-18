<template>
  <div>
    forums {{ id }} {{ arr }}
  </div>
</template>

<script lang="ts">
import { ref, reactive } from 'vue';
import type { Lox } from '~/types/Todo';

export default {
  name: 'forums',
  setup() {
    const id: Ref<number> = ref(2);
    const arr:Lox[] = reactive([
      { id: 32233232, text: '21332sad' },
      { id: 32233232, text: '21332sad' },
      { id: 32233232, text: '21332sad' }
    ]);

    return {
      id,
      arr
    }
  }
}
</script>

<style>

</style>