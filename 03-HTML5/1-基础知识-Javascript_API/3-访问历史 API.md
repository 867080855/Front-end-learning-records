#������ʷ
    �����������js�����ǲ��ᱻ�������¼�ġ��ʶ���Ҫ��취��ĳЩ�¼�����
    �����ҷ�ӳ������
##������
    1.window.history.go(url);
        //url��д��ʾΪˢ�£�����Ϊ��ת
    2.window.history.forward();
        //ǰ��
    3.window.history.back();
        //����
    4.window.history.pushState();
        //��url��Ӳ�����
        �μ��廷֮�衢������ʷ��pushState-demo.html
        
##֪ʶ��
    1.��������α��ķ�����ʷ��ǰ�������ʱ������ִ��һ���¼�(popstate)��
        //����ͨ����Ӽ�����ǰ������ʱ����һ�������ﵽ��ҳͬ��
        var con = document.querySelector("#content");
        window.addEventListener("popstate", function (e) {
            con.innerHTML = data[e.state];
        });