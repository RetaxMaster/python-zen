<template>
    
    <header class="bg-primary px-5 py-3 text-white font-bold flex items-center shadow-md">

        <Logo />
        <h1 class="ml-5 text-2xl">El zen de Python</h1>

    </header>

</template>

<script>

import Logo from './Logo.vue'

export default {
    
    name: "HeaderBar",

    components: {
        Logo
    }

}

</script>