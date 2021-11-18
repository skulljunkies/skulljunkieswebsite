(this.webpackJsonpfrontend_base_dapp=this.webpackJsonpfrontend_base_dapp||[]).push([[0],{218:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"},{"internalType":"address","name":"_skullsplitterAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"payments","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setMaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"},{"internalType":"uint256","name":"_newWalletLimit","type":"uint256"}],"name":"setMaxMintAmountAndWalletLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newWalletLimit","type":"uint256"}],"name":"setWalletLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"walletLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"whiteListMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')},244:function(e,t){},267:function(e,t){},269:function(e,t){},346:function(e,t){},348:function(e,t){},381:function(e,t){},386:function(e,t){},388:function(e,t){},395:function(e,t){},408:function(e,t){},431:function(e,t){},440:function(e,t){},442:function(e,t){},512:function(e,t,n){},513:function(e,t,n){},514:function(e,t,n){"use strict";n.r(t);var a,i,r,o,s,u,p,l,c,d,y,b,m,f=n(1),h=n(84),g=n.n(h),x=n(27),j=n(118),O=n(16),w=n(57),T=n(18),v=n.n(T),C=n(68),k=n(67),S=n.n(k),M=n(217),A=n.n(M),E=n(218),_=n(69),I=n(219),D=n(15),N={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(D.a)(Object(D.a)({},N),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(D.a)(Object(D.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(D.a)(Object(D.a)({},N),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(D.a)(Object(D.a)({},e),{},{account:t.payload.account});default:return e}},F={loading:!1,name:"",totalSupply:0,cost:0,error:!1,errorMsg:""},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(D.a)(Object(D.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(D.a)(Object(D.a)({},e),{},{loading:!1,name:t.payload.name,totalSupply:t.payload.totalSupply,cost:t.payload.cost,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(D.a)(Object(D.a)({},F),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},z=Object(_.b)({blockchain:B,data:R}),U=[I.a],W=Object(_.c)(_.a.apply(void 0,U)),L=Object(_.d)(z,W),H=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},K=function(e){return function(){var e=Object(C.a)(v.a.mark((function e(t){var n,a,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,L.getState().blockchain.smartContract.methods.name().call();case 4:return n=e.sent,e.next=7,L.getState().blockchain.smartContract.methods.totalSupply().call();case 7:return a=e.sent,e.next=10,L.getState().blockchain.smartContract.methods.cost().call();case 10:i=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{name:n,totalSupply:a,cost:i}}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),t(H("Could not load data from contract."));case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}()},P=function(e){return{type:"CONNECTION_FAILED",payload:e}},J=function(e){return function(){var t=Object(C.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n(K());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Q=n(17),Y=Q.a.div(a||(a=Object(O.a)(["\n  background-color: var(--dark-grey);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),q=(Q.a.div(i||(i=Object(O.a)(["\n  height: 8px;\n  width: 8px;\n"]))),Q.a.div(r||(r=Object(O.a)(["\n  height: 16px;\n  width: 16px;\n"])))),G=Q.a.div(o||(o=Object(O.a)(["\n  height: 24px;\n  width: 24px;\n"]))),V=Q.a.div(s||(s=Object(O.a)(["\n  height: 32px;\n  width: 32px;\n"]))),X=Q.a.div(u||(u=Object(O.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),Z=Q.a.p(p||(p=Object(O.a)(["\n  color: var(--white);\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),$=(Q.a.p(l||(l=Object(O.a)(["\n  color: var(--white);\n  font-size: 14px;\n  line-height: 1.6;\n"]))),Q.a.p(c||(c=Object(O.a)(["\n  color: var(--white);\n  font-size: 12px;\n  line-height: 1.6;\n"])))),ee=(Q.a.div(d||(d=Object(O.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n.p+"static/media/mintkeeper.8110fbd5.jpg"),te=n.p+"static/media/silver.14977d47.jpg",ne=n.p+"static/media/gold.1c125903.jpg",ae=n.p+"static/media/diamond.6fadf831.jpg",ie=(n.p,n(4)),re=Q.a.button(y||(y=Object(O.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: solid;\n  background-color: black;\n  padding: 10px;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-weight: bold;\n  font-size: 40px;\n  color: #7C3AED;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n    color: #white;\n  }\n  :hover {\n    transition-duration: .4s;\n    color: white;\n  }\n"]))),oe=Q.a.div(b||(b=Object(O.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),se=Q.a.img(m||(m=Object(O.a)(["\n  width: 200px;\n  height: 200px;\n  @media (min-width: 767px) {\n    width: 350px;\n    height: 350px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"])));var ue=function(){var e,t=Object(w.b)(),n=Object(w.c)((function(e){return e.blockchain})),a=Object(w.c)((function(e){return e.data})),i=Object(f.useState)(""),r=Object(j.a)(i,2),o=r[0],s=r[1],u=Object(f.useState)(!1),p=Object(j.a)(u,2),l=p[0],c=p[1],d=function(){""!==n.account&&null!==n.smartContract&&t(K(n.account))};return Object(f.useEffect)((function(){d()}),[n.account]),Object(ie.jsx)(Y,{style:{backgroundColor:"var(--black)",fontSize:40},children:Object(ie.jsxs)(X,{flex:1,ai:"center",style:{padding:24,backgroundColor:"#67E9B9"},children:[Object(ie.jsx)(Z,{style:(e={display:"flex",flexDirection:"row",textAlign:"left",fontSize:40,fontWeight:"bold",paddingRight:10,margin:0,borderStyle:"solid",borderColor:"#7C3AED",borderWidth:10,paddingLeft:30},Object(x.a)(e,"paddingRight",30),Object(x.a)(e,"borderRadius",50),Object(x.a)(e,"textAlign","center"),Object(x.a)(e,"justifySelf","center"),Object(x.a)(e,"justifyContent","center"),Object(x.a)(e,"color","#7C3AED"),Object(x.a)(e,"background","black"),e),children:"Welcome to the MintKeeper's Exchange!"}),Object(ie.jsx)(G,{}),Object(ie.jsx)(oe,{flex:1,style:{padding:24,paddingTop:0},children:Object(ie.jsxs)(X,{flex:1,jc:"center",ai:"center",style:{paddingTop:0,flexDirection:"column"},children:[Object(ie.jsx)(Z,{style:{textAlign:"center",fontSize:25,fontWeight:"bold",borderStyle:"solid",borderColor:"black"},children:'\ud83d\udc80 "Hello gang, what can I mint for you today?" \ud83d\udc80'}),Object(ie.jsx)("a",{href:"https://skulljunkiesnft.com/",children:Object(ie.jsx)(se,{alt:"Mintkeeper",src:ee,style:{paddingTop:0,borderStyle:"solid",borderColor:"black",borderWidth:0,borderRadius:0}})}),Object(ie.jsxs)(Z,{style:{textAlign:"center",fontSize:30,fontWeight:"bold",borderStyle:"solid",borderColor:"#7C3AED",borderWidth:5,paddingLeft:100,paddingRight:100,borderRadius:10,marginTop:0,marginBottom:0,background:"black",color:"white"},children:[" Minted:",null==n.account?"   ????":"   "+a.totalSupply,"/10000"]}),Object(ie.jsx)(X,{flex:1,jc:"center",ai:"center",style:{backgroundColor:"#67E9B9",padding:24,paddingTop:0,borderStyle:"solid",borderColor:"black",borderWidth:0,borderRadius:30,fontSize:40},children:1e4==Number(a.totalSupply)?Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(Z,{style:{textAlign:"center"},children:"The sale has ended."}),Object(ie.jsx)(q,{}),Object(ie.jsxs)($,{style:{textAlign:"center"},children:["Dont worry, you're not missing out! You can still get Skulljunkie NFTs on"," ",Object(ie.jsx)("a",{href:"https://opensea.io/collection/skulljunkies",children:"Opensea.io"})]})]}):Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)($,{style:{textAlign:"center",fontSize:40},children:o}),""===n.account||null===n.smartContract?Object(ie.jsxs)(X,{ai:"center",jc:"center",children:[Object(ie.jsxs)($,{style:{textAlign:"center",fontSize:30,marginBottom:0},children:["You have the chance of winning...",Object(ie.jsxs)("div",{style:{flex:"display"},children:[Object(ie.jsx)(se,{alt:"silver",src:te,style:{paddingTop:0,borderStyle:"solid",borderColor:"black",borderWidth:3,borderRadius:0,height:100,width:100,margin:"2px"}}),Object(ie.jsx)(se,{alt:"gold",src:ne,style:{paddingTop:0,borderStyle:"solid",borderColor:"black",borderWidth:3,borderRadius:0,height:100,width:100,margin:"2px"}}),Object(ie.jsx)(se,{alt:"diamond",src:ae,style:{paddingTop:0,borderStyle:"solid",borderColor:"black",borderWidth:3,borderRadius:0,height:100,width:100,margin:"2px"}})]}),Object(ie.jsxs)("div",{style:{display:"flex",flexDirection:"column",borderStyle:"solid",borderColor:"#D5B300",borderWidth:5,borderRadius:10,backgroundColor:"black"},children:[Object(ie.jsx)("bold",{style:{color:"#C0C0C0"},children:"Silver:  5 / 10,000"})," ",Object(ie.jsx)("br",{}),Object(ie.jsx)("bold",{style:{color:"#D5B300"},children:"Gold:  3 / 10,000"})," ",Object(ie.jsx)("br",{}),Object(ie.jsx)("bold",{style:{color:"#B9F2FF"},children:"Diamond:  1 / 10,000"})]})]}),Object(ie.jsx)(q,{}),Object(ie.jsx)($,{style:{textAlign:"center",fontSize:50,marginBottom:0},children:"Connect to the Skulljunkies Minter!"}),Object(ie.jsx)(q,{}),Object(ie.jsx)(re,{style:{fontFamily:"'Staatliches', cursive;",borderWidth:10,borderRadius:30,fontSize:60},onClick:function(e){e.preventDefault(),t(function(){var e=Object(C.a)(v.a.mark((function e(t){var n,a,i,r,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t({type:"CONNECTION_REQUEST"}),n=window,!(a=n.ethereum)||!a.isMetaMask){e.next=21;break}return S.a.setProvider(a),i=new A.a(a),e.prev=6,e.next=9,a.request({method:"eth_requestAccounts"});case 9:return r=e.sent,e.next=12,a.request({method:"net_version"});case 12:1==e.sent?(o=new S.a(E,"0x45A41DC2167158c0C8c88A1261aBBEEd70A8ebac"),t({type:"CONNECTION_SUCCESS",payload:{account:r[0],smartContract:o,web3:i}}),a.on("accountsChanged",(function(e){t(J(e[0]))})),a.on("chainChanged",(function(){window.location.reload()}))):t(P("Change network to Ethereum.")),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(6),t(P("Something went wrong."));case 19:e.next=22;break;case 21:t(P("Please install Metamask."));case 22:case"end":return e.stop()}}),e,null,[[6,16]])})));return function(t){return e.apply(this,arguments)}}()),d()},children:"CONNECT"}),Object(ie.jsx)(V,{}),""!==n.errorMsg?Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(q,{}),Object(ie.jsx)($,{style:{textAlign:"center",fontSize:50},children:n.errorMsg})]}):null]}):Object(ie.jsxs)(X,{ai:"center",jc:"center",fd:"row",style:{marginTop:0,paddingTop:0},children:[Object(ie.jsxs)("form",{children:["I want ",Object(ie.jsx)("input",{id:"inputBox",placeholder:"#",type:"number",min:"1",max:"5",style:{fontFamily:"'Staatliches', cursive",fontSize:30,textAlign:"center",backgroundColor:"black",color:"#7C3AED",borderWidth:4,borderColor:"#7C3AED",borderStyle:"solid",borderRadius:100,paddingRight:10,width:100}})," Skulljunkies!"]}),Object(ie.jsx)(q,{}),Object(ie.jsx)(re,{style:{fontFamily:"'Staatliches', cursive;",fontSize:50},disabled:l?1:0,onClick:function(e){var a;e.preventDefault(),a=1,(a=document.getElementById("inputBox").value)<=0||(s("Minting your Official Skulljunkie NFT..."),c(!0),n.smartContract.methods.mint(n.account,a).send({gasLimit:285e3*a,to:"0x45A41DC2167158c0C8c88A1261aBBEEd70A8ebac",from:n.account,value:n.web3.utils.toWei((.01*a).toString(),"ether")}).once("error",(function(e){console.log(e),s("Sorry, something went wrong. Check your transaction on Etherscan to find out what happened!"),c(!1)})).then((function(e){s("CONGRATS! Your Skulljunkie(s) were successfully minted! Thank you and good luck finding the gems! "),c(!1),t(K(n.account))}))),d()},children:l?"BUSY":"MINT"})]})]})})]})}),Object(ie.jsx)(q,{}),Object(ie.jsxs)(X,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(ie.jsx)($,{style:{textAlign:"center",fontSize:40},children:Object(ie.jsx)("a",{href:"https://etherscan.io/address/0x45A41DC2167158c0C8c88A1261aBBEEd70A8ebac",style:{textDecoration:"none",color:"black",fontSize:20},children:"Skull Junkies NFT Smart Contract"})}),Object(ie.jsx)(q,{})]})]})})},pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,518)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),r(e),o(e)}))};n(512),n(513);g.a.render(Object(ie.jsx)(w.a,{store:L,children:Object(ie.jsx)(ue,{})}),document.getElementById("root")),pe()}},[[514,1,2]]]);
//# sourceMappingURL=main.10471ab3.chunk.js.map