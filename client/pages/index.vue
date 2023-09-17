<template>
    <div class="bg-blue-950 h-[8vh] w-[100vw] px-[7.5vw] flex justify-between items-center drop-shadow-lg">
        <h3 class="text-white text-4xl font-bold cursor-pointer">Parking</h3>
    </div>
    <div class="h-[92vh] w-100vw flex relative overflow-hidden">
        <div class="w-1/2 h-full flex items-center justify-center">
            <img src="https://clipart-library.com/img/1883029.png" class="w-3/4 scale-x-[-1]">
        </div>
        <div class="w-1/2 h-full flex items-center justify-center">
            <form class="w-1/2 h-1/2 bg-white rounded-md drop-shadow-lg p-10 flex flex-col items-center gap-5">
                <h3 class="text-blue-950 text-4xl font-bold mb-10">Login</h3>
                <div class="w-3/4 flex flex-col gap-3">
                    <label for="email" class="text-xl text-blue-950 cursor-pointer">Email</label>
                    <input type="text" placeholder="email" class="input input-bordered input-info w-full" id="email"/>
                </div>
                <div class="w-3/4 flex flex-col gap-3">
                    <label for="password" class="text-xl text-blue-950 cursor-pointer">Password</label>
                    <input type="password" placeholder="password" class="input input-bordered input-info w-full" id="password"/>
                </div>
                <button class="btn btn-info text-white w-3/4 mt-10 text-xl">sign in</button>
            </form>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="absolute -bottom-64 -right-1/3 -z-10 w-full">
            <path fill="#172554" fill-opacity="1" d="M0,256L48,245.3C96,235,192,213,288,197.3C384,181,480,171,576,138.7C672,107,768,53,864,26.7C960,0,1056,0,1152,48C1248,96,1344,192,1392,240L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"  class="absolute -bottom-52 -right-1/3 -rotate-6 -z-20 w-full">
            <path fill="#3abff8" fill-opacity="1" d="M0,256L48,245.3C96,235,192,213,288,197.3C384,181,480,171,576,138.7C672,107,768,53,864,26.7C960,0,1056,0,1152,48C1248,96,1344,192,1392,240L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="absolute -bottom-48 -right-1/3 -rotate-12 -z-30 w-full">
            <path fill="#a2d9ff" fill-opacity="1" d="M0,256L48,245.3C96,235,192,213,288,197.3C384,181,480,171,576,138.7C672,107,768,53,864,26.7C960,0,1056,0,1152,48C1248,96,1344,192,1392,240L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
        </svg>
    </div>
</template>

<script setup>

</script>