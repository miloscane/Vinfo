function playVideo(wrapElem){
	var videoElem	=	wrapElem.querySelectorAll("video")[0];
	if(Number(wrapElem.dataset.fullscreen)==1){
		wrapElem.dataset.fullscreen		=	0;
		wrapElem.classList.remove("videoWrapFullscreen");
		wrapElem.classList.remove("rotate90");
		wrapElem.style="";
		videoElem.pause();
		videoElem.removeAttribute("height")
	}else if(Number(wrapElem.dataset.fullscreen)==0){
		wrapElem.dataset.fullscreen		=	1;
		wrapElem.classList.add("videoWrapFullscreen");
		setVideoOrientation(wrapElem);
		videoElem.play();
		videoElem.muted	=	false;
	}
}

function setVideoOrientation(videoWrapElem){
	var vw	=	Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
	var vh	=	Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
	if(vh>=vw){
		//Portrait view
		videoWrapElem.classList.add("rotate90");
		videoWrapElem.style.width		=	vh+"px";
		videoWrapElem.style.height 		=	vw+"px";
		videoWrapElem.style.marginLeft	=	vw+"px";
		if(videoWrapElem.querySelectorAll("video")[0].clientHeight>vw){
			videoWrapElem.querySelectorAll("video")[0].setAttribute("height",vw-6);
		}else{
			videoWrapElem.querySelectorAll("video")[0].removeAttribute("height");
		}
	}else if(vh<vw){
		videoWrapElem.classList.remove("rotate90");
		videoWrapElem.style.width		=	vw+"px";
		videoWrapElem.style.height 		=	vh+"px";
		videoWrapElem.style.marginLeft	=	"0px";
	}
}

window.addEventListener('resize', function(event){
	var videoWrap	=	document.getElementsByClassName("videoWrap")[0];
	if(Number(videoWrap.dataset.fullscreen)==1){
		setVideoOrientation(videoWrap);
	}
});