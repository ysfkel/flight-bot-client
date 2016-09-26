export default class BotService{
    constructor($http){
        'ngInject';
        this.service=$http;
    }
    sendMessage(data){
        const uri='http://localhost:3978/api/messages';
        return this.service({
           url:uri,
           method:'POST',
            data:data
        }).then((res)=>{
            console.log('res service',res)
            return res;
        })
    }
}


