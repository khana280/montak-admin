<template>
    <Home>
        <div class="row">
            <div class="col-auto">
                <SelectAcademycYear />
            </div>
            <div class="col-auto px-1">
                <select name="type-submission" id="type-submission" class="form-select">
                    <option value="all">Semua</option>
                    <option value="kerja-praktek">Kerja Praktek</option>
                    <option value="tugas-akhir">Tugas Akhir</option>
                </select>
            </div>
            <div class="col-auto ms-auto">
                <div class="input-group">
                    <input type="text" name="search" id="search" class="form-control" placeholder="Cari ...">
                    <button type="button" class="btn btn-light">
                        <i class="bx bx-search"></i>
                    </button>
                </div>
            </div>
        </div>
        
        <div class="row mt-3">
            <div class="col-12">
                <div class="table-responsive">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th class="text-center">No</th>
                                <th>Judul TA/KP</th>
                                <th>Dosen Pembimbing</th>
                                <th>Jumlah Bimbingan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-center">1</td>
                                <td>Rancang Bangun Aplikasi Monitoring Tugas Akhir dan Kerja Praktek</td>
                                <td>Muhammad Umar Mansyur</td>
                                <td class="text-center">
                                    5
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </Home>
</template>


<script setup lang="ts">
import SelectAcademycYear from '../../components/SelectAcademycYear.vue';
import Home from './Home.vue';
</script>