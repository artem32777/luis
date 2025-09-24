<script setup lang="ts">
export type LogoProps = {
	width?: string | number
	height?: string | number
	textColor?: string
	plusColor?: string
}

const {
	width = 77,
	height = 35,
	textColor = '#BE1730',
	plusColor = '#7697AC',
} = defineProps<LogoProps>()
</script>

<template>
	<svg
		:width="width"
		:height="height"
		viewBox="0 0 110 50"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class="logo"
	>
		<path
			d="M101 22.4093L99.3688 27.8413H93.648L92.0624 33.084H85.5631L87.1391 27.8413H83.0307C82.7533 26.9729 82.367 26.1256 81.8735 25.3166L80.1043 22.4074H88.7726L90.3926 16.9161H96.9244L95.2757 22.4093H101Z"
			:fill="plusColor"
			class="plus"
		/>
		<g class="text-group">
			<path
				d="M18.822 33.082C18.3151 33.082 17.9517 32.5943 18.097 32.1085L24.9215 9.36287H17.3721L10.2876 32.9635L9.67742 34.9947H24.7857L25.3614 33.084H18.822V33.082Z"
				:fill="textColor"
				class="letter-1"
			/>
			<path
				d="M9.40774 35.8918L9.12657 36.8271C9.02711 37.1599 8.98886 37.4927 9.00225 37.814H23.9384L24.516 35.8918H9.40774Z"
				:fill="textColor"
				class="letter-2"
			/>
			<path
				d="M9.18778 38.7149C9.60092 39.8147 10.6605 40.6371 11.9612 40.6371H23.0891L23.6668 38.7149H9.18778Z"
				:fill="textColor"
				class="letter-3"
			/>
			<path
				d="M49.7672 9.36287L42.6387 33.084H35.0817L42.2121 9.36287H34.6609L27.5686 32.9635L26.9585 34.9947H49.6142L50.2244 32.9635L57.3166 9.36287H49.7672ZM60.3099"
				:fill="textColor"
				class="letter-4"
			/>
			<path
				d="M26.6888 35.8918L26.4115 36.8175C26.3101 37.1522 26.2719 37.4889 26.2872 37.814H48.6445C48.8243 37.4869 48.9696 37.1388 49.0806 36.7735L49.3445 35.8918H26.6888Z"
				:fill="textColor"
				class="letter-5"
			/>
			<path
				d="M26.4746 38.7149C26.8896 39.8147 27.9493 40.6371 29.2518 40.6371H43.8896C45.523 40.6371 47.0225 39.9065 48.0286 38.7149H26.4746Z"
				:fill="textColor"
				class="letter-6"
			/>
			<path
				d="M49.7672 9.36287H49.7672ZM60.3099 9.36287L58.0396 16.9141H65.5909L67.8612 9.36287H60.3099Z"
				:fill="textColor"
				class="letter-7"
			/>
			<path
				d="M56.3928 22.4074L52.6133 34.9928H60.1607L63.9364 22.4074H56.3928Z"
				:fill="textColor"
				class="letter-8"
			/>
			<path
				d="M52.3398 35.8918L51.7622 37.814H59.3115L59.8891 35.8918H52.3398ZM51.4925 38.7149L50.9148 40.6371H58.4642L59.0418 38.7149H51.4925Z"
				:fill="textColor"
				class="letter-9"
			/>

			<path
				d="M78.1017 16.9161H84.1266L86.3951 9.36287H77.4246C70.1335 9.36287 65.6501 17.3388 69.4392 23.5664L70.2827 24.9551L73.2167 29.775C74.0985 31.2267 73.0541 33.084 71.3557 33.084H63.7279L63.1541 34.9947H80.6073C81.7434 32.3743 81.709 29.2299 80.0106 26.4355L76.2368 20.2346C75.3513 18.779 76.3994 16.918 78.1017 16.918V16.9161Z"
				:fill="textColor"
				class="letter-10"
			/>

			<path
				d="M62.3049 37.814H78.7214C79.2799 37.2364 79.7619 36.5899 80.1559 35.8918H62.8825L62.3029 37.814H62.3049Z"
				:fill="textColor"
				class="letter-11"
			/>

			<path
				d="M62.0352 38.7149L61.4575 40.6371H72.0232C74.2285 40.6371 76.1775 39.9065 77.7192 38.7149H62.0352Z"
				:fill="textColor"
				class="letter-12"
			/>

		</g>
	</svg>
</template>

<style scoped lang="scss">
.logo {
  transition: filter 0.3s ease 0s;

  path {
    will-change: transform;
  }

  &:hover {
    filter: saturate(1.3);

    .plus {
      animation: pulse 0.7s ease-in-out 0.7s;
    }

    .letter-1 {
      animation: letters 0.3s ease 0.1s;
    }

    .letter-2 {
      animation: letters 0.3s ease 0.15s;
    }

    .letter-3 {
      animation: letters 0.3s ease 0.2s;
    }

    .letter-4 {
      animation: letters 0.3s ease 0.25s;
    }

    .letter-5 {
      animation: letters 0.3s ease 0.3s;
    }

    .letter-6 {
      animation: letters 0.3s ease 0.35s;
    }

    .letter-7 {
      animation: letters 0.3s ease 0.4s;
    }

    .letter-8 {
      animation: letters 0.3s ease 0.45s;
    }

    .letter-9 {
      animation: letters 0.3s ease 0.5s;
    }

    .letter-10 {
      animation: letters 0.3s ease 0.55s;
    }

    .letter-11 {
      animation: letters 0.3s ease 0.6s;
    }

    .letter-12 {
      animation: letters 0.3s ease 0.65s;
    }
  }
}

@keyframes letters {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100%{
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
