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
    $("#walk").show();
    $("#advice").hide();
    $("#quiz").hide();
    $("#affirmations").hide();
    alert("Adventure awaits! Please scroll down.");
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
    alert("Wow, what an adventure! Scroll down to read all about it.");

    event.preventDefault();
  });
});

$(document).ready(function() {
  $("#adviceClick").click(function(event) {
    $("#advice").show();
    $("#quiz").hide();
    $("#affirmations").hide();
    $("#walk").hide();
    alert("Frenchie loves to judge. Please scroll down.");
  });
});

$(document).ready(function() {
  $("#form-advice").submit(function(event) {
      const nameInput = $("input#advice-col-name").val();
      const subjectInput = $("input#advice-col-subject").val();
      const questionInput = $("input#advice-col-question").val();
      let inputSplit = questionInput.split(" ");
      const firstElement = inputSplit[0];
      const lastElement = inputSplit[inputSplit.length-1];

      $(".usersName").text(nameInput);
      $(".userSubject").text(subjectInput);
      $("#sentenceReturn").text(questionInput.toUpperCase());
      $(".firstElement").text(firstElement.toUpperCase());
      $(".lastElement").text(lastElement.toUpperCase());
      $('#advice-response').show();
      alert("Frenchie has a lot to say about that...scroll down at your own risk!");
      event.preventDefault();
  });
});

$(document).ready(function() {
  $("#affirmationClick").click(function(event) {
    $("#affirmations").show();
    $("#quiz").hide();
    $("#advice").hide();
    $("#walk").hide();
    alert("Meli is ready to receive your vibrations. Please scroll down.");
  });
});

$(document).ready(function() {
  $("#affirmationButton").click(function(event) {
    event.preventDefault();
    let quizScore = 0;
    const feelings = parseInt($("input:radio[name = feelings]:checked").val());

    $("input:checkbox[name=experiences]:checked").each(function() {
      const experiencesTotal = parseInt($(this).val());
      quizScore += experiencesTotal;
    });

    $("input:checkbox[name=events]:checked").each(function() {
      const eventsTotal = parseInt($(this).val());
      quizScore += eventsTotal;
    });

    quizScore += feelings;

    if (quizScore <= 6) {
      alert("happy");
    } else if (quizScore > 6 && quizScore < 11) {
    alert("bored");
  } else if (quizScore > 11 &&  quizScore < 14 ) {
    alert("sad");
  } else {
    alert("stressed");
  }

  });
});

$(document).ready(function() {
  $("#quizClick").click(function() {
    $("#quiz").show();
    $("#affirmations").hide();
    $("#walk").hide();
    $("#advice").hide();
    alert("Your quiz is ready! Please scroll down.");
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
