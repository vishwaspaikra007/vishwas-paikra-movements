        window.onscroll = function() {parallex()};
        function parallex() {
            //To get the scroll property
            var scroll1 = document.documentElement.scrollTop;
            var height1 = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled1 = (scroll1/height1)*100;
            // For the background to move
            document.getElementById("block2").style.backgroundPositionY = "-" + 4*Math.round(scrolled1) + "px";
            document.getElementById("block2").style.backgroundPositionX = "-" + 10*Math.round(scrolled1) + "px";
            // Just to see number
            document.getElementById("know").innerHTML = Math.round(scrolled1);
            // For block 1 to come down
            document.getElementById("block2").style.height = (1000 - 12.5*scrolled1) + "px";
            // For the name Vishwas Paikra so that it moves
            document.getElementById("name1").style.marginLeft = "-" + Math.round(scrolled1) + "px";
            document.getElementById("name2").style.marginLeft = 12*Math.round(scrolled1) + "px";
            // For the name Vishwas Paikra fade in fade out
            var copa = document.getElementsByClassName("name");
            if(10*Math.round(scrolled1) >= 250) {
                copa[0].className = "name opaci";
                copa[1].className = "name opaci";
            }
            if(10*Math.round(scrolled1) <= 249) {             
                copa[0].className = "name opacir opaci";
                copa[1].className = "name opacir opaci";
            }          
        }