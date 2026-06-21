<script setup>
import { SpeedInsights } from '@vercel/speed-insights/vue'
import Navbar from "./components/Navbar.vue"
import WhatsAppButton from "./components/WhatsAppButton.vue"
</script>

<template>
  <SpeedInsights />
  <div style="min-height: 100vh; display: flex; flex-direction: column;">
    <Navbar />
    <main style="flex: 1;">
      <router-view />
    </main>
    <WhatsAppButton />

    <footer style="background: #0f0f1a; color: #9ca3af; padding: 64px 20px 0;">
      <div style="max-width: 1152px; margin: 0 auto;">

        <!-- Top Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 40px; padding-bottom: 48px; border-bottom: 1px solid #1f2937;">

          <!-- Brand -->
          <div>
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
              <div style="width: 44px; height: 44px; border-radius: 12px; background: linear-gradient(135deg,#7c3aed,#6d28d9); display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 4px 12px rgba(124,58,237,0.4);">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z"/>
                  <path d="M19 16h-12a2 2 0 0 0 -2 2"/>
                  <path d="M9 8h6"/>
                </svg>
              </div>
              <div>
                <p style="color: white; font-weight: 800; font-size: 15px; margin: 0; line-height: 1.2;">Al Saeed Quran</p>
                <p style="color: #7c3aed; font-size: 11px; font-weight: 600; margin: 0;">Institute</p>
              </div>
            </div>
            <p style="font-size: 13px; line-height: 1.8; margin: 0 0 20px; color: #6b7280;">
              Dedicated to spreading authentic Quranic education to Muslims worldwide. Learn Quran online with certified teachers.
            </p>
            <div style="display: flex; gap: 10px;">
              <a href="https://wa.me/923198839708" target="_blank"
                style="width: 36px; height: 36px; background: #1f2937; border-radius: 10px; display: flex; align-items: center; justify-content: center; text-decoration: none; transition: background 0.2s; font-size: 16px;"
                onmouseover="this.style.background='#25D366'"
                onmouseout="this.style.background='#1f2937'">💬</a>
              <a href="https://wa.me/923198839708" target="_blank"
                style="width: 36px; height: 36px; background: #1f2937; border-radius: 10px; display: flex; align-items: center; justify-content: center; text-decoration: none; transition: background 0.2s; font-size: 16px;"
                onmouseover="this.style.background='#7c3aed'"
                onmouseout="this.style.background='#1f2937'">📱</a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 style="color: white; font-weight: 700; font-size: 14px; margin: 0 0 20px; padding-bottom: 10px; border-bottom: 2px solid #7c3aed; display: inline-block;">Quick Links</h4>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <router-link v-for="link in [
                { to:'/', label:'🏠 Home' },
                { to:'/courses', label:'📚 Our Courses' },
                { to:'/about', label:'ℹ️ About Us' },
                { to:'/contact', label:'📞 Contact Us' }
              ]" :key="link.to" :to="link.to"
                style="color: #6b7280; text-decoration: none; font-size: 13px; transition: color 0.2s; display: flex; align-items: center; gap: 8px;"
                onmouseover="this.style.color='#a78bfa'"
                onmouseout="this.style.color='#6b7280'">
                {{ link.label }}
              </router-link>
            </div>
          </div>

          <!-- Popular Courses -->
          <div>
            <h4 style="color: white; font-weight: 700; font-size: 14px; margin: 0 0 20px; padding-bottom: 10px; border-bottom: 2px solid #7c3aed; display: inline-block;">Popular Courses</h4>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <span v-for="c in ['📖 Tarjama tul Quran','🎵 Tajweed ul Quran','🧠 Hifz ul Quran','🌟 Norani Qaida','🔍 Tafseer ul Quran','✏️ Arabic Grammar']"
                :key="c" style="color: #6b7280; font-size: 13px;">{{ c }}</span>
            </div>
          </div>

          <!-- Contact Info -->
          <div>
            <h4 style="color: white; font-weight: 700; font-size: 14px; margin: 0 0 20px; padding-bottom: 10px; border-bottom: 2px solid #7c3aed; display: inline-block;">Contact Info</h4>
            <div style="display: flex; flex-direction: column; gap: 14px;">
              <div v-for="item in [
                { icon:'📱', label:'WhatsApp', val:'+92 319 8839708' },
                { icon:'🕐', label:'Timing', val:'Mon–Sat: 9AM – 9PM' },
                { icon:'🌐', label:'Platform', val:'Zoom / WhatsApp Video' },
                { icon:'🌍', label:'Students', val:'Pakistan, UAE, UK, USA & more' },
                { icon:'🎁', label:'Trial', val:'First class FREE' },
              ]" :key="item.label" style="display: flex; align-items: flex-start; gap: 10px;">
                <span style="font-size: 16px; margin-top: 1px;">{{ item.icon }}</span>
                <div>
                  <p style="color: white; font-size: 12px; font-weight: 600; margin: 0;">{{ item.label }}</p>
                  <p style="color: #6b7280; font-size: 12px; margin: 0;">{{ item.val }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom -->
        <div style="padding: 24px 0; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px;">
          <p style="color: #4b5563; font-size: 12px; margin: 0;">© 2025 Al Saeed Quran Institute. All rights reserved.</p>
          <p style="color: #4b5563; font-size: 12px; margin: 0;">Designed with ❤️ for the Muslim Ummah</p>
        </div>
      </div>
    </footer>
  </div>
</template>
