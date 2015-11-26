/**
 * Created by alexruzzarin on 10/24/15.
 */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-69199222-1', 'auto');
ga('require', 'linkid');
ga('send', 'pageview');

(function() {
    var element = document.getElementById('site');
    function changeBackground() {
        var activeClass = element.classList[0];
        if(activeClass){
            var activeBg = Number(activeClass[3]);
            var newBg = activeBg + 1;
            if(newBg > 3) {
                newBg = 1;
            }
            var newClass = 'bg-' + newBg;

            element.classList.add(newClass);
            element.classList.remove(activeClass);
        }
    }
    var interval = setInterval(changeBackground, 10000);
})();