function BookingConfig($stateProvider){
    'ngInject';
   //  require('./booking.css');
    $stateProvider
    .state('app.booking',{
        url:'/booking',
        template:require('./views/layout.html'),
        title:'Flight Search'
        
    })
    .state('app.booking.flightSearch',{
        url:'/flight-search',
        views:{
            'search-view':{
                template:require('./views/flight-search.html'),
              controller:'flightSearchController as $ctrl',
            }
            // 'info':{
            //     template:require('./views/searchResults.html')
            //                   ,controller:'flightSearchController as $ctrl',
            // //   , controller:'searchResultsController as $ctrl2'
            // }
        }
     
    });
}

export default BookingConfig;


// function BookingConfig($stateProvider){
//     'ngInject';
//    //  require('./booking.css');
//     $stateProvider
//     .state('app.booking',{
//         url:'/booking',
//         template:require('./views/flight-search.html'),
//         title:'Flight Search'
        
//     })
//     .state('app.booking.flightSearch',{
//         url:'/flight-search',
//         views:{
//             'bot':{
//                 template:require('./views/bot.html'),
//                 controller:'flightSearchController as $ctrl',
//             }
//         }
     
//     });
// }

// export default BookingConfig;