Created By tecWang
#Web Storage
    1.Session Storage
        ����ʾ����
        1.1.�����ڴ�ֵ
            if(window.sessionStorage){
                sessionStorage.setItem("key1",txt_value.value);
                //sessionStorage["key1"] = txt_value.value;
            }
        1.2.��ȡ�ڴ�ֵ
            if(window.sessionStorage){
                txt_value.value = sessionStorage.getItem("key1");
                //txt_value.value = sessionStorage["key1"];
            }
    2.Local Storage
        ʹ�÷���ͬ�ϡ�
#���ߵ�����
        Session Storage���Ự���棬��ʱ���棬����ҳ�رպ�Ȼ���ա�
        Local Storage�����ػ��棬���û��棬����ҳ�رպ����ɻᱣ��������������
    ����������ҳ��
##Storage.getItem("key")��Storage["key"]
        ǰ����h5ר��Ϊ��ҳ�洢��д�ķ������Ƽ�ʹ�á�
        ȡֵ��ʱ����������ĳ��ֵ��ǰ�߷���Ϊ�գ����߷���Ϊundefined��