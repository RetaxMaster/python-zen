<template>

<section class="flex w-full h-full flex-col flex-none transition">

    <p class="text-2xl font-bold">{{ question.question }}</p>

    <div class="answers mt-8">
        
        <Answer 
            v-for="(answer, i) in answers"
            :key="i"
            :answer="answer"
            :id="i"
            @selectAnswer="selectAnswer"
        />

    </div>

</section>
    
</template>

<script>

import Answer from "@/components/Answer.vue";

export default {
    
    name: "Question",
    
    components: {
        Answer
    },

    props: {
        question: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            answers: [],
            activeAnswer: null
        }
    },

    created() {

        const answers = this.parseAnswers();
        this.answers = answers;

    },

    methods: {

        selectAnswer(index) {

            const selected = this.answers[index];

            this.deactivateAnswer();
            selected.isActive = true;

            this.activeAnswer = selected;

            this.$emit("addAnswer", {
                questionId: this.question.id,
                answer: index
            });

        },

        // Deselecciona una respuesta que ya estaba seleccionada antes
        deactivateAnswer() {
            
            if (this.activeAnswer != null)
                this.activeAnswer.isActive = false;

        },

        // Tranforma cada respuesta en un JSON que contiene más información sobre el estado de la respuesta
        parseAnswers() {

            const answers = [];

            this.question.answers.forEach(answer => {
                answers.push({
                    answer,
                    isActive: false
                });
            });

            return answers;

        }

    }

}

</script>

<style scoped>

.transition {
    transition: 0.3s all ease;
}

</style>