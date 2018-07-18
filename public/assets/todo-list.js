// $(document).ready(function(){

//   $('form').on('submit', function(){

//       var item = $('form input');
//       var todo = {item: item.val()};
//        console.log("%%%%%% data ",todo)
//       $.ajax({
//         type: 'POST',
//         url: '/todo',
//         data: todo,
//         success: function(data){
//           console.log('######## data is ### ',data)
//           //do something with the data via front-end framework
//           location.reload();
//         },
//         error: function(data){
//           alert(" the error is ",data)
//         }
//       });

//       return false;

//   });

//   $('li').on('click', function(){
//       var item = $(this).text().replace(/ /g, "-");
//       $.ajax({
//         type: 'DELETE',
//         url: '/todo/' + item,
//         success: function(data){
//           //do something with the data via front-end framework
//           location.reload();
//         }
//       });
//   });

// });
