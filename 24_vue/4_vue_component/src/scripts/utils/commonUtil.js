let commonUtil = {
    //把*.string渲染到 html 指定的容器内
    render(containerName,str){
        let container = document.querySelector(containerName);
        container.innerHTML = str + container.innerHTML;
    }
};

export default commonUtil;