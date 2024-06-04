<template>
  <Home>
    <template v-if="!isClick">
      <Schedule @isClick="getClick" />
    </template>
    <template v-else>
      <BackClick @isClick="getClick" title="Informatika" subTitle="Jadwal Ujian" />
      <StudentInformation />
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Status</th>
                  <th>Penguji</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Ketua Penguji</td>
                  <td>Daniel Siahaan</td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>Anggota Penguji</td>
                  <td>Marzuki Alie</td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>Pembimbing</td>
                  <td>Moh. Nazir Arifin</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-md-6">
          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Jenis Ujian</th>
                  <th>Tanggal Ujian</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Proposal</td>
                  <td>29/07/2024</td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>Seminar Akhir</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <h6 class="fw-bold">Revisi Ketua Penguji:</h6>
          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Halaman</th>
                  <th>Perbaikan</th>
                  <th>Status Validasi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>1-10</td>
                  <td>Perbaikan Kesalahan Penulisan</td>
                  <td>
                    <span class="badge bg-success rounded-pill font-size-11">Tervalidasi</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <h6 class="fw-bold">Revisi Anggota Penguji:</h6>
          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Halaman</th>
                  <th>Perbaikan</th>
                  <th>Status Validasi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>1-10</td>
                  <td>Perbaikan Kesalahan Penulisan</td>
                  <td>
                    <span class="badge bg-success rounded-pill font-size-11">Tervalidasi</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <h6 class="fw-bold">Revisi Pembimbing:</h6>
          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Halaman</th>
                  <th>Perbaikan</th>
                  <th>Status Validasi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>1-10</td>
                  <td>Perbaikan Kesalahan Penulisan</td>
                  <td>
                    <span class="badge bg-success rounded-pill font-size-11">Tervalidasi</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </template>
  </Home>
</template>

<script setup lang="ts">
import Home from './Home.vue';
import { ref } from 'vue';
import Schedule from '../../components/Schedule.vue';
import StudentInformation from '../../components/StudentInformation.vue';
import BackClick from '../../components/BackClick.vue';

const isClick = ref<boolean>(false);

const getClick = (value: boolean) => {
  isClick.value = value;
};

</script>