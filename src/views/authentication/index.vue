<template>
  <div class="d-flex justify-content-center align-items-center h-100 w-100 flex-column">
    <div class="card border-none rounded-4 w-sm-30">
      <div class="card-body">
        <div class="p-3">
          <div class="bg-light d-inline-block p-1 rounded-5s">
            <div class="bg-blue p-2 rounded-5s d-inline-block">
              <h2 class="mb-0"><i class="bx bx-user-circle text-white align-middle icon-shadow"></i></h2>
            </div>
          </div>
          <div class="py-2">
            <h3 class="fw-bold">Welcome Back 👋</h3>
            <span class="text-muted fs-14">
              Let's get you back in the MONTAK system.
            </span>
          </div>
        </div>
        <div class="bg-grey d-flex flex-column gap-3 p-3 rounded-5s">
          <div>
            <label for="username" class="form-label fw-bold fs-14">NPM / NIS</label>
            <input type="text" id="username" class="form-control form-control-lg p-2" placeholder="NPM / NIS " v-model="username"/>
          </div>
          <div>
            <label for="password" class="form-label fw-bold fs-14">PASSWORD</label>
            <div class="input-group mb-3">
              <input :type="typeToggle" id="password" class="form-control rounded-start form-control-lg rounded-0 p-2" placeholder="PASSWORD" v-model="password"/>
              <button class="btn bg-white text-muted" type="button" @click="toggleClick">
                <i class="fs-20 align-middle rounded-end" :class="iconToggle"></i>
              </button>
            </div>
            <a href="#" class="text-blue fw-semibold fs-14">Forgot Password?</a>
          </div>
          <div class="d-grid mb-2">
            <button type="button" class="btn bg-blue btn-lg rounded-5s text-white icon-shadow d-flex justify-content-between" :disabled="!meta.valid" @click="tryLogin" id="btn-login">
              <i class="bx bx-log-in fs-20 align-middle"></i>
              <span>LOGIN</span>
              <div></div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <span class="text-muted fs-14">Don't have an account?</span>
      <a href="https://pmb.unira.ac.id/" class="text-blue fw-semibold fs-14">
        Register Immediately 🚀
      </a>
    </div>
  </div>

</template>

<script lang="ts">
</script>

<script setup lang="ts">
import { useField, useForm } from 'vee-validate';
import { onMounted, ref } from 'vue'
import * as yup from 'yup';
import Notify from '../../helpers/notify';
import useToken from '../../composables/token';
import router from '../../router';

const { setToken } = useToken();

onMounted(() => {
  document.title = 'Login | MONTAK'
  document.body.style.backgroundColor = '#F6FAFF '
});



const iconToggle = ref('bx bx-show')
const typeToggle = ref('password')

const toggleClick = () => {
  iconToggle.value = iconToggle.value === 'bx bx-show' ? 'bx bx-hide' : 'bx bx-show'
  typeToggle.value = typeToggle.value === 'password' ? 'text' : 'password'
}

const schema = yup.object().shape({
  username: yup.string().min(5).required(),
  password: yup.string().min(4).required()
})

const { meta } = useForm({
  validationSchema: schema,
  initialValues: {
    username: '',
    password: ''
  }
})

const { value: username } = useField<string>('username')
const { value: password } = useField<string>('password');

const tryLogin = async () => {
  try {
    document.getElementById('btn-login')!.innerHTML = '<div></div><i class="bx bx-loader bx-spin"></i><div></div>'

    const response = await fetch(import.meta.env.VITE_API_GATEWAY + '/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value
      })
    });

    document.getElementById('btn-login')!.innerHTML = '<i class="bx bx-log-in fs-20 align-middle"></i> <span>LOGIN</span> <div></div>'
    const data = await response.json();

    if(data.status) {
      setToken(data.data)
      router.push('/')
    } else {
      throw new Error(data.message)
    }

  } catch (error:any) {
    document.getElementById('btn-login')!.innerHTML = '<i class="bx bx-log-in fs-20 align-middle"></i> <span>LOGIN</span> <div></div>'
    Notify.error(error.message)
  }
}

</script>

<style scoped>
@media screen and (min-width: 992px){
  .w-sm-30 {
    width: 30% !important;
  }
}
@media screen and (max-width: 992px){
  .w-sm-30 {
    width: 95% !important;
  }
}
.h-100 {
  height: 100vh !important;
}
.w-100 {
  width: 100vw !important;
}
.bg-blue {
  background-color: rgb(28 100 242 / 1) !important;
}
.text-blue {
  color: rgb(13, 94, 255) !important;
}
.rounded-5s {
  border-radius: 0.50rem !important;
}
.bg-grey {
  background-color: #f3f3f9c4 !important;
}
.z-100 {
  z-index: 100000000 !important;
}
input {
  border: none !important;
  background-color: white !important;
}
.icon-shadow {
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.8);
}
</style>
