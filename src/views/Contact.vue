<template>
    <div class="flex justify-center items-center mt-10">
      <div class="w-full max-w-md p-8 rounded-lg">
        <!-- LottiePlayer -->
        <div class="flex justify-center pr-10">
            <lottie-player src="https://lottie.host/6ad73ea7-2dd6-45c0-81fe-e93d437c69d1/XJORq5uYYg.json" background="transparent" speed="1" class="w-[150px] h-auto" loop autoplay></lottie-player>
        </div>
        <!-- Intro -->
        <h2 class="text-3xl text-customTxt dark:text-customBG font-teko font-bold mb-6 text-center">Contact Me</h2>
        <p class="text-lg text-customTxt dark:text-customBG mb-4 text-center">Whether it's a new project or just a quick question, I'm only a message away. Let's connect!</p>
        <!-- Fields -->
        <div class="flex justify-center space-x-4 mb-6">
          <a href="https://github.com/ALpinesss" class="text-customTxtOrange hover:text-gray-400 text-xl">
            <v-icon name="bi-github" scale="1.5" />
          </a>
          <a href="https://www.linkedin.com/in/alfie-lindon-adrales-63395820b/" class="text-customTxtOrange hover:text-gray-400 text-xl">
            <v-icon name="bi-linkedin" scale="1.5" />
          </a>
          <a href="https://www.facebook.com/alfie.adrales/" class="text-customTxtOrange hover:text-gray-400 text-xl">
            <v-icon name="bi-facebook" scale="1.5" />
          </a>
          <a href="https://www.instagram.com/alfie.adrales?igsh=b25lZWNkaDJiZTB2" class="text-customTxtOrange hover:text-gray-400 text-xl">
            <v-icon name="ri-instagram-fill" scale="1.5" />
          </a>
        </div>

        <form @submit.prevent="sendEmail">
          <div class="mb-4">
            <input type="text" id="name" v-model="form.name" class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customTxtOrange" placeholder="Name" required />
          </div>
          <div class="mb-4">
            <input type="email" id="email" v-model="form.email" class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customTxtOrange" placeholder="Email" required />
          </div>
          <div class="mb-4">
            <textarea id="message" v-model="form.message" class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customTxtOrange" placeholder="Message" rows="4" required></textarea>
          </div>
          <button type="submit" class="w-full bg-customTxtOrange dark:bg-customTxtYellow text-white p-3 rounded-lg hover:bg-orange-500 transition duration-300">
            Send Message <v-icon name="oi-paper-airplane" />
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const form = ref({
    name: '',
    email: '',
    message: ''
  });
  
  const sendEmail = async () => {
    try {
      const response = await fetch('http://localhost:5173/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form.value),
      });
  
      const result = await response.json();
      
      if (response.ok && result.success) {
        alert('Email sent successfully!');
        form.value.name = '';
        form.value.email = '';
        form.value.message = '';
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      alert('An error occurred: ' + error.message);
    }
  };
  </script>
  