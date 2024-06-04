<template>
  <Home>
    <div class="row justify-content-center">
      <div class="col-12">
        <ul class="nav nav-tabs nav-tabs-custom nav-justified" role="tablist">
          <li class="nav-item" role="presentation">
            <a class="nav-link active fw-bold" data-bs-toggle="tab" href="#financial-data" role="tab" aria-selected="true">
              DATA KEUANGAN
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link fw-bold" data-bs-toggle="tab" href="#paid-data" role="tab" aria-selected="false" tabindex="-1">
              DATA KEUANGAN TERBAYAR
            </a>
          </li>
        </ul>

        <!-- Tab panes -->
        <div class="tab-content p-3 text-muted">
          <div class="tab-pane active" id="financial-data" role="tabpanel">
            <div class="row">
              <div class="col-md-3">
                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <a class="nav-link mb-2 active py-3 text-center text-uppercase" id="v-pills-home-tab"
                    data-bs-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home"
                    aria-selected="true">Kerja Praktek</a>
                  <a class="nav-link mb-2 py-3 text-center text-uppercase" id="v-pills-profile-tab"
                    data-bs-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile"
                    aria-selected="false" tabindex="-1">Tugas Akhir</a>
                </div>
              </div><!-- end col -->
              <div class="col-md-9">
                <div class="tab-content text-muted mt-4 mt-md-0" id="v-pills-tabContent">
                  <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                    aria-labelledby="v-pills-home-tab">
                    <div class="table-responsive">
                      <table class="table table-bordered table-striped">
                        <thead class="align-middle">
                          <tr>
                            <th class="text-center">NO</th>
                            <th>TAHUN AKADEMIK</th>
                            <th class="text-center">KODE</th>
                            <th>NAMA PEMBAYARAN</th>
                            <th class="text-end">NOMINAL</th>
                          </tr>
                        </thead>
                        <tbody class="align-middle table-warning">
                          <tr>
                            <td class="text-center">1</td>
                            <td>2024 - GENAP</td>
                            <td class="text-center">D06</td>
                            <td>Tagihan Kerja Praktek</td>
                            <td class="text-end">Rp. 5.000.000</td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                    <div class="table-responsive">
                      <table class="table table-bordered table-striped">
                        <thead class="align-middle">
                          <tr>
                            <th class="text-center">NO</th>
                            <th>TAHUN AKADEMIK</th>
                            <th class="text-center">KODE</th>
                            <th>NAMA PEMBAYARAN</th>
                            <th class="text-end">NOMINAL</th>
                          </tr>
                        </thead>
                        <tbody class="align-middle table-warning">
                          <tr>
                            <td class="text-center">1</td>
                            <td>2024 - GENAP</td>
                            <td class="text-center">D06</td>
                            <td>Tagihan Tugas Akhir</td>
                            <td class="text-end">Rp. 5.000.000</td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div><!--  end col -->
            </div>
          </div>
          <div class="tab-pane" id="paid-data" role="tabpanel">
            <div class="row">
              <div class="col-md-3">
                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <a class="nav-link mb-2 active py-3 text-center text-uppercase" id="v-pills-home-tab"
                    data-bs-toggle="pill" href="#paid-kerja-praktek" role="tab" aria-controls="paid-kerja-praktek"
                    aria-selected="true">Kerja Praktek</a>
                  <a class="nav-link mb-2 py-3 text-center text-uppercase" id="v-pills-profile-tab"
                    data-bs-toggle="pill" href="#paid-tugas-akhir" role="tab" aria-controls="paid-tugas-akhir"
                    aria-selected="false" tabindex="-1">Tugas Akhir</a>
                </div>
              </div><!-- end col -->
              <div class="col-md-9">
                <div class="tab-content text-muted mt-4 mt-md-0" id="v-pills-tabContent">
                  <div class="tab-pane fade show active" id="paid-kerja-praktek" role="tabpanel"
                    aria-labelledby="paid-kerja-praktek-tab">
                    <div class="table-responsive">
                      <table class="table table-bordered table-striped">
                        <thead class="align-middle">
                          <tr>
                            <th class="text-center">NO</th>
                            <th>TAHUN AKADEMIK</th>
                            <th class="text-center">KODE</th>
                            <th>NAMA PEMBAYARAN</th>
                            <th class="text-end">NOMINAL</th>
                          </tr>
                        </thead>
                        <tbody class="align-middle table-warning">
                          <tr>
                            <td class="text-center">1</td>
                            <td>2024 - GENAP</td>
                            <td class="text-center">D06</td>
                            <td>Tagihan Kerja Praktek</td>
                            <td class="text-end">Rp. 5.000.000</td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="paid-tugas-akhir" role="tabpanel"
                    aria-labelledby="paid-tugas-akhir-tab">
                    <div class="table-responsive">
                      <table class="table table-bordered table-striped">
                        <thead class="align-middle">
                          <tr>
                            <th class="text-center">NO</th>
                            <th>TAHUN AKADEMIK</th>
                            <th class="text-center">KODE</th>
                            <th>NAMA PEMBAYARAN</th>
                            <th class="text-end">NOMINAL</th>
                          </tr>
                        </thead>
                        <tbody class="align-middle table-warning">
                          <tr>
                            <td class="text-center">1</td>
                            <td>2024 - GENAP</td>
                            <td class="text-center">D06</td>
                            <td>Tagihan Tugas Akhir</td>
                            <td class="text-end">Rp. 5.000.000</td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div><!--  end col -->
            </div>
          </div>
        </div>

      </div>
    </div>
    <!-- Nav tabs -->
  </Home>
</template>

<script setup lang="ts">
import Home from './Home.vue';
</script>