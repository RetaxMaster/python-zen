<template>
    
    <div class="mt-3 border-2 border-dirty-white rounded px-5 py-4 cursor-pointer highlight" :class="{ 'active': answer.isActive }" @click="selectAnswer">
        <p>{{ answer.answer }}</p>
    </div>

</template>

<script>
export default {
    
    name: "Answer",

    props: {
        answer: {
            type: Object,
            required: true
        },
        id: {
            type: Number,
            required: true
        }
    },

    methods: {

        selectAnswer() {

            this.$emit("selectAnswer", this.id);

        }

    }

}
</script>