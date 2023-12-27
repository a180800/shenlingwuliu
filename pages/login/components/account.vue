<template>
	<view>
		<input type="text"  placeholder="请输入账号" v-model="store.count" />
		<input type="text"  placeholder="请输入密码"  v-model="store.count1" />
	</view>
</template>

<script setup lang="ts">
	import { useCounterStore } from '../../../store/counter'
    const store = useCounterStore()
	
</script>

<style></style>
