<script setup lang="ts">
import Logo from '~/components/ui/logo/Logo.vue'
</script>

<template>
	<div class="app-layout">
		<header class="app-header">
			<NuxtLink to="/">
				<Logo />
			</NuxtLink>
		</header>
		<main class="app-main">
			<slot />
		</main>
		<footer class="app-footer">
			23.09.2025
		</footer>
	</div>
</template>

<style lang="scss">
:root {
  --header-color: #eae9e9;
}

.app-layout {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

.app-header {
  text-align: center;
  padding: 5px 16px;
  background-color: var(--header-color);
  display: flex;
  justify-content: center;
}

.app-main {
  max-width: 1240px;
  margin: 0 auto;
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.app-footer {
  text-align: center;
  padding: 5px 16px;
  background-color: lightcyan;
}
</style>
