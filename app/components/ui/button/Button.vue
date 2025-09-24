<script setup lang="ts">
export type ButtonProps = {
	variant?: 'primary' | 'secondary'
	height?: number | string
}

const {
	variant = 'primary',
	height = 50,
} = defineProps<ButtonProps>()
</script>

<template>
	<button
		class="button"
		:class="[`button--${variant}`]"
	>
		<slot />
	</button>
</template>

<style scoped lang="scss">
.button {
  padding: 0 24px;
  height: v-bind('height + "px"');
  border-radius: 6px;
  transition: box-shadow 0.3s ease 0s;
  box-shadow: 0 4px 20px rgba(115, 115, 115, 0.1);

  &:hover, &:active {
    box-shadow: 0 4px 20px rgba(115, 115, 115, 0.3);
  }
}

.button--primary {
  background-color: var(--main-white);
  color: var(--main-black);
}

.button--secondary {
  background-color: var(--main-black);
  color: var(--main-white);
}
</style>
