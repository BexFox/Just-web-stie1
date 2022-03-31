$(document).ready(function(){
  let tabBtn = $(".tab-btn > ul > li");
  let tabCont = $(".tab-cont > div");

  tabCont.hide().eq(0).show();

  tabBtn.click(function(e){
    e.preventDefault();
    let target = $(this);
    let index = target.index();
    tabBtn.removeClass("active");
    target.addClass("active");
    tabCont.css("display","none");
    tabCont.eq(index).css("display","block");
  });
});