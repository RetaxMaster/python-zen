<template>

<section class="flex w-full h-full flex-col flex-none transition">

    <p class="text-2xl font-bold">{{ question.question }}</p>

    <div class="answers mt-8">
        
        <Answer 
            v-for="(answer, i) in question.answers"
            :key="i"
            :answer="answer" 
        />

    </div>

</section>
    
</template>

<script>

import Answer from "@/components/Answer.vue";

export default {
    
    name: "Question",

    props: {
        question: {
            type: Object,
            required: true
        }
    },

    components: {
        Answer
    }

}

</script>

<style scoped>

.transition {
    transition: 0.3s all ease;
}

</style>