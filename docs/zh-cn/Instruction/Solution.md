# 更改和自定义活度模型

通过“设置-》活度模型” 菜单打开活度模型设置窗口。

## 导入活度模型：

    可通过Import菜单下的菜单导入活度模型

    Import a solution、导入单个活度模型

    Import solutions、导入包含多个活度模型的文件

    Import files、导入文件夹中的所有单个活度模型文件

## 保存活度模型：

    Save菜单下的菜单实现保存和另存。

    Save：保存默认活度模型文件；

    Save As：活度模型文件另存为指定文件；

    This model Save as：当前编辑的活度模型保存为指定文件；

    Save selected：所选择的活度模型另存为指定文件。

## 修改模型：

    选择打开要修改的活度模型，在窗口中对各相参数进行修改。

    在endmenber选项卡中编辑模型所包含的端元信息。其中：

        ID为序号，从0开始；

        Name 必填；

        index 不用填，系统会根据数据自动查找。

        EndMake 为端元的组成公式，由系数 端元名称构成，支持多个端元的加减法，如下图。

        Min、Max 选填，为端元含量范围；

        dH、dS、 dV为端元的DQF值、 alpha为非对称模型中的van laar参数。
![](/img/Help/solutionModel.jpg)

在Site选项卡中编辑离子占位信息.
![](/img/Help/solutionModel2.jpg)

在Interaction energy 选项卡中编辑Interaction energy信息.
![](/img/Help/solutionModel3.jpg)

编辑完成后，点击 “Apply”按钮确认所做的编辑。再及时保存活度模型文件。

 

## 新建活度模型：

点击“Add New”菜单，当前显示的模型作为一个新的模型加入到活度模型列表中，然后可以开始编辑修改模型的相关信息，再确认和保存。

 

## 删除活度模型：

在列表中勾选要删除的模型，然后点击“Del” 按钮删除。“Clear”按钮将清除所有打开的活度模型。

 