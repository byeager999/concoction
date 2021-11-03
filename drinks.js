function displayDrinkData(drinkName) {

    $("#drinks-view").empty();

    var queryURL = "https://thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkName

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {


        console.log(response);

        var results = response.drinks;

        for (var i = 0; i < results.length; i++) {

            console.log(results[i]);

            var eachDrink = results[i];

            var drinkDiv = $("<div>");

            var drinkName = results[i].strDrink;

            var pTwo = $("<p>").text("Ingredients:")

            var ingList = $("<ul>");

            for (var k = 1; k < 16; k++) {

                console.log(eachDrink['strIngredient' + k]);

                if (eachDrink['strIngredient' + k] != null) {

                    ingList.append($('<li>').text(eachDrink['strIngredient' + k]));

                }


            }

            var pOne = $("<p>").text("Drink name: " + drinkName);

            var drinkInstructions = results[i].strInstructions;

            var pThree = $("<p>").text("Instructions: " + drinkInstructions);
            var drinkImage = $("<img>");

            drinkImage.attr("src", results[i].strDrinkThumb);

            drinkDiv.append(pOne);
            drinkDiv.append(pTwo);
            drinkDiv.append(ingList);
            drinkDiv.append(pThree);
            drinkDiv.append(drinkImage);

            $("#drinks-view").append(drinkDiv);
        }

    })
}

function displayRandomDrink() {

    $("#drinks-view").empty();

    var randomQueryURL = "https://thecocktaildb.com/api/json/v1/1/random.php"

    $.ajax({
        url: randomQueryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response);

        var results = response.drinks[0];

        var drinkDiv = $("<div>");

        var drinkName = results.strDrink;

        var pTwo = $("<p>").text("Ingredients:")

        var ingList = $("<ul>");

        for (var k = 1; k < 16; k++) {

            console.log(results['strIngredient' + k]);

            if (results['strIngredient' + k] != null) {

                ingList.append($('<li>').text(results['strIngredient' + k]));

            }


        }

        var pOne = $("<p>").text("Drink name: " + drinkName);

        var drinkInstructions = results.strInstructions;

        var pThree = $("<p>").text("Instructions: " + drinkInstructions);
        var drinkImage = $("<img>");

        drinkImage.attr("src", results.strDrinkThumb);

        drinkDiv.append(pOne);
        drinkDiv.append(pTwo);
        drinkDiv.append(ingList);
        drinkDiv.append(pThree);
        drinkDiv.append(drinkImage);

        $("#drinks-view").append(drinkDiv);





    })



}

$("#drink-search").on("click", function (event) {
    event.preventDefault();

    var drinkName = $("#drink-input").val().trim();

    displayDrinkData(drinkName);

})

$("#random-drink").on("click", function (event) {

    displayRandomDrink();
})