<template>
    <Navbar/>
    <div class="h-[92vh] w-[100vw] px-[7.5vw] flex flex-col py-5 gap-5">
        <div class="h-[40vh] w-full flex flex-col drop-shadow-md border border-info rounded-md bg-white p-5 gap-5">
            <h2 class="text-4xl font-bold text-blue-950">Where to park</h2>
            <div class="w-full h-[80%] flex gap-5 relative">
                <div class="flex justify-center items-center text-white text-4xl w-1/3 h-full rounded-lg bg-white cursor-pointer overflow-hidden hover:bg-black duration-[0.4s] ease-in-out relative">
                    Grand Indonesia
                    <img src="https://awsimages.detik.net.id/community/media/visual/2022/11/15/mall-terbesar-di-indonesia-4_169.jpeg?w=1200" alt="Grand Indonesia" class="top-0 h-full w-full object-cover hover:opacity-40 absolute">
                </div>
                <div class="flex justify-center items-center text-white text-4xl w-1/3 h-full rounded-lg bg-white cursor-pointer overflow-hidden hover:bg-black duration-[0.4s] ease-in-out relative">
                    Pondok Indah Mall 3
                    <img src="https://pondokindah.id/wp-content/uploads/2019/11/pondok-indah-mall-3.jpg" alt="Grand Indonesia" class="top-0 h-full w-full object-cover hover:opacity-40 absolute">
                </div>
                <div class="flex justify-center items-center text-white text-4xl w-1/3 h-full rounded-lg bg-white cursor-pointer overflow-hidden hover:bg-black duration-[0.4s] ease-in-out relative">
                    Summarecon Mall Serpong
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/aa/43/2a/summarecon-mal-serpong.jpg?w=1200&h=-1&s=1" class="top-0 h-full w-full object-cover hover:opacity-30 absolute">
                </div>
            </div>
        </div>
        <div class="h-[40vh] w-full flex flex-col drop-shadow-md border border-info rounded-md bg-white gap-5 overflow-hidden relative">
            <div class="flex h-[15%] w-full border border-b-info gap-5 px-5">
                <div class="flex items-center w-1/3 h-full">
                    <h3>Choose parking destination</h3>
                </div>
                <div class="flex justify-center items-center w-1/3 h-full">

                </div>
                <div class="flex justify-center items-center w-1/3 h-full">

                </div>
            </div>
            <div class="flex justify-center items-center w-full h-[85%] px-5 text-2xl font-bold text-info">
                    Choose your destination first
            </div>
            <button class="btn btn-info text-white w-40 absolute bottom-5 right-5 font-bold text-xl" disabled="true">Book</button>
        </div>
    </div>
</template>

<script setup>
    

</script>
