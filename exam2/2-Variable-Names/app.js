$(document).ready(function() {

    var source   = $("#input-template").html();
    var template = Handlebars.compile(source);

    $.ajax({
        url: "http://localhost:8080/names",
        type : "GET",
        contentType : "application/json",
        dataType : "json",
    }).done(function(data){
        $.each(data,function(index){
            context = {
                name : data[index].name,
                input_id : data[index].nameId,
                button_id : data[index].nameId,
            }
            var html = template(context);
            $("#input").append(html);
        });

        $(".input-place").on("change", function() {
            $(".update-btn").filter("#" + this.id).removeAttr("disabled");
        })

        $(".update-btn").on("click", function() {
            var new_name = $(".input-place").filter("#" + this.id).val();
            console.log(new_name);

            $.ajax({
                url : "http://localhost:8080/name",
                type : "POST",
                contentType : "application/json",
                dataType : "json",
                data : JSON.stringify({
                    name : new_name,
                    nameId : this.id,
                })
            }).done(function (data){
                location.reload();
            })

        })
    })
})