<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style lang="scss">
p,
li {
	color: white;
	font-family: Arial, Helvetica, sans-serif;
}
body {
	margin: 0;
	background: rgb(33, 33, 33);
	background: linear-gradient(
		0deg,
		rgba(33, 33, 33, 1) 0%,
		rgba(24, 24, 27, 1) 100%
	);
}
ul {
	margin: 0;
	padding: 0;
}
li {
	list-style: none;
}
.wrapper {
	padding: 0 11%;
}
</style>
