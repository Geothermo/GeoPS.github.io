# CREATE A NEW CALCULATION TASK

Click the menu of File-> New Task to open the Task Creation window, or open an existing task file though “Open task” menu.
![](/img/Help/Main_menu0.png)

Some examples can be gotten from the example Combobox in the task creation window.

For create a new task, the first step is to select a type of calculation (include P-T, P-X, T-X, X-X and Line) .

## 2D phase diagram--pseudosection
Including P-T, P-X, T-X and  X-X diagrams.

* Set the temperature and pressure range for calculation. The units are K and bar.

* Select the dataset version and a-x models.

* Input system compositions. 

        Both weight percent and molar percent are accepted, and the soft will auto convert to molar percent. 
        For P-T pseudosection, only X0 is required. 
        For P-X or T-X pseudosection, two columns of compositions (X0 and X1) are required. 
        For X-X pseudosection, three columns of compositions (X0, X1, X2) are required.
![](/img/Help/CreateTask0.png)

* Selecting solution models

* Finally, if click the button "OK", it will only create the calculated task; If click the button “Start Run”, it will create the task and start to calculate. And then, the result will be displayed on the main interface.



## 1D phase equilibrium: Phase equilibrium calculation along a P-T path

* Select：Line

* set P-T path, through add a series of PT point to represent the P-T path.

* set the number of steps, more steps, More refined results and will take more time.

* select mode. There are two modes can be selected: The equilibrium mode means that the system is closed and equilibrium; the fractionation mode means that some phase will partially or totally loss during evolution along the P-T path.

![](/img/Help/1d1.jpg)  

* If fractionation mode is selected, it is necessary to set the separation phase, which can be set as the Phase name, solution model name or mineral name. For example, free water is "H2O", melt can set as "liquid" or selected activity model name "melt(W)". The threshold and remain value determine when and how much of the phase is lost.

![](/img/Help/1d_frac.jpg)



