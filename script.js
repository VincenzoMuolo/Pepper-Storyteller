function openImage(number){
	let id1="imageSelector";
    let id2="textArea";
    let id3="imageP";
    let id4="colorP";
    let id5="questionP";
    let id6="par";
    let id7="videoP";
    let id8="audioP";
    
    let elementId1 = id1 + number;
    let elementId2 = id2 + number;
    let elementId3 = id3 + number;
    let elementId4 = id4 + number;
    let elementId5 = id5 + number;
    let elementId6 = id6 + number;
    let elementId7 = id7 + number;
    let elementId8 = id8 + number;
    /*elementid4 è colorP, quindi sto verificando se la finestra colore è aperta*/
    if(document.getElementById(elementId4).classList.contains("active")){
        /*Se è aperta richiamo il metodo per aprire la finestra colore*/
    	openColor(number);
        /*Come risultato la finestra colore si chiuderà*/
        document.getElementById(elementId1).classList.toggle("showICSelector");/*Apro la finestra immagine */
    	document.getElementById(elementId2).classList.toggle("hideTextArea");/*chiudo la textarea */
    	document.getElementById(elementId3).classList.toggle("active");/*imposto l'icona immagine allo stato attivo*/
    }
    /*discorso analogo per elementid7 e 8, cioè video ed audio*/
    else if(document.getElementById(elementId7).classList.contains("active")){
    	openVideo(number);
        document.getElementById(elementId1).classList.toggle("showICSelector");
    	document.getElementById(elementId2).classList.toggle("hideTextArea");
    	document.getElementById(elementId3).classList.toggle("active");
    }
    else if(document.getElementById(elementId8).classList.contains("active")){
    	openAudio(number);
        document.getElementById(elementId1).classList.toggle("showICSelector");
    	document.getElementById(elementId2).classList.toggle("hideTextArea");
    	document.getElementById(elementId3).classList.toggle("active");
    }
    else if(document.getElementById(elementId5).classList.contains("active")){
    	openQuestion(number);
        document.getElementById(elementId1).classList.toggle("showICSelector");
    	document.getElementById(elementId2).classList.toggle("hideTextArea");
    	document.getElementById(elementId3).classList.toggle("active");
    }
    /*Se siamo qui allora nessun altro elemento è attivo in finestra, quindi, se la finestra è attiva si chiude e viceversa */
    else{
        document.getElementById(elementId1).classList.toggle("showICSelector");
    	document.getElementById(elementId2).classList.toggle("hideTextArea");
    	document.getElementById(elementId3).classList.toggle("active");
    }
    /*se il paragrafo è aperto lo chiudo ruotando analogamente anche l'icona espandi testo paragrafo */
    if(document.getElementById(elementId2).classList.contains("isFocused")){
    	document.getElementById(elementId6).classList.toggle("rotate");
    	document.getElementById(elementId2).classList.remove("isFocused");
    }
    /*Se l'icona paragrafo è visibile, fin quando è attiva una finestra diversa da quella di testo non sarà visibile */
    if(document.getElementById(elementId6).style.display!="none"){
    	document.getElementById(elementId6).style.display="none";
    }else
    	document.getElementById(elementId6).style.display="inline";
    	
}
function openColor(number){
	let id1="colorSelector";
    let id2="textArea";
    let id3="colorP";
    let id4="imageP";
    let id5="questionP";
    let id6="par";
    let id7="feedbackHint";
    let id8="deleteColor";
    let id9="videoP";
    let id10="audioP";
    let elementId1 = id1 + number;
    let elementId2 = id2 + number;
    let elementId3 = id3 + number;
    let elementId4 = id4 + number;
    let elementId5 = id5 + number;
    let elementId6 = id6 + number;
    let elementId7 = id7 + number;
    let elementId8 = id8 + number;
    let elementId9 = id9 + number;
    let elementId10 = id10 + number;
    if(document.getElementById(elementId4).classList.contains("active")){
    	openImage(number);
        document.getElementById(elementId1).classList.toggle("showICSelector");
    	document.getElementById(elementId2).classList.toggle("hideTextArea");
    	document.getElementById(elementId3).classList.toggle("active");
    }
    else if(document.getElementById(elementId5).classList.contains("active")){
    	openQuestion(number);
        document.getElementById(elementId1).classList.toggle("showICSelector");
    	document.getElementById(elementId2).classList.toggle("hideTextArea");
    	document.getElementById(elementId3).classList.toggle("active");
    }
    else if(document.getElementById(elementId9).classList.contains("active")){
    	openVideo(number);
        document.getElementById(elementId1).classList.toggle("showICSelector");
    	document.getElementById(elementId2).classList.toggle("hideTextArea");
    	document.getElementById(elementId3).classList.toggle("active");
    }
    else if(document.getElementById(elementId10).classList.contains("active")){
    	openAudio(number);
        document.getElementById(elementId1).classList.toggle("showICSelector");
    	document.getElementById(elementId2).classList.toggle("hideTextArea");
    	document.getElementById(elementId3).classList.toggle("active");
    }
    else{
        document.getElementById(elementId1).classList.toggle("showICSelector");
    	document.getElementById(elementId2).classList.toggle("hideTextArea");
    	document.getElementById(elementId3).classList.toggle("active");
    }
    if(document.getElementById(elementId2).classList.contains("isFocused")){
    	document.getElementById(elementId6).classList.toggle("rotate");
    	document.getElementById(elementId2).classList.remove("isFocused");
    }
    if(document.getElementById(elementId6).style.display!="none"){
    	document.getElementById(elementId6).style.display="none";
    }else
    	document.getElementById(elementId6).style.display="inline";
}
function openVideo(number){
	let id1="videoSelector";
    let id2="textArea";
    let id3="videoP";
    let id4="colorP";
    let id5="questionP";
    let id6="par";
    let id7="imageP";
    let id8="audioP";
    let elementId1 = id1 + number;
    let elementId2 = id2 + number;
    let elementId3 = id3 + number;
    let elementId4 = id4 + number;
    let elementId5 = id5 + number;
    let elementId6 = id6 + number;
    let elementId7 = id7 + number;
    let elementId8 = id8 + number;
    if(document.getElementById(elementId4).classList.contains("active")){
    	openColor(number);
        document.getElementById(elementId1).classList.toggle("showICSelector");
    	document.getElementById(elementId2).classList.toggle("hideTextArea");
    	document.getElementById(elementId3).classList.toggle("active");
    }
    else if(document.getElementById(elementId5).classList.contains("active")){
    	openQuestion(number);
        document.getElementById(elementId1).classList.toggle("showICSelector");
    	document.getElementById(elementId2).classList.toggle("hideTextArea");
    	document.getElementById(elementId3).classList.toggle("active");
    }
    else if(document.getElementById(elementId7).classList.contains("active")){
    	openImage(number);
        document.getElementById(elementId1).classList.toggle("showICSelector");
    	document.getElementById(elementId2).classList.toggle("hideTextArea");
    	document.getElementById(elementId3).classList.toggle("active");
    }
    else if(document.getElementById(elementId8).classList.contains("active")){
    	openAudio(number);
        document.getElementById(elementId1).classList.toggle("showICSelector");
    	document.getElementById(elementId2).classList.toggle("hideTextArea");
    	document.getElementById(elementId3).classList.toggle("active");
    }
    else{
        document.getElementById(elementId1).classList.toggle("showICSelector");
    	document.getElementById(elementId2).classList.toggle("hideTextArea");
    	document.getElementById(elementId3).classList.toggle("active");
    }
    if(document.getElementById(elementId2).classList.contains("isFocused")){
    	document.getElementById(elementId6).classList.toggle("rotate");
    	document.getElementById(elementId2).classList.remove("isFocused");
    }
    if(document.getElementById(elementId6).style.display!="none"){
    	document.getElementById(elementId6).style.display="none";
    }else
    	document.getElementById(elementId6).style.display="inline";
    	
}
function openAudio(number){
	let id1="audioSelector";
    let id2="textArea";
    let id3="audioP";
    let id4="colorP";
    let id5="questionP";
    let id6="par";
    let id7="imageP";
    let id8="videoP";
    let elementId1 = id1 + number;
    let elementId2 = id2 + number;
    let elementId3 = id3 + number;
    let elementId4 = id4 + number;
    let elementId5 = id5 + number;
    let elementId6 = id6 + number;
    let elementId7 = id7 + number;
    let elementId8 = id8 + number;
    if(document.getElementById(elementId4).classList.contains("active")){
    	openColor(number);
        document.getElementById(elementId1).classList.toggle("showICSelector");
    	document.getElementById(elementId2).classList.toggle("hideTextArea");
    	document.getElementById(elementId3).classList.toggle("active");
    }
    else if(document.getElementById(elementId5).classList.contains("active")){
    	openQuestion(number);
        document.getElementById(elementId1).classList.toggle("showICSelector");
    	document.getElementById(elementId2).classList.toggle("hideTextArea");
    	document.getElementById(elementId3).classList.toggle("active");
    }
    else if(document.getElementById(elementId7).classList.contains("active")){
    	openImage(number);
        document.getElementById(elementId1).classList.toggle("showICSelector");
    	document.getElementById(elementId2).classList.toggle("hideTextArea");
    	document.getElementById(elementId3).classList.toggle("active");
    }
    else if(document.getElementById(elementId8).classList.contains("active")){
    	openVideo(number);
        document.getElementById(elementId1).classList.toggle("showICSelector");
    	document.getElementById(elementId2).classList.toggle("hideTextArea");
    	document.getElementById(elementId3).classList.toggle("active");
    }
    else{
        document.getElementById(elementId1).classList.toggle("showICSelector");
    	document.getElementById(elementId2).classList.toggle("hideTextArea");
    	document.getElementById(elementId3).classList.toggle("active");
    }
    if(document.getElementById(elementId2).classList.contains("isFocused")){
    	document.getElementById(elementId6).classList.toggle("rotate");
    	document.getElementById(elementId2).classList.remove("isFocused");
    }
    if(document.getElementById(elementId6).style.display!="none"){
    	document.getElementById(elementId6).style.display="none";
    }else
    	document.getElementById(elementId6).style.display="inline";
    	
}
/* INIZIO MODIFICHE
    * Logica per la visualizzazione della tab inserisci domanda*/
function openQuestion(number){
	let id1="questionSelector";
    let id2="textArea";
    let id3="imageP";
    let id4="colorP";
    let id5="questionP";
    let id6="par";
    let id7="videoP";
    let id8="audioP";
    
    let elementId1 = id1 + number;
    let elementId2 = id2 + number;
    let elementId3 = id3 + number;
    let elementId4 = id4 + number;
    let elementId5 = id5 + number;
    let elementId6 = id6 + number;
    let elementId7 = id7 + number;
    let elementId8 = id8 + number;
    /*Aggiorniamo la lista paragrafi ogni volta che viene aperto il selettore per le domande*/
    load_paragraph_list();
    /*elementid3 è imageP, quindi sto verificando se la finestra immagine è aperta*/
    if(document.getElementById(elementId3).classList.contains("active")){
    	openImage(number);
        document.getElementById(elementId1).classList.toggle("showICSelector");
    	document.getElementById(elementId2).classList.toggle("hideTextArea");
    	document.getElementById(elementId5).classList.toggle("active");
    }
    /*elementid4 è colorP, quindi sto verificando se la finestra colore è aperta*/
    else if(document.getElementById(elementId4).classList.contains("active")){
        /*Se è aperta richiamo il metodo per aprire la finestra colore*/
    	openColor(number);
        /*Come risultato la finestra colore si chiuderà*/
        document.getElementById(elementId1).classList.toggle("showICSelector");/*Apro la finestra */
    	document.getElementById(elementId2).classList.toggle("hideTextArea");/*chiudo la textarea */
    	document.getElementById(elementId5).classList.toggle("active");/*imposto l'icona allo stato attivo */
    }
    /*discorso analogo per elementid7 e 8, cioè video ed audio*/
    else if(document.getElementById(elementId7).classList.contains("active")){
    	openVideo(number);
        document.getElementById(elementId1).classList.toggle("showICSelector");
    	document.getElementById(elementId2).classList.toggle("hideTextArea");
    	document.getElementById(elementId5).classList.toggle("active");
    }else if(document.getElementById(elementId8).classList.contains("active")){
    	openAudio(number);
        document.getElementById(elementId1).classList.toggle("showICSelector");
    	document.getElementById(elementId2).classList.toggle("hideTextArea");
    	document.getElementById(elementId5).classList.toggle("active");
    }
    /*Se siamo qui allora nessun altro elemento è attivo in finestra, quindi, se la finestra è attiva si chiude e viceversa */
    else{
        document.getElementById(elementId1).classList.toggle("showICSelector");
    	document.getElementById(elementId2).classList.toggle("hideTextArea");
    	document.getElementById(elementId5).classList.toggle("active");
    }
    /*se il paragrafo è aperto lo chiudo ruotando analogamente anche l'icona espandi testo paragrafo */
    if(document.getElementById(elementId2).classList.contains("isFocused")){
    	document.getElementById(elementId6).classList.toggle("rotate");
    	document.getElementById(elementId2).classList.remove("isFocused");
    }
    /*Se l'icona paragrafo è visibile, fin quando è attiva una finestra diversa da quella di testo non sarà visibile */
    if(document.getElementById(elementId6).style.display!="none"){
    	document.getElementById(elementId6).style.display="none";
    }else
    	document.getElementById(elementId6).style.display="inline";
    	
}
/* FINE MODIFICHE*/
function openParagraph(object,number){
    let id1="par";
    let id2="textArea";
    let elementId1 = id1 + number;
    let elementId2 = id2 + number;
    if(object.id!=elementId2){
    	document.getElementById(elementId1).classList.toggle("rotate");
    	document.getElementById(elementId2).classList.toggle("isFocused");
    }
    else if(document.getElementById(elementId2).classList.contains("isFocused")==false){
    	document.getElementById(elementId1).classList.toggle("rotate");
    	document.getElementById(elementId2).classList.toggle("isFocused");
    }
}

function closeAttachment(number){
	let id1="textArea";
    let id2="colorP";
    let id3="imageP";
    let id4="videoP";
    let id5="audioP";
    let id6="questionP";
    let id7="par";
    let elementId1 = id1 + number;
    let elementId2 = id2 + number;
    let elementId3 = id3 + number;
    let elementId4 = id4 + number;
    let elementId5 = id5 + number;
    let elementId6 = id6 + number;
    let elementId7 = id7 + number;
    if(document.getElementById(elementId1).classList.contains("hideTextArea")){
    	if(document.getElementById(elementId2).classList.contains("active"))	openColor(number);
        else if(document.getElementById(elementId3).classList.contains("active"))	openImage(number);
        else if(document.getElementById(elementId4).classList.contains("active"))	openVideo(number);
        else if(document.getElementById(elementId5).classList.contains("active"))	openAudio(number);
        else if(document.getElementById(elementId6).classList.contains("active"))	openQuestion(number);
    }
    document.getElementById(elementId7).style.display="inline";
}
/*INIZIO MODIFICHE
Aggiunta funzione per eliminare i progressi della domanda che si sta inserendo*/
function clearQuestion(number){
	/*TextArea*/
    document.getElementById("questionText"+number).value="";
    document.getElementById("question"+number+"field1").value="";
    document.getElementById("question"+number+"field2").value="";
    document.getElementById("question"+number+"field3").value="";
    document.getElementById("question"+number+"field4").value="";
    //qui rimuovo i tipi risposta
    for(let i=1;i<=4;i++){
     	document.getElementById("answer_type"+number+"field"+i).value="0";
    	document.getElementById("question" + number +"field"+i).classList.remove("default_style", "correct_style", "wrong_style", "end_style");
    }
    //qui rimuovo i re-indirizzamenti
    for (let i = 1; i <= 4; i++) {
        let field = document.getElementById("question" + number + "menuParagraph" + i);
        if (field.value) {
            document.getElementById("link_to_origin" + field.value).textContent = "";
            document.getElementById("link_to_origin" + field.value).value = 0;
            document.getElementById("box_link_to_origin" + field.value).value = 0;
            document.getElementById("title_paragraph_icon" + field.value).style.display = "none";
        }
        document.getElementById("question"+number+"menuParagraph"+i).value="0";
    }
}
/*FINE MODIFICHE*/
function getFileData(object, number){
	let id1="checkImage";
    let id2="image-state";
    let id3="checkVideo";
	let id4="checkAudio";
    let elementId1 = id1 + number;
    let elementId2 = id2 + number;
    let elementId3 = id3 + number;
    let elementId4 = id4 + number;
	var file = object.files[0];
    console.log("Tipo di Object: "+object.name);
    if(object.name==="images[]"){
    	document.getElementById(elementId1).classList.add("checkState");
    	document.getElementById(elementId2).value="false";
        try{
        	showImage(object, number);
        }catch(error){
        	console.log("Visualizzazione immagine non prevista");
        }
    }else if(object.name==="video[]"){
    	document.getElementById(elementId3).classList.add("checkState");
    }else if(object.name==="audio[]"){
    	document.getElementById(elementId4).classList.add("checkState");
    }
}
function showImage(input, id) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById("image-preview"+id);
            const previewImg = document.getElementById("preview-img"+id);
            try{
                previewImg.src = e.target.result;
            	preview.style.display = 'block';
            }catch(error){
            	console.log("Visualizzazione immagine non prevista");
            }
        };
        reader.readAsDataURL(file);
    }
}

function getColorData(object, number){
	let id1="checkColor";
    let id2="feedbackHint"; 
    let elementId1 = id1 + number;
    let elementId2 = id2 + number;
	document.getElementById(elementId1).classList.add("checkState");
    document.getElementById(elementId2).style.display="inline";
    setTimeout(function(){
    	document.getElementById(elementId2).style.display="none";
    }, 2000);
    
}
function disableHint(number){
    let id1="clickHint";
    let elementId1=id1 + number;
    setTimeout(function(){ 
    	document.getElementById(elementId1).style.display="none";
    }, 900);
}

//rimuovi l'immagine visualizzata
function removeImageView(id) {
    const preview = document.getElementById("image-preview"+id);
    try{
        preview.style.display = 'none';
    }catch(error){
    	console.log("Immagine non presente");
    }

}

function removeInput(object,number){
	let id1="button-image";
    let id2="checkImage";
    let id3="favcolor";
    let id4="checkColor";
    let id7="deleteColor";
    let id8="remove-image";
    let id9="remove-color";
    let id10="checkVideo";
	let id11="checkAudio";
    let id12="remove-video";
	let id13="remove-audio";
    let id14="button-video";
    let id15="button-audio";
    let id16="remove-video-btn";
    let elementId1=id1 + number;
    let elementId2=id2 + number;
    let elementId3=id3 + number;
    let elementId4=id4 + number;
    let elementId7=id7 + number;
    let elementId8=id8 + number;
    let elementId9=id9 + number;
    let elementId10=id10 + number;
    let elementId11=id11 + number;
    let elementId12=id12 + number;
    let elementId13=id13 + number;
    let elementId14=id14 + number;
    let elementId15=id15 + number;    
    let elementId16=id16 + number;   
    if(object.id===elementId8){
        if(document.getElementById(elementId1).value!=null)
    		document.getElementById(elementId1).value= '';
            removeImageView(number);
    	if(document.getElementById(elementId2).classList.contains("checkState")){
    		document.getElementById(elementId2).classList.remove("checkState");
        	document.getElementById(elementId2).value="false";
        }
    
    }else if(object.id===elementId9){
   		if(document.getElementById(elementId3).value!=null){
    		document.getElementById(elementId3).value= '#92A8D2';
        	document.getElementById(elementId7).style.display="inline";
    		setTimeout(function(){
    			document.getElementById(elementId7).style.display="none";
    		}, 1500);
    	}
    	if(document.getElementById(elementId4).classList.contains("checkState"))
    		document.getElementById(elementId4).classList.remove("checkState"); 
    }//video
    else if(object.id===elementId12||object.id===elementId16){
        if(document.getElementById(elementId14).value!=null)
    		document.getElementById(elementId14).value= '';
    	if(document.getElementById(elementId10).classList.contains("checkState")){
    		document.getElementById(elementId10).classList.remove("checkState");
        	document.getElementById(elementId10).value="false";
        }
    }else if(object.id===elementId13){
        if(document.getElementById(elementId15).value!=null)
    		document.getElementById(elementId15).value= '';
    	if(document.getElementById(elementId11).classList.contains("checkState")){
    		document.getElementById(elementId11).classList.remove("checkState");
        	document.getElementById(elementId11).value="false";
        }
    }
    if(object.id===elementId16){
    	document.getElementById("button-video"+number).style.display="inline";
        document.getElementById("remove-video"+number).style.display="inline";
        document.getElementById("remove-video-btn"+number).style.display="none";
     }
}

function closePane(){
	document.getElementById("help-panel").classList.toggle("closed");
    document.getElementById("btn-container1").classList.toggle("closed");
    document.getElementById("btn-container2").classList.toggle("closed");
    document.getElementById("help-text1").classList.toggle("closed");
    document.getElementById("help-text2").classList.toggle("closed");
    document.getElementById("help-text3").classList.toggle("closed");
    document.getElementById("paragraph-navigator").classList.toggle("closed");
    document.getElementById("container").classList.toggle("expand");
    document.getElementById("left-side-banner").classList.toggle("expand");
    document.getElementById("moral-container").classList.toggle("expand");   
    document.getElementById("toggle-icon").classList.toggle("close-pane");
}

function enable_port_navbar(){
        document.getElementById("navbar-title").classList.toggle("remove-title");
	if(document.getElementById("nav-portrait").classList.contains("nav-switch")==true){
    	document.getElementById("nav-portrait").classList.toggle("anim-out");
		setTimeout(function(){ 
    		document.getElementById("nav-portrait").classList.toggle("nav-switch");
    	}, 1000);   
    }else{
    	if(document.getElementById("nav-portrait").classList.contains("anim-out")==true)
        	document.getElementById("nav-portrait").classList.toggle("anim-out");
    	document.getElementById("nav-portrait").classList.toggle("nav-switch");
    }
}

function userStories(is_admin) {
	var data;
    var data_admin;
    var counter= 0;
    var counter_admin= 0;
    var hasquestion= false;
    	$.ajax({
            type: 'GET',
            url: 'user_stories.php',
    		success: function(userStoriesResult) {
        		var jsonData = JSON.parse(userStoriesResult);
                var str = JSON.stringify(jsonData);
				var obj = JSON.parse(str);
                if(obj[0]==null){
                	document.getElementById("if-no-stories").style.display="flex";
                }
                for(let story in obj){
                console.log("STORIA : "+obj[counter].Titolo);
                	if(obj[counter].Tipo=="storia"){
                        data="<div id='grid-item"+counter+"' class='grid-item' onclick='open_story(this)'>"
                                +"<div class='grid-item-overlay'>"
                                    +"<label id='text-label"+counter+"' class='grid-item-title'></label>"
                                +"</div>"
                            +"</div>";
                        document.getElementById("story-container").insertAdjacentHTML("beforeend",data);
                        document.getElementById("grid-item"+counter).name=obj[counter].Titolo;
                        document.getElementById("text-label"+counter).textContent=obj[counter].Titolo;
                        addImageBackground(obj[counter].Titolo,counter,'user');   
                	}else if(obj[counter].Tipo=="test"){
                    	data="<div id='grid-item"+counter+"' class='grid-item' onclick='open_story(this)'>"
                                +"<div class='grid-item-overlay'>"
                                    +"<label id='text-label"+counter+"' class='grid-item-title'></label>"
                                +"</div>"
                            +"</div>";
                        document.getElementById("test-container").insertAdjacentHTML("beforeend",data);
                        document.getElementById("grid-item"+counter).name=obj[counter].Titolo;
                        document.getElementById("text-label"+counter).textContent=obj[counter].Titolo;
                        addImageBackground(obj[counter].Titolo,counter,'user');
                    }
                    counter++;
                    if(obj.length===counter){
                    	if(document.getElementById("test-container").childElementCount === 1)
                    			document.getElementById("if-no-tests").style.display="flex";
                    }
				}
    		}
		});
        if(is_admin=="SI"){
        	document.getElementById("admin-function").style.display="flex";
        	$.ajax({
            	type: 'GET',
            	url: 'validate_stories.php',
    			success: function(storiesResult) {
        			var jsonDataA = JSON.parse(storiesResult);
                	var str_A = JSON.stringify(jsonDataA);
					var obj_admin = JSON.parse(str_A);
                    if(obj_admin[0]==null){
                		document.getElementById("no-story-to-validate").style.display="flex";
                	}
                	for(let story_A in obj_admin){
                		data_admin="<div id='admin-grid-item"+counter_admin+"' class='grid-item'onclick='validate_story(this);'>"
                            +"<div class='grid-item-overlay'>"
                            	+"<label id='admin-text-label"+counter_admin+"' class='grid-item-title'></label>"
                            +"</div>"
                        +"</div>";
                        document.getElementById("story-tovalidate-container").insertAdjacentHTML("beforeend",data_admin);
                        document.getElementById("admin-grid-item"+counter_admin).name=obj_admin[counter_admin].Titolo;
                        document.getElementById("admin-text-label"+counter_admin).textContent=obj_admin[counter_admin].Titolo;
                        addImageBackground(obj_admin[counter_admin].Titolo,counter_admin,'admin');   
                        counter_admin++;
                	}
    			}
			});
        }else document.getElementById("admin-function").style.display="none";
}

function addImageBackground(titolo, counter, user_type){
	var background_story = new Image();
	$.ajax({
		type: 'GET',
        data: {"name": titolo},
        url: 'get_image_web.php',
    	success: function(base64) {
        	if(base64!=0){
                background_story.src = base64;
                if(user_type=='admin')
            		document.getElementById("admin-grid-item"+counter).style.backgroundImage ='url('+background_story.src+')';
            	else if(user_type=='user')
        			document.getElementById("grid-item"+counter).style.backgroundImage ='url('+background_story.src+')';
            }else{
            	background_story.src ="/images/story-blank.jpg";
                if(user_type=='admin')
            		document.getElementById("admin-grid-item"+counter).style.backgroundImage ='url('+background_story.src+')';
            	else if(user_type=='user')
        			document.getElementById("grid-item"+counter).style.backgroundImage ='url('+background_story.src+')';
            }
       }
    });
}

function switch_function(object) {
    const userFunction = document.getElementById("user-function");
    const adminFunction = document.getElementById("admin-function");
    const userTestFunction = document.getElementById("user-test-function");

    // Deselect all
    userFunction.classList.remove("active");
    adminFunction.classList.remove("active");
    userTestFunction.classList.remove("active");

    // Hide all containers
    document.getElementById("story-container").style.display = "none";
    document.getElementById("story-tovalidate-container").style.display = "none";
    document.getElementById("test-container").style.display = "none";

    // Handle the clicked function
    if (object.id == "user-function") {
        userFunction.classList.add("active");
        document.getElementById("story-container").style.display = "grid";
    } else if (object.id == "admin-function") {
        adminFunction.classList.add("active");
        document.getElementById("story-tovalidate-container").style.display = "grid";
    } else if (object.id == "user-test-function") {
        userTestFunction.classList.add("active");
        document.getElementById("test-container").style.display = "grid";
    }
}

function validate_story(story){
   	sessionStorage.setItem("validate_story", story.name);
    sessionStorage.setItem("accessType", "admin");
	location.href="load_v_story.php";

}
function open_story(story){
   	sessionStorage.setItem("story", story.name);
    sessionStorage.setItem("accessType", "profile");
	location.href="load_story.php";
}
function open_story_homepage(story){
   	sessionStorage.setItem("story", story.name);
    sessionStorage.setItem("accessType", story.id);
	location.href="load_story.php";
}
function open_story_homepage_guest(story){
   	sessionStorage.setItem("story", story.name);
    sessionStorage.setItem("accessType", story.id);
	location.href="load-story-guest.html";
}

function open_paragraph(admin){
	show_button();
	if(!sessionStorage.getItem("accessType").includes("profile") && !sessionStorage.getItem("accessType").includes("admin")){ 
        document.getElementById("go-to").textContent="TORNA ALLA HOMEPAGE";
        document.getElementById("go-to").href="homepage-logged.php";
        document.getElementById("go-to-port").textContent="TORNA ALLA HOMEPAGE";
        document.getElementById("go-to-port").href="homepage-logged.php";
    }
	var data;
    load_paragraph_data(admin);

    setInterval(function(){loading_progress();},1000);
}
function load_paragraph_data(admin){
    if(admin=="admin"){
    	let get_current_story= sessionStorage.getItem("validate_story");
    	$.ajax({
          type: 'GET',
          data: {"name": get_current_story},
          url: 'load_story_paragraph.php',
          success: function(result) {
              var jsonData = JSON.parse(result);
              var str = JSON.stringify(jsonData);
              var obj = JSON.parse(str);   
              //Title
              document.getElementById("story_name").textContent= sessionStorage.getItem("validate_story");
              document.getElementById("story_title").value= sessionStorage.getItem("validate_story");
              //Paragraph-block
              for(let i=0;i<obj.length;i++){
                  data="<div class='paragraph-block'>"
                      +"<label class='head-par-style'>Paragrafo "+(i+1)+"</label>"
                      +"<div class='text-to-image'>"
                          +"<label id='story-paragraph"+i+"' class='paragraph-style'></label>"
                          +"<div class='image-style'>"
                                  +"<img id='paragraph-image"+i+"' width='500px' style='max-width: 400px; max-height: 100%;'>"
                                  +"<video id='paragraph-video"+i+"' width='450' height='450px' controls> </video>"
                          +"</div>"
                      +"</div>"
                  +"</div>"
                  +"<div id='question-area"+(i+1)+"' class='question-field'></div>"
                  +"<div id='conclusion_area"+(i+1)+"'></div>";
                  document.getElementById("paragraph-container").insertAdjacentHTML("beforeend",data);
                  document.getElementById("story-paragraph"+i).textContent= obj[i][0];
             	//Immagine
              	let background_story= new Image();
              	background_story.src = obj[i][1];
              	if(obj[i][1]!=null){
                	//video
                	document.getElementById("paragraph-video"+i).style.display="none";
              		//Resize immagine
              		var ratio;
              		if(background_story.width>background_story.height){
                    	console.log("CASO  ->width > height");
                		ratio=background_story.height/background_story.width;
                        //Extra ratio scale
                        ratio= ratio*1.1;
                        background_story.width=400;
                        background_story.height="auto";
                        //background_story.height=background_story.width*ratio;
                        document.getElementById("paragraph-image"+i).style.width =background_story.width+"px";
                        document.getElementById("paragraph-image"+i).style.height ="auto";
                        //document.getElementById("paragraph-image"+i).style.height =background_story.height+"px";
                    }else if(background_story.width<background_story.height){
                    	console.log("CASO  ->width < height");
                        ratio=background_story.width/background_story.height;
                        //Extra ratio scale
                        ratio= ratio*0.8;
                        background_story.height=450;
                        background_story.width="auto";
                        //background_story.width=background_story.height*ratio;
                        document.getElementById("paragraph-image"+i).style.width =background_story.width+"px";
                        document.getElementById("paragraph-image"+i).style.height =background_story.height+"px";
                    }else{
                    	console.log("CASO  -> width & height non presenti");
                        background_story.height=500;
                        background_story.width=500;
                        document.getElementById("paragraph-image"+i).style.maxWidth ="400px";
                        document.getElementById("paragraph-image"+i).style.maxHeight ="100%";
                    }
                	//Caricamento immagine
              		document.getElementById("paragraph-image"+i).style.backgroundImage='url('+background_story.src+')';
				}
                else if(obj[i][1]===null && obj[i][3]===null){
                    document.getElementById("paragraph-image"+i).style.display="none";
                    document.getElementById("paragraph-video"+i).style.display="none";
                    document.getElementById("story-paragraph"+i).style.width="70%";  
                }
                //Controlliamo se c'è un video
                var video = document.getElementById("paragraph-video"+i);
				var source = document.createElement("source");
                if(obj[i][3]!=null){
                	document.getElementById("paragraph-video"+i).style.display="flex";
                   	source.setAttribute('src',obj[i][3]);
                    source.setAttribute('type', 'video/mp4');
                	video.appendChild(source);
                   	document.getElementById("paragraph-image"+i).style.display="none";
                }
			}
        },
        error: function(xhr, status, error) {
            // Gestione degli errori
            console.log("Si è verificato un errore nella richiesta AJAX");
            setTimeout(function() {load_paragraph_data(admin);},1000);
            // Puoi aggiungere qui la gestione specifica dell'errore di rete
        },
        complete: function(xhr, status){
            try{
            	if(document.getElementById("story-paragraph1").textContent!=null){
                    console.log("Caricamento storia completato");
                    setTimeout(function(){
                    	open_paragraph_conclusion(admin);
                        open_paragraph_question(admin);
                        open_paragraph_moral(admin);
                    },800);
            }
            }catch(err){
            	console.log("Il caricamento richiederà ancora un pò di tempo, ci scusiamo per l'attesa");
            }
        }
      });
    }else{
    	let get_current_story= sessionStorage.getItem("story");
    	$.ajax({
          type: 'GET',
          data: {"name": get_current_story},
          url: 'load_story_paragraph.php',
          success: function(result) {
              var jsonData = JSON.parse(result);
              var str = JSON.stringify(jsonData);
              var obj = JSON.parse(str);   
              //Title
              document.getElementById("story_name").textContent= sessionStorage.getItem("story");
              if(sessionStorage.getItem("accessType").includes("profile")){
              		document.getElementById("test-button").name= sessionStorage.getItem("story");
                    document.getElementById("edit-button").name= sessionStorage.getItem("story");
              		document.getElementById("delete-button").name= sessionStorage.getItem("story");
              }
              //Paragraph-block
              for(let i=0;i<obj.length;i++){
                  data="<div class='paragraph-block'>"
                      	+"<label class='head-par-style'>Paragrafo "+(i+1)+"</label>"
                    	+"<div class='text-to-image'>"
                    		+"<label id='story-paragraph"+i+"' class='paragraph-style'></label>"
                    		+"<div class='image-style'>"
                    			+"<img id='paragraph-image"+i+"' width='500px' style='max-width: 400px; max-height: 100%;'>"
                    			+"<video id='paragraph-video"+i+"' width='450' height='450px' controls> </video>"
                    		+"</div>"
                    	+"</div>"
                  	+"</div>"
                    +"<div id='question-area"+(i+1)+"' class='question-field'></div>"
                    +"<div id='conclusion_area"+(i+1)+"'></div>";
              	document.getElementById("paragraph-container").insertAdjacentHTML("beforeend",data);
              	document.getElementById("story-paragraph"+i).textContent= obj[i][0];

              	//Immagine
              	let background_story= new Image();
              	background_story.src = obj[i][1];
              	if(obj[i][1]!=null){
                    //video
                	document.getElementById("paragraph-video"+i).style.display="none";
              		//Resize immagine
              		var ratio;
              		if(background_story.width>background_story.height){
                    console.log("CASO  ->width > height");
                		ratio=background_story.height/background_story.width;
                        //Extra ratio scale
                        ratio= ratio*1.1;
                        background_story.width=400;
                        background_story.height=background_story.width*ratio;
                        document.getElementById("paragraph-image"+i).style.width =background_story.width+"px";
                        document.getElementById("paragraph-image"+i).style.height =background_story.height+"px";
                    }else if(background_story.width<background_story.height){
                    	console.log("CASO  ->width < height");
                        ratio=background_story.width/background_story.height;
                        //Extra ratio scale
                        ratio= ratio*0.8;
                        background_story.height=450;
                        background_story.width=background_story.height*ratio;
                        document.getElementById("paragraph-image"+i).style.width =background_story.width+"px";
                        document.getElementById("paragraph-image"+i).style.height =background_story.height+"px";
                    }
                    else{
                    	console.log("CASO  -> width & height non presenti");
                        background_story.height=500;
                        background_story.width=500;
                        document.getElementById("paragraph-image"+i).style.maxWidth ="400px";
                        document.getElementById("paragraph-image"+i).style.maxHeight ="100%";
                    }
                	//Caricamento immagine
              		document.getElementById("paragraph-image"+i).style.backgroundImage='url('+background_story.src+')';
				}
                else if(obj[i][1]===null && obj[i][3]===null){
                    document.getElementById("paragraph-image"+i).style.display="none";
                    document.getElementById("paragraph-video"+i).style.display="none";
                    document.getElementById("story-paragraph"+i).style.width="70%";  
                }
                //Controlliamo se c'è un video
                var video = document.getElementById("paragraph-video"+i);
				var source = document.createElement("source");
                if(obj[i][3]!=null){
                	document.getElementById("paragraph-video"+i).style.display="flex";
                   	source.setAttribute('src',obj[i][3]);
                    source.setAttribute('type', 'video/mp4');
                	video.appendChild(source);
                   	document.getElementById("paragraph-image"+i).style.display="none";
                }
			}
        },
        error: function(xhr, status, error) {
            // Gestione degli errori
            console.log("Si è verificato un errore nella richiesta AJAX");
            setTimeout(function() {load_paragraph_data(admin);},1000); 
            // Puoi aggiungere qui la gestione specifica dell'errore di rete
        },
        complete: function(xhr, status){ 
            try{
            	if(document.getElementById("story-paragraph1").textContent!=null){
                    console.log("Caricamento storia completato");
                    setTimeout(function(){
                    	open_paragraph_conclusion(admin);
                        open_paragraph_question(admin);
                        open_paragraph_moral(admin);
                    },800);
            }
            }catch(err){
            	console.log("Il caricamento richiederà ancora un pò di tempo, ci scusiamo per l'attesa");
            }
        }
      });
      $.ajax({
        type: 'POST',
        data: { "story": get_current_story },
        url: 'has_questions.php',
        success: function(result) {
            try {
                var jsonData = JSON.parse(result);

                if (jsonData.error) {
                    console.error("Error: " + jsonData.error);
                } else if (jsonData.Tipo) {
                    var tipo = jsonData.Tipo;
                    console.log("Il tipo di storia è: " + tipo);
                    if (tipo === 'test') {
                        document.getElementById("test-button").style.display="flex";
                    }
                }
            } catch (e) {
                console.error("Errore nel parsing del JSON: ", e);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("Errore nella chiamata AJAX: ", textStatus, errorThrown);
        }
      });
    }
}

function open_paragraph_moral(admin){
    let story= sessionStorage.getItem("story");
    let story_name= sessionStorage.getItem("validate_story");
    if(admin=="admin"){
        /*MODIFICHE*/
        console.log("Nome storia : "+story_name);
        $.ajax({
        	type: 'POST',
            data: {"name": story_name},
            url: 'get_moral.php',
            success: function(result) {
				if(result.length>0){
                	console.log("Morale aggiunta nella creazione storia");
                	document.getElementById("moral-paragraph").textContent=result.toString();
                    document.getElementById("send-moral").value=result.toString();
                }
            }
		});
        /*MODIFICHE*/
    	story=story+" (Modifica)";
        $.ajax({
        	type: 'POST',
            data: {"name": story},
            url: 'get_moral.php',
            success: function(result) {
				if(result.length>0){
                	console.log("Morale aggiunta attraverso modifica");
                	document.getElementById("moral-paragraph").textContent=result.toString();
                    document.getElementById("send-moral").value=result.toString();
                }
            }
		});
    }else{
		$.ajax({
        	type: 'POST',
        	data: {"name": story},
        	url: 'get_moral.php',
        	success: function(result) {
				if(result.length>0){
                	console.log("Morale aggiunta nella creazione storia");
        			document.getElementById("moral-paragraph").textContent=result.toString();
        		}
        	}
		});
    }
}
/**/
function open_paragraph_conclusion(admin){
  let story= sessionStorage.getItem("story");
  if(admin=="admin"){
    $.ajax({  
      type: 'POST',
      data: {"name": story},
      url: 'get_conclusion.php',
      success: function(result) {
        var jsonData = JSON.parse(result);
        var str = JSON.stringify(jsonData);
        var obj = JSON.parse(str);
        if(obj.length > 0){
          // Paragraph-block
          for(let i = 0; i < obj.length; i++){
          var data = "<div class='conclusion-container'>"
            + "<h3>Il paragrafo "+obj[i]["idParagrafo"]+" è un paragrafo finale per il test</h3>"
            + "</div>";
            document.getElementById("conclusion_area"+ obj[i]["idParagrafo"]).insertAdjacentHTML("beforeend", data);
          }
        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.error("AJAX call failed: ", textStatus, errorThrown);
      }
    });
  }else{
    $.ajax({  
      type: 'POST',
      data: {"name": story},
      url: 'get_conclusion.php',
      success: function(result) {
        var jsonData = JSON.parse(result);
        var str = JSON.stringify(jsonData);
        var obj = JSON.parse(str);
        if(obj.length > 0){
          // Paragraph-block
          for(let i = 0; i < obj.length; i++){
          var data = "<div class='conclusion-container'>"
            + "<h3>Il paragrafo "+obj[i]["idParagrafo"]+" è un paragrafo finale per il test</h3>"
            + "</div>";
            document.getElementById("conclusion_area"+ obj[i]["idParagrafo"]).insertAdjacentHTML("beforeend", data);
          }
        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.error("AJAX call failed: ", textStatus, errorThrown);
      }
    });

  }
}
/**/
function open_paragraph_question(admin){
      /*MODIFICHE PER AGGIUNGERE LA VISUALIZZAZIONE DELLE DOMANDE*/
  if(admin=="admin"){
    let get_current_story= sessionStorage.getItem("validate_story");
    let ans_type1, ans_type2, ans_type3, ans_type4;
    $.ajax({
        type: 'GET',
        data: {"name": get_current_story},
        url: 'load_story_question.php',
        success: function(result) {
            var jsonData = JSON.parse(result);
            var str = JSON.stringify(jsonData);
            var obj = JSON.parse(str);
            var questionLoad= setInterval(function(){
                for(let i=0;i<obj.length;i++){
                	if(obj[i]["Domanda"]!="StoryEnding"){
                       if(obj[i]["esitoRisp1"]!=null){
                          console.log("Sono in una storia interattiva");
                          if(obj[i]["esitoRisp1"]==1) ans_type1="Corretta :";
                          else ans_type1="Sbagliata :";
                          if(obj[i]["esitoRisp2"]==1) ans_type2="Corretta :";
                          else ans_type2="Sbagliata :";
                          if(obj[i]["esitoRisp3"]==1) ans_type3="Corretta :";
                          else ans_type3="Sbagliata :";
                          if(obj[i]["esitoRisp4"]==1) ans_type4="Corretta :";
                          else ans_type4="Sbagliata :";
                      }
                  
                      data="<div class='question-top'>"
                                  +"<div class='h3-cont-style'><h3>Domanda<h3></div>"
                                  +"<h4>"+obj[i]["Domanda"]+"</h4>"
                              +"</div>"
                              +"<div class='question-middle'>"
                                  +"<div class='h3-cont-style'><h3>Risposte<h3></div>"
                                  +"<div id='"+i+"answer1' class='inline-answer'><h4 id='ans"+i+"type1' class='answer-width'>"+ans_type1+"</h4><h4> "+obj[i]["Risposta1"]+"</h4></div>"
                                  +"<div id='"+i+"answer2' class='inline-answer'><h4 id='ans"+i+"type2' class='answer-width'>"+ans_type2+"</h4><h4> "+obj[i]["Risposta2"]+"</h4></div>"
                                  +"<div id='"+i+"answer3' class='inline-answer'><h4 id='ans"+i+"type3' class='answer-width'>"+ans_type3+"</h4><h4> "+obj[i]["Risposta3"]+"</h4></div>"
                                  +"<div id='"+i+"answer4' class='inline-answer'><h4 id='ans"+i+"type4' class='answer-width'>"+ans_type4+"</h4><h4> "+obj[i]["Risposta4"]+"</h4></div>"
                              +"</div>"
                              +"<div class='question-bottom'>"
                              +"<div class='re-dir-style'><h3>Re-indirizzamenti risposte</h3></div>"
                              +"<div class='re-dir-box-style'>"
                                  +"<h4 id='"+i+"parDest1'>Se scelta \""+obj[i]["Risposta1"]+"\" si prosegue al paragrafo "+obj[i]["idParDestinazione1"]+"</h4>"
                                  +"<h4 id='"+i+"parDest2'>Se scelta \""+obj[i]["Risposta2"]+"\" si prosegue al paragrafo "+obj[i]["idParDestinazione2"]+"</h4>"
                                  +"<h4 id='"+i+"parDest3'>Se scelta \""+obj[i]["Risposta3"]+"\" si prosegue al paragrafo "+obj[i]["idParDestinazione3"]+"</h4>"
                                  +"<h4 id='"+i+"parDest4'>Se scelta \""+obj[i]["Risposta4"]+"\" si prosegue al paragrafo "+obj[i]["idParDestinazione4"]+"</h4>"
                              +"</div>";
                        try{
                            document.getElementById("question-area"+obj[i]["IdParagrafo"]).insertAdjacentHTML("beforeend",data);
                            if(obj[i]["esitoRisp1"]==null){
                                document.getElementById("ans"+i+"type1").style.display="none";
                                document.getElementById("ans"+i+"type2").style.display="none";
                                document.getElementById("ans"+i+"type3").style.display="none";
                                document.getElementById("ans"+i+"type4").style.display="none";
                            }
                            if(obj[i]["Risposta3"]==null){
                                document.getElementById(i+"answer3").style.display="none";
                                document.getElementById(i+"parDest3").style.display="none";
                            }
                            if(obj[i]["Risposta4"]==null){
                                document.getElementById(i+"answer4").style.display="none";
                                document.getElementById(i+"parDest4").style.display="none";
                            }
                        }
                        catch(err){
                            console.log("Waiting");
                        }
                        finally{
                            clearInterval(questionLoad);
                        }
                       }
                	}
            },1000);
        }
    });
    }else{
        let get_current_story= sessionStorage.getItem("story");
        let ans_type1, ans_type2, ans_type3, ans_type4;
        $.ajax({
            type: 'GET',
            data: {"name": get_current_story},
            url: 'load_story_question.php',
            success: function(result) {
                var jsonData = JSON.parse(result);
                var str = JSON.stringify(jsonData);
                var obj = JSON.parse(str);
                var questionLoad= setInterval(function(){
                    for(let i=0;i<obj.length;i++){
                	if(obj[i]["Domanda"]!="StoryEnding"){
                       if(obj[i]["esitoRisp1"]!=null){
                          console.log("Sono in una storia interattiva");
                          if(obj[i]["esitoRisp1"]==1) ans_type1="Corretta :";
                          else ans_type1="Sbagliata :";
                          if(obj[i]["esitoRisp2"]==1) ans_type2="Corretta :";
                          else ans_type2="Sbagliata :";
                          if(obj[i]["esitoRisp3"]==1) ans_type3="Corretta :";
                          else ans_type3="Sbagliata :";
                          if(obj[i]["esitoRisp4"]==1) ans_type4="Corretta :";
                          else ans_type4="Sbagliata :";
                      }
                  
                      data="<div class='question-top'>"
                                  +"<div class='h3-cont-style'><h3>Domanda<h3></div>"
                                  +"<h4>"+obj[i]["Domanda"]+"</h4>"
                              +"</div>"
                              +"<div class='question-middle'>"
                                  +"<div class='h3-cont-style'><h3>Risposte<h3></div>"
                                  +"<div id='"+i+"answer1' class='inline-answer'><h4 id='ans"+i+"type1' class='answer-width'>"+ans_type1+"</h4><h4> "+obj[i]["Risposta1"]+"</h4></div>"
                                  +"<div id='"+i+"answer2' class='inline-answer'><h4 id='ans"+i+"type2' class='answer-width'>"+ans_type2+"</h4><h4> "+obj[i]["Risposta2"]+"</h4></div>"
                                  +"<div id='"+i+"answer3' class='inline-answer'><h4 id='ans"+i+"type3' class='answer-width'>"+ans_type3+"</h4><h4> "+obj[i]["Risposta3"]+"</h4></div>"
                                  +"<div id='"+i+"answer4' class='inline-answer'><h4 id='ans"+i+"type4' class='answer-width'>"+ans_type4+"</h4><h4> "+obj[i]["Risposta4"]+"</h4></div>"
                              +"</div>"
                              +"<div class='question-bottom'>"
                              +"<div class='re-dir-style'><h3>Re-indirizzamenti risposte</h3></div>"
                              +"<div class='re-dir-box-style'>"
                                  +"<h4 id='"+i+"parDest1'>Se scelta \""+obj[i]["Risposta1"]+"\" si prosegue al paragrafo "+obj[i]["idParDestinazione1"]+"</h4>"
                                  +"<h4 id='"+i+"parDest2'>Se scelta \""+obj[i]["Risposta2"]+"\" si prosegue al paragrafo "+obj[i]["idParDestinazione2"]+"</h4>"
                                  +"<h4 id='"+i+"parDest3'>Se scelta \""+obj[i]["Risposta3"]+"\" si prosegue al paragrafo "+obj[i]["idParDestinazione3"]+"</h4>"
                                  +"<h4 id='"+i+"parDest4'>Se scelta \""+obj[i]["Risposta4"]+"\" si prosegue al paragrafo "+obj[i]["idParDestinazione4"]+"</h4>"
                              +"</div>";
                        try{
                            document.getElementById("question-area"+obj[i]["IdParagrafo"]).insertAdjacentHTML("beforeend",data);
                            if(obj[i]["esitoRisp1"]==null){
                                document.getElementById("ans"+i+"type1").style.display="none";
                                document.getElementById("ans"+i+"type2").style.display="none";
                                document.getElementById("ans"+i+"type3").style.display="none";
                                document.getElementById("ans"+i+"type4").style.display="none";
                            }
                            if(obj[i]["Risposta3"]==null){
                                document.getElementById(i+"answer3").style.display="none";
                                document.getElementById(i+"parDest3").style.display="none";
                            }
                            if(obj[i]["Risposta4"]==null){
                                document.getElementById(i+"answer4").style.display="none";
                                document.getElementById(i+"parDest4").style.display="none";
                            }
                        }
                        catch(err){
                            console.log("Waiting");
                        }
                        finally{
                            clearInterval(questionLoad);
                        }
                       }
                	}
                },1000);
            }
        });
    }
/*FINE MODIFICHE*/
}

function loading_progress(){
	let loaded;
    	try{   
            var temp= document.getElementById("story-paragraph0").textContent;
            loaded=true;
    	}catch(err){
    		console.log("Is loading... ");
            loaded=false;
        }
    	if(loaded){
        	document.getElementById("loading-ring").style.display="none";
            if(sessionStorage.getItem("accessType").includes("profile")){
            	document.getElementById("modify-option").style.display="flex";
            }
        	if(document.getElementById("moral-paragraph").textContent.length>0)
        		document.getElementById("show-morale").style.display="flex";  
        }
}

function loading_progress_edit(){
	let loaded;
    	try{   
            var temp= document.getElementById("textArea1").textContent;
            loaded=true;
    	}catch(err){
    		console.log("Is loading... ");
            loaded=false;
        }
    	if(loaded){
        	document.getElementById("loading-ring").style.display="none";
            setTimeout(function(){
            	load_questions();
                try{
                  document.getElementById("moral-card").style.visibility="hidden";
                  document.getElementById("textArea1000").style.visibility="hidden";
                }catch(err){console.log("La storia non ha morale");}
            },1000);
        }
}

function load_all_stories_guest(){
	let counter=0;
	$.ajax({
            type: 'GET',
            url: 'all_stories.php',
    		success: function(userStoriesResult) {
        		var jsonData = JSON.parse(userStoriesResult);
                var str = JSON.stringify(jsonData);
				var obj = JSON.parse(str);
                for(let story in obj){
                	data="<div id='story-item"+counter+"' class='story-item' onclick='open_story_homepage_guest(this)'>"
                    	+"<h3 id='story-name"+counter+"'></h3>";
                        document.getElementById("container").insertAdjacentHTML("beforeend",data);
                        document.getElementById("story-item"+counter).name= obj[counter].Titolo;  
                        document.getElementById("story-name"+counter).textContent=obj[counter].Titolo;
                        counter++;
                }
    		}
		});
}
function load_all_stories(){
	let counter=0;
	$.ajax({
            type: 'GET',
            url: 'all_stories.php',
    		success: function(userStoriesResult) {
        		var jsonData = JSON.parse(userStoriesResult);
                var str = JSON.stringify(jsonData);
				var obj = JSON.parse(str);
                for(let story in obj){
                	data="<div id='story-item"+counter+"' class='story-item' onclick='open_story_homepage(this)'>"
                    	+"<h3 id='story-name"+counter+"'></h3>";
                        document.getElementById("container").insertAdjacentHTML("beforeend",data);
                        document.getElementById("story-item"+counter).name= obj[counter].Titolo;  
                        document.getElementById("story-name"+counter).textContent=obj[counter].Titolo;
                        counter++;
                }
    		}
		});
}
function load_story_name(current_input){
	document.getElementById("id_search").value=current_input.value;
}
function search_story(p_story){
	$.ajax({
            type: 'GET',
            data: {"story": p_story.value},
            url: 'search-story.php',
    		success: function(userStoriesResult) {
        		var jsonData = JSON.parse(userStoriesResult);
                var str = JSON.stringify(jsonData);
				var obj = JSON.parse(str);
                var n=0;
                document.getElementById("container").innerHTML=' ';
                if(obj!=null){
                  for(let story in obj){
                  	var data="<div id='story-item"+n+"' class='story-item' onclick='open_story_homepage(this)'>"
                        +"<h3 id='story-name"+n+"'></h3></div>";
                    document.getElementById("container").insertAdjacentHTML("beforeend",data);
                    document.getElementById("story-item"+n).name= obj[n].Titolo;  
                    document.getElementById("story-name"+n).textContent=obj[n].Titolo;
                    document.getElementById("err_container").innerHTML=' ';
                    n++;
                  }     
                }else{
                	var data_err="<div class='search-err'>"
                    	+"<h3>La ricerca non ha ottenuto risultati.</h3></div>";
                	document.getElementById("err_container").innerHTML=data_err;
                    document.getElementById("container").innerHTML=' ';
                }
    		}
		});
}
function clean_search(){
	document.getElementById("container").innerHTML=' ';
    document.getElementById("err_container").innerHTML=' ';
    load_all_stories();   
}
function show_popUp(){
	if(document.getElementById("delete-message").style.display=="none")
		document.getElementById("delete-message").style.display="flex";
    else
    	document.getElementById("delete-message").style.display="none";

}

function goto_stories(){
	sessionStorage.setItem("read-from-index","YES");
    location.href="read-stories.html";
}

function edit_story(current_story) {
    var hasQuestion = false;
    sessionStorage.setItem("story-to-edit", current_story.name);
    $.ajax({
        type: 'POST',
        data: {"story": current_story.name},
        url: 'has_questions.php',
        success: function(hasquestions) {
        	var jsonData_q = JSON.parse(hasquestions);

            if (jsonData_q.error) {
                console.error("Error: " + jsonData.error);
            }
            else if (jsonData_q.Tipo) {
            	var tipo = jsonData_q.Tipo;
                console.log("Il tipo di storia è: " + tipo);
                if (tipo === 'test') {
                    hasQuestion = true;
                    console.log("è un test");
                }else if(tipo === 'storia'){
                    hasQuestion = false;
                    console.log("è una storia");
                }
            }

            var edited_name = current_story.name + " (Modifica)";
            $.ajax({
                type: 'GET',
                url: 'get_titles_validate.php',
                success: function(result) {
                    var jsonData = JSON.parse(result);
                    var flag = false;
                    if (jsonData.length > 0) {
                        for (let i = 0; i < jsonData.length; i++) {
                            if (jsonData[i].Titolo == edited_name) {
                                swal({
                                    icon: "warning",
                                    title: "Attenzione",
                                    text: "Per questa storia risulta già una richiesta di modifiche.",
                                    timer: 3000,
                                    buttons: false,
                                }).then(() => {
                                    flag = true;
                                });
                                break;
                            }
                            if(!flag && (jsonData.length-i)==1){
                            	if(hasQuestion === true){ location.href="edit-story-question.php";
                            	} else {
                                    location.href="edit-story.php";
                                }
                            }
                        }
                    } else {
                        console.log("OHH dopo else");
                        console.log("OHH hasquestion vale : "+hasQuestion);
                        if (hasQuestion === true) {
                            location.href = "edit-story-question.php";
                        } else {
                            location.href = "edit-story.php";
                        }
                    }
                }
            });
        }
    });
}

function access_story_to_edit(){
	let story= sessionStorage.getItem("story-to-edit");
        $.ajax({
            type: 'GET',
            data: {"name": story},
            url: 'load_story_paragraph.php',
            success: function(result) {
                var jsonData = JSON.parse(result);
                var str = JSON.stringify(jsonData);
                var obj = JSON.parse(str);
                for( let i=1;i<=obj.length;i++){
                  createParagraph();
                  document.getElementById("textArea"+i).classList.toggle("isFocused");
                }
                loading_progress_edit();
                document.getElementById("title_text").textContent=story;
                document.getElementById("story_title").value=story;
                for( let i=0;i<obj.length;i++){
                  document.getElementById("textArea"+(i+1)).value=obj[i][0];
                  if(obj[i][1]!= null ){
                    //Immagine
                    let background_story= new Image();
                    background_story.src = obj[i][1];
                    load_edit_image(i+1, background_story);
                  }
                  document.getElementById("favcolor"+(i+1)).value=obj[i][2];
                  if(obj[i][2]!="#92a8d2"){
                    let id1="checkColor";
                    let elementId1 = id1 + (i+1);
                    document.getElementById(elementId1).classList.add("checkState");
                  }
                  if(obj[i][3]!=null){
                    load_edit_video(i+1,obj[i][3]);
                  }
              	}
            },
            error: function(xhr, status, error) {
                // Gestione degli errori
                console.log("Si è verificato un errore nella richiesta AJAX");
                setTimeout(function(){ access_story_to_edit(); }, 1000);
                // Puoi aggiungere qui la gestione specifica dell'errore di rete
            }
        });    
    /*FINE MODIFICHE*/
    $.ajax({
          type: 'POST',
          data: {"name": story},
          url: 'get_moral.php',
          success: function(result) {
                if(result.length>0){
                	console.log("MORALE : "+result.toString());
                    toggle_moral("AGGIUNGI");
                    document.getElementById("moral-card").style.visibility="hidden";
                    document.getElementById("textArea1000").style.visibility="hidden";
                    document.getElementById("textArea1000").value=result.toString();
                }else {
                	console.log("La storia non prevede una morale");
                }
                
          }
	});
}

/*AGGIUNGI I DATI DELLE DOMANDE PRESENTI PER LA STORIA IN MODO DA POTERLE REVISIONARE ED EVENTUALMENTE MODIFICARE*/
function load_questions(){
	let story= sessionStorage.getItem("story-to-edit");
    $.ajax({
        type: 'GET',
        data: {"name": story},
        url: 'load_story_question.php',
        success: function(result) {
            var jsonData = JSON.parse(result);
            var str = JSON.stringify(jsonData);
            var obj = JSON.parse(str);
                    for(let i=0;i<obj.length;i++){
                    	if(obj[i]["Domanda"]!="StoryEnding"){
                          console.log("STORIA : "+story+"\nRecord "+i+" : "+obj[i]["IdParagrafo"]);
                          /*Inserisci domanda*/
                          document.getElementById("questionText"+obj[i]["IdParagrafo"]).textContent= obj[i]["Domanda"];

                          /*Inserisci risposte*/
                          document.getElementById("question"+obj[i]["IdParagrafo"]+"field1").value= obj[i]["Risposta1"];

                          if(obj[i]["esitoRisp1"]==1)	document.getElementById("question"+obj[i]["IdParagrafo"]+"field1").classList.toggle("correct_style");
                          else if(obj[i]["esitoRisp1"]==2)	document.getElementById("question"+obj[i]["IdParagrafo"]+"field1").classList.toggle("wrong_style");
           
                          document.getElementById("answer_type"+obj[i]["IdParagrafo"]+"field1").value= obj[i]["esitoRisp1"];

                          document.getElementById("question"+obj[i]["IdParagrafo"]+"menuParagraph1").value= obj[i]["idParDestinazione1"];
                          document.getElementById("link_to_origin"+obj[i]["idParDestinazione1"]).textContent="segue da Paragrafo "+obj[i]["IdParagrafo"]+"";
                          document.getElementById("link_to_origin"+obj[i]["idParDestinazione1"]).value=obj[i]["IdParagrafo"];
                          document.getElementById("box_link_to_origin"+obj[i]["idParDestinazione1"]).value=obj[i]["IdParagrafo"];
                          document.getElementById("title_paragraph_icon"+obj[i]["idParDestinazione1"]).style="display:flex";
                          save_last["question"+obj[i]["IdParagrafo"]+"menuParagraph1"]=obj[i]["idParDestinazione1"];

                          document.getElementById("question"+obj[i]["IdParagrafo"]+"field2").value= obj[i]["Risposta2"];

                          if(obj[i]["esitoRisp2"]==1)	document.getElementById("question"+obj[i]["IdParagrafo"]+"field2").classList.toggle("correct_style");
                          else if(obj[i]["esitoRisp2"]==2)	document.getElementById("question"+obj[i]["IdParagrafo"]+"field2").classList.toggle("wrong_style");
                          document.getElementById("answer_type"+obj[i]["IdParagrafo"]+"field2").value= obj[i]["esitoRisp2"];

                          document.getElementById("question"+obj[i]["IdParagrafo"]+"menuParagraph2").value= obj[i]["idParDestinazione2"];
                          document.getElementById("link_to_origin"+obj[i]["idParDestinazione2"]).textContent="segue da Paragrafo "+obj[i]["IdParagrafo"]+"";
                          document.getElementById("link_to_origin"+obj[i]["idParDestinazione2"]).value=obj[i]["IdParagrafo"];
                          document.getElementById("box_link_to_origin"+obj[i]["idParDestinazione2"]).value=obj[i]["IdParagrafo"];
                          document.getElementById("title_paragraph_icon"+obj[i]["idParDestinazione2"]).style="display:flex";
                          save_last["question"+obj[i]["IdParagrafo"]+"menuParagraph2"]=obj[i]["idParDestinazione2"];

                          if(obj[i]["Risposta3"]!=null){
                              document.getElementById("question"+obj[i]["IdParagrafo"]+"field3").value= obj[i]["Risposta3"];

                              if(obj[i]["esitoRisp3"]==1)	document.getElementById("question"+obj[i]["IdParagrafo"]+"field3").classList.toggle("correct_style");
                              else if(obj[i]["esitoRisp3"]==2)	document.getElementById("question"+obj[i]["IdParagrafo"]+"field3").classList.toggle("wrong_style");
                              document.getElementById("answer_type"+obj[i]["IdParagrafo"]+"field3").value= obj[i]["esitoRisp3"];

                              document.getElementById("question"+obj[i]["IdParagrafo"]+"menuParagraph3").value= obj[i]["idParDestinazione3"];
                              document.getElementById("link_to_origin"+obj[i]["idParDestinazione3"]).textContent="segue da Paragrafo "+obj[i]["IdParagrafo"]+"";
                              document.getElementById("link_to_origin"+obj[i]["idParDestinazione3"]).value=obj[i]["IdParagrafo"];
                              document.getElementById("box_link_to_origin"+obj[i]["idParDestinazione3"]).value=obj[i]["IdParagrafo"];
                              document.getElementById("title_paragraph_icon"+obj[i]["idParDestinazione3"]).style="display:flex";
                              save_last["question"+obj[i]["IdParagrafo"]+"menuParagraph3"]=obj[i]["idParDestinazione3"];
                          }
                          if(obj[i]["Risposta4"]!=null){
                              document.getElementById("question"+obj[i]["IdParagrafo"]+"field4").value= obj[i]["Risposta4"];

                              if(obj[i]["esitoRisp4"]==1)	document.getElementById("question"+obj[i]["IdParagrafo"]+"field4").classList.toggle("correct_style");
                              else if(obj[i]["esitoRisp4"]==2)	document.getElementById("question"+obj[i]["IdParagrafo"]+"field4").classList.toggle("wrong_style");
                              document.getElementById("answer_type"+obj[i]["IdParagrafo"]+"field4").value= obj[i]["esitoRisp4"];

                              document.getElementById("question"+obj[i]["IdParagrafo"]+"menuParagraph4").value= obj[i]["idParDestinazione4"]; 
                              document.getElementById("link_to_origin"+obj[i]["idParDestinazione4"]).textContent="segue da Paragrafo "+obj[i]["IdParagrafo"]+"";
                              document.getElementById("link_to_origin"+obj[i]["idParDestinazione4"]).value=obj[i]["IdParagrafo"];
                              document.getElementById("box_link_to_origin"+obj[i]["idParDestinazione4"]).value=obj[i]["IdParagrafo"];
                              document.getElementById("title_paragraph_icon"+obj[i]["idParDestinazione4"]).style="display:flex";
                              save_last["question"+obj[i]["IdParagrafo"]+"menuParagraph4"]=obj[i]["idParDestinazione4"];
                          }
                      }
                    }
            }  
    });
}


function load_edit_image(num, background_story) {
    let id1="checkImage";
    let id2="image-state";
    let elementId1 = id1 + num;
    let elementId2 = id2 + num;
	let data="<div class='text-side'><h3>Immagine originale<i id='"+num+"' class='fas fa-times image-del' onclick='remove_old_image(this)'></i></h3>"
    		+"<h5 style='width:50ch; text-align:flex-start;'>Selezionando una nuova immagine quella attuale sarà rimossa a modifica ultimata.</h5></div>"
    		+"<img id='edit-image"+num+"' style='max-width: 100%; max-height: 200px; display:flex; margin:auto; background-position: center; background-repeat: no-repeat; background-size: cover; '>";  
    document.getElementById("image-link"+num).innerHTML= data;
    document.getElementById("image-link"+num).style.display="flex";
    document.getElementById("edit-image"+num).style.backgroundImage='url('+background_story.src+')';
    document.getElementById("edit-image"+num).style.width="250px";
    document.getElementById("edit-image"+num).style.height="150px";
    document.getElementById("imageSelector"+num).style.height="300px";
	document.getElementById(elementId1).classList.add("checkState");
    document.getElementById(elementId2).value="false";
    //document.getElementById("remove-img-btn"+num).style.display="flex";
    document.getElementById("load-image-box"+num).style.display="none";
    
}

function load_edit_video(num, video_source) {
    let id1="checkVideo";
    let id2="image-state";
    let elementId1 = id1 + num;
    let elementId2 = id2 + num; 
	document.getElementById(elementId1).classList.add("checkState");
    document.getElementById(elementId2).value="false";
    document.getElementById("remove-video-btn"+num).style.display="flex";
    document.getElementById("button-video"+num).style.display="none";
    document.getElementById("remove-video"+num).style.display="none";
}

function show_button(){
 	$('#center-page').css('top',screen.height+'px');
    $('#home-container').css('margin-top',(screen.height/5)+'px');
	var button = document.getElementById("top-button");
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    }
}

function fix_title(){
	var adjust_top;
	if(1120<screen.height && screen.height<=1440){
    	adjust_top= 150;
        $('#top-area').css('margin-top',adjust_top+'px');
    }else if(1080<=screen.height && screen.height<=1120){
     	adjust_top= 100;
        $('#top-area').css('margin-top',adjust_top+'px');
    }else if(800<screen.height && screen.height<1080){
    	adjust_top= 100;
        $('#top-area').css('margin-top',adjust_top+'px');
    }else if(720<=screen.height && screen.height<=800){
   	    adjust_top= 0;
        $('#top-area').css('margin-top',adjust_top+'px');
    }	
}


function fix_top_row(){
    var did_scroll = false,
        $window = $(window),
        base_distance,
        adjust,
        adjust_post,
        offset_val,
        distance= $('#help-panel').offset().top;
    if(1120<screen.height && screen.height<=1440){
    	adjust= 300;
        offset_val= 150; 
    }else if(1080<=screen.height && screen.height<=1120){
    	adjust= 325;
        offset_val= 100;
    }else if(800<screen.height && screen.height<1080){
    	adjust= 250;
        offset_val= 50;
    }else if(720<=screen.height && screen.height<=800){
		adjust= 250;
        offset_val= 50;    	
    }
    adjust_post= adjust/2; 
    if(base_distance==null)base_distance= $('#help-panel').offset().top;
    $window.scroll(function (event) {
        did_scroll = true;
    });

    setInterval(function () {
        if (did_scroll) {
            did_scroll = false;
            if (($window.scrollTop() - distance)>offset_val) {
                $('#help-panel').addClass('fixed-top');
                $('#container').addClass('fix-par');
                $('.fix-par').css('margin-top',adjust+'px');
            }else if((screen.height/2)-$window.scrollTop()>offset_val) {
            	base_distance=null;
                $('#help-panel').removeClass('fixed-top');
                $('#container').removeClass('fix-par');
                $('#container').css('margin-top',adjust_post+'px');
            }
        }
    }, 1000);
}


function fix_top_row_edit(){
	jQuery(document).ready(function(){
    	window.onscroll = function() {
        	if (window.pageYOffset >= 150){
            	jQuery('#help-panel').css({position: 'fixed'});
        	}
        	else {
            	jQuery('#help-panel').css({position: 'absolute', top: '0'});
        	}
    }
	});
}

/*Funzioni per la sezione inserisci domande*/
function clear_field(obj, number){
    switch(obj.id){
        case "question"+number+"btn1" :
            document.getElementById("question"+number+"field1").value="";
            break;
        case "question"+number+"btn2" :
            document.getElementById("question"+number+"field2").value="";
            break;
        case "question"+number+"btn3" :
            document.getElementById("question"+number+"field3").value="";
            break;
        case "question"+number+"btn4" :
            document.getElementById("question"+number+"field4").value="";
            break;

    }
}

/*Funzioni per far funzionare la selezione paragrafi*/
/* NEW */
function load_paragraph_list() {
    var paragraphsSet = new Set();
    // Trova tutti i paragrafi con id che inizia con "title_paragraph" grazie a ^ 
    var idParagraphs = document.querySelectorAll('[id^="title_paragraph"]');
    
    // Aggiungi i paragrafi trovati all'array
    idParagraphs.forEach(function(paragraph) {
    	paragraphsSet.add(paragraph.textContent);
    });

    var menuParagraphs = document.querySelectorAll('[id*="menuParagraph"]');
    menuParagraphs.forEach(function(element) {  
        // Per ogni paragrafo unico nel set
        paragraphsSet.forEach(function(testo) {       
            // Verifica se il testo è già presente nell'elemento
            if (!element.innerHTML.includes(testo)) {
                var option = document.createElement('option');
                option.text = testo;

                // Controllo della lunghezza del testo
                if (testo.length > 10) {
                    option.value = testo.substring(10); // Estrarre i primi 10 caratteri
                } else {
                    option.value = testo.substring(8); // Usare il testo intero se ha meno di 10 caratteri
                }

                // Aggiungere l'opzione all'elemento select
                element.add(option);
            }
        });
    });
}
function remove_from_paragraph_list() {
	var menuParagraphs = document.querySelectorAll('[id*="menuParagraph"]');
	// Per ogni elemento trovato
    menuParagraphs.forEach(function(element) {
        // Rimuovi l'ultima opzione dal menu a tendina
        var options = element.options;
        if (options.length > 1) {
            options[options.length - 1].remove();
        }
    });
}

function goToSelectedParagraph(element) {
    var selectedParagraph = document.getElementById("question"+element.id+"menuParagraph"+element.name).value;
    if (selectedParagraph !== "0") {
        //document.getElementById("paragraph"+selectedParagraph).scrollIntoView();
        // Ottenere l'elemento di destinazione
        var targetElement = document.getElementById("paragraph" + selectedParagraph);
        var elementPosition = targetElement.getBoundingClientRect().top;
		var offsetPosition = elementPosition + window.pageYOffset;
        // Calcolare la posizione assoluta rispetto alla pagina
        var offsetPositionWithMargin = offsetPosition - 150;

        // Scorrere fino alla posizione desiderata
        window.scrollTo({
            top: offsetPositionWithMargin,
            behavior: "smooth"
        });
    }
}
function disableCurrentParagraphOption(select, currentParagraph) {
    const options = select.options;
    for (let i = 0; i < options.length; i++) {
        if (Number(options[i].value) === currentParagraph) {
            options[i].disabled = true;
            //options[i].style.display = 'none'; 
        } else {
            options[i].disabled = false; 
            //options[i].style.display = 'block'; 
        }
    }
}

function change_answer_state(select, number){
	var element = document.getElementById("question" + number + (select.id).slice(-6));
	element.classList.remove("default_style", "correct_style", "wrong_style", "end_style");
    switch(select.value) {
        case "0":
            console.log("Risposta impostata come default : " + select.value);
            element.classList.add("default_style");
            break;
        case "1":
            console.log("Risposta impostata come corretta : " + select.value);
            element.classList.add("correct_style");
            break;
        case "2":
            console.log("Risposta impostata come sbagliata : " + select.value);
            element.classList.add("wrong_style");
            break;
        case "3":
            console.log("Risposta impostata come Termina Storia : " + select.value);
            element.classList.add("end_style");
            break;
        default:
            break;
    }
}

// Variabile globale, serve solo nell'istanza attuale quindi non è necessario definire una variabile di sessione
var save_last = {};

function show_select_paragraph(select, counter) {
    const selectValue = Number(select.value); // Convertire il valore a numero
    console.log("selectValue: ", selectValue);
    if (selectValue !== 0) {
        console.log("Valore: " + selectValue);
        document.getElementById("link_to_origin" + selectValue).textContent = "segue dalla domanda " + counter;
        document.getElementById("link_to_origin" + selectValue).value = counter;
        document.getElementById("box_link_to_origin" + selectValue).value = counter;
        document.getElementById("title_paragraph_icon" + selectValue).style.display = "flex";
        save_last[select.id] = selectValue;
        console.log("save_last updated: ", save_last);
    } else {
        const lastValue = save_last[select.id];
        console.log("lastValue: ", lastValue);
        if (lastValue && lastValue !== 0) {
            console.log("Valore: " + lastValue);
            document.getElementById("link_to_origin" + lastValue).textContent = "";
            document.getElementById("link_to_origin" + lastValue).value = 0;
            document.getElementById("box_link_to_origin" + lastValue).value = 0;
            document.getElementById("title_paragraph_icon" + lastValue).style.display = "none";
        }
    }
}
function move_back_to_main(element) {
    var targetElement = document.getElementById("paragraph" + element.value);
    var elementPosition = targetElement.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset;
    // Calcolare la posizione assoluta rispetto alla pagina
    var offsetPositionWithMargin = offsetPosition - 150;

    // Scorrere fino alla posizione desiderata
    window.scrollTo({
      top: offsetPositionWithMargin,
      behavior: "smooth"
	});
}



/*****************************************************************/
function show_ending_paragraphs(this_instance, paragraph_counter) {
    var paragraphsSet = new Set();
    // Trova tutti i paragrafi con id che inizia con "title_paragraph"
    var idParagraphs = document.querySelectorAll('[id^="title_paragraph"]');

    // Aggiungi i paragrafi trovati al set se il loro numero è superiore a paragraph_counter
    idParagraphs.forEach(function(paragraph) {
        var paragraphNumber = parseInt(paragraph.id.replace('title_paragraph', ''), 10);
        if (paragraphNumber > paragraph_counter) {
            paragraphsSet.add({ number: paragraphNumber, text: paragraph.textContent });
        }
    });

    // Per ogni paragrafo unico nel set, aggiungi l'opzione solo se non esiste già
    paragraphsSet.forEach(function(paragraph) {
        var exists = Array.from(this_instance.options).some(option => option.value == paragraph.number);
        if (!exists) {
            var option = document.createElement('option');
            option.text = "Paragrafo " + paragraph.number;
            option.value = paragraph.number;
            this_instance.add(option);
        }
    });

    // Aggiungi un event listener per aggiornare il valore quando cambia
    this_instance.addEventListener('change', function() {
        console.log('Selected value:', this_instance.value);
    });
}
/****************************************************************************************/





function openTextarea(paragraphID){
	//Apri il paragrafo introduttivo per la domanda interessata
    var textArea = document.getElementById("textArea" + paragraphID);
    if(textArea.classList.contains("hideTextArea")){
    	textArea.classList.toggle("hideTextArea");
    }
    textArea.classList.toggle("hide-with-question");
    textArea.classList.toggle("show-with-question");
}

function disableQuestionField(checkbox, count){
	let isChecked = checkbox.checked,
    	textArea = document.getElementById("textArea"+count),
        add = document.getElementById("paragraph-button1"),
        rmv = document.getElementById("paragraph-button2");
        
    
	/*Disattiviamo i campi*/
    document.getElementById("questionText"+count).disabled = isChecked;
    for (let n = 1; n <= 4; n++) {
    	document.getElementById("question"+count+"field"+n).disabled = isChecked;
        document.getElementById("answer_type"+count+"field"+n).disabled = isChecked;
        document.getElementById("question"+count+"menuParagraph"+n).disabled = isChecked;
    }
    textArea.classList.toggle("show-with-question");
    textArea.classList.toggle("hide-with-question");
    add.disabled = isChecked;
    rmv.disabled = isChecked;
    if(isChecked==true){
    	add.classList.add("de-activated");
        rmv.classList.add("de-activated");
    	if(!textArea.classList.contains("show-with-question")){
        	textArea.classList.add("show-with-question");
            textArea.classList.remove("hide-with-question");
        }
    	textArea.placeholder = "Scrivi un paragrafo conclusivo...";
    }else	{
    	textArea.placeholder = "Definisci un paragrafo introduttivo per la domanda...";
        add.classList.remove("de-activated");
        rmv.classList.remove("de-activated");
    }
}

function load_test_result(current_story){
	console.log("Storia su cui devo cercare i test : "+current_story.name);
    sessionStorage.setItem("story-results", current_story.name);
    location.href = "show_test_result.php";
}
function setDataAsShouldBe(timestamp){
	/*2024-06-25 21:29:14 esempio di timestamp scritto di merda*/
    //Divido in due, data e ora
    let [datePart, timePart] = timestamp.split(' ');

    //Divido nuovamente la data per poterla riorganizzare
    let [year, month, day] = datePart.split('-');

    //Tolgo i secondi
    let [hours, minutes] = timePart.split(':');

    //Rendo la data leggibile all'occhio umano :)
    let formattedDate = `${day}-${month}-${year} ore ${hours}:${minutes}`;

    return formattedDate;
}
function load_results() {
    let current_story = sessionStorage.getItem("story-results");
    let current_test, n_test = 0, n_question = 0;
    let obj;

    $.ajax({
        type: 'POST',
        data: { "story": current_story },
        url: 'get_test_results.php',
        success: function(result) {
            var jsonData = JSON.parse(result);
            var str = JSON.stringify(jsonData);
            obj = JSON.parse(str); // Salviamo obj in un contesto più ampio
            try{
            	document.getElementById("story_name").textContent = obj[0]["Storia"];
                document.getElementById("empty_page").style.display = "none";
                for (let i = 0; i < obj.length; i++) {
                if (i == 0) {
                    let human_like_data = setDataAsShouldBe(obj[i]["Acquisizione"]);
                    current_test = obj[i]["Acquisizione"];
                    data = "<div id='test_result" + n_test + "' class='container'>"
                        + "<div class='header'>"
                        + "<h2 id='test_info" + n_test + "'>Test eseguito in data " + human_like_data + " </h2>"
                        + "<button id='download_results' onclick='downloadTest(\"" + human_like_data + "\", \"" + n_test + "\")'>Download esito</button>"
                        + "</div>"
                        + "<div class='content'>"
                        + "<textarea id='test_results" + n_test + "' readonly>"
                        + "</textarea>"
                        + "</div>"
                        + "</div>";
                    document.getElementById("results_container").innerHTML += data;
                } else if (current_test != obj[i]["Acquisizione"]) {
                    n_test += 1;
                    current_test = obj[i]["Acquisizione"];
                    let human_like_data = setDataAsShouldBe(obj[i]["Acquisizione"]);
                    data = "<div id='test_result" + n_test + "' class='container'>"
                        + "<div class='header'>"
                        + "<h2 id='test_info" + n_test + "'>Test eseguito in data " + human_like_data + " </h2>"
                        + "<button id='download_results' onclick='downloadTest(\"" + human_like_data + "\", \"" + n_test + "\")'>Download esito</button>"
                        + "</div>"
                        + "<div class='content'>"
                        + "<textarea id='test_results" + n_test + "' readonly>"
                        + "</textarea>"
                        + "</div>"
                        + "</div>";
                    document.getElementById("results_container").innerHTML += data;
                }

            }
            n_question = Math.floor(obj.length / (n_test + 1));
            document.getElementById("test_questions").textContent = "Test composto da " + n_question + " domande";
           }catch(err){
           		console.log("La storia non ha test ("+err+")");
           }
            
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("Errore nella chiamata AJAX: ", textStatus, errorThrown);
        },
        complete: function() {
            let timestamp = 0;
            let testResults = new Map();
            console.log("n test: " + n_test + " length " + obj.length + "\t question " + n_question);

            for (let i = 0; i < obj.length; i++) {
                if (timestamp === 0) {
                    timestamp = obj[i]["Acquisizione"];
                }

                if (timestamp === obj[i]["Acquisizione"]) {
                    let save = obj[i]["EsitoRisp"];

                    // Se la mappa non ha già questo timestamp, creiamo un nuovo array per esso
                    if (!testResults.has(timestamp)) {
                        testResults.set(timestamp, []);
                    }

                    // Aggiungiamo l'esito all'array corrispondente al timestamp
                    testResults.get(timestamp).push(save);
                } else {
                    // Aggiorniamo il timestamp e aggiungiamo il nuovo esito
                    timestamp = obj[i]["Acquisizione"];
                    let save = obj[i]["EsitoRisp"];

                    // Se la mappa non ha già questo timestamp, creiamo un nuovo array per esso
                    if (!testResults.has(timestamp)) {
                        testResults.set(timestamp, []);
                    }

                    // Aggiungiamo l'esito all'array corrispondente al timestamp
                    testResults.get(timestamp).push(save);
                }
            }

            // Stampa dei risultati
            let index = 0; // Indice per generare id dinamici
for (let [timestamp, outcomes] of testResults) {
    let elementId = "test_results" + index;
    let element = document.getElementById(elementId);

    if (element) {
        let output="";
        for (let j = 0; j < outcomes.length; j++) {
            output += `Domanda ${j + 1}\tEsito: ${outcomes[j]}\n`;
        }
        element.value += output;
    } else {
        console.error(`Element with id ${elementId} not found.`);
    }
    index++;
}

        }
    });
}



function downloadTest(timestamp, testIndex) {
	console.log()
    let textarea = document.getElementById(`test_results${testIndex}`);
    let text = textarea.value;
    let blob = new Blob([text], { type: "text/plain" });
    let url = URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = url;
    a.download = `test_${timestamp}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
