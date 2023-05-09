(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const u={AED:"AE",AFN:"AF",XCD:"AG",ALL:"AL",AMD:"AM",ANG:"AN",AOA:"AO",AQD:"AQ",ARS:"AR",AUD:"AU",AZN:"AZ",BAM:"BA",BBD:"BB",BDT:"BD",XOF:"BE",BGN:"BG",BHD:"BH",BIF:"BI",BMD:"BM",BND:"BN",BOB:"BO",BRL:"BR",BSD:"BS",NOK:"BV",BWP:"BW",BYR:"BY",BZD:"BZ",CAD:"CA",CDF:"CD",XAF:"CF",CHF:"CH",CLP:"CL",CNY:"CN",COP:"CO",CRC:"CR",CUP:"CU",CVE:"CV",CYP:"CY",CZK:"CZ",DJF:"DJ",DKK:"DK",DOP:"DO",DZD:"DZ",ECS:"EC",EEK:"EE",EGP:"EG",ETB:"ET",EUR:"FR",FJD:"FJ",FKP:"FK",GBP:"GB",GEL:"GE",GGP:"GG",GHS:"GH",GIP:"GI",GMD:"GM",GNF:"GN",GTQ:"GT",GYD:"GY",HKD:"HK",HNL:"HN",HRK:"HR",HTG:"HT",HUF:"HU",IDR:"ID",ILS:"IL",INR:"IN",IQD:"IQ",IRR:"IR",ISK:"IS",JMD:"JM",JOD:"JO",JPY:"JP",KES:"KE",KGS:"KG",KHR:"KH",KMF:"KM",KPW:"KP",KRW:"KR",KWD:"KW",KYD:"KY",KZT:"KZ",LAK:"LA",LBP:"LB",LKR:"LK",LRD:"LR",LSL:"LS",LTL:"LT",LVL:"LV",LYD:"LY",MAD:"MA",MDL:"MD",MGA:"MG",MKD:"MK",MMK:"MM",MNT:"MN",MOP:"MO",MRO:"MR",MTL:"MT",MUR:"MU",MVR:"MV",MWK:"MW",MXN:"MX",MYR:"MY",MZN:"MZ",NAD:"NA",XPF:"NC",NGN:"NG",NIO:"NI",NPR:"NP",NZD:"NZ",OMR:"OM",PAB:"PA",PEN:"PE",PGK:"PG",PHP:"PH",PKR:"PK",PLN:"PL",PYG:"PY",QAR:"QA",RON:"RO",RSD:"RS",RUB:"RU",RWF:"RW",SAR:"SA",SBD:"SB",SCR:"SC",SDG:"SD",SEK:"SE",SGD:"SG",SKK:"SK",SLL:"SL",SOS:"SO",SRD:"SR",STD:"ST",SVC:"SV",SYP:"SY",SZL:"SZ",THB:"TH",TJS:"TJ",TMT:"TM",TND:"TN",TOP:"TO",TRY:"TR",TTD:"TT",TWD:"TW",TZS:"TZ",UAH:"UA",UGX:"UG",USD:"US",UYU:"UY",UZS:"UZ",VEF:"VE",VND:"VN",VUV:"VU",YER:"YE",ZAR:"ZA",ZMK:"ZM",ZWD:"ZW"},i=document.querySelectorAll("form select"),s=document.querySelector(".from select"),a=document.querySelector(".to select"),d=document.querySelector("form button");for(let o=0;o<i.length;o++){for(let t in u){let r=o==0?t=="USD"?"selected":"":t=="PHP"?"selected":"",c=`<option value="${t}" ${r}>${t}</option>`;i[o].insertAdjacentHTML("beforeend",c)}i[o].addEventListener("change",t=>{D(t.target)})}function D(o){for(let t in u)if(t==o.value){let r=o.parentElement.querySelector("img");r.src=`https://flagcdn.com/48x36/${u[t].toLowerCase()}.png`}}window.addEventListener("load",()=>{S()});d.addEventListener("click",o=>{o.preventDefault(),S()});const M=document.querySelector("form .icon");M.addEventListener("click",()=>{let o=s.value;s.value=a.value,a.value=o,D(s),D(a),S()});function S(){const o=document.querySelector("form input"),t=document.querySelector("form .exchange-rate"),r=o.value;(r==""||r=="0")&&(o.value="1",r=1),t.textContent="Getting exchange rate...";const c=`https://v6.exchangerate-api.com/v6/e7295139cb18bf656c390d38/latest/${s.value}`;fetch(c).then(e=>e.json()).then(e=>{const n=e.conversion_rates[a.value],l=(r*n).toFixed(2);t.textContent=`${r} ${s.value} = ${l} ${a.value}`}).catch(()=>{t.textContent="Something went wrong"})}
