import { ref } from "vue";

const roles = ref<Array<{ value: string, label: string }>>([]);

const setTheRole = (role: string) => {
  if(role === 'Mahasiswa') {
    roles.value.push({
      value: '/mahasiswa',
      label: 'Mahasiswa'
    });
  }

   if(role === 'Dosen') {
    roles.value.push({
      value: '/dosen',
      label: 'Dosen'
    });
  }

   if(role === 'Administrator Tenaga Kependidikan') {
    roles.value.push({
      value: '/admin-tenaga-kependidikan',
      label: 'Administrator Tenaga Kependidikan'
    });
  }

  if(role === 'Ketua Prodi') {
    roles.value.push({
      value: '/ketua-prodi',
      label: 'Ketua Prodi'
    });
  }

  if(role === 'Administrator Keuangan') {
    roles.value.push({
      value: '/admin-keuangan',
      label: 'Administrator Keuangan'
    });
  }
}

export {
  roles,
  setTheRole
}
