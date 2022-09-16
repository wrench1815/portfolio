<template>
  <nav class="d-inline-flex">
    <ul class="pagination mb-0 bg-white">
      <li class="page-item disabled pagination-button">
        <div class="page-link">Previous</div>
      </li>

      <li class="page-item active mx-2" aria-current="page">
        <div class="page-link">
          1 <span class="visually-hidden">(current)</span>
        </div>
      </li>

      <li class="page-item pagination-button">
        <div class="page-link">Next</div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'BlogPagination',
}
</script>

<style scoped>
.pagination-button * {
  border: 1px solid transparent;
  color: var(--mdb-primary);
  cursor: pointer;
}

.pagination-button *:hover {
  border: 1px solid var(--mdb-primary);
}

.disabled.pagination-button * {
  border: 1px solid transparent;
  color: var(--mdb-primary);
  cursor: not-allowed !important;
  pointer-events: unset !important;
}
</style>
