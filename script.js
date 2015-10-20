var patternArray = [
  {
    "src":"http://previews.123rf.com/images/antonovaolena/antonovaolena1401/antonovaolena140100068/25184272-Spring-floral-wallpaper-Stock-Vector-hippie.jpg",
    "width": "600",
    "height": "600",
    "x": "-100",
    "y": "-100",
    "speed": "20"
  },
  {
    "src": "http://upload.wikimedia.org/wikipedia/commons/d/dd/Avatar_flower.png",
    "width": "60",
    "height": "60",
    "x": 0,
    "y": 0,
    "speed": 10
  },
  {
    "src": "http://www.freevectors.me/wp-content/uploads/2013/01/Yellow-flowers-pattern.jpg",
    "width": "500",
    "height": "500",
    "x": 0,
    "y": 0,
    "speed": 20
  },
  {
    "src": "http://cfs7.tistory.com/image/21/tistory/2008/09/04/20/36/48bfc8242ea60",
    "width": "100",
    "height": "100",
    "x": 0,
    "y": 0,
    "speed": 10
  }
]
$(function(){
  changePattern(0);
  $('#pattern_chooser').on('change', function() {
    changePattern($(this).val());
  })
})
function changePattern(pattern_id) {
  var this_id = pattern_id,
        pattern = patternArray[this_id],
        pattern_src = pattern.src,
        pattern_width = pattern.width,
        pattern_height = pattern.height,
        pattern_x = pattern.x,
        pattern_y = pattern.y,
        pattern_speed = pattern.speed,
        svg_pattern = $('#pattern1'),
        pattern_img = svg_pattern.find('image');
    
    svg_pattern
      .attr('width', pattern_width)
      .attr('height', pattern_height);
    
    pattern_img
      .attr('xlink:href', pattern_src)
      .attr('width', pattern_width)
      .attr('height', pattern_height)
      .attr('x', pattern_x)
      .attr('y', pattern_y)
      .css('animation-duration', pattern_speed + 's');
  
    $('#pattern_chooser').val(pattern_id).change();
}