<template>
    <Home>
        <template v-if="!isClick">
          <ListMentoring @isClick="getClick"/>
        </template>
        <template v-else>
            <MentoringEventNews @isClick="getClick"/>
        </template>
    </Home>
</template>


<script setup lang="ts">
import Home from './Home.vue';
import { ref } from 'vue';
import ListMentoring from './ListMentoring.vue';
import MentoringEventNews from './MentoringEventNews.vue';

const isClick = ref<boolean>(false);

const getClick = (value: boolean) => {
    isClick.value = value;
}

</script>