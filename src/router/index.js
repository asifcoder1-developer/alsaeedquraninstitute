import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import CoursesView from "../views/CoursesView.vue"
import ContactView from "../views/ContactView.vue"
import AboutView from "../views/AboutView.vue"
import BlogView from "../views/BlogView.vue"
import BlogPostView from "../views/BlogPostView.vue"

const BASE_URL = "https://alsaeedquraninstitute.vercel.app"

const routes = [
  { path: "/", name: "home", component: HomeView, meta: { title: "Al Saeed Quran Institute — Learn Quran Online | Free Trial Class", description: "Learn Quran online with certified teachers. Tajweed, Hifz, Tafseer, Norani Qaida. Free trial class. Students from Pakistan, UAE, UK, USA." } },
  { path: "/courses", name: "courses", component: CoursesView, meta: { title: "Online Quran Courses — Tajweed, Hifz, Tafseer | Al Saeed Quran Institute", description: "Explore 8 online Quran courses: Tajweed, Hifz, Tafseer, Tarjama, Norani Qaida, Arabic Grammar, Hadis and Duas. Free trial available." } },
  { path: "/about", name: "about", component: AboutView, meta: { title: "About Al Saeed Quran Institute — Certified Online Quran Teachers", description: "500+ students, 10+ certified teachers, 8+ courses, 4.9 star rating. Trusted online Quran academy." } },
  { path: "/contact", name: "contact", component: ContactView, meta: { title: "Contact — Book Free Quran Trial Class | Al Saeed Quran Institute", description: "Contact Al Saeed Quran Institute. WhatsApp: +92 319 8839708. No registration fee. Free trial." } },
  { path: "/blog", name: "blog", component: BlogView, meta: { title: "Quran Learning Blog — Tajweed, Hifz, Tafseer Articles | Al Saeed Quran Institute", description: "Expert articles on Tajweed, Hifz, Tafseer, Norani Qaida, Arabic Grammar, Hadis and Duas. Learn Quran online with Al Saeed Quran Institute." } },
  { path: "/blog/:slug", name: "blogPost", component: BlogPostView, meta: { title: "Blog | Al Saeed Quran Institute", description: "Read our latest Quran learning articles." } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() { return { top: 0, behavior: 'smooth' } }
})

router.beforeEach((to) => {
  document.title = to.meta.title || "Al Saeed Quran Institute"
  const setMeta = (sel, val) => { const el = document.querySelector(sel); if (el && val) el.setAttribute("content", val) }
  setMeta('meta[name="description"]', to.meta.description)
  setMeta('meta[property="og:title"]', to.meta.title)
  setMeta('meta[property="og:description"]', to.meta.description)
  setMeta('meta[property="og:url"]', `${BASE_URL}${to.path}`)
  const canonical = document.querySelector('link[rel="canonical"]')
  if (canonical) canonical.setAttribute("href", `${BASE_URL}${to.path}`)
})

export default router
