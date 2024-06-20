<template>
  <Home>
    <div class="row justify-content-between">
      <div class="col-6 col-md-auto mb-3">
        <select class="form-select">
          <option selected>2324 - Genap</option>
          <option value="1">2323 - Ganjil</option>
        </select>
      </div>
      <div class="col-6 col-md-auto mb-3">
        <div class="search-box ms-2">
          <input type="text" class="form-control" placeholder="Cari...">
          <i class="ri-search-line search-icon"></i>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="alert alert-danger text-danger">
              Harap segera menyetorkan proposal anda h-1 sebelum jadwal ujian. Datang <b>30 menit</b> sebelum jadwal ujian serta ajak minimal <b>10 mahasiswa</b> adek tingkat untuk mengikuti sidang proposal anda!
            </div>
            <div class="table-responsive">
              <table class="table table-bordered table-hover table-striped">
                <thead class="table-light">
                  <tr>
                    <th class="text-center">No</th>
                    <th style="width: 20%;">Mahasiswa</th>
                    <th style="width: 30%;">Proposal</th>
                    <th style="width: 20%;">Dosen</th>
                    <th style="width: 20%;">Ujian</th>
                    <th class="text-center" style="width: 10%;">#</th>
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
                    <td class="text-center align-middle">
                      <button class="btn btn-sm btn-primary btn-label">
                        <i class="ri-pencil-line label-icon"></i> Revisi
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
    </div>
  </Home>
</template>

<script setup lang="ts">
import Pagination from "../../components/Pagination.vue";
import Home from "./Home.vue";
</script>
