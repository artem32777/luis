<script setup lang="ts">
export type ImageProps = {
	src: string
	alt?: string
	width?: number | string
	height?: number | string
	loading?: 'eager' | 'lazy'
	fetchPriority?: 'high' | 'low' | 'auto'
	sourceList?: {
		srcset: string
		type?: string
		media?: string
	}[]
}

const {
	alt = 'image',
	loading = 'lazy',
	fetchPriority = 'low',
} = defineProps<ImageProps>()

const isLoadingError = ref(false)
</script>

<template>
	<div class="image">
		<Icon
			v-if="isLoadingError"
			name="i:camera"
			:style="{
				width: `${width}px`,
				height: `${height}px`,
			}"
		/>
		<picture
			v-else
			class="picture"
		>
			<template v-if="sourceList">
				<source
					v-for="item of sourceList"
					:key="item.srcset"
					v-bind="item"
				>
			</template>
			<img
				class="img"
				:src
				:width
				:height
				:alt
				:loading
				:fetchPriority="fetchPriority"
				@error="isLoadingError = true"
			>
		</picture>
		<slot />
	</div>
</template>

<style scoped lang="scss">
.image {
  display: flex;
  align-items: center;
  justify-content: center;
}

.picture{
  width: 100%;
  height: 100%;
}

.img {
  caret-color: transparent;
  user-select: none;
  pointer-events: none;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
