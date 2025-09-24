<script setup lang="ts">
import Image from '~/components/ui/image/Image.vue'
import Button from '~/components/ui/button/Button.vue'

const { $api } = useNuxtApp()

const pending = ref(true)
const photos = ref<string[]>([])
const open = ref(false) // состояние чтобы работало также на мобилке, без :hover

onMounted(async () => {
	try {
		for (let i = 0; i < 3; i++) {
			const res = await $api('/cat')
			if (res instanceof Blob) {
				const img = URL.createObjectURL(res)
				photos.value.push(img)
			}
		}
	} catch (e) {
		console.log(e)
	} finally {
		pending.value = false
	}
})
</script>

<template>
	<ClientOnly>
		<aside
			class="wrapper"
			:class="{
				ready: !pending,
				open: open,
			}"
			@mouseenter="open = true"
			@mouseleave="open = false"
		>
			<h2 class="h2 title">
				Консультация эксперта
			</h2>
			<div class="photos">
				<Image
					v-for="(src, i) in photos"
					:key="i"
					:src="src"
					:class="`image-${i}`"
					width="64"
					height="64"
				/>
			</div>
			<div class="btn">
				<Button @click="console.log('Консультация получена')">
					Получить консультацию
				</Button>
			</div>
			<Icon
				name="i:arrow-back"
				size="24"
				class="icon"
			/>
		</aside>
	</ClientOnly>
</template>

<style scoped lang="scss">
.wrapper {
  position: fixed;
  top: 100px;
  right: 0;
  width: 280px;
  height: 266px;
  transform: translateX(100%);
  transition: all 0.5s ease 0s;
  opacity: 0;

  &.ready {
    transform: translateX(0);
    opacity: 1;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--main-gray);
    border-radius: 14px 0 0 14px;
    transition: transform 0.3s ease;
    transform: translateX(212px);
  }

  &.open {

    &::before {
      transform: translateX(0);
    }

    .image-0 {
      transform: translate(-155px, 0);
    }

    .image-1 {
      transform: translate(-110px, 0);
    }

    .image-2 {
      transform: translate(-65px, 0);
    }

    .title, .btn {
      opacity: 1;
      transform: translateY(0) scale(1);
      transition: transform 0.6s ease 0.4s, opacity 0.6s ease 0.4s;
    }

    .icon {
      transform: translateX(-100px);
      opacity: 0;
      transition: all 0.5s ease 0s;
    }

  }
}

.title {
  position: absolute;
  left: 32px;
  top: 24px;
  transform: translateY(-10px);
  opacity: 0;
  text-align: center;
  max-width: 216px;
}

.photos {
  margin-top: 104px;
}

.image {
  position: absolute;
  right: 2px;
  width: 64px;
  height: 64px;
  border: 3px solid var(--main-gray);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.image-0 {
  transform: translate(0, -90px);
}

.image-1 {
  transform: translate(0, -45px);
}

.image-2 {
  transform: translate(0, 0);
}

.btn {
  position: absolute;
  bottom: 24px;
  left: 24px;
  z-index: 2;
  transform: translateY(10px);
  opacity: 0;
}

.icon {
  position: absolute;
  bottom: 36px;
  right: 24px;
  opacity: 0.3;
  transition: all 0.2s ease 0s;
}
</style>
