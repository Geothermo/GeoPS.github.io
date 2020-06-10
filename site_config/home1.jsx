import React from 'react';

export default {
  'zh-cn': {
    brand: {
      brandName: 'GeoPS：Geo - Phase equilibria Simulator',
      briefIntroduction: '一一款基于Gibbs自由能最小法的可视化相平衡模拟计算软件。一键式操作，可视化计算，具有极致用户体验、可靠的计算结果，用于超高的计算效率，可在数分钟之内完成复杂体系下的相平衡模拟技术。实现计算各种复杂体系下岩石的P-T、P-X、T-X和X-X视剖面图，以及矿物含量或成分等值线等图件。',
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
      title: '所见即所得',
      desc: '开源产品的简单介绍，提供一些该产品的优点、 特性描述等',
      img: '/img/architecture.png',
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
        link: '/zh-cn/docs/demo1.html',
      },
    },
    users: {
      title: '用户',
      desc: <span>简单描述</span>,
      list: [
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
      ],
    },
  },
  'en-us': {
    brand: {
      brandName: 'GeoPS：Geo - Phase equilibria Simulator',
      briefIntroduction: 'A visualization program for phase equilibria simulation base on Gibbs free energy minimization method. \n \r '  +  'It is a powerfull tool to compute equilibrium assemblages, chemical properties of each phase along given P-T-X path or grid, and create various types of phase diagrams and isopleths',
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
      title: 'What You See Is What You Get',
      desc: 'GeoPS provides a wide range of phase equilibria calculations and illustration facilities base on Gibbs free energy minimization method, which are done automatically with practically no user intervention. The applications include calculation various type of phase diagrams, isopleths, and thermodynamic modelling for path-dependent open system processes, such as fluid and melt loss, and chemical fractionation during compositionally zoned minerals growth in a metamorphic process. The visualization, friendly interactive graphical user interface makes thermodynamic modelling accessible to any researchers and students of earth sciences',
      img: '/img/GeoPS_Demo1.gif',
    },
    features: {
      title: 'Feature List',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: 'Easy To Use',
          content: 'The calculations are done automatically with practically no user intervention. During calculating phase diagram, it is Only necessary to input bulk compositions and P-T range. For senior users, also are allowed to change various parameters to achieve personalized calculation.',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: 'RELIABLE Results',
          content: 'If using the same thermodynamic dataset and Solution models, the phase diagrams calculated by GeoPS are consistent with that calculated by THERMOCALC',
        },
        {
          img: '/img/feature_service.png',
          title: 'High efficiency',
          content: 'In a few minutes, it can finish a phase diagram calculation in a complex system. The well-designed architecture, algorithm and multi-threading parallel computing create extraordinary computing efficiency. Compared with the other related software, its speed is much faster.',
        },
        {
          img: '/img/feature_hogh.png',
          title: 'VISUALIZATION COMPUTING',
          content: 'Through the visualization of computing process, the preliminary results will be timely displayed on the soft interface during computing. Hence, the user is allowed to see and deal the preliminary results, acquaint the progress of the calculation and also can stop the calculation if required.',
        },
        {
          img: '/img/feature_runtime.png',
          title: 'ONE STOP SOLUTION',
          content: 'Seamless integration of fully functions, including creating task, computing, calculating isopleths, visualization of calculated results, graph display and modification, interactive data display, etc. It is an important goal to provides highly efficient and smooth user experience and make user enjoy thermodynamic simulation.',
        },
        {
          img: '/img/feature_maintenance.png',
          title: 'SUPPORT MULTIPLE OUTPUT TYPES',
          content: 'GeoPS can create high-quality and ready-to-use vector graphics (SVG format), and also can output bitmap formats figures, such as JPEG and BMP. The calculated results, including assemblages, mode and compositions of phases, etc., can output in CSV format which can be analyzed directly in excel.',
        }
      ]
    },
    start: {
      title: 'Quick start',
      desc: 'Through the visualization of computing process, the preliminary results will be timely displayed on the soft interface during computing. Hence, the user is allowed to see and deal the preliminary results, acquaint the progress of the calculation and also can stop the calculation if required. ',
      img: '/img/GeoPS_Demo1.gif',
      button: {
        text: 'READ MORE',
        link: '/en-us/docs/demo1.html',
      },
    },
    users: {
      title: 'users',
      desc: <span>some description</span>,
      list: [
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
        '/img/users_alibaba.png',
      ],
    },
  },
};
