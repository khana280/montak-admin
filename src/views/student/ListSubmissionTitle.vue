<template>
    <div class="row">
        <div class="col-12 border-bottom pb-4">
            <div class="row">
                <div class="col-auto mb-3 mb-sm-0">
                    <div class="input-group">
                        <select name="status" id="status" class="form-select">
                            <option value="0">Semua Jenis</option>
                            <option value="1">Kerja Praktek</option>
                            <option value="2">Tugas Akhir/Skripsi</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-3 mb-3 mb-sm-0">
                    <div class="input-group">
                        <input type="text" name="search" id="search" class="form-control" placeholder="Cari ...">
                    </div>
                </div>
                <div class="col-auto ms-auto d-flex gap-1">
                    <button type="button" class="btn btn-warning waves-effect waves-light">
                        <i class="bx bx-printer"></i>
                    </button>
                    <button type="button" class="btn btn-danger waves-effect waves-light">
                        <i class="bx bx-plus-circle"></i> Tambah Usulan
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
                        <tr>
                            <td class="text-center">
                                <i class="mdi mdi-circle text-muted"></i>
                            </td>
                            <td>
                                <div class="d-flex justify-content-between justify-items-center gap-2">
                                    <h6 class="text-info fw-semibold cursor-point" @click="getSubmission">Usulan Judul
                                        Kerja Praktek</h6>
                                    <h6 class="flex">
                                        Muhammad Umar Mansyur
                                    </h6>
                                    <div class="my-auto d-flex gap-2">
                                        <button type="button" class="btn btn-success btn-sm my-auto"
                                            data-bs-target="#modal-submission" data-bs-toggle="modal">
                                            <i class="bx bx-filter-alt"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="d-flex me-5">
                                    <p class="text-muted my-0 cursor-point" @click="getSubmission">
                                        Rancang Bangun Aplikasi Monitoring Tugas Akhir dan Kerja Praktek
                                        Menggunakan
                                        Pendekatan Domain Driven Design
                                    </p>
                                </div>
                            </td>

                        </tr>
                        <tr class="cursor-point" @click="getSubmission">
                            <td class="text-center">
                                <i class="mdi mdi-circle text-muted"></i>
                            </td>
                            <td>
                                <div class="d-flex justify-content-between justify-items-center gap-2">
                                    <h6 class="text-info fw-semibold">Usulan Judul Tugas Akhir</h6>
                                    <h6 class="flex">
                                        Muhammad Umar Mansyur
                                    </h6>
                                    <div class="my-auto d-flex gap-2">
                                        <button type="button" class="btn btn-success btn-sm my-auto" data-bs-target="">
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
                    Menampilkan 1 - 2 dari 2 data
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
        <div class="col-12">
            <div class="modal fade bs-example-modal-center" id="modal-submission" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content position-relative">
                        <div>
                            <i class="bx bx-help-circle widget-box-1-icon text-primary"></i>
                        </div>
                        <div class="modal-body">
                            <div class="d-flex gap-2">
                                <div>
                                    <img src="https://api.unira.ac.id/img/profil/mhs/d9674b9d198eecaa13f3f057d5390a12.jpg"
                                        alt="img-thumbnail" class="avatar-xl rounded rounded-2 border-3 border">
                                </div>
                                <div>
                                    <span class="badge bg-info font-size-10">Menunggu Konfirmasi Calon Dosen
                                        Pembimbing</span>
                                    <h5 class="my-0 fw-semibold">Muhammad Umar Mansyur</h5>
                                    <p>
                                        Rancang Bangun Aplikasi Monitoring Tugas Akhir Menggunakan Pendekatan Domain
                                        Driven Design
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi sequi nulla iste.
                                    Omnis a, quas assumenda consequuntur animi in mollitia. Suscipit accusamus dolorum
                                    voluptatibus ex laudantium optio accusantium similique quo?</p>
                            </div>
                            <div class="row justify-content-between">
                                <div class="col-auto">
                                    <div>
                                        <h6 class="fw-semibold">Reviewer:</h6>
                                        <div class="avatar-group">
                                            <a href="#" class="avatar-group-item" data-bs-toggle="tooltip"
                                                data-bs-placement="top" title="Dr. Moh. Zayyadi, M.Pd.">
                                                <img src="https://api.unira.ac.id/img/profil/dkr/5116201014_thumb.jpg?1717450257579"
                                                    class="rounded-circle avatar-lg shadow shadow-sm" alt="avatar">
                                            </a>
                                            <a href="#" class="avatar-group-item" data-bs-toggle="tooltip"
                                                data-bs-placement="top" title="HARFIN LANYA, S.Pd.,M.Pd.">
                                                <img class="rounded-circle avatar-lg shadow shadow-sm" alt="avatar"
                                                    src="https://api.unira.ac.id/img/profil/dkr/7104313441_thumb.jpg?1717450257584">
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <h6 class="fw-semibold">Calon Dosen Pembimbing: </h6>
                                    <img src="https://api.unira.ac.id/img/profil/dkr/710413344_thumb.jpg?1717450257580"
                                        class="rounded-circle avatar-lg shadow shadow-sm float-end" alt="avatar">
                                </div>  
                            </div>
                            <div class="row mt-3">
                                <div class="col-12">
                                    <h6 class="fw-semibold">Catatan Ketua Penguji: </h6>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas architecto odit
                                        fugit consectetur quibusdam, aspernatur asperiores quis eius eaque ad error
                                        sapiente saepe nulla harum dolore. Recusandae illum labore repellendus!</p>
                                </div>
                                <div class="col-12">
                                    <h6 class="fw-semibold">Catatan Ketua Program Studi: </h6>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas architecto odit
                                        fugit consectetur quibusdam, aspernatur asperiores quis eius eaque ad error
                                        sapiente saepe nulla harum dolore. Recusandae illum labore repellendus!</p>
                                </div>
                            </div>
                        </div>
                    </div><!-- /.modal-content -->
                </div><!-- /.modal-dialog -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['isClick']);


const getSubmission = () => {
    emit('isClick', true);
};
</script>

<style scoped>
.cursor-point {
    cursor: pointer;
}
</style>