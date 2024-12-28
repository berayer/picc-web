<script setup lang="ts">
import { SidebarGroup, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar'
import { HomeIcon } from 'lucide-vue-next'
</script>

<template>
  <SidebarGroup>
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton>
          <HomeIcon />
          <span>首页</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroup>
</template>
