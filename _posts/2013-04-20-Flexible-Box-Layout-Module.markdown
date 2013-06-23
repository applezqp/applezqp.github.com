---
layout: post
title: "Media Queries"
data: 2013-4-21 20:00:00
categories: css
---
## 困惑

刚开始使用 Flexbox 布局，或许会有不少困惑。Google 一下，会发现即有 `display: box;` 也有 `display: flex;`，属性也是有 `box-{*}` 和 `flex-{*}` 两套。

到底是 `box` 还是 `flex` 呢？终其原因，Flexbox 还未正式发布，从 2009 年到目前已经经历了多个版本，其中命名发生了较大的变化。

引用 [Dive into Flexbox](http://weblog.bocoup.com/dive-into-flexbox/) ：

> Flexbox Specification Timeline:
> 
* July 2009 Working Draft (display: box;)
* March 2011 Working Draft (display: flexbox;)
* November 2011 Working Draft (display: flexbox;)
* March 2012 Working Draft (display: flexbox;)
* June 2012 Working Draft (display: flex;)
* September 2012 Candidate Recommendation (display: flex;)

虽然最新一版已经到达 CR 版本，但很多浏览器并不支持，目前支持比较广泛的是 2009 年的版本，具体的兼容情况可参考 [caniuse](http://caniuse.com/flexbox) 。

## 新老对比

2009年版和2012年版的做个对比：

<table>
	<thead>
		<tr>
			<th>2009版</th>
			<th>2012版</th>
			<th>说明</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>display: box</td>
			<td>display: flex</td>
			<td>flexbox 布局</td>
		</tr>
		<tr>
			<td>box-lines</td>
			<td>flex-wrap</td>
			<td>flex items 是否换行</td>
		</tr>
		<tr>
			<td>box-orient</td>
			<td>flex-direction</td>
			<td>flex items 的排列方向</td>
		</tr>
		<tr>
			<td>box-pack</td>
			<td>justify-content / align-self</td>
			<td>水平方向的剩余空间分配</td>
		</tr>
		<tr>
			<td>box-align</td>
			<td>justify-content / align-self</td>
			<td>竖直方向的剩余空间分配</td>
		</tr>
		<tr>
			<td>box-direction</td>
			<td>order</td>
			<td>flex items 的排列序列</td>
		</tr>
		<tr>
			<td>box-flex</td>
			<td>flex</td>
			<td>flex item 的大小</td>
		</tr>
	</tbody>
</table>

说明：
box-pack 和 box-align 都对应 justify-content / align-self。因为 justify-content / align-self 和水平、竖直没有直接关系，主要和 main axis 、cross axis 有关，而排列的方向不同，main axis 和 cross axis也会发生变化，可以引用个图说明一下：

![css-flexbox_axis](https://f.cloud.github.com/assets/170783/389616/37b92ee0-a715-11e2-8845-f3bbc57a3dae.png)

*图出自[flexbox-basics](http://dev.opera.com/articles/view/flexbox-basics/)*


个人认为，新 Flexbox 除了命名的变化，在操作单位更加细化，例如：`order`, `align-self`, `flex-basis`, `flex-grow`, `flex-shrink` 定义的对象都是 flex item ，这样能产生更多的变化。

## Demo

[Old Flexbox](http://handyjs.github.io/lab/flexbox-old.html)

[New Flexbox](http://handyjs.github.io/lab/flexbox.html) （New Flexbox 支持版本有限，该Demo仅支持Chrome，请在Chrome下运行）

PS：Demo 较简略，可自动动手多多尝试。

## 参考阅读
* 新版 Flexbox ：[MDN](https://developer.mozilla.org/en-US/docs/CSS/Tutorials/Using_CSS_flexible_boxes)
* 老版 Flexbox （示例较清晰）：[CSS box-flex属性，然后弹性盒子模型简介](http://www.zhangxinxu.com/wordpress/2010/12/css-box-flex%E5%B1%9E%E6%80%A7%EF%BC%8C%E7%84%B6%E5%90%8E%E5%BC%B9%E6%80%A7%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B%E7%AE%80%E4%BB%8B/)
* IE自成一套（泪崩）：[MSDN](http://msdn.microsoft.com/en-us/library/ie/hh772069%28v=vs.85%29.aspx)

