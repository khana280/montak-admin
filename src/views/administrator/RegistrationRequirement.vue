<template>
  <Home>
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">Daftar Mahasiswa</h5>
      </div>
      <div class="card-body">
        <div class="row mb-3">
          <div class="col-md-6 mb-3 mb-sm-0">
            <div class="row">
              <div class="col-md-auto col-6">
                <select class="form-select">
                  <option selected>Limit</option>
                  <option value="1">10</option>
                  <option value="2">25</option>
                  <option value="3">50</option>
                </select>
              </div>
              <div class="col-md-auto col-6">
                <select class="form-select">
                  <option selected>Filter</option>
                  <option value="1">Lunas</option>
                  <option value="2">Tidak Lunas</option>
                </select>
              </div>
              <div class="col-md-auto col-12 mt-3 mt-sm-0">
                <input type="text" class="form-control" placeholder="Cari...">
              </div>
            </div>
          </div>
        </div>
        <div class="table-responsive">
          
          <table class="table table-centered table-nowrap table-hover">
            <thead>
              <tr>
                <th colspan="4">
                  Daftar Mahasiswa
                </th>
                
              </tr>
            </thead>
            <tbody v-for="item in 5" class="align-middle">
              <tr style="cursor: pointer;">
                <td>
                  <div class="d-flex gap-2 align-items-center">
                    <div class="flex-shrink-0">
                     <img src="https://api.unira.ac.id/img/profil/mhs/8e35dc4c9c4b61b341800d1ef1f10eba.jpg" alt="img-mhs" class="avatar-xs rounded-circle">
                    </div>
                    <div>
                      <h6 class="mb-0">
                        Khana Zulfana Imam
                      </h6>
                      <p class="mb-0 text-muted fs-12">
                        2021520001
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <h6 class="m-0">Sistem Informasi</h6>
                  <p class="m-0 text-muted">
                    Penerapan Teknologi Informasi di Perusahaan
                  </p>
                </td>
                <td>
                  Sidang Proposal
                </td>
                <td>
                  <button class="btn btn-sm btn-primary">
                    <i class="ri-filter-line"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Pagination/>
      </div>
    </div>
  </Home>
</template>

<script setup lang="ts">
  import Pagination from '../../components/Pagination.vue';
import Home from './Home.vue';
</script>