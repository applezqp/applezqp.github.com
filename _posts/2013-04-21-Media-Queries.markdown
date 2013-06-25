---
layout: post
title: "Media Queries"
data: 2013-4-21 20:00:00
categories: css
---

响应式设计中最关键的一部分就是 Media Queries。整理下常用的 Media Queries，后期将持续维护。

首先，先列下最常见的几款设备参数： 

<table>
	<thead>
		<tr>
			<th>设备</th>
			<th>分辨率</th>
			<th>像素比 (CSS pixel ratio)</th>
			<th>宽高比 (Aspect ratio)</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>iPhone 3</td>
			<td>480×320</td>
			<td>1</td>
			<td>3:2</td>
		</tr>
		<tr>
			<td>iPhone 4 & 4S</td>
			<td>960×640</td>
			<td>2</td>
			<td>3:2</td>
		</tr>
		<tr>
			<td>iPhone 5</td>
			<td>1136×640</td>
			<td>2</td>
			<td>71:40</td>
		</tr>
		<tr>
			<td>iPad mini</td>
			<td>1024x768</td>
			<td>1</td>
			<td>4:3</td>
		</tr>
		<tr>
			<td>iPad 1 & 2 & 3</td>
			<td>1024×768</td>
			<td>1</td>
			<td>4:3</td>
		</tr>
		<tr>
			<td>iPad 4</td>
			<td>2048×1536</td>
			<td>2</td>
			<td>4:3</td>
		</tr>
		<tr>
			<td>Samsung Galaxy S I & II</td>
			<td>800x480</td>
			<td>1.5</td>
			<td>3.5</td>
		</tr>
		<tr>
			<td>Samsung Galaxy S III</td>
			<td>1280x720</td>
			<td>2</td>
			<td>16:9</td>
		</tr>
	</tobdy>
</table>

详细信息可以访问[维基百科](http://en.wikipedia.org/wiki/List_of_displays_by_pixel_density)，维基百科上 iPad 3 和 iPad 4 参数相同，个人感觉有误。

此外，Android 设备过多，本人也了解较少，以下按 dpi 为维度进行区分：
<table>
	<thead>
		<tr>
			<th>DPI</th>
			<th>分辨率</th>
			<th>像素比 (CSS pixel ratio)</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>xhdpi</td>
			<td>960x640</td>
			<td>2</td>
		</tr>
		<tr>
			<td>hdpi</td>
			<td>800x480</td>
			<td>1.5</td>
		</tr>
		<tr>
			<td>mdpi</td>
			<td>480x320</td>
			<td>1</td>
		</tr>
		<tr>
			<td>ldpi</td>
			<td>320x240</td>
			<td>0.75</td>
		</tr>
	</tbody>
</table>

大概的占比可参考[移动终端开发必备知识](http://isux.tencent.com/%E7%A7%BB%E5%8A%A8%E7%BB%88%E7%AB%AF%E5%BC%80%E5%8F%91%E5%BF%85%E5%A4%87%E7%9F%A5%E8%AF%86.html)

回归正题，根据上面的参数可以设置断点，列出常用的 Media Queries：

```
/* Smartphones */
@media only screen
and (min-width : 320px)
and (max-width : 480px) {

}

/* device pixel ratio 可以根据不同的像素比加载不同质量的图片 */
@media only screen and (-webkit-min-device-pixel-ratio: 2), 
only screen and (min-device-pixel-ratio: 2) {

}

@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
only screen and (min-device-pixel-ratio: 1.5) {

}

@media only screen and (-webkit-min-device-pixel-ratio : 1),
only screen and (min-device-pixel-ratio: 1) {

}


/* iPads */
@media only screen and (device-width: 768px){

}
/* iPads (landscape) */
@media only screen
and (device-width: 768px)
and (orientation: landscape) {

}
/* iPads (portrait) */
@media only screen
and (device-width: 768px)
and (orientation: portrait) {

}

/* iPhone 4 */
@media only screen 
and (device-width: 320px) 
and (-webkit-device-pixel-ratio: 2){

}

/* iPhone 4 (Landscape) */
@media only screen 
and (device-width: 320px) 
and (-webkit-device-pixel-ratio: 2)
and (orientation : Landscape) {

}

/* iPhone 4 (Portrait) */
@media only screen 
and (device-width: 320px) 
and (-webkit-device-pixel-ratio: 2)
and (orientation : portrait) {

}

/* iPhone 5 */
@media only screen and (device-aspect-ratio: 40/71) {

}
```

iPad 和 iPhone 发生翻转的时候，设备的宽度不会发生变化，因此不能通过 `device-width` 判断设备的方向，而是通过 `orientation` 判断的。

当然以上不是最全的，可以根据各自的需求组合出各种写法，欢迎继续补充(*^__^*)

## 参考阅读

* 依然是MDN：[CSS media queries](https://developer.mozilla.org/en-US/docs/CSS/Media_queries)

* 严重推荐，利于理解各种基本概念：[A tale of two viewports — part one](http://www.quirksmode.org/mobile/viewports.html) & [A tale of two viewports — part two](http://www.quirksmode.org/mobile/viewports2.html)

