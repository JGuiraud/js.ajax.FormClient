$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "data.xml",
        dataType: "xml",
        success: xmlFunction
    });

    var value, key, nom, prenom;
        
        function xmlFunction(xml){
            $('select').change(function(){
                value=this.value
                nom = xml.getElementsByTagName("nom")[value].firstChild.nodeValue
                prenom = xml.getElementsByTagName("prenom")[value].firstChild.nodeValue;
                var age = xml.getElementsByTagName("age")[value].firstChild.nodeValue;
                var profession = xml.getElementsByTagName("profession")[value].firstChild.nodeValue;
                var email = xml.getElementsByTagName("email")[value].firstChild.nodeValue;
                var telephone = xml.getElementsByTagName("telephone")[value].firstChild.nodeValue;
                
                $(".selectedClient").html(
                    "nom : " + nom + "<br>" +
                    "prénom : " + prenom + "<br>" +
                    "age : " + age + "<br>" +
                    "profession : " + profession + "<br>" +
                    "email : " + email + "<br>" +
                    "téléphone : " + telephone);

            })

            $(xml).find('person').each(function(){
                key = $(this).attr('key');
                nom = $(this).find('nom').text();
                prenom = $(this).find('prenom').text();

                $(".dropDown").append($('<option>', { value:key, text: prenom + " " + nom}));

                });
            }


});