<template>
  <div style="height: 100%">
    <HeaderPage/>
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8" style="padding-bottom: 100px " >
    <h1 class="text-4xl font-bold text-gray-900 mb-8" >About Us</h1>
    <div class="flex flex-col md:flex-row">
      <img :src="'https://yola.vn/wp-content/uploads/2023/03/web-summer-02-680x680.png'" alt="aboutus-image" class="w-full md:w-1/2 mb-4 md:mb-0">
      <div class="md:ml-8">
        <p class="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia euismod varius. Maecenas lacinia nulla in erat dictum, in dignissim orci bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas et blandit orci. Duis vestibulum ligula id urna volutpat ultrices. Nulla facilisi. Nulla facilisi.
        </p>
        <p class="text-gray-700 mb-4">
          Praesent semper urna libero, quis imperdiet leo tincidunt non. Nulla nec purus vitae orci tincidunt malesuada. Nullam lacinia nulla vel urna scelerisque, vel rutrum quam convallis. Sed imperdiet nisi at tellus congue, id volutpat felis blandit. Etiam vestibulum sagittis lorem vel fringilla. Sed et enim a nulla tincidunt rhoncus.
        </p>
        <p class="text-gray-700">
          Curabitur ultricies bibendum eros ac rhoncus. Nunc congue velit id nisi blandit auctor. Donec blandit leo in ante malesuada, vitae hendrerit risus rhoncus. Integer viverra magna enim, sed feugiat felis faucibus non. Aenean pulvinar, lorem vel placerat euismod, justo elit blandit quam, vel bibendum magna velit eget nisl. Nam viverra id ante vel interdum.
        </p>
      </div>
    </div>
  </div>
    <FooterPage/>
  </div>
</template>
<script>
import HeaderPage from '@/components/NavBar.vue';
import FooterPage  from '@/components/FooterBar.vue';
export default {
  name: 'AboutUs',
  components: {
    HeaderPage,
    FooterPage,
  },
}
</script>