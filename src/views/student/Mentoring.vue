<template>
 <Home>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <ul class="list-group list-group-flush border-dashed">
            <li class="list-group-item ps-0" v-for="i in 3">
                <div class="row align-items-center g-3">
                    <div class="col-auto">
                        <div class="avatar-sm p-1 py-2 h-auto bg-light rounded-3 material-shadow">
                            <div class="text-center">
                                <h5 class="mb-0">2{{ i }}</h5>
                                <div class="text-muted">Senin</div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <h5 class="text-muted mt-0 mb-1 fs-13">Proposal</h5>
                        <a href="#" class="text-reset fs-14 mb-0">Perumusan Bab {{ i }}</a>
                    </div>
                    <div class="col-sm-auto">
                      <div>
                        <span class="badge bg-success-subtle text-success fs-12">VALID</span>
                      </div>
                    </div>
                    <div class="col-sm-auto d-flex gap-2">
                      <button type="button" class="btn btn-sm btn-info">
                        <i class="bx bx-search-alt align-middle"></i>
                      </button>
                      <button type="button" class="btn btn-sm btn-warning" disabled>
                        <i class="bx bx-pencil align-middle"></i>
                      </button>
                      <button type="button" class="btn btn-sm btn-danger" disabled>
                        <i class="bx bx-trash align-middle"></i>
                      </button>
                    </div>
                </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
 </Home>
</template>

<script setup lang="ts">
import Home from './Home.vue'
</script>