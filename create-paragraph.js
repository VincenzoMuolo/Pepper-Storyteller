//Funzione per creare programmaticamente dei paragrafi indicizzabili
var data,
	p_nav,
	counter=1,
    flag_moral=false;


function createParagraph(){
    	data="<div id='paragraph"+counter+"' class='paragraph'>"
        		+"<div class='top-paragraph-card'>"
                	+"<div class='top-paragraph-card-left'>"
                    	+"<h3 id='title_paragraph"+counter+"'>Paragrafo "+counter+"</h3>"
                    	+"<i id='par"+counter+"' onclick='openParagraph(this,"+counter+")' class='fas fa-chevron-down'> </i>"
                        +"<div id='box_link_to_origin"+counter+"' onclick='move_back_to_main(this)' class='move-back-feedback'><h5 id='link_to_origin"+counter+"'></h5>"
                        +"<i id='title_paragraph_icon"+counter+"' class='fas fa-level-up-alt' style='display:none'></i></div>"
                	+"</div>"
                    +"<div class='top-paragraph-card-right'>"
                    	+"<img id='questionP"+counter+"' onclick='openQuestion("+counter+")' name='questionIcon' src='images/qa.svg'>"
  						+"<i id='imageP"+counter+"' onclick='checkAttachment(this,"+counter+")' name='imageIcon' class='fas fa-image'>"
    					+"<i id='checkImage"+counter+"' class='fas fa-check default'></i></i>"
                        +"<input id='image-state"+counter+"' type='text' name='image_state[]' style='display:none;'>"
    			 		+"<i id='colorP"+counter+"' onclick='checkAttachment(this,"+counter+")' class='fas fa-palette'>"
    					+"<i id='checkColor"+counter+"' class='fas fa-check default'></i></i>"
                        +"<i id='videoP"+counter+"' onclick='checkAttachment(this,"+counter+")' class='fas fa-video'>"
    					+"<i id='checkVideo"+counter+"' class='fas fa-check default'></i></i>"
                        +"<i id='audioP"+counter+"' onclick='checkAttachment(this,"+counter+")' class='fas fa-music top-right-br'>"
    					+"<i id='checkAudio"+counter+"' class='fas fa-check default'></i></i>"
					+"</div>"
        		+"</div>"
			+"<textarea id='textArea"+counter+"' name='paragraph[]' class='form-control' onfocus='openParagraph(this,"+counter+")' onfocusout='check_paragraph(this)' placeholder='Testo qui...' required='required'></textarea>"
			+"<span id='par-error"+counter+"' class='invalid-feedback' style='display:none;'></span>"
            +"<div id='imageSelector"+counter+"' class='itemSel'>"
    			+"<h3>Allega immagine al paragrafo</h3>"
                +"<div id='image-link"+counter+"' style='display:none;'></div>"
    			+"<div id='"+counter+"' class='item-content' onclick='check_images(this);'>"
        			+"<div id='load-image-box"+counter+"' class='align-box'>"
            			+"<input id='button-image"+counter+"' name='images[]' class='uploadBox' type='file' onchange='getFileData(this,"+counter+")'>"
                        +"<i id='remove-image"+counter+"' class='fas fa-times timesDefault' onclick='removeInput(this,"+counter+")'></i>"
        			+"</div>"
                    +"<input id='remove-img-btn"+counter+"' value='Cambia immagine' class='change-image-button' type='button' style='display:none;'>"
    			+"</div>"
    			+"<input type='button' id='close"+counter+"' class='buttonClose' value='Salva' onclick='closeAttachment("+counter+")'>"
			+"</div>"
            +"<!--Chiude Selettore immagine-->"
            +"<div id='videoSelector"+counter+"' class='itemSel'> <!--Inizio edit video-->"
    					+"<h3>Allega video al paragrafo</h3>"
               			+"<div id='image-link"+counter+"' style='display:none;'></div>"
    					+"<div id='"+counter+"' class='item-content'onclick='check_images(this);'>"
        					+"<div id='load-image-box"+counter+"' class='align-box'>"
            					+"<input id='button-video"+counter+"' name='video[]' class='uploadBox' type='file' onchange='getFileData(this,"+counter+")'>"
                        		+"<i id='remove-video"+counter+"' class='fas fa-times timesDefault' onclick='removeInput(this,"+counter+")'></i>"
                                +"<input id='remove-video-btn"+counter+"' value='Cambia video' class='uploadBox' type='button' style='display:none;' onclick='removeInput(this,"+counter+")'>"
        					+"</div>"
    					+"</div>"
    					+"<input type='button' id='close"+counter+"' class='buttonClose' value='Salva' onclick='closeAttachment("+counter+")'>"
					+"</div>"
                    +"<!--Chiude Selettore video-->"
                    +"<div id='audioSelector"+counter+"' class='itemSel'> <!--Inizio edit audio-->"
    					+"<h3>Allega audio al paragrafo</h3>"
               			+"<div id='image-link"+counter+"' style='display:none;'></div>"
    					+"<div id='"+counter+"' class='item-content'onclick='check_images(this);'>"
        					+"<div id='load-image-box"+counter+"' class='align-box'>"
            					+"<input id='button-audio"+counter+"' name='audio[]' class='uploadBox' type='file' onchange='getFileData(this,"+counter+")'>"
                        		+"<i id='remove-audio"+counter+"' class='fas fa-times timesDefault' onclick='removeInput(this,"+counter+")'></i>"
        					+"</div>"
    					+"</div>"
    					+"<input type='button' id='close"+counter+"' class='buttonClose' value='Salva' onclick='closeAttachment("+counter+")'>"
					+"</div>"
                    +"<!--Chiude Selettore audio-->"
                    
                    
                    +"<div id='questionSelector"+counter+"' class='itemSel'>"
                        +"<div class='question-area'>"
                            +"<div class='left-side'>"
                                +"<h3>Inserisci una domanda per il paragrafo</h3>"
                                +"<textarea id='questionText"+counter+"' class='form-control' placeholder='Domanda qui...' name='question[]' ></textarea>"
                            +"</div>"
                            +"<div class='right-side'>"
                                +"<h3>Risposte e re-indirizzamento</h3>"
                                +"<div class='answers-area'>"
                                +"<div class='input-field'>"
                                    +"<input id='question"+counter+"field1' type='text' style='width: 10em;!important' placeholder='Risposta...' name='answer1[]'>"
                                    +"<div id='select_answer_type"+counter+"field1' style='display:none' class='select-box'>"
                                    	+"<select id='answer_type"+counter+"field1' name='answerType1[]' onchange='change_answer_state(this, "+counter+")'>"
                                        	+"<option value='0'>Tipo risposta...</option>"
                                            +"<option value='1'>Corretta</option>"
                                            +"<option value='2'>Sbagliata</option>"
                                     	+"</select>"
                                 	+"</div>"
                                    +"<div id='select_question"+counter+"field1' class='select-box'>"
                                    	+"<select id='question"+counter+"menuParagraph1' name='idParDest1[]' onclick='disableCurrentParagraphOption(this, "+counter+")' onchange='show_select_paragraph(this,"+counter+")'>"
                                        	+"<option value='0'>Seleziona paragrafo...</option>"
                                     	+"</select>"
                                     	+"<img id='"+counter+"' name='1' class='goto-paragraph' src='images/gotop.svg' onclick='goToSelectedParagraph(this)'>"
                                 	+"</div>"
                                +"</div>"
                                +"<div class='input-field'>"
                                   +"<input id='question"+counter+"field2' type='text' style='width: 10em;!important' placeholder='Risposta...' name='answer2[]'>"
                                    +"<div id='select_answer_type"+counter+"field2' style='display:none' class='select-box'>"
                                    	+"<select id='answer_type"+counter+"field2' name='answerType2[]' onchange='change_answer_state(this, "+counter+")'>"
                                        	+"<option value='0'>Tipo risposta...</option>"
                                            +"<option value='1'>Corretta</option>"
                                            +"<option value='2'>Sbagliata</option>"
                                     	+"</select>"
                                 	+"</div>"
                                   +"<div id='select_question"+counter+"field2' class='select-box'>"
                                    	+"<select id='question"+counter+"menuParagraph2' name='idParDest2[]' onclick='disableCurrentParagraphOption(this, "+counter+")' onchange='show_select_paragraph(this,"+counter+")'>"
                                        	+"<option value='0'>Seleziona paragrafo...</option>"
                                     	+"</select>"
                                     	+"<img id='"+counter+"' name='2' class='goto-paragraph' src='images/gotop.svg' onclick='goToSelectedParagraph(this)'>"
                                 	+"</div>"                                
                                +"</div>"
                                +"<div class='input-field'>"
                                    +"<input id='question"+counter+"field3' type='text' style='width: 10em;!important' placeholder='Risposta...' name='answer3[]'>"
                                    +"<div id='select_answer_type"+counter+"field3' style='display:none' class='select-box'>"
                                    	+"<select id='answer_type"+counter+"field3' name='answerType3[]' onchange='change_answer_state(this, "+counter+")'>"
                                        	+"<option value='0'>Tipo risposta...</option>"
                                            +"<option value='1'>Corretta</option>"
                                            +"<option value='2'>Sbagliata</option>"
                                     	+"</select>"
                                 	+"</div>"
                                    +"<div id='select_question"+counter+"field3' class='select-box'>"
                                    	+"<select id='question"+counter+"menuParagraph3' name='idParDest3[]' onclick='disableCurrentParagraphOption(this, "+counter+")' onchange='show_select_paragraph(this,"+counter+")'>"
                                        	+"<option value='0'>Seleziona paragrafo...</option>"
                                     	+"</select>"
                                     	+"<img id='"+counter+"' name='3' class='goto-paragraph' src='images/gotop.svg' onclick='goToSelectedParagraph(this)'>"
                                 	+"</div>"                               
                                +"</div>"
                                +"<div class='input-field'>"
                                    +"<input id='question"+counter+"field4' type='text' style='width: 10em;!important' placeholder='Risposta...' name='answer4[]'>"
                                    +"<div id='select_answer_type"+counter+"field4' style='display:none' class='select-box'>"
                                    	+"<select id='answer_type"+counter+"field4' name='answerType4[]' onchange='change_answer_state(this, "+counter+")'>"
                                        	+"<option value='0'>Tipo risposta...</option>"
                                            +"<option value='1'>Corretta</option>"
                                            +"<option value='2'>Sbagliata</option>"
                                     	+"</select>"
                                 	+"</div>"
                                    +"<div id='select_question"+counter+"field4' class='select-box'>"
                                    	+"<select id='question"+counter+"menuParagraph4' name='idParDest4[]' onclick='disableCurrentParagraphOption(this, "+counter+")' onchange='show_select_paragraph(this,"+counter+")'>"
                                        	+"<option value='0'>Seleziona paragrafo...</option>"
                                     	+"</select>"
                                     	+"<img id='"+counter+"' name='4' class='goto-paragraph' src='images/gotop.svg' onclick='goToSelectedParagraph(this)'>"
                                 	+"</div>"                                
                                +"</div>"
                            +"</div>"
                        +"</div>"
                    +"</div>"
                    +"<div class='bottom-area'>"
                        +"<input type='button' id='close"+counter+"' class='buttonClose' value='Salva' onclick='closeAttachment("+counter+")'>"
                        +"<input type='button' id='undo"+counter+"' class='buttonUndo' value='Cancella input' onclick='clearQuestion("+counter+")'>"
                    	+"<div class='end-story-section'>"
                                +"<div class='end-story-icon-altered'>"
                                    +"<i class='fas fa-question-circle fa-lg' style='color: #1e1e24'></i>"
                                    +"<div class='end-story-info'>Imposta a quale paragrafo far terminare la storia.<br>Il paragrafo non dovrà avere domande. Solo la conclusione del racconto</div>"
                                +"</div>"
                                +"<label for='end_story_here"+counter+"'>Vai al paragrafo conclusivo</label>"
                                +"<select id='question"+counter+"endingParagraph' name='idParDestF[]' onclick= 'show_ending_paragraphs(this,"+counter+")'>"
                                     	+"<option value='0'>Seleziona paragrafo...</option>"
                                    +"</select>"
                            +"</div>"
                    +"</div>"
                +"</div>"
                +"<!--Chiude Selettore domanda-->"


				
			+"<div id='colorSelector"+counter+"' class='itemSel'>"
            	+"<h3>Scegli un colore per il paragrafo</h3>"
                +"<div class='item-container'>"
                    +"<div id='colorDiv"+counter+"' class='favColor' onclick='disableHint("+counter+")'>"
                        +"<div>"
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
        load_paragraph_list();
}

//Comando per cancellare l'ultimo paragrafo
function deleteParagraph() {
    if(counter>2){
        counter=counter-1;
		var obj1 = document.getElementById("paragraph"+counter);
  		obj1.remove();
        goto_check_paragraph();
        remove_from_paragraph_list();
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

