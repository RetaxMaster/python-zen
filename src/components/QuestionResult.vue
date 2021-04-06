<template>
    
    <div class="mt-3 border-2 border-green-light rounded px-5 py-4" :class="{ bad: !question.status }">
        <p>{{ question.question }}</p>
    </div>

</template>

<script>
export default {
    
    name: "QuestionResult",

    props: {
        question: {
            type: Object,
            required: true
        }
    },

}
</script>