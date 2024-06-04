<template>
    <Home>
        <template v-if="!isClick">
            <ListSubmissionTitle @is-click="getClick" />
        </template>
        <template v-else>
            <DetailSubmission @is-click="backButton" />
        </template>
    </Home>
</template>

<script setup lang="ts">
import ListSubmissionTitle from './ListSubmissionTitle.vue';
import Home from './Home.vue';
import { ref } from 'vue';
import DetailSubmission from './DetailSubmission.vue';


const isClick = ref<boolean>(false);

const getClick = (value: boolean) => {
    isClick.value = value;
}

const backButton = (value: boolean) => {
    isClick.value = value;
}

</script>


<style scoped lang="css">
.btn-light-2 {
    color: #000;
}
</style>