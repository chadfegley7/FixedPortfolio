// myApp.factory('quoteFactory', function($http){
//   var factory = {};
//   var quotes =["When you're going through hell, keep going. -Winston Churchill", "It is not uncommon for people to spend their whole life waiting to start living. -Unknown", "A person who has never made a mistake never tried anything new. -Unknown", "The secret of change is to focus all of your energy, not on fighting the old but on building the new. -Unknown" ];
//
//   factory.index = function(callback){
//     $http.get('/').success(function(output){
//       quotes = output;
//       callback(quotes);
//       console.log(output);
//     })
//   }
//   return factory;
// });
