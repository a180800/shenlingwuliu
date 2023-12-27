<template>
	<view class="content">
		<image src="../../static/logo.png" mode=""></image>
		<view class="text-area">
			<text class="title">title</text>
			<button type="button" @click="dl">登录</button>
		</view>
	</view>
</template>

<script setup lang="ts">
	import {captcha} from './'
	const dl=()=>{
		uni.utils.toast()
		console.log(uni.utils);
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
