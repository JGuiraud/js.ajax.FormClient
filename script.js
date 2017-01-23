// $(document).ready(function(){
//     $.ajax({
//         type:'GET',
//         url:'data.xml',
//         dataType:"xml",
//         success: xmlFunction
//     });
// });

// function xmlFunction(xml){
//     $(xml).find('person').each(function(){
//         var id = $(this).attr('id');
//         var nom = $(this).find('nom');
//         var prenom = $(this).find('prenom');
//         var age = $(this).find('age');
//         var profession = $(this).find('profession');
//         var email = $(this).find('email');
//         var telephone = $(this).find('telephone');
//         console.log(telephone);
//     })
// }


$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "data.xml",
        dataType: "xml",
        success: xmlFunction
    });
        
        function xmlFunction(xml){
            $(xml).find('person').each(function(){
                var id = $(this).attr('id');
                var nom = $(this).find('nom').text();
                var prenom = $(this).find('prenom').text();
                var age = $(this).find('age').text()
                var profession = $(this).find('profession').text();
                var email = $(this).find('email').text();
                var telephone = $(this).find('telephone').text();
                console.log(id + nom)
                $(".dropDown").append($('<option>', { value:id, text: prenom + " " + nom}))
                $(".selectedClient").html(
                    "nom : " + nom + "<br>" +
                    "prénom : " + prenom + "<br>" +
                    "age : " + age + "<br>" +
                    "profession : " + profession + "<br>" +
                    "email : " + email + "<br>" +
                    "téléphone : " + telephone);
                });
            }

});

        // });

//         $('select').change(function () {
//         var valueSelect = $(this).val()
//   });


//         if (status >= 200 && status < 300) {
//             var xml = xhr.responseXML;

//             $('select').change(function () {
//                 var valueSelect = $(this).val();

//                 if (valueSelect == "John") {
//                     nom = xml.getElementsByTagName("nom")[0].firstChild.nodeValue;
//                     prenom = xml.getElementsByTagName("prenom")[0].firstChild.nodeValue;
//                     age = xml.getElementsByTagName("age")[0].firstChild.nodeValue;
//                     profession = xml.getElementsByTagName("profession")[0].firstChild.nodeValue;
//                     email = xml.getElementsByTagName("email")[0].firstChild.nodeValue;
//                     telephone = xml.getElementsByTagName("telephone")[0].firstChild.nodeValue;

//                     $(".selectedClient").html(
//                     "nom : " + nom + "<br>" +
//                     "prénom : " + prenom + "<br>" +
//                     "age : " + age + "<br>" +
//                     "profession : " + profession + "<br>" +
//                     "email : " + email + "<br>" +
//                     "téléphone : " + telephone);
//                 }

//                 if (valueSelect == "Jane") {
//                     nom = xml.getElementsByTagName("nom")[1].firstChild.nodeValue;
//                     prenom = xml.getElementsByTagName("prenom")[1].firstChild.nodeValue;
//                     age = xml.getElementsByTagName("age")[1].firstChild.nodeValue;
//                     profession = xml.getElementsByTagName("profession")[1].firstChild.nodeValue;
//                     email = xml.getElementsByTagName("email")[1].firstChild.nodeValue;
//                     telephone = xml.getElementsByTagName("telephone")[1].firstChild.nodeValue;

//                     $(".selectedClient").html(
//                     "nom : " + nom + "<br>" +
//                     "prénom : " + prenom + "<br>" +
//                     "age : " + age + "<br>" +
//                     "profession : " + profession + "<br>" +
//                     "email : " + email + "<br>" +
//                     "téléphone : " + telephone);
//                 }

//             });

//         } else {
//             alert('Something bad happened')
//         }
//     }
// };
// xhr.send(null);












// $(document).ready(function(){
//     $.ajax({
//         type:'GET',
//         url:'data.xml',
//         dataType:"xml",
//         success: xmlFunction
//     });
// });

// function xmlFunction(){

//             $('select').change(function () {
//                 var valueSelect = $(this).val()

//                 if (valueSelect == "John") {
//                     nom = xml.getElementsByTagName("nom")[0].firstChild.nodeValue;
//                     prenom = xml.getElementsByTagName("prenom")[0].firstChild.nodeValue;
//                     age = xml.getElementsByTagName("age")[0].firstChild.nodeValue;
//                     profession = xml.getElementsByTagName("profession")[0].firstChild.nodeValue;
//                     email = xml.getElementsByTagName("email")[0].firstChild.nodeValue;
//                     telephone = xml.getElementsByTagName("telephone")[0].firstChild.nodeValue;

//                     $(".selectedClient").html(
//                     "nom : " + nom + "<br>" +
//                     "prénom : " + prenom + "<br>" +
//                     "age : " + age + "<br>" +
//                     "profession : " + profession + "<br>" +
//                     "email : " + email + "<br>" +
//                     "téléphone : " + telephone);
//                 }

//                 if (valueSelect == "Jane") {
//                     nom = xml.getElementsByTagName("nom")[1].firstChild.nodeValue;
//                     prenom = xml.getElementsByTagName("prenom")[1].firstChild.nodeValue;
//                     age = xml.getElementsByTagName("age")[1].firstChild.nodeValue;
//                     profession = xml.getElementsByTagName("profession")[1].firstChild.nodeValue;
//                     email = xml.getElementsByTagName("email")[1].firstChild.nodeValue;
//                     telephone = xml.getElementsByTagName("telephone")[1].firstChild.nodeValue;

//                     $(".selectedClient").html(
//                     "nom : " + nom + "<br>" +
//                     "prénom : " + prenom + "<br>" +
//                     "age : " + age + "<br>" +
//                     "profession : " + profession + "<br>" +
//                     "email : " + email + "<br>" +
//                     "téléphone : " + telephone);
//                 }

//             });

//         } 


