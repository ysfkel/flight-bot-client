function config($stateProvider,$urlRouterProvider,
               $httpProvider){
                   'ngInject';
                   
                $stateProvider
                .state('app',{
                    'abstract':true
                    ,'template':require('../app.layout/app.layout.html')
                });
                $urlRouterProvider.otherwise('/');
                
                //CORS SETTINGS
                delete $httpProvider.defaults.headers.common['X-Requested-With'];
                $httpProvider.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
                $httpProvider.defaults.headers.common["Accept"] = "application/json";
                $httpProvider.defaults.headers.common["content-type"] = "application/json";
                $httpProvider.defaults.headers.common['Authorization'] ='Basic WW91ckFwcElkOllvdXJBcHBTZWNyZXQ=';
                
}

export default config;