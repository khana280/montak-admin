<template>
  <Home>
    <div class="row mb-3">
      <div class="col-auto">
        <select name="filter" id="filter" class="form-select">
          <option value="all">Limit</option>
          <option value="pending">10</option>
          <option value="approved">15</option>
          <option value="rejected">20</option>
        </select>
      </div>
      <div class="col-auto">
        <select name="filter" id="filter" class="form-select">
          <option value="all">Semua</option>
          <option value="pending">Menunggu Persetujuan</option>
          <option value="approved">Disetujui</option>
          <option value="rejected">Ditolak</option>
        </select>
      </div>
      <div class="col-auto ms-auto">
        <RouterLink to="usulan-judul/create" type="button" class="btn btn-success">
          <i class="bx bx-plus-circle"></i>
          Tambah Usulan
        </RouterLink>
      </div>
    </div>
    <div class="row" v-for="i in 3">
      <div class="col-12">
        <div class="job-list">
          <div class="card joblist-card">
            <div class="card-body">
              <div class="d-flex mb-2 gap-2">
                <div class="avatar-sm shrink-0">
                  <div class="d-flex align-items-center justify-content-center avatar-sm p-2 bg-light rounded" style="width: 50px; height: 50px;">
                    <img src="https://api.unira.ac.id/img/profil/mhs/8e35dc4c9c4b61b341800d1ef1f10eba.jpg" alt="avatar-sm" class="rounded bg-soft-primary text-primary" style="height: auto; width: 100%;">
                  </div>
                </div>
                <div>
                  <h5 class="mt-0 mb-1 fs-14">Khana Zulfana Imam</h5>
                  <p class="text-muted">2021520001</p>
                </div>
                <div class="ms-auto">
                  <span class="badge bg-info-subtle text-info">Menunggu Persetujuan</span>
                </div>
              </div>
              <div>
                <div>
                  <h5 class="mt-0 mb-1 fs-14">Judul Tugas Akhir</h5>
                  <p class="text-muted
                  ">Pengembangan Sistem Informasi Pengelolaan Data Mahasiswa</p>
                </div>
              </div>  
              <hr>
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <span class="badge bg-primary-subtle text-primary">Sistem Informasi</span>
                </div>
                <button type="button" class="btn btn-sm btn-primary">
                  Selengkapnya...
                  <i class="bx bx-right-arrow-alt align-middle fs-16"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Pagination/>
  </Home>
</template>

<script setup lang="ts">
  import Home from './Home.vue';
  import Pagination from '../../components/Pagination.vue';
</script>