$(document).ready(function(){
  loadJSON(function(response) {
    // Parse JSON string into object
    var skillJSON = JSON.parse(response);

    //Pass the JSON into a string array
    var skills = []
    for(var x in skillJSON){
       skills.push(skillJSON[x])
    }

    //Fisher-Yates shuffle algorithm to give different order each time page loads
    //** This is not required, just a feature I added **
    for(var i = skills.length - 1; i > 0; i--){
      var j = Math.floor(Math.random() * (i + 1));
      var temp = skills[i];
      skills[i] = skills[j];
      skills[j] = temp;
    }

    //Display the images from json file.
    for(var i = 0; i< skills.length; i++){}
      //calculate height and width (if using square images).
      var height = skills[i].rating * 10

      //Set Tooltip string
      var tooltip = 'Skill: ' + skills[i].name + '<br> Rating: ' + skills[i].rating + '/10'

      //add the image to the page
      $('.icon-cloud').append('<a>' + skills[i].icon +  '</a>')

      //give the image a relevant id, height and width
      $('.icon-cloud>a>img').last().attr('id', skills[i].id)
      $('#'+skills[i].id).css('height', height.toString()+'px').css('width', height.toString()+'px')

      //set up the tooltip. I am using popovers at tooltips because I just prefer the look.
      $('#'+skills[i].id).attr('data-toggle', 'popover').attr('data-content', tooltip).attr('data-placement', 'top' ).attr('data-trigger', 'hover').attr('role', 'button').attr('tabindex', 0).attr('data-html', 'true')

    }
    //initialise the bootstrap popover
    $('[data-toggle="popover"]').popover()



  });


});

/*Loads the icons for the skills section */
function loadJSON(callback){
  var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
      xobj.open('GET', '/data.json', true);
      xobj.onreadystatechange = function(){
        if(xobj.readyState == 4 && xobj.status == "200") {
          callback(xobj.responseText);
        }
      };
      xobj.send(null);
}
