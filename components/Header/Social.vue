<template>
  <div>
    <h3 class="text-center text-md-start">Connect on</h3>
    <div
      class="d-flex flex-wrap justify-content-center justify-content-md-start gap-md-3"
    >
      <a
        class="fs-4 social-link ff-nanum-pen-script"
        href="https://github.com/wrench1815"
        target="_blank"
        ><i class="ri-github-fill"></i> @wrench1815</a
      >
      <a
        class="fs-4 social-link ff-nanum-pen-script"
        href="https://twitter.com/wrench1815"
        target="_blank"
        ><i class="ri-twitter-fill"></i> @wrench1815</a
      >
      <a
        class="fs-4 social-link ff-nanum-pen-script"
        href="https://discordapp.com/users/457360898122711041"
        target="_blank"
        ><i class="ri-discord-fill"></i> @wrench1815</a
      >
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.social-link {
  color: #4f4f4f;
}

.social-link:after {
  content: '';
  display: block;
  width: 0;
  height: 0.06rem;
  background-color: var(--mdb-primary);
  transition: width 0.3s ease-in-out;
}

.social-link:hover {
  color: var(--mdb-primary);
}

.social-link:hover::after {
  width: 100%;
  background-color: var(--mdb-primary);
}
</style>
