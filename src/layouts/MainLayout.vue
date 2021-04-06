<template>
    <div class="flex w-full h-full flex-col">
        
        <HeaderBar />

        <router-view/>

    </div>
</template>

<script>

import HeaderBar from '@/components/HeaderBar.vue'

export default {
    
    name: "MainLayout",

    components: {
        HeaderBar
    }

}

</script>