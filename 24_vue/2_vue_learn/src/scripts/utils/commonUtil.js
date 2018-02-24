let commonUtil = {
    //把*.string渲染到html
    render(str){
        let container = document.querySelector('#football-container');
        container.innerHTML = str + container.innerHTML;
    }
};

export default commonUtil;