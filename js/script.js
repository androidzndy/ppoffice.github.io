!function(a){var t;a(".navbar-burger").click(function(){a(this).toggleClass("is-active"),a(".navbar-main .navbar-start").toggleClass("is-active"),a(".navbar-main .navbar-end").toggleClass("is-active")});var n=0,r=5,s=a(".navbar-main").outerHeight();a(window).scroll(function(a){t=!0}),setInterval(function(){t&&(!function(){var t=a(this).scrollTop();if(Math.abs(n-t)<=r)return;if(t>n&&t>s){var i=Math.min(t,s);a(".navbar-main").css({"-webkit-transform":"translateY(-"+i+"px)","-moz-transform":"translateY(-"+i+"px)","-ms-transform":"translateY(-"+i+"px)","-o-transform":"translateY(-"+i+"px)",transform:"translateY(-"+i+"px)"})}else t+a(window).height()<a(document).height()&&a(".navbar-main").css({"-webkit-transform":"translateY(0px)","-moz-transform":"translateY(0px)","-ms-transform":"translateY(0px)","-o-transform":"translateY(0px)",transform:"translateY(0px)"});n=t}(),t=!1)},250),a('.article.gallery img:not(".not-gallery-item")').each(function(){0===a(this).parent("a").length&&(a(this).wrap('<a class="gallery-item" href="'+a(this).attr("src")+'"></a>'),this.alt&&a(this).after('<div class="caption">'+this.alt+"</div>"))}),a(".article-entry").find("h1, h2, h3, h4, h5, h6").on("click",function(){a(this).get(0).id&&(window.location.hash=a(this).get(0).id)})}(jQuery);