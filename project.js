function CounMake(name,capital,population,yearlyVisitors,description){
    return {
        name:name,
        capital:capital,
        popultation:population,
        yearlyVisitors:yearlyVisitors,
        description:description,
        methods:methods
    }
}
var france=CounMake('france','paris','67.39 million','89.4 million','There’s the city’s romantic image, the stunning architecture, the Louvre museum, the iconic Eiffel Tower as well as the simple pleasure of sitting at a café terrace and watching the world go by. European and US visitors have flocked here from all the world for many years, and they keep coming back and in recent years the appeal of Paris has gripped the far east, with more and more Chinese nationals coming to get a glimpse of the Champs Elysées and its array of boutique')
var Spain=CounMake('Spain','madrid','47.35 million','82.7','Spain is a storied country of stone castles, snowcapped mountains, vast monuments, and sophisticated cities, all of which have made it a favoured travel destination. The country is geographically and culturally diverse') 
var japan=  CounMake('japan','Tokyo','125,7 millions','32 million','Combining the attractions of an ancient and unfamiliar culture with all the trappings of one of the world powerhouses in entertainment, fashion, and innovation')
var  italy=  CounMake('italy','Rome','59,11 millions ','65 million','It has beautiful scenery ranging from its scenic coastal areas to its colourful mountain ranges. It has a vast wealth of culture, architecture and ancient sites')
 var turkey=CounMake('turkey','Ankara','84,78 millions','29.93 million','Visiting Turkey will allow you to see the ancient alleys of Istanbul the majestic views of Cappadocia and the sun-drenched beaches along the Mediterranean coast')
var SParr=['https://wander-lush.org/wp-content/uploads/2021/02/Most-beautiful-cities-in-Spain-Depositphotos-Toledo-skyline.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ZRNwX2ypE5J3p4N0UW-U32EbU63DN8HBC0EvmDZfho3XFCEGGMv-F6Jn3qn8ewjAG5A&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5TzTZDqB71dfNHrlKwBeP7XaY8Qa7X8aqGXcDlhCQG_FCknH8hD2cjCqsRo3PWmdc3NY&usqp=CAU']
var FRarr=['https://www.planetware.com/wpimages/2022/08/france-best-places-to-visit-paris-eiffel-tower-river.jpg','https://cloudinary.fclmedia.com/fctg/image/fetch/h_660,w_1200,q_100,c_fill,g_auto,fl_progressive/https://content.flightcentre.com/sites/default/files/nz/nz-travel-blog/files/2015/11/France_1.jpg','https://media.cnn.com/api/v1/images/stellar/prod/150710120654-destination-france-louvre.jpg?q=w_1600,h_900,x_0,y_0,c_fill/h_618']
var JAarr=['https://www.travelanddestinations.com/wp-content/uploads/2019/08/Japan-Tokyo.jpg','https://www.intrepidtravel.com/adventures/wp-content/uploads/2022/07/Intrepid-Travel-Japan_Tokyo-Skyline_ss_643180513.jpg','https://www.fluentu.com/blog/travel/wp-content/uploads/sites/37/2018/09/most-beautiful-places-in-japan-5.jpg']
var ITarr=['https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/venice-in-italy-1556183098-785X440.jpg','https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/df/67/3f/caption.jpg?w=1200&h=-1&s=1','https://www.italyvisa.ae/blog/wp-content/uploads/2019/04/Leaning-Tower.jpg']
var TUarr=['https://clickstay.s3-eu-west-1.amazonaws.com/images/blog/post/o-TURKEY-COUNTRY-facebook.jpg','https://ichef.bbci.co.uk/images/ic/480x270/p0gzbrt0.jpg','https://a.cdn-hotels.com/gdcs/production146/d1360/ac6d7c98-cf2d-417e-b711-1b793b9a3a4c.jpg']


var image1 = document.getElementById('#count1')
var index=0
function changeim1() {
    
        var imgs=['https://www.planetware.com/wpimages/2022/08/france-best-places-to-visit-paris-eiffel-tower-river.jpg','https://cloudinary.fclmedia.com/fctg/image/fetch/h_660,w_1200,q_100,c_fill,g_auto,fl_progressive/https://content.flightcentre.com/sites/default/files/nz/nz-travel-blog/files/2015/11/France_1.jpg','https://media.cnn.com/api/v1/images/stellar/prod/150710120654-destination-france-louvre.jpg?q=w_1600,h_900,x_0,y_0,c_fill/h_618']
       if(index<imgs.length){
        image1.src= imgs[index]
        index++}
        else{
          index=0
        }
        
      }