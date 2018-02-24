/**
 * Created by codeMaker on 2017/2/2.
 */
var data = [
    {
        name:'°×Ñò×ù',
        time:'3.21-4.19'
    }
    ,{
        name:'½ðÅ£×ù',
        time:'4.20-5.20'
    }
    ,{
        name:'Ë«×Ó×ù',
        time:'5.21-6.21'
    }
    ,{
        name:'¾ÞÐ·×ù',
        time:'6.22-7.22'
    }
    ,{
        name:'Ê¨×Ó×ù',
        time:'7.23-8.22'
    }
    ,{
        name:'´¦Å®×ù',
        time:'8.23-9.22'
    }
    ,{
        name:'Ìì³Ó×ù',
        time:'9.23-10.23'
    }
    ,{
        name:'ÌìÐ«×ù',
        time:'10.24-11.22'
    }
    ,{
        name:'ÉäÊÖ×ù',
        time:'11.23-12.21'
    }
    ,{
        name:'Ä¦ôÉ×ù',
        time:'12.22-1.19'
    }
    ,{
        name:'Ë®Æ¿×ù',
        time:'1.20-2.18'
    }
    ,{
        name:'Ë«Óã×ù',
        time:'2.19-3.20'
    }
];


for(var x = 0; x < data.length; x++){
    new Xingzuo(data[x],x).init();
}