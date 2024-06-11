<template>
  <Home>
    <div class="row justify-content-between">
      <div class="col-6 col-md-auto mb-3">
        <select class="form-select">
          <option selected>2324 - Genap</option>
          <option value="1">2323 - Ganjil</option>
        </select>
      </div>
     
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="card-title">Plotting Jadwal Ujian</h6>
        <p class="text-muted">
          Jika mahasiswa belum dinyatakan layak ujian, maka mahasiswa tidak akan
          muncul di menu ini. Verifikasi persyatan mahasiswa terlebih dahulu
          sebelum melakukan plotting jadwal ujian.
        </p>
        <!-- Nav tabs -->
        <ul class="nav nav-tabs nav-tabs-custom nav-success nav-justified mb-3" role="tablist">
          <li class="nav-item" role="presentation">
            <a class="nav-link active" data-bs-toggle="tab" href="#home1" role="tab" aria-selected="true">
              Plotting Terjadwal
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" data-bs-toggle="tab" href="#profile1" role="tab" aria-selected="false" tabindex="-1">
              Plotting Belum Terjadwal
            </a>
          </li>
        </ul>

        <!-- Tab panes -->
        <div class="tab-content text-muted">
          <div class="tab-pane active show" id="home1" role="tabpanel">
            <div class="table-responsive">
              <table class="table table-bordered table-hover table-striped">
                <thead class="table-light">
                  <tr>
                    <th class="text-center">No</th>
                    <th style="width: 20%;">Mahasiswa</th>
                    <th style="width: 30%;">Proposal</th>
                    <th style="width: 20%;">Dosen</th>
                    <th style="width: 20%;">Ujian</th>
                    <th class="text-center" style="width: 10%;">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-center">1</td>
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
                     <div>
                      Audit Sistem Informasi Manajemen Akademik Terpadu (SIMAK) Universitas Madura dengan Menggunakan Framework COBIT 5
                     </div>
                     
                    </td>
                    <td>
                      <div class="d-flex flex-column gap-2">
                        <div class="d-flex gap-2 align-items-center">
                          <div class="flex-shrink-0">
                          <img src="https://api.unira.ac.id/img/profil/mhs/8e35dc4c9c4b61b341800d1ef1f10eba.jpg" alt="img-mhs" class="avatar-xs rounded-circle">
                          </div>
                          <div>
                            <h6 class="mb-0">
                              Dr. Eng. Khana Zulfana Imam
                            </h6>
                            <p class="mb-0 text-muted fs-12">
                              Dosen Pembimbing
                            </p>
                          </div>
                        </div>
                        <div class="d-flex gap-2 align-items-center">
                          <div class="flex-shrink-0">
                          <img src="https://api.unira.ac.id/img/profil/mhs/8e35dc4c9c4b61b341800d1ef1f10eba.jpg" alt="img-mhs" class="avatar-xs rounded-circle">
                          </div>
                          <div>
                            <h6 class="mb-0">
                              ketua Penguji
                            </h6>
                            <p class="mb-0 text-muted fs-12">
                              Anggota Penguji
                            </p>
                          </div>
                        </div>
                        <div class="d-flex gap-2 align-items-center">
                          <div class="flex-shrink-0">
                          <img src="https://api.unira.ac.id/img/profil/mhs/8e35dc4c9c4b61b341800d1ef1f10eba.jpg" alt="img-mhs" class="avatar-xs rounded-circle">
                          </div>
                          <div>
                            <h6 class="mb-0">
                              Dr. Eng. Khana Zulfana Imam
                            </h6>
                            <p class="mb-0 text-muted fs-12">
                              Anggota Penguji
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <h6>FT 3</h6>
                        <h6>
                          Senin, 12 Juli 2021
                        </h6>
                        <h6>
                          08.00 - 10.00
                        </h6>
                        <p>
                          Sidang Proposal
                        </p>
                      </div>
                    </td>
                    <td class="text-center">
                      <button class="btn btn-sm btn-primary">
                        <i class="ri-pencil-line"></i>
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
              <table class="table table-bordered table-hover table-striped">
                <thead class="table-light">
                  <tr>
                    <th class="text-center">No</th>
                    <th style="width: 20%;">Mahasiswa</th>
                    <th style="width: 20%;">Peminatan</th>
                    <th style="width: 30%;">Proposal</th>
                    <th style="width: 20%;">Dosen Pembimbing</th>
                    <th class="text-center" style="width: 10%;">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-center">1</td>
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
                      <span class="badge bg-success py-2 fs-12">Sistem Informasi</span>
                    </td>
                    <td>
                     <div>
                      Audit Sistem Informasi Manajemen Akademik Terpadu (SIMAK) Universitas Madura dengan Menggunakan Framework COBIT 5
                     </div>
                     
                    </td>
                    <td>
                      <div class="d-flex flex-column gap-2">
                        <div class="d-flex gap-2 align-items-center">
                          <div class="flex-shrink-0">
                          <img src="https://api.unira.ac.id/img/profil/mhs/8e35dc4c9c4b61b341800d1ef1f10eba.jpg" alt="img-mhs" class="avatar-xs rounded-circle">
                          </div>
                          <div>
                            <h6 class="mb-0">
                              Dr. Eng. Khana Zulfana Imam
                            </h6>
                            <p class="mb-0 text-muted fs-12">
                              Dosen Pembimbing
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">
                      <button class="btn btn-sm btn-primary">
                        <i class="bx bx-calendar"></i> Plotting Jadwal
                      </button>
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
  </Home>
</template>

<script setup lang="ts">
import Pagination from "../../components/Pagination.vue";
import Home from "./Home.vue";
</script>
