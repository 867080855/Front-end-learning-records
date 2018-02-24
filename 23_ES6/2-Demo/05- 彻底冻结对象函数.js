var constantize = (obj) => {
    Object.freeze(obj);
    Object.keys(obj).forEach((key,value) => {
        if(typeof obj.key === 'object'){
            constantize(obj[key]);  // 递归调用
        }   // 如果 obj 里边还有对象的话一起冻结掉
    });
}