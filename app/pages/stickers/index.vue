<script setup lang="ts">
import ConsultingSticker from '~/components/ConsultingSticker/ConsultingSticker.vue'
</script>

<template>
	<div class="page">
		<h1 class="h1">
			Страница стикера
		</h1>
		<div class="scroll-block" />
		<ConsultingSticker />
	</div>
</template>

<style scoped lang="scss">
.page{
  margin-top: 50px;
}

.scroll-block {
  min-height: 500dvh;
}
</style>
