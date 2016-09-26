
class SearchResultCtr{
    constructor($state,$rootScope,BotService){
        'ngInject';
        
     // this.flights=[1,2,3,4];
        console.log('serach contr')
        $rootScope.$on('flights:list',function(data){
            console.log('event receievd')
           this.flights=data
        });
    }

}



export default SearchResultCtr;