<template>
  <div class="d-flex">
    <div class="w-75 p-3">
      <div class="border" style="min-height: calc(100vh - 2rem);">
        test
      </div>
    </div>
    <div class="w-25 p-3" style="min-width: 250px;">
      <div class="d-flex flex-column justify-content-between align-items-center" style="min-height: calc(100vh - 2rem); gap: 1rem 0;">
        <div class="p-3 border w-100 d-flex flex-column justify-content-between align-items-centers" style="flex-grow: 3; gap: 1rem 0;">
          <div class="p-3 border w-100" style="/* flex-grow: 1; */">Card Name & Price</div>
          <div class="border w-50 mx-auto" style="flex-grow: 1;">Card View</div>
        </div>

        <div class="p-3 border w-100" style="flex-grow: 1;">Buy Menu</div>

        <div class="p-3 border w-100 d-flex flex-column justify-content-between align-items-centers overflow-auto" style="flex-grow: 2;">
          <div class="p-3 border w-100"></div>
          <div class="p-3 border w-100"></div>
          <div class="p-3 border w-100"></div>
        </div>
      </div>
    </div>
  </div>
</template>
