define(["core","tpl","https://api.map.baidu.com/getscript?v=2.0&ak=ZQiFErjQB7inrGpx27M1GR5w3TxZ64k7&services=&t=20170324173232"],function(d,t){var e={init:function(){window.HOST_TYPE="2",window.BMap_loadScriptTime=(new Date).getTime(),e.bindEvents(),void 0!==window.selectedStoreData&&($(".store-item .fui-list-media i").removeClass("selected"),$(".store-item[data-storeid='"+window.selectedStoreData.id+"'] .fui-list-media i").addClass("selected")),$(".fui-searchbar input").bind("keyup",function(){var t=$.trim($(this).val());if(""==t)$(".store-item").show();else{var i=!0;$(".store-item").each(function(){-1!=$(this).html().indexOf(t)?($(this).show(),i=!1):$(this).hide()}),i?$(".content-empty").show():$(".content-empty").hide()}}),$(".fui-searchbar .searchbar-cancel").click(function(){$(".fui-searchbar input").val(""),$(".store-item").show(),$(".content-empty").hide()}),$("#btn-near").click(function(){FoxUI.loader.show("正在定位...","icon icon-location"),$(".fui-searchbar input").val(""),$(".store-item").show(),$(".content-empty").hide();var s=[],n="",o="";new AMap.Map("amap-container").plugin("AMap.Geolocation",function(){new AMap.Geolocation({enableHighAccuracy:!0,timeout:5e3,maximumAge:0}).getCurrentPosition(function(t,i){"complete"==t?(n=i.position.lat,o=i.position.lng,$(".store-item").each(function(){var t=$(this).find(".location"),i=$(this).data("lng"),e=$(this).data("lat");if(0<i&&0<e){var a=d.getDistanceByLnglat(o,n,i,e);$(this).data("distance",a),t.html("距离您: "+a.toFixed(2)+"km").show(),t.parent("div").find("i").css("display","block")}else $(this).data("distance",1e18),t.html("无法获得距离").show();s.push($(this))}),s.sort(function(t,i){return t.data("distance")-i.data("distance")}),$.each(s,function(){$(".fui-list-group").append(this)}),e.bindEvents(),FoxUI.loader.hide()):(new BMap.Geolocation).getCurrentPosition(function(t){this.getStatus()==BMAP_STATUS_SUCCESS?(n=t.point.lat,o=t.point.lng,$(".store-item").each(function(){var t=$(this).find(".location"),i=$(this).data("lng"),e=$(this).data("lat");if(0<i&&0<e){var a=d.getDistanceByLnglat(o,n,i,e);$(this).data("distance",a),t.html("距离您: "+a.toFixed(2)+"km").show(),t.parent("div").find("i").css("display","block")}else $(this).data("distance",1e18),t.html("无法获得距离").show();s.push($(this))}),s.sort(function(t,i){return t.data("distance")-i.data("distance")}),$.each(s,function(){$(".fui-list-group").append(this)}),e.bindEvents(),FoxUI.loader.hide()):FoxUI.toast.show("位置获取失败!")},{enableHighAccuracy:!0})})})}),$(".icon-xiangqing-copy").click(function(){var t=$(this).closest(".fui-list").data("address"),i=$(this).closest(".fui-list").data("realname"),e=$(this).closest(".fui-list").data("mobile"),a=$(this).closest(".fui-list").data("map"),s=$(this).closest(".fui-list").data("storename");$("#shopmask").find(".shopmask-title").html(s),$("#shopmask").find(".address").find("div").html(t),$("#shopmask").find(".address").find("a").attr("href",a),$("#shopmask").find(".mobile").find("div").html(e),$("#shopmask").find(".mobile").closest("a").attr("href","tel:"+e),$("#shopmask").find(".realname").find("div").html(i),$("#shopmask").css("display","block")}),$(".shopmask-bottom").click(function(){$("#shopmask").css("display","none")})},bindEvents:function(){$(".store-item .fui-list-media,.store-item .fui-list-inner").unbind("click").click(function(){var t=$(this).parent();window.selectedStoreData={id:t.data("storeid"),storename:t.find(".storename").html(),realname:t.find(".realname").html(),mobile:t.find(".mobile").html(),address:t.find(".address").html()},history.back()})},click:function(){}};return e});