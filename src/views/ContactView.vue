<script setup>
import { ref } from 'vue'

const whatsappNumber = "923198839708"

const contactInfo = [
  { icon: "📱", label: "WhatsApp", value: "+92 319 8839708" },
  { icon: "🕐", label: "Class Timing", value: "Mon–Sat: 9AM to 9PM" },
  { icon: "🌐", label: "Platform", value: "Zoom / WhatsApp Video" },
  { icon: "🌍", label: "Students From", value: "Pakistan, UAE, UK, USA & more" },
  { icon: "💰", label: "Registration", value: "No Registration Fee" },
  { icon: "🎁", label: "Free Trial", value: "First class absolutely free" },
]

const coursesList = [
  "Tarjama tul Quran", "Tafseer ul Quran", "Tajweed ul Quran",
  "Hifz ul Quran", "Norani Qaida", "Mukhtasir Duaen",
  "Arabic Grammar", "Mukhtasir Hadis",
]

const form = ref({
  name: '', country: '', phone: '', age: '', gender: '', course: '', message: ''
})
const submitted = ref(false)

const submitForm = () => {
  if (!form.value.name || !form.value.country || !form.value.course) {
    alert('Please fill Name, Country and select a Course.')
    return
  }
  const msg = `Assalamualaikum! I want to enroll at Al Saeed Quran Institute.

📋 *Student Details:*
👤 Name: ${form.value.name}
🌍 Country: ${form.value.country}
📱 WhatsApp: ${form.value.phone || 'Not provided'}
🎂 Age: ${form.value.age || 'Not provided'}
👤 Gender: ${form.value.gender || 'Not provided'}
📚 Course: ${form.value.course}
💬 Message: ${form.value.message || 'No additional message'}

Please confirm my enrollment. JazakAllah Khair! 🌙`

  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank")
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    form.value = { name: '', country: '', phone: '', age: '', gender: '', course: '', message: '' }
  }, 3000)
}

const inputStyle = "width: 100%; padding: 13px 16px; border: 1.5px solid #e5e7eb; border-radius: 12px; font-size: 14px; outline: none; box-sizing: border-box; color: #1f2937; background: white; transition: border-color 0.2s;"
const labelStyle = "font-size: 13px; font-weight: 700; color: #374151; display: block; margin-bottom: 6px;"
</script>

<template>
  <div style="min-height: 100vh; background: #f9fafb;">

    <!-- Header -->
    <div style="background: linear-gradient(135deg,#7c3aed,#6d28d9); color: white; text-align: center; padding: 80px 20px; position: relative; overflow: hidden;">
      <div style="position: absolute; top: 20px; left: 40px; width: 120px; height: 120px; border: 2px solid rgba(255,255,255,0.1); border-radius: 50%;"></div>
      <div style="position: absolute; bottom: 20px; right: 40px; width: 180px; height: 180px; border: 2px solid rgba(255,255,255,0.08); border-radius: 50%;"></div>
      <h1 style="font-size: 3rem; font-weight: 900; margin: 0 0 12px; position: relative; z-index: 1;">Contact Us</h1>
      <p style="color: #c4b5fd; font-size: 17px; max-width: 500px; margin: 0 auto; position: relative; z-index: 1;">
        Get in touch to book your free trial class or ask any questions.
      </p>
    </div>

    <!-- Banner -->
    <div style="background: #fbbf24; color: #78350f; text-align: center; padding: 12px 20px; font-weight: 700; font-size: 14px;">
      🎁 First class is FREE — No registration fee, no commitment!
    </div>

    <div style="max-width: 1100px; margin: 0 auto; padding: 60px 20px;">
      <div style="display: grid; grid-template-columns: 1fr 1.4fr; gap: 32px; align-items: start;" class="!grid-cols-1 md:!grid-cols-[1fr_1.4fr]">

        <!-- LEFT — Contact Info -->
        <div style="display: flex; flex-direction: column; gap: 20px;">

          <div style="background: white; border-radius: 24px; padding: 28px; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
            <h2 style="font-size: 18px; font-weight: 900; color: #111827; margin: 0 0 20px;">📬 Contact Information</h2>
            <div style="display: flex; flex-direction: column; gap: 0;">
              <div v-for="info in contactInfo" :key="info.label"
                style="display: flex; align-items: center; gap: 14px; padding: 12px 14px; border-radius: 14px; transition: background 0.2s; cursor: default;"
                onmouseover="this.style.background='#f5f3ff'"
                onmouseout="this.style.background='transparent'">
                <div style="width: 40px; height: 40px; background: #f5f3ff; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0;">{{ info.icon }}</div>
                <div>
                  <p style="font-weight: 700; color: #1f2937; font-size: 13px; margin: 0;">{{ info.label }}</p>
                  <p style="color: #6b7280; font-size: 13px; margin: 0;">{{ info.value }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- WhatsApp Direct -->
          <a href="https://wa.me/923198839708?text=Assalamualaikum%20I%20want%20to%20learn%20Quran"
            target="_blank"
            style="display: flex; align-items: center; justify-content: center; gap: 12px; background: linear-gradient(135deg,#25D366,#128C7E); color: white; padding: 16px; border-radius: 16px; text-decoration: none; font-weight: 700; font-size: 15px; box-shadow: 0 8px 24px rgba(37,211,102,0.3); transition: transform 0.2s;"
            onmouseover="this.style.transform='scale(1.02)'"
            onmouseout="this.style.transform='scale(1)'">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat Directly on WhatsApp
          </a>

          <!-- Stats -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <div v-for="s in [
              { val:'500+', label:'Students Taught' },
              { val:'4.9★', label:'Average Rating' },
              { val:'8+', label:'Courses' },
              { val:'FREE', label:'Trial Class' }
            ]" :key="s.label"
              style="background: white; border-radius: 16px; padding: 16px; text-align: center; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
              <p style="font-size: 22px; font-weight: 900; color: #7c3aed; margin: 0;">{{ s.val }}</p>
              <p style="font-size: 11px; color: #9ca3af; margin: 0; font-weight: 600;">{{ s.label }}</p>
            </div>
          </div>
        </div>

        <!-- RIGHT — Contact Form -->
        <div style="background: white; border-radius: 24px; padding: 36px; box-shadow: 0 4px 24px rgba(0,0,0,0.07);">

          <!-- Success State -->
          <div v-if="submitted" style="text-align: center; padding: 40px 20px;">
            <div style="width: 72px; height: 72px; background: linear-gradient(135deg,#25D366,#128C7E); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 32px;">✓</div>
            <h3 style="font-size: 22px; font-weight: 900; color: #111827; margin: 0 0 8px;">Message Sent!</h3>
            <p style="color: #6b7280; font-size: 14px;">Your enrollment details have been sent to WhatsApp. We will contact you shortly. JazakAllah Khair! 🌙</p>
          </div>

          <!-- Form -->
          <div v-else>
            <div style="margin-bottom: 28px;">
              <h2 style="font-size: 22px; font-weight: 900; color: #111827; margin: 0 0 6px;">📋 Enrollment Form</h2>
              <p style="color: #9ca3af; font-size: 13px; margin: 0;">Fill the form below — your details will be sent to us on WhatsApp instantly.</p>
            </div>

            <div style="display: flex; flex-direction: column; gap: 16px;">

              <!-- Name + Country -->
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
                <div>
                  <label :style="labelStyle">Full Name *</label>
                  <input v-model="form.name" type="text" placeholder="Your full name"
                    :style="inputStyle"
                    onfocus="this.style.borderColor='#7c3aed'; this.style.boxShadow='0 0 0 3px rgba(124,58,237,0.1)'"
                    onblur="this.style.borderColor='#e5e7eb'; this.style.boxShadow='none'" />
                </div>
                <div>
                  <label :style="labelStyle">Country *</label>
                  <input v-model="form.country" type="text" placeholder="e.g. Pakistan, UAE"
                    :style="inputStyle"
                    onfocus="this.style.borderColor='#7c3aed'; this.style.boxShadow='0 0 0 3px rgba(124,58,237,0.1)'"
                    onblur="this.style.borderColor='#e5e7eb'; this.style.boxShadow='none'" />
                </div>
              </div>

              <!-- Phone -->
              <div>
                <label :style="labelStyle">WhatsApp Number</label>
                <input v-model="form.phone" type="tel" placeholder="+92 300 0000000"
                  :style="inputStyle"
                  onfocus="this.style.borderColor='#7c3aed'; this.style.boxShadow='0 0 0 3px rgba(124,58,237,0.1)'"
                  onblur="this.style.borderColor='#e5e7eb'; this.style.boxShadow='none'" />
              </div>

              <!-- Age + Gender -->
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
                <div>
                  <label :style="labelStyle">Age</label>
                  <input v-model="form.age" type="number" placeholder="Your age" min="4" max="80"
                    :style="inputStyle"
                    onfocus="this.style.borderColor='#7c3aed'; this.style.boxShadow='0 0 0 3px rgba(124,58,237,0.1)'"
                    onblur="this.style.borderColor='#e5e7eb'; this.style.boxShadow='none'" />
                </div>
                <div>
                  <label :style="labelStyle">Gender</label>
                  <select v-model="form.gender" :style="inputStyle"
                    onfocus="this.style.borderColor='#7c3aed'"
                    onblur="this.style.borderColor='#e5e7eb'">
                    <option value="">Select Gender</option>
                    <option value="Male (Brother)">Male (Brother)</option>
                    <option value="Female (Sister)">Female (Sister)</option>
                    <option value="Child (Boy)">Child (Boy)</option>
                    <option value="Child (Girl)">Child (Girl)</option>
                  </select>
                </div>
              </div>

              <!-- Course -->
              <div>
                <label :style="labelStyle">Select Course *</label>
                <select v-model="form.course" :style="inputStyle"
                  onfocus="this.style.borderColor='#7c3aed'; this.style.boxShadow='0 0 0 3px rgba(124,58,237,0.1)'"
                  onblur="this.style.borderColor='#e5e7eb'; this.style.boxShadow='none'">
                  <option value="">-- Choose a Course --</option>
                  <option v-for="c in coursesList" :key="c" :value="c">{{ c }}</option>
                </select>
              </div>

              <!-- Message -->
              <div>
                <label :style="labelStyle">Additional Message (Optional)</label>
                <textarea v-model="form.message" placeholder="Any special requirements or questions..."
                  rows="3"
                  :style="inputStyle + ' resize: none; font-family: inherit;'"
                  onfocus="this.style.borderColor='#7c3aed'; this.style.boxShadow='0 0 0 3px rgba(124,58,237,0.1)'"
                  onblur="this.style.borderColor='#e5e7eb'; this.style.boxShadow='none'">
                </textarea>
              </div>

              <!-- Submit -->
              <button @click="submitForm"
                style="width: 100%; background: linear-gradient(135deg,#25D366,#128C7E); color: white; font-weight: 700; padding: 16px; border-radius: 14px; border: none; cursor: pointer; font-size: 15px; display: flex; align-items: center; justify-content: center; gap: 12px; box-shadow: 0 8px 24px rgba(37,211,102,0.3); transition: transform 0.2s;"
                onmouseover="this.style.transform='scale(1.02)'"
                onmouseout="this.style.transform='scale(1)'">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Send Enrollment on WhatsApp
              </button>

              <p style="text-align: center; color: #9ca3af; font-size: 12px; margin: 0;">
                🔒 Your data is only shared with us on WhatsApp. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
