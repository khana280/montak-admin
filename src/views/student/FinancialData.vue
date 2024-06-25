<template>
  <Home>
    <div class="row">
      <div class="col-4">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div>
                <h5>Total Pembayaran</h5>
                <div class="ms-auto">
                  <h5 class="text-info">Rp. 1.500.000</h5>
                </div>
              </div>
              <div class="flex-shrink-0">
                <div class="avatar-sm flex-shrink-0">
                  <span class="avatar-title bg-primary-subtle rounded fs-3">
                    <i class="bx bx-wallet text-primary"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4"></div>
      <div class="col-4"></div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="table-responsive table-card">
              <table class="table table-borderless">
                <thead class="table-light">
                  <tr>
                    <th class="text-uppercase fs-16">Tagihan</th>
                    <th></th>
                    <th class="text-end text-info fs-16"></th>
                    <th class="text-end text-danger fs-16">Rp. 1.500.000</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="4" class="text-end fw-bold text-info fs-16">
                      Rp. 1.000.000
                    </td>
                  </tr>
                  <tr>
                    <td rowspan="2" class="align-middle fw-bold">
                      Skripsi/Tugas Akhir
                    </td>
                    <td class="text-start">Registrasi Proposal Tugas Akhir</td>
                    <td class="text-end">Rp. 500.000</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="text-start ps-2">Ujian Proposal Tugas Akhir</td>
                    <td class="text-end">Rp. 500.000</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colspan="4" class="text-end fw-bold text-info fs-16">
                      Rp. 500.000
                    </td>
                  </tr>
                  <tr>
                    <td rowspan="2" class="align-middle fw-bold">
                      Kerja Praktek
                    </td>
                    <td class="text-start">Registrasi Kerja Praktek</td>
                    <td class="text-end">Rp. 250.000</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="text-start ps-2">Ujian Kerja Praktek</td>
                    <td class="text-end">Rp. 250.000</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Home>
</template>

<script setup lang="ts">
import Home from "./Home.vue";
</script>
