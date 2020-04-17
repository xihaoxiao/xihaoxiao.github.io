

        
		
		
		var btn=document.getElementById("btn");
        var menu=document.getElementById("menu");
        
        btn.onclick=function(){
            if(menu.style.display=="block"){
                menu.style.display="none";
            }
            else{
                menu.style.display="block";
            }
            
            window.onresize=function(){
                var vw=document.documentElement.clientWidth;
                if(vw>640){
                menu.style.display="block"};
            }
        }
