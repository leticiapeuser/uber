var Layout=function(){var t="layouts/layout7/img/",e="layouts/layout7/css/",o=App.getResponsiveBreakpoint("md"),n=App.getResponsiveBreakpoint("sm"),c=function(){var t=function(){var t=$(window).scrollTop();t>100?$(".go2top").show():$(".go2top").hide()};t(),navigator.userAgent.match(/iPhone|iPad|iPod/i)?$(window).bind("touchend touchcancel touchleave",function(e){t()}):$(window).scroll(function(){t()}),$(".go2top").click(function(t){t.preventDefault(),$("html, body").animate({scrollTop:0},600)})},a=function(){var t=$(".menu-bg-overlay"),e=$(".menu-close"),o=$(".menu-trigger"),n=$(".menu-overlay");o.click(function(){var e=function(){n.removeClass("menu-overlay-show")};n.addClass("menu-overlay-show"),t.off("click",e),t.on("click",e)}),e.click(function(t){t.stopPropagation(),n.removeClass("menu-overlay-show")})};return{init:function(){c(),a()},getLayoutImgPath:function(){return App.getAssetsPath()+t},getLayoutCssPath:function(){return App.getAssetsPath()+e}}}();jQuery(document).ready(function(){Layout.init()}),$(document).ready(function(){$("#select-all").click(function(){$(this).is(":checked")?($(".checkboxes").attr("checked",!0),$(".state").fadeIn()):($(".checkboxes").attr("checked",!1),$(".state").fadeOut())}),$(".close-pannel").click(function(){$(".state").fadeOut()}),$(".save-pannel").click(function(){$(".state").fadeOut(),$("#select-all").attr("checked",!1),$(".checkboxes").attr("checked",!1)})});