<template>
	<view :style="{height:customNav.navBarHeight + 'px'}"></view>
</template>

<script>
	
	export default {
		data() {
			return {
				customNav: null,
			}
		},
		created() {
			const global = getApp().globalData
			this.customNav = global.customNav
		}
	}
</script>

<style>
</style>