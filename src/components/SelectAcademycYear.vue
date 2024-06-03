<template>
    <select name="tahun-akademik" id="tahun-akademik" class="form-select">
        <option v-for="item in tahunAkademik" :key="item.id" :value="item.id" :selected="item.status == true">
            {{ `${item.nama} - ${item.semester == 1 ? 'Ganjil' : 'Genap'}` }}
        </option>
    </select>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import useApi from '../composables/api';
import { tahunAkademikType } from '../helpers/type';


const { graphqlResource } = useApi();

const tahunAkademik = ref<tahunAkademikType[]>([]);

onMounted(() => {
    getTahunAkademik();
})

const getTahunAkademik = async () => {
    const response: any = await graphqlResource('/v2', `
        {
            tahunAkademik2(sort: "-id"){
                tahunAkademik{
                    id
                    nama
                    semester
                    status
                }
            }
        }`
    );
    tahunAkademik.value = response.data.tahunAkademik2.tahunAkademik;
}
</script>