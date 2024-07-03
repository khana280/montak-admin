<template>
  <Home>
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div>
                <h5 class="fw-bold">Total Dibayar</h5>
                <div class="ms-auto mt-3">
                  <h5 class="text-info">
                    Rp. {{ new Intl.NumberFormat("id-ID").format(data.reduce((acc: any, item: any) => item.status === true ? acc + item.biaya.nominal : acc, 0)) }}
                  </h5>
                </div>
              </div>
              <div class="flex-shrink-0 ms-3">
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
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div>
                <h5 class="fw-bold">Jumlah Item</h5>
                <div class="ms-auto mt-3">
                  <h5 class="text-info">2</h5>
                </div>
              </div>
              <div class="flex-shrink-0 ms-3">
                <div class="avatar-sm flex-shrink-0">
                  <span class="avatar-title bg-success-subtle rounded fs-3">
                    <i class="bx bx-list-check text-success"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="alert alert-info">
          <p class="mb-0">
            <i class="bx bx-info-circle me-2"></i>
            <span class="fw-bold">Perhatian!</span> Segera lakukan pembayaran
            sebelum tanggal 30 Agustus 2024.
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="table-responsive table-card">
              <table class="table table-borderless">
                <thead class="bg-primary text-white">
                  <tr>
                    <th class="text-uppercase fs-16">Tagihan</th>
                    <th></th>
                    <th class="text-end text-info fs-16"></th>
                    <th class="text-end text-white fs-16">
                      Rp. {{ new Intl.NumberFormat("id-ID").format(data.reduce((acc: any, item: any) => acc + item.biaya.nominal, 0)) }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in data" :key="index">
                    <td :rowspan="data.length" class="align-middle fw-bold" v-if="index === 0">
                      Skripsi/Tugas Akhir
                    </td>
                    <td class="text-start ps-0">{{ item.biaya.keterangan }}</td>
                    <td class="text-end">
                      Rp. {{ new Intl.NumberFormat("id-ID").format(item.biaya.nominal)}}
                    </td>
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
  import { onMounted, ref } from "vue";
  import useApi from "../../composables/api";
  import Home from "./Home.vue";
  import { useSession } from "../../stores/session";
  import useCategory from "../../composables/category";

  const { graphqlQuery } = useApi();
  const session = useSession();
  const { getCategory } = useCategory();

  const data = ref<any>([]);

  const loadBillings = async () => {
    const query = `
     query getMyBillings ($nim: String) {
      mahasiswa(nim: $nim) {
        item_pembayaran_skripsi {
          biaya {
            id
            keterangan
            nominal
          }
          status
        }
      }
    }`;
    const response = await graphqlQuery(query, { nim: session.id });
    data.value = response.data.mahasiswa.item_pembayaran_skripsi;
  };



  onMounted(() => {
    if(getCategory() == 'ta') {
      loadBillings();
    }
  });
</script>
