$(document).ready(function() {
  $("button#hi").click(function() {
    $('ul#Meli').children('li').remove();
    $('ul#Frenchie').children('li').remove();
    $('ul#Meli').prepend("<li>Hi, hi, hello bestie!</li>");
    $('ul#Frenchie').prepend("<li>...hello, stranger.</li>");
  });
  $("button#bark").click(function() {
    $('ul#Meli').children('li').remove();
    $('ul#Frenchie').children('li').remove();
    $('ul#Meli').prepend("<li>Woof! Woof, woof, woof! I love you so much!");
    $('ul#Frenchie').prepend("<li>*awkward silence*</li>")
  });
  $("button#treat").click(function() {
    $('ul#Meli').children('li').remove();
    $('ul#Frenchie').children('li').remove();
    $('ul#Meli').prepend("<li>Cheese, please!</li>");
    $('ul#Frenchie').prepend("<li>The filthiest street food I can find. *sniff, sniff* Whatcha got for me?</li>");
  });
  $("button#trick").click(function() {
    $('ul#Meli').children('li').remove();
    $('ul#Frenchie').children('li').remove();
    $('ul#Meli').prepend("<li>I only know one, but I will do it over and over if it will please you. *makes puppy eyes*</li>");
    $('ul#Frenchie').prepend("<li>Maybe...first, show me the treat.</li>");
  });
  $("button#bye").click(function() {
    $('ul#Meli').children('li').remove();
    $('ul#Frenchie').children('li').remove();
    $('ul#Meli').prepend("<li>Aww, five more minutes? I hate goodbyes!</li>");
      $('ul#Frenchie').prepend("<li>*barely looks your way with indifference*</li>");
  });
});
