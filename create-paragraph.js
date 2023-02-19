//Funzione per creare programmaticamente dei paragrafi indicizzabili
var data,
	p_nav,
	counter=1,
    flag_moral=false;


function createParagraph(){
    	data="<div id='paragraph"+counter+"' class='paragraph'>"
        		+"<div class='top-paragraph-card'>"
                	+"<div class='top-paragraph-card-left'>"
                    	+"<h3>Paragrafo "+counter+"</h3>"
                    	+"<i id='par"+counter+"' onclick='openParagraph(this,"+counter+")' class='fas fa-chevron-down'> </i>"
                	+"</div>"
                    +"<div class='top-paragraph-card-right'>"
  						+"<i id='imageP"+counter+"' onclick='checkAttachment(this,"+counter+")' name='imageIcon' class='fas fa-image'>"
    					+"<i id='checkImage"+counter+"' class='fas fa-check default'></i></i>"
                        +"<input id='image-state"+counter+"' type='text' name='image_state[]' style='display:none;'>"
    			 		+"<i id='colorP"+counter+"' onclick='checkAttachment(this,"+counter+")' class='fas fa-palette'>"
    					+"<i id='checkColor"+counter+"' class='fas fa-check default'></i></i>"
                        +"<i id='videoP"+counter+"' onclick='checkAttachment(this,"+counter+")' class='fas fa-video'>"
    					+"<i id='checkVideo"+counter+"' class='fas fa-check default'></i></i>"
                        +"<i id='audioP"+counter+"' onclick='checkAttachment(this,"+counter+")' class='fas fa-music'>"
    					+"<i id='checkAudio"+counter+"' class='fas fa-check default'></i></i>"
					+"</div>"
        		+"</div>"
			+"<textarea id='textArea"+counter+"' name='paragraph[]' class='form-control' onfocus='openParagraph(this,"+counter+")' onfocusout='check_paragraph(this)' placeholder='Testo qui...' required='required'></textarea>"
			+"<span id='par-error"+counter+"' class='invalid-feedback' style='display:none;'></span>"
            +"<div id='imageSelector"+counter+"' class='itemSel'>"
    			+"<h3>Allega immagine al paragrafo</h3>"
                +"<div id='image-link"+counter+"' style='display:none;'></div>"
    			+"<div id='"+counter+"' class='item-container'onclick='check_images(this);'>"
        			+"<div id='load-image-box"+counter+"' class='fix-close-pos'>"
            			+"<input id='button-image"+counter+"' name='images[]' class='uploadBox' type='file' onchange='getFileData(this,"+counter+")'>"
                        +"<i id='remove-image"+counter+"' class='fas fa-times timesDefault' onclick='removeInput(this,"+counter+")'></i>"
        			+"</div>"
                    +"<input id='remove-img-btn"+counter+"' value='Cambia immagine' class='uploadBox' type='button' style='display:none;'>"
    			+"</div>"
    			+"<input type='button' id='close"+counter+"' class='buttonClose' value='Salva' onclick='closeAttachment("+counter+")'>"
			+"</div><!--Chiude Selettore immagine-->"
            +"<div id='videoSelector"+counter+"' class='itemSel'> <!--Inizio edit video-->"
    					+"<h3>Allega video al paragrafo</h3>"
               			+"<div id='image-link"+counter+"' style='display:none;'></div>"
    					+"<div id='"+counter+"' class='item-container'onclick='check_images(this);'>"
        					+"<div id='load-image-box"+counter+"' class='fix-close-pos'>"
            					+"<input id='button-video"+counter+"' name='video[]' class='uploadBox' type='file' onchange='getFileData(this,"+counter+")'>"
                        		+"<i id='remove-video"+counter+"' class='fas fa-times timesDefault' onclick='removeInput(this,"+counter+")'></i>"
                                +"<input id='remove-video-btn"+counter+"' value='Cambia video' class='uploadBox' type='button' style='display:none;' onclick='removeInput(this,"+counter+")'>"
        					+"</div>"
    					+"</div>"
    					+"<input type='button' id='close"+counter+"' class='buttonClose' value='Salva' onclick='closeAttachment("+counter+")'>"
					+"</div><!--Chiude Selettore video-->"
                    +"<div id='audioSelector"+counter+"' class='itemSel'> <!--Inizio edit audio-->"
    					+"<h3>Allega audio al paragrafo</h3>"
               			+"<div id='image-link"+counter+"' style='display:none;'></div>"
    					+"<div id='"+counter+"' class='item-container'onclick='check_images(this);'>"
        					+"<div id='load-image-box"+counter+"' class='fix-close-pos'>"
            					+"<input id='button-audio"+counter+"' name='audio[]' class='uploadBox' type='file' onchange='getFileData(this,"+counter+")'>"
                        		+"<i id='remove-audio"+counter+"' class='fas fa-times timesDefault' onclick='removeInput(this,"+counter+")'></i>"
        					+"</div>"
    					+"</div>"
    					+"<input type='button' id='close"+counter+"' class='buttonClose' value='Salva' onclick='closeAttachment("+counter+")'>"
					+"</div><!--Chiude Selettore audio-->"
			+"<div id='colorSelector"+counter+"' class='itemSel'>"
            	+"<h3>Scegli un colore per il paragrafo</h3>"
                +"<div class='item-container'>"
                    +"<div id='colorDiv"+counter+"' class='favColor' onclick='disableHint("+counter+")'>"
                        +"<div class='fix-close-pos'>"
                            +"<input type='color' id='favcolor"+counter+"' class='customColor' name='colors[]' value='#92A8D2' onchange='getColorData(this,"+counter+")'>"
                            +"<i id='remove-color"+counter+"' class='fas fa-times timesDefaultColor' onclick='removeInput(this,"+counter+")'></i>"
                        +"</div>"
                    +"</div>"
                +"</div>"
                +"<input type='button' id='close"+counter+"' class='buttonClose' value='Salva' onclick='closeAttachment("+counter+")'>"
                +"<div class='span-area'>"
                	+"<span id='clickHint"+counter+"'>Clicca nell'area</span>"
                  	+"<span id='feedbackHint"+counter+"' style='display:none;'>Colore salvato!</span>"
                  	+"<span id='deleteColor"+counter+"' style='display:none;'>Colore rimosso!</span>"
                +"</div>"                 
            +"</div>"
         +"</div>";
		document.getElementById("container").insertAdjacentHTML("beforeend",data);
       	counter++;
        fix_title();      
}

//Comando per cancellare l'ultimo paragrafo
function deleteParagraph() {
    if(counter>2){
        counter=counter-1;
		var obj1 = document.getElementById("paragraph"+counter);
  		obj1.remove();
        goto_check_paragraph();
    }
}


function toggle_moral(state){
	let data;
    if(state=="AGGIUNGI"){
    		data="<div id='moral-card' class='top-paragraph-card'>"
             		+"<div class='top-paragraph-card-left'>"
                		+"<h3>Morale</h3>"
                    	+"<i id='par1000' onclick='openParagraph(this,1000)' class='fas fa-chevron-down rotate'> </i>"
                	+"</div>"
           		+"</div>"
            	+"<textarea id='textArea1000' onchange='enableButton()' name='moral' class='form-control my-textarea' onfocus='openParagraph(this,1000)' placeholder='Testo qui...'></textarea>";	
        	document.getElementById("moral-container").innerHTML= data;
        	flag_moral=true;
    }else{
    	if(state.value=="AGGIUNGI" && flag_moral==false){
    		data="<div id='moral-card' class='top-paragraph-card'>"
             		+"<div class='top-paragraph-card-left'>"
                		+"<h3>Morale</h3>"
                    	+"<i id='par1000' onclick='openParagraph(this,1000)' class='fas fa-chevron-down rotate'> </i>"
                	+"</div>"
           		+"</div>"
            	+"<textarea id='textArea1000' onchange='enableButton()' name='moral' class='form-control my-textarea' onfocus='openParagraph(this,1000)' placeholder='Testo qui...'></textarea>";	
        	document.getElementById("moral-container").innerHTML= data;
        	flag=true;
    	} 	
      	else if(state.value=="RIMUOVI" && flag==true){
    		let temp1 = document.getElementById("moral-card");
            let temp2 = document.getElementById("textArea1000");
  			temp1.remove();
            temp2.remove();
        	flag=false;       
    	}	
    }     
}


