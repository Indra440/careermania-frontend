$(document).ready(function(){
    $(".dropdown").select2();

    var url = window.location.href;
    console.log("url ",url);
    let value = url.split("value=")[1]
    console.log("value ",value);
    if(value == "class"){
        console.log("1");
        $("#class_btn").click();
    }else if(value == "college"){
        console.log("2");
        $("#college_btn").click();
    }else if(value == "job") {
        console.log("3");
        $("#job_btn").click();
    }

    $("#college_btn").click(function(){
        // console.log("Its clicking here");
        // console.log($(this).val());
        $(this).closest("div").find(".btn").each(function(){
            $(this).removeClass("active");
        })
        $(this).addClass("active")
        $("#main_form").find(".left-form .email_id #email_title").html("College Email id *")
        $("#main_form").find(".right-form .head_name #head_name_title").html("Chancellor/Chairman")
        $("#main_form").find(".right-form .address #address_title").html("Collage Address ")
        $("#main_form").find(".left-form .merchent_name #merchent_name_title").html("Collage Name")
        $("#main_form").find(".left-form .selector-group .selector").each(function(){
            $(this).addClass("hide");
        })
        $("#main_form").find(".left-form .selector-group .college_info").removeClass("hide")
    })

    $("#class_btn").click(function(){
        $(this).closest("div").find(".btn").each(function(){
            $(this).removeClass("active");
        })
        $(this).addClass("active")
        $("#main_form").find(".left-form .email_id #email_title").html("Class Email id *")
        $("#main_form").find(".right-form .head_name #head_name_title").html("Directors Name")
        $("#main_form").find(".right-form .address #address_title").html("Center Address ")
        $("#main_form").find(".left-form .merchent_name #merchent_name_title").html("Class Name *")
        $("#main_form").find(".left-form .selector-group .selector").each(function(){
            $(this).addClass("hide");
        })
        $("#main_form").find(".left-form .selector-group .class_info").removeClass("hide")
    })

    $("#job_btn").click(function(){
        $(this).closest("div").find(".btn").each(function(){
            $(this).removeClass("active");
        })
        $(this).addClass("active")
        $("#main_form").find(".left-form .email_id #email_title").html("Employer Email id *")
        $("#main_form").find(".right-form .head_name #head_name_title").html("Directors Name")
        $("#main_form").find(".right-form .address #address_title").html("Company Address ")
        $("#main_form").find(".left-form .merchent_name #merchent_name_title").html("Company Name *")
        $("#main_form").find(".left-form .selector-group .selector").each(function(){
            $(this).addClass("hide");
        })
        $("#main_form").find(".left-form .selector-group .job_info").removeClass("hide")
    })
})