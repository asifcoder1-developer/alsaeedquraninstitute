import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import CoursesView from "../views/CoursesView.vue"
import ContactView from "../views/ContactView.vue"
import AboutView from "../views/AboutView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Al Saeed Quran Institute — Learn Quran Online | Free Trial",
      description: "Learn Quran online with certified teachers at Al Saeed Quran Institute. Tajweed, Hifz, Tafseer, Norani Qaida. Free trial class. Students from Pakistan, UAE, UK, USA."
    }
  },
  {
    path: "/courses",
    name: "courses",
    component: CoursesView,
    meta: {
      title: "Quran Courses Online — Tajweed, Hifz, Tafseer | Al Saeed Quran Institute",
      description: "Explore 8 online Quran courses: Tajweed ul Quran, Hifz ul Quran, Tafseer, Tarjama, Norani Qaida, Arabic Grammar, Hadis and Duas. Free trial available."
    }
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    meta: {
      title: "About Al Saeed Quran Institute — Certified Online Quran Teachers",
      description: "Learn about Al Saeed Quran Institute. 500+ students, 10+ certified teachers, 8+ courses, 4.9 star rating. Trusted online Quran academy worldwide."
    }
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
    meta: {
      title: "Contact Us — Book Free Quran Trial Class | Al Saeed Quran Institute",
      description: "Contact Al Saeed Quran Institute to book your free trial Quran class. WhatsApp: +92 319 8839708. Classes via Zoom. Students worldwide welcome."
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

// Update title & meta per page
router.beforeEach((to) => {
  document.title = to.meta.title || "Al Saeed Quran Institute"

  const desc = document.querySelector('meta[name="description"]')
  if (desc && to.meta.description) {
    desc.setAttribute("content", to.meta.description)
  }

  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) ogTitle.setAttribute("content", to.meta.title || "Al Saeed Quran Institute")

  const ogDesc = document.querySelector('meta[property="og:description"]')
  if (ogDesc && to.meta.description) ogDesc.setAttribute("content", to.meta.description)

  const ogUrl = document.querySelector('meta[property="og:url"]')
  if (ogUrl) ogUrl.setAttribute("content", `https://alsaeedquran.com${to.path}`)
})

export default router
