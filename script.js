function openImage(number){
	let id1="imageSelector";
    let id2="textArea";
    let id3="imageP";
    let id4="colorP";
    let id6="par";
    let id7="videoP";
    let id8="audioP";
    let elementId6 = id6 + number;
    let elementId1 = id1 + number;
    let elementId2 = id2 + number;
    let elementId3 = id3 + number;
    let elementId4 = id4 + number;
    let elementId7 = id7 + number;
    let elementId8 = id8 + number;
    if(document.getElementById(elementId4).classList.contains("active")){
    	openColor(number);
        document.getElementById(elementId1).classList.toggle("showICSelector");
    	document.getElementById(elementId2).classList.toggle("hideTextArea");
    	document.getElementById(elementId3).classList.toggle("active");
    }
    else if(document.getElementById(elementId7).classList.contains("active")){
    	openVideo(number);
        document.getElementById(elementId1).classList.toggle("showICSelector");
    	document.getElementById(elementId2).classList.toggle("hideTextArea");
    	document.getElementById(elementId3).classList.toggle("active");
    }else if(document.getElementById(elementId8).classList.contains("active")){
    	openAudio(number);
        document.getElementById(elementId1).classList.toggle("showICSelector");
    	document.getElementById(elementId2).classList.toggle("hideTextArea");
    	document.getElementById(elementId3).classList.toggle("active");
    }else{
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
function openColor(number){
	let id1="colorSelector";
    let id2="textArea";
    let id3="colorP";
    let id4="imageP";
    let id6="par";
    let id7="feedbackHint";
    let id8="deleteColor";
    let id9="videoP";
    let id10="audioP";
    let elementId1 = id1 + number;
    let elementId2 = id2 + number;
    let elementId3 = id3 + number;
    let elementId4 = id4 + number;
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
    }else if(document.getElementById(elementId9).classList.contains("active")){
    	openVideo(number);
        document.getElementById(elementId1).classList.toggle("showICSelector");
    	document.getElementById(elementId2).classList.toggle("hideTextArea");
    	document.getElementById(elementId3).classList.toggle("active");
    }else if(document.getElementById(elementId10).classList.contains("active")){
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
    let id6="par";
    let id7="imageP";
    let id8="audioP";
    let elementId6 = id6 + number;
    let elementId1 = id1 + number;
    let elementId2 = id2 + number;
    let elementId3 = id3 + number;
    let elementId4 = id4 + number;
    let elementId7 = id7 + number;
    let elementId8 = id8 + number;
    if(document.getElementById(elementId4).classList.contains("active")){
    	openColor(number);
        document.getElementById(elementId1).classList.toggle("showICSelector");
    	document.getElementById(elementId2).classList.toggle("hideTextArea");
    	document.getElementById(elementId3).classList.toggle("active");
    }else if(document.getElementById(elementId7).classList.contains("active")){
    	openImage(number);
        document.getElementById(elementId1).classList.toggle("showICSelector");
    	document.getElementById(elementId2).classList.toggle("hideTextArea");
    	document.getElementById(elementId3).classList.toggle("active");
    }else if(document.getElementById(elementId8).classList.contains("active")){
    	openAudio(number);
        document.getElementById(elementId1).classList.toggle("showICSelector");
    	document.getElementById(elementId2).classList.toggle("hideTextArea");
    	document.getElementById(elementId3).classList.toggle("active");
    }else{
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
    let id6="par";
    let id7="imageP";
    let id8="videoP";
    let elementId6 = id6 + number;
    let elementId1 = id1 + number;
    let elementId2 = id2 + number;
    let elementId3 = id3 + number;
    let elementId4 = id4 + number;
    let elementId7 = id7 + number;
    let elementId8 = id8 + number;
    if(document.getElementById(elementId4).classList.contains("active")){
    	openColor(number);
        document.getElementById(elementId1).classList.toggle("showICSelector");
    	document.getElementById(elementId2).classList.toggle("hideTextArea");
    	document.getElementById(elementId3).classList.toggle("active");
    }else if(document.getElementById(elementId7).classList.contains("active")){
    	openImage(number);
        document.getElementById(elementId1).classList.toggle("showICSelector");
    	document.getElementById(elementId2).classList.toggle("hideTextArea");
    	document.getElementById(elementId3).classList.toggle("active");
    }else if(document.getElementById(elementId8).classList.contains("active")){
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
    let id6="par";
    let elementId1 = id1 + number;
    let elementId2 = id2 + number;
    let elementId3 = id3 + number;
    let elementId4 = id4 + number;
    let elementId5 = id5 + number;
    let elementId6 = id6 + number;
    if(document.getElementById(elementId1).classList.contains("hideTextArea")){
    	if(document.getElementById(elementId2).classList.contains("active"))	openColor(number);
        else if(document.getElementById(elementId3).classList.contains("active"))	openImage(number);
        else if(document.getElementById(elementId4).classList.contains("active"))	openVideo(number);
        else if(document.getElementById(elementId5).classList.contains("active"))	openAudio(number);
    }
    document.getElementById(elementId6).style.display="inline";
}

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
    }else if(object.name==="video[]"){
    	document.getElementById(elementId3).classList.add("checkState");
    }else if(object.name==="audio[]"){
    	document.getElementById(elementId4).classList.add("checkState");
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
    var counter=0;
    var counter_admin=0;
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
                	data="<div id='grid-item"+counter+"' class='grid-item' onclick='open_story(this)'>"
                            +"<div class='grid-item-overlay'>"
                            	+"<label id='text-label"+counter+"' class='grid-item-title'></label>"
                            +"</div>"
                        +"</div>";
                        document.getElementById("story-container").insertAdjacentHTML("beforeend",data);
                        document.getElementById("grid-item"+counter).name=obj[counter].Titolo;
                        document.getElementById("text-label"+counter).textContent=obj[counter].Titolo;
                        addImageBackground(obj[counter].Titolo,counter,'user');   
                        counter++;
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

function switch_function(object){
	if(object.id=="user-function"){
    	if(document.getElementById("user-function").classList.contains("active")==false){
        	document.getElementById("user-function").classList.toggle("active");
            document.getElementById("admin-function").classList.toggle("active");
        }
        document.getElementById("story-container").style.display="grid";
        document.getElementById("story-tovalidate-container").style.display="none";
        
        
    }else if(object.id=="admin-function"){
    	if(document.getElementById("admin-function").classList.contains("active")==false){
        	document.getElementById("admin-function").classList.toggle("active");
            document.getElementById("user-function").classList.toggle("active");
        }        
        document.getElementById("story-container").style.display="none";
        document.getElementById("story-tovalidate-container").style.display="grid";
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
                                  +"<img id='paragraph-image"+i+"' width='450px' height='450px'>"
                                  +"<video id='paragraph-video"+i+"' width='450' height='450px' controls> </video>"
                          +"</div>"
                      +"</div>"
                  +"</div>";
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
                		ratio=background_story.height/background_story.width;
                        //Extra ratio scale
                        ratio= ratio*1.1;
                        background_story.width=400;
                        background_story.height=background_story.width*ratio;
                        document.getElementById("paragraph-image"+i).style.width =background_story.width+"px";
                        document.getElementById("paragraph-image"+i).style.height =background_story.height+"px";
                    }else if(background_story.width<background_story.height){
                        ratio=background_story.width/background_story.height;
                        //Extra ratio scale
                        ratio= ratio*0.8;
                        background_story.height=450;
                        background_story.width=background_story.height*ratio;
                        document.getElementById("paragraph-image"+i).style.width =background_story.width+"px";
                        document.getElementById("paragraph-image"+i).style.height =background_story.height+"px";
                    }else{
                        ratio=background_story.width/background_story.height;
                        background_story.height=350;
                        background_story.width=350;
                        document.getElementById("paragraph-image"+i).style.width ="400px";
                        document.getElementById("paragraph-image"+i).style.height ="400px";
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
                                  +"<img id='paragraph-image"+i+"' width='450px' height='450px'>"
                                  +"<video id='paragraph-video"+i+"' width='450' height='450px' controls> </video>"
                          +"</div>"
                      +"</div>"
                  +"</div>";
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
                		ratio=background_story.height/background_story.width;
                        //Extra ratio scale
                        ratio= ratio*1.1;
                        background_story.width=400;
                        background_story.height=background_story.width*ratio;
                        document.getElementById("paragraph-image"+i).style.width =background_story.width+"px";
                        document.getElementById("paragraph-image"+i).style.height =background_story.height+"px";
                    }else if(background_story.width<background_story.height){
                        ratio=background_story.width/background_story.height;
                        //Extra ratio scale
                        ratio= ratio*0.8;
                        background_story.height=450;
                        background_story.width=background_story.height*ratio;
                        document.getElementById("paragraph-image"+i).style.width =background_story.width+"px";
                        document.getElementById("paragraph-image"+i).style.height =background_story.height+"px";
                    }
                    else{
                        ratio=background_story.width/background_story.height;
                        background_story.height=350;
                        background_story.width=350;
                        document.getElementById("paragraph-image"+i).style.width ="400px";
                        document.getElementById("paragraph-image"+i).style.height ="400px";
                    }
                	//Caricamento immagine
              		document.getElementById("paragraph-image"+i).style.backgroundImage='url('+background_story.src+')';
				}
                else if(obj[i][1]===null && obj[i][3]===null){
                    document.getElementById("paragraph-image"+i).style.display="none";
                    document.getElementById("paragraph-video"+i).style.display="none";
                    document.getElementById("story-paragraph"+i).style.width="70%";  
                }
                //Controlliamo se c'è un diocane di video
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
		}
      });
    }
    let story= sessionStorage.getItem("story");
    if(admin=="admin"){
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
    setInterval(function(){loading_progress();},1000);
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

function edit_story(current_story){
	sessionStorage.setItem("story-to-edit",current_story.name);
    var flag=false,
    	edited_name=current_story.name+" (Modifica)";
    	$.ajax({
          type: 'GET',
          url: 'get_titles_validate.php',
          success: function(result) {
          		var jsonData = JSON.parse(result);
              	var str = JSON.stringify(jsonData);
              	var stored_titles = JSON.parse(str);
                if(stored_titles.length>0){
                	for( let i=0;i<stored_titles.length;i++){
                		if(stored_titles[i].Titolo==edited_name){
                    		swal({
                              icon: "warning",
                              title: "Attenzione",
                              text: "Per questa storia risulta già una richiesta di modifiche.",
                              timer: 3000,
                              buttons: false,
                    		}).then(() => {
                        		flag=true;
							})
                        	break;
                    	}
                		if(!flag && (stored_titles.length-i)==1)	location.href="edit-story.php";
                	}
                }else{
                	location.href="edit-story.php";
                }    
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
                document.getElementById("title_text").textContent=story;
                document.getElementById("story_title").value=story;
                for( let i=0;i<obj.length;i++){
                	document.getElementById("textArea"+(i+1)).value=obj[i][0];
                    if(	obj[i][1]!= null ){
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
          }
	});
    $.ajax({
          type: 'POST',
          data: {"name": story},
          url: 'get_moral.php',
          success: function(result) {
                if(result.length>0){
                	console.log("MORALE : "+result.toString());
                    toggle_moral("AGGIUNGI");
                    document.getElementById("textArea1000").value=result.toString();
                }else {
                	console.log("La storia non prevede una morale");
                }
                
          }
	});
}
function load_edit_image(num, background_story) {
    let id1="checkImage";
    let id2="image-state";
    let elementId1 = id1 + num;
    let elementId2 = id2 + num;
	let data="<h3 style='margin-bottom: -40px;'>Immagine originale</h3><i id='"+num+"' class='fas fa-times image-del' onclick='remove_old_image(this)'></i>"
    		+"<img id='edit-image"+num+"' width='250px' height='250px' style=' display:flex; margin:auto; background-position: center; background-repeat: no-repeat; background-size: cover; '>"
            +"<h5>Selezionando una nuova immagine quella attuale sarà rimossa a modifica ultimata.</h5>";  
    document.getElementById("image-link"+num).innerHTML= data;
    document.getElementById("image-link"+num).style.display="block";
    document.getElementById("edit-image"+num).style.backgroundImage='url('+background_story.src+')';
	document.getElementById(elementId1).classList.add("checkState");
    document.getElementById(elementId2).value="false";
    document.getElementById("remove-img-btn"+num).style.display="flex";
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

