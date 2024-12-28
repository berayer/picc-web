<script setup lang="ts">
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarInset,
  SidebarRail,
} from '@/components/ui/sidebar'
import NavLogo from './components/NavLogo.vue'
import NavMenu from './components/NavMenu.vue'
import NavFooter from './components/NavFooter.vue'
import Header from './components/Header.vue'
</script>

<template>
  <SidebarProvider>
    <!-- 侧边栏 -->
    <Sidebar collapsible="icon">
      <!-- 侧边栏顶部 -->
      <SidebarHeader>
        <NavLogo />
      </SidebarHeader>
      <!-- 侧边栏菜单 -->
      <SidebarContent>
        <NavMenu />
      </SidebarContent>
      <!-- 侧边栏底部 -->
      <SidebarFooter>
        <NavFooter />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
    <!-- 主体内容 -->
    <SidebarInset class="h-screen">
      <Header />
      <div class="flex flex-1 flex-col overflow-auto p-4 pt-0">
        <RouterView />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
