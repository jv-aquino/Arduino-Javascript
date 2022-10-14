(()=>{"use strict";const e=e=>{const t=document.createElement("img");return t.setAttribute("src","./img/"+e+"Led.png"),t.id=e,t.classList.add("led"),t};let t,r,s;const a=(e,a,n)=>{switch(e){case"green":return a&&n?["yellow","red"]:a?[r,s]:t;case"yellow":return a&&n?["green","red"]:a?[t,s]:r;case"red":return a&&n?["green","yellow"]:a?[t,r]:s}},n=(e,a)=>{switch(e){case"green":t=Boolean(a);break;case"yellow":r=Boolean(a);break;case"red":s=Boolean(a)}},i=e=>{n(e,!0),a(e,!0,!0).forEach((e=>{n(e,!1)}))},d=()=>{t=!0,r=!1,s=!1};d();const l=io("ws://localhost:8080"),c=()=>{a("yellow")&&a("green")&&a("red")?l.emit("message",{status:"7"}):a("yellow")&&a("red")?l.emit("message",{status:"6"}):a("green")&&a("red")?l.emit("message",{status:"5"}):a("green")&&a("yellow")?l.emit("message",{status:"4"}):a("red")?l.emit("message",{status:"3"}):a("yellow")?l.emit("message",{status:"2"}):a("green")?l.emit("message",{status:"1"}):l.emit("message",{status:"0"})},o=(()=>{const t=document.querySelector("main"),r=document.querySelector("li.ledLi"),s=document.querySelector("ul.ledSection");return r.addEventListener("mouseenter",(()=>s.classList.add("visible"))),s.addEventListener("mouseleave",(()=>s.classList.remove("visible"))),s.childNodes.forEach((e=>{e.addEventListener("click",(e=>{g.changePage(e.target.id)}))})),{changeDom:r=>{t.textContent="","singleLed"==r?t.appendChild(e("green")):(t.appendChild(e("green")),t.appendChild(e("yellow")),t.appendChild(e("red")))},changeLedImage:(e,t)=>{const r=document.getElementById(e);r.setAttribute("src","./img/"+t+"Led.png"),r.id=t},turnLedsOpacity:(e,t)=>{Array.isArray(e)||document.querySelector("#"+e).classList.remove("off"),Array.isArray(t)&&t.forEach((e=>{(e=document.querySelector("#"+e)).classList.add("off")}))}}})(),g=(()=>{let e;const t=()=>e,r=e=>{"trafficLights"==t()?(i(e),o.turnLedsOpacity(e,a(e,!0,!0))):0==a(e)?(n(e,!0),o.turnLedsOpacity(e,"")):(n(e,!1),o.turnLedsOpacity([""],[e]))},s=()=>{let e=t();if(d(),c(),"singleLed"==e)document.querySelector("img#green").addEventListener("click",(()=>{n("green",!a("green")),1==a("green")?o.changeLedImage("off","green"):o.changeLedImage("green","off"),c()}));else if("multipleLeds"==e)document.querySelectorAll("img.led").forEach((e=>{e.addEventListener("click",(()=>{let t=e.id;r(t),c()}))}));else if("trafficLights"==e){n("green",!1);let e=()=>{d(),"trafficLights"==t()&&(r("green"),c(),setTimeout((()=>{"trafficLights"==t()&&(r("yellow"),c())}),4e3),setTimeout((()=>{"trafficLights"==t()&&(r("red"),c())}),7e3),setTimeout(e,11e3))};e()}else if("partyMode"==e){const e=["green","yellow","red"],r=()=>{setTimeout((()=>{"partyMode"==t()&&(e.forEach((e=>{n(e,Math.floor(2*Math.random())),a(e)?o.turnLedsOpacity(e,""):o.turnLedsOpacity([""],[e])})),c(),r())}),1e3)};r()}};return{changePage:t=>{o.changeDom(t),"multipleLeds"==t?(i("green"),o.turnLedsOpacity("green",a("green",!0,!0))):"partyMode"==t&&o.turnLedsOpacity([""],["yellow","green","red"]),e=t,s()},activateListener:s}})();g.changePage("singleLed")})();