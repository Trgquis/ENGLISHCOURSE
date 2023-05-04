<template>
  <div class="fixed inset-0 z-50 overflow-auto bg-opacity-50 bg-gray-900 flex">
    <div class="mx-auto my-8 z-50 relative bg-white rounded-lg px-8 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:max-w-3xl sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div>
        <div class="mt-3 text-center sm:mt-5">
          <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
            Edit Course Infomation
          </h3>
        </div>
        <div class="mt-5 sm:mt-6">
          <form>
            <div class="mb-4">
              <label for="input" class="block text-gray-700 font-bold mb-2">
                Course name
              </label>
              <input type="text" id="coursename" name="coursename" v-model="coursename" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
              <label for="input" class="block text-gray-700 font-bold mb-2">
                Description
              </label>
              <input type="text" id="description" name="description" v-model="description" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
              <label for="input" class="block text-gray-700 font-bold mb-2">
                Price
              </label>
              <input type="text" id="price" name="price" v-model="price" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            
          </form>
        </div>
        <div class="mt-5 sm:mt-6 flex justify-end">
            <button type="button" class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gray-700 border border-transparent rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mr-2" @click="closeModal">
                Cancel
            </button>
            <button type="button" class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="submitForm">
                Save     
            </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  props: {
    course: {
      type: Object,
      required: true
    },   
  },
  data() {
    return {
      coursename: '',
      description: '',
      price: '',
      id: ''
    }
  },
  mounted() {
    this.coursename = this.course.name;
    this.description = this.course.description;
    this.price = this.course.price;
    this.id = this.course._id
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
   async submitForm() {
      const updatedCourse = {
        id: this.id,
        coursename: this.coursename,
        description: this.description,
        price: this.price
      };
      console.log(updatedCourse)
      const response = await axios.put(`http://localhost:5000/course/`, updatedCourse);
        console.log(response)
        alert('Edit Course Success!')
      this.$emit('submit', updatedCourse);
    }
  }
}
</script>