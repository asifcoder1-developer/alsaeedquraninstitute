<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const openWhatsApp = (msg = "Assalamualaikum I want to learn Quran") => {
  window.open(`https://wa.me/923198839708?text=${encodeURIComponent(msg)}`, "_blank")
}

const stats = [
  { value: "500+", label: "Students" },
  { value: "8+", label: "Courses" },
  { value: "4.9★", label: "Rating" },
]

const features = [
  { icon: "👨‍🏫", title: "Certified Teachers", desc: "Qualified Huffaz & Islamic scholars" },
  { icon: "🎯", title: "1-on-1 Classes", desc: "Personalized attention for every student" },
  { icon: "📅", title: "Flexible Schedule", desc: "Morning, evening & weekend slots" },
  { icon: "💬", title: "Always Available", desc: "Support available anytime you need" },
  { icon: "🌍", title: "Learn Globally", desc: "Students from 20+ countries" },
  { icon: "🎁", title: "Free Trial", desc: "First class absolutely free" },
]

const teachers = [
  { name: "Ustaz Abdullah", initials: "UA", title: "Hifz & Tajweed", exp: "8 yrs", rating: "4.9", students: "120+", bg: "linear-gradient(135deg,#7c3aed,#6d28d9)" },
  { name: "Ustaza Fatima", initials: "UF", title: "Tafseer & Tarjama", exp: "6 yrs", rating: "5.0", students: "95+", bg: "linear-gradient(135deg,#ec4899,#be185d)" },
  { name: "Ustaz Yusuf", initials: "UY", title: "Arabic Grammar", exp: "5 yrs", rating: "4.8", students: "80+", bg: "linear-gradient(135deg,#3b82f6,#1d4ed8)" },
  { name: "Ustaza Maryam", initials: "UM", title: "Norani Qaida", exp: "7 yrs", rating: "4.9", students: "150+", bg: "linear-gradient(135deg,#f59e0b,#d97706)" },
]

const reviews = [
  { name: "Ahmed Khan", country: "🇵🇰 Pakistan", initial: "A", color: "#7c3aed", text: "Alhamdulillah! My child learned Quran reading in just 3 months. The teacher is very patient and professional.", stars: 5 },
  { name: "Sarah Ali", country: "🇬🇧 United Kingdom", initial: "S", color: "#ec4899", text: "Excellent online classes. Very professional institute. My tajweed improved a lot. Highly recommended!", stars: 5 },
  { name: "Umar Farooq", country: "🇦🇪 UAE", initial: "U", color: "#3b82f6", text: "Best Quran academy online. The teachers are very knowledgeable and classes are well structured.", stars: 5 },
  { name: "Aisha Malik", country: "🇺🇸 USA", initial: "A", color: "#10b981", text: "Started with Norani Qaida and now reading Quran fluently. Amazing teaching methodology!", stars: 5 },
  { name: "Hassan Raza", country: "🇨🇦 Canada", initial: "H", color: "#f59e0b", text: "My daughter loves her Quran classes. The teacher makes learning fun and engaging for kids.", stars: 5 },
]

const currentReview = ref(0)
let timer = null
const next = () => { currentReview.value = (currentReview.value + 1) % reviews.length }
const prev = () => { currentReview.value = (currentReview.value - 1 + reviews.length) % reviews.length }
const go = (i) => { currentReview.value = i }
onMounted(() => { timer = setInterval(next, 4000) })
onUnmounted(() => clearInterval(timer))

const steps = [
  { num: "01", title: "Create Account", desc: "Register free — no payment needed", icon: "📝" },
  { num: "02", title: "Choose Teacher", desc: "Pick from certified Quran teachers", icon: "👨‍🏫" },
  { num: "03", title: "Start Learning", desc: "Begin your Quran journey right away", icon: "📖" },
]

// Enrollment Form
const showForm = ref(false)
const selectedCourse = ref('')
const form = ref({ name: '', country: '', phone: '', age: '', gender: '' })
const coursesList = [
  "Tarjama tul Quran", "Tafseer ul Quran", "Tajweed ul Quran",
  "Hifz ul Quran", "Norani Qaida", "Mukhtasir Duaen",
  "Arabic Grammar", "Mukhtasir Hadis"
]

const openEnrollForm = (course = '') => {
  selectedCourse.value = course
  showForm.value = true
  document.body.style.overflow = 'hidden'
}
const closeForm = () => {
  showForm.value = false
  document.body.style.overflow = ''
}
const submitEnroll = () => {
  if (!form.value.name || !form.value.country || !selectedCourse.value) {
    alert('Please fill Name, Country and select a Course.')
    return
  }
  const msg = `Assalamualaikum! I want to enroll in Al Saeed Quran Institute.

📋 *Enrollment Details:*
👤 Name: ${form.value.name}
🌍 Country: ${form.value.country}
📱 Phone: ${form.value.phone || 'Not provided'}
🎂 Age: ${form.value.age || 'Not provided'}
👤 Gender: ${form.value.gender || 'Not provided'}
📚 Course: ${selectedCourse.value}

Please confirm my enrollment. JazakAllah Khair!`
  window.open(`https://wa.me/923198839708?text=${encodeURIComponent(msg)}`, "_blank")
  closeForm()
  form.value = { name: '', country: '', phone: '', age: '', gender: '' }
}
</script>

<template>
  <div style="overflow-x: hidden;">

    <!-- ENROLLMENT MODAL -->
    <div v-if="showForm"
      style="position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 20px;"
      @click.self="closeForm">
      <div style="background: white; border-radius: 24px; padding: 36px; width: 100%; max-width: 480px; max-height: 90vh; overflow-y: auto; position: relative;">
        <button @click="closeForm"
          style="position: absolute; top: 16px; right: 16px; background: #f3f4f6; border: none; border-radius: 50%; width: 32px; height: 32px; cursor: pointer; font-size: 16px; color: #6b7280;">✕</button>

        <div style="text-align: center; margin-bottom: 24px;">
          <div style="width: 56px; height: 56px; background: linear-gradient(135deg,#7c3aed,#6d28d9); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z"/>
              <path d="M19 16h-12a2 2 0 0 0 -2 2"/>
              <path d="M9 8h6"/>
            </svg>
          </div>
          <h2 style="font-size: 22px; font-weight: 900; color: #111827; margin: 0 0 4px;">Enroll Now</h2>
          <p style="color: #9ca3af; font-size: 13px; margin: 0;">Fill the form — we'll contact you on WhatsApp</p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 14px;">
          <div>
            <label style="font-size: 13px; font-weight: 700; color: #374151; display: block; margin-bottom: 6px;">Full Name *</label>
            <input v-model="form.name" type="text" placeholder="Enter your full name"
              style="width: 100%; padding: 12px 16px; border: 1.5px solid #e5e7eb; border-radius: 12px; font-size: 14px; outline: none; box-sizing: border-box; transition: border-color 0.2s;"
              onfocus="this.style.borderColor='#7c3aed'"
              onblur="this.style.borderColor='#e5e7eb'" />
          </div>
          <div>
            <label style="font-size: 13px; font-weight: 700; color: #374151; display: block; margin-bottom: 6px;">Country *</label>
            <input v-model="form.country" type="text" placeholder="e.g. Pakistan, UAE, UK"
              style="width: 100%; padding: 12px 16px; border: 1.5px solid #e5e7eb; border-radius: 12px; font-size: 14px; outline: none; box-sizing: border-box; transition: border-color 0.2s;"
              onfocus="this.style.borderColor='#7c3aed'"
              onblur="this.style.borderColor='#e5e7eb'" />
          </div>
          <div>
            <label style="font-size: 13px; font-weight: 700; color: #374151; display: block; margin-bottom: 6px;">WhatsApp Number</label>
            <input v-model="form.phone" type="tel" placeholder="+92 300 0000000"
              style="width: 100%; padding: 12px 16px; border: 1.5px solid #e5e7eb; border-radius: 12px; font-size: 14px; outline: none; box-sizing: border-box; transition: border-color 0.2s;"
              onfocus="this.style.borderColor='#7c3aed'"
              onblur="this.style.borderColor='#e5e7eb'" />
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <div>
              <label style="font-size: 13px; font-weight: 700; color: #374151; display: block; margin-bottom: 6px;">Age</label>
              <input v-model="form.age" type="number" placeholder="Age"
                style="width: 100%; padding: 12px 16px; border: 1.5px solid #e5e7eb; border-radius: 12px; font-size: 14px; outline: none; box-sizing: border-box;"
                onfocus="this.style.borderColor='#7c3aed'"
                onblur="this.style.borderColor='#e5e7eb'" />
            </div>
            <div>
              <label style="font-size: 13px; font-weight: 700; color: #374151; display: block; margin-bottom: 6px;">Gender</label>
              <select v-model="form.gender"
                style="width: 100%; padding: 12px 16px; border: 1.5px solid #e5e7eb; border-radius: 12px; font-size: 14px; outline: none; box-sizing: border-box; background: white;"
                onfocus="this.style.borderColor='#7c3aed'"
                onblur="this.style.borderColor='#e5e7eb'">
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <div>
            <label style="font-size: 13px; font-weight: 700; color: #374151; display: block; margin-bottom: 6px;">Select Course *</label>
            <select v-model="selectedCourse"
              style="width: 100%; padding: 12px 16px; border: 1.5px solid #e5e7eb; border-radius: 12px; font-size: 14px; outline: none; box-sizing: border-box; background: white;"
              onfocus="this.style.borderColor='#7c3aed'"
              onblur="this.style.borderColor='#e5e7eb'">
              <option value="">-- Select a Course --</option>
              <option v-for="c in coursesList" :key="c" :value="c">{{ c }}</option>
            </select>
          </div>

          <button @click="submitEnroll"
            style="width: 100%; background: linear-gradient(135deg,#25D366,#128C7E); color: white; font-weight: 700; padding: 14px; border-radius: 14px; border: none; cursor: pointer; font-size: 15px; margin-top: 8px; display: flex; align-items: center; justify-content: center; gap: 10px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Send on WhatsApp
          </button>
        </div>
      </div>
    </div>

    <!-- HERO -->
    <section style="min-height: 100vh; background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 50%, #ffffff 100%); display: flex; align-items: center; padding: 80px 20px; position: relative; overflow: hidden;">
      <div style="position: absolute; top: 80px; right: 80px; width: 300px; height: 300px; background: radial-gradient(circle, #ddd6fe, transparent); border-radius: 50%; opacity: 0.6;"></div>
      <div style="position: absolute; bottom: 40px; left: 40px; width: 200px; height: 200px; background: radial-gradient(circle, #c4b5fd, transparent); border-radius: 50%; opacity: 0.4;"></div>

      <div style="max-width: 1152px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; width: 100%; position: relative; z-index: 10;" class="!grid-cols-1 md:!grid-cols-2">
        <div>
          <span style="background: #ede9fe; color: #7c3aed; font-size: 12px; font-weight: 700; padding: 6px 16px; border-radius: 50px; display: inline-block; margin-bottom: 20px;">🎁 Free Trial Class Available</span>
          <h1 style="font-size: clamp(2.2rem, 5vw, 3.5rem); font-weight: 900; color: #111827; line-height: 1.15; margin-bottom: 20px;">
            Learn Quran Online<br>
            <span style="background: linear-gradient(135deg, #7c3aed, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">with Expert</span><br>
            Teachers
          </h1>
          <p style="color: #6b7280; font-size: 17px; line-height: 1.7; margin-bottom: 32px;">
            Join Al Saeed Quran Institute to learn Quran online with certified tutors. Get authentic Islamic education — Tajweed, Hifz, Tafseer — from the comfort of your home.
          </p>
          <div style="display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 40px;">
            <button @click="openEnrollForm()"
              style="background: linear-gradient(135deg, #7c3aed, #6d28d9); color: white; font-weight: 700; padding: 14px 32px; border-radius: 50px; border: none; cursor: pointer; font-size: 15px; box-shadow: 0 8px 25px rgba(124,58,237,0.4);"
              onmouseover="this.style.transform='scale(1.05)'"
              onmouseout="this.style.transform='scale(1)'">
              📅 Book Free Trial
            </button>
            <router-link to="/courses"
              style="border: 2px solid #c4b5fd; color: #7c3aed; font-weight: 700; padding: 14px 32px; border-radius: 50px; text-decoration: none; font-size: 15px; display: inline-block;">
              View Courses →
            </router-link>
          </div>
          <div style="display: flex; gap: 36px;">
            <div v-for="stat in stats" :key="stat.label" style="text-align: center;">
              <p style="font-size: 28px; font-weight: 900; color: #111827; margin: 0;">{{ stat.value }}</p>
              <p style="color: #9ca3af; font-size: 13px; margin: 0;">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <div class="hidden md:block">
          <div style="background: white; border-radius: 24px; padding: 32px; box-shadow: 0 20px 60px rgba(124,58,237,0.15); border: 1px solid #ede9fe;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px;">
              <div style="width: 48px; height: 48px; border-radius: 14px; background: linear-gradient(135deg,#7c3aed,#6d28d9); display: flex; align-items: center; justify-content: center;">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z"/>
                  <path d="M19 16h-12a2 2 0 0 0 -2 2"/>
                  <path d="M9 8h6"/>
                </svg>
              </div>
              <div>
                <p style="font-weight: 800; color: #1f2937; margin: 0; font-size: 15px;">Al Saeed Quran Institute</p>
                <p style="color: #7c3aed; font-size: 12px; margin: 0; font-weight: 600;">Start Learning Today</p>
              </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px;">
              <div v-for="course in ['Tajweed ul Quran','Hifz ul Quran','Norani Qaida','Tafseer ul Quran']" :key="course"
                style="display: flex; align-items: center; gap: 12px; background: #f5f3ff; border-radius: 14px; padding: 12px 16px;">
                <span style="width: 8px; height: 8px; background: #7c3aed; border-radius: 50%; flex-shrink: 0;"></span>
                <span style="color: #374151; font-size: 14px; font-weight: 500; flex: 1;">{{ course }}</span>
                <span style="background: #ede9fe; color: #7c3aed; font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 50px;">FREE</span>
              </div>
            </div>
            <button @click="openEnrollForm()"
              style="width: 100%; background: linear-gradient(135deg,#7c3aed,#6d28d9); color: white; font-weight: 700; padding: 14px; border-radius: 14px; border: none; cursor: pointer; font-size: 14px;">
              Book Free Trial Now →
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- IMAGE SECTION 1 — Image Left, Text Right -->
    <section style="padding: 80px 20px; background: white;">
      <div style="max-width: 1152px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;" class="!grid-cols-1 md:!grid-cols-2">
        <div style="border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(124,58,237,0.15); position: relative;">
          <img
            src="/assets/images/imageye___-_imgi_5_muslims-reading-from-quran_53876-20958.jpg"
            alt="Muslims reading Quran together at Al Saeed Quran Institute online classes"
            title="Online Quran Classes for Families — Al Saeed Quran Institute"
            loading="lazy"
            style="width: 100%; height: 380px; object-fit: cover; display: block;"
          />
          <div style="position: absolute; bottom: 20px; left: 20px; background: white; border-radius: 14px; padding: 12px 18px; box-shadow: 0 8px 24px rgba(0,0,0,0.12);">
            <p style="font-weight: 800; color: #7c3aed; font-size: 18px; margin: 0;">500+</p>
            <p style="color: #6b7280; font-size: 11px; margin: 0;">Students Worldwide</p>
          </div>
        </div>
        <div>
          <span style="color: #7c3aed; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Learn Together</span>
          <h2 style="font-size: 2rem; font-weight: 900; color: #111827; margin: 8px 0 16px; line-height: 1.3;">
            Online Quran Classes for the Whole Family
          </h2>
          <p style="color: #6b7280; font-size: 15px; line-height: 1.8; margin-bottom: 16px;">
            At <strong>Al Saeed Quran Institute</strong>, we offer online Quran classes for every family member — kids, adults, brothers, and sisters. Our experienced teachers make Quran learning enjoyable and effective.
          </p>
          <p style="color: #6b7280; font-size: 15px; line-height: 1.8; margin-bottom: 24px;">
            Whether you want to learn <strong>Tajweed</strong>, understand the <strong>Tarjama</strong>, or memorize the Quran — we have the right course for you.
          </p>
          <ul style="list-style: none; padding: 0; margin: 0 0 28px; display: flex; flex-direction: column; gap: 10px;">
            <li v-for="item in ['Qualified & certified Quran teachers','Classes via Zoom or WhatsApp Video','Flexible timings for all time zones','Separate classes for brothers & sisters']" :key="item"
              style="display: flex; align-items: center; gap: 10px; color: #374151; font-size: 14px;">
              <span style="width: 20px; height: 20px; background: #ede9fe; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; flex-shrink: 0; color: #7c3aed; font-weight: 700;">✓</span>
              {{ item }}
            </li>
          </ul>
          <button @click="openEnrollForm()"
            style="background: linear-gradient(135deg,#7c3aed,#6d28d9); color: white; font-weight: 700; padding: 14px 32px; border-radius: 50px; border: none; cursor: pointer; font-size: 14px; box-shadow: 0 8px 20px rgba(124,58,237,0.3);"
            onmouseover="this.style.transform='scale(1.05)'"
            onmouseout="this.style.transform='scale(1)'">
            Start Learning Today →
          </button>
        </div>
      </div>
    </section>

    <!-- IMAGE SECTION 2 — Text Left, Image Right -->
    <section style="padding: 80px 20px; background: linear-gradient(135deg,#f5f3ff,#faf5ff);">
      <div style="max-width: 1152px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;" class="!grid-cols-1 md:!grid-cols-2">
        <div class="order-2 md:order-1">
          <span style="color: #7c3aed; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Kids Program</span>
          <h2 style="font-size: 2rem; font-weight: 900; color: #111827; margin: 8px 0 16px; line-height: 1.3;">
            Special Quran Program for Children
          </h2>
          <p style="color: #6b7280; font-size: 15px; line-height: 1.8; margin-bottom: 16px;">
            Our <strong>kids Quran program</strong> is specially designed to make Quran learning fun and interactive. Starting from <strong>Norani Qaida</strong>, children gradually progress to fluent Quran reading with proper Tajweed.
          </p>
          <p style="color: #6b7280; font-size: 15px; line-height: 1.8; margin-bottom: 24px;">
            Our teachers are experienced in teaching young students and use engaging methods to keep children motivated throughout their Quran journey.
          </p>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 28px;">
            <div v-for="item in [{ icon:'🌟', t:'Norani Qaida',d:'Perfect start for kids' },{ icon:'🎵', t:'Tajweed Rules',d:'Correct pronunciation' },{ icon:'🧠', t:'Hifz Program',d:'Memorize the Quran' },{ icon:'📖', t:'Quran Reading',d:'Fluent recitation' }]" :key="item.t"
              style="background: white; border-radius: 16px; padding: 16px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
              <span style="font-size: 24px; display: block; margin-bottom: 6px;">{{ item.icon }}</span>
              <p style="font-weight: 700; color: #1f2937; font-size: 13px; margin: 0 0 2px;">{{ item.t }}</p>
              <p style="color: #9ca3af; font-size: 11px; margin: 0;">{{ item.d }}</p>
            </div>
          </div>
          <button @click="openEnrollForm('Norani Qaida')"
            style="background: linear-gradient(135deg,#7c3aed,#6d28d9); color: white; font-weight: 700; padding: 14px 32px; border-radius: 50px; border: none; cursor: pointer; font-size: 14px; box-shadow: 0 8px 20px rgba(124,58,237,0.3);">
            Enroll Your Child →
          </button>
        </div>
        <div class="order-1 md:order-2" style="border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(124,58,237,0.15); position: relative;">
          <img
            src="/assets/images/imageye___-_imgi_8_boy-is-reading-quran-with-headphones_921485-506.jpg"
            alt="Boy learning Quran online with headphones — Al Saeed Quran Institute kids program"
            title="Online Quran Classes for Kids — Al Saeed Quran Institute"
            loading="lazy"
            style="width: 100%; height: 420px; object-fit: cover; display: block;"
          />
          <div style="position: absolute; top: 20px; right: 20px; background: linear-gradient(135deg,#7c3aed,#6d28d9); color: white; border-radius: 14px; padding: 10px 16px;">
            <p style="font-weight: 800; font-size: 16px; margin: 0;">⭐ 4.9</p>
            <p style="font-size: 10px; margin: 0; opacity: 0.85;">Parent Rating</p>
          </div>
        </div>
      </div>
    </section>

    <!-- IMAGE SECTION 3 — Image Left, Text Right -->
    <section style="padding: 80px 20px; background: white;">
      <div style="max-width: 1152px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;" class="!grid-cols-1 md:!grid-cols-2">
        <div style="border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(124,58,237,0.12); position: relative;">
          <img
            src="/assets/images/imageye___-_imgi_9_vector-young-muslim-man-reading-quran_844724-24573.jpg"
            alt="Young Muslim man reading Quran — online Tajweed and Hifz classes"
            title="Learn Tajweed Online — Al Saeed Quran Institute"
            loading="lazy"
            style="width: 100%; height: 380px; object-fit: cover; display: block;"
          />
        </div>
        <div>
          <span style="color: #7c3aed; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Adult Program</span>
          <h2 style="font-size: 2rem; font-weight: 900; color: #111827; margin: 8px 0 16px; line-height: 1.3;">
            Learn Tajweed & Hifz at Any Age
          </h2>
          <p style="color: #6b7280; font-size: 15px; line-height: 1.8; margin-bottom: 16px;">
            It is never too late to learn the <strong>Holy Quran</strong>. Our adult Quran program is designed for brothers and sisters of all ages who want to learn Tajweed, Hifz, or understand the Quran through Tafseer and Tarjama.
          </p>
          <p style="color: #6b7280; font-size: 15px; line-height: 1.8; margin-bottom: 24px;">
            Classes are held via <strong>Zoom or WhatsApp</strong> at your preferred time — morning, evening, or weekends. One-on-one sessions ensure focused, personalized learning.
          </p>
          <div style="background: #f5f3ff; border-radius: 16px; padding: 20px; margin-bottom: 28px; border-left: 4px solid #7c3aed;">
            <p style="color: #7c3aed; font-weight: 800; font-size: 15px; margin: 0 0 4px;">"Seek knowledge from the cradle to the grave."</p>
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">— Islamic Wisdom</p>
          </div>
          <button @click="openEnrollForm('Tajweed ul Quran')"
            style="background: linear-gradient(135deg,#7c3aed,#6d28d9); color: white; font-weight: 700; padding: 14px 32px; border-radius: 50px; border: none; cursor: pointer; font-size: 14px; box-shadow: 0 8px 20px rgba(124,58,237,0.3);">
            Join Adult Program →
          </button>
        </div>
      </div>
    </section>

    <!-- IMAGE SECTION 4 — Text Left, Image Right -->
    <section style="padding: 80px 20px; background: linear-gradient(135deg,#faf5ff,#f5f3ff);">
      <div style="max-width: 1152px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;" class="!grid-cols-1 md:!grid-cols-2">
        <div class="order-2 md:order-1">
          <span style="color: #7c3aed; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Family Learning</span>
          <h2 style="font-size: 2rem; font-weight: 900; color: #111827; margin: 8px 0 16px; line-height: 1.3;">
            Build an Islamic Home with Quran Education
          </h2>
          <p style="color: #6b7280; font-size: 15px; line-height: 1.8; margin-bottom: 16px;">
            <strong>Al Saeed Quran Institute</strong> helps entire families connect with the Quran. Enroll your children, spouse, and yourself in our comprehensive Islamic education programs.
          </p>
          <p style="color: #6b7280; font-size: 15px; line-height: 1.8; margin-bottom: 24px;">
            From <strong>Norani Qaida</strong> for beginners to complete <strong>Hifz ul Quran</strong> — we cover all levels under one roof with affordable monthly fee plans.
          </p>
          <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 28px;">
            <div v-for="item in ['No registration fee — start for free','Group family discounts available','Separate male & female teachers','Monthly flexible fee structure']" :key="item"
              style="display: flex; align-items: center; gap: 12px;">
              <span style="width: 22px; height: 22px; background: linear-gradient(135deg,#7c3aed,#6d28d9); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; color: white; flex-shrink: 0;">✓</span>
              <span style="color: #374151; font-size: 14px;">{{ item }}</span>
            </div>
          </div>
          <button @click="openEnrollForm()"
            style="background: linear-gradient(135deg,#7c3aed,#6d28d9); color: white; font-weight: 700; padding: 14px 32px; border-radius: 50px; border: none; cursor: pointer; font-size: 14px; box-shadow: 0 8px 20px rgba(124,58,237,0.3);">
            Enroll Your Family →
          </button>
        </div>
        <div class="order-1 md:order-2" style="border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(124,58,237,0.15);">
          <img
            src="/assets/images/imageye___-_imgi_13_muslim-family-cartoon-characters_1308-135730.jpg"
            alt="Muslim family learning Quran together online — Al Saeed Quran Institute family program"
            title="Family Quran Learning Program — Al Saeed Quran Institute"
            loading="lazy"
            style="width: 100%; height: 400px; object-fit: cover; display: block;"
          />
        </div>
      </div>
    </section>

    <!-- FEATURES -->
    <section style="padding: 80px 20px; background: white;">
      <div style="max-width: 1152px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 56px;">
          <span style="color: #7c3aed; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Why Choose Us</span>
          <h2 style="font-size: 2.2rem; font-weight: 900; color: #111827; margin-top: 8px;">Everything You Need to Learn Quran Online</h2>
          <p style="color: #9ca3af; margin-top: 8px; font-size: 15px;">Trusted by 500+ students from Pakistan, UAE, UK, USA, Canada and more</p>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
          <div v-for="f in features" :key="f.title"
            style="padding: 24px; border-radius: 20px; border: 1px solid #f3f4f6; background: white; transition: all 0.3s; cursor: default;"
            onmouseover="this.style.boxShadow='0 10px 40px rgba(124,58,237,0.12)'; this.style.transform='translateY(-4px)'; this.style.borderColor='#ddd6fe'"
            onmouseout="this.style.boxShadow='none'; this.style.transform='translateY(0)'; this.style.borderColor='#f3f4f6'">
            <div style="width: 48px; height: 48px; background: #f5f3ff; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 22px; margin-bottom: 16px;">{{ f.icon }}</div>
            <h3 style="font-weight: 700; color: #1f2937; margin: 0 0 8px; font-size: 15px;">{{ f.title }}</h3>
            <p style="color: #9ca3af; font-size: 13px; margin: 0;">{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TEACHERS -->
    <section style="padding: 80px 20px; background: linear-gradient(135deg, #f5f3ff, #faf5ff);">
      <div style="max-width: 1152px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 56px;">
          <span style="color: #7c3aed; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Our Educators</span>
          <h2 style="font-size: 2.2rem; font-weight: 900; color: #111827; margin-top: 8px;">Meet Our Expert Quran Teachers</h2>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px;">
          <div v-for="t in teachers" :key="t.name"
            style="background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); transition: all 0.3s;"
            onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 16px 40px rgba(124,58,237,0.15)'"
            onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 20px rgba(0,0,0,0.06)'">
            <div :style="`background: ${t.bg}; padding: 32px; text-align: center; position: relative; overflow: hidden;`">
              <div style="position: absolute; width: 80px; height: 80px; background: rgba(255,255,255,0.15); border-radius: 50%; top: -20px; right: -20px;"></div>
              <div style="width: 64px; height: 64px; background: rgba(255,255,255,0.25); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; position: relative; z-index: 1;">
                <span style="color: white; font-weight: 900; font-size: 20px;">{{ t.initials }}</span>
              </div>
              <p style="color: white; font-weight: 700; margin: 0; font-size: 15px; position: relative; z-index: 1;">{{ t.name }}</p>
            </div>
            <div style="padding: 20px; text-align: center;">
              <p style="color: #7c3aed; font-weight: 600; font-size: 13px; margin: 0 0 12px;">{{ t.title }}</p>
              <div style="display: flex; justify-content: center; gap: 16px; font-size: 12px; color: #9ca3af; margin-bottom: 16px;">
                <span>⭐ {{ t.rating }}</span>
                <span>👥 {{ t.students }}</span>
                <span>📅 {{ t.exp }}</span>
              </div>
              <button @click="openEnrollForm()"
                style="width: 100%; background: #f5f3ff; color: #7c3aed; font-weight: 700; padding: 10px; border-radius: 12px; border: none; cursor: pointer; font-size: 13px; transition: all 0.3s;"
                onmouseover="this.style.background='linear-gradient(135deg,#7c3aed,#6d28d9)'; this.style.color='white'"
                onmouseout="this.style.background='#f5f3ff'; this.style.color='#7c3aed'">
                Book Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3 STEPS -->
    <section style="padding: 80px 20px; background: white;">
      <div style="max-width: 800px; margin: 0 auto; text-align: center;">
        <span style="color: #7c3aed; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Simple Process</span>
        <h2 style="font-size: 2.2rem; font-weight: 900; color: #111827; margin-top: 8px; margin-bottom: 56px;">Start Learning Quran in 3 Simple Steps</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 32px;">
          <div v-for="step in steps" :key="step.num" style="position: relative; text-align: center;">
            <div style="width: 64px; height: 64px; background: linear-gradient(135deg,#7c3aed,#6d28d9); border-radius: 18px; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; box-shadow: 0 8px 20px rgba(124,58,237,0.3); font-size: 24px;">{{ step.icon }}</div>
            <p style="color: #e9d5ff; font-size: 48px; font-weight: 900; position: absolute; top: -10px; right: 16px; z-index: 0; line-height: 1;">{{ step.num }}</p>
            <h3 style="font-weight: 700; color: #1f2937; margin: 0 0 8px; position: relative; z-index: 1;">{{ step.title }}</h3>
            <p style="color: #9ca3af; font-size: 13px; margin: 0;">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- REVIEWS CAROUSEL -->
    <section style="padding: 80px 20px; background: linear-gradient(135deg, #7c3aed, #6d28d9);">
      <div style="max-width: 700px; margin: 0 auto; text-align: center;">
        <span style="color: #c4b5fd; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Testimonials</span>
        <h2 style="font-size: 2.2rem; font-weight: 900; color: white; margin-top: 8px; margin-bottom: 12px;">What Our Students Say</h2>
        <div style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 48px;">
          <span style="font-size: 20px;">⭐⭐⭐⭐⭐</span>
          <span style="color: white; font-weight: 800; font-size: 20px;">4.9</span>
          <span style="color: #c4b5fd; font-size: 13px;">/ 500+ reviews</span>
        </div>
        <div style="background: white; border-radius: 24px; padding: 40px; box-shadow: 0 20px 60px rgba(0,0,0,0.2);">
          <div style="display: flex; justify-content: center; margin-bottom: 16px; font-size: 18px;">
            <span v-for="s in reviews[currentReview].stars" :key="s">⭐</span>
          </div>
          <p style="color: #4b5563; font-size: 17px; font-style: italic; margin-bottom: 28px; line-height: 1.7;">"{{ reviews[currentReview].text }}"</p>
          <div style="display: flex; align-items: center; justify-content: center; gap: 12px;">
            <div :style="`width: 44px; height: 44px; background: ${reviews[currentReview].color}; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 16px;`">{{ reviews[currentReview].initial }}</div>
            <div style="text-align: left;">
              <p style="font-weight: 700; color: #1f2937; margin: 0; font-size: 15px;">{{ reviews[currentReview].name }}</p>
              <p style="color: #9ca3af; font-size: 13px; margin: 0;">{{ reviews[currentReview].country }}</p>
            </div>
          </div>
        </div>
        <div style="display: flex; align-items: center; justify-content: center; gap: 16px; margin-top: 32px;">
          <button @click="prev" style="width: 40px; height: 40px; background: rgba(255,255,255,0.2); border: none; border-radius: 50%; color: white; font-size: 18px; cursor: pointer;"
            onmouseover="this.style.background='rgba(255,255,255,0.35)'"
            onmouseout="this.style.background='rgba(255,255,255,0.2)'">←</button>
          <div style="display: flex; gap: 8px;">
            <button v-for="(_, i) in reviews" :key="i" @click="go(i)"
              :style="`height: 8px; border-radius: 50px; border: none; cursor: pointer; transition: all 0.3s; background: ${i === currentReview ? 'white' : 'rgba(255,255,255,0.35)'}; width: ${i === currentReview ? '24px' : '8px'};`">
            </button>
          </div>
          <button @click="next" style="width: 40px; height: 40px; background: rgba(255,255,255,0.2); border: none; border-radius: 50%; color: white; font-size: 18px; cursor: pointer;"
            onmouseover="this.style.background='rgba(255,255,255,0.35)'"
            onmouseout="this.style.background='rgba(255,255,255,0.2)'">→</button>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section style="padding: 80px 20px; background: #111827; text-align: center;">
      <div style="max-width: 700px; margin: 0 auto;">
        <h2 style="font-size: 2.4rem; font-weight: 900; color: white; margin-bottom: 16px;">Ready to Start Your Quran Journey?</h2>
        <p style="color: #6b7280; font-size: 17px; margin-bottom: 36px;">Join 500+ students learning Quran online. First class is FREE — No registration fee!</p>
        <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
          <button @click="openEnrollForm()"
            style="background: linear-gradient(135deg,#7c3aed,#6d28d9); color: white; font-weight: 700; padding: 16px 40px; border-radius: 50px; border: none; cursor: pointer; font-size: 16px; box-shadow: 0 8px 25px rgba(124,58,237,0.4);"
            onmouseover="this.style.transform='scale(1.05)'"
            onmouseout="this.style.transform='scale(1)'">
            📅 Book Free Trial Now
          </button>
          <button @click="openWhatsApp()"
            style="border: 2px solid #22c55e; color: #22c55e; background: transparent; font-weight: 700; padding: 16px 40px; border-radius: 50px; cursor: pointer; font-size: 16px; transition: all 0.2s;"
            onmouseover="this.style.background='#22c55e'; this.style.color='white'"
            onmouseout="this.style.background='transparent'; this.style.color='#22c55e'">
            💬 WhatsApp Us
          </button>
        </div>
      </div>
    </section>

  </div>
</template>
