<script setup>
  const event = useRequestEvent()
  const router = useRouter()
  const route = useRoute()
  const page = Array.isArray(route.params.slug)
    ? route.params.slug.join("/")
    : route.params.slug

  if (event) {
    setResponseStatus(event, 404)
  }

  definePageMeta({
    layout: "default",
  })
</script>

<template>
  <div class="not-found bg-neutral-100">
    <h2 class="text-danger">404 - 找不到頁面</h2>
    <p class="text-white">您所尋找的頁面不存在</p>
    <NuxtLink type="button" class="btn btn-primary-100" to="/">
      返回首頁
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
  .not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .not-found h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .not-found p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
</style>
