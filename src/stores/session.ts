import { defineStore } from "pinia";

export const useSession = defineStore({
  id: 'session',
  state: () => ({
    id: '',
    roles: [],
    prodi: '',
    nama: '',
    thumbnail: '',
    peminatan: '',
    dosen_wali: {
      nis: '',
      nama: '',
      thumbnail: '',
    } || {},
    roleActive: ''
  }),
  actions: {
    setUser(data: any) {
      this.id = data.id || '';
      this.roles = data.roles || [];
      this.prodi = data.prodi || '';
      this.nama = data.nama || '';
      this.thumbnail = data.thumbnail || '';
      this.peminatan = data.peminatan || '';
      this.dosen_wali = data.dosen_wali || {};
    },
    setRoleActive(role: string) {
      this.roleActive = role;
    },
    getUser() {
      return {
        id: this.id,
        roles: this.roles,
        prodi: this.prodi,
        nama: this.nama,
        thumbnail: this.thumbnail,
        peminatan: this.peminatan,
        dosen_wali: this.dosen_wali
      }
    }
  }
}) 