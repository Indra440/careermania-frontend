$(document).ready(function(){

    var navbar = document.getElementById("total_navbar");
    var sticky = navbar.offsetTop;
    console.log("sticky = ",sticky);
    window.onscroll = function() {stickyFunction()};
    hmburgerFunction();
    $(window).resize(function() {
        hmburgerFunction();
    });

    $("#hamburgericon").click(function(){
        myFunction();
    })

    var count = 1;
    window.setInterval(function(){
        bcvTextChange();
    },3000);

    // $("#background_image").load("./html/background.html");

    // function buttonChange(){
    //     let cur_index = 0;
    //     $("#button_group").find(".showhidebutton").each(function(index){
    //             $(this).fadeOut();
    //             $(this).addClass("hide");
    //         if(index == count){
    //             cur_index = index+1;
    //             $(this).removeClass("hide");
    //             $(this).fadeIn();
    //         }
    //         (index == 2)?((count >= 2)?(count=0):(count= cur_index)):"";
    //     })
    // }

    let index = 0;
    function bcvTextChange(){
        let buttonTextArray = ["Buisness","Career","Value"];
        $("#showhideTextportion").find(".showhidebutton").html(buttonTextArray[index]);
        index == 2 ? index = 0 : index ++;
    }

    $(".chatbutton").click(function(){
        $(".chatbutton").removeClass("active");
        let buttonValue = $(this).val();
        if(buttonValue == "custom message"){
            $('.chatbot_buttons').css("z-index","1");
            $('.chat_functionality').addClass('hide');
            $('.custom_message').removeClass('hide');
        }else{
            $('.chatbot_buttons').css("z-index","2");
            $('.chat_functionality').removeClass('hide');
            $('.custom_message').addClass('hide');
        }
        $(this).addClass('active');
    })

    $("#chat_send").click(function(){
        let message = $("#chat_input").val()
        console.log("your message is ",message)
        if(message !=""){
            let constract_message = '<div class="container darker"><img src="" alt="Avatar" class="right" style="width:100%;"><p>'+message+'</p></div>'
            let cur_chat_space = $('.chat_space').html();
            console.log("cur_chat_space ",cur_chat_space);
            let whole_message = cur_chat_space + constract_message;
            setInterval(updateScroll(),1000);
            console.log("whole_message ",whole_message);
            $('.chat_space').html(whole_message);
        }
        $("#chat_input").val("");
    })
    $(".chat_space").on('scroll', function(){
        scrolled=true;
    });
    var scrolled = false;
    function updateScroll(){
        if(!scrolled){
            var element = $(".chat_space");
            let element_height = element[0].scrollHeight;
            console.log("element.scrollHeight ",element[0].scrollHeight);
            $(".chat_space").scrollTop(element_height);
        }
    }
                
    $("#chat_input").keyup(function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            $("#chat_send").click();
        }
    });

    function stickyFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
    function hmburgerFunction(){
        if(screen.width < 768){
            $("#menu_content").addClass("hide");
            $("#hamburgericon").removeClass("hide");
            // $("#hamburgerMenu").remobveClass("hide");
        }else{
            $("#menu_content").removeClass("hide");
            $("#hamburgericon").addClass("hide");
            $("#hamburgerMenu").css("display","none");
        }
    }

    function myFunction() {
        var x = document.getElementById("hamburgerMenu");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }
})

