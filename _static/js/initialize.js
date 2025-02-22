$(document).ready(function(){
  $("body > div.section").each(function(i, e){
    var target = null;
    var addElements = [];
    for (var i=0; i < e.children.length; i++) {
      target = $(e.children[i]);
      if (target.hasClass('section') || target.hasClass('slide-area')) {
        continue;
      }
      addElements.push(target);
    }
    var ele = $(document.createElement('div'));
    ele = ele.addClass("section");
    for (var j=0; j < addElements.length; j++) {
      ele.append(addElements[j]);
    }
    ele.prependTo("body > div.section");
  });
  $("body > div.section > div.section").each(function(i, e){
     var visibleCount = 0;
     for (var i=0; i < e.children.length; i++) {
        var ele = $(e.children[i]);
        if (ele.css('display') != 'none' && !ele.hasClass('slide-fit-img')) {
           visibleCount += 1;
        }
     }
     if(visibleCount <= 1) {
        $(e.firstElementChild).addClass("special");
     }
     $("a.headerlink").hide();
  });
});
