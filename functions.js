
	function sayHello(){
		console.log("Hello " + (document.getElementById("name").value));
		alert("Hello " + (document.getElementById("name").value));
	}
	
	//Obtiene imagen de la raza
	function getAnimalPicture(){
		var url = 'https://zoo-animal-api.herokuapp.com/animals/rand';

		fetch(url)
		.then(response => response.json())
		.then(data => {
			console.log(data);
			if(data.name){
				document.getElementById("animalName").innerHTML = "<p>Animal: " + data.name + ".</p>" 
				document.getElementById("picture").innerHTML  = "<a href='https://matias.ma/nsfw/' target='_blank'><img src='" + data.image_link + "'/></a>";
			}
			else{
				document.getElementById("picture").innerHTML = "No hay imagen disponible.";
				alert(data.message);
			}
		})
		.catch(function(error) {
			console.log('Hubo un problema con la petición:' + error.message);
		});
	}