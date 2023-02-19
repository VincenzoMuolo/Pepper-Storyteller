/*
Titolo della storia
title-text
 Span errore titolo
 title-error
 
 paragrafo
 paragraph(N++) 
 
*/
function check_title() {
	let current_title=document.getElementById("title-text").value;
	$.ajax({
          type: 'GET',
          url: 'get_titles.php',
          success: function(result) {
          		var jsonData = JSON.parse(result);
              	var str = JSON.stringify(jsonData);
              	var stored_titles = JSON.parse(str);
                for( let i=0;i<stored_titles.length;i++){
                	if(stored_titles[i].Titolo==current_title){
                    	document.getElementById("title-error").style.visibility="visible";
                        document.getElementById("title-error").textContent="Esiste già una storia con questo nome";
                        sessionStorage.setItem("is-title-ok","NO");
                        break;
                    }else if(stored_titles[i].Titolo!=current_title){
                    	document.getElementById("title-error").style.visibility="hidden";
                        sessionStorage.setItem("is-title-ok","YES");
                    }
                    if(current_title.length>=40){
                    	document.getElementById("title-error").style.visibility="visible";
                        document.getElementById("title-error").textContent="Il titolo è troppo lungo";
                        sessionStorage.setItem("is-title-ok","NO");
                        break;
                    }else if(current_title.length<40&&current_title.length>2){
                    	document.getElementById("title-error").style.visibility="hidden";
                        sessionStorage.setItem("is-title-ok","YES");
                    }
                    else if(current_title.length<=2){
                    	document.getElementById("title-error").style.visibility="visible";
                        document.getElementById("title-error").textContent="Il titolo è troppo corto";
                        sessionStorage.setItem("is-title-ok","NO");
                        break;
                    }
                }
                check_submit_state();
          }
    });
	$.ajax({
          type: 'GET',
          url: 'get_titles_validate.php',
          success: function(result) {
          		var jsonData = JSON.parse(result);
              	var str = JSON.stringify(jsonData);
              	var stored_titles = JSON.parse(str);
                for( let i=0;i<stored_titles.length;i++){
                	if(stored_titles[i].Titolo==current_title){
                    	
                    	swal({
                        	icon: "warning",
                            title: "Prima di continuare...",
                            text: "Ci dispiace informarvi che risulta già una storia con questo nome in fase di accettazione. ",
        					timer: 3000,
      						buttons: false,
                    	}).then(() => {
                        	document.getElementById("title-error").style.visibility="visible";
                        	document.getElementById("title-error").textContent="Esiste già una storia con questo nome";
    						sessionStorage.setItem("is-title-ok","NO");
						})
                        break;
                    }
                }
          }    
	});   
}

function goto_check_paragraph(){
	sessionStorage.clear();
	let counter=1;
	var paragraph=document.getElementById("textArea"+counter);
    check_paragraph(paragraph); 
    try{
    	while(counter){
    		counter++;
            if(!document.getElementById("textArea"+counter).value)
            	throw "Null paragraph";
            else {
    			paragraph=document.getElementById("textArea"+counter);
            	check_paragraph(paragraph);
            }
        }
    }catch(err){
    	console.log("Errore : "+err);
    }finally {
        check_title();
    	check_submit_state();
    }
}

function check_paragraph(current_paragraph){
	var num=current_paragraph.id.substr(-1, current_paragraph.id.lenght);
	if(current_paragraph.value.length>1000){
    	document.getElementById("par-error"+num).style.display="block";
        document.getElementById("par-error"+num).textContent="Il paragrafo supera il numero massimo di caratteri";	
    	sessionStorage.setItem("is-par-ok"+num, "NO");
    }else if(current_paragraph.value.length==0||current_paragraph.value==null){
    	document.getElementById("par-error"+num).style.display="block";
        document.getElementById("par-error"+num).textContent="Il paragrafo non può essere vuoto";	
    	sessionStorage.setItem("is-par-ok"+num, "NO");
    }else{
    	document.getElementById("par-error"+num).style.display="none";
        sessionStorage.setItem("is-par-ok"+num, "YES");	
    }
    check_submit_state();
}
function check_submit_state(){
	var count=1;
    var id="is-par-ok";
    var complete_id=id+count;
    var p_state="YES";
    while(sessionStorage.getItem(complete_id)!=null){
    	if(sessionStorage.getItem(complete_id)=="NO"){
        	p_state="NO";
            break;
        }
        complete_id=id+(count++);
    }
	if(sessionStorage.getItem("is-title-ok")=="YES" && p_state=="YES"){
    	document.getElementById("upload-story").type="submit";
    }else if(sessionStorage.getItem("is-title-ok")=="NO" || p_state=="NO"){
    	document.getElementById("upload-story").type="button";
    }
}






