<template>
  <div class="row">
    <div class="col-12">
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead class="align-middle">
            <tr>
              <th rowspan="2">Judul Tugas Akhir</th>
              <th rowspan="2">Jenis Ujian</th>
              <th colspan="2" class="text-center">Jadwal</th>
              <th colspan="2" class="text-center">Dosen</th>
              <th rowspan="2" class="text-center">Revisi</th>
            </tr>
            <tr class="text-center">
              <th>Ruangan</th>
              <th>Waktu</th>
              <th>Pembimbing</th>
              <th>Penguji</th>
            </tr>
          </thead>
          <tbody class="align-middle">
            <tr>
              <td>Implementasi Metode Domain Driven Design Berbasis Microservices</td>
              <td>Ujian Proposal</td>
              <td class="text-center">
                FT 101
              </td>
              <td>
                <p class="m-0 font-size-13">19.00 - 20.30 WIB</p>
                <p class="m-0 font-size-13">29/07/2024</p>
              </td>
              <td>Dr. Moh. Nazir Arifin, M.Kom</td>
              <td>
                <p class="font-size-12">1. Dr. Muhammad Umar Mansyur, S.T., M.T.</p>
                <p class="font-size-12">2. Dr. Muhammad Umar Mansyur, S.T., M.T.</p>
              </td>
              <td class="text-center">
                <button type="button" class="btn btn-sm btn-primary waves-effect waves-light" @click="getClick">
                  <i class="bx bx-pencil"></i> Revisi
                </button>
              </td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['isClick']);
const getClick = () => {
  emit('isClick', true);
};
</script>