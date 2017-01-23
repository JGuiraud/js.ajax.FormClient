var xhr = new XMLHttpRequest(), nom, prenom, age, profession, email, telephone;

xhr.open('GET', "data.xml", true);

xhr.onreadystatechange = function(){
    if (xhr.readyState === 4) {
        var status = xhr.status;

        if (status >= 200 && status < 300) {
            var xml = xhr.responseXML;
            console.log(xml)
            
            $('select').change(function () {
                var valueSelect = $(this).val();

                if (valueSelect == "John") {
                    nom = xml.getElementsByTagName("nom")[0].firstChild.nodeValue;
                    prenom = xml.getElementsByTagName("prenom")[0].firstChild.nodeValue;
                    age = xml.getElementsByTagName("age")[0].firstChild.nodeValue;
                    profession = xml.getElementsByTagName("profession")[0].firstChild.nodeValue;
                    email = xml.getElementsByTagName("email")[0].firstChild.nodeValue;
                    telephone = xml.getElementsByTagName("telephone")[0].firstChild.nodeValue;

                    $(".selectedClient").html(
                    "nom : " + nom + "<br>" +
                    "prénom : " + prenom + "<br>" +
                    "age : " + age + "<br>" +
                    "profession : " + profession + "<br>" +
                    "email : " + email + "<br>" +
                    "téléphone : " + telephone);
                }

                if (valueSelect == "Jane") {
                    nom = xml.getElementsByTagName("nom")[1].firstChild.nodeValue;
                    prenom = xml.getElementsByTagName("prenom")[1].firstChild.nodeValue;
                    age = xml.getElementsByTagName("age")[1].firstChild.nodeValue;
                    profession = xml.getElementsByTagName("profession")[1].firstChild.nodeValue;
                    email = xml.getElementsByTagName("email")[1].firstChild.nodeValue;
                    telephone = xml.getElementsByTagName("telephone")[1].firstChild.nodeValue;

                    $(".selectedClient").html(
                    "nom : " + nom + "<br>" +
                    "prénom : " + prenom + "<br>" +
                    "age : " + age + "<br>" +
                    "profession : " + profession + "<br>" +
                    "email : " + email + "<br>" +
                    "téléphone : " + telephone);
                }

            });

        } else {
            alert('Something bad happened')
        }
    }
};

xhr.send(null);
