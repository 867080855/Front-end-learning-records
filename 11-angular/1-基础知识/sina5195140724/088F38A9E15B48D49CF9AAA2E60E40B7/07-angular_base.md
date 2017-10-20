## angular基础知识
- 注册模块
    ```
    angular.module('myApp',[]);
    
    // 返回值：返回刚刚创建的模块对象。
    
    var app = angular.module('myApp',[]);
    ```
    + 两个参数：
        + 模块的名字
        + 模块所以来的别的模块，如果不依赖任何模块，可以为空
    + angular.module方法传递两个参数才是创建模块，一个参数是调用模块
- 创建控制器
    ```
    app.controller('DemoCtrl',function( $scope ){     
        // 控制器执行时自动执行的函数   
        
        $scope.user = '张三';
        
        $scope.show = function (){
            // 函数体
        }
        
        // $scope不仅仅可以暴露数据，还可以暴露行为
        
    });  //app是上文创建模块的返回值。
    ```
    + 控制器必须出现在某个模块下，想创建一个控制器就必须先创建一个模块
    + angular在执行控制器函数时，会根据参数的名字($scope)去自动注入书写的对象
    + 注入对象时，根据参数的名称注入对象。所以一定要注意名字不写错
    + 由于js压缩代码时，有js标识符混淆的处理操作，会导致控制器执行函数中的$scope被替换成别的标识符，导致文件无法正常运行。所以可以采用以下方法进行控制器定义
        ```
            app.controller('DemoCtrl',['$scope','$http',function(a,b){
                // 内容体
                $scope.info = {
    				name:'admin',
    				pass:'admin'
    			};
                
                console.log(a); // $scope
                
                console.log(b); // $http
            }]);
        ```
- $watch 
    + 主要负责$scope的值变化的检测
        ```
            $scope.$watch("info.name",function(now,new){
                // 每一次值变化时，变化如下
                
                console.log("now is " + now);   // now is admins
				console.log("old is " + old);   // old is admin
            });
        ```