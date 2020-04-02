---
layout: post
title: 关于动效 02 - 拆解输出
comments: true
categories: posts
tags: product, ux, design, UI
---



上一节 [关于动效 01](https://zzao.im/blog/post/About-Motion-01.html) 里初步理解了什么动效算好的动效之后，说说工作中具体如何做，怎么去拆解描述动效，并输出给合作的工程师。



> 动效没你想的那么难以描摹。



**描述一个动效可分为两部分：**



1. **动作特点**
   - 速度
   - 时间
2. **变化形式**
   - 位移（位置变化）
   - 属性变化
     - 颜色变化
       - 色值
       - 透明度
     - 形状变化
       - 轮廓变化
       - 大小变化
     - 角度变化



而工作中通常设计师都是将以上几类动效特征提炼给合作的工程师，让工程师负责实现每一个运动细节。

------



**如何将这些动效细节拆解并告诉工程师？**

1. **拆解动效** 

   - 如上所述，按**动作特点**和**变化形式**两个维度拆解动画的基础变化。

   ------

   

   

2. **向工程师阐述**

   - 将动画的基础变化转化为数值输出

     - _**罗列变化形式**_

       - 位移，角度变化，形变，透明度变化，色值变化等属性

     - _**展示每一变化形式对应的起止变量数值**_

       - 位移：移动距离（X 轴，Y 轴，Z 轴），大小 Scale 变化倍率等

     - _**展示每一变化对应的时间特征（节点 / 区间）**_

       - 变化的时间起始点（一般以毫秒为单位）/ 运动从开始到结束所用时长（一般以毫秒为单位）

     - _**变化节奏（运动曲线）**- 通常一个对象上多个变化形式的运动（速度）特征是一致的_

       - 产生每个变化的速度形式：匀速运动 linear，加速运动 ease-in，

         减速运动 ease-out，变速运动 ease-in-out 等



------



其实动效的过程拆解还是很简单的，其中比较复杂或者说难以抉择的部分，其实应该是是**时间特征**和**运动曲线**两部分。

毕竟一个动画在交互中呈现的质感 hand feeling 很大程度上就是**运动时间**和**运动曲线**决定的。

> 区间描述速度快慢
>
> 曲线描述速度变化

这为什么算相对较难的部分？
一方面涉及到怎么选择运动曲线和节奏才合适的问题，另一方面是怎么向工程师描述以获得最大可能性效果还原的问题。

--------

于是，下面先来说通常怎么选择和把控**动画时间**。

运动节奏很大程度上依赖运动的快慢来呈现。

在相同的运动距离下，可用**时间**来定义动画的快慢，这个时间分为**长区间**和**短区间**，以满足不同场景的需求。

在不同的运动距离下，一般是移动距离长使用较长的时间区间，移动距离短使用较短的时间区间。

如：

长区间，一般用于需要用户等待的情境，或者移动距离较长，变化元素较多的时候

短区间，用于表现干净利落的动效观感。此外，移动距离较短，变化元素较少时也适合用短区间。



当然，特殊情况下，需要具体问题具体分析。



**参数：**

**长区间：280 - 400ms（相当于 25f/s 帧率下，7f - 10f）**

**短区间：160 - 240ms（相当于 25f/s 帧率下，4f - 6f）**



在做跨平台设计时，同一个动效在不同屏幕尺寸的设备上的运动时间区间（节奏）也应该是一致的。



------



再说运动曲线，虽说 UI 动效千变万化，创意无限，但总结起来运动速度的变化特点无非以下几种：

- **匀速运动 Linear**
- **加速运动 easeIn**
- **减速运动 easeOut**
- **加速减速运动 easeInOut**
- **回弹运动 Spring**



上述 **5 种**基本能涵盖大部分运动**曲线类型**了，更多更细腻的效果差别仅在于对于那条运动曲线的细微差异，及实现时的插值算法或者所用函数公式的不同……



**各种运动曲线通常用于表现什么样的运动？**依然有规律可循。

- 在 UI 里通常可共用 **easeOut / ease-In-Out** 来表现普通元素的出 / 入效果；
- 表示暂时出现很快会消失的元素通常用 **easeOut 入场，EaseIn 出场**，如临时弹出的提示 Toast；
- 在入场 / 出场的基础上，还可以偶尔通过添加 **Spring** 弹性函数来表现一种活泼友好的 UI 质感。 当然不同平台系统实现方式不同，实现弹性运动不仅是 Spring 函数一种，这个之后会谈到；
- 通常除了表持续的旋转运动，几乎不推荐用 **Linear 线性运动**。


当然常见的运动曲线函数你仍然能通过一些现有资料作为参考，如，[缓动函数速查表](https://easings.net/zh-cn#)。



以上说了这么多运动和变化形式极富规律的动效，当然你仍然可以在设计中发挥创意使用**自定义创意动效**来表现自己的设计，如加载动效、直播互动场景中的反馈动效、趣味贴纸素材动效等。这种创意动效的实现通常就不在于拆解动作了而可能是整体输出，这部分具体会在下节讲到。



-------

通过本节你应该明白如何拆解动效选用运动节奏和曲线了。

下一节就该进入开发阶段了。利用什么实现方案才能尽可能的还原自己设计的动效，目前有哪些常用的可用的方案？



##### 下节预告：

实现方案 - Android Interpolator
