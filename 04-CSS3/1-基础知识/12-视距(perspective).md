Created By tecWang
####视距(perspective)

    perspective 属性定义 3D 元素距视图的距离，以像素计，用于设置透视/景深效果
    也可以理解为透视----近大远小
- 注意：
    1. 当为元素定义 perspective 属性时，其子元素会获得透视效果，而不是元素本身。
    透视效果是写在父亲身上。
    2. perspective 属性只影响 3D 转换元素。
    3. perspective取值为none或不设置，就没有真3D空间。
    4. perspective取值越小，3D效果就越明显，也就是你的眼睛越靠近真3D。
    5. perspective的值无穷大，或值为0时与取值为none效果一样。
    6. perspective属性，经常和translateZ的结合起来使用。
      
##### perspective-origin属性

        主要用来决定perspective属性的源点角度。它实际上设置了X轴和Y轴位置，
    在该位置观看者好像在观看该元素的子元素。  灭点   消失点
- 注意：
       1. 该属性的默认值为“50% 50%”(也就是center)
       2. perspective-origin属性必须定义父元素上
