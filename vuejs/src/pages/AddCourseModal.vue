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
          <form  @submit.prevent="handleSubmit">
            <div class="mb-4">
              <label for="input" class="block text-gray-700 font-bold mb-2">
                Course Name
              </label>
              <input type="text" id="coursename" name="coursename" v-model="coursename" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
              <label for="input" class="block text-gray-700 font-bold mb-2">
                Description
              </label>
              
                <textarea id="description" name="description" v-model="description" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>

            </div>
            <div class="mb-4">
              <label for="input" class="block text-gray-700 font-bold mb-2">
                Price
              </label>
              <input type="text" id="price" name="price" v-model="price" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
              <div class="mb-4">
                <input type="file" ref="fileInput" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
          </form>
        </div>
        <div class="mt-5 sm:mt-6 flex justify-end">
            <button type="cancel" class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gray-700 border border-transparent rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mr-2" @click="closeModal">
                Cancel
            </button>
            <button type="submit" class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="handleSubmit">
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
  
  data() {
    return {
      coursename: '',
      description: '',
      price: '',
      image: null
    }
  },
  
  methods: {
    closeModal() {
      this.$emit('close');
    },
    async handleSubmit() {
      const formData = new FormData();
      formData.append('name', this.coursename);
      formData.append('description', this.description)
      formData.append('price', this.price)
      formData.append('image', this.$refs.fileInput.files[0]);
      const response = await axios.post('http://localhost:5000/course/', formData);
        console.log(response)
        alert('Add Course Success!')
          this.$emit('submit', response.data);

    },
  }
}
</script>