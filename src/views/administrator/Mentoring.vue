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
                <input type="text" name="search" id="search" class="form-control" placeholder="Cari ...">
            </div>
        </div>
        <!-- <div class="row">
            <div class="col-12">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Usulan Judul</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <h6 class="text-info fw-semibold">Tugas Akhir</h6>
                                        </div>
                                        <div>
                                            <h6>Muhammad Umar Mansyur</h6>
                                        </div>
                                        <div>
                                            <button type="button" class="btn btn-light btn-sm">
                                                <i class="bx bx-filter-alt"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="d-flex">
                                        <div>
                                            <img class="flex-shrink-0 me-3 p-0 border border-3 rounded-circle"
                                                src="https://api.unira.ac.id/img/profil/dkr/7104313501_thumb.jpg?1717403467"
                                                alt="Generic placeholder image" height="60">
                                        </div>
                                        <div>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                                                reprehenderit accusamus voluptates excepturi, dolorum facere recusandae,
                                                magni eius assumenda nam impedit, dicta consectetur labore molestiae
                                                beatae mollitia at eum autem.</p>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div> -->

        <div class="row mt-3">
            <div class="col-12">
                <div class="table-responsive">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Judul TA/KP</th>
                                <th>Dosen Pembimbing</th>
                                <th>Status</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Rancang Bangun Aplikasi Monitoring Tugas Akhir dan Kerja Praktek</td>
                                <td>Muhammad Umar Mansyur</td>
                                <td>
                                    <span class="badge bg-info">Aktif</span>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-light btn-sm">
                                        <i class="bx bx-filter-alt"></i>
                                    </button>
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