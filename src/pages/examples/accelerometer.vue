<template>
	<div class="accelerometer">
		<header id="header">
			<div class="nvbt iback" onclick="back()"></div>
			<div class="nvtt">Accelerometer</div>
			<div class="nvbt idoc" onclick="openDoc('Accelerometer Document','/doc/accelerometer.html')"></div>
		</header>
		<div id="dcontent" class="dcontent">
			<br/>
			<div class="button" onclick="clicked('accelerometer_shake.html',true)">
				摇一摇
			</div>
			<br/>
			<ul class="dlist">
				<li class="ditem" onclick="getAcc()">获取设备当前加速度</li>
	            <li class="ditem" onclick="watchAcc()">监听设备加速度变化 </li>
	            <li class="ditem" onclick="watchStop()">停止监听设备加速度变化</li>
			</ul>
		</div>
		<div id="output">
Accelerometer可获取设备加速度传感器信息，包括x轴（屏幕水平方向）、y轴（垂直屏幕水平方向）、z轴（垂直屏幕平面方向）三个方向的加速度信息。
		</div>
	</div>
</template>

<script>
</script>

<style>

</style>