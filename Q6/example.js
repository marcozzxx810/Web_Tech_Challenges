//google analytics function init
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    
ga('create', 'UA-160755229-1', 'auto'); 
ga('send', 'pageview');

// Get IP json and regenerate the innerHTML
var ip;
$( document ).ready(function() {
    $.getJSON("https://api.ipify.org?format=json", 
    function(data) { 
        ip = data.ip
        test = document.getElementById("ip");
        htmltext = "Your IP address is " + data.ip + ", " + '<a href=https://ip-api.com/#' + data.ip + ' target="_blank" >click for details</a>'
        
        test.innerHTML = htmltext;
    }) 
});

//GA tracking function
function clickedFunction(text){
    ga('send', 'event', 'code', 'element-clicked', text, {
        hitCallback: function(){
            alert("GA Callback ( noticification purpose ) ");
        }
    });
    
};