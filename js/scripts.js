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

$(document).ready(function() {
  $("#walkClick").click(function() {
    $("form").show();
  });
});
$(document).ready(function() {
  $("#formWalk").submit(function(event) {
    const personInput = $("input#person").val();
    const dogInput = $("input#dog").val();
    const buildingInput = $("input#building").val();
    const nounInput = $("input#noun").val();
    const adjectiveInput = $("input#adjective").val();
    const verbInput = $("input#verb").val();
    const foodInput = $("input#food").val();

    $(".person").text(personInput);
    $(".dog").text(dogInput);
    $(".building").text(buildingInput);
    $(".noun").text(nounInput);
    $(".adjective").text(adjectiveInput);
    $(".verb").text(verbInput);
    $(".food").text(foodInput);

    $("#story").show();

    event.preventDefault();
  });
});

$(document).ready(function() {
  $("#form-advice").submit(function(event) {
      const nameInput = $("input#advice-col-name").val();
      const subjectInput = $("input#advice-col-subject").val();
      const questionInput = $("input#advice-col-question").val();

      $("#usersName").text(nameInput);
      $("#userSubject").text(subjectInput);
      $("#sentenceReturn").text(questionInput.toUpperCase());
      $('.initially-hidden').show();
      event.preventDefault();
  });
});

$(document).ready(function() {
  $("#affirmationButton").click(function(event) {

  const feelings = $("input:radio[name = feelings]:checked").val();

  if(feelings === 'happy') {
    alert("wo!");
  } else if(feelings === 'sad') {
    alert("so sad!");
  } else {
    alert("aha!");
  }
  });
});

$(document).ready(function() {
  $("#takeQuiz").click(function() {
    $("#personalityQuiz").show();
  });
});

$(document).ready(function() {
  $("#quizSubmit").click(function(event) {
     const q1 = parseInt($("input:radio[name=Q1]:checked").val());
     const q2 = parseInt($("input:radio[name=Q2]:checked").val());
     const q3 = parseInt($("input:radio[name=Q3]:checked").val());
     const q4 = parseInt($("input:radio[name=Q4]:checked").val());
     const q5 = parseInt($("input:radio[name=Q5]:checked").val());
     const q6 = parseInt($("input:radio[name=Q6]:checked").val());
     const q7 = parseInt($("input:radio[name=Q7]:checked").val());
     const q8 = parseInt($("input:radio[name=Q8]:checked").val());
     const q9 = parseInt($("input:radio[name=Q9]:checked").val());
     const q10 = parseInt($("input:radio[name=Q10]:checked").val());
     const quizTotal = q1+q2+q3+q4+q5+q6+q7+q8+q9+q10;

     let result;
     if (quizTotal <= 14) {
       result = "Meli";
     } else if (quizTotal <=24 ) {
       result = "Frenchie";
     } else {
       result = "Bowser";
     }
     alert(result);
  });
});
