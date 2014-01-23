    /**
     * Created with IntelliJ IDEA.
     * User: bigboy1122
     * Date: 1/23/14
     * Time: 9:30 AM
     * To change this template use File | Settings | File Templates.
     */

    $(document).ready(function(){
        $('#loginForm').submit(function(event){

            if ($('#username').val() == '' || $('#password').val() == ''){
                $("#message").removeClass("hide");
            }else{
                window.location.href = "app.html";
            }

            event.preventDefault();
        });
    });