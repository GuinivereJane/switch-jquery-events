$('document').ready(function() {
  $('button').click( function() {
    if ($(this).attr('class') === "on"){
      $(this).attr("class", "off");
      $('body').attr('class', 'dark');
      $('.status').html('It is so dark in here');
    }else{
      $(this).attr("class", "on");
      $('body').attr('class', 'light');
      $('.status').html('It is so bright in here');
    }
  });
});
