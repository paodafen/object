!function(a){function b(){this.port="443",this.uri="https://click.jumei.com",this.path="keyword",this.domain_id=null,this.cust_id=null,this.behavior_id=null,this.key_words=null,this.resultType=null,this.result_cnt=null,this.group_id=null,this.platform=null,this.site=null}function c(){this.port="443",this.uri="https://click.jumei.com",this.path="filter",this.domain_id=null,this.cust_id=null,this.behavior_id=null,this.key_words=null,this.brand=null,this.cat=null,this.func=null,this.priceSection=null,this.resultType=null,this.sort=null,this.result_cnt=null,this.group_id=null,this.platform=null,this.site=null}function d(){this.port="443",this.uri="https://click.jumei.com",this.path="feedback",this.domain_id=null,this.cust_id=null,this.behavior_id=null,this.key_words=null,this.fb_type=null,this.fb_detail=null,this.result_cnt=null,this.group_id=null,this.from=null,this.platform=null,this.site=null}function e(){this.product_id=null,this.category_id=null,this.brand_id=null,this.jm_price=null,this.page=null,this.pos=null,this.product_type=null,this.show_id=null}function f(a){var b=a.uri+":"+a.port+"/"+a.path+"/"+"?"+'data={"cookie_uid"'+':"'+H+'",';delete a.uri,delete a.port,delete a.path;for(var c in a)b=b+'"'+c+'"'+":"+g(a[c])+",";return b=b.replace(/,$/,"")+"}"}function g(a){switch(typeof a){case"object":var b=[];if(a instanceof Array){for(var c=0,d=a.length;d>c;c++)b.push(g(a[c]));return"["+b.join(",")+"]"}if(a instanceof RegExp)return a.toString();for(var e in a)b.push('"'+e+'"'+":"+g(a[e]));return"{"+b.join(",")+"}";case"function":return"";case"number":return a.toString();case"string":return'"'+a.replace(/\n|\r|\t|\\|\"|\'/g," ")+'"';case"boolean":return a.toString();default:return a.toString()}}function h(){var b,c=new RegExp("(^| )cookie_uid=([^;]*)(;|$)");H=(b=a.document.cookie.match(c))?decodeURIComponent(b[2]):""}function i(a){for(var b="",c=0,d=0;a>d;d++)switch(c=Math.ceil(3*Math.random())){case 0:case 1:b+=String.fromCharCode(Math.ceil(25*Math.random())+97);break;case 2:b+=String.fromCharCode(Math.ceil(25*Math.random())+65);break;case 3:b+=Math.ceil(9*Math.random())}return b}function j(a,b){var c=new Date,d=31536e7;c.setTime(c.getTime()+d),document.cookie=a+"="+encodeURIComponent(b)+";expires="+c.toGMTString()+";path=/;domain="+K}function k(a){var b=new Date;b.setTime(b.getTime()-1e4),document.cookie=a+"="+";expires="+b.toGMTString()+";path=/;domain="+K}function l(){var b,c=new RegExp("(^| )search_user_status=([^;]*)(;|$)"),d=0;if((b=a.document.cookie.match(c))?d=decodeURIComponent(b[2]):j("search_user_status",0),c=new RegExp("(^| )uid=([^;]*)(;|$)"),b=a.document.cookie.match(c)){var e=decodeURIComponent(b[2]);null!=e&&0!=e&&0==d&&j("search_user_status",1)}}function m(){h(),""==H?(H=i(20),j("cookie_uid",H),J=!0):J=!0,l()}function n(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener(b,c,!1)}function o(a){if(1==I)try{0==J&&m();var b=f(a);$.ajax({url:b,dataType:"jsonp",success:function(){}})}catch(c){}}function p(a){if(1==I)try{0==J&&m();var b=f(a);j("search_clk_url",b)}catch(c){}}function q(b){var c,d=a.location.href,e=new RegExp(".+"+b+"=([^&|^#]+).*");return(c=d.match(e))?c[1]:""}function r(){var b=a.document.domain,c=null,d=new RegExp("([^.]+)..*");return(c=b.match(d))?c[1]:""}function s(a){var b="",c=new RegExp(".+from=([^&|^#]+).*"),d=new RegExp("[/]+([^.]+).*");return(b=a.match(c))?decodeURIComponent(b[1]):(b=a.match(d))?decodeURIComponent(b[1]):""}function t(a){var b=new RegExp("([0-9]+[.]?[0-9]*)"),c=0;return(c=a.match(b))?c[1]:0}function u(b){var c,d=new RegExp("(^| )"+b+"=([^;]*)(;|$)");return(c=a.document.cookie.match(d))?c[2]:null}function v(){var a=u("search_user_status"),b=u("uid");return null==a||1!=a||null!=b&&0!=b&&""!=b?b:-1}function w(a){return"undefined"==typeof a||null==a||""==a||0==a?!1:!0}function x(){var a=new G.search;a.domain_id=r();var b=v();a.cust_id=w(b)?b:0;var c=q("bid");a.behavior_id=w(c)?c:0;var d=q("search");a.key_words=w(d)?decodeURIComponent(d):"";var e=$("div#s_r_t").html();a.resultType=w(e)?e:-1;var f=$("div.head_pagecount span").html();a.result_cnt=w(f)?f:0;var g=u("abt65"),h=w(g)?g:0;h="new"==h?2:"old"==h?1:0,a.group_id=h,a.platform=1,a.site=w(u("default_site_25"))?u("default_site_25"):"",G.invoke(a)}function y(a,b,c,d,e){var f=new G.select;f.domain_id=r();var g=v();f.cust_id=w(g)?g:0;var h=q("bid");h="string"==typeof h?h.charAt(0):h,f.behavior_id=w(h)?h:0;var i=q("search");f.key_words=w(i)?decodeURIComponent(i):"",f.brand=w(a)?[a]:[],f.cat=w(b)?[b]:[],f.func=w(c)?[c]:[],f.priceSection=w(d)?[d]:[];var j=$("div#s_r_t").html();f.resultType=w(j)?j:-1,f.sort=w(e)?e:0;var k=$("div.head_pagecount span").html();f.result_cnt=w(k)?k:0;var l=u("abt65"),m=w(l)?l:0;m="new"==m?2:"old"==m?1:0,f.group_id=m,f.platform=1,f.site=w(u("default_site_25"))?u("default_site_25"):"",G.invoke(f)}function z(b,c,d){var e=new G.browse;e.domain_id=r();var f=v();e.cust_id=w(f)?f:0,e.behavior_id=3;var g=q("search");e.key_words=w(g)?decodeURIComponent(g):"",e.fb_type=w(c)?c:0;var h=new G.fb_detail,i=b.attr("pid");h.product_id=w(i)?i:0;var j=b.attr("cid");h.category_id=w(j)?j:0;var k=b.attr("bid");h.brand_id=w(k)?k:0;var l=d.match(new RegExp("_[a-zA-Z]*([0-9]+)_[a-zA-Z]*([0-9]+)"));l=w(l)?l:[0,0,0],h.page=w(l[1])?l[1]:0,h.pos=w(l[2])?l[2]:0,price=t(b.find("div .search_list_price span").text()),h.jm_price=w(price)?price:0;var m=b.attr("search_product_type");h.product_type=w(m)?m:"mall";var n=b.attr("search_pop_id");h.show_id=w(n)?n:0,e.fb_detail=[h];var o=$("div.head_pagecount span").html();e.result_cnt=w(o)?o:0;var p=u("abt65"),s=w(p)?p:0;s="new"==s?2:"old"==s?1:0,e.group_id=s,e.from=encodeURIComponent(decodeURIComponent(a.location.href)),e.platform=1,e.site=w(u("default_site_25"))?u("default_site_25"):"",G.invoke(e)}function A(b){var c=new G.browse;c.domain_id=r();var d=v();c.cust_id=w(d)?d:0,c.behavior_id=3;var e=s(a.location.href).match(new RegExp("sr_([^_]*)_.*"));e=w(e)?e:[0,0],c.key_words=w(e[1])?decodeURIComponent(e[1]):"",c.fb_type=w(b)?b:0;var f=new G.fb_detail,g=$("#search_product_id").val();f.product_id=w(g)?g:0;var h=$("#search_category_info").val();f.category_id=w(h)?h:0;var i=$("#search_brand_id").val();f.brand_id=w(i)?i:0,f.page=0,f.pos=0;var j=$("div.pop_price").children("span.price_now").text();j=t(j),f.jm_price=w(j)?j:0;var k=$("#search_product_type").val();f.product_type=w(k)?k:"mall";var l=$("#search_pop_id").val();f.show_id=w(l)?l:0,c.fb_detail=[f];var m=$("div.pop_detail_top").find("a.phone_subscribe").text();c.result_cnt=w(m)?-1:0;var n=u("abt65"),o=w(n)?n:0;o="new"==o?2:"old"==o?1:0,c.group_id=o,c.from=encodeURIComponent(decodeURIComponent(a.location.href)),c.platform=1,c.site=w(u("default_site_25"))?u("default_site_25"):"",1==b?G.invoke_cookie(c):G.invoke(c)}function B(b,c){var d=new G.browse;d.domain_id=r();var e=v();d.cust_id=w(e)?e:0,d.behavior_id=3;var f=s(a.location.href).match(new RegExp("sr_([^_]*)_.*"));f=w(f)?f:[0,0],d.key_words=w(f[1])?decodeURIComponent(f[1]):"",d.fb_type=w(c)?c:1;var g=new G.fb_detail,h=b.attr("pid");g.product_id=w(h)?h:0;var i=b.attr("cid");g.category_id=w(i)?i:0;var j=b.attr("bid");g.brand_id=w(j)?j:0,g.page=1,g.pos=b.attr("pos");var k=b.find("span.pnum").text();k=t(k),g.jm_price=w(k)?k:0;var l=b.attr("search_product_type");g.product_type=w(l)?l:"mall";var m=b.attr("search_pop_id");g.show_id=w(m)?m:0,d.fb_detail=[g],d.result_cnt=0;var n=u("abt65"),o=w(n)?n:0;o="new"==o?2:"old"==o?1:0,d.group_id=o,d.from=encodeURIComponent(decodeURIComponent(a.location.href)),d.platform=1,d.site=w(u("default_site_25"))?u("default_site_25"):"",G.invoke(d)}function C(b){var c=new G.browse;c.domain_id=r();var d=v();c.cust_id=w(d)?d:0,c.behavior_id=3;var e=s(a.location.href).match(new RegExp("sr_([^_]*)_.*"));e=w(e)?e:[0,0],c.key_words=w(e[1])?decodeURIComponent(e[1]):"",c.fb_type=1;var f=new G.fb_detail,g=b.attr("search_product_id");f.product_id=w(g)?g:0;var h=b.attr("cid");f.category_id=w(h)?h:0;var i=b.attr("bid");f.brand_id=w(i)?i:0;var j=b.find("div.num_warp_list_pic_mall").children("a").attr("href").match(new RegExp("_[a-zA-Z]+([0-9]+)_[a-zA-Z]+([0-9]+)"));j=w(j)?j:[0,0,0],f.page=w(j[1])?j[1]:0,f.pos=w(j[2])?j[2]:0;var k=b.find("div.num_warp_list_name_mall").children("span").text();k=t(k),f.jm_price=w(k)?k:0;var l=b.attr("search_product_type");f.product_type=w(l)?l:"mall";var m=b.attr("search_pop_id");f.show_id=w(m)?m:0,c.fb_detail=[f];var n=$("div#pListContainer").children("div.num_tit").find("div.num_right_word").text();n=t(n),c.result_cnt=w(n)?n:0;var o=u("abt65"),p=w(o)?o:0;p="new"==p?2:"old"==p?1:0,c.group_id=p,c.from=encodeURIComponent(decodeURIComponent(a.location.href)),c.platform=1,c.site=w(u("default_site_25"))?u("default_site_25"):"",G.invoke(c)}function D(b){var c=new G.browse;c.domain_id=r();var d=v();c.cust_id=w(d)?d:0,c.behavior_id=3;var e=s(a.location.href).match(new RegExp("sr_([^_]*)_.*"));e=w(e)?e:[0,0],c.key_words=w(e[1])?decodeURIComponent(e[1]):"",c.fb_type=w(b)?b:0;var f=new G.fb_detail,g=$("#search_product_id").val();f.product_id=w(g)?g:0;var h=$("#search_category_id").val();f.category_id=w(h)?h:0;var i=$("#search_brand_id").val();f.brand_id=w(i)?i:0,f.page=0,f.pos=0;var j=$("div#detail_top").children("div.product_info").find("span#mall_price").text();j=t(j),f.jm_price=w(j)?j:0;var k=$("#search_product_type").val();f.product_type=w(k)?k:"mall";var l=$("#search_pop_id").val();f.show_id=w(l)?l:0,c.fb_detail=[f];var m=$("div#product_size").find("a.subscribe").text();c.result_cnt=w(m)?-1:0;var n=u("abt65"),o=w(n)?n:0;o="new"==o?2:"old"==o?1:0,c.group_id=o,c.from=encodeURIComponent(decodeURIComponent(a.location.href)),c.platform=1,c.site=w(u("default_site_25"))?u("default_site_25"):"",G.invoke(c)}function E(b){var c=new G.browse;c.domain_id=r();var d=v();c.cust_id=w(d)?d:0,c.behavior_id=3;var e=s(a.location.href).match(new RegExp("sr_([^_]*)_.*"));e=w(e)?e:[0,0],c.key_words=w(e[1])?decodeURIComponent(e[1]):"",c.fb_type=1;var f=new G.fb_detail,g=b.attr("search_product_id");f.product_id=w(g)?g:0;var h=b.attr("cid");f.category_id=w(h)?h:0;var i=b.attr("bid");f.brand_id=w(i)?i:0,f.page=0,f.pos=0;var j=b.find("p.price").children("span").text();j=t(j),f.jm_price=w(j)?j:0;var k=b.attr("search_product_type");f.product_type=w(k)?k:"mall";var l=b.attr("search_pop_id");f.show_id=w(l)?l:0,c.fb_detail=[f],c.result_cnt=0;var m=u("abt65"),n=w(m)?m:0;n="new"==n?2:"old"==n?1:0,c.group_id=n,c.from=encodeURIComponent(decodeURIComponent(a.location.href)),c.platform=1,c.site=w(u("default_site_25"))?u("default_site_25"):"",G.invoke(c)}function F(b){var c=new G.browse;c.domain_id=r();var d=v();c.cust_id=w(d)?d:0,c.behavior_id=3;var e=s(a.location.href).match(new RegExp("sr_([^_]*)_.*"));e=w(e)?e:[0,0],c.key_words=w(e[1])?decodeURIComponent(e[1]):"",c.fb_type=w(b)?b:0;var f=new G.fb_detail,g=$("#search_product_id").val();f.product_id=w(g)?g:0;var h=$("#search_category_id").val();f.category_id=w(h)?h:0;var i=$("#search_brand_id").val();f.brand_id=w(i)?i:0,f.page=0,f.pos=0;var j=$("div.newdeal_deal_buyit").children("span.newdeal_deal_price").text();j=t(j),f.jm_price=w(j)?j:0;var k=$("#search_product_type").val();f.product_type=w(k)?k:"mall";var l=$("#search_pop_id").val();f.show_id=w(l)?l:0,c.fb_detail=[f];var m=$("div.newdeal_deal_buyit").attr("class");m=w(m)?m.match(new RegExp("soldout")):0,c.result_cnt=w(m)?-1:0;var n=u("abt65"),o=w(n)?n:0;o="new"==o?2:"old"==o?1:0,c.group_id=o,c.from=encodeURIComponent(decodeURIComponent(a.location.href)),c.platform=1,c.site=w(u("default_site_25"))?u("default_site_25"):"",1==b?G.invoke_cookie(c):G.invoke(c)}var G=new Object;G.search=b,G.select=c,G.browse=d,G.fb_detail=e,G.invoke=o,G.invoke_cookie=p,a.search_jumei=G;var H="",I=!0,J=!1,K=a.document.domain.match(new RegExp(".[^.]+.com"));("undefined"==typeof K||null==K||""==K||0==K)&&(K=".jumei.com"),a.clkCallback=function(){},n(a,"load",function(){1==I&&setTimeout(function(){m()},1e4)});var L=new Object;L.setSearchValue=x,L.setSelectValue=y,L.setBrowseValue=z,L.setPop_recValue=A,L.index_addToCart=B,L.mall_addToCart=C,L.mall_addToCart1=D,L.mall_addToCart2=E,L.index_addToCart1=F,a.setSearch=L;try{var M=q("bid");if(M=w(M)?M:0,1==M)"function"==typeof setSearch.setSearchValue&&setSearch.setSearchValue();else if(4==M){if("function"==typeof setSearch.setSelectValue){var N=q("filter");N=N.match(new RegExp("[0-9]+-([0-9]+)-[0-9]+")),null==N&&(N=N[0]),setSearch.setSelectValue(q("brand"),q("cat"),q("func"),q("price"),N[1])}}else if("string"==typeof M&&2==M.charAt(0)){var O=M.split("_");if(2==O.length)if("m"==O[1])"function"==typeof setSearch.setSelectValue&&setSearch.setSelectValue(q("brand"),q("cat"),q("func"),q("price"),0);else if("b"==O[1])"function"==typeof setSearch.setSelectValue&&setSearch.setSelectValue(q("brand"),0,0,0,0);else if("c"==O[1])"function"==typeof setSearch.setSelectValue&&setSearch.setSelectValue(0,q("cat"),0,0,0);else if("f"==O[1])"function"==typeof setSearch.setSelectValue&&setSearch.setSelectValue(0,0,q("func"),0,0);else if("p"==O[1])"function"==typeof setSearch.setSelectValue&&setSearch.setSelectValue(0,0,0,q("price"),0);else if("s"==O[1]&&"function"==typeof setSearch.setSelectValue){var N=q("filter");N=N.match(new RegExp("[0-9]+-([0-9]+)-[0-9]+")),null==N&&(N=N[0]),setSearch.setSelectValue(0,0,0,0,N[1])}}$("div.home_deal_list_container").delegate(".deal_subscribe","click",function(){"function"==typeof setSearch.index_addToCart&&setSearch.index_addToCart($(this).parent("li").parent("ul").parent("div.deal_box"),5)}),$("div#product_size").delegate(".subscribe","click",function(){"function"==typeof setSearch.mall_addToCart1&&setSearch.mall_addToCart1(5)}),$("div.pop_detail_top").delegate(".phone_subscribe","click",function(){"function"==typeof setSearch.setPop_recValue&&setSearch.setPop_recValue(5)});var P=u("search_clk_url");null!=P&&""!=P&&(P=decodeURIComponent(P),$.ajax({url:P,dataType:"jsonp",success:function(){}}),setTimeout(function(){k("search_clk_url")},1e3))}catch(Q){}}(window);