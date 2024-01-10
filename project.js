function CounMake(name,capital,population,yearlyVisitors,description){
    return {
        name:name,
        capital:capital,
        popultation:population,
        yearlyVisitors:yearlyVisitors,
       
    }
}
var france=CounMake('france','paris','67.39 million','89.4 million')
var japan=  CounMake('japan','Tokyo','125,7 millions','32 million',)
var  italy=  CounMake('italy','Rome','59,11 millions ','65 million')
 var turkey=CounMake('turkey','Ankara','84,78 millions','29.93 million')
 var spain= CounMake('spain','madrid','60,78 millions','30 million')
var SParr=['https://wander-lush.org/wp-content/uploads/2021/02/Most-beautiful-cities-in-Spain-Depositphotos-Toledo-skyline.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ZRNwX2ypE5J3p4N0UW-U32EbU63DN8HBC0EvmDZfho3XFCEGGMv-F6Jn3qn8ewjAG5A&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5TzTZDqB71dfNHrlKwBeP7XaY8Qa7X8aqGXcDlhCQG_FCknH8hD2cjCqsRo3PWmdc3NY&usqp=CAU']
var FRarr=['https://www.planetware.com/wpimages/2022/08/france-best-places-to-visit-paris-eiffel-tower-river.jpg','https://cloudinary.fclmedia.com/fctg/image/fetch/h_660,w_1200,q_100,c_fill,g_auto,fl_progressive/https://content.flightcentre.com/sites/default/files/nz/nz-travel-blog/files/2015/11/France_1.jpg','https://media.cnn.com/api/v1/images/stellar/prod/150710120654-destination-france-louvre.jpg?q=w_1600,h_900,x_0,y_0,c_fill/h_618']
var JAarr=['https://www.travelanddestinations.com/wp-content/uploads/2019/08/Japan-Tokyo.jpg','https://www.intrepidtravel.com/adventures/wp-content/uploads/2022/07/Intrepid-Travel-Japan_Tokyo-Skyline_ss_643180513.jpg','https://www.fluentu.com/blog/travel/wp-content/uploads/sites/37/2018/09/most-beautiful-places-in-japan-5.jpg']
var ITarr=['https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/venice-in-italy-1556183098-785X440.jpg','https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/df/67/3f/caption.jpg?w=1200&h=-1&s=1','https://www.italyvisa.ae/blog/wp-content/uploads/2019/04/Leaning-Tower.jpg']
var TUarr=['https://clickstay.s3-eu-west-1.amazonaws.com/images/blog/post/o-TURKEY-COUNTRY-facebook.jpg','https://ichef.bbci.co.uk/images/ic/480x270/p0gzbrt0.jpg','https://a.cdn-hotels.com/gdcs/production146/d1360/ac6d7c98-cf2d-417e-b711-1b793b9a3a4c.jpg']


var image1 = document.getElementById('count1')
var index=0
function changeim1() {
 
        var imgs=['https://www.planetware.com/wpimages/2022/08/france-best-places-to-visit-paris-eiffel-tower-river.jpg','https://cloudinary.fclmedia.com/fctg/image/fetch/h_660,w_1200,q_100,c_fill,g_auto,fl_progressive/https://content.flightcentre.com/sites/default/files/nz/nz-travel-blog/files/2015/11/France_1.jpg','https://media.cnn.com/api/v1/images/stellar/prod/150710120654-destination-france-louvre.jpg?q=w_1600,h_900,x_0,y_0,c_fill/h_618']
       if(index<imgs.length-1){
        
        index++
      }
        else{
          index=0
        }
        image1.src= imgs[index]
        
      }

      var image2 = document.getElementById('count2')
      var index2=0
      function changeim2() {
       
              var imgs=['https://wander-lush.org/wp-content/uploads/2021/02/Most-beautiful-cities-in-Spain-Depositphotos-Toledo-skyline.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ZRNwX2ypE5J3p4N0UW-U32EbU63DN8HBC0EvmDZfho3XFCEGGMv-F6Jn3qn8ewjAG5A&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5TzTZDqB71dfNHrlKwBeP7XaY8Qa7X8aqGXcDlhCQG_FCknH8hD2cjCqsRo3PWmdc3NY&usqp=CAU']
             if(index2<imgs.length-1){
              
              index2++
            }
              else{
                index2=0
              }
              image2.src= imgs[index2]
              
            }
      

            var image3 = document.getElementById('count3')
var index3=0
function changeim3() {
 
        var imgs=['https://www.travelanddestinations.com/wp-content/uploads/2019/08/Japan-Tokyo.jpg','https://www.intrepidtravel.com/adventures/wp-content/uploads/2022/07/Intrepid-Travel-Japan_Tokyo-Skyline_ss_643180513.jpg','https://www.fluentu.com/blog/travel/wp-content/uploads/sites/37/2018/09/most-beautiful-places-in-japan-5.jpg']
       if(index3<imgs.length-1){
        
        index3++
      }
        else{
          index3=0
        }
        image3.src= imgs[index3]
        
      }


      var image4 = document.getElementById('count4')
var index4=0
function changeim4() {
 
        var imgs=['https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/venice-in-italy-1556183098-785X440.jpg','https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/df/67/3f/caption.jpg?w=1200&h=-1&s=1','https://www.italyvisa.ae/blog/wp-content/uploads/2019/04/Leaning-Tower.jpg']
       if(index4<imgs.length-1){
        
        index4++
      }
        else{
          index4=0
        }
        image4.src= imgs[index4]
        
      }

      var image5 = document.getElementById('count5')
      var index5=0
      function changeim5() {
       
              var imgs=['https://clickstay.s3-eu-west-1.amazonaws.com/images/blog/post/o-TURKEY-COUNTRY-facebook.jpg','https://ichef.bbci.co.uk/images/ic/480x270/p0gzbrt0.jpg','https://a.cdn-hotels.com/gdcs/production146/d1360/ac6d7c98-cf2d-417e-b711-1b793b9a3a4c.jpg']
             if(index5<imgs.length-1){
              
              index5++
            }
              else{
                index5=0
              }
              image5.src= imgs[index5]
              
            }
      
      