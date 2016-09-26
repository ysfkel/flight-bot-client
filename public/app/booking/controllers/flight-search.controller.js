

import ConversationModel from '../../models/conversation.js';
class FlightSearchCtr{
    constructor($state,BotService){
        'ngInject';
        this.formData={};
        this.message=new ConversationModel(BotService);
        this.conversation=[];
    }
    sendMessage(e){
    
        if(e.keyCode===13){
     
              //
                this.conversation.push({
                    isBot:false,
                    text:this.formData.text
                });
              //
       this.message.data.text=this.formData.text;
       this.formData.text='';
       this.message.send().then((res)=>{
            
            var newData,text;
            if(res.data.text.charAt(0)==='['){
                newData=JSON.parse(res.data.text);
                
                switch(newData.length>0)
                {
                    case true:
                    let plural='';
                    if(newData.length>1)
                    {
                        plural='s';
                    }
                     text='I have found '+newData.length+' available flight'+plural;
                     this.flights=newData;
                    break;
                    case false:
                         text='There are no flights available currently!';
                             this.flights=[];
                    break;
                }
                
                
               
            }else{
                text=res.data.text;
            }
           this.conversation.push({
               isBot:true,
               text:text
           });
        });
        }
      
    }
}



export default FlightSearchCtr;