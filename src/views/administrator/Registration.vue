<template>
  <Home>
    <div class="card">
      <div class="card-header">
        <h4 class="card-title d-flex justify-content-between align-items-center">
          <h5 class="card-title flex-grow-1 mb-0">Daftar Pembayaran</h5>
          <div class="d-flex gap-1 flex-wrap">
            <button type="button" class="btn btn-success create-btn" data-bs-toggle="modal" data-bs-target="#api-key-modal"><i class="ri-add-line align-bottom me-1"></i> Tambah</button>
          </div>
        </h4>
      </div>
      <div class="card-body">
        <div class="row mb-3">
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
        <div class="table-responsive table-card my-3">     
          <table class="table align-middle table-nowrap mb-0">
            <thead class="table-light">
              <tr>
                <th>Mahasiswa</th>
                <th>Tahun Akademik</th>
                <th>Nominal</th>
                <th>Status Pembayaran</th>
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
                <td>2021/2022</td>
                <td>Rp. 1.000.000</td>
                <td>
                  <span class="badge bg-success">Lunas</span>
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