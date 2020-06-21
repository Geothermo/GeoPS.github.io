import React from 'react';

export default {
  'zh-cn': {
    brand: {
      brandName: 'GeoPS：Geo - Phase equilibria Simulator',
      briefIntroduction: '一款超高效的可视化相平衡模拟计算软件。',
      briefIntroduction2: '使岩石相平衡模拟不再是一个技术门槛，让有需求的人都自己都可以轻松高效地完成岩石相平衡模拟。',
      briefIntroduction3: '软件仅支持windows x64系统，需.net framework 4.5及以上版本支持',
      buttons: [
        {
          text: '立即开始',
          link: '/publish/GeoPS.application',
          type: 'primary',
        },
        {
          text: '下载安装',
          link: '/publish/setup.exe',
          type: 'normal',
        },
      ],      
    },
    introduction: {
      title: '什么是GeoPS',
      desc: '热力学相平衡是定量化研究深部地质过程的关键手段。可以对变质和岩浆作用进行定量正演模拟计算，预测不同条件下的稳定矿物组合、成分以及元素分配行为以及各种物理化学性质，是确定变质P-T条件及演化轨迹的主要方法。GeoPS一款免费开源的基于Gibbs自由能最小法的相平衡模拟软件。具有：',
      desc1:'不断丰富和完善的功能。实现计算各种复杂体系下岩石的P-T、P-X、T-X和X-X视剖面图，以及矿物含量或成分等值线等图件。',
      desc2:'所见即所得的可视化计算。友好的图形界面、极低的学习和使用成本，使任何有需求的地学研究人员都可以轻松实现以前只有少数人掌握的岩石相平衡模拟计算。',
      desc3:'无与伦比的计算效率，即使是复杂体系下的平衡相图计算结果也是立等可取。',
      img: '/img/geops_gui.jpg',
      button: {
        text: '阅读更多',
        link: '/zh-cn/docs/rst/overview.html',
      },
    },
    features: {
      title: '特性一览',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: '使用简单',
          content: '视窗操作程序，界面友好，无需学习就可计算相图。计算过程全自动化，只需输入全岩成分，一键完成。对于高级用户，也可以对各种参数自定义设置，实现个性化计算。',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: '结果可靠',
          content: '计算结果准确可靠。在使用相同的矿物热力学数据和活度模型，计算结果与Perple_X、THERMOCALC等软件一致。且根据需要，计算精度可调（包括成分和P-T空间分辨率）',
        },
        {
          img: '/img/feature_service.png',
          title: '计算高效',
          content: '精心设计的架构和数据结构+高效的算法+并行计算，造就非凡的计算效率。在数分钟内就可以完成复杂体系下的岩石相图计算，计算速度比同类软件快1~2个数量级。',
        },
        {
          img: '/img/feature_hogh.png',
          title: '一站式解决方案',
          content: '计算工作的建立、参数设置、计算、结果处理和显示、各种等值线计算的等所有功能在统一软件界面下无缝完成。我们的目标是提高使用者的工作效率，追求极致的用户体验。',
        },
        {
          img: '/img/feature_runtime.png',
          title: '可视化计算',
          content: '计算过程和结果完全可视化，实现了所见即所得。计算过程中的初步结果也及时通过图形显示，消除使用者等待过程中的焦虑感，让用户可以随时了解计算的进度，并可以根据结果选择终止计算，以节约时间。',
        },
        {
          img: '/img/feature_maintenance.png',
          title: '结果输出多样化',
          content: '计算结果中的相图、等值线图等通过矢量图显示、并可输出为SVG格式的，可使用浏览器、Coredraw等常用软件打开和编辑，无需人工重绘。',
        },
      ],
    },
    start: {
      title: '快速开始',
      desc1: <li>点击”立即开始”，获取和打开应用程序。</li>,
      desc2: <li>文件->新建任务 菜单打开创建任务窗口,输入全岩成分、设置温压范围，点击Start run。</li>,
      desc3: <li>计算过程和结果全程可视化， 很快可以看到初步的计算结果，且不断更新。计算完成后可通过“计算等值线”菜单来计算各种等值线。</li>,
      desc4: <li>保存结果，各种相图和等值线图，以及格式化输出结果数据。</li>,
      img: '/img/GeoPS_Demo1.gif',
      button: {
        text: '阅读更多',
        link: '/zh-cn/docs/Instruction/start.html',
      },
    },
    users: {
      title: '用户',
      desc: <span>简单描述</span>,
      list: [
        '/img/log/cau.jfif', 
        '/img/log/cgu.jpg', 
        '/img/log/ecut.jpg', 
        '/img/log/gtgcas.jpg', 
        '/img/log/hfut.jpg', 
        '/img/log/hgu.jpg', 
        '/img/log/igcags.jfif', 
        '/img/log/igcas.jfif', 
        '/img/log/iggcas.jpg', 
        '/img/log/jlu.jpg',   
        '/img/log/nju.jpg', 
        '/img/log/nwu.jpg', 
        '/img/log/pk.jpg', 
        '/img/log/sust.jpg', 
        '/img/log/syu.jpg', 
        '/img/log/ucas.jfif', 
        '/img/log/ustc.jpg', 
        '/img/log/zju.jpg', 
      ],
    },
  },
  'en-us': {
    brand: {
      brandName: 'GeoPS：Geo - Phase equilibria Simulator',
      briefIntroduction: 'A high performance visualization program for phase equilibria modelling base on Gibbs free energy minimization method.',
      briefIntroduction2: 'To make phase equilibria modelling is accessible to anyone in need',
      briefIntroduction3: 'It requires Windows x64 OS with .net framework 4.5 or later',
      buttons: [
        {
          text: 'Start Run',
          link: '/publish/GeoPS.application',
          type: 'primary',
        },
        {
          text: 'Download Setup',
          link: '/publish/setup.exe',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: 'It’s time to expect more',
      desc: 'World-class performance with more facility, more productivity, and more value while you simulate phase equilibria',
      desc3: 'GeoPS provides a wide range of phase equilibria calculations and illustration facilities base on Gibbs free energy minimization method, which are done automatically with practically no user intervention. The applications include calculation various type of phase diagrams, isopleths, and thermodynamic modelling for path-dependent open system processes, such as fluid and melt loss, and chemical fractionation during compositionally zoned minerals growth in a metamorphic process. ',
      desc1: 'A user-friendly visual computing tool, what you wee is what you get.',
      desc2: 'With much higher efficiency，you can get results while you wait.',

      img: '/img/GeoPS_GUI.jpg',
      button: {
        text: 'READ MORE',
        link: '/en-us/docs/rst/overview.html',
      },
    },
    features: {
      title: 'Why GeoPS?',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: 'EASY To Use',
          content: 'The calculations are done automatically with practically no user intervention. During calculating phase diagram, it is Only necessary to input bulk compositions and P-T range. For senior users, also are allowed to change various parameters to achieve personalized calculation.',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: 'RELIABLE Results',
          content: 'If using the same thermodynamic dataset and Solution models, the phase diagrams calculated by GeoPS are consistent with that calculated by THERMOCALC',
        },
        {
          img: '/img/feature_service.png',
          title: 'HIGH Efficiency',
          content: 'In a few minutes, it can finish a phase diagram calculation in a complex system. The well-designed architecture, algorithm and multi-threading parallel computing create extraordinary computing efficiency. Compared with the other related software, its speed is much faster.',
        },
        {
          img: '/img/feature_hogh.png',
          title: 'VISUALIZATION Computing',
          content: 'Through the visualization of computing process, the preliminary results will be timely displayed on the soft interface during computing. Hence, the user is allowed to see and deal the preliminary results, acquaint the progress of the calculation and also can stop the calculation if required.',
        },
        {
          img: '/img/feature_runtime.png',
          title: 'ONE-STOP Solution',
          content: 'Seamless integration of fully functions, including creating task, computing, calculating isopleths, visualization of calculated results, graph display and modification, interactive data display, etc. It is an important goal to provides highly efficient and smooth user experience and make user enjoy thermodynamic simulation.',
        },
        {
          img: '/img/feature_maintenance.png',
          title: 'OUTPUT To Multiple Formats',
          content: 'GeoPS can create high-quality and ready-to-use vector graphics (SVG format), and also can output bitmap formats figures, such as JPEG and BMP. The calculated results, including assemblages, mode and compositions of phases, etc., can output in CSV format which can be analyzed directly in excel.',
        }
      ]
    },
    start: {
      title: 'Quick start',
      desc1: <li>This soft can be directly open on this website through click the button of “Start Run"</li>,
      desc2: <li>Click the menu of File-> New Task to open the Task Creation window, Select the dataset version and a-x models, Input bulk compositions,set the P-T range, and then start calculating.</li>,
      desc3: <li>The preliminary results will be displayed on the main interface after few seconds to minutes.Some isoplethes can be calculated and displayed on the main interface after the calculation of the pseudosection is finished.</li>,
      desc4: <li>save the pseudosections and isopleths, export the calculated results to a excel file</li>,
      img: '/img/GeoPS_Demo1.gif',
      button: {
        text: 'READ MORE',
        link: '/en-us/docs/Instruction/start.html',
      },
    },
    users: {
      title: 'users',
      desc: <span>some description</span>,
      list: [
        '/img/log/cau.jfif', 
        '/img/log/cgu.jpg', 
        '/img/log/ecut.jpg', 
        '/img/log/gtgcas.jpg', 
        '/img/log/hfut.jpg', 
        '/img/log/hgu.jpg', 
        '/img/log/igcags.jfif', 
        '/img/log/igcas.jfif', 
        '/img/log/iggcas.jpg', 
        '/img/log/jlu.jpg',   
        '/img/log/nju.jpg', 
        '/img/log/nwu.jpg', 
        '/img/log/pk.jpg', 
        '/img/log/sust.jpg', 
        '/img/log/syu.jpg', 
        '/img/log/ucas.jfif', 
        '/img/log/ustc.jpg', 
        '/img/log/zju.jpg', 

        
      ],
    },
  },
};
