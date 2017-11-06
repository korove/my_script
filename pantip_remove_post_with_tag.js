window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        alert("Yeah!");
        //$("[data-tag=AIS]").css("background-color", "yellow");
        //$("[data-tag='AIS']").css("background-color", "red");
        var countTag = 0;
        // $("[data-tag=3BB],[data-tag=dtac]").each(function(index, el) {
        // 	countTag++;
        // 	$( this ).css("background-color", "yellow");
        // });
        
        // $("[data-tag=3BB],[data-tag=Android]").each(function(index, el) {
        // 	countTag++;
        // 	$( this ).css("background-color", "yellow");
        // });
        
        var count = 0;
        // $(".post-item [data-tag=Android]").each(function(index, el) {
        // 	$( this ).css("background-color", "yellow");
        // 	count++;
        // });
        $(".post-item").has("[data-tag=AIS]," +
        	"[data-tag=dtac]" +
        	"[data-tag=truemove]" +
        	"[data-tag=truemove H]"
        	)
        	.each(function(index, el) {
        	$( this ).css("background-color", "yellow");
        	//count++;
        	// $( this ).remove();
        });
        alert("count = " + count);
        alert("countTag = " + countTag);
        //alert("Done!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}