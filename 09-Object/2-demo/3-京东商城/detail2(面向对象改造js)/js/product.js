/**
 * Created by codeMaker on 2017/1/30.
 */
function Product(){
    // 属性：名称 价格
    this.name = 'sss';
    this.price = 34;

    this.image = [{small:'',big:''},{small:'',big:''},{small:'',big:''}];
}
Product.prototype = {
    bindBasic: function () {
        $('#pname').html(this.name);
        $('#groupPrice').html(this.price);
    },
    bindImageOld: function () {
        var str = '';
        var self = this;
        for(var x = 0; x < this.image.length; x++){
            str += '<li>';
                str += '<img class="etalage_thumb_image" class="img-responsive" src="'+self.image[x].small+'" />';
                str += '<img class="etalage_source_image" class="img-responsive" src="'+self.image[x].big+'"  />';
            str += '</li>';
            console.log(self.image[x]);
        }
        $('#etalage').html(str)
                    // 没有这个代码，图片无法正确执行。
                    // 而且这个方法貌似放在onload里边也没法执行？
                        // 不是的。网上有放在ready里边执行成功的。
                    .etalage({
                        thumb_image_width: 300,
                        thumb_image_height: 400,
                        source_image_width: 900,
                        source_image_height: 1200,
                        click_callback: function(image_anchor, instance_id){
                            alert('Callback example:\nYou clicked on an image with the anchor: "'+image_anchor+'"\n(in Etalage instance: "'+instance_id+'")');
                        }
                    });

        console.log('done');
    },
    // 使用template实现图片绑定
    bindImageOld2: function () {
        var str = '';
        str += '{{each image as value i}}';
            str += '<li>';
            str += '<img class="etalage_thumb_image" class="img-responsive" src="{{value.small}}" />';
            str += '<img class="etalage_source_image" class="img-responsive" src="{{value.big}}"  />';
            str += '</li>';
        str += '{{/each}}';
        var render = template.compile(str);
        var con = render(this);
            // this本身就是数据？
                // this.image
        $('#etalage').html(con)
            // 没有这个代码，图片无法正确执行。
            // 而且这个方法貌似放在onload里边也没法执行？
            // 不是的。网上有放在ready里边执行成功的。
            .etalage({
                thumb_image_width: 300,
                thumb_image_height: 400,
                source_image_width: 900,
                source_image_height: 1200,
                click_callback: function(image_anchor, instance_id){
                    alert('Callback example:\nYou clicked on an image with the anchor: "'+image_anchor+'"\n(in Etalage instance: "'+instance_id+'")');
                }
            });

        console.log('done');
    },
    // 使用formatString实现图片绑定
    bindImage: function () {
        var self = this;
        var str = '';
        var con = '';
        for(var x = 0; x < self.image.length; x++){
            // 第一行的str不能用+=，会导致li标签创建过多。改为=可以清空之前的内容
            str = '<li>';
                str += '<img class="etalage_thumb_image" class="img-responsive" src="@small" />';
                str += '<img class="etalage_source_image" class="img-responsive" src="@big"  />';
            str += '</li>';
            con += $$.formatString(str,self.image[x]);
        }
        // this本身就是数据？
        // this.image
        $('#etalage').html(con)
            // 没有这个代码，图片无法正确执行。
            // 而且这个方法貌似放在onload里边也没法执行？
            // 不是的。网上有放在ready里边执行成功的。
            .etalage({
                thumb_image_width: 300,
                thumb_image_height: 400,
                source_image_width: 900,
                source_image_height: 1200,
                click_callback: function(image_anchor, instance_id){
                    alert('Callback example:\nYou clicked on an image with the anchor: "'+image_anchor+'"\n(in Etalage instance: "'+instance_id+'")');
                }
            });

        console.log('done');
    }
};
