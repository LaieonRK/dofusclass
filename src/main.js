import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';

// Fonction pour ajouter le script Google Analytics
function addGoogleAnalytics() {
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=G-WMYNKJQWLZ`;
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-WMYNKJQWLZ');
  };
}

// Appel de la fonction pour ajouter Google Analytics
addGoogleAnalytics();

const app = createApp(App);

// Ajoute le suivi de page pour une SPA
router.afterEach((to) => {
  if (window.gtag) {
    window.gtag('config', 'G-WMYNKJQWLZ', {
      page_path: to.fullPath,
    });
  }
});

app.use(router).mount('#app');
