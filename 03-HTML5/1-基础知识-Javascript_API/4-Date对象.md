#���ڶ���(Date)
##����
    var date = new Date();
        //Ҳ������new�����ڶ����ڼ���ʱ��õ�ָ��ʱ�䡣
##ʹ��
    1.�õ�������(ms)(32��ϵͳ�����ú��������68��.)��
        //��õ��Ǵ�1970��1��1�յ����ڵĺ�����
        1.����1��( �ᳫʹ�á�������Ҫ��������)
            var date = new Date();
                date.getTime();
                date.valueOf();
                getMilliseconds();
        2.����2��(��ֱ��ʹ�ã�����Ҫ��������)
            console.log(Date().now())
            console.log(+new Date())
    2.��ȡʱ�䵥Ԫ(��,��,��,ʱ,��,��)
        getDate();  //��ȡ��[1-31]
        getDay();   //��ȡ����[0-6]
        getMonth(); //��ȡ�·�[0-11]
        getFullYear();  //��ȡ�������
        getHours(); //��ȡСʱ[0-23]
        getMinutes():   //��ȡ����[0-59]
    3.��ȡ��ʱ����ʱ�����������
        1.toLocaleTimeString();
            �ѱ���ʱ��ת��Ϊ�ַ���
        2.toLocaleDateString();
            �ѱ�������ת��Ϊ�ַ���
        ע�⣺Locale����Local����Ҫƴд����
            