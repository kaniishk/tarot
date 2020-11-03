jQuery(document).ready(function($) {

	'use strict'; 

        var x=0;
        var width = $(window).width(); 

       
        $('.card').click(function() {
    
          $(".card").each(function(e) {
      
            
            setTimeout(function() {
              if (width < 700  ) {
                $(".card").eq(e).css("right", 70-(5*e) + "%");
        
            }
            else {
              $(".card").eq(e).css("right", 85-(5*e) + "%");
            }
              
            }, e * 150)
          
              $('#instr').hide();

              $('.card').eq(e).unbind('click');
            
              $('.card').eq(e).click(function(){
                $('#msg_btn').show();
                x++;
                if(x<=6){
                    
                    $('.card').eq(e).css("filter","brightness(150%)");
                    $('.card').eq(e).css("bottom","40%");
                    $('#msg_btn').html("Select " + (6-x) + " more cards");
                    $(this).unbind('click');
                      if(x==6){
                        $('html, body').animate({
                          scrollTop: $("#msg").offset().top -150
                      },2000);
                      $('#msg_btn').html("Show my Readings ");
                      $('#msg_btn').css("background-color","gold");
                      $('#msg_btn').css("color","red");
                      
                      }
                }
                else{
                  alert("You have selected 6 cards. Click on continue");
                }
              });
          });
        });

        $('#msg_btn').click(function(){
          if(x>=6){
            document.location.href = "./next.html";
          }
        });


  });