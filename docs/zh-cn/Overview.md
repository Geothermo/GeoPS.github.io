# GeoPS是什么？

&emsp;&emsp; 热力学相平衡是定量化研究深部地质过程的关键手段。可以对变质和岩浆作用进行定量正演模拟计算，预测不同条件下的稳定矿物组合、成分以及元素分配行为以及各种物理化学性质，是确定变质P-T条件及演化轨迹的主要方法。

&emsp;&emsp; GeoPS是一款免费的、开源的可视化相平衡模拟软件。基于Gibbs自由能最小法，视窗操作程序，界面友好，无需学习就可计算相图。具有：

* &emsp;&emsp; 不断丰富和完善的功能。实现计算各种复杂体系下岩石的P-T、P-X、T-X和X-X视剖面图，以及矿物含量或成分等值线等图件。更多新功能正在开发中。

* &emsp;&emsp; 所见即所得的可视化计算。友好的图形界面、极低的学习和使用成本，使任何有需求的地学研究人员都可以轻松实现以前只有少数人掌握的岩石相平衡模拟计算。计算过程全自动化，只需输入全岩成分，一键完成。对于高级用户，也可以对各种参数自定义设置，实现个性化计算。

* &emsp;&emsp; 无与伦比的计算效率，即使是复杂体系下的平衡相图计算结果也是立等可取。

&emsp;&emsp; 为了使GeoPS更好地发展，给大家提供更加丰富而强大的功能，更优的使用体验，为攀登科学高峰阻力，欢迎贡献您的力量，提供建议、报告bug，修复Bug，功能开发等待。招募自愿者，包括但不限于核心开发组、应用拓展组、文档编辑组、网络维护组。

# 到底有多快？ 没比较就没伤害

&emsp;&emsp; 精心设计的架构和数据结构+高效的算法+并行计算，造就非凡的计算效率。在数分钟内就可以完成复杂体系下的岩石相图计算，计算速度比同类软件快1~2个数量级。

&emsp;&emsp; 测试设备：Dell XPS-15 笔记本电脑，CPU i7-6700HQ 2.6GHz, 16G内存， Windows10 ×64 家庭版

|<div style="width: 60pt"> 图                          |<div style="width: 60pt"> GeoPS   <br> 1 thread|<div style="width: 60pt"> GeoPS   <br> 4 threads    | Perple_X <br> v6.8.6 | Domino     | 备注 |
| :-----------------------    | :-------------------------- | :----:  | :----:               | :----:     | :----: |
| BL487 <br> Green 2016 Fig.9 | 8m30s; <Br>Pre:<1m | 3m25s <Br> Pre：<30s  | ~17h                | 2h57m      | Perple_X 中initial_resolution设为 1/8 1/16，其余为默认设置。<br>[查看计算结果](./RST/bl487.html)|
|White 2014 Fig.9a            |20m05s; <Br>Pre:<1m | 5m1s <Br> Pre：<30s    |1h23m                | 1h31m22.34s |Perple_X 中initial_resolution设为 1/10 1/20，其余为默认设置。<br>[查看计算结果](./RST/W14f9a.html)|
|KLB-1 <br>J&H 2015 Fig.1     |8m01s; <Br>Pre:<1m  | 1m51s <Br> Pre：<20s  |     |       |     |
| BL487 <br> Without solutions | 22s; <Br>Pre:3s | 20s <Br> Pre：<3s  | 2s                |       | Perple_X 默认设置。<br>[查看计算结果](./RST/bl487_No_Sol.html)|

	  Pre: 初步结果；
	  Perple_X和Theriak-Domino的时间仅包含计算时间，不包括作图时间；GeoPS的时间包括计算和绘图。
	  Theriak-Domino 采用的是D.K. Tinkham版本，来自： http://dtinkham.net/peq.html 
	  Perple_X 版本6.8.6， 来自其官网：http://www.perplex.ethz.ch/。更新版的Perple_X的计算速度似乎更慢，所以继续使用了该版本。
	  Perple_X使用默认设置时，提示 “**error ver041** too many pseudocompounds, routine: SUBDIV”。
	  因此将perplex_option.dat 中的initial_resolution尝试改为小，以解决此错误。



# 结果可靠性：可与THERMOCALC计算结果一致

&emsp;&emsp; 为了验证GeoPS计算结果的可靠性，对已发表文献中利用THERMOCLAC计算的相图进行对比。结果显示，在使用相同的数据库和活度模型的情况下，GeoPS计算结果与THERMOCALC的结果一致。

## 长英质岩计算结果比较（MNNCKFMASHTO体系）

&emsp;&emsp;  MnNCKFMASHTO体系下，GeoPS计算结果与THERMOCALC比较采用White et al., 2014中的Fig. 9。左图为White 2014中的Fig. 9，右图为GeoPS计算结果。

&emsp;&emsp;  两者计算结果在绝大部分区域完全一致，只是GeoPS计算出的Gt稳定线的压力略低。这是由于Gt的a-x活度模型差异导致。GeoPS采用的是现在THERMOCALC中推荐的Gt活度模型，该模型与White 2104原文中的模型有些差异。如果采用与White 2014原文中的Gt石榴石活度模型，则Gt的稳定线完全一致。
![](/img/Help/W2014MnF9.jpg)

## 基性岩计算结果比较（NCKFMASHTO体系下Green 2016的活度模型）

&emsp;&emsp; MnNCKFMASHTO体系下，GeoPS计算结果与THERMOCALC比较采用Green et al., 2014中的Fig. 9。左图为THERMOCALC计算结果，右图为GeoPS计算结果。

&emsp;&emsp; 两者计算结果在绝大部分区域完全一致，只是在左下角相边界不够规则和平滑。
![](/img/Help/BL487.jpg)

## 超基性岩计算结果比较 （ NCFMASOCR体系下的Jennings & Holland 2015 的活度模型）

&emsp;&emsp; 左图为Jennings and Holland 2015中的Fig.1 ，右图为GeoPS计算结果，两者基本一致。GeoPS计算中采用了与原文中相同的全岩成分和活度模型。
![](/img/Help/KLB-JH2015c.jpg)

# 极低的学习和使用成本
&emsp;&emsp; 即使没有相平衡模拟的基础，用户也可以在数分钟内完成相平衡模拟计算。
软件的获取、安装简便，直接重网站就可以打开运行，输入全岩成分后，一键完成相图计算，且随时能看到各阶段的计算结果。
![](/img/Help/GeoPS_Demo.gif)

