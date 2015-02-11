/* Project specific Javascript goes here. */

var timeoutdelay = 333;
$(document).ready(function(){
  $('.control').click(function(){
    var id = this.id;
    var cube = $('.cubecontainer > div');
    cube.removeAttr('class');
    //first we need to back the cube away from the viewport in its current orientation
    cube.addClass('show-' + cube.attr('data-orientation'));
    cube.attr('data-orientation',id);
    window.setTimeout(function(){
        //then we need to rotate it
        cube.removeAttr('class');
        cube.addClass('show-' + id );
        window.setTimeout(function(){
          //finally we move it back to align with the viewport
          cube.removeAttr('class');
          cube.addClass('show-' + id +'-face');
        },timeoutdelay);
    },timeoutdelay);
  })
});