<template>
	<div id="app">
		<v-top></v-top>
		<div class="card-wrapper">
			<v-card></v-card>
		</div>
	</div>
</template>

<script>
import top from './components/top/top.vue'
import card from './components/card/card.vue'

export default {
	name: 'app',
	components: {
		'v-top': top,
		'v-card': card
	}
}
</script>

