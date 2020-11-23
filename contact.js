$(document).ready(function () {

    const fullName = $("#fullName").val().trim();
    const email = $("#emailAddress").val().trim();
    const msgBody = $("#msgBody").val().trim();

   











    $("#submitBtn").on("click", function(event){
        event.preventDefault();
        console.log("this is working")
        console.log(fullName)
        window.location.href = `mailto:rquiroz3209@gmail.com?subject=Reaching%20Out%20Regarding%20Your%20Portfolio%20&body=${msgBody}`

    })




});
