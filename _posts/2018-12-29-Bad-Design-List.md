---
layout: post
title: UX | 坏体验汇总记录（长期更新）
comments: true
categories: posts
tags: product, ux, design
---

**为什么新开这么一个记录？**

因为大多数人的认知是有惰性或惯性的。在没有更好选择时，人们会很容易去接受并习惯一些现行方案。但往往那些方案本不该那么做，本该有更好的解决思路。所以我想记录一些「本不该习惯的坏体验」，提醒自己——**不是所有的常态都是理所应当**。

---------



#### 启动屏广告

这似乎已然是业界常态，但却是严重阻碍用户触达 APP 和使用效率的设计。也严重违背使用预期，比如「我要看新闻」，是本次开启 APP 的目标，这时启动屏却弹出一个广告，我得点跳过，才能看到新闻，这就是对用户完成本次任务的阻碍。

更严格地说，记得以前 Android Design 里还建议 App 不要添加启动屏，因为那会给用户严重的阻断感和 App 启动慢的感觉。所以更别说启动屏放广告了。



#### 每逢节日大肆修改 UI 做节日运营

现在似乎各家国内厂商都爱这么效仿着做节日运营，改 App Icon，改主界面功能 icon 甚至 UI 配色。结果就是 APP 的视觉一段时间一个样，我作为用户，换一个节日就可能完全不认识（不能凭视觉语言和直觉快速识别）它了，APP 内的导航 / 功能 icon 完全失去了语义传达的属性，我只能看 icon 下小小的汉字或经验去判断这里是什么功能。甚至我打开这个 APP 本想做某件事，但从看到它的图标开始我的注意力完全被这些鲜艳夺目的节日元素干扰了。  

我想这并不是能创造**好设计**和**好的审美体验**的途径。

好的设计应该追求**视觉上的平衡，尊重内容，为内容服务。尤其是不能折损功能入口图标的语义辨识度**！好的彩蛋或节日运营怎么做的？点到即止的小修改甚至是隐藏的，不会喧宾夺主，不会破坏原有视觉风格和图标语义。如 Google Doodle，Telegram 今年圣诞的彩蛋。



#### 垃圾短信广告

虽然大家对短信广告是反感的，但是对于目前手机中获取有效信息或社交的职能由 IM 软件接管，而短信模块变成接收广告的垃圾场的现状，大家似乎已经习以为常了，但这并不该习惯。试想你还在用短信与新朋好友通信时，你能容忍这些肆无忌惮的广告么，如果接受不了，那就不该学会接受，作为有商业推广的需求方也该想想，在短信中做推广的体验真的好么效率真的高么。



#### 应用内的 hybrid 网页是无法利用 Universal link 或 Deep link 调起另一个服务的。

这种认知应该主要来源于微信生态，微信内的浏览器是不允许你直接调起其他应用或服务的，甚至会有很多正常浏览器遇不到的兼容性问题。就算是你利用的是大家都在用的开放的技术或协议也不行。如真想跳转，只能经由腾讯应用宝，或用一个专属的蒙层引导用户，点击「更多」再用 Safari 打开之类。以致于身边很多人以为这是固有的技术限制，在做内容分享链路时会以为所有 IM 都会做此限制，甚至在自己做的新 App 里也想沿用这种限制策略。但是我很想说那并不是也不该是业界常态。甚至那种页面不叫 H5。  

Web 应该是开放平等的，如果出于安全考虑，你可以在用户点开有风险链接时就提醒用户，或在用户跳转外链或调起某服务时给予一个提示让用户确认自己的行为和即将前往的目的地。












