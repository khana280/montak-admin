<template>
  <Home>
    <div class="row">
      <div class="col-md-12">
        <div class="alert alert-info" role="alert">
          <i class="mdi mdi-information"></i> Anda dapat menghubungi dosen wali jika ada pertanyaan terkait pengajuan tugas akhir.
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <h5 class="text-center">Dosen Wali</h5>
            <div class="text-center">
                <img :src="`https://api.unira.ac.id/${session.getUser().dosen_wali.thumbnail}`" alt="avatar-sm" class="rounded-circle avatar-xl img-thumbnail user-profile-image material-shadow">
                <p class="mt-2 mb-0 fs-14 fw-medium">{{ session.getUser().dosen_wali.nama }}</p>
                <p class="fs-14 fw-medium mb-0">{{ session.getUser().dosen_wali.nis }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="card">
          <div class="card-body">
            <h5 class="text-center">Form Pengajuan Tugas Akhir</h5>
            <form>
              <div class="mb-3">
                <label for="title" class="form-label">
                  <sup class="text-danger">*</sup>
                  Judul Tugas Akhir
                </label>
                <input type="text" id="title" class="form-control" placeholder="Judul Tugas Akhir" v-model="title" />
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">
                  <sup class="text-danger">*</sup>
                  Deskripsi Tugas Akhir
                </label>
                <textarea id="description" class="form-control" placeholder="Deskripsi Tugas Akhir" rows="10" v-model="description"></textarea>
              </div>
              <div class="mb-3">
                <label for="file" class="form-label m-0">
                  <sup class="text-danger">*</sup>
                  Dokumen Pendukung(Min. 3 File Jurnal dan 1 File Review)
                </label>
                <span class="text-muted m-0">
                  <i class="mdi mdi-information"></i> PDF
                </span>
                <input type="file" id="file" class="form-control" multiple @change="getFile" />
              </div>
              <div class="mb-3 d-flex justify-content-between">
                <button type="button" class="btn btn-light">
                  <i class="mdi mdi-refresh"></i> Reset
                </button>
                <button type="button" class="btn btn-primary" @click="trySubmit" :disabled="!meta.valid">
                  <i class="bx bx-send"></i> Ajukan Usulan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Home>
</template>

<script setup lang="ts">
import { useField, useForm } from "vee-validate";
import { useSession } from "../../stores/session";
import Home from "./Home.vue";
import * as yup from 'yup';
import Notify from "../../helpers/notify";
import useToken from "../../composables/token";

const session = useSession();
const { getToken } = useToken();

const schema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  file: yup.mixed().required()
});


const { meta } = useForm({
  validationSchema: schema,
  initialValues: {
    title: "",
    description: "",
    file: []
  }
});

const { value: title } = useField<string>('title')
const { value: description } = useField<string>('description')
const { value: file } = useField<any>('file')

const getFile = (e: any) => {
  file.value = e.target.files;
}


const trySubmit = async () => {
  if(file.value.length < 4) {
    Notify.error("Upload 3 File Jurnal dan 1 File Review");
    return;
  }
  const body = {
    title: title.value,
    description: description.value,
    file: file.value
  }
  const formData = new FormData();
  formData.append('judul', body.title);
  formData.append('keterangan', body.description);
  for(let i = 0; i < body.file.length; i++) {
    formData.append('file', body.file[i]);
  }

  const response = await fetch(import.meta.env.VITE_API_GATEWAY + '/pengajuan', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${getToken().access_token}`
    },
    body: formData
  })

  const data = await response.json();
  if(response.ok) {
    Notify.success(data.message);
  } else {
    Notify.error(data.message);
  }
}
</script>
