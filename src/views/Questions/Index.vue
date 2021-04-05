<template>

    <div class="bg-dark flex w-full h-full px-3">
        <main class="container mx-auto py-10 text-white h-full">

            <p>Con este sencillo test podrás repasar el zen de Python 🐍. No hay tiempo, no hay presiones, solo contesta las preguntas y aprende >:D.</p>

            <div class="mt-10 flex flex-no-wrap overflow-hidden" ref="question-container">
                 
                <Question v-for="question in questions" :key="question.id" :question="question" />

            </div>

            <div class="flex justify-end mt-5">

                <button 
                    v-if="!activeFinishButton"
                    type="button" 
                    class="px-5 py-3 bg-secondary rounded ring-4" 
                    @click="nextQuestion"
                >Siguiente</button>

                <button 
                    v-else
                    type="button" 
                    class="px-5 py-3 bg-secondary rounded ring-4" 
                    @click="finishTest"
                >Terminar</button>

            </div>

        </main>
    </div>
    
</template>

<script>

import Question from './Question.vue'
import { questions } from "@/api/questions";

export default {
    
    name: "Questions",

    data() {
        return {
            questions,
            questionNumber: 0,
            activeFinishButton: false
        }
    },

    components: {
        Question
    },

    methods: {

        nextQuestion() {

            const firstChild = this.$refs["question-container"].children[0];
            this.questionNumber++;

            const marginLeft = 0 - (this.questionNumber * 100)
            firstChild.style.marginLeft = `${marginLeft}%`;

            const totalQuestions = this.questions.length;

            if (this.questionNumber + 1 == totalQuestions)
                this.activeFinishButton = true;

        },

        finishTest() {
            console.log("Has terminao uwu");
        }

    }

}

</script>