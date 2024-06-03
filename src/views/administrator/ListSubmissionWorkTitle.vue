<template>
    <div class="row border-bottom pb-3">
        <div class="col-12">
            <div class="row gap-0">
                <div class="col-auto">
                    <SelectAcademycYear />
                </div>
                <div class="col-auto">
                    <div class="input-group">
                        <select name="status" id="status" class="form-select">
                            <option value="0">Semua Status</option>
                            <option value="1">Belum Diterima</option>
                            <option value="2">Diterima</option>
                            <option value="3">Ditolak</option>
                        </select>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="input-group">
                        <input type="text" name="search" id="search" class="form-control" placeholder="Cari ...">
                    </div>
                </div>
                <div class="col-auto ms-auto">
                    <button type="button" class="btn btn-primary">
                        <i class="bx bx-plus"></i> Tambah Usulan
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <div class="table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th colspan="2" class="font-size-16">USULAN JUDUL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="i in 5" :key="i">
                            <td>
                                <i class="mdi mdi-circle text-muted"></i>
                            </td>
                            <td>
                                <div class="d-flex justify-content-between justify-items-center gap-2">
                                    <h6 class="text-info fw-semibold">USULAN JUDUL KERJA PRAKTEK</h6>
                                    <h6 class="flex">
                                        Muhammad Umar Mansyur
                                    </h6>
                                    <div class="my-auto d-flex gap-2">
                                        <button type="button" class="btn btn-light btn-sm my-auto"
                                            @click="getSubmission">
                                            <i class="bx bx-filter-alt"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="d-flex me-5">
                                    <p class="text-muted my-0">
                                        Rancang Bangun Aplikasi Monitoring Tugas Akhir dan Kerja Praktek
                                        Menggunakan
                                        Pendekatan Domain Driven Design
                                    </p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-12">
            <div class="d-flex justify-items-center justify-content-between">
                <div class="my-auto fw-semibold">
                    Menampilkan 1 - 10 dari 100 data
                </div>
                <div class="d-flex gap-2">
                    <div>
                        <button class="btn btn-light-2">
                            <i class="mdi mdi-chevron-left"></i>
                        </button>

                    </div>
                    <div class="my-auto">

                        <span class="border p-2 rounded-3 px-3">1</span>
                        <span class="mx-2 text-muted">of</span>
                        <span class="p-2 text-muted">3</span>
                    </div>
                    <div>
                        <button class="btn btn-light-2">
                            <i class="mdi mdi-chevron-right"></i>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SelectAcademycYear from '../../components/SelectAcademycYear.vue';

const emit = defineEmits(['isClick']);


const getSubmission = () => {
    emit('isClick', true)
}
</script>