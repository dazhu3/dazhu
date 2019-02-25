
var img=null;
var i=0;
var buts=null;
var flag=null;

function init(){
	flag=setInterval(changepic_,400);
	buts=document.getElementsByTagName("input");
	for(var j=0; j<buts.length; j++){
		buts[j].onmouseover=clickbutton;
	    buts[j].onmouseout=outbutton;
	}	
}

function changepic(){
	img=document.getElementById("mypic");
	i=Math.random()*10;
	i=Math.ceil(i);
	if(i==10){
		i=1;
	}
	img.src=getsrc(i);
}

/*
 * 预加载
 */
function changepic_(){
	//img=document.getElementById("mypic");
	img=new Image();
	i=Math.random()*10;
	i=Math.ceil(i);
	if(i==10){
		i=1;
	}
	img.src=getsrc(i);
	document.getElementById("mypic").src=img.src;
}

window.onload=init;

function clickbutton(){
	//alert("A");
	window.clearInterval(flag);
    for(var j=0; j<buts.length; j++){
    	if(buts[j].id==this.id){
    		//alert("d");
    		img=document.getElementById("mypic");
    		img.src=getsrc(j+1);
    	}
    }
}

function outbutton(){
	flag=setInterval(changepic_,400);
}

function getsrc(i){
	i="img/"+i+".jpg";
	return i;
}
