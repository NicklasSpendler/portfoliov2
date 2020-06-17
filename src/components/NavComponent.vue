<template>
	<nav class="headerNav">
		<ul ref="headerNav__ul" class="headerNav__buttons">
			<li data-number="0" v-on:click="scrollToElement('qIntro')">Home</li>
			<li data-number="1" v-on:click="scrollToElement('skills')">Skills</li>
			<div ref="animationLine" class="animation__line"></div>
		</ul>
	</nav>
</template>

<script>
import * as animatedNav from "@/scripts/animatedNav.js";

export default {
	name: "NavComponent",
	mounted() {
		animatedNav.init(this.$refs.headerNav__ul, this.$refs.animationLine);
	},
	methods: {
		scrollToElement: function(element) {
			let query = "."+element;

			document.querySelector(query).scrollIntoView({ block: 'end',  behavior: 'smooth' });
		}
	}
};
</script>

<style lang="scss" scoped>
.headerNav__buttons {
	display: flex;
	li {
		list-style: none;
		display: inline;
		padding: 0.5rem 1rem;
		-webkit-user-select: none; /* Safari */
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* IE10+/Edge */
		user-select: none; /* Standard */
		cursor: pointer;
	}
	.animation__line {
		width: 20px;
		display: block;
		content: " ";
		border-top: 1px solid white;
		position: absolute;
		transition: all 1s;
	}
}
</style> 