<template>
  <Home>
    <div class="row">
      <div class="col-md-3">
        <div class="card card-animate">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div>
                  <p class="fw-medium text-muted mb-0">Mahasiswa Pendaftar</p>
                  <h2 class="mt-4 ff-secondary cfs-22 fw-semibold"><span class="counter-value" data-target="28.05">28.05</span>k</h2>
                  <p class="mb-0 text-muted text-truncate">
                    <span class="badge bg-light text-success mb-0"> 
                    <i class="ri-arrow-up-line align-middle"></i> 16.24 % 
                    </span> Registrasi Ulang.
                  </p>
              </div>
              <div>
                <div class="avatar-sm flex-shrink-0">
                  <span class="avatar-title bg-info-subtle rounded-circle fs-2">
                    <i class="ri-group-line text-info"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card card-animate">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div>
                  <p class="fw-medium text-muted mb-0">Proposal Disetujui</p>
                  <h2 class="mt-4 ff-secondary cfs-22 fw-semibold"><span class="counter-value" data-target="28.05">28.05</span>k</h2>
                  <p class="mb-0 text-muted text-truncate">
                    <span class="badge bg-light text-success mb-0"> 
                    <i class="ri-arrow-up-line align-middle"></i> 16.24 % 
                    </span> Total Pendaftar.
                  </p>
              </div>
              <div>
                <div class="avatar-sm flex-shrink-0">
                  <span class="avatar-title bg-info-subtle rounded-circle fs-2">
                    <i class=" ri-checkbox-line text-info"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card card-animate">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div>
                  <p class="fw-medium text-muted mb-0">
                    Peserta Yudisium
                  </p>
                  <h2 class="mt-4 ff-secondary cfs-22 fw-semibold"><span class="counter-value" data-target="28.05">28.05</span>k</h2>
                  <p class="mb-0 text-muted text-truncate">
                    <span class="badge bg-light text-success mb-0"> 
                    <i class="ri-arrow-up-line align-middle"></i> 16.24 % 
                    </span> Total Pendaftar.
                  </p>
              </div>
              <div>
                <div class="avatar-sm flex-shrink-0">
                  <span class="avatar-title bg-info-subtle rounded-circle fs-2">
                    <i class="ri-open-arm-line text-info"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card card-animate">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div>
                  <p class="fw-medium text-muted mb-0">Total Pembayaran</p>
                  <h2 class="mt-4 ff-secondary cfs-22 fw-semibold"><span class="counter-value" data-target="28.05">28.05</span>k</h2>
                  <p class="mb-0 text-muted text-truncate">
                    <span class="badge bg-light text-success mb-0"> 
                    <i class="ri-arrow-up-line align-middle"></i> 16.24 % 
                    </span> Total Pendaftar.
                  </p>
              </div>
              <div>
                <div class="avatar-sm flex-shrink-0">
                  <span class="avatar-title bg-info-subtle rounded-circle fs-2">
                    <i class=" ri-cash-line text-info"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="card-header">
              <h4 class="card-title">
                Riwayat Pendaftaran Mahasiswa
              </h4>
            </div>
            <div class="align-items-center justify-content-between row text-center text-sm-start">
              <div class="table-responsive mb-2">
                <table class="table table-centered table-hover align-middle table-nowrap mb-0">
                  <tbody>
                    <tr v-for="item in 5">
                      <td>
                        <div class="d-flex align-items-center gap-2">
                          <div class="flex-shrink-0">
                            <img src="https://api.unira.ac.id/img/profil/mhs/8e35dc4c9c4b61b341800d1ef1f10eba.jpg" alt="header-thumbnail" class="rounded-circle avatar-xs">
                          </div>
                          <div class="flex-grow-1">
                            <h6 class="mb-1">Khana Zulfana Imam</h6>
                            <p class="mb-0 text-muted fs-12">2021520001</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="mb-0">Sistem Informasi</p>
                        <p>29 Juli 2024</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Pagination/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Home>
</template>
<script setup lang="ts">
import Home from './Home.vue';
import Pagination from '../../components/Pagination.vue';
</script>