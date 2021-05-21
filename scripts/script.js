$(function(){

    $("#submit-button").on("click",function(){

        // COLLECT THE INFOMRATION NEEDED
        var description_of_sample = document.querySelector('#name-of-client').value;
        var energyKJ = document.querySelector('#energyKJ').value;
        var energyKcal = document.querySelector('#energyKcal').value;
        var protein = document.querySelector('#protein').value;
        var fat = document.querySelector('#fat').value;
        var saturated_fat = document.querySelector('#saturated-fat').value;
        var poly_unsaturated_fat = document.querySelector('#poly-unsaturated-fat').value;
        var mono_unsaturated_fat = document.querySelector('#mono-unsaturated-fat').value;
        var carbohydrates = document.querySelector('#carbohydrates').value;
        var sugars = document.querySelector('#sugars').value;
        var dietary_fibre = document.querySelector('#dietary-fibre').value;
        var sodium = document.querySelector('#sodium').value;
        var moisture = document.querySelector('#moisture').value;
        var ash = document.querySelector('#ash').value;
        var salt = document.querySelector('#salt').value;
        var date = document.querySelector('#date').value;



        // DISPLAY the back of pack information
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




        // DISPLAY THE VALUES THAT IS DISPLAYED WHEN PRINTING
        $("#print-energy").html(energyKcal+"/"+energyKJ);
        $("#print-protein").html(protein);
        $("#print-fat").html(fat);
        $("#print-saturated-fat").html(saturated_fat);
        $("#print-carbohydrates").html(carbohydrates);
        $("#print-sugars").html(sugars);
        $("#print-salt").html(salt);
        $("#print-poly-unsaturated-fat").html(poly_unsaturated_fat);
        $("#print-mono-unsaturated-fat").html(mono_unsaturated_fat);
        $("#print-dietary-fibre").html(dietary_fibre);
        $("#print-sodium").html(sodium);
        $("#print-moisture").html(moisture);
        $("#print-ash").html(ash);
        $("#date-of-report").html("Date of report: " + date);
        $("#description-of-sample").html("Description of sample: " + description_of_sample);




        // CALCULATE FRONT OF PACK INFORMATION

        //If the value is left empty then make it zero
        if(energyKJ == "" || energyKJ == "<0.1")
        {
            energyKJ = 0;
        }

        if(energyKcal == "")
        {
            energyKcal = 0;
        }
        
        if(fat == "" || fat == "<0.1")
        {
            fat = 0;
        }

        if(saturated_fat == "" || saturated_fat == "<0.1")
        {
            saturated_fat = 0
        } 

        if(mono_unsaturated_fat == "" || mono_unsaturated_fat == "<0.1")
        {
            mono_unsaturated_fat = 0
        } 

        if(poly_unsaturated_fat == "" || poly_unsaturated_fat == "<0.1")
        {
            poly_unsaturated_fat = 0
        } 

        if(dietary_fibre == "" || dietary_fibre == "<0.1")
        {
            dietary_fibre = 0
        } 

        if(sodium == "" || sodium == "<0.1")
        {
            sodium = 0
        } 

        if(moisture == "" || moisture == "<0.1")
        {
            moisture = 0
        } 

        if(ash == "" || ash == "<0.1")
        {
            ash = 0
        } 

        if(sugars == "" || sugars == "<0.1")
        {
            sugars = 0;
        }
        
        if(salt == "" || salt == "<0.1")
        {
            salt = 0;
        }

        if(protein == "" || protein == "<0.1")
        {
            protein = 0;
        }

        if(carbohydrates == "" || carbohydrates == "<0.1")
        {
            carbohydrates = 0;
        }

    
        //Calculate FOP percentages
        var energy_fop_percentage = ((energyKJ/8400)* 100).toFixed(0);
        var fop_fat_percentage = ((fat/70)* 100).toFixed(0);
        var fop_saturated_fat_percentage = ((saturated_fat/20)* 100).toFixed(0);
        var fop_sugars_percentage = ((sugars/90)* 100).toFixed(0);
        var fop_salt_percentage = ((salt/6)* 100).toFixed(0);


        //Calculate & display the new fop values
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


        //Calculate the colours for the front of pack information
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


        //SHow the results
        $(".front-of-pack-container").fadeIn(1000);
        $(".back-of-pack-container").fadeIn(1000);
        $("#calculated-results-container").fadeIn(1000);
        

    });


    //Scroll to the Results when button is clicked
    $("#submit-button").on("click",function(){

        //If it is in mobile view
        if(screen.width <= 375){
            jQuery("html").animate({ 
                scrollTop:jQuery("#calculated-results-container").offset().top
            })
        }
        
    });





});

