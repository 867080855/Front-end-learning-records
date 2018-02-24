// PubSub (Publish Subscribe) 感觉像是一个路由器什么的东西
/* 
    Events = {
        event: {
            'change',[Handler1,Handler2,...],
            'add',[Handler1,Handler2,...],
            ...
        },
        on : fn,
        off: fn,
        emit: fn
    }
*/
var Events = {
    events: {},
    on: function(eventName,fn){ // bind fn
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(fn);
    },
    off: function(eventName,fn){ // unbind fn
        if(this.events[eventName]){
            for(var i = 0; i < this.events[eventName].length; i++){
                if(this.events[eventName][i] === fn){
                    this.events[eventName].splice(i,1);
                    break;
                };
            }
        };
    },
    emit: function(eventName,data){
        if(this.events[eventName]){
            this.events[eventName].forEach(function(fn) {
                fn(data);
            });
        }
    }
};