<template>
    <div class="flex flex-wrap justify-center" style="height: auto; margin-top: 20px">
      <div v-for="course in courses" :key="course.id" class="bg-white shadow-md rounded-md overflow-hidden mb-8 mr-8 w-1/3">
        <img :src="'http://localhost:5000/course/image/' + course._id" alt="Course Image" class="w-full h-56 object-cover">
        <div class="p-4">
          <h3 class="text-lg font-medium mb-2">{{ course.name }}</h3>
          <div class="flex justify-between items-center">
            <p class="text-gray-700 font-bold text-lg">${{ course.price }} for this course <br> per week(2-3 days)</p>
            <button @click="AddCourse()" class="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">Contact Now</button>
            <AddContactModalVue v-if="openModal" @close="openModal = false" />
          </div>
          <p class="text-gray-600 mb-4">{{ course.description }}</p>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
import AddContactModalVue from '../pages/AddContactModal.vue';
export default {
    components: {
        AddContactModalVue
    },
  data() {
    return {
      courses: [],
        openModal: false,

    };
  },
  created() {
       this.fetchCourses();

  },
  methods: {
    fetchCourses() {
            axios
                .get('http://localhost:5000/course')
                .then(response => {
                    this.courses = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        AddCourse() {
            this.openModal = true;
        },
  }
};
</script>