var webpack=require('webpack')
module.exports={
    context:__dirname+'/public/app',
//    entry:'./index.js',
    entry:[
        'webpack-dev-server/client?http://127.0.0.1:7000',
        'webpack/hot/only-dev-server'
        ,'./index'
    ],
   // entry:'/index',
    output:{
        path:__dirname+'/public/app',
        filename:'bundle.js'
    },
    watch:true,
    module:{
        loaders:[
            {
                test:/\.html$/,
                loader:'raw'
            },
            {
                test:/\.css$/,
                loader:'style!css',
                exclude:/(node_modules|bower_components)/
            },
            {
                test:/.jsx?$/,
                loader:'babel',
                exclude:/(node_modules|bower_components)/,
                query:{
                    presets:['es2015']
                }
            },
            {
                test:/src.*\.js$/,
                exclude:/(node_modules|bower_components)/,
                loaders:['ng-annotate','babel-loader']
            }
        ]
    }
    ,resolve:{
       moduleDirectories:['node_modules','src'],
       extension:['','.js']
    },
    plugins:[
       new webpack.HotModuleReplacementPlugin(),
       new webpack.NoErrorsPlugin()
   ]
   ,devServer:{
    //    hot:true
    //     ,proxy:{
    //         '*':'http://localhost:3978'
    //     }
   }
}