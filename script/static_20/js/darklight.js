function lightMode(){document.body.style.background="white";$("div").addClass("lightmodeColor")
$("a").css("color","black")
$("li").css("color","black")
$(".navspan").css("background","black")
$(".timeline-hr").css("border-top","1px solid black")
$(".accordion-hr").css("border-bottom","2px solid black")
$(".accordion").css("border-top","2px solid black")
$(".link").css("color","black")
$(".submenu").css("background","white")
$('head').append('<style>.slick-next:before{color: black;}</style>');$('head').append('<style>.slick-prev:before{color: black;}</style>');$("#BG").addClass("lightbgcolor")
var images=document.getElementsByTagName('img');for(var i=0;i<images.length;i++){if(images[i].id==="modeapply"){var splitImg=(images[i].src).split("dark_mode")
if(splitImg.length>1){images[i].src=splitImg[0]+"light_mode"+splitImg[1];}}}
sidenavBg();}
function darkMode(){document.body.style.background="black";$("div").removeClass("lightmodeColor")
$("a").css("color","white")
$("li").css("color","white")
$(".navspan").css("background","white")
$(".timeline-hr").css("border-top","1px solid white")
$(".accordion-hr").css("border-bottom","2px solid white")
$(".accordion").css("border-top","2px solid white")
$(".link").css("color","white")
$(".submenu").css("background","black")
$('head').append('<style>.slick-next:before{color: white;}</style>');$('head').append('<style>.slick-prev:before{color: white;}</style>');$("#BG").removeClass("lightbgcolor")
var images=document.getElementsByTagName('img');for(var i=0;i<images.length;i++){if(images[i].id==="modeapply"){var splitImg=(images[i].src).split("light_mode")
if(splitImg.length>1){images[i].src=splitImg[0]+"dark_mode"+splitImg[1];}}}
sidenavBg();}
function updateURL(type){if(history.pushState){var newurl=window.location.protocol+"//"+window.location.host+window.location.pathname+'?mode='+type;window.history.pushState({path:newurl},'',newurl);var urls=document.getElementsByTagName('a');for(var i=0;i<urls.length;i++){var splitURL=(urls[i].href).split("mode=")
if(splitURL.length>1){urls[i].href=splitURL[0]+"mode="+type;}
else{urls[i].href=urls[i].href+"?mode="+type;}}
if(type=="light"){lightMode();}
else{darkMode();}}}
function modeUpdater(){var step1=(window.location.href).split("#");var type=(step1[0]).split("mode=");if(type.length>1){var urls=document.getElementsByTagName('a');for(var i=0;i<urls.length;i++){var splitURL=(urls[i].href).split("mode=")
if(splitURL.length>1){urls[i].href=splitURL[0]+"mode="+type[1];}
else{urls[i].href=urls[i].href+"?mode="+type[1];}}
if(type[1]=="light"){lightMode();}
else{darkMode();}}
else{updateURL("dark");darkMode();}}