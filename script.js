$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "data.xml",
        dataType: "xml",
        success: xmlFunction,
        error : function(){
            alert("404 Not Found - Oops something went wrong !")
        }
    });

    var value, key, nom, prenom;
    var tab = [];
        
        function xmlFunction(xml){

            $(xml).find('person').each(function(){
                key = $(this).attr('key');
                tab.push(key);
                console.log(tab);
                nom = $(this).find('nom').text();
                prenom = $(this).find('prenom').text();

                $(".dropDown").append($('<option>', { value:key, text: prenom + " " + nom}));
                });

            $('select').change(function(){
                value=this.value
                var x = tab.indexOf(value)
                nom = xml.getElementsByTagName("nom")[x].firstChild.nodeValue
                prenom = xml.getElementsByTagName("prenom")[x].firstChild.nodeValue;
                var age = xml.getElementsByTagName("age")[x].firstChild.nodeValue;
                var profession = xml.getElementsByTagName("profession")[x].firstChild.nodeValue;
                var email = xml.getElementsByTagName("email")[x].firstChild.nodeValue;
                var telephone = xml.getElementsByTagName("telephone")[x].firstChild.nodeValue;
                
                $(".selectedClient").html(
                    "nom : " + nom + "<br>" +
                    "prénom : " + prenom + "<br>" +
                    "age : " + age + "<br>" +
                    "profession : " + profession + "<br>" +
                    "email : " + email + "<br>" +
                    "téléphone : " + telephone);
            })


            }

});