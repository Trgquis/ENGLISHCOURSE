<template>
  <div class="flex flex-col h-screen">
    <HeaderPage />
    <GetCourse />
    <FooterPage />
  </div>
</template>


<script>
import HeaderPage from '@/components/NavBar.vue';
import GetCourse from '@/components/getCourses.vue'
import FooterPage  from '@/components/FooterBar.vue';
export default {
  name: 'GetCourses',
  components: {
    HeaderPage,
    GetCourse,
    FooterPage,
  },
};
</script>
<style>
/* Add your own custom styles here */
</style>
