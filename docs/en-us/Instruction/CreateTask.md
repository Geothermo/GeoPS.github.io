# CREATE A NEW CALCULATION TASK

Click the menu of File-> New Task to open the Task Creation window, or open an existing task file though “Open task” menu.
![](../img/Help/Main_menu0.png)

Some examples can be gotten from the example Combobox in the task creation window.

For create a new task, the first step is to select a type of calculation (include P-T, P-X, T-X, X-X and Line) .

Then, set the temperature and pressure range for calculation. The units used are K and bar.

Select the dataset version and a-x models.

Input system compositions. Both weight percent and molar percent are accepted, and the soft will auto convert to molar percent. For P-T pseudosection, only X0 is required. For P-X or T-X pseudosection, two columns of compositions (X0 and X1) are required. For X-X pseudosection, three columns of compositions (X0, X1, X2) are required.
![](../img/Help/CreateTask0.png)
Finally, if click the button "OK", it will only create the calculated task; If click the button “Start Run”, it will create the task and start to calculate. And then, the result will be displayed on the main interface.

选择a-x 模型，默认包含了泥质岩中常用的White 2014 JMG中的矿物模型。在活度模型列表中可以勾选所需要的模型。绝大多数模型的命名与Perple_X中的名称一致。如果不确定某种矿物在所计算的P-T-X空间内（不是实际样品中）是否稳定，可以多选。选多了，只会导致开始时的计算速度变慢，如果选少了，则会导致可能稳定的矿物不会出现。 注意：同种矿物只选一个模型即可。

## 1D相图——沿P-T轨迹计算相平衡

选择类型：Line

设置P-T轨迹节点：P-T轨迹是通过一系列P-T点相连的折线来表示。可以添加多个点。

设置计算的步数，步数越多，越精细但计算时间越长。

选择模式：平衡模式/分离模式。平衡模式是体系封闭，没有物质的加入和丢失；而分离模式，为开发体系，当指定相含量超过给定的阈值时，发生部分或全部丢失。

当为分离模式时，需设置分离相（Phase），可设置为端元名称、溶体模型名称或矿物名称，例如自由水为“H2O”、溶体可以为“liquid” 或选用的活度模型名称“melt(G)”。并设分离相的丢失阈值（Threshold）和残留量（Remain），使分离相超过阈值时发生丢失，并允许残留一定量。
![](../img/Help/1d1.jpg)  ![](../img/Help/1d_frac.jpg)



