var wyresdecoder=function(e){var r={};function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)t.d(n,a,function(r){return e[r]}.bind(null,a));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";function n(e){return r=s(e),t={},r.forEach((function(e){var r=e.v;switch(e.t){case"00":var n=parseInt("0x"+r.substring(0,2)),a=parseInt("0x"+r.substring(2,4)),s=parseInt("0x"+r.substring(6,8)+r.substring(4,6)),v=parseInt(""+s),h=u(r,8),k=[{hash:3073671017,label:"wbasev2_sobat_eu868_filleBLE_dev"},{hash:3647927579,label:"wbasev2_tomat_eu868_filleGPSBLE_dev"},{hash:883332667,label:"wbasev2_sobat_eu868_filleBLE_prod"},{hash:4067916045,label:"wbasev2_tomat_eu868_filleBLE_dev"},{hash:1877577695,label:"wbasev2_tomat_eu868_filleBLE_prod"},{hash:970323733,label:"wbasev2_tomat_eu868_filleGPSBLE_prod"},{hash:729649863,label:"wbasev2_topas_eu868_filleBLE_dev"},{hash:2834278809,label:"wbasev2_topas_eu868_filleBLE_prod"}].find(e=>e.hash===h);t.version=g({version:n+"."+a,build:+v,product:k?k.label:h});break;case"06":n=r.substring(0,2),a=r.substring(2,4),t.light=g(parseInt(""+parseInt("0x"+a+n)));break;case"07":n=r.substring(0,2),a=r.substring(2,4),s=r.substring(4,6),t.battery=g(parseInt(""+parseInt("0x"+s+a+n))/1e3);break;case"12":if(0===r.length){t.bleCurrent=d("no iBeacon seen");break}t.bleCurrent=g(b(r));break;case"15":if(0===r.length){t.bleCurrent=d("no iBeacon seen");break}t.bleCount=g(c(r));break;case"0f":var _="unknown";switch(n=parseInt(r.substring(0,2))){case 0:_="UpRight";break;case 1:_="Inverted";break;case 2:_="Flat Back";break;case 3:_="Flat Face";break;case 4:_="Unknown";break;default:_="Unknown: "+n}a=r.substring(2,4),s=r.substring(4,6);var I=r.substring(6,8);t.orientation=g({x:i(a),y:i(s),z:i(I),general_orientation:_});break;case"03":n=r.substring(0,2),a=r.substring(2,4),t.temperature=g(parseInt("0x"+a+n)/100);break;case"04":t.pressure=g(u(r,0)/100);break;case"13":t.bleEnter=g([]);for(var m=0;m<r.length/10;m++){var y=r.substring(0+10*m,2+10*m),x=r.substring(2+10*m,4+10*m),w=r.substring(4+10*m,6+10*m),S=r.substring(6+10*m,8+10*m),L=r.substring(8+10*m,10+10*m);t.bleEnter.data.push({major:"00"+y,minor:w+x,rssi:i(S),xB:L})}break;case"14":for(t.bleExit=g([]),m=0;m<r.length/6;m++)y=r.substring(0+6*m,2+6*m),x=r.substring(2+6*m,4+6*m),w=r.substring(4+6*m,6+6*m),t.bleExit.data.push({major:"00"+y,minor:w+x});break;case"0a":break;case"0c":t.move=g(l(r));break;case"0d":t.fall=g(l(r));break;case"0e":t.shock=g(l(r));break;case"01":t.uptime=g(l(r));break;case"0b":var E=r.substring(16,18),B=r.substring(18,20),j=moment(1e3*u(r,0)),O=moment(1e3*u(r,8));t.button=g({from:j.toISOString(),to:O.toISOString(),btn:E,pressType:B});break;case"16":if(0===r.length){t.gps=d("check done, no FIX");break}var C=parseInt(r.substring(0,2),16),F=p(u(r,2)),P=p(u(r,10)),M=u(r,18)/10,U=u(r,26)/10,V=u(r,34),A=parseInt("0x"+r.substring(42,44));t.gps=g({status:C,lat:parseFloat(F).toFixed(5),lon:parseFloat(P).toFixed(5),alt:M,precision:U,timestamp:V,nsats:A});break;case"19":if(0===r.length){t.presence=d("no presence iBeacon seen");break}void 0===t.presence&&(t.presence=g([])),n=r.substring(0,2),a=r.substring(2,4);var T="";for(m=(s=r.substring(2,r.length)).length/4-1;m>=0;m--)T+=s[4*m+0],T+=s[4*m+1],T+=s[4*m+2],T+=s[4*m+3];var D="81"+n+"-00",G=o(T);for(m=G.length-1;m>=0;m--)if(1===parseInt(G[m])){var R=G.length-1-m;t.presence.data.push(D+R.toString(16).padStart(2,"0"))}break;case"10":t.rebootReason=g(r);break;case"11":t.lastAssert=g(r);break;case"17":t.bleErrorMask=g(r);break;case"18":t.lastLogCaller=g(r);break;case"02":void 0===t.getConfig&&(t.getConfig=g([]));let z=r.substring(0,2),N=r.substring(2,4),X=parseInt(r.substring(4,6),16),q=r.substring(6,6+2*X);t.getConfig.data.push({key:""+N+z,length:X,value:q,raw:r});break;case"dlId":e.v>15||e.v<0?t.dlId=f("Bad DLID ["+r+"]"):t.dlId=g(r);break;case"payloadVersion":1!==e.v?t.payloadVersion=f("Bad Payload version ["+r+"]"):t.payloadVersion=g(r);break;case"willListen":0!==e.v?t.willListen=g(!0):t.willListen=g(!1);break;case"payloadLength":t.payloadLengthError=f(r);break;default:console.log("Unknown key [",e.t,"]",r)}})),{data:t};var r,t}function a(e){let r="";return e.forEach((function(e){r+=("0"+Number(e).toString(16)).slice(-2).toUpperCase()})),r}t.r(r),t.d(r,"parseAndInterprete",(function(){return n})),t.d(r,"convertFromArray",(function(){return a}));var s=function(e){var r=[],t=parseInt("0x"+e[0]+e[1]);r.push({t:"dlId",l:0,v:15&t}),r.push({t:"payloadVersion",l:0,v:(48&t)>>4}),r.push({t:"willListen",l:0,v:64&t}),parseInt("0x"+e[2]+e[3])!==e.length/2-2&&r.push({t:"payloadLength",l:-1,v:"payload length incoherence detected"});for(var n=4;n<e.length;){var a,s,o="";a=e[n]+e[n+1]+"",s=parseInt("0x"+e[n+2]+e[n+3]);for(var i=n+4;i<n+4+2*s;i+=2)o+=""+e[i]+e[i+1];r.push({t:a,l:s,v:o}),n=n+4+2*s}return r};let o=function(e){return parseInt(e,16).toString(2).padStart(8,"0")},i=function(e){let r=parseInt("0x"+e);return r>128?r-256:r},u=function(e,r){var t=e.substring(r,r+2),n=e.substring(r+2,r+4),a=e.substring(r+4,r+6),s=e.substring(r+6,r+8);return parseInt("0x"+s+a+n+t)},l=function(e){return moment(1e3*u(e,0)).toISOString()},b=function(e){for(var r=((e="00"+e).length-2)/10,t=[],n=0;n<r;n++){let r=e.substr(0+10*n,4),a=e.substr(6+10*n,2)+e.substr(4+10*n,2),s=parseInt(""+parseInt("0x"+e.substr(8+10*n,2)))-254;t.push({major:r,minor:a,rssi:s})}return t},c=function(e){for(var r=[],t=e.length/4,n=0;n<t;n++)r.push({type:e[4*n]+e[4*n+1],count:parseInt("0x"+e[4*n+2]+e[4*n+3])});return r},p=function(e){var r=Math.floor(e/1e6);return r+(e-parseInt(1e6*r))/6e5},g=function(e){return{data:e}},f=function(e){return{error:e}},d=function(e){return{warn:e}}}]);