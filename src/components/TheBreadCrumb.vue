<template>
  <!-- start page title -->
  <div class="row">
    <div class="col-12">
      <div class="page-title-box row d-flex align-items-center justify-content-between">
        <div class="col-md-6">
          <h4 class="mb-sm-0 font-size-18 fw-bold">{{ $route.name }}</h4>
        </div>
        <div class="col-auto">
          <ol class="breadcrumb m-0">
            <li class="breadcrumb-item"><a href="javascript: void(0);">Administrator</a></li>
            <li class="breadcrumb-item active">{{ $route.name }}</li>
          </ol>
        </div>

      </div>
    </div>
  </div>
  <!-- end page title -->
</template>