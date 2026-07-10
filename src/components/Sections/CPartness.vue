\<template>
  <h1 class="title">Hamkor</h1>
  <hr class="divider" />

  <div class="p">
    <p class="p-Hamkorlar">
      Ushbu veb-sayt turkiy mamlakatlarda joylashgan tarixiy, noyob joylar haqida ma'lumot almashish uchun yaratilgan.
    </p>
  </div>

  <div class="relative">


    <Vue3Marquee
      :clone="true"
      :duration="20"
      class="marquee-container mb-6"
      :pause-on-hover="true"
      direction="normal"
    >
      <img
        src="https://admin.tabarrukziyorat.uz/media/partners/%D0%AD%D0%BA%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F_%D1%83%D0%B7%D0%B1_LmlTrfm.png"
        alt="Image 1"
      />
      <img
        src="https://admin.tabarrukziyorat.uz/media/partners/%D0%9A%D0%BE%D0%BC%D0%B8%D1%82%D0%B5%D1%82_%D0%BF%D0%BE_%D1%82%D1%83%D1%80%D0%B8%D0%B7%D0%BC%D1%83_%D1%83%D0%B7%D0%B1.png"
        alt="Image 2"
      />
      <img
        src="https://admin.tabarrukziyorat.uz/media/partners/f6dfaee1-5f13-cfec-e602-eb3e09c726dc_authority_19.png"
        alt="Image 3"
      />
      <img
        class="turkiye-logo"
        src="https://admin.tabarrukziyorat.uz/media/partners/ADM.png"
        alt="Turkey"
      />
    </Vue3Marquee>


    <img
      class="center-logo"
      src="https://tabarrukziyorat.uz/_nuxt/partners-logo.svg"
      alt="Partners Logo"
    />

  
    <Vue3Marquee
      :clone="true"
      :duration="20"
      class="marquee-container"
      :pause-on-hover="true"
      direction="reverse"
    >
      <img
        src="https://admin.tabarrukziyorat.uz/media/partners/%D0%AD%D0%BA%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F_%D1%83%D0%B7%D0%B1_LmlTrfm.png"
        alt="Image 1"
      />
      <img
        src="https://admin.tabarrukziyorat.uz/media/partners/%D0%9A%D0%BE%D0%BC%D0%B8%D1%82%D0%B5%D1%82_%D0%BF%D0%BE_%D1%82%D1%83%D1%80%D0%B8%D0%B7%D0%BC%D1%83_%D1%83%D0%B7%D0%B1.png"
        alt="Image 2"
      />
      <img
        src="https://admin.tabarrukziyorat.uz/media/partners/f6dfaee1-5f13-cfec-e602-eb3e09c726dc_authority_19.png"
        alt="Image 3"
      />
      <img
        class="turkiye-logo"
        src="https://admin.tabarrukziyorat.uz/media/partners/ADM.png"
        alt="Turkey"
      />
    </Vue3Marquee>

  </div>
</template>

<script setup>
import { Vue3Marquee } from "vue3-marquee";
</script>

<style scoped>
.title {
  font-size: 40px;
  color: white;
  text-align: center;
} 
.turkiye-logo {
  width: 45px !important;
  height: 45px !important;
  object-fit: contain;
} 
.divider {
  width: 220px;
  margin: 10px auto 30px;
  border: 2px solid #ef4444;
}
.relative {
  position: relative;
}
.marquee-container img {
  width: 120px;
  height: 100px;
  object-fit: contain;
  margin: 0 50px;
  filter: grayscale(100%);
  transition: 0.2s ease;
}
.marquee-container img:hover {
  filter: grayscale(0);
}
.turkiye-logo {
  width: 75px !important;
  height: 75px !important;
}

.center-logo {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  z-index: 100;
}

.p-Hamkorlar {
  color: white;
  margin: auto;
  text-align: center;
  padding-bottom: 40px;
}
</style>