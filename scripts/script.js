$(function(){

    $("#submit-button").on("click",function(){
        //$(".output-container").slideToggle(2000);
        //$(".output-container").toggle();
        var energyKJ = document.querySelector('#energyKJ').value;
        var energyKcal = document.querySelector('#energyKcal').value;
        var protein = document.querySelector('#protein').value;
        var fat = document.querySelector('#fat').value;
        var saturated_fat = document.querySelector('#saturated-fat').value;
        var carbohydrates = document.querySelector('#carbohydrates').value;
        var sugars = document.querySelector('#sugars').value;
        var salt = document.querySelector('#salt').value;

        //If the value is left empty then make it zero
        if(energyKJ == "")
        {
            energyKJ = 0;
        }

        if(energyKcal == "")
        {
            energyKcal = 0;
        }
        
        if(fat == "")
        {
            fat = 0;
        }

        if(saturated_fat == "")
        {
            saturated_fat = 0
        } 

        if(sugars == "")
        {
            sugars = 0;
        }
        
        if(salt == "")
        {
            salt = 0;
        }

        if(protein == "")
        {
            protein = 0;
        }

        if(carbohydrates == "")
        {
            carbohydrates = 0;
        }

        
        //Calculate FOP percentages
        
        var energy_fop_percentage = ((energyKJ/8400)* 100).toFixed(0);
        var fop_fat_percentage = ((fat/70)* 100).toFixed(0);
        var fop_saturated_fat_percentage = ((saturated_fat/20)* 100).toFixed(0);
        var fop_sugars_percentage = ((sugars/90)* 100).toFixed(0);
        var fop_salt_percentage = ((salt/6)* 100).toFixed(0);


        //Calculate the new values
        $("#fop-KJ").html(energyKJ+'KJ');
        $("#fop-Kcal").html(energyKcal+'Kcal');
        $("#fop-energy-percentage").html( energy_fop_percentage+'%');

        $("#fop-fat").html(fat+'g');
        $("#fop-fat-percentage").html( fop_fat_percentage+'%');

        $("#fop-saturated-fat").html(saturated_fat+'g');
        $("#fop-saturated-fat-percentage").html(fop_saturated_fat_percentage+'%');

        $("#fop-sugars").html(sugars+'g');
        $("#fop-sugars-percentage").html( fop_sugars_percentage+'%');

        $("#fop-salt").html(salt+'g');
        $("#fop-salt-percentage").html( fop_salt_percentage+'%');

        $("#typical-values").html(energyKJ+ "KJ / "+energyKcal + "Kcal");


        //Calculate the colour for the front of pack information
        //Fat
        if(fat > 17.5)
        {
            $("#fat-colour").css({"background-color":"red"});
        }else if(fat < 3)
        {
            $("#fat-colour").css({"background-color":"green"});
        } else
        {
            $("#fat-colour").css({"background-color":"orange"});
        }

        //Saturated Fat
        if(saturated_fat > 5)
        {
            $("#saturates-colour").css({"background-color":"red"});
        }else if(saturated_fat < 1.5)
        {
            $("#saturates-colour").css({"background-color":"green"});
        } else
        {
            $("#saturates-colour").css({"background-color":"orange"});
        }

        //Sugars
        if(sugars > 22.5)
        {
            $("#sugars-colour").css({"background-color":"red"});
        }else if(sugars < 5)
        {
            $("#sugars-colour").css({"background-color":"green"});
        } else
        {
            $("#sugars-colour").css({"background-color":"orange"});
        }

        //Salt
        if(salt > 1.5)
        {
            $("#salt-colour").css({"background-color":"red"});
        }else if(salt < 0.3)
        {
            $("#salt-colour").css({"background-color":"green"});
        } else
        {
            $("#salt-colour").css({"background-color":"orange"});
        }



        // Calculate the back of pack information
        //Energy
        $("#bop-energyKJ").html(energyKJ+"KJ / 100g");
        $("#bop-energyKcal").html(energyKcal+"Kcal / 100g");

        //fat   
        $("#bop-fat").html(fat+"g");

        // Back of pack saturates
        $("#bop-saturates").html(saturated_fat+"g");

        //Back of pack carbohydrates
        $("#bop-carbohydrates").html(carbohydrates+"g");

        //Back of pack protein 
        $("#bop-protein").html(protein+"g");

        //back of pack Salt
        $("#bop-salt").html(salt+"g");

        //SHow the results
        $(".front-of-pack-container").fadeIn(1000);
        $(".back-of-pack-container").fadeIn(1000);
        $("#calculated-results-container").fadeIn(1000);
        

    });


    //Scroll to the Results when button is clicked
    $("#submit-button").on("click",function(){

        //If it is in mobile view
        if(screen.width <= 410){
            jQuery("html").animate({ 
                scrollTop:jQuery("#bop-title").offset().top
            })
        }
        
    });





});

