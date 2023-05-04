<template>
  <div class="fixed inset-0 z-50 overflow-auto bg-opacity-50 bg-gray-900 flex">
    <div class="mx-auto my-8 z-50 relative bg-white rounded-lg px-8 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:max-w-3xl sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div>
        <div class="mt-3 text-center sm:mt-5">
          <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
            Edit Contact Infomation
          </h3>
        </div>
        <div class="mt-5 sm:mt-6">
          <form>
            <div class="mb-4">
              <label for="input" class="block text-gray-700 font-bold mb-2">
                Customer name
              </label>
              <input type="text" id="customername" name="customername" v-model="customername" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
              <label for="input" class="block text-gray-700 font-bold mb-2">
                Phone number
              </label>
              <input type="number" id="phone" name="phone" v-model="phone" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
              <label for="input" class="block text-gray-700 font-bold mb-2">
                Address
              </label>
              <input type="text" id="address" name="address" v-model="address" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <textarea name="" id="" v-model="message" cols="30" rows="10"></textarea>
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
      customername: '',
      phone: '',
      address: '',
      message:'',
        id: ''
    }
  },
  mounted() {
    this.customername = this.course.customername;
    this.phone = this.course.phone;
    this.address = this.course.address;
    this.message = this.course.message;

    this.id = this.course._id
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
   async submitForm() {
      const updatedCourse = {
        id: this.id,
        customername: this.customername,
        phone: this.phone,
        address: this.address,
        message: this.message,
      };
      console.log(updatedCourse)
      const response = await axios.put(`http://localhost:5000/contact/`, updatedCourse);
        console.log(response)
        alert('Edit Course Success!')
      this.$emit('submit', updatedCourse);
    }
  }
}
</script>