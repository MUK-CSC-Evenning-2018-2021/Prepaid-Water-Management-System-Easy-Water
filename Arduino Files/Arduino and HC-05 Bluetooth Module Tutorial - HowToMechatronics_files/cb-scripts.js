/* Copyright Codetipi - Valenti 5.5.4 */
/* global jQuery, cbScripts, cookie */
function onYouTubeIframeAPIReady(){CbYTPlayer.length>0&&(cbYTPlayerHolder=new YT.Player("cb-yt-player",{videoId:cbYouTubeVideoID}))}!function(s){"use strict";function e(){n=I===!0?y>781?C.scrollTop()+32:C.scrollTop()+46:C.scrollTop(),d=n>O?2:1,o=n,v.hasClass("cb-stuck")&&1===d&&(o=n+S.outerHeight()),v.hasClass("cb-stuck")&&(f=n+S.outerHeight()),O=n,t()}function t(){P||(requestAnimationFrame(i),P=!0)}function a(){Y===!1&&(i(),i(),Y=!0)}function i(){if(v.hasClass("cb-sticky-mm")&&(v.hasClass("cb-sticky-menu-up")?n>=u&&1===d?v.addClass("cb-stuck"):v.removeClass("cb-stuck"):n>=u?v.addClass("cb-stuck"):v.removeClass("cb-stuck")),y>767&&Cs===!1&&D.length&&D.each(function(e){var t=s(this),a=t.find(".cb-sidebar"),i=a.outerHeight(!0),c=t.offset().top,l=a.offset().top,n=l+i,b=parseInt(a.css("margin-top"),10),h=c+i,u=w+o,m=t.parent(),p=m.children(":first"),g=parseInt(m.css("padding-top"),10),C=m.offset().top+g,k=m.outerHeight(),y=C+k;z=o-c,v.hasClass("home")||v.hasClass("page")||!p.hasClass("cb-module-fw")&&!p.hasClass("cb-grid-block")||(C+=p.outerHeight()),r=1===t.prev().length?t.prev().outerHeight(!0):t.next().outerHeight(!0),i<r&&(t.css("height",r),i>w?z<=0?(a.removeClass("cb-is-stuck cb-is-stuck-t cb-is-stuck-perm cb-is-stuck-frozen"),a.css("top","")):u>y?(a.removeClass("cb-is-stuck cb-is-stuck-t"),a.addClass("cb-is-stuck-perm")):1==d?a.hasClass("cb-is-stuck-frozen")?o+b>=l?(a.addClass("cb-is-stuck-frozen"),a.removeClass("cb-is-stuck cb-is-stuck-t")):(a.removeClass("cb-is-stuck-perm cb-is-stuck cb-is-stuck-frozen"),a.addClass("cb-is-stuck-t"),a.css("top","")):a.hasClass("cb-is-stuck")?(a.addClass("cb-is-stuck-frozen"),a.removeClass("cb-is-stuck cb-is-stuck-t"),a.css("top",l-C-b)):((a.hasClass("cb-is-stuck")||a.hasClass("cb-is-stuck-t")||a.hasClass("cb-is-stuck-perm"))&&(c<o&&l>c?(a.addClass("cb-is-stuck-t"),a.removeClass("cb-is-stuck-perm cb-is-stuck")):(a.removeClass("cb-is-stuck-t cb-is-stuck-perm cb-is-stuck cb-is-stuck-frozen"),a.css("top",""))),y<o+i&&(a.removeClass("cb-is-stuck-t cb-is-stuck"),a.addClass("cb-is-stuck-perm"))):a.hasClass("cb-is-stuck-frozen")?n<u+b&&(a.removeClass("cb-is-stuck-frozen"),a.css("top",""),a.addClass("cb-is-stuck"),a.removeClass("cb-is-stuck-perm cb-is-stuck-t")):a.hasClass("cb-is-stuck-t")?(a.addClass("cb-is-stuck-frozen"),a.removeClass("cb-is-stuck cb-is-stuck-t"),a.css("top",l-C-b)):a.hasClass("cb-is-stuck-perm")&&c<o&&l>c||(h<u?(a.addClass("cb-is-stuck"),a.removeClass("cb-is-stuck-perm cb-is-stuck-t")):(a.removeClass("cb-is-stuck cb-is-stuck-t cb-is-stuck-perm cb-is-stuck-frozen"),a.css("top",""))):(c<f?(a.addClass("cb-is-stuck-t"),a.removeClass("cb-is-stuck-perm")):a.removeClass("cb-is-stuck-t cb-is-stuck-perm"),y<f+i&&(a.removeClass("cb-is-stuck-t"),a.addClass("cb-is-stuck-perm"))))}),v.hasClass("cb-m-sticky")&&y<768&&ss.length){var e=ss.offset().top;n-s("#wpadminbar").outerHeight(!0)>e?v.addClass("cb-tm-stuck"):v.removeClass("cb-tm-stuck")}if(0!==bs.length&&Cs===!1)if(n<w){v.removeClass("cb-par-hidden"),I===!0&&(n-=32);var t=n/2,a=t+"px";s("#cb-par-wrap img").css({"-webkit-transform":"translate3d(0, "+a+", 0)",transform:"translate3d(0, "+a+", 0)"})}else v.addClass("cb-par-hidden");if(N.length&&j===!0){var i=s("#main").children().last(),c=s("#main").children().first().hasClass("cb-category-top"),l=i.attr("id"),h=i.prev();if("cb-blog-infinite-scroll"===l&&h.visible(!0)){j=!1;var m=s("#cb-blog-infinite-scroll").find("a").attr("href");T.addClass("cb-loading"),s.get(m,function(e){var t,a;c===!0?(a=s(e).filter("#cb-outer-container").find("#main"),s(a).find(".cb-category-top").remove(),t=a.html()):t=s(e).filter("#cb-outer-container").find("#main").html(),s("#main").children().last().remove(),s("#main").append(t),T.removeClass("cb-loading"),b=T.next().find(".cb-is-stuck-perm"),b.length&&(b.removeClass("cb-is-stuck-perm"),b.addClass("cb-is-stuck"))})}}n>750&&y>768?v.addClass("cb-to-top-vis"):v.removeClass("cb-to-top-vis"),P=!1}function c(){Cs===!1&&Ws.length>0&&cbYTPlayerHolder.playVideo()}function l(){Cs===!1&&Ws.length>0&&cbYTPlayerHolder.pauseVideo()}var r,n,o,d,b,f,h,u,m,p,g,v=s("body"),C=s(window),k=s(document),y=C.width(),w=C.height()+1,x=(s("#cb-container"),s("#cb-content")),S=s("#cb-nav-bar"),T=s("#main"),I=!1,H=s("#cb-overlay"),D=s(".cb-sticky-sidebar"),z=[],O=0,N=s("#cb-blog-infinite-scroll"),P=!1,Y=(s("#cb-footer"),!1),j=!0,M=s(".cb-slider-b"),_=S.find(" > div"),U=_.find(" > ul li").first(),E=s("#cb-s-trigger"),F=s("#cb-s-trigger-sm"),A=s("#cb-lwa"),L=s("#cb-lwa-trigger"),Q=s("#cb-lwa-trigger-sm"),V=s(".cb-lwa-r-trigger"),B=A.find(".lwa-form"),G=B.find(".cb-form-input-username"),W=!1,X=s(".cb-close-m").add(H),q=s("#cb-search-modal"),R=q.find("input"),J=s("#cb-icons-wrap"),K=s("#cb-review-container"),Z=K.find(".cb-overlay span"),$=K.find(".cb-overlay-stars span"),ss=s("#cb-top-menu"),es=(ss.find(".cb-top-menu-wrap"),s("#cb-vote")),ts=s("#cb-full-background-featured"),as=ts.attr("data-cb-bs-fis"),is=ts.attr("data-cb-ss-fis"),cs=s("#cb-parallax-featured"),ls=s("#cb-full-width-featured-img"),rs=ls.attr("data-cb-bs-fis"),ns=v.attr("data-cb-bg"),os=s("#cb-cat-header"),ds=os.attr("data-cb-bg"),bs=cs.find(".cb-image"),fs=s("#cb-parallax-bg"),hs=s("#cb-mob-open"),us=s("#cb-mob-close"),ms=s(".flexslider-1-fw"),ps=s(".flexslider-1"),gs=s("#cb-to-top"),vs=s("#cb-nav-logo"),Cs=!1,ks=!1;if((v.hasClass("cb-body-tabl")||v.hasClass("cb-body-mob"))&&(Cs=!0),v.hasClass("cb-body-mob")&&(ks=!0),v.hasClass("rtl")&&(W=!0),"undefined"!=typeof rs&&ls.backstretch(rs,{speed:350}),"undefined"!=typeof as&&(s.backstretch(as,{speed:350}),Cs===!1&&s(".backstretch").css("position","absolute")),"undefined"!=typeof ns&&(ns.indexOf(",")>-1?s.backstretch(ns.split(","),{fade:750,duration:5e3}):v.backstretch(ns,{fade:750}),v.removeAttr("data-cb-bg")),"undefined"!=typeof ds&&os.backstretch(ds,{fade:750}),"undefined"!=typeof is&&(s.backstretch(is.split(","),{fade:750,duration:5e3}),Cs===!1&&s(".backstretch").css("position","absolute")),S.length&&(y>767&&(h=_.outerHeight()),S.css("height",h),J.add(vs).css("height",U.outerHeight())),v.hasClass("admin-bar")&&(I=!0),M.each(function(){var e=s(this);e.hasClass("cb-module-fw")||e.hasClass("cb-full-slider")?e.find(".slides > li").css("height",e.width()/2.3076923):e.hasClass("cb-slider-widget")?e.find(".slides > li").css("height",e.width()/1.6):e.find(".slides > li").css("height",e.width()/1.876923)}),hs.click(function(s){s.preventDefault(),v.addClass("cb-mob-op")}),us.click(function(s){s.preventDefault(),v.removeClass("cb-mob-op")}),L.click(function(s){s.preventDefault(),v.addClass("cb-lwa-modal-on"),Cs===!1&&G.focus()}),V.click(function(s){s.preventDefault(),v.addClass("cb-lwa-r-modal-on")}),Q.click(function(s){s.preventDefault(),v.addClass("cb-lwa-modal-on"),Cs===!1&&G.focus()}),X.click(function(){v.removeClass("cb-lwa-modal-on cb-lwa-r-modal-on cb-s-modal-on cb-m-modal-on cb-m-em-modal-on"),l()}),k.keyup(function(s){27==s.keyCode&&(v.removeClass("cb-lwa-modal-on cb-lwa-r-modal-on cb-s-modal-on cb-m-modal-on cb-m-em-modal-on"),l())}),E.click(function(s){s.preventDefault(),v.addClass("cb-s-modal-on"),Cs===!1&&R.focus()}),F.click(function(s){s.preventDefault(),v.addClass("cb-s-modal-on"),Cs===!1&&R.focus()}),window.addEventListener?window.addEventListener("scroll",e,!1):window.attachEvent("scroll",e),s.each(Z,function(e,t){var a=s(t);a.visible(!0)&&(a.removeClass("cb-zero-trigger"),a.addClass("cb-bar-ani"))}),s.each($,function(e,t){var a=s(t);a.visible(!0)&&(a.removeClass("cb-zero-stars-trigger"),a.addClass("cb-bar-ani-stars"))}),C.scroll(function(e){s.each(Z,function(e,t){var a=s(t);a.visible(!0)&&a.hasClass("cb-zero-trigger")&&(a.removeClass("cb-zero-trigger"),a.addClass("cb-bar-ani"))}),s.each($,function(e,t){var a=s(t);a.visible(!0)&&a.hasClass("cb-zero-stars-trigger")&&(a.removeClass("cb-zero-stars-trigger"),a.addClass("cb-bar-ani-stars"))})}),jQuery(document).ready(function(s){v.hasClass("admin-bar")&&!s("#wpadminbar").length&&(I=!1,v.addClass("cb-no-admin-bar")),S.length&&y>767&&(u=S.offset().top),s(".cb-entry-content").find("a").has("img").each(function(){var e=s("img",this).attr("title"),t=s(this).attr("href"),a=s(this).attr("rel");if("undefined"!=typeof e&&s(this).attr("title",e),"undefined"!=typeof t&&"prettyPhoto[product-gallery]"!==a){var i=t.split("."),c=s(i)[s(i).length-1];"jpg"!==c&&"jpeg"!==c&&"png"!==c&&"gif"!==c&&"tif"!==c||s(this).addClass("cb-lightbox")}}),s(".tiled-gallery").find("a").attr("rel","tiledGallery"),s(".gallery").find("a").attr("rel","tiledGallery");var e=s("#main"),t=e.find("iframe");t.each(function(){var e=s(this).attr("src");e&&(e.indexOf("yout")>-1||e.indexOf("vimeo")>-1||e.indexOf("daily")>-1)&&s(this).wrap('<div class="cb-video-frame"></div>')}),s(".tiled-gallery, .gallery").find("a").attr("data-lightbox-gallery","tiledGallery"),s.prototype.lightbox&&s(".cb-lightbox").lightbox({fixed:!0}),s(".cb-toggler").find(".cb-toggle").click(function(e){s(this).next().stop().slideToggle(),s(this).prev().stop().toggle(),s(this).prev().prev().stop().toggle(),e.preventDefault()});var i=x.first(".cb-grid-block");s(i).imagesLoaded(function(){v.addClass("cb-imgs-loaded")}),s(window).load(function(){S.length&&(S.css("height",""),J.css("height",""),y>767&&(h=_.outerHeight()),S.css("height",h),J.add(vs).css("height",U.outerHeight())),a();var e=s(".tabbernav"),t=e.children().length;4===t&&e.addClass("cb-fourtabs"),3===t&&e.addClass("cb-threetabs"),2===t&&e.addClass("cb-twotabs"),1===t&&e.addClass("cb-onetab")}),s(".cb-module-half:odd").each(function(){s(this).prev().addBack().wrapAll(s("<div/>",{"class":"cb-double-block clearfix"}))}),ps.flexslider({animation:"slide",itemWidth:280,itemMargin:3,pauseOnHover:!0,maxItems:3,minItems:1,controlNav:!1,slideshow:cbScripts.cbSlider[1],slideshowSpeed:cbScripts.cbSlider[2],animationSpeed:cbScripts.cbSlider[0],nextText:'<i class="fa fa-angle-right"></i>',prevText:'<i class="fa fa-angle-left"></i>'}),ms.flexslider({animation:"slide",itemWidth:280,itemMargin:3,pauseOnHover:!0,maxItems:4,minItems:1,controlNav:!1,slideshow:cbScripts.cbSlider[1],slideshowSpeed:cbScripts.cbSlider[2],animationSpeed:cbScripts.cbSlider[0],nextText:'<i class="fa fa-angle-right"></i>',prevText:'<i class="fa fa-angle-left"></i>'}),s("#cb-carousel").flexslider({animation:"slide",controlNav:!1,animationLoop:!1,slideshow:!1,directionlNav:!0,itemWidth:150,itemMargin:15,asNavFor:"#cb-gallery",nextText:'<i class="fa fa-angle-right"></i>',prevText:'<i class="fa fa-angle-left"></i>'}),s("#cb-gallery").flexslider({animation:"slide",controlNav:!1,directionlNav:!1,animationLoop:!1,slideshow:!1,sync:"#cb-carousel",nextText:'<i class="fa fa-angle-right"></i>',prevText:'<i class="fa fa-angle-left"></i>'}),s(".flexslider-1-menu").flexslider({animation:"slide",itemWidth:210,itemMargin:3,slideshow:!1,pauseOnHover:!0,maxItems:2,minItems:1,controlNav:!1,nextText:'<i class="fa fa-angle-right"></i>',prevText:'<i class="fa fa-angle-left"></i>'}),s(".flexslider-2").flexslider({animation:"slide",minItems:1,pauseOnHover:!0,maxItems:1,controlNav:!1,slideshow:cbScripts.cbSlider[1],slideshowSpeed:cbScripts.cbSlider[2],animationSpeed:cbScripts.cbSlider[0],nextText:'<i class="fa fa-angle-right"></i>',prevText:'<i class="fa fa-angle-left"></i>'}),s(".flexslider-2-fw").flexslider({animation:"slide",pauseOnHover:!0,minItems:1,maxItems:1,controlNav:!1,slideshow:cbScripts.cbSlider[1],slideshowSpeed:cbScripts.cbSlider[2],animationSpeed:cbScripts.cbSlider[0],nextText:'<i class="fa fa-angle-right"></i>',prevText:'<i class="fa fa-angle-left"></i>'}),s("#messages_search").removeAttr("placeholder");var c=s(".main-nav li");s(".main-nav > li").hoverIntent(function(){s(this).find(".cb-big-menu").stop().slideDown("fast"),s(this).find(".cb-mega-menu").stop().slideDown("fast"),s(this).find(".cb-links-menu .cb-sub-menu").stop().fadeIn()},function(){s(this).find(".cb-big-menu").slideUp("fast"),s(this).find(".cb-mega-menu").slideUp("fast"),s(this).find(".cb-links-menu .cb-sub-menu").fadeOut()}),c.find(".cb-big-menu .cb-sub-menu li").hoverIntent(function(){s(this).find("> .cb-grandchild-menu").stop().slideDown("fast")},function(){s(this).find("> .cb-grandchild-menu").slideUp("fast")}),c.find(".cb-links-menu .cb-sub-menu li").hoverIntent(function(){s(this).children(".cb-grandchild-menu").stop().fadeIn()},function(){s(this).children(".cb-grandchild-menu").fadeOut()});var l=s(".cb-accordion > span").hide();s(".cb-accordion > a").click(function(){return"none"==s(this).next().css("display")?(l.slideUp("fast"),s(this).next().slideDown("fast")):s(this).next().slideUp("fast"),!1}),gs.click(function(e){s("html, body").animate({scrollTop:0},600),e.preventDefault()}),s(".cb-video-frame").fitVids(),s(".cb-tabs").tabs(),s("#cb-ticker").totemticker({row_height:"33px",mousestop:!0}),s(".cb-tip-bot").tipper({direction:"bottom"}),s(".cb-tip-top").tipper({direction:"top"}),s(".cb-tip-right").tipper({direction:"right"}),s(".cb-tip-left").tipper({direction:"left"}),k.ajaxStop(function(){j=!0,s(".cb-pro-load").removeClass("cb-pro-load")}),x.on("click","#cb-blog-infinite-load a",function(t){t.preventDefault();var a=s(this).attr("href"),i=s(this).parent();e.addClass("cb-loading"),s.get(a,function(t){var a,c,l=s("#main").children().first().hasClass("cb-category-top");l===!0?(c=s(t).filter("#cb-outer-container").find("#main"),s(c).find(".cb-category-top").remove(),a=c.html()):a=s(t).filter("#cb-outer-container").find("#main").html(),s("#main").append(a),e.removeClass("cb-loading"),i.addClass("cb-hidden"),b=e.next().find(".cb-is-stuck-perm"),b.length&&(b.removeClass("cb-is-stuck-perm"),b.addClass("cb-is-stuck"))})}),s(".cb-c-l").hoverIntent(function(){var e=s(this),t=(s(this).text(),e.closest("div"));if(t.hasClass("cb-big-menu")){var a=e.attr("data-cb-c"),i=(e.attr("href"),s(t[0].firstChild)),c=i.find(".cb-recent > ul");s.ajax({type:"GET",data:{action:"cb_mm_a",cid:a,acall:1},url:cbScripts.cbUrl,beforeSend:function(){i.addClass("cb-pro-load")},success:function(e){c.html(s(e))},error:function(s,e,t){console.log("cbmm "+s+" :: "+e+" :: "+t)}})}},function(){})}),bs.length>0&&Cs===!1){var ys=cs.offset().top;p=w-ys-90,fs.css("height",w),cs.css("height",p)}ts.length>0&&(p=ks===!0?w-ts.offset().top:w-ts.offset().top-80,ts.css("height",p));var ws=s("#cb-full-background-featured"),xs=!0,Ss=!0;0===ws.length&&(ws=s("#cb-full-width-featured"),xs=!1),0===ws.length&&(ws=s("#cb-parallax-featured"),xs=!0);var Ts=ws.find(".cb-title-fi"),Is=Ts.height();v.hasClass("cb-fis-tl-overlay")&&(Is=0);var Hs=s("#cb-media-overlay"),Ds=s("#cb-m-trigger"),zs=Hs.find('iframe[src^="//player.vimeo"]'),Os=(jQuery("#cbplayer"),s("#cb-fis-wrap"));Ds.click(function(s){s.preventDefault(),Ds.hasClass("cb-lb")?v.addClass("cb-m-modal-on"):v.addClass("cb-m-em-modal-on"),c()});var Ns,Ps=Os.width(),Ys=.9*(p-Is),js=(p-Ys-Is)/2,Ms=560*Ys/315;if(Ms>Ps?(Ms=Ps-20,Ns=10):Ns=(Ps-Ms)/2,Ss===!0&&(zs.attr("src",zs.attr("src")+"?autoplay=1"),Ss=!1),"undefined"===js||Hs.hasClass("cb-audio-overlay")||Hs.css({top:js,height:Ys,width:Ms,"margin-left":Ns}),C.resize(function(){y=C.width(),w=C.height()+1,S.length&&(S.css("height",""),J.css("height",""),y>767&&(h=_.outerHeight()),S.css("height",h),J.add(vs).css("height",U.outerHeight())),y<767&&cbStickySB.css("height","auto"),bs.length>0&&Cs===!1&&(ys=cs.offset().top,p=w-ys-90,fs.css("height",w),cs.css("height",p)),ts.length>0&&(p=ks===!0?w-ts.offset().top:w-ts.offset().top-80,ts.css("height",p)),Ps=Os.width(),Ys=.9*(p-Is),js=(p-Ys-Is)/2,Ms=560*Ys/315,Ms>Ps?(Ms=Ps-20,Ns=10):Ns=(Ps-Ms)/2,Ss===!0&&(zs.attr("src",zs.attr("src")+"?autoplay=1"),Ss=!1),"undefined"===js||Hs.hasClass("cb-audio-overlay")||Hs.css({top:js,height:Ys,width:Ms,"margin-left":Ns}),M.each(function(){var e=s(this);e.hasClass("cb-module-fw")||e.hasClass("cb-full-slider")?e.find(".slides > li").css("height",e.width()/2.3076923):e.hasClass("cb-slider-widget")?e.find(".slides > li").css("height",e.width()/1.6):e.find(".slides > li").css("height",e.width()/1.876923)}),ms.length&&ms.flexslider(1),ps.length&&ps.flexslider(1)}),es.length){var _s,Us,Es,Fs,As=s(".cb-criteria-score.cb-average-score"),Ls=es.find(".cb-criteria"),Qs=Ls.attr("data-cb-text"),Vs=es.find(".cb-overlay");Vs.length?(_s=Vs.find("span"),Us=es.not(".cb-voted").find(".cb-overlay"),Es=_s[0].style.width):(Vs=es.find(".cb-overlay-stars"),Fs=Us=es.not(".cb-voted").find(".cb-overlay-stars"),_s=Vs.find("span"),Es=_s[0].style.width,"125px"!==Es&&_s.addClass("cb-zero-stars-trigger"));var Bs=As.text(),Gs=Ls.html();Us.on("mousemove click mouseleave mouseenter",function(e){var t,a,i=s(this).parent().offset(),c=s(this).offset(),l=es.width()/100,r=Vs.width()/100;if(es.hasClass("stars")?Math.round(c.left)<=e.pageX&&(a=Math.round((e.pageX-Math.round(c.left))/r),t=(Math.round(10*a/20)/10).toFixed(1),t<0&&(t=0),t>5&&(t=5),m=W===!0?a:100-a):(a=Math.ceil((e.pageX-i.left)/l),m=W===!0?100-a:a),es.hasClass("points")?(t=W===!0?((100-a)/10).toFixed(1):(a/10).toFixed(1),As.text(t)):es.hasClass("percentage")&&(t=W===!0?100-a+"%":a+"%",As.text(t)),_s.hasClass("cb-bar-ani")&&_s.removeClass("cb-bar-ani"),_s.hasClass("cb-bar-ani-stars")&&_s.removeClass("cb-bar-ani-stars").css("width",100-a+"%"),m>100&&(m=100),m<1&&(m=0),_s.css("width",m+"%"),"mouseenter"==e.type&&Ls.fadeOut(75,function(){s(this).fadeIn(75).text(Qs)}),"mouseleave"==e.type&&(_s.animate({width:Es},300),As.text(Bs),Ls.fadeOut(75,function(){s(this).fadeIn(75).html(Gs)})),"click"==e.type)return g=es.attr("data-cb-nonce"),es.hasClass("points")&&(t=10*t),es.hasClass("stars")&&(t=20*t),i=s(this).parent().offset(),Vs.off("mousemove click mouseleave mouseenter"),s.ajax({type:"POST",data:{action:"cb_a_s",cburNonce:g,cbNewScore:parseInt(t),cbPostID:cbScripts.cbPostID},url:cbScripts.cbUrl,dataType:"json",success:function(e){var t=e[0],a=e[2];Ls.fadeOut(550,function(){s(this).fadeIn(550).html(Gs).find(".cb-votes-count").html(a)}),"-1"!==t&&"null"!==t&&(es.hasClass("points")?As.html((t/10).toFixed(1)):es.hasClass("percentage")?As.html(t+"%"):t=100-t,_s.css("width",t+"%"),es.addClass("cb-voted cb-tip-bot").off("click")),es.tipper({direction:"bottom"}),cookie.enabled()&&cookie.set({cb_user_rating:"1"},{expires:28})},error:function(s,e,t){console.log("cbur "+s+" :: "+e+" :: "+t)}}),!1})}var Ws=jQuery("#cb-yt-player")}(jQuery);var cbYTPlayerHolder,CbYTPlayer=jQuery("#cb-yt-player"),cbYouTubeVideoID=CbYTPlayer.text();if(CbYTPlayer.length>0){var tag=document.createElement("script");tag.src="//www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName("script")[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag)}