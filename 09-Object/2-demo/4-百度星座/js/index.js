/**
 * Created by codeMaker on 2017/2/2.
 */
var data = [
    {
        name:'������',
        time:'3.21-4.19'
    }
    ,{
        name:'��ţ��',
        time:'4.20-5.20'
    }
    ,{
        name:'˫����',
        time:'5.21-6.21'
    }
    ,{
        name:'��з��',
        time:'6.22-7.22'
    }
    ,{
        name:'ʨ����',
        time:'7.23-8.22'
    }
    ,{
        name:'��Ů��',
        time:'8.23-9.22'
    }
    ,{
        name:'�����',
        time:'9.23-10.23'
    }
    ,{
        name:'��Ы��',
        time:'10.24-11.22'
    }
    ,{
        name:'������',
        time:'11.23-12.21'
    }
    ,{
        name:'Ħ����',
        time:'12.22-1.19'
    }
    ,{
        name:'ˮƿ��',
        time:'1.20-2.18'
    }
    ,{
        name:'˫����',
        time:'2.19-3.20'
    }
];


for(var x = 0; x < data.length; x++){
    new Xingzuo(data[x],x).init();
}