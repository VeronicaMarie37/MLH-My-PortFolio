$( () => {
  
  


    
    //hover is attached to my li with the id of content
    // then there are two functions use when the mouse is over the list
    //when the mouse leaves the list
    
    
    
    
    // $this represent that current dom element that is being selected or worked on
    // in the function in this case
    //content li is the element
    //hover is the event handler
    
    
     
 $('#sidebar li').hover(
    function() {
     $(this).css('background-color', 'black');
    },

    function() {
    $(this).css('background-color', 'none');
     }
); 
    
    
    







$(document).ready(function() {
    var $sidebar = $("#sidebar");
    var $hamburgerMenu = $("#hamburgerMenu");
    var $closeIcon = $("#closeIcon");
  
    $hamburgerMenu.click(function() {
      $sidebar.css("left", "0");
      $hamburgerMenu.toggleClass("open");
      $closeIcon.toggleClass('open')
    });
  
    $closeIcon.click(function() {
      $sidebar.css("left", "-300px");
      $hamburgerMenu.toggleClass("open");
      $closeIcon.toggleClass('open')
    });
  });

 
  
})