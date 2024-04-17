<script setup lang="ts">
import logoUrl from "@/assets/logo.svg"
</script>

<template>
  <div class="flex items-center h-8">
    <object type="image/svg+xml" :data="logoUrl" class="h-full">
      <img src="@/assets/logo.svg" />
    </object>
    <span class="ml-4 text-2xl font-[robtronika]">GEKKON</span>
  </div>
</template>
