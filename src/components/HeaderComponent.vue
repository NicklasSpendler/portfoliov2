<template>
	<header class="header wrapper">
		<div class="header__container">
			<section class="header__left">
				
			</section>
			<section class="header__right">
				<NavComponent />
			</section>
		</div>
	</header>
</template>

<script>
// Components
import NavComponent from "@/components/NavComponent.vue";

export default {
	name: "Header",
	components: {
		NavComponent
	}
};
</script>

<style lang="scss">
	.header{
		position: sticky;
		top: 0;
	}
	.header__container{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>