/**
 * Created by Nicole on 10/6/2015.
 */


(function(){


    /* makeupBag array of contents */
    var makeupBag = [];


    /* General makeup object */
    function Makeup(brand, mkname, mktype, expDate){
        this.brand = brand;
        this.mkname = mkname;
        this.mktype = mktype;
        this.expDate = expDate;
    }
    /* end of General makeup object */

    function toInitCap(str)
    {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }



    /* Adding things to the bag */
    function addToBag(){

        var inputBrand = toInitCap(document.getElementById("mkBrand").value);
        var inputName = toInitCap(document.getElementById("mkName").value);
        var inputType = toInitCap(document.getElementById("mkType").value);
        var inputExpDate = document.getElementById("mkExpDate").value;


        /*conver string entered for the date, into a date object and find expiration dates of objects by calculation*/


        if(inputBrand != "" && inputName != "" && inputType != "" && inputExpDate != "") {

            var product_1 = new Makeup(inputBrand,inputName,inputType,inputExpDate);
            makeupBag.push(product_1);
            document.getElementById("feedbackMakeup").textContent = makeupBag.length + " item(s) in your makeup bag.";

        }

        else if(inputBrand == "" || inputName == "" || inputType == "" || inputExpDate == ""){

            document.getElementById("displayBag").textContent = "Add something to your make up bag. :)";

        }

        document.getElementById("mkBrand").value = "";
        document.getElementById("mkName").value = "";
        document.getElementById("mkType").value = "";
        document.getElementById("mkExpDate").value = "";

    }
    /* end of Adding things to the bag */


    /* display what is in the bag */
    function showBag (){
      for(var i = 0; i < makeupBag.length; i++){
          document.getElementById("displayBag").innerHTML += makeupBag[i].brand + " " +makeupBag[i].mkname +"<br>";
      }
    }
    /* end of display what is in the bag */


    /* search the bag/array of objects */
    function searchAll (matchSearch){
        this.searchMatch = matchSearch;
        this.searchByBrand = function(){
            var searchResults = " ";
            for(var j = 0; j < makeupBag.length; j++){
                    if (this.searchMatch == makeupBag[j].brand){
                        searchResults += "You have "+makeupBag[j].brand + " "+makeupBag[j].mkname+ " in your makeup bag. It has an expiration date of "+makeupBag[j].expDate+". It is a "+makeupBag[j].mktype+".<br>";
                    }
                }

            document.getElementById("displayBag").innerHTML = searchResults;
            console.log("searching by brand for "+ this.searchMatch);
            console.log(searchResults);  
        };
        this.searchByName = function(){
            var searchResults = " ";
            for(var j = 0; j < makeupBag.length; j++){
                    if (this.searchMatch == makeupBag[j].mkname){
                        searchResults += "You have "+makeupBag[j].brand + " "+makeupBag[j].mkname+ " in your makeup bag. It has an expiration date of "+makeupBag[j].expDate+". It is a "+makeupBag[j].mktype+".<br>";
                    }
                }

            document.getElementById("displayBag").innerHTML = searchResults;
            console.log("searching by name for "+ this.searchMatch);
            console.log(searchResults);
        };
        this.searchByType = function(){
            var searchResults = " ";
            for(var j = 0; j < makeupBag.length; j++){
                    if (this.searchMatch == makeupBag[j].mktype){
                        searchResults += "You have "+makeupBag[j].brand + " "+makeupBag[j].mkname+ " in your makeup bag. It has an expiration date of "+makeupBag[j].expDate+". It is a "+makeupBag[j].mktype+".<br>";
                    }
                }

            document.getElementById("displayBag").innerHTML = searchResults;
            console.log("searching by type for "+ this.searchMatch);
            console.log(searchResults);
        };
        this.searchByExpDate = function(){
            var searchResults = " ";
            for(var j = 0; j < makeupBag.length; j++){
                    if (this.searchMatch == makeupBag[j].expDate){
                        searchResults += "You have "+makeupBag[j].brand + " "+makeupBag[j].mkname+ " in your makeup bag. It has an expiration date of "+makeupBag[j].expDate+". It is a "+makeupBag[j].mktype+".<br>";
                    }
                }

            document.getElementById("displayBag").innerHTML = searchResults;
            console.log("searching by expiration date for "+ this.searchMatch);
            console.log(searchResults);
        };
    }
    /* search the bag/array of objects - further plans to make the search more robust, case insensitive, split string at the space to pull in more results when searching by name, etc*/

    function searchMkBag(){        
        var sel = document.getElementById("searchDrop");
        var dropDownSelected = sel.options[sel.selectedIndex].value;
        var searchFor = document.getElementById("searchInput").value;
        var brandSearch = new searchAll(searchFor);

        switch(dropDownSelected){
            case "makeBrand":
                return brandSearch.searchByBrand();
                break;
            case "makeName":
                return brandSearch.searchByName();
                break;
            case "makeType":
                return brandSearch.searchByType();
                break;
            case "makeExpDate":
                return brandSearch.searchByExpDate();
                break;
            default:
                console.log("Select one of the values from the drop down.");
                break;


        }

    }



    var buttonAddMakeup = document.getElementById("addMakeupButton");
    buttonAddMakeup.onclick = addToBag;

    var displayMakeupBag = document.getElementById("showMakeupButton");
    displayMakeupBag.onclick = showBag;

    var searchTheBag = document.getElementById("searchByButton");
    searchTheBag.onclick = searchMkBag;



















    /*starting all over */

    function eraseDiv() {

        var displayField = document.getElementById("displayBag");
        var feedbackField = document.getElementById("feedbackMakeup");

        /*Reset the display area to an empty square.*/
        displayField.textContent = "";
        feedbackField.textContent = "";

        var form = document.getElementById("makeupForm");

        /*Reset form values.*/
        form.reset();

        /*Reset the display area size to the original values.*/
        displayField.style.width = "400px";
        displayField.style.height = "400px";

    }

    var resetButton = document.getElementById("resetButton");
    resetButton.onclick = eraseDiv;

})();