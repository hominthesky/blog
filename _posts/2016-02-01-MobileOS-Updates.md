---
layout: post
title: 2015 总结 — 移动操作系统更新
date:   2016-02-01
cover: os/cover.jpg
categories: posts
tags: Android, iOS
---



2013 年 iOS 改了画风，抛弃从前坚持的拟物风，iOS 7 便成了转折点，其实我算那个时候才开始使用 iOS 的「用户」和「设计」，因为我要给当时手上的 iOS 6 App 做 iOS 7 适配。故事背景是，当时我是个 Andriod 4.4 用户，一个总是跟身边同学安利 Nexus 4 给身边同事安利 Android 4.0+ 的人…公司唯一一个用 Android 的产品设计。 Android 4.0+ 在通知中心设计、快捷操作入口、打破 APP 间隔阂（系统全局分享、APP 间自由跳转调起）、多种手势（滑动、长按）运用等如今看来理所应当的特性都是非常超前和成熟的。

2014 年 Android 的画风从 Holo 转变为 Material Design，Android 5.0 是一个转折点。MD 设计语言并不是为了改变 Android，不止为了改变 Android， 而是为了统一 Web、Web App、甚至是 iOS 也就是多种屏幕和多种设备的体验。iOS 也同理，在 iOS 8 预览版 2014 年 6 月在 WWDC release 之后,10 月 Yosemote 随 iOS 8 正式版发布，整个体验和视觉风格是与 iOS 8 统一起来了，包括改良后的 iOS 和 OS X 通知中心也统一了。



**2015 年，Google I/O 发布 Android M 预览版（写于 Google I/O 当晚）**



##1) App Permissions 应用权限
> 这里的权限主要包括八个项目：


> - 地点 Location

> - 相机 Camera

> - 麦克风 Microphone

> - 联系人 Contacts

> - 电话 Phone

> - 短信 SMS

> - 日历 Calendar

> - 传感器 Sensor

[相关文档](http://developer.android.com/guide/topics/security/permissions.html)



##2）Web Expirence Web 体验优化     
> 以 Pinterest 为例介绍了 Chrome Custom Tab。即，当你使用 App 要浏览 App 内链接时，传统的方法是使用 App 内建浏览器查看该网页，而浏览 App 内链接时可直接调起 Chrome 来渲染 App 内网页，并可对色彩风格根据你的 App 风格进行定制。同时在登录时拥有保存密码 Saved Password，键盘自动补全 Auto fill，以及所有 Chrome 提供的安全特性 Multi- Process Security。避免了各个 App 内置浏览器中反复登录同一网站的繁复操作。  

[相关文档 1](http://developer.android.com/reference/android/support/customtabs/CustomTabsCallback.html)  

[相关文档 2](http://developer.android.com/reference/android/support/customtabs/CustomTabsClient.html)  

[相关文档 3](http://developer.android.com/reference/android/support/customtabs/CustomTabsIntent.html)  

[相关文档 4](http://developer.android.com/reference/android/support/customtabs/CustomTabsIntent.Builder.html)  





##3）App Links         
> 演示时以 Twitter url 为例，可以自动识别 url，点击就可自动打开对应的 app 对应内容的页面，其实 app 间的平行无缝切换，Android 一直就比其他平台都做得好。而这次的更新又可以使 App 间以及 App 与 Web 的联动表现得更加流畅了，通过链接实现 app 与 Web 间的无缝切换形成的任务流更加连贯。  

> 此外，这也是一个Google 做 app 内搜索的布局。

[相关文档](http://developer.android.com/training/app-links/index.html)



##4）Android Pay     
> 想说，在移动支付的大战中，Android 是不会坐以待毙的。Dave 从 Simplicity/Security/Choice 三方面，介绍了 Android Pay简易的支付操作流程，指纹验证功能，以及支持主流的信用卡银行、与三大运营商以及约 70 万商家达成合作。     
不过不知道支付的安全性是不是真的如介绍说得那么省心那么可靠呢？？拭目以待。

> - 现在看来移动支付安全还是相对可靠的，iOS / Android 操作系统的安全机制类似。那种社工级别或者 app 内的低级错误就不要甩锅给系统了。


##5）Fingerprint Support     
>由 Android Pay 引入这一个全新 API，算是给开发者的福利，借此大家又可发挥想象在自己的 app 里添加更多的 feature 和玩法。     
Dave 介绍的主要使用场景有：解锁 Unlock，Play Store 支付并宣布指纹识别提供开放的认证 API。

> - 现在看来 2015 年各大 Android 旗舰机型 Nexus 5X/ Nexus 6P / Sony Z5 / Galaxy S6 （Edge） 都加了指纹识别的支持

[相关文档](http://developer.android.com/reference/android/hardware/fingerprint/FingerprintManager.html)



##6）Power & Charging     
>其实之前的版本，Android 一路都在优化电池续航，这次特别介绍了 Doze 状态，主要是让闲置的 Android 设备自动进入睡眠状态达到最小化的电量消耗。    
称在 Nexus 9 上的续航可延长至原来的两倍。

>同时利用 USB Type C 对充电进行优化，充电速度是原有的 3 - 5 倍。Nexus 6 时期的充电优化是以 Moto 的 Turbo Charger为亮点，充 15 mins 的电量可维持 6 小时续航。而这次对 USB Type C 的支持又为各厂商包括 Google 下一代 Android 新机提供了新的优化点。


[相关文档](http://developer.android.com/reference/android/os/PowerManager.html)





##7) Now on Tap

>Google Now 的新特性，根据当前用户使用手机或 app 的 context，Now on Tap 会自动识别当前 context 里的信息，并提供相关的信息。如果正在听音乐， Now on Tap 会给出歌手信息或专辑信息，如果正在浏览某个餐馆，Now on Tap 会告诉你餐馆信息。

[相关文档](http://developer.android.com/training/articles/assistant.html)



##8）其他


>优化文本选择操作体验，增加 floating clipboard toolbar

>优化分享功能，可一键将内容分享到任意 App 或联系人

>更简易的音量调节操作，可分别对音乐或闹铃音量进行调节

>……

---

##Android 6.0.1

- 新增 Emoji 至 200+

- 新增相机快捷启动方式：如双击电源键

- 恢复 5.0+时期的 Do not Disturb 模式，新增音量控制，可蓝牙同时调节手机和蓝牙设备音量

- 对平板界面进行优化

- 优化复制粘贴选项

- 修复图片信息发送失败 bug

- 安全补丁

---

##iOS 9  

**1） 3D Touch**  

iPhone 6s 和 iPhone 6s Plus 支持。个人还是觉得这种交互在 iPhone、Apple Watch 包括 Mac Track Pad 上都很鸡肋……  

[相关文档](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/Adopting3DTouchOniPhone/index.html#//apple_ref/doc/uid/TP40016543)



**2） 多任务模式**  

比如一边看文档，一边刷 Twitter ，适用于 iPad 及以上大小屏幕  

[详细文档](https://developer.apple.com/library/ios/samplecode/Lister/Introduction/Intro.html#//apple_ref/doc/uid/TP40014701)  



**3）搜索优化**    

可在 spotlight 内搜索 app 内内容  

[相关文档 1](https://developer.apple.com/library/ios/documentation/General/Conceptual/AppSearch/index.html#//apple_ref/doc/uid/TP40016308)  

[相关文档 2](https://developer.apple.com/library/ios/documentation/Foundation/Reference/NSUserActivity_Class/index.html)  

[相关文档 3](https://developer.apple.com/library/ios/documentation/CoreSpotlight/Reference/CoreSpotlight_Framework/index.html)  

**Universal Link**：类似 Android M 的 App Links 无需自定义 url schemes，支持标准 http 和 https 链接。如果用户安装 app，点击链接就会用该 app 打开，如果没安装则用 Safari 打开。

[相关文档](https://developer.apple.com/library/ios/documentation/General/Conceptual/AppSearch/UniversalLinks.html)



**4）应用大小精简**  

App Store 下载的 App 可根据用户对应设备只下载该设备需要的切图、资源、二进制文件以达到缩减应用大小的目的。  

[相关文档 1](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/AppThinning/AppThinning.html)  

[相关文档 2](https://developer.apple.com/library/ios/documentation/Cocoa/Reference/Foundation/ObjC_classic/index.html)  



**5）支持从右往左顺序阅读的语言**   

[相关文档](https://developer.apple.com/library/ios/documentation/MacOSX/Conceptual/BPInternational/SupportingRight-To-LeftLanguages/SupportingRight-To-LeftLanguages.html#//apple_ref/doc/uid/10000171i-CH17)

**6）App Transport Security (ATS)**    

新协议确保 APP 与后端连接安全性。鼓励尽快使用 https，通过高版本 API 传输时需使用 TSL 1.2 加密且支持转发保密。否则会报错。  



**7）Safari View Controller**    

类似 Chrome Custom Tab 允许 App 内调起 Safari 浏览网页且提供 Content Blockers 扩展，屏蔽类似广告或者减慢网页加载速度的不必要内容。   

[相关文档](https://developer.apple.com/library/ios/documentation/General/Conceptual/ExtensibilityPG/index.html#//apple_ref/doc/uid/TP40014214)



**8）游戏 Gaming 套件、健康 Health 套件 - I don't care**



**9) 新增与 Apple Watch 双向数据传输接口**

[相关文档](https://developer.apple.com/library/ios/documentation/WatchConnectivity/Reference/WatchConnectivity_framework/index.html#//apple_ref/doc/uid/TP40015269)

**10）Swift 优化**   



**用户体验层面改变**   

- 右滑开启快捷方式，Spotlight、最近联系人、常用 APP 、Maps 给出的本地化推荐

- 状态栏左上角快捷返回到上一个 APP

- 任务管理器样式改变

- 相册优化，更多分类


---

##iOS 9.1

- 新增 Live Photos 接口

- Apple Pencial 接口

---

##iOS 9.2   

- 使用 ENC 减少网络延迟和丢包

- 在 getaddrinfo 里新增从 IPv4 常量里合成 NAT64 IPv6 地址的功能

- SafariViewController 支持第三方操作扩展

- SafariViewController 里长按重新加载按钮支持选择是否启用 Content Blocker 扩展，弃用侧滑手势操作
