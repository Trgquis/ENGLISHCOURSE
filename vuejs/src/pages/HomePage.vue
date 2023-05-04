<template>
  <div  class="flex flex-col h-screen">
    <HeaderPage />
    <MainPage />
    <FooterPage />
  </div>

</template>

<script>
import HeaderPage from '@/components/NavBar.vue';
import MainPage  from '@/components/MainPage.vue';
import FooterPage  from '@/components/FooterBar.vue';

export default {
  name: 'HomePage',
  components: {
    HeaderPage,
    MainPage,
    FooterPage,
  },
};
</script>
