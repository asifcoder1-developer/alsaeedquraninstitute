<script setup>
import { ref } from 'vue'

const whatsappNumber = "923198839708"

const courses = [
  { name: "Tarjama tul Quran", urdu: "ترجمۃ القرآن", icon: "📖", desc: "Understand the complete meaning and translation of the Holy Quran.", level: "Beginner - Advanced", badge: "Popular", bg: "linear-gradient(135deg,#7c3aed,#6d28d9)" },
  { name: "Tafseer ul Quran", urdu: "تفسیر القرآن", icon: "🔍", desc: "In-depth Quranic commentary and explanation with full Islamic context.", level: "Intermediate", badge: "", bg: "linear-gradient(135deg,#3b82f6,#1d4ed8)" },
  { name: "Tajweed ul Quran", urdu: "تجوید القرآن", icon: "🎵", desc: "Master the rules of Quranic recitation and perfect your pronunciation.", level: "All Levels", badge: "Most Enrolled", bg: "linear-gradient(135deg,#10b981,#059669)" },
  { name: "Hifz ul Quran", urdu: "حفظ القرآن", icon: "🧠", desc: "Complete Quran memorization program under certified Hafiz teachers.", level: "All Ages", badge: "", bg: "linear-gradient(135deg,#f59e0b,#d97706)" },
  { name: "Norani Qaida", urdu: "نورانی قاعدہ", icon: "🌟", desc: "Beginner course to learn Arabic alphabet and basic Quran reading.", level: "Kids & Beginners", badge: "Best for Kids", bg: "linear-gradient(135deg,#ec4899,#be185d)" },
  { name: "Mukhtasir Duaen", urdu: "مختصر دعائیں", icon: "🤲", desc: "Learn essential daily duas and prayers from Quran and Hadith.", level: "All Ages", badge: "", bg: "linear-gradient(135deg,#14b8a6,#0d9488)" },
  { name: "Arabic Grammar", urdu: "عربی گرامر", icon: "✏️", desc: "Foundational Arabic grammar to understand the Quran deeply.", level: "Intermediate", badge: "", bg: "linear-gradient(135deg,#6366f1,#4f46e5)" },
  { name: "Mukhtasir Hadis", urdu: "مختصر حدیث", icon: "📜", desc: "Selected Ahadith of the Prophet ﷺ with Urdu explanation.", level: "All Levels", badge: "", bg: "linear-gradient(135deg,#a855f7,#9333ea)" },
]

const showForm = ref(false)
const selectedCourse = ref('')
const form = ref({ name: '', country: '', phone: '', age: '', gender: '' })

const openEnrollForm = (course) => {
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
    alert('Please fill Name, Country and Course.')
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
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank")
  closeForm()
  form.value = { name: '', country: '', phone: '', age: '', gender: '' }
}
</script>

<template>
  <div style="min-height: 100vh; background: #f9fafb;">

    <!-- ENROLLMENT MODAL -->
    <div v-if="showForm"
      style="position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 20px;"
      @click.self="closeForm">
      <div style="background: white; border-radius: 24px; padding: 36px; width: 100%; max-width: 480px; max-height: 90vh; overflow-y: auto; position: relative;">
        <button @click="closeForm"
          style="position: absolute; top: 16px; right: 16px; background: #f3f4f6; border: none; border-radius: 50%; width: 32px; height: 32px; cursor: pointer; font-size: 16px; color: #6b7280;">✕</button>
        <div style="text-align: center; margin-bottom: 24px;">
          <h2 style="font-size: 22px; font-weight: 900; color: #111827; margin: 0 0 4px;">Enroll in {{ selectedCourse }}</h2>
          <p style="color: #9ca3af; font-size: 13px; margin: 0;">Fill the form — your data will be sent to us on WhatsApp</p>
        </div>
        <div style="display: flex; flex-direction: column; gap: 14px;">
          <div>
            <label style="font-size: 13px; font-weight: 700; color: #374151; display: block; margin-bottom: 6px;">Full Name *</label>
            <input v-model="form.name" type="text" placeholder="Enter your full name"
              style="width: 100%; padding: 12px 16px; border: 1.5px solid #e5e7eb; border-radius: 12px; font-size: 14px; outline: none; box-sizing: border-box;"
              onfocus="this.style.borderColor='#7c3aed'"
              onblur="this.style.borderColor='#e5e7eb'" />
          </div>
          <div>
            <label style="font-size: 13px; font-weight: 700; color: #374151; display: block; margin-bottom: 6px;">Country *</label>
            <input v-model="form.country" type="text" placeholder="e.g. Pakistan, UAE, UK"
              style="width: 100%; padding: 12px 16px; border: 1.5px solid #e5e7eb; border-radius: 12px; font-size: 14px; outline: none; box-sizing: border-box;"
              onfocus="this.style.borderColor='#7c3aed'"
              onblur="this.style.borderColor='#e5e7eb'" />
          </div>
          <div>
            <label style="font-size: 13px; font-weight: 700; color: #374151; display: block; margin-bottom: 6px;">WhatsApp Number</label>
            <input v-model="form.phone" type="tel" placeholder="+92 300 0000000"
              style="width: 100%; padding: 12px 16px; border: 1.5px solid #e5e7eb; border-radius: 12px; font-size: 14px; outline: none; box-sizing: border-box;"
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
                style="width: 100%; padding: 12px 16px; border: 1.5px solid #e5e7eb; border-radius: 12px; font-size: 14px; outline: none; box-sizing: border-box; background: white;">
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <button @click="submitEnroll"
            style="width: 100%; background: linear-gradient(135deg,#25D366,#128C7E); color: white; font-weight: 700; padding: 14px; border-radius: 14px; border: none; cursor: pointer; font-size: 15px; display: flex; align-items: center; justify-content: center; gap: 10px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Send Enrollment on WhatsApp
          </button>
        </div>
      </div>
    </div>

    <!-- Header -->
    <div style="background: linear-gradient(135deg,#7c3aed,#6d28d9); color: white; text-align: center; padding: 80px 20px; position: relative; overflow: hidden;">
      <div style="position: absolute; top: 20px; left: 40px; width: 120px; height: 120px; border: 2px solid rgba(255,255,255,0.15); border-radius: 50%;"></div>
      <div style="position: absolute; bottom: 20px; right: 40px; width: 180px; height: 180px; border: 2px solid rgba(255,255,255,0.1); border-radius: 50%;"></div>
      <span style="background: rgba(255,255,255,0.2); color: white; font-size: 12px; font-weight: 700; padding: 6px 18px; border-radius: 50px; display: inline-block; margin-bottom: 16px;">8 Courses Available</span>
      <h1 style="font-size: 3rem; font-weight: 900; margin: 0 0 12px; position: relative; z-index: 1;">Our Quran Courses</h1>
      <p style="color: #c4b5fd; font-size: 17px; max-width: 500px; margin: 0 auto; position: relative; z-index: 1;">Comprehensive Islamic education for all ages and skill levels — with free trial class!</p>
    </div>

    <div style="background: #fbbf24; color: #78350f; text-align: center; padding: 12px 20px; font-weight: 700; font-size: 14px;">
      🎁 All courses include a FREE Trial Class — No payment required!
    </div>

    <div style="max-width: 1152px; margin: 0 auto; padding: 56px 20px; display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 28px;">
      <div v-for="course in courses" :key="course.name"
        style="background: white; border-radius: 24px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); transition: all 0.3s; display: flex; flex-direction: column; position: relative;"
        onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 20px 50px rgba(124,58,237,0.15)'"
        onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 20px rgba(0,0,0,0.06)'">

        <div v-if="course.badge"
          style="position: absolute; top: 12px; right: 12px; background: #fbbf24; color: #78350f; font-size: 11px; font-weight: 800; padding: 4px 12px; border-radius: 50px; z-index: 10;">
          {{ course.badge }}
        </div>

        <div :style="`background: ${course.bg}; padding: 32px; text-align: center; position: relative; overflow: hidden;`">
          <div style="position: absolute; width: 100px; height: 100px; background: rgba(255,255,255,0.1); border-radius: 50%; top: -30px; right: -30px;"></div>
          <div style="font-size: 52px; margin-bottom: 12px; position: relative; z-index: 1;">{{ course.icon }}</div>
          <h2 style="color: white; font-weight: 900; font-size: 18px; margin: 0 0 4px; position: relative; z-index: 1;">{{ course.name }}</h2>
          <p style="color: rgba(255,255,255,0.75); font-size: 13px; margin: 0; position: relative; z-index: 1;">{{ course.urdu }}</p>
        </div>

        <div style="padding: 20px; display: flex; flex-direction: column; flex: 1;">
          <p style="color: #6b7280; font-size: 14px; line-height: 1.7; margin: 0 0 16px; flex: 1;">{{ course.desc }}</p>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
            <span style="background: #f5f3ff; color: #7c3aed; font-size: 12px; font-weight: 700; padding: 5px 12px; border-radius: 50px;">{{ course.level }}</span>
            <span style="color: #10b981; font-size: 12px; font-weight: 700;">✅ FREE TRIAL</span>
          </div>
          <button @click="openEnrollForm(course.name)"
            style="width: 100%; background: linear-gradient(135deg,#7c3aed,#6d28d9); color: white; font-weight: 700; padding: 12px; border-radius: 14px; border: none; cursor: pointer; font-size: 14px; transition: opacity 0.2s;"
            onmouseover="this.style.opacity='0.9'"
            onmouseout="this.style.opacity='1'">
            Enroll Now 📲
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
