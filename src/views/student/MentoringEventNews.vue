<template>
  <div class="row justify-content-between">
    <div class="col-md-6 d-flex align-items-center">
      <BackClick title="Tugas Akhir" subTitle="Pembimbingan" @isClick="getClick" />
    </div>
    <div class="col-md-6 d-flex gap-1 justify-content-end align-items-center">
      <button type="button" class="btn btn-warning">
        <i class="bx bx-printer"></i> Cetak
      </button>
    </div>
  </div>
  <StudentInformation>
    <div class="col-auto ms-auto mb-3 d-flex gap-1">
      <button type="button" class="btn btn-primary waves-effect waves-light">
        <i class="bx bx-plus-circle"></i>
        BA Pembimbingan
      </button>
    </div>
  </StudentInformation>
  <div class="row mt-3">
    <div class="col-12">
      <div class="card">
        <div class="card-body py-3" data-simplebar style="height: 700px;">
          <div class="d-flex align-items-center" v-if="toggleShow">
            <div>
              <div class="btn-group">
                <button type="button" class="btn btn-light waves-light waves-effect"><i
                    class="bx bx-pencil"></i></button>
                <button type="button" class="btn btn-light waves-light waves-effect"><i
                    class="far fa-trash-alt"></i></button>
              </div>
            </div>
            <div class="mx-auto text-center">
              <p class="m-0">
                Anda dapat menandai semua data yang ada pada tabel dengan menekan tombol ini.
              </p>
              <a href="#" class="fw-semibold text-info">Tandai Semua</a>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table">
              <tbody>
                <tr>
                  <td class="text-center">
                    <input type="checkbox" class="form-check-input" id="check1" @click="showButton()">
                  </td>
                  <td>
                    <h6>12/12/2024</h6>
                    <h6 class="text-info font-size-12">Tugas Akhir</h6>
                  </td>
                  <td>
                    <h6>
                      Implementasi Aplikasi Monitoring Tugas Akhir dan Kerja Praktek
                    </h6>
                    <p class="text-muted m-0" v-if="!moreClick">
                      Implementasi algoritma dan struktur data pada aplikasi monitoring tugas akhir dan kerja praktek
                      terlalu dangkal, perlu dikaji ulang .. <a href="#"
                        @click="moreClick = !moreClick">Selengkapnya</a>
                    </p>
                    <div v-else>
                      <button class="btn btn-success waves-light waves-effect btn-sm mb-2">
                        <i class="bx bx-download"></i> Download
                      </button>
                      <p class="text-muted m-0">
                        Implementasi algoritma dan struktur data pada aplikasi monitoring tugas akhir dan kerja praktek
                        terlalu dangkal, perlu dikaji ulang. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quas
                        architecto odit fugit consectetur quibusdam, aspernatur asperiores quis eius eaque ad error
                        sapiente saepe nulla harum dolore. Recusandae illum labore repellendus! <br> <a href="#"
                          @click="moreClick = !moreClick">Ciutkan</a>
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-switch d-none" dir="ltr">
                      <input type="checkbox" class="form-check-input" id="customSwitch1">
                      <label class="form-check-label" for="customSwitch1"></label>
                    </div>
                  </td>
                  <td class="text-center">
                    <span class="badge bg-success font-size-12 rounded-pill">VALID</span>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                 <tr>
                  <td>
                    Jumlah Bimbingan:
                  </td>
                  <td colspan="3">
                    12
                  </td>
                  <td class="text-center">
                    <button class="btn btn-sm btn-success waves-effect waves-light">
                      <i class="bx bx-check-circle"></i> Setujui Ujian
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BackClick from '../../components/BackClick.vue';
import StudentInformation from '../../components/StudentInformation.vue';

const toggleShow = ref<boolean>(false);

const moreClick = ref<boolean>(false);

const showComment = (value: boolean) => {
  moreClick.value = value;
};

const showButton = () => {
  toggleShow.value = !toggleShow.value;
};

const emit = defineEmits(['isClick']);
const getClick = (value: boolean) => {
  emit('isClick', value);
}

</script>