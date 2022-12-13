/* Copyright (c) 2021 Oracle and/or its affiliates. */
(function(){var q=window,f=q.OracleUnifiedVisit||{};if(!f.VERSION){var h=document,G=location,y="cloud-commerce-visit.oracleoutsourcing.com",H=function(a){return a.replace(/^([^/:]*:?\/\/)*([^\/]+[^\.])\//,function(b,d,c){return G.protocol+"//"+c+"/"})},I,J=function(a,b){var d=q.JSON&&JSON.parse;if(q.XMLHttpRequest&&d){var c=new XMLHttpRequest;"withCredentials"in c&&(c.open("GET",H(y+"/Visit/unified/v1/"+a+"?dnc="+ +new Date),!0),c.onreadystatechange=function(){var e=this.responseText;4==this.readyState&&
200==this.status&&e&&(e=d(e))&&b(e)},c.withCredentials=!0,c.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),c.setRequestHeader("Accept","application/json"),c.send())}},r=function(){z&&k&&J("visit/"+k+"/"+g,function(a){K(a.visitId);setTimeout(r,144E4);(a=f.handle)&&a()})},z,N=function(){!z&&~h.readyState.indexOf("te")&&(z=1,t&&(A="xs"+t,(n=L(A)[0])?B(n):J("visitor/"+t,B)),m()&&k&&M(),m()||r())},O=f.handleVisitor,u=function(a,b,d,c){C&&a!=C&&u(C,b,"",-1E4);d=b+"="+encodeURIComponent(d)+
"; path=/"+(a?"; domain="+a:"");if(c){var e=new Date;e.setTime(+e+c)}else e=new Date(2038,0,1);d+="; expires="+e.toGMTString();h.cookie=d;!c&&O&&O(b,a)},B=function(a){a&&(n=a.visitorId||a,u(v,A,n),(a=f.secondaryHandle)&&a());return n},K=function(a){a&&(P=a,u(v,Q,a,162E4),D());return P},M=function(){if(!I){I=1;var a=h.createElement("script"),b=h.head||h.body||h.getElementsByTagName("html")[0];b&&(a.src=H(y+"/Visit/xd/v1/"+k+"/xd.js"),b.appendChild(a))}},k=f.accountId,E,Q,g,P,t=f.secondaryId,A,n,F=
[],L=function(a){for(var b=h.cookie.split(/; ?/),d=0,c,e=[];d<b.length;)c=b[d++].split("="),c[0]==a&&e.push(null!=c[1]?decodeURIComponent(c[1]):"");return e},w=function(){F=L(E);return F[0]},p=function(a){return(a||"").split(":")},x=function(a){a=parseInt(a,10)||0;return isNaN(a)?0:a},R=x(f.minLevels),l=f.baseDomain,D=function(){var a=p(w()),b=p(F[1]),d=+new Date,c=x(a[4]);b=x(Math.max(a[5],b[5]||0));a[0]!=g&&(b=c=0,a=[]);a[0]&&5>a.length&&(b=c=2);a[3]&&108E5<d-x(a[3])&&(c++,b++,a[2]=a[3],a[3]=d);
a=[g,a[1]||d,a[2]||d,a[3]||d,c||1,b||1];u(v,E,a.join(":"))},m=function(){return!g||"undefined"==g},S=function(a){a&&(k=a,E="xd"+a,Q="xv"+a,g=p(w())[0],m()||r(),m()&&M())},T=function(a){a&&(y=a)},U=function(a){var b=G.hostname;b=(b?b+"":"").toLowerCase();var d=b.split("."),c=d.length;l=(l?l+"":"").toLowerCase();if(!/^(\d{1,3}\.){3}\d{1,3}$/.test(b))if(1==c)b="";else if(l&&b.substring(b.length-l.length)==l&&!a)b=l;else{var e=2<c&&/^(com|edu|net|org|gov|mil|int)$/i.test(d[c-1])?2:Math.min(c,3);a||(R?
e=Math.min(c,R):/\.oracle\.com$/i.test(b)&&3<c?e=4:/\.oracle(cloud|vcn)\.com$/i.test(b)&&4<c&&(e=5))}return e?d.slice(0-e).join("."):b},v=U(),C=U(1);q.OracleUnifiedVisit={accountId:k,visitorId:function(a){a&&(g=a,D());return p(w())[0]||g},visitId:K,eeid:f.eeid,secondaryId:t,secondaryVisitorId:B,setXD:function(a){a||(a={});g=p(w())[0];m()&&(g=a.visitorId)&&D();m()||r()},setEEID:S,setHost:T,domain:v,VERSION:215};T(f.host);S(k);N();h.addEventListener("readystatechange",N)}})();
