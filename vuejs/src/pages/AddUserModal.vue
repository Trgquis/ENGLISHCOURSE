<template>
  <div class="fixed inset-0 z-50 overflow-auto bg-opacity-50 bg-gray-900 flex">
    <div class="mx-auto my-8 z-50 relative bg-white rounded-lg px-8 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:max-w-3xl sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div>
        <div class="mt-3 text-center sm:mt-5">
          <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
            Edit User
          </h3>
        </div>
        <div class="mt-5 sm:mt-6">
          <form  @submit.prevent="handleSubmit">
            <div class="mb-4">
              <label for="input" class="block text-gray-700 font-bold mb-2">
                Username
              </label>
              <input type="text" id="username" name="username" v-model="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
              <label for="input" class="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input type="email" id="email" name="email" v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
              <label for="input" class="block text-gray-700 font-bold mb-2">
                Password
              </label>
              <input type="password" id="password" name="password" v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
              <label for="select" class="block text-gray-700 font-bold mb-2">
                Gender
              </label>
              <div class="relative">
                <select id="select" name="select" v-model="gender" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <option value="#">-- Select Gender --</option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" viewBox="0 0 20 20">
                    <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
                  </svg>
                </div>
              </div>
              <div class="mb-4">
                <input type="file" ref="fileInput" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
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
      username: '',
      email: '',
      gender: '',
      password: '',
      avatar: null
    }
  },
  
  methods: {
    closeModal() {
      this.$emit('close');
    },
    async handleSubmit() {
      const formData = new FormData();
      formData.append('name', this.username);
      formData.append('email', this.email)
      formData.append('password', this.password)
      formData.append('gender', this.gender)
      formData.append('avatar', this.$refs.fileInput.files[0]);
      const response = await axios.post('http://localhost:5000/user/', formData);
        console.log(response)
        alert('Add User Success!')
          this.$emit('submit', response.data);

    },
  }
}
</script>