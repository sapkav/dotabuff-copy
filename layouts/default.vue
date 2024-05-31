<template>
  <div class="shadow-lg bg-white pl-5 pt-4 pb-4 gap-5 round flex">
    <div class="flex container gap-5 w-full">
      <NuxtLink to="/" class="btn">Home</NuxtLink>
      <NuxtLink to="/esport" class="btn">Esports</NuxtLink>
      <NuxtLink to="/heroes" class="btn">Heroes</NuxtLink>
      <NuxtLink to="/items" class="btn">Items</NuxtLink>
      <NuxtLink to="/players" class="btn">Players</NuxtLink>
      <NuxtLink to="/mathces" class="btn">Matches</NuxtLink>
      <NuxtLink to="/blog" class="btn">Blog</NuxtLink>
      <NuxtLink to="/forums" class="btn">Forums</NuxtLink>
      <NuxtLink to="/plus" class="btn">Plus</NuxtLink>
    </div>
    <div class="container mx-auto p-4 text-blue-700">
      <slot />
    </div>
  </div>
</template>

<script setup>

</script>

<style>
</style>