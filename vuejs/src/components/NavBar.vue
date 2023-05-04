<template>
<nav class="bg-gray-50 dark:bg-gray-900 py-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <img class="block h-14 w-auto" src="../../public/logo.png" alt="Logo">
            </div>
            <div class="hidden md:flex md:ml-10 md:space-x-10">
              <a href="/homepage" class="text-white hover:bg-blue-700 px-3 py-6 rounded-md text-sm font-medium">Home</a>
              <a href="/getCourses" class="text-white hover:bg-blue-700 px-3 py-6 rounded-md text-sm font-medium">Courses</a>
              <a href="/aboutUs" class="text-white hover:bg-blue-700 px-3 py-6 rounded-md text-sm font-medium">About</a>
            </div>
          </div>
          <div v-if="isLoggedIn" class="w-[200px] ">
            <div  class="flex items-center justify-start space-x-4" @click="toggleDrop">
              <img :src="'http://localhost:5000/user/avatar/' + currentUser.currentId" 
              class="w-10 h-10 object-cover rounded-full border-2 border-gray-50" />
              <div class="font-semibold text-white text-left">
                <div>Hello <br>{{currentUser.name}}</div>
              </div>
            </div>
            <!-- Drop down -->
            <div v-show="showDropDown" class="absolute  z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div class="py-1 text-left" role="none">
                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                <form method="POST" action="#" role="none">
                  <button @click="logout" type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                
                </form>
              </div>
            </div>
          </div>
          <div v-else class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="/login" class="whitespace-nowrap text-base font-medium text-white hover:text-blue-50">
              Sign in
            </a>
            <a href="/regrist" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-blue-600 bg-white hover:bg-blue-50">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </nav>
  
</template>
<script>
export default {
  name: 'HomePage',
    data() {
        return {
            isLoggedIn: false,
            showDropDown: false,

            currentUser: {
                name: '',
                avatar: '',
                email: '',
            },
            
        }
    },
    created() {
        const userId = JSON.parse(localStorage.getItem("userId"));
        const userName = JSON.parse(localStorage.getItem("userName"));
        const userEmail = JSON.parse(localStorage.getItem("userEmail"));

        if (userId) {
            this.currentUser.name = userName;
            this.currentUser.email = userEmail;
            this.currentUser.currentId = userId;
            this.isLoggedIn = true
        }
    },
    methods: {
        logout() {
            localStorage.removeItem('token');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('avatar');
            localStorage.removeItem('userName');
            localStorage.removeItem('userId');
            localStorage.removeItem('user');


            alert('Logout Successfully!')
            this.isLoggedIn = false
            this.$router.push('/homepage');
        },
        toggleDrop() {
            this.showDropDown = !this.showDropDown;
        }
    }
}
</script>
<style>
/* Add your own styles here */
</style>
