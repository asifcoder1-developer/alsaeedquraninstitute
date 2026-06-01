<script setup>
const stats = [
  { value: "500+", label: "Students Taught", icon: "👨‍🎓", color: "#7c3aed" },
  { value: "8+", label: "Courses Offered", icon: "📚", color: "#3b82f6" },
  { value: "10+", label: "Expert Teachers", icon: "👨‍🏫", color: "#ec4899" },
  { value: "4.9★", label: "Average Rating", icon: "⭐", color: "#f59e0b" },
]

const teachers = [
  { name: "Ustaz Abdullah", title: "Hifz & Tajweed", exp: "8 years", initials: "UA", bg: "linear-gradient(135deg,#7c3aed,#6d28d9)", students: "120+" },
  { name: "Ustaza Fatima", title: "Tafseer & Tarjama", exp: "6 years", initials: "UF", bg: "linear-gradient(135deg,#ec4899,#be185d)", students: "95+" },
  { name: "Ustaz Yusuf", title: "Arabic Grammar & Hadis", exp: "5 years", initials: "UY", bg: "linear-gradient(135deg,#3b82f6,#1d4ed8)", students: "80+" },
]

const values = [
  { icon: "📖", title: "Authentic Teaching", desc: "We follow authentic Islamic methodology in all our Quran and Islamic courses." },
  { icon: "💻", title: "Modern Approach", desc: "Using Zoom and WhatsApp to deliver world-class Quran education online." },
  { icon: "🤝", title: "Personal Attention", desc: "One-on-one sessions ensure every student gets dedicated teacher focus." },
  { icon: "🌍", title: "Global Reach", desc: "Teaching students from 20+ countries worldwide with flexible timings." },
]
</script>

<template>
  <div style="min-height: 100vh; background: #f9fafb;">

    <!-- Header -->
    <div
      style="background: linear-gradient(135deg,#7c3aed,#6d28d9); color: white; text-align: center; padding: 80px 20px; position: relative; overflow: hidden;">
      <div
        style="position: absolute; top: -40px; right: -40px; width: 200px; height: 200px; border: 2px solid rgba(255,255,255,0.1); border-radius: 50%;">
      </div>
      <div
        style="position: absolute; bottom: -60px; left: -60px; width: 280px; height: 280px; border: 2px solid rgba(255,255,255,0.08); border-radius: 50%;">
      </div>
      <div
        style="position: absolute; top: 30px; left: 50%; width: 100px; height: 100px; border: 1px solid rgba(255,255,255,0.1); border-radius: 50%; transform: translateX(-50%);">
      </div>
      <div style="position: relative; z-index: 1;">
        <span
          style="background: rgba(255,255,255,0.15); color: white; font-size: 12px; font-weight: 700; padding: 6px 18px; border-radius: 50px; display: inline-block; margin-bottom: 16px;">🕌
          About Us</span>
        <h1 style="font-size: clamp(2rem, 5vw, 3rem); font-weight: 900; margin: 0 0 12px;">Al Saeed Quran Institute</h1>
        <p style="color: #c4b5fd; font-size: 17px; max-width: 560px; margin: 0 auto; line-height: 1.7;">
          Dedicated to spreading authentic Quranic education to Muslims worldwide since our founding.
        </p>
      </div>
    </div>

    <div style="max-width: 1100px; margin: 0 auto; padding: 60px 20px;">

      <!-- About Card -->
      <div
        style="background: white; border-radius: 28px; padding: 48px; margin-bottom: 48px; box-shadow: 0 4px 24px rgba(0,0,0,0.06); display: flex; gap: 40px; align-items: center; flex-wrap: wrap;">
        <div
          style="width: 110px; height: 110px; border-radius: 24px; background: linear-gradient(135deg,#7c3aed,#6d28d9); display: flex; align-items: center; justify-content: center; font-size: 52px; flex-shrink: 0; box-shadow: 0 12px 32px rgba(124,58,237,0.3);">
          🕌</div>
        <div style="flex: 1; min-width: 260px;">
          <h2 style="font-size: 24px; font-weight: 900; color: #111827; margin: 0 0 14px;">Who We Are</h2>
          <p style="color: #6b7280; line-height: 1.8; margin: 0 0 12px; font-size: 15px;">
            <strong style="color: #374151;">Al Saeed Quran Institute</strong> is a dedicated online Quran learning
            platform committed to teaching the Holy Quran and Islamic sciences to students of all ages across the world.
          </p>
          <p style="color: #6b7280; line-height: 1.8; margin: 0; font-size: 15px;">
            Our qualified teachers — Huffaz, Scholars, and Islamic educators — provide personalized <strong
              style="color: #374151;">one-on-one classes</strong> tailored to each student's level and pace. We believe
            every Muslim deserves the opportunity to connect deeply with the Quran.
          </p>
          <div style="display: flex; gap: 12px; margin-top: 20px; flex-wrap: wrap;">
            <span
              style="background: #f5f3ff; color: #7c3aed; font-size: 12px; font-weight: 700; padding: 6px 14px; border-radius: 50px;">✅
              Certified Teachers</span>
            <span
              style="background: #f0fdf4; color: #16a34a; font-size: 12px; font-weight: 700; padding: 6px 14px; border-radius: 50px;">✅
              Free Trial Class</span>
            <span
              style="background: #fefce8; color: #ca8a04; font-size: 12px; font-weight: 700; padding: 6px 14px; border-radius: 50px;">✅
              All Ages Welcome</span>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div
        style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 48px;">
        <div v-for="stat in stats" :key="stat.label"
          style="background: white; border-radius: 20px; padding: 28px 20px; text-align: center; box-shadow: 0 4px 16px rgba(0,0,0,0.05); transition: all 0.3s; cursor: default;"
          onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 32px rgba(124,58,237,0.12)'"
          onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 16px rgba(0,0,0,0.05)'">
          <div style="font-size: 36px; margin-bottom: 10px;">{{ stat.icon }}</div>
          <div :style="`font-size: 32px; font-weight: 900; color: ${stat.color}; margin-bottom: 4px; line-height: 1;`">
            {{ stat.value }}</div>
          <div
            style="color: #9ca3af; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
            {{ stat.label }}</div>
        </div>
      </div>

      <!-- Mission & Vision -->
      <div
        style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 48px;">
        <div
          style="background: linear-gradient(135deg,#7c3aed,#6d28d9); color: white; border-radius: 24px; padding: 36px; position: relative; overflow: hidden;">
          <div
            style="position: absolute; right: -20px; top: -20px; width: 100px; height: 100px; background: rgba(255,255,255,0.08); border-radius: 50%;">
          </div>
          <div style="font-size: 40px; margin-bottom: 16px;">🌙</div>
          <h3 style="font-size: 20px; font-weight: 900; margin: 0 0 12px; position: relative; z-index: 1;">Our Mission
          </h3>
          <p style="color: #ddd6fe; font-size: 14px; line-height: 1.8; margin: 0; position: relative; z-index: 1;">To
            make Quran education <strong style="color: white;">accessible, affordable, and effective</strong> for every
            Muslim — regardless of location, age, or background.</p>
        </div>
        <div
          style="background: linear-gradient(135deg,#f59e0b,#d97706); color: white; border-radius: 24px; padding: 36px; position: relative; overflow: hidden;">
          <div
            style="position: absolute; right: -20px; top: -20px; width: 100px; height: 100px; background: rgba(255,255,255,0.1); border-radius: 50%;">
          </div>
          <div style="font-size: 40px; margin-bottom: 16px;">⭐</div>
          <h3 style="font-size: 20px; font-weight: 900; margin: 0 0 12px; position: relative; z-index: 1;">Our Vision
          </h3>
          <p style="color: #fef3c7; font-size: 14px; line-height: 1.8; margin: 0; position: relative; z-index: 1;">To
            build a <strong style="color: white;">global community</strong> of Quran learners who understand, recite,
            and implement the beautiful teachings of Allah's Book.</p>
        </div>
      </div>

      <!-- Core Values -->
      <div style="margin-bottom: 48px;">
        <div style="text-align: center; margin-bottom: 32px;">
          <span
            style="color: #7c3aed; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">What
            We Stand For</span>
          <h2 style="font-size: 28px; font-weight: 900; color: #111827; margin: 8px 0 0;">Our Core Values</h2>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
          <div v-for="v in values" :key="v.title"
            style="background: white; border-radius: 20px; padding: 24px; box-shadow: 0 4px 16px rgba(0,0,0,0.05); display: flex; gap: 16px; align-items: flex-start; transition: all 0.3s;"
            onmouseover="this.style.boxShadow='0 12px 32px rgba(124,58,237,0.1)'; this.style.transform='translateY(-2px)'"
            onmouseout="this.style.boxShadow='0 4px 16px rgba(0,0,0,0.05)'; this.style.transform='translateY(0)'">
            <div
              style="width: 48px; height: 48px; background: #f5f3ff; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 22px; flex-shrink: 0;">
              {{ v.icon }}</div>
            <div>
              <h3 style="font-weight: 700; color: #1f2937; font-size: 15px; margin: 0 0 6px;">{{ v.title }}</h3>
              <p style="color: #9ca3af; font-size: 13px; margin: 0; line-height: 1.6;">{{ v.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Teachers -->
      <div style="text-align: center; margin-bottom: 32px;">
        <span
          style="color: #7c3aed; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Our
          Educators</span>
        <h2 style="font-size: 28px; font-weight: 900; color: #111827; margin: 8px 0 4px;">Meet Our Expert Teachers</h2>
        <p style="color: #9ca3af; font-size: 14px; margin: 0;">Certified, experienced and passionate about Quranic
          education</p>
      </div>

      <div
        style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 48px;">
        <div v-for="t in teachers" :key="t.name"
          style="background: white; border-radius: 24px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); transition: all 0.3s;"
          onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 16px 40px rgba(124,58,237,0.15)'"
          onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 20px rgba(0,0,0,0.06)'">
          <div
            :style="`background: ${t.bg}; padding: 36px 24px; text-align: center; position: relative; overflow: hidden;`">
            <div
              style="position: absolute; right: -20px; top: -20px; width: 90px; height: 90px; background: rgba(255,255,255,0.12); border-radius: 50%;">
            </div>
            <div
              style="position: absolute; left: -15px; bottom: -15px; width: 60px; height: 60px; background: rgba(255,255,255,0.08); border-radius: 50%;">
            </div>
            <div
              style="width: 72px; height: 72px; background: rgba(255,255,255,0.25); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 14px; position: relative; z-index: 1; border: 3px solid rgba(255,255,255,0.4);">
              <span style="color: white; font-weight: 900; font-size: 22px;">{{ t.initials }}</span>
            </div>
            <p
              style="color: white; font-weight: 800; font-size: 17px; margin: 0 0 4px; position: relative; z-index: 1;">
              {{ t.name }}</p>
            <p style="color: rgba(255,255,255,0.8); font-size: 12px; margin: 0; position: relative; z-index: 1;">{{
              t.title }}</p>
          </div>
          <div style="padding: 24px; text-align: center;">
            <div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 20px;">
              <div style="text-align: center;">
                <p style="font-weight: 800; color: #7c3aed; font-size: 18px; margin: 0;">{{ t.students }}</p>
                <p style="color: #9ca3af; font-size: 11px; margin: 0;">Students</p>
              </div>
              <div style="width: 1px; background: #f3f4f6;"></div>
              <div style="text-align: center;">
                <p style="font-weight: 800; color: #7c3aed; font-size: 18px; margin: 0;">{{ t.exp }}</p>
                <p style="color: #9ca3af; font-size: 11px; margin: 0;">Experience</p>
              </div>
              <div style="width: 1px; background: #f3f4f6;"></div>
              <div style="text-align: center;">
                <p style="font-weight: 800; color: #f59e0b; font-size: 18px; margin: 0;">4.9★</p>
                <p style="color: #9ca3af; font-size: 11px; margin: 0;">Rating</p>
              </div>
            </div>
            <a href="https://wa.me/923198839708?text=Assalamualaikum%20I%20want%20to%20book%20a%20trial%20class"
              target="_blank" rel="noopener noreferrer"
              style="display: block; background: linear-gradient(135deg,#7c3aed,#6d28d9); color: white; font-size: 14px; font-weight: 700; padding: 12px; border-radius: 14px; text-decoration: none; transition: opacity 0.2s;"
              onmouseover="this.style.opacity='0.9'" onmouseout="this.style.opacity='1'">
              📅 Book Trial Class
            </a>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div
        style="background: linear-gradient(135deg,#7c3aed,#6d28d9); border-radius: 28px; padding: 48px 40px; text-align: center; position: relative; overflow: hidden;">
        <div
          style="position: absolute; right: -40px; top: -40px; width: 180px; height: 180px; background: rgba(255,255,255,0.06); border-radius: 50%;">
        </div>
        <div
          style="position: absolute; left: -30px; bottom: -30px; width: 140px; height: 140px; background: rgba(255,255,255,0.06); border-radius: 50%;">
        </div>
        <div style="position: relative; z-index: 1;">
          <h2 style="font-size: 26px; font-weight: 900; color: white; margin: 0 0 12px;">Ready to Start Your Quran
            Journey?</h2>
          <p style="color: #ddd6fe; font-size: 15px; margin: 0 0 28px;">Join 500+ students from around the world. First
            class is absolutely FREE!</p>
          <a href="https://wa.me/923198839708?text=Assalamualaikum%20I%20want%20to%20book%20a%20free%20trial%20class"
            target="_blank" rel="noopener noreferrer"
            style="display: inline-flex; align-items: center; gap: 10px; background: white; color: #7c3aed; font-weight: 800; padding: 14px 36px; border-radius: 50px; text-decoration: none; font-size: 15px; box-shadow: 0 8px 24px rgba(0,0,0,0.2); transition: transform 0.2s;"
            onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            📅 Book Free Trial Now
          </a>
        </div>
      </div>

    </div>
  </div>
</template>
