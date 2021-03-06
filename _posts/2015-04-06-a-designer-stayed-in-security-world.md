---
layout: post
title: Retrospect | 作为在安全行业呆了一年的设计师
categories: posts
cover: blank.png
date: 2015-04-06
comments: true
categories: posts
tags: design, designer, security
---


安全行业是一个很特殊很垂直的领域，说它小它很小，来来回回就是那几张面孔，那几家公司，就那几大研究方向；说它大，它能渗透到民众生活的各个日常细节，可以说一旦你接触到 digital world，你就有涉及到安全问题或者事件的可能。

作为一个 Product 向 UX 向的从业者在安全行业也呆了一年有余，肯定有一天会被人问到，在这个行业里做设计有着怎样的体验，怎样不同的体验？这也就是 Quora 和知乎上的惯用提问句式：What does it feel like to be/do …… ？

首先我知道了中国黑客和国外 hackers 的区别。这也是我进入到这个领域以后意识到的，应该算是比较失望的部分，原来 hackers 并不一定是我以前以为的那么热血或者痴迷于什么或者在计算机的世界里无所不能。「中国黑客」的方向划分得更明确，擅长 Web 安全的人有可能对其他领域的安全一窍不通，甚至对 Computer Science 也知之甚少。而我曾经以为黑客是不分网络和二进制，不分软件和硬件的，我以为只要是一个优秀的黑客一定是全才，甚至以为黑客精神是可以覆盖到整个计算机行业的。然而现实是，黑客精神更像一种个人选择的信仰跟行业无关甚至跟他本身是不是黑客无关，甚至也有没有黑客精神的黑客。



以上都太虚无缥缈了，说点实在的是，作为一个 Product Designer，第一次为一群特殊的人群甚至说爱「找茬」的人群做设计，你得非常「小心」。

怎么个小心法？

1) **一定要非常重视用户的隐私，每一个涉及隐私的功能和交互都一定要有一个令人信服的理由且一定要给予相应的安全保障，否则这样的功能还是砍掉吧。**


2) **凡事得做最坏的打算。**也就是你要把你的用户想成一群特别爱恶作剧爱捣乱的小孩。  

要么你得设想到最调皮捣蛋的孩子会耍什么花样，然后给出相应的策略应对；
比如有一个文本输入区域，给普通用户使用，那么他可能会按照你的提示来进行输入，或者就懒得输入索性留白；

如果是给黑客使用，你就得想他们一定不会乖乖听话的，他们不仅会手工输入各种乱七八糟的特殊字符或者测试字段还有可能以机器的方式批量输入你难以想象的数据，所以为了避免这些「捣乱」行为，你可能要采取一些措施，比如添加机器难辨识的验证码、字符过滤、字数限制等等，或者从设计的角度考虑，如何在输入了乱七八糟长篇字符的情况下依然保持页面美观。  

要么你得确保你这个功能或者数据，即使被最调皮的小孩使了恶作剧，对产品本身或者用户隐私并不会造成负面影响。

3) **学会了从安全行业的角度思考问题，明确了安全行业里几大矛盾主体**：

-  互联网公司（甲方）

- 传统安全企业（乙方）

- 互联网模式下应运而生的安全团队、企业

- 安全从业者

- 传统行业

并明确了各自特点：

**互联网公司**：有技术基础和对安全领域的认识，有条件的公司甚至有自己的安全研究团队或者应急响应中心。这意味着这样的用户或客户技术基础更好，对安全的理解力会更强，教学成本和沟通成本会更低。且安全基础设施会更好，虽然随公司量级的不同各自安全基础也呈良莠不齐之态。以防御为本，且有一定安全需求，面对安全问题的态度多半是希望尽快「息事宁人」，出于公关因素的顾虑更倾向于以封闭的方式解决问题。

**传统安全企业**：为有安全需求的企业提供安全服务的企业，建立和维系客户关系主要利用传统的销售模式——人情，安全服务或产品需要依靠人情的牢靠与否来决定是否得到客户的认可和支持。部分企业有专业的安全研究团队，会涉及到硬件安全产品的研发或安全培训。  

**互联网模式下应运而生的安全团队、企业**：利用当前互联网开放、平等甚至免费等特点，构建自己的安全产品线甚至是用户生态圈，为有安全需求的企业或个人服务。产品和服务通常基于互联网产品的模式分发至用户端，基本无需人工参与完全以自动化的方式实现其职能。从用户或客户需求入手，构思产品和服务模式，客户对产品和服务的评价通常基于是否解决问题满足需求来衡量。这样的团队或企业更倾向于以开放的互相监督的自动化的产品方式来解决安全问题。

**安全从业者**：相关专业的学生、甲方从业者（更在乎防御）、乙方从业者（攻防皆有）、独立爱好者（基于正当行为和目的地攻防研究），共同的期望和需求有技术共享、行业资讯资源的互通共享、薪资收入的提升、行业前景的好转等。

**传统企业**：科技基础差，安全基础设施差，技术和安全的意识薄弱，但随着业务互联网化数字化的转型，安全需求也越来越多且越来越迫切。但这样的企业沟通成本和教学成本会更高。

4) **有了更深刻的开发安全产品和安全工作的意识。**

在开发一个产品时，知道了审视一个产品是否安全不仅从产品本身的代码逻辑，还要从产品内的数据交互传输方式审视，该加密的地方是否加密尤其是涉及到隐私的数据，以及数据存储位置是公有的还是私有加密的。对输入输出行为要严格控制字符类型和数量。Web 产品的 URL 也要做防注入的过滤。在适当的位置和时间加入验证防爆破。

而就产品的项目管理上，公司网络的安全尤其 Wi-Fi 安全需要多加注意（最好 mac 地址校验），运营功能性后台、数据库管理员后台、系统管理员后台、代码托管仓库、一切内部系统避免弱口令和重复口令，不用邮件、国内 IM 传输关于帐号和密码的信息，商业产品需要保密的代码避免误传到 Github 非企业版一类的公开代码托管处。

避免使用工作邮箱注册第三方网站和业务，且邮箱服务尽量使用二步验证 。


---

而其他方面，就应该是 Product 和 UX 与任一行业相遇都会有的无缝对接灵活运用了。无论身处哪一行业，基于在各行业中灵活多变的适应性，为用户和客户着想，以用户需求为导向或驱动构思产品都是常有的应有的思路。也许差异就仅在于面向大众用户还是特殊群体，面向个人用户还是企业客户了。
