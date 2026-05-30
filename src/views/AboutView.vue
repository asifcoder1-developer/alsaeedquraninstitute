<script setup>
const stats = [
  { value: "500+", label: "Students Taught", icon: "👨‍🎓" },
  { value: "8+", label: "Courses Offered", icon: "📚" },
  { value: "10+", label: "Expert Teachers", icon: "👨‍🏫" },
  { value: "4.9★", label: "Average Rating", icon: "⭐" },
]

const teachers = [
  { name: "Ustaz Abdullah", title: "Hifz & Tajweed", exp: "8 years", initials: "UA", color: "from-violet-500 to-purple-600" },
  { name: "Ustaza Fatima", title: "Tafseer & Tarjama", exp: "6 years", initials: "UF", color: "from-pink-500 to-rose-500" },
  { name: "Ustaz Yusuf", title: "Arabic & Hadis", exp: "5 years", initials: "UY", color: "from-blue-500 to-cyan-500" },
]
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <div class="bg-gradient-to-br from-violet-600 to-purple-700 text-white text-center py-20 px-5">
      <h1 class="text-5xl font-black mb-3">About Us</h1>
      <p class="text-violet-200 text-lg max-w-xl mx-auto">Learn about Al Saeed Quran Institute and our mission.</p>
    </div>

    <div class="max-w-5xl mx-auto px-5 py-14">

      <div class="bg-white rounded-3xl shadow-lg p-10 mb-10 flex flex-col md:flex-row gap-8 items-center">
        <div class="w-28 h-28 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center text-white text-6xl flex-shrink-0 shadow-xl">
          🕌
        </div>
        <div>
          <h2 class="text-2xl font-black text-gray-900 mb-3">Al Saeed Quran Institute</h2>
          <p class="text-gray-500 leading-relaxed mb-3">
            Al Saeed Quran Institute is a dedicated online Quran learning platform committed to teaching the Holy Quran and Islamic sciences to students of all ages across the world.
          </p>
          <p class="text-gray-500 leading-relaxed">
            Our qualified teachers provide personalized one-on-one classes tailored to each student's level and pace. We believe every Muslim deserves the opportunity to connect deeply with the Quran.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div v-for="stat in stats" :key="stat.label"
          class="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
          <div class="text-3xl mb-2">{{ stat.icon }}</div>
          <div class="text-3xl font-black text-violet-600 mb-1">{{ stat.value }}</div>
          <div class="text-gray-400 text-xs font-medium">{{ stat.label }}</div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div class="bg-gradient-to-br from-violet-600 to-purple-700 text-white rounded-2xl p-7">
          <div class="text-4xl mb-3">🌙</div>
          <h3 class="text-xl font-black mb-3">Our Mission</h3>
          <p class="text-violet-100 text-sm leading-relaxed">To make Quran education accessible, affordable, and effective for every Muslim — regardless of location, age, or background.</p>
        </div>
        <div class="bg-amber-400 text-amber-900 rounded-2xl p-7">
          <div class="text-4xl mb-3">⭐</div>
          <h3 class="text-xl font-black mb-3">Our Vision</h3>
          <p class="text-amber-800 text-sm leading-relaxed">To build a global community of Quran learners who understand, recite, and implement the beautiful teachings of Allah's Book in their daily lives.</p>
        </div>
      </div>

      <div class="text-center mb-8">
        <h2 class="text-3xl font-black text-gray-900 mb-2">Meet Our Expert Teachers</h2>
        <div class="w-12 h-1 bg-violet-500 mx-auto rounded"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="t in teachers" :key="t.name"
          class="bg-white rounded-2xl shadow overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
          <div :class="`bg-gradient-to-br ${t.color} p-8 text-center`">
            <div class="w-16 h-16 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-3">
              <span class="text-white font-black text-xl">{{ t.initials }}</span>
            </div>
            <p class="text-white font-bold">{{ t.name }}</p>
          </div>
          <div class="p-5 text-center">
            <p class="text-violet-600 font-bold text-sm mb-1">{{ t.title }}</p>
            <p class="text-gray-400 text-xs mb-4">{{ t.exp }} experience</p>
            <a href="https://wa.me/923198839708?text=Assalamualaikum%20I%20want%20to%20book%20a%20trial%20class"
              target="_blank"
              class="bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm px-6 py-2 rounded-full inline-block hover:opacity-90 transition-opacity font-bold">
              Book Trial
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
