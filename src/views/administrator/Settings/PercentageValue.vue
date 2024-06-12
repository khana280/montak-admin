<template>
  <Home>
    <div class="row justify-content-center">
      <div class="col-md-11">
        <div class="card">
          <div class="card-body">
            <h6 class="card-title">Persentase Nilai</h6>
            <p class="text-muted">
              Data berikut otomatis akan ditambahkan setelah data jenis ujian diinputkan. Pastikan data jenis ujian sudah diinputkan sebelum menginputkan data persentase nilai.
            </p>
            <!-- Nav tabs -->
            <ul class="nav nav-tabs nav-tabs-custom nav-success nav-justified mb-3" role="tablist">
              <li class="nav-item" role="presentation">
                <a class="nav-link active" data-bs-toggle="tab" href="#home1" role="tab" aria-selected="true">
                  Persentase Nilai Ujian
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link" data-bs-toggle="tab" href="#profile1" role="tab" aria-selected="false" tabindex="-1">
                  Persentase Nilai Tugas
                </a>
              </li>
            </ul>
    
            <!-- Tab panes -->
            <div class="tab-content text-muted">
              <div class="tab-pane active show" id="home1" role="tabpanel">
                <div class="row justify-content-between">
                  <div class="col-6 col-md-auto mb-3">
                    <select class="form-select">
                      <option selected>Limit</option>  
                      <option value="1">10</option>
                      <option value="2">25</option>
                      <option value="3">50</option>
                    </select>
                  </div>
                  <div class="col-6 col-md-auto mb-3 ms-auto">
                    <input type="text" class="form-control" placeholder="Cari...">
                  </div>
                </div>
                <div class="table-responsive">
                  <table class="table table-bordered table-hover table-striped">
                    <thead class="table-light">
                      <tr>
                        <th class="text-center" style="width: 50px;">No</th>
                        <th style="width: 50%;">Jenis Ujian</th>
                        <th class="text-center">Persentase(%)</th>
                        <th class="text-center" style="width: 20%;">Aksi</th>
                      </tr>
                    </thead>
                    <tbody class="align-middle">
                      <tr>
                        <td class="text-center">1</td>
                        <td>
                          Sidang Proposal
                        </td>
                        <td>
                          <div class="flex w-40">
                            <label for="value" class="d-none">Nilai</label>
                            <input type="text" name="value" class="form-control text-center" placeholder="1 - 100" minlength="0" maxlength="3" required>
                          </div>
                        </td>
                        <td class="text-center">
                          <button class="btn btn-primary btn-label">
                            <i class="bx bx-pencil  label-icon
                            "></i> Persentase Kriteria
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <Pagination />
              </div>
              <div class="tab-pane" id="profile1" role="tabpanel">
                <div class="row">
                  <div class="col-md-auto col-6 mb-3">
                    <select class="form-select">
                      <option selected>Limit</option>
                      <option value="1">10</option>
                      <option value="2">25</option>
                      <option value="3">50</option>
                    </select>
                  </div>
                  <div class="col-md-auto col-6 mb-3">
                    <select class="form-select">
                      <option selected>Filter</option>
                      <option value="1">Sistem Informasi</option>
                      <option value="2">Sistem Cerdas</option>
                    </select>
                  </div>
                  <div class="col-md-auto col-12 mb-3 ms-auto">
                    <input type="text" class="form-control" placeholder="Cari...">
                  </div>
                </div>
                <div class="table-responsive">
                  <table class="table table-bordered table-hover table-striped text-dark">
                    <thead class="table-light">
                      <tr>
                        <th class="text-center" style="width: 50px;">No</th>
                        <th style="width: 50%;">Status Penguji</th>
                        <th class="text-center">Persentase(%)</th>
                      </tr>
                    </thead>
                    <tbody class="align-middle">
                      <tr>
                        <td class="text-center">1</td>
                        <td class="text-dark">
                          Ketua Penguji
                        </td>
                        <td>
                          <div class="flex w-40">
                            <label for="value" class="d-none">Nilai</label>
                            <input type="text" name="value" class="form-control text-center" placeholder="1 - 100" minlength="0" maxlength="3" required>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <Pagination />
              </div>
            </div>
          </div>
          <!-- end card-body -->
        </div>
      </div>
    </div>
  </Home>
</template>

<script setup lang="ts">
import Pagination from "../../../components/Pagination.vue";
import Home from "../Home.vue";
</script>
