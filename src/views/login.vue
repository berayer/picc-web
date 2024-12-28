<script setup lang="ts">
import { Card } from '@/components/ui/card'
</script>

<template>
  <Card class="w-[350px]">
    <div v-for="it in 10" :key="it">
      <span>{{ it }}</span>
    </div>
  </Card>
</template>
