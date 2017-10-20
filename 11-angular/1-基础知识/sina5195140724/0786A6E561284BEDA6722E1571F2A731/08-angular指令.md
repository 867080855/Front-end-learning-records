## angular指令
- ng-cloak
    + 目的：解决angular执行过程中不能立刻绑定数据
    + ng-cloak会在angular执行后自动移除
    + ng-cloak的效果并没有太好，需要自己加上如下的代码
        ```
        [ng-clock] ，
        .ng-cloak {
            display : none;
        }
        
        ```
    
