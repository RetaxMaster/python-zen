<template>
    <div class="flex w-full h-full flex-col">
        
        <HeaderBar />

        <Questions />

    </div>
</template>

<script>

import HeaderBar from '@/components/HeaderBar.vue'
import Questions from '@/views/Questions/Index.vue'

export default {
    
    name: "MainLayout",

    components: {
        HeaderBar,
        Questions
    }

}

</script>