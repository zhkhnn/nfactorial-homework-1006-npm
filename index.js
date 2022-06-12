$('document').ready(function(){
    $('#tellStory').on('click', function(){
        var name = $('#name').val();
        var character = $('#character').val();
        var adverb = $('#adverb').val();
        var adjective = $('#adjective').val();

        var result = '<div class = "mad-libs">' + 'One day, my friend ' + name +' was visiting New York and ran to '+ character +
            '. ' + name + ' run ' + adverb + ' to meet ' + character + '. But ' + character + ' turned out to be very '+ adjective +
            ' and ' + name + ' did not enjoy the meeting.' + '</div>';

        $('.tellStory_output').replaceWith('<div class = "tellStory_output"' + result + '</div>');

    })



    $('#calculate').on('click', function(){
        var width = $('#width').val();
        var height = $('#height').val();
        var colors = $('#colors').val();

        var result_size = ((width*height)/8)+(colors * 3);

        $('.calculate_output').replaceWith('<div class = "calculate_output">' + result_size + ' KB ' + '</div>');
    })

    $('#tom').on('click',function(){
        $('.description').text("Tom Thumbs");
        $('.container-inner').css('display','none');
        $('#container2').css('display','flex');
    });
    $('#mad').on('click',function(){
        $('.description').text("Mad Libs");
        $('.container-inner').css('display','table-cell');
        $('#container2').css('display','none');
    });
})
