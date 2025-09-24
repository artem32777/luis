<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({ error: Object as () => NuxtError })
</script>

<template>
	<div class="error-page">
		<main class="error-text">
			<h1>{{ error?.statusCode }}</h1>
			<div>{{ error?.message }}</div>
			<NuxtLink to="/">
				Go back home
			</NuxtLink>
		</main>
	</div>
</template>

<style scoped lang="scss">
.error-page {
  display: flex;
  align-items: center;
  height: 100dvh;
  justify-content: center;
  padding: 20px;
}

.error-text {
  text-align: center;
  font-size: 30px;
  display: grid;
  gap: 10px;
}
</style>
