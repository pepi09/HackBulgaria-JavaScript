$(document).ready(function() {

    var source   = $("#input-template").html(),
        template = Handlebars.compile(source),
        baseURL = "http://localhost:8090",
        inp = ".input-place",
        btn = ".update-btn";

    $.ajax({
        url: baseURL + "/names",
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

        $(inp).on("change", function() {
            $(btn).filter("#" + this.id).removeAttr("disabled");
        })

        $(btn).on("click", function() {
            var new_name = $(inp).filter("#" + this.id).val();
            console.log(new_name);

            $.ajax({
                url : baseURL + "/name",
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
