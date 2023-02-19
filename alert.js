//Conferma logout
function logout(){
	swal({
		icon: "warning",
        title: "Sei sicuro di voler uscire?",
        buttons: {
            confirm: {
            	text: "Si",
                className:"confirm-button",
                value: "confirm",
			},
            cancel: "Annulla",
		},
	}).then((value) => {
		switch (value) {
            case "confirm":
                window.location.href = "index.php";
                break;
			default:
                break;
            }
	});
}
//ACCESSO
function showAlertLogin(){
	swal({
      title: 'Accesso Effettuato!',
      icon: 'success',
      timer: 2000,
      buttons: false,
	})
	.then(() => {
    	window.location.href = "homepage-logged.php";
	})
}
//REGISTRAZIONE
function showAlertRegistration(){
	swal({
      title: 'Registrazione Effettuata!',
      text: 'Esegui il login per accedere nell\' area riservata',
      icon: 'success',
      timer: 5000,
      buttons: {
        	cancel: "OK",
		},
	})
	.then(() => {
    	window.location.href = "login.php";
	})
}
//ALERT CAMBIO ALLEGATO
function checkAttachment(object, number){
	let id1="checkColor";
    let id2="checkImage";
    let id3="button-image";
    let id4="favcolor";
    let id5="imageP";
    let id6="colorP";
    let id7="clickHint";
    let id8="videoP";
    let id9="audioP";
    let id10="checkVideo";
    let id11="checkAudio";
    let id12="button-video";
    let id13="button-audio";
    let elementId1=id1 + number;
    let elementId2=id2 + number;
    let elementId3=id3 + number;
    let elementId4=id4 + number;
    let elementId5=id5 + number;
    let elementId6=id6 + number;
    let elementId7=id7 + number;
    let elementId8=id8 + number;
    let elementId9=id9 + number;
    let elementId10=id10 + number;
    let elementId11=id11 + number;
    let elementId12=id12 + number;
    let elementId13=id13 + number;
    //Da colore ad immagine
	if(object.id===elementId5 && document.getElementById(elementId1).classList.contains("checkState")){
      swal({
		icon: "warning",
        text: "Per questo paragrafo risulta già un colore salvato, vuoi sostituirlo con un'immagine?",
        buttons: {
            confirm: {
            	text: "Si",
                className:"confirm-button",
                value: "confirm",
			},
        	cancel: "Annulla",
		},
      }).then((value) => {
      	switch (value) {
           	case "confirm":
        	    document.getElementById(elementId4).value='#92A8D2';
                document.getElementById(elementId1).classList.remove("checkState");
                document.getElementById(elementId7).style.display="inline";
                openImage(number);
                break;
            default:
                break;
            }
      });
    
    }//Da colore a video
	else if(object.id===elementId8 && document.getElementById(elementId1).classList.contains("checkState")){
      swal({
		icon: "warning",
        text: "Per questo paragrafo risulta già un colore salvato, vuoi sostituirlo con un video?",
        buttons: {
            confirm: {
            	text: "Si",
                className:"confirm-button",
                value: "confirm",
			},
        	cancel: "Annulla",
		},
      }).then((value) => {
      	switch (value) {
           	case "confirm":
        	    document.getElementById(elementId4).value='#92A8D2';
                document.getElementById(elementId1).classList.remove("checkState");
                document.getElementById(elementId7).style.display="inline";
                openVideo(number);
                break;
            default:
                break;
            }
      });
    }
    //Da video ad immagine
    else if(object.id===elementId5 && document.getElementById(elementId10).classList.contains("checkState")){
      swal({
		icon: "warning",
        text: "Per questo paragrafo risulta già un video salvato, vuoi sostituirlo con un'immagine?",
        buttons: {
            confirm: {
            	text: "Si",
                className:"confirm-button",
                value: "confirm",
			},
        	cancel: "Annulla",
		},
      }).then((value) => {
      	switch (value) {
           	case "confirm":
          		document.getElementById(elementId12).value= '';
            	document.getElementById(elementId10).classList.remove("checkState");
            	/*document.getElementById("image-link"+number).style.display="none";
    			document.getElementById("image-state"+number).value="true";
            	document.getElementById("remove-img-btn"+number).style.display="none";
            	document.getElementById("load-image-box"+number).style.display="flex";*/
                openImage(number);
                break;
            default:
                break;
            }
      });
    }//Da video a colore
    else if(object.id===elementId6 && document.getElementById(elementId10).classList.contains("checkState")){
      swal({
		icon: "warning",
        text: "Per questo paragrafo risulta già un video salvato, vuoi sostituirlo con un colore?",
        buttons: {
            confirm: {
            	text: "Si",
                className:"confirm-button",
                value: "confirm",
			},
        	cancel: "Annulla",
		},
      }).then((value) => {
      	switch (value) {
           	case "confirm":
          		document.getElementById(elementId12).value= '';
            	document.getElementById(elementId10).classList.remove("checkState");
            	/*document.getElementById("image-link"+number).style.display="none";
    			document.getElementById("image-state"+number).value="true";
            	document.getElementById("remove-img-btn"+number).style.display="none";
            	document.getElementById("load-image-box"+number).style.display="flex";*/
                openColor(number);
                break;
            default:
                break;
            }
      });
    }
     	//Audio inserito da sostituire con un immagine
    else if(object.id===elementId5 && document.getElementById(elementId10).classList.contains("checkState")){
      swal({
		icon: "warning",
        text: "Per questo paragrafo risulta già una registrazione audio salvata, vuoi sostituirla con un'immagine?",
        buttons: {
            confirm: {
            	text: "Si",
                className:"confirm-button",
                value: "confirm",
			},
        	cancel: "Annulla",
		},
      }).then((value) => {
      	switch (value) {
           	case "confirm":
          		document.getElementById(elementId3).value= '';
            	document.getElementById(elementId11).classList.remove("checkState");
            	document.getElementById("image-link"+number).style.display="none";
    			document.getElementById("image-state"+number).value="true";
            	document.getElementById("remove-img-btn"+number).style.display="none";
            	document.getElementById("load-image-box"+number).style.display="flex";
                openImage(number);
                break;
            default:
                break;
            }
      });
    }//Da immagine a colore
    else if(object.id===elementId6 && document.getElementById(elementId2).classList.contains("checkState")){
      swal({
        icon: "warning",
        text: "Per questo paragrafo risulta già un'immagine salvata, vuoi sostituirla con un colore?",
        buttons: {
          confirm: {
            text: "Si",
            className:"confirm-button",
            value: "confirm",
          },
          cancel: "Annulla",
        },
		  }).then((value) => {
        switch (value) {
          case "confirm":
          	document.getElementById(elementId3).value= '';
            document.getElementById(elementId2).classList.remove("checkState");
            document.getElementById("image-link"+number).style.display="none";
    		document.getElementById("image-state"+number).value="true";
            document.getElementById("remove-img-btn"+number).style.display="none";
            document.getElementById("load-image-box"+number).style.display="flex";
            openColor(number);
            break;
          default:
            break;
        }
	  });
    }
    //Da immagine a video
    else if(object.id===elementId8 && document.getElementById(elementId2).classList.contains("checkState")){
      swal({
        icon: "warning",
        text: "Per questo paragrafo risulta già un'immagine salvata, vuoi sostituirla con un video?",
        buttons: {
          confirm: {
            text: "Si",
            className:"confirm-button",
            value: "confirm",
          },
          cancel: "Annulla",
        },
		  }).then((value) => {
        switch (value) {
          case "confirm":
          	document.getElementById(elementId3).value= '';
            document.getElementById(elementId2).classList.remove("checkState");
            document.getElementById("image-link"+number).style.display="none";
    		document.getElementById("image-state"+number).value="true";
            document.getElementById("remove-img-btn"+number).style.display="none";
            document.getElementById("load-image-box"+number).style.display="flex";
            openColor(number);
            break;
          default:
            break;
        }
	  });
    }
    else if(object.id===elementId6){
    	openColor(number);    
    }else if(object.id===elementId5){
    	openImage(number); 
    }else if(object.id===elementId8){
    	openVideo(number);
    }else if(object.id===elementId9){
    	openAudio(number);
    }
}
function showAlertStory(){
	swal({
		icon: "success",
        title: "Storia inviata!",
        text: "Grazie per il vostro contributo!\n Appena disponibile, un amministratore eseguirà un controllo sul materiale inviato per accertarsi che la storia sia coerente e soprattutto priva di contenuti inappropriati.",
        buttons: {
            confirm: {
            	text: "Ho capito",
                className:"confirm-button",
                value: "confirm",
			},
            cancel:false,
		},
	}).then((value) => {
		switch (value) {
            case "confirm":
                window.location.href = "homepage-logged.php";
                break;
			default:
                break;
            }
	});

}

function showAlertEditStory(){
	swal({
		icon: "success",
        title: "Modifica storia inviata!",
        text: "Appena disponibile, un amministratore eseguirà un controllo sul materiale inviato per accertarsi che la storia sia coerente e soprattutto priva di contenuti inappropriati.",
        buttons: {
            confirm: {
            	text: "Ho capito",
                className:"confirm-button",
                value: "confirm",
			},
            cancel:false,
		},
	}).then((value) => {
		switch (value) {
            case "confirm":
                window.location.href = "profile.php";
                break;
			default:
                break;
            }
	});

}

function check_images(container){
	if(document.getElementById("image-link"+container.id).style.display=="block"){
		remove_old_image(container);
    }
}
function remove_old_image(element){
	swal({
    	icon: "warning",
        text: "Cancellare l'immagine attuale?",
        buttons: {
              confirm: {
                text: "Cancella",
                className:"confirm-button",
                value: "confirm",
              },
              cancel: "Annulla",
            },
              }).then((value) => {
            switch (value) {
              case "confirm":
              	document.getElementById("image-link"+element.id).style.display="none";
                document.getElementById("checkImage"+element.id).classList.toggle("checkState");
                document.getElementById("image-state"+element.id).value="true";
                document.getElementById("remove-img-btn"+element.id).style.display="none";
                document.getElementById("load-image-box"+element.id).style.display="flex";
                break;
              default:
                break;
            }
		  });
}


function story_confirm(){
	swal({
      title: 'Storia aggiornata!',
      icon: 'success',
      timer: 2000,
      buttons: false,
	})
	.then(() => {
    	window.location.href = "profile.php";
	})
}
function story_deleted(){
	swal({
      title: 'Storia cancellata',
      icon: 'success',
      timer: 2000,
      buttons: false,
	})
	.then(() => {
    	window.location.href = "profile.php";
	})
}
function remove_story(element){
	swal({
    	icon: "warning",
        title:"Sei sicuro di voler cancellare "+element.name+"?",
        text: "Questa operazione non può essere annullata.",
        buttons: {
              confirm: {
                text: "Cancella",
                className:"confirm-button",
                value: "confirm",
              },
              cancel: "Annulla",
            },
              }).then((value) => {
            switch (value) {
              case "confirm":
              		 $.ajax({
      					type: 'POST',
      					url: 'delete_story.php',
                        data: {name: element.name},
                        complete: function(){
                      		story_deleted();
                      	}

    				});
                	break;
              default:
                	break;
            }
		  });
}

