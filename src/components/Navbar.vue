<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const menuOpen = ref(false)
const scrolled = ref(false)

const handleScroll = () => { scrolled.value = window.scrollY > 20 }
onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <nav :style="`background: white; position: sticky; top: 0; z-index: 100; transition: all 0.3s; ${scrolled ? 'box-shadow: 0 4px 20px rgba(0,0,0,0.1);' : 'box-shadow: 0 1px 10px rgba(0,0,0,0.06);'} border-bottom: 1px solid #f3f0ff;`">

    <!-- Main Bar -->
    <div style="max-width: 1152px; margin: 0 auto; padding: 14px 20px; display: flex; justify-content: space-between; align-items: center;">

      <!-- Logo -->
      <router-link to="/" style="display: flex; align-items: center; gap: 12px; text-decoration: none; flex-shrink: 0;">
        <div style="width: 42px; height: 42px; border-radius: 12px; background: linear-gradient(135deg,#7c3aed,#6d28d9); display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(124,58,237,0.3);">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z"/>
            <path d="M19 16h-12a2 2 0 0 0 -2 2"/>
            <path d="M9 8h6"/>
          </svg>
        </div>
        <div>
          <p style="color: #1f2937; font-weight: 800; font-size: 15px; margin: 0; line-height: 1.2;">Al Saeed Quran</p>
          <p style="color: #7c3aed; font-size: 11px; font-weight: 600; margin: 0;">Institute</p>
        </div>
      </router-link>

      <!-- Desktop Menu -->
      <div style="display: flex; align-items: center; gap: 32px;" class="hidden md:flex">
        <router-link v-for="link in [
          { to:'/', label:'Home' },
          { to:'/courses', label:'Courses' },
          { to:'/about', label:'About' },
          { to:'/contact', label:'Contact' }
        ]" :key="link.to" :to="link.to"
          style="color: #4b5563; font-weight: 600; font-size: 14px; text-decoration: none; position: relative; padding-bottom: 4px; transition: color 0.2s;"
          active-class="active-link"
          onmouseover="this.style.color='#7c3aed'"
          onmouseout="this.style.color='#4b5563'">
          {{ link.label }}
        </router-link>
        <a href="https://wa.me/923198839708?text=Assalamualaikum%20I%20want%20to%20book%20a%20free%20trial"
          target="_blank"
          style="background: linear-gradient(135deg,#7c3aed,#6d28d9); color: white; padding: 11px 24px; border-radius: 50px; font-size: 13px; font-weight: 700; text-decoration: none; box-shadow: 0 4px 14px rgba(124,58,237,0.35); white-space: nowrap; transition: transform 0.2s, opacity 0.2s;"
          onmouseover="this.style.transform='scale(1.05)'"
          onmouseout="this.style.transform='scale(1)'">
          📅 Book Free Trial
        </a>
      </div>

      <!-- Mobile Hamburger -->
      <button @click="menuOpen = !menuOpen" class="md:hidden"
        style="background: none; border: 1.5px solid #e5e7eb; border-radius: 10px; padding: 8px 10px; cursor: pointer; color: #374151; font-size: 18px; line-height: 1; transition: all 0.2s;"
        :style="menuOpen ? 'background: #f5f3ff; border-color: #c4b5fd; color: #7c3aed;' : ''">
        <span v-if="!menuOpen">☰</span>
        <span v-else>✕</span>
      </button>
    </div>

    <!-- Mobile Dropdown -->
    <div v-if="menuOpen"
      style="background: white; border-top: 1px solid #f3f4f6; padding: 16px 20px 24px; display: flex; flex-direction: column; gap: 4px;"
      class="md:hidden">

      <router-link v-for="link in [
        { to:'/', label:'Home', icon:'🏠' },
        { to:'/courses', label:'Courses', icon:'📚' },
        { to:'/about', label:'About', icon:'ℹ️' },
        { to:'/contact', label:'Contact', icon:'📞' }
      ]" :key="link.to" :to="link.to"
        @click="menuOpen = false"
        style="display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: 12px; color: #374151; font-weight: 600; font-size: 14px; text-decoration: none; transition: all 0.2s;"
        active-class="active-mobile-link"
        onmouseover="this.style.background='#f5f3ff'; this.style.color='#7c3aed'"
        onmouseout="this.style.background='transparent'; this.style.color='#374151'">
        <span style="font-size: 18px;">{{ link.icon }}</span>
        {{ link.label }}
      </router-link>

      <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid #f3f4f6;">
        <a href="https://wa.me/923198839708?text=Assalamualaikum%20I%20want%20to%20book%20a%20free%20trial"
          target="_blank"
          style="display: block; text-align: center; background: linear-gradient(135deg,#7c3aed,#6d28d9); color: white; padding: 14px; border-radius: 14px; font-size: 14px; font-weight: 700; text-decoration: none; box-shadow: 0 4px 14px rgba(124,58,237,0.3);">
          📅 Book Free Trial — It's FREE!
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.active-link {
  color: #7c3aed !important;
}
.active-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(135deg, #7c3aed, #a855f7);
  border-radius: 2px;
}
.active-mobile-link {
  background: #f5f3ff !important;
  color: #7c3aed !important;
}
</style>
