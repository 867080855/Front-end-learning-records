/**
 * Created by lenovo on 2017/3/11.
 */
// 由于appcan是基于zepto开发的，所以此处也会引入zepto文件，但是appcan中不需要，自带。。。
// 用于首页list的引入
function CreateList_index (option){
    this.id = option.id || 'work_detail';
    this.bg = option.bg || '#fff';
    this.data = option.data;
    this.init();
}
CreateList_index.prototype = {
    init:function () {
    	alert('js:100')
        // 处理id
        var id = this.birthId(this.id);
        // 创建并插入预制组件
        this.insert(id,this.create(this.data));
    },
    birthId:function (id) {
         var query = '#' + id;
         return query;
    },
    create:function (data) {
        /*定义组件字符串*/
        var tags = data.tag_cn.split(',');
        var leng=0;
        if(tags.length>3){
           leng=3;
           
        }else{
           leng=tags.length;
        }
        var srce='';
        for (var i=0; i <leng; i++) {
          // alert(tags[i]);
         srce+='<span id="" class="umar-r" style="display: inline-block;border:1px solid #5cb7e6;color:#5cb7e6;font-weight: 500;">'+tags[i]+'</span>';
       };
       
       
       
        var result = '';
        // 立即执行函数，只是为了可以点击折叠按钮而已，没有实际功能。里边放置的是result(职位详细信息字符串)
        (function(data){
            // result += '<a href="http://www.zhizhaojob.cn">';
            result += '<div class="ub c-gra ubb b-bla umh5 uinn-my" style="border-top:none;" data-id="3"'+ 'id="'+data.jid +'"; onclick="goLink('+data.jid+',this)">';
            // 图片
            result += '<div class="ub-f3 ub" style="width:29%">';
            result += '<div id="" class="ub-f1 ub uinn3 uc-a" style="padding:0.4em;">';
            result += '<div class="ub-img1 ub ub-f1 uc-a" style="background-image: url(' + 'http://www.zhizhaojob.cn/'+data.logo + ');"></div>';
            result += '</div>';
            result += '</div>';

            // 详细信息(循环后小标签会出现问题，失去间距)
            result += '<div class="ub-f4 " style="width:71%">';
            result += '<div class="b-gra c-wh" >';
            // 第一行
            result += '<div ontouchstart="zy_touch('+'btn-act'+')" class="ub  b-gra t-bla ub-ac  umh7">';
            result += '<div class="ub-f1 ut-s" style="font-weight:700;">'+data.jobs_name+'</div>';
            result += '</div>';
            // 第二行
            result += '<div ontouchstart="zy_touch('+'btn-act'+')" class="ub b-gra t-bla ub-ac  umh7" style="position: relative;">';
            result += '<div class="ub-f1 ut-s">'+data.category_cn+'</div>';
            result += '<div class="tx-r t-blu" style="color:#ff7113;font-size:1.5em;position:absolute;right:0;top:0;">'+data.minwage+'-'+data.maxwage+'元</div>';
            result += '</div>';
            // 第三行
            result += '<div ontouchstart="zy_touch('+'btn-act'+')" class="uc-b ub t-bla ub-ac  umh7" style="position:relative;">';
            result += '<div class="ub-f1 ut-s">';
            result += srce;
                    //result += '<span id="" class="umar-r" style="display: inline-block;border:1px solid #5cb7e6;color:#5cb7e6;font-weight: 500;">恒温车间</span>';
                    //result += '<span id="" class="umar-r" style="display: inline-block;border:1px solid #5cb7e6;color:#5cb7e6;font-weight: 500;">五险</span>';
                    //result += '<span id="" class="umar-r" style="display: inline-block;border:1px solid #5cb7e6;color:#5cb7e6;font-weight: 500;">有福利</span>';
                result += '</div>';
                    result += '<div class="tx-r t-blu ulev-1 umh7" style="position: absolute;right:0;bottom:0;">'+data.district_cn+'</div>';
            result += '</div>';
            result += '</div>';
            result += '</div>';
            result += '</div>';
            // result += '</a>' 
        })(data);
        return result;
    },
    insert:function (id,result) {
        document.querySelector(id).innerHTML(result);
    },
    css:function (id) {
        if(this.bg){
            $(id).css({
                background : this.bg
            });
        }
    }
};


// 用于动态创建筛选框
function CreateOptionlist(option){  
    this.id=option.id; 
    this.length = option.length || 0;
    this.data=option.data;
    this.init();  
}
CreateOptionlist.prototype={
    init:function () {
         this.insert(this.id,this.create(this.data,this.length,this.id));
         this.addlis(this.id);
    },
    
    create:function (data,length,id) {
            switch(id){
                case '#welfare' :{
                    var result = '';
                    (function(data,length){
                        for(var x = 0; x < length; x++){
                            result += ' <option data-id="'+x+'" value=" ' + data[x].c_id +  ' "> ' + data[x].c_name + '</option>' 
                        }  
                    })(data,length);
                    return result;
                    
                    break;
                }
                case '#xinzi' : {
                    var result = '';
                    (function(data,length){
                        for(var x = 0; x < length; x++){
                            result += ' <option data-id="'+x+'" value=" ' + data[x].c_id +  ' "> ' + data[x].c_name + '</option>' 
                        }  
                    })(data,length);
                    return result;
                    break;
                }
                case '#zhiwei' : {
                    var result = '';
                    (function(data,length){
                        for(var x = 0; x < length; x++){
                            result += ' <option data-id="'+x+'" value=" ' + data[x].id +  ' "> ' + data[x].categoryname + '</option>' 
                        }  
                    })(data,length);
                    return result;
                    break;
            }
        }
    },
    
    insert:function (id,result) {
        var id = document.querySelector(id);
        console.log(id);
        $(id).append(result);  
    }, 
    addlis:function(id){
        var id2 = document.querySelector(id);
        $(id2).on('change',function(){
            for(var x = 0; x < id2.children.length; x++){
                if (id2.children[x].selected== true ) {
                    var text=id2.children[x].innerHTML;//获取当前选择项的 值 .
                    id2.parentNode.children[0].innerHTML = text;
                }
            }
        });
    }
};




























