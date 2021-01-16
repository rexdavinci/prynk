(this.webpackJsonpprynk=this.webpackJsonpprynk||[]).push([[0],{104:function(e,t){e.exports.ABI=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"address",name:"tokenAddress",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Save",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"withdrawnBy",type:"address"},{indexed:!1,internalType:"address",name:"tokenAddress",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Withdraw",type:"event"},{inputs:[{internalType:"address",name:"tokenAddress",type:"address"}],name:"balanceOfERC20",outputs:[{internalType:"uint256",name:"tokenBalance",type:"uint256"},{internalType:"string",name:"tokenName",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"tokenAddress",type:"address"}],name:"getFee",outputs:[{internalType:"uint256",name:"fee",type:"uint256"},{internalType:"string",name:"tokenName",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"tokenAddress",type:"address"}],name:"mySavings",outputs:[{internalType:"uint256",name:"saved",type:"uint256"},{internalType:"uint256",name:"goalAmount",type:"uint256"},{internalType:"string",name:"tokenSymbol",type:"string"},{internalType:"uint256",name:"withdrawalDate",type:"uint256"},{internalType:"uint256",name:"decimals",type:"uint256"},{internalType:"uint256",name:"withdrawable",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"tokenAddress",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"register",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"tokenAddress",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"saveMore",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"tokenAddress",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"setFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"tokenAddress",type:"address"},{internalType:"uint256",name:"goalAmount",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"withdrawalDate",type:"uint256"}],name:"startSaving",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"tokenAddress",type:"address"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}],e.exports.ERC20ABI=[{inputs:[],stateMutability:"payable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"getOwner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}]},187:function(e,t,n){},189:function(e,t,n){},194:function(e,t){},196:function(e,t){},207:function(e,t){},209:function(e,t){},235:function(e,t){},237:function(e,t){},238:function(e,t){},243:function(e,t){},245:function(e,t){},264:function(e,t){},276:function(e,t){},279:function(e,t){},305:function(e,t){},328:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(18),s=n.n(r),i=n(173),c=n.n(i),u=(n(187),n(106)),o=n(69),d=n(3),l=n.n(d),p=n(41),y=n(35),b=(n(189),n(78)),m=n.n(b),h=function(e){var t=m.a.AES.decrypt(e,"the_undecypherable").toString(m.a.enc.Utf8),n=t.slice(t.lastIndexOf(":")+1);return new Date(Number(n))},j=function(e){var t=e.user,n=e.prynkAddress,s=e.ethAddress;return"tArdor"===e.blockchain?Object(a.jsxs)(r.Fragment,{children:[Object(a.jsxs)("div",{children:[" Send your deposits",Object(a.jsx)("b",{children:n})]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("small",{children:["Your account is: ",Object(a.jsx)("b",{children:t.account})," "]}),t&&0===t.totalDeposits?Object(a.jsx)("div",{children:Object(a.jsxs)("small",{children:["This is your goalToken: ",Object(a.jsx)("b",{children:t.token})," make sure to add it to your first deposit"]})}):t&&t.token&&t.withdrawable>0?Object(a.jsx)("div",{children:Object(a.jsxs)("small",{children:["You are saving until: ",h(t.token).toDateString()]})}):t&&t.token&&t.withdrawable<=0?Object(a.jsx)("div",{}):null,t.token&&Object(a.jsxs)("small",{children:["Your withdrawable balance is ",Object(a.jsx)("b",{children:t.withdrawable<0?0:t.withdrawable/Math.pow(10,8)})," IGNIS"]})]})]}):Object(a.jsxs)(r.Fragment,{children:[Object(a.jsxs)("div",{children:["PRYNK's contract address: ",Object(a.jsx)("small",{children:Object(a.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://goerli.etherscan.io/address/".concat(s),children:Object(a.jsx)("b",{children:s})})})]}),Object(a.jsxs)("small",{children:["Get free tokens: ",Object(a.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://rexdavinci.github.io/erc20-faucet-client",children:Object(a.jsx)("b",{children:"faucet"})})]})]})},f=n(103),x=n(57),O=n(104),w=function(e){var t=e.setAddress,n=window.ethereum;n||alert("You need to install metamask or similar tools");var a=new x.a.providers.Web3Provider(n);return n.request({method:"eth_requestAccounts"}).then((function(e){return t(e[0])})),a},v=function(e){var t=e.goerli,n=t.selectWithdrawalDate,s=t.user,i=t.prynkContractAddress,c=Object(r.useState)(""),u=Object(y.a)(c,2),o=u[0],d=u[1],b=Object(r.useState)({amount:0,goal:0,symbol:"",withdrawable:0}),m=Object(y.a)(b,2),h=m[0],j=m[1],v=Object(r.useState)(""),g=Object(y.a)(v,2),T=g[0],k=g[1],A=Object(r.useState)(null),S=Object(y.a)(A,2),D=S[0],R=S[1],N=Object(r.useState)(null),C=Object(y.a)(N,2),E=C[0],W=C[1],B=Object(r.useState)(null),F=Object(y.a)(B,2),I=F[0],U=F[1];Object(r.useEffect)((function(){R(w({setAddress:d}))}),[]),Object(r.useEffect)((function(){var e;if(D){e=D.getSigner(o);var t=new f.a(i,O.ABI,e);t&&(t.mySavings(T).then((function(e){j({amount:Number(e.saved),goal:Number(e.goalAmount),symbol:e.tokenSymbol,withdrawable:Number(1e3*e.withdrawalDate),decimals:Number(e.decimals)})})),W(t));var n=new f.a(T,O.ERC20ABI,e);n&&U(n)}}),[T]);var Y=function(){var e=Object(p.a)(l.a.mark((function e(t){var n,a,r,c,u,o,d,p;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==h.amount){e.next=18;break}return s.result.amount||alert("You must specify what your goal is"),e.next=4,I.approve(i,x.a.utils.parseEther(s.result.amount));case 4:return a=e.sent,e.next=7,a.wait();case 7:if(!((r=prompt("How much are you depositing this time?"))&&r<s.result.amount)){e.next=16;break}return e.next=11,E.startSaving(T,x.a.utils.parseEther(s.result.amount),x.a.utils.parseEther(r),s.withdrawalDate);case 11:return n=e.sent,e.next=14,n.wait();case 14:c=e.sent,console.log(c);case 16:e.next=30;break;case 18:return u=prompt("How much are you depositing this time?"),o=h.amount/Math.pow(10,h.decimals),d=h.goal/Math.pow(10,h.decimals),Number(u)+o>d&&alert("This goal only requires an additional ".concat(d-o)),e.next=25,E.saveMore(T,x.a.utils.parseEther(u));case 25:return n=e.sent,e.next=28,n.wait();case 28:p=e.sent,console.log(p);case 30:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)("h3",{style:{color:"red"},children:"Use only testnet ETH (Goerli)"}),Object(a.jsxs)("div",{style:{padding:"1rem"},children:[" ",Object(a.jsxs)("em",{children:[Object(a.jsx)("b",{children:"contribute to code: "}),Object(a.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://github.com/rexdavinci/Prynk_ARDOR",children:"prynk"})]})]}),Object(a.jsxs)("p",{children:["Your address ",o]}),Object(a.jsx)("select",{onChange:function(e){"0x"!==e.target.value&&k(e.target.value)},children:[{name:"Select",symbol:"",address:"0x"},{name:"SMNT Token",symbol:"SMNT",address:"0x0566300f84f410040ab9cf22b311a1261d494564"}].map((function(e){return Object(a.jsx)("option",{value:e.address,children:e.name},e.symbol)}))}),T&&0===h.amount?Object(a.jsxs)("form",{onSubmit:function(e){return n(e,"goerli")},children:[Object(a.jsx)("span",{children:"Amount: "}),Object(a.jsx)("input",{name:"amount"}),Object(a.jsx)("span",{children:"day: "}),Object(a.jsx)("input",{name:"day"}),Object(a.jsx)("span",{children:"month: "})," ",Object(a.jsx)("input",{name:"month"}),Object(a.jsx)("span",{children:"year: "})," ",Object(a.jsx)("input",{name:"year"}),Object(a.jsx)("input",{disabled:s.withdrawalDate,type:"submit",value:"Set"})]}):null,h.amount>0&&Object(a.jsx)("div",{children:Object(a.jsxs)("p",{children:["You have currently saved ",h.amount/Math.pow(10,h.decimals)," ",h.symbol," of ",h.goal/Math.pow(10,h.decimals)," ",h.symbol," Withdrawable on ",new Date(h.withdrawable).toLocaleString(),"  "]})}),s.result&&Object(a.jsx)("div",{children:T?Object(a.jsx)("button",{onClick:Y,children:0===h.amount?"Start saving :D":"Save More :)"}):null}),Object(a.jsx)("div",{children:Object(a.jsx)(M,{user:s,chain:{name:"goerli",saved:h,prynkContract:E,tokenAddress:T}})})]})},g=function(){var e=Object(p.a)(l.a.mark((function e(t,n){var a,r,s,i,c,u,o,d,p,y,b,m,h,j,f,x,O,w,v,g;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.callType,r=n.setUser,s=n.txs,t.preventDefault(),"getAccount"!==a){e.next=31;break}return i=t.target[0].value,e.next=6,fetch("".concat("https://testardor.jelurida.com/nxt?","requestType=").concat(a,"&account=").concat(i));case 6:return c=e.sent,e.next=9,c.json();case 9:return c=e.sent,u=[],o=[],e.next=14,fetch("".concat("https://testardor.jelurida.com/nxt?","requestType=getBlocks&lastIndex=1"));case 14:return d=e.sent,e.next=17,d.json();case 17:if(p=e.sent,y=p.blocks[0].height,b=y,(m=s.filter((function(e){return e.senderRS===c.accountRS||e.recipientRS===c.accountRS}))).map((function(e){return e.senderRS===c.accountRS?(e.height<b&&(b=e.height),u.push(Number(e.amountNQT))):e.recipientRS===c.accountRS&&o.push(Number(e.amountNQT)),!0})),h=(h=m.filter((function(e){return e.senderRS===c.accountRS}))).filter((function(e){return!!e.attachment.message})),j="",1===h.length)j=h[0].attachment.message;else if(h.length>1){for(O in f=h.map((function(e){return e.block})),x=f[0],f)f[O]>x&&(x=f[O]);h=h.find((function(e){return e.block===x})),j=h.attachment.message,console.log("too many goals submitted, going with the oldest submission...")}w=0,v=0,g=0,u.length>0&&(w=u.reduce((function(e,t){return e+t}),0),v=o.reduce((function(e,t){return e+t}),0),g=w-v-.01*w),r({token:j,myTxs:m,accountCreatedBlock:b,account:c.accountRS,totalDeposits:w,totalWithdrawals:v,withdrawable:g});case 31:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),T=function(e){var t=e.setUser,n=e.prynkerTxs;return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{onSubmit:function(e){return g(e,{callType:"getAccount",setUser:t,txs:n})},children:[Object(a.jsx)("input",{name:"address",type:"text",placeholder:"ardor-address"}),Object(a.jsx)("input",{type:"submit",value:"Login"})]})})},k=function(e){var t=e.setUser;return Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:function(){return t({})},children:"Logout"})})},A=n(178),S=n.n(A),M=function(e){var t=e.user,n=e.chain,r=function(){var e=Object(p.a)(l.a.mark((function e(n){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.fee,e.prev=1,e.next=4,S.a.post("".concat("https://testardor.jelurida.com/nxt?","chain=2&requestType=sendMoney&recipient=").concat(t.account,"&amountNQT=").concat(t.withdrawable-a,"&privateKey=").concat("38e58f69890db4f575c882a15ea3f68c216afc53a76cc66f0741e11beeaa9444","&feeNQT=").concat(a,"&deadline=60"));case 4:r=e.sent,alert("Transaction successful, tx: ".concat(r.data.fullHash)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),alert("An error occurred, please try again later"),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(p.a)(l.a.mark((function e(){var a,s,i,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("goerli"!==n.name){e.next=13;break}return console.log(n.tokenAddress),e.prev=2,e.next=5,n.prynkContract.withdraw(n.tokenAddress);case 5:return a=e.sent,e.next=8,a.wait();case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0.message);case 13:if("tArdor"!==n.name){e.next=26;break}if(s=h(t.token),i=Date.now(),c=.025*Math.pow(10,8),!(s<i&&t.withdrawable>0)){e.next=25;break}if(!(t.withdrawable<c)){e.next=21;break}return alert("Your balance is lower than the fee"),e.abrupt("return",null);case 21:return e.next=23,r({fee:c});case 23:e.next=26;break;case 25:alert("Your withdrawal target date is ".concat(new Date(s).toDateString(),". You can do it, just a little more patience"));case 26:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return"goerli"===n.name?Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"Withdraw My Funds"}),Object(a.jsx)("button",{onClick:s,children:"Withdraw"})]}):"tArdor"===n.name?t.withdrawable>0&&Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"Withdraw My Funds"}),Object(a.jsx)("button",{onClick:s,children:"Withdraw"})]}):null},D=function(e){var t=e.ardor,n=t.user,s=t.setUser,i=t.transactions,c=t.selectWithdrawalDate;return Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)("h3",{style:{color:"red"},children:"Use only testnet IGNIS"}),Object(a.jsxs)("div",{style:{padding:"1rem"},children:[" ",Object(a.jsxs)("em",{children:[Object(a.jsx)("b",{children:"contribute to code: "}),Object(a.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://github.com/rexdavinci/Prynk_ARDOR",children:"prynk"})]})]}),Object(a.jsx)("div",{children:n.account?null:Object(a.jsx)(T,{setUser:s,prynkerTxs:i})}),n&&n.account&&!n.token?Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"When do you wish to withdraw your funds?"}),Object(a.jsxs)("form",{onSubmit:function(e){return c(e,"ardor")},children:[Object(a.jsx)("span",{children:"day: "}),Object(a.jsx)("input",{name:"day"}),Object(a.jsx)("span",{children:"month: "})," ",Object(a.jsx)("input",{name:"month"}),Object(a.jsx)("span",{children:"year: "})," ",Object(a.jsx)("input",{name:"year"}),Object(a.jsx)("input",{type:"submit",value:"Set"})]})]}):null,n&&n.account&&Object(a.jsx)("div",{children:Object(a.jsx)(k,{setUser:s})}),Object(a.jsx)("div",{children:Object(a.jsx)(M,{user:n,chain:{name:"tAdror"}})})]})},R=function(){var e=Object(r.useState)({}),t=Object(y.a)(e,2),n=t[0],s=t[1],i=Object(r.useState)([]),c=Object(y.a)(i,2),d=c[0],b=c[1],h=Object(r.useState)("tArdor"),f=Object(y.a)(h,2),x=f[0],O=f[1],w="0xA7c2667b7A1067DDAca4487f0BA6Aa0d647CA387";Object(r.useEffect)((function(){Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://testardor.jelurida.com/nxt?","requestType=getBlockchainTransactions&chain=2&account=").concat("ARDOR-9W2Z-RBRJ-KCN4-E3VE3"));case 2:return t=e.sent,e.next=5,t.json();case 5:t=e.sent,b(t.transactions);case 7:case"end":return e.stop()}}),e)})))()}),[n]);var g=function(e,t){e.preventDefault();var a=Object(o.a)(e.target),r={};a.map((function(e){return!!e.name&&(r[e.name]=e.value)}));var i="".concat(r.month,"/").concat(r.day,"/").concat(r.year);if(i=new Date(i).getTime(),isNaN(i))return alert("Date is in wrong format"),null;"goerli"===t&&s({withdrawalDate:Math.floor(i/1e3),result:r});var c=function(e){return m.a.AES.encrypt("".concat(e),"the_undecypherable").toString()}("".concat(n.account,":").concat(i));s((function(e){return Object(u.a)(Object(u.a)({},e),{},{token:c})}))};return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("div",{children:["Chain: ",Object(a.jsxs)("select",{onChange:function(e){O(e.target.value)},children:[Object(a.jsx)("option",{value:"tArdor",children:" Ardor (Testnet) "}),Object(a.jsx)("option",{value:"goerli",children:" Ethereum (Goerli Testnet)"})]})]}),"tArdor"===x?Object(a.jsx)(D,{ardor:{user:n,setUser:s,transactions:d,selectWithdrawalDate:g}}):Object(a.jsx)(v,{goerli:{prynkContractAddress:w,user:n,setUser:s,selectWithdrawalDate:g}}),Object(a.jsx)(j,{blockchain:x,ethAddress:w,prynkAddress:"ARDOR-9W2Z-RBRJ-KCN4-E3VE3",user:n,transactions:d})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,331)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))};c.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(R,{})}),document.getElementById("root")),N()}},[[328,1,2]]]);
//# sourceMappingURL=main.1962dc00.chunk.js.map