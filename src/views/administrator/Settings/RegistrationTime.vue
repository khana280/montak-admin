<template>
  <Home>
    <div class="card">
      <div
        class="card-header d-flex justify-content-between align-items-center"
      >
        <h5 class="card-title">Batas Pendaftaran(Heregistrasi)</h5>
        <button
          type="button"
          class="btn btn-success create-btn"
          data-bs-toggle="modal"
          data-bs-target="#api-key-modal"
        >
          <i class="ri-add-line align-bottom me-1"></i> Tambah
        </button>
      </div>
      <div class="card-body">
        <div class="row mb-3 justify-content-between">
          <div class="col-md-auto col-12">
            <select class="form-select">
              <option selected>Limit</option>
              <option value="1">10</option>
              <option value="2">25</option>
              <option value="3">50</option>
            </select>
          </div>
          <div class="col-md-auto col-12 mt-3 mt-sm-0 ms-auto">
            <input type="text" class="form-control" placeholder="Cari..." />
          </div>
        </div>
        <div class="table-responsive">
          <table class="table table-bordered table-hover table-striped">
            <thead class="table-light">
              <tr>
                <th class="text-center">No</th>
                <th>Keterangan</th>
                <th>Tanggal Pendaftaran</th>
                <th>Batas Pendaftaran</th>
                <th class="text-center">Aksi</th>
              </tr>
            </thead>
            <tbody class="align-middle">
              <tr v-for="item in 5" style="cursor: pointer">
                <td class="text-center">{{ item }}</td>
                <td>Ujian Masuk</td>
                <td>01/01/2022</td>
                <td>01/01/2022</td>
                <td class="text-center">
                  <div class="d-flex justify-content-center gap-2">
                    <button
                      type="button"
                      class="btn btn-sm btn-info"
                      data-bs-toggle="modal"
                      data-bs-target="#api-key-modal"
                    >
                      <i class="ri-pencil-line"></i>
                    </button>
                    <button type="button" class="btn btn-sm btn-danger">
                      <i class="ri-delete-bin-line"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Pagination />
      </div>
    </div>
    <div class="card">
      <div
        class="card-header d-flex justify-content-between align-items-center"
      >
        <h5 class="card-title">Pendaftaran Ujian</h5>
        <button
          type="button"
          class="btn btn-success create-btn"
          data-bs-toggle="modal"
          data-bs-target="#api-key-modal"
        >
          <i class="ri-add-line align-bottom me-1"></i> Tambah
        </button>
      </div>
      <div class="card-body">
        <div class="row mb-3 justify-content-between">
          <div class="col-md-auto col-12">
            <select class="form-select">
              <option selected>Limit</option>
              <option value="1">10</option>
              <option value="2">25</option>
              <option value="3">50</option>
            </select>
          </div>
          <div class="col-md-auto col-12 mt-3 mt-sm-0 ms-auto">
            <input type="text" class="form-control" placeholder="Cari..." />
          </div>
        </div>
        <div class="table-responsive">
          <table class="table table-bordered table-hover table-striped">
            <thead class="table-light">
              <tr>
                <th class="text-center">No</th>
                <th>Keterangan</th>
                <th>Tanggal Pendaftaran</th>
                <th>Batas Pendaftaran</th>
                <th class="text-center">Aksi</th>
              </tr>
            </thead>
            <tbody class="align-middle">
              <tr v-for="item in 5" style="cursor: pointer">
                <td class="text-center">{{ item }}</td>
                <td>Ujian Masuk</td>
                <td>01/01/2022</td>
                <td>01/01/2022</td>
                <td class="text-center">
                  <div class="d-flex justify-content-center gap-2">
                    <button
                      type="button"
                      class="btn btn-sm btn-info"
                      data-bs-toggle="modal"
                      data-bs-target="#api-key-modal"
                    >
                      <i class="ri-pencil-line"></i>
                    </button>
                    <button type="button" class="btn btn-sm btn-danger">
                      <i class="ri-delete-bin-line"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Pagination />
      </div>
    </div>
  </Home>
</template>

<script setup lang="ts">
import Pagination from "../../../components/Pagination.vue";
import Home from "../Home.vue";
</script>
