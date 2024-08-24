<template>
<!-- Projects Section -->
<div id="projects" class="mt-64">
        <h1 class="text-customTxtOrange dark:text-customTxtYellow text-center font-teko font-bold" style="font-size: 50px;">PROJECTS</h1>
        <p class="text-center text-customTxt dark:text-customBG text-lg">Take a look at some of the projects that I'm proud of:</p>

        <div class="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0 md:space-x-8">
            <!-- Leap Demo -->
            <div class="flex items-center w-full md:w-1/3 h-96 bg-[#1976d2] shadow-lg rounded-xl">
                <img src="/src/assets/images/AS_computer.png" alt="leapdemo" class="w-[80%] md:w-[350px] h-auto mx-auto">
            </div>

            <div class="flex flex-col items-center justify-center w-full md:w-1/3 h-96 shadow-lg rounded-xl">
                <h1 class="font-teko mt-6 text-[#1976d2]" style="font-size: 50px;">Appointment System</h1>
                <p class="text-center mt-5 text-customTxt dark:text-customBG">Carbon Department Appointment Booking for car parts<br>Built with: <v-icon name="vi-file-type-light-quasar" scale="2" /> <v-icon name="co-laravel" scale="2" fill="red" /></p>
                <RouterLink to="/as" class="text-[#1976d2] mt-6 hover:underline" >View Project</RouterLink>
            </div>
        </div>

        <div class="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0 md:space-x-8">
            <!-- CCMF -->
            <div class="flex items-center w-full md:w-1/3 h-96 bg-[#a3ffd6] shadow-lg rounded-xl">
                <img src="/src/assets/images/CCMF_tablet.png" alt="leapdemo" class="w-[80%] md:w-[450px] h-auto mx-auto">
            </div>

            <div class="flex flex-col items-center justify-center w-full md:w-1/3 h-96 shadow-lg rounded-xl">
                <h1 class="font-teko mt-6 text-[#19db93]" style="font-size: 50px;">Scholarship Management System</h1>
                <p class="text-center mt-5 text-customTxt dark:text-customBG">Consuelo Chito Madrigal Foundation Scholarship Management System.<br>Built with: <v-icon name="vi-file-type-php" scale="2" /><v-icon name="fa-bootstrap" scale="2" fill="purple" /><v-icon name="co-javascript" scale="2" /></p>
                <RouterLink to="/ccmf" class="text-[#19db93] mt-6 hover:underline" >View Project</RouterLink>
            </div>
        </div>

        <div class="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0 md:space-x-8">
            <!-- Leap Demo -->
            <div class="flex items-center w-full md:w-1/3 h-96 bg-[#3874ff] shadow-lg rounded-xl">
                <img src="/src/assets/images/leapDemo_laptop.png" alt="leapdemo" class="w-[80%] md:w-[500px] h-auto mx-auto">
            </div>

            <div class="flex flex-col items-center justify-center w-full md:w-1/3 h-96 shadow-lg rounded-xl">
                <h1 class="font-teko mt-6 text-[#3874ff]" style="font-size: 50px;">Hail Cat Tool</h1>
                <p class="text-center mt-5 text-customTxt dark:text-customBG">A risk awareness about hail risk and hail cat tool.<br>Built with: <v-icon name="vi-file-type-php" scale="2" /><v-icon name="fa-bootstrap" scale="2" fill="purple" /><v-icon name="co-javascript" scale="2" /></p>
                <RouterLink to="/hct" class="text-[#3874ff] mt-6 hover:underline" >View Project</RouterLink>
            </div>
        </div>

        <div class="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0 md:space-x-8">
            <!-- Zyone -->
            <div class="flex items-center w-full md:w-1/3 h-96 bg-[#0d536c] shadow-lg rounded-xl">
                <img src="/src/assets/images/Zyone_computer.png" alt="leapdemo" class="w-[80%] md:w-[380px] h-auto mx-auto">
            </div>

            <div class="flex flex-col items-center justify-center w-full md:w-1/3 h-96 shadow-lg rounded-xl">
                <h1 class="font-teko mt-6 text-[#0d536c]" style="font-size: 50px;">Zyone Gym Equipment</h1>
                <p class="text-center mt-5 text-customTxt dark:text-customBG">A gym equipment E-commerce website submitted as a project in school.<br>Built with: <v-icon name="vi-file-type-php" scale="2" /><v-icon name="fa-bootstrap" scale="2" fill="purple" /><v-icon name="co-javascript" scale="2" /></p>
                <RouterLink to="/zy" class="text-[#0d536c] mt-6 hover:underline" >View Project</RouterLink>
            </div>
        </div>

        <div class="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0 md:space-x-8">
            <!-- 3G -->
            <div class="flex items-center w-full md:w-1/3 h-96 bg-[#6e35b7] shadow-lg rounded-xl">
                <img src="/src/assets/images/3G_laptop.png" alt="leapdemo" class="w-[80%] md:w-[500px] h-auto mx-auto">
            </div>

            <div class="flex flex-col items-center justify-center w-full md:w-1/3 h-96 shadow-lg rounded-xl">
                <h1 class="font-teko mt-6 text-[#6e35b7]" style="font-size: 50px;">3G HR Managment System</h1>
                <p class="text-center mt-5 text-customTxt dark:text-customBG">This sub-system is part of a super system of our group project.<br>Built with: <v-icon name="vi-file-type-php" scale="2" /><v-icon name="fa-bootstrap" scale="2" fill="purple" /><v-icon name="co-javascript" scale="2" /></p>
                <a class="text-[#6e35b7] mt-6 hover:underline" >View Project</a>
            </div>
        </div>
    </div>
</template>
    

<script setup>

</script>