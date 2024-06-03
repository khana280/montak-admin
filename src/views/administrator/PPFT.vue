<template>
    <Home>
        <template v-if="!isClick">
            <ListSubmissionTitle @is-click="getClick" />
        </template>
        <template v-else>
            <div class="row">
                <div class="col-6">
                    <button type="button" class="btn btn-secondary float-start me-3" @click="backButton()">
                        <i class="bx bx-arrow-back"></i>
                    </button>
                    <h6>
                        INFORMATIKA
                        <br>
                        <small>
                            HALAMAN USULAN JUDUL
                        </small>
                    </h6>
                </div>
                <div class="col-6 text-end">
                    <button type="button" class="btn btn-danger waves-effect btn-label waves-light">
                        <i class="bx bx-x label-icon"></i>
                        Hapus Usulan
                    </button>
                </div>
            </div>
            <div class="row gap-2 mt-3">
                <div class="col-auto my-auto">
                    <img src="https://api.unira.ac.id/img/profil/mhs/d9674b9d198eecaa13f3f057d5390a12.jpg" alt="img-mhs"
                        class="img-fluid border border-4 border avatar-lg rounded-circle d-block">
                </div>
                <div class="col-auto my-auto">
                    <h5 class="my-0 fw-semibold">Muhammad Umar Mansyur</h5>
                    <h6 class="my-0 fw-medium">2020520018</h6>
                    <h6 class="text-info font-size-12">Sistem Informasi</h6>
                </div>
            </div>
            <div class="row my-2 border-bottom">
                <div class="col-auto my-auto">
                    <h6 class="font-size-13">Judul: <span class="font-size-13">Rancang Bangun Aplikasi Monitoring Tugas
                            Akhir Menggunakana Pendekatan Domain Driven Design</span></h6>
                </div>
            </div>
            <div class="row gap-3">
                <div class="col-12 d-flex justify-content-between">
                    <h6 class="font-size-13 fw-semibold my-auto">Deskripsi:</h6>
                    <a href="" class="text-muted">Edit</a>
                </div>
                <div class="col-12">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas architecto odit fugit consectetur
                        quibusdam, aspernatur asperiores quis eius eaque ad error sapiente saepe nulla harum dolore.
                        Recusandae illum labore repellendus!</p>
                </div>
                <div class="col-12" v-for="i in 3">
                    <h6>Review Jurnal {{ i }}:</h6>
                    <div class="d-flex">
                        <div class="me-2">
                            <i class="bx bx-check-circle text-success"></i>
                        </div>
                        <div>
                            <p class="my-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas architecto
                                odit
                                fugit consectetur quibusdam, aspernatur asperiores quis eius eaque ad error sapiente
                                saepe
                                nulla harum dolore. Recusandae illum labore repellendus!</p>
                        </div>
                        <div>
                            <a href="#" class="text-muted">Edit</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row gap-y-3">
                <h6 class="col-12 my-3">Dokumen Pendukung: </h6>
                <div class="col-xl-4 col-sm-6" v-for="i in 3">
                    <div class="card">
                        <div class="card-body p-3">
                            <div class="">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <i class="bx bxs-file-pdf h2 mb-0 text-danger"></i>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-success btn-sm">
                                            <i class="bx bx-search"></i> Lihat
                                        </button>
                                    </div>
                                </div>
                                <div class="d-flex mt-3">
                                    <div class="overflow-hidden me-auto">
                                        <p class="font-size-12 text-truncate mb-1">
                                            <a href="javascript: void(0);" class="text-body">
                                                Penerapan Metode Domain Driven Design pada Aplikasi Monitoring Tugas
                                                Akhir
                                            </a>
                                        </p>
                                        <p class="text-muted text-truncate mb-0">12 MB</p>
                                    </div>
                                    <div class="align-self-end ms-2 flex-shrink-0">
                                        <p class="text-muted mb-0 font-size-13">
                                            <i class="bx bx-time-five align-middle me-1"></i>
                                            12 Januari 2022
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </Home>
</template>

<script setup lang="ts">
import ListSubmissionTitle from './ListSubmissionTitle.vue';
import Home from './Home.vue';
import { ref } from 'vue';


const isClick = ref<boolean>(false);

const getClick = (value: boolean) => {
    isClick.value = value;
}

const backButton = () => {
    isClick.value = false;
}

</script>


<style scoped lang="css">
.btn-light-2 {
    color: #000;
}
</style>