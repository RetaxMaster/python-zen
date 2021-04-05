<template>
    
    <div class="mt-3 border-2 border-white rounded px-5 py-4 cursor-pointer highlight">
        <p>{{ answer }}</p>
    </div>

</template>

<script>
export default {
    
    name: "Answer",

    props: {
        answer: {
            type: String,
            required: true
        }
    }

}
</script>