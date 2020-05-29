function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{kk3Z:function(t,e,n){"use strict";n.r(e),n.d(e,"ClientModule",(function(){return A}));var o,i=n("ofXK"),a=n("tyNb"),c=n("fXoL"),s=((o=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||o)},o.\u0275cmp=c.Ib({type:o,selectors:[["app-client"]],decls:1,vars:0,template:function(t,e){1&t&&c.Pb(0,"router-outlet")},directives:[a.g],styles:[""]}),o),r=n("be2r"),b=n("XiUz"),d=n("aZ8m"),u=n("kmnG"),g=n("qFsG"),p=n("3Pt+"),l=n("bTqV"),f=n("NFeN");function h(t,e){if(1&t&&(c.Ub(0,"div"),c.Ub(1,"div",18),c.wc(2),c.Tb(),c.Tb()),2&t){var n=e.$implicit,o=c.gc();c.Cb(1),c.jc("ngClass",n.id===o.user.id?"right":"left"),c.Cb(1),c.yc(" ",n.message," ")}}function m(t,e){if(1&t){var n=c.Vb();c.Ub(0,"div"),c.Ub(1,"p",21),c.wc(2),c.Tb(),c.Ub(3,"div"),c.Ub(4,"mat-form-field",22),c.Ub(5,"input",23),c.cc("ngModelChange",(function(t){return c.nc(n),c.gc(2).accessCode=t})),c.Tb(),c.Tb(),c.Ub(6,"button",24),c.cc("click",(function(){return c.nc(n),c.gc(2).joinSession()})),c.wc(7," Join Session"),c.Tb(),c.Tb(),c.Tb()}if(2&t){var o=e.$implicit,i=c.gc(2);c.Cb(2),c.xc(o),c.Cb(3),c.jc("ngModel",i.accessCode)}}function x(t,e){if(1&t&&(c.Ub(0,"div",19),c.Ub(1,"p",20),c.wc(2," Active Sessions "),c.Tb(),c.uc(3,m,8,2,"div",10),c.Tb()),2&t){var n=c.gc();c.Cb(3),c.jc("ngForOf",n.sessions)}}var C,T,U,w=((C=function(){function t(e){_classCallCheck(this,t),this.socketService=e,this.user={room:"",name:"",id:0,message:""},this.sessions=["Test"],this.messageList=[],this.showSession=!0,this.counsellor=""}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"joinSession",value:function(){this.user.room=this.accessCode,this.user.id=Math.random(),this.user.name=prompt("Enter username"),this.socketConnection(),this.getMessages()}},{key:"socketConnection",value:function(){this.socketService.setupSocketConnection(),this.socketService.joinRoom(this.user.room)}},{key:"senMessageOnEnter",value:function(t){13===t.keyCode&&(this.socketService.sendMessage(this.user),this.user.message="")}},{key:"sendMessage",value:function(){this.socketService.sendMessage(this.user),this.user.message=""}},{key:"getMessages",value:function(){var t=this;this.socketService.getMessages().subscribe((function(e){e.id!=t.user.id&&(t.counsellor=e.name),t.messageList.push(e),document.getElementById("chatContainer").scrollTop=document.getElementById("chatContainer").scrollHeight}))}}]),t}()).\u0275fac=function(t){return new(t||C)(c.Ob(r.a))},C.\u0275cmp=c.Ib({type:C,selectors:[["app-chat"]],decls:20,vars:7,consts:[["fxLayout","column"],[3,"theme","variant"],["fxLayout","column",1,"container"],["fxLayout","","fxLayoutAlign","start center",1,"chat-header"],["fxLayout","","fxLayoutAlign","center center",2,"height","40px","width","40px","background","white","margin-left","8px","border-radius","24px"],["src","../../../assets/icons/chat-header.png","height","24",2,"position","absolute"],[1,"username"],["fxFlex",""],["fxLayout","column","fxLayoutAlign","space-between",1,"chat-main"],["fxFlex","","fxLayout","column","id","chatContainer"],[4,"ngFor","ngForOf"],["fxLayout","","fxLayoutGap","12px","fxLayoutAlign","start center",1,"send-message"],["src","../../../assets/icons/mood.svg",1,"mood-icon"],["fxFlex","","appearance","fill"],["matInput","","placeholder","Enter a message",3,"ngModel","ngModelChange","keyup"],["mat-button","",1,"send-button",3,"disabled","click"],[2,"color","white"],["id","session-container",4,"ngIf"],[3,"ngClass"],["id","session-container"],[2,"height","60px"],[2,"font-size","48px"],["id","accessCode"],["matInput","","placeholder","Enter Access Code",3,"ngModel","ngModelChange"],["mat-raised-button","",3,"click"]],template:function(t,e){1&t&&(c.Ub(0,"div",0),c.Pb(1,"app-header",1),c.Ub(2,"div",2),c.Ub(3,"div",3),c.Ub(4,"div",4),c.Pb(5,"img",5),c.Tb(),c.Ub(6,"p",6),c.wc(7),c.Tb(),c.Tb(),c.Ub(8,"div",7),c.Ub(9,"div",8),c.Ub(10,"div",9),c.uc(11,h,3,2,"div",10),c.Tb(),c.Ub(12,"div",11),c.Pb(13,"img",12),c.Ub(14,"mat-form-field",13),c.Ub(15,"input",14),c.cc("ngModelChange",(function(t){return e.user.message=t}))("keyup",(function(t){return e.senMessageOnEnter(t)})),c.Tb(),c.Tb(),c.Ub(16,"button",15),c.cc("click",(function(){return e.sendMessage()})),c.Ub(17,"mat-icon",16),c.wc(18,"send"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.uc(19,x,4,1,"div",17)),2&t&&(c.Cb(1),c.jc("theme","light")("variant","client"),c.Cb(6),c.yc(" ",e.counsellor?e.counsellor:"Counsellor",""),c.Cb(4),c.jc("ngForOf",e.messageList),c.Cb(4),c.jc("ngModel",e.user.message),c.Cb(1),c.jc("disabled",!e.user.message),c.Cb(3),c.jc("ngIf",e.showSession&&!e.user.room))},directives:[b.d,d.a,b.c,b.a,i.i,b.e,u.a,g.a,p.b,p.h,p.j,l.a,f.a,i.j,i.h],styles:[".username[_ngcontent-%COMP%]{font-size:18px;margin-bottom:0;margin-left:24px;color:#fff;font-weight:700}.chat-header[_ngcontent-%COMP%]{background:#00b4ad;border-radius:32px;height:50px}#message-container[_ngcontent-%COMP%]{margin-top:2px;margin-bottom:2px}.left[_ngcontent-%COMP%]{float:left}.left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%]{width:250px;padding:8px 0 8px 10px;border-radius:8px;background:#fff;margin-top:10px;margin-bottom:10px}.right[_ngcontent-%COMP%]{float:right}#message[_ngcontent-%COMP%]{background:#00b4ad;margin-top:2px}.chat-main[_ngcontent-%COMP%]{min-height:calc(100vh - 136px);border-radius:32px;background:#def3f1}.from-chat[_ngcontent-%COMP%]{background:#fff}.from-chat[_ngcontent-%COMP%], .to-chat[_ngcontent-%COMP%]{height:160px;width:360px;border-radius:12px 24px 24px 24px}.to-chat[_ngcontent-%COMP%]{background:#00afaa}#session-container[_ngcontent-%COMP%]{width:320px;padding:10px;overflow-y:auto;box-shadow:1px 1px 2px 2px #b6b6b6;position:absolute;left:0;top:35%;right:0;margin:auto;height:280px}#accessCode[_ngcontent-%COMP%]{margin-top:10px}.send-message[_ngcontent-%COMP%]{bottom:0;background:#00b6af;border-radius:32px}.mood-icon[_ngcontent-%COMP%]{padding-left:18px;height:32px}.send-icon[_ngcontent-%COMP%]{padding-right:18px;height:32px}[_nghost-%COMP%]     .mat-form-field-wrapper{padding-bottom:0!important;background:#fff;border-radius:32px;margin-top:8px;margin-bottom:8px}[_nghost-%COMP%]     .mat-form-field-underline{display:none}[_nghost-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-infix{padding:.25em 0 .75em .5em}[_nghost-%COMP%]     .mat-form-field-infix{border-top:0}[_nghost-%COMP%]     .mat-form-field{font-size:18px}@media only screen and (min-width:1200px){.container[_ngcontent-%COMP%], .container-lg[_ngcontent-%COMP%], .container-md[_ngcontent-%COMP%], .container-sm[_ngcontent-%COMP%], .container-xl[_ngcontent-%COMP%]{max-width:1024px}}#chatContainer[_ngcontent-%COMP%]{padding:25px;overflow-y:scroll;margin-bottom:10px}.send-button[_ngcontent-%COMP%]{text-align:left!important}"]}),C),y=[{path:"",component:s,children:[{path:"",redirectTo:"my-bookings",pathMatch:"full"},{path:"book",redirectTo:"my-bookings",pathMatch:"full"},{path:"my-bookings",component:(T=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),T.\u0275fac=function(t){return new(t||T)},T.\u0275cmp=c.Ib({type:T,selectors:[["app-my-bookings"]],decls:103,vars:3,consts:[["fxLayout","column"],[3,"theme","variant"],["fxLayout","column","fxLayoutGap","8px",1,"container",2,"margin-top","32px"],[1,"section-heading"],["fxLayout","","fxLayoutGap","56px"],["fxFlex","40"],["fxLayout","column","fxLayoutAlign","space-between",1,"session-card"],["fxLayout","","fxLayoutAlign","space-between center"],[1,"topic-heading"],["mat-button","",2,"min-width","36px","padding","0 4px"],[2,"color","white"],[1,"counsellor-name"],["fxLayout","column","fxLayoutGap","8px"],[1,"heading-starts-in"],["fxFlex","","fxLayout","","fxLayoutAlign","space-around"],["fxLayout","column","fxLayoutAlign","start center"],[1,"remaining-time-number"],[1,"remaining-time-unit"],["fxFlex","20"],["mat-raised-button","",3,"disabled"],["fxFlex","60"],["fxLayout","","fxLayoutAlign","space-around center","fxLayoutGap","18px",1,"session-card"],["src","../../../assets/images/support.svg",2,"height","130px"],["fxLayout","column","fxLayoutAlign","space-around",2,"height","100%"],[1,"need-help"],[1,"help-text"],["cellspacing","0",1,"table-style"],[1,"header-row"],[1,"data-row"],["mat-button",""]],template:function(t,e){1&t&&(c.Ub(0,"div",0),c.Pb(1,"app-header",1),c.Ub(2,"div",2),c.Ub(3,"p",3),c.wc(4,"Next Session"),c.Tb(),c.Ub(5,"div",4),c.Ub(6,"div",5),c.Ub(7,"div",6),c.Ub(8,"div",0),c.Ub(9,"div",7),c.Ub(10,"p",8),c.wc(11,"Topic: Career"),c.Tb(),c.Ub(12,"button",9),c.Ub(13,"mat-icon",10),c.wc(14,"more_vert"),c.Tb(),c.Tb(),c.Tb(),c.Ub(15,"p",11),c.wc(16,"With Laura"),c.Tb(),c.Tb(),c.Ub(17,"div",12),c.Ub(18,"p",13),c.wc(19,"Starts in"),c.Tb(),c.Ub(20,"div",7),c.Ub(21,"div",14),c.Ub(22,"div",15),c.Ub(23,"p",16),c.wc(24,"1"),c.Tb(),c.Ub(25,"p",17),c.wc(26,"Day"),c.Tb(),c.Tb(),c.Ub(27,"div",15),c.Ub(28,"p",16),c.wc(29,"2"),c.Tb(),c.Ub(30,"p",17),c.wc(31,"hours"),c.Tb(),c.Tb(),c.Ub(32,"div",15),c.Ub(33,"p",16),c.wc(34,"55"),c.Tb(),c.Ub(35,"p",17),c.wc(36,"Minutes"),c.Tb(),c.Tb(),c.Tb(),c.Pb(37,"div",18),c.Ub(38,"button",19),c.wc(39,"Enter Session"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(40,"div",20),c.Ub(41,"div",21),c.Pb(42,"img",22),c.Ub(43,"div",23),c.Ub(44,"p",24),c.wc(45,"Need Help?"),c.Tb(),c.Ub(46,"p",25),c.wc(47,"Check out our FAQs or contact support"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(48,"p",3),c.wc(49,"Upcoming Sessions"),c.Tb(),c.Ub(50,"table",26),c.Ub(51,"tr",27),c.Ub(52,"th"),c.wc(53,"Topic"),c.Tb(),c.Ub(54,"th"),c.wc(55,"Counsellor"),c.Tb(),c.Ub(56,"th"),c.wc(57,"Session Timings"),c.Tb(),c.Pb(58,"th"),c.Tb(),c.Ub(59,"tr",28),c.Ub(60,"td"),c.wc(61,"Anxiety"),c.Tb(),c.Ub(62,"td"),c.wc(63,"Liz"),c.Tb(),c.Ub(64,"td"),c.wc(65,"18 May 6:00 PM - 6:45 PM"),c.Tb(),c.Ub(66,"td"),c.Ub(67,"button",29),c.Ub(68,"mat-icon"),c.wc(69,"more_horiz"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(70,"tr",28),c.Ub(71,"td"),c.wc(72,"Anxiety"),c.Tb(),c.Ub(73,"td"),c.wc(74,"Liz"),c.Tb(),c.Ub(75,"td"),c.wc(76,"18 May 6:00 PM - 6:45 PM"),c.Tb(),c.Ub(77,"td"),c.Ub(78,"button",29),c.Ub(79,"mat-icon"),c.wc(80,"more_horiz"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(81,"tr",28),c.Ub(82,"td"),c.wc(83,"Anxiety"),c.Tb(),c.Ub(84,"td"),c.wc(85,"Liz"),c.Tb(),c.Ub(86,"td"),c.wc(87,"18 May 6:00 PM - 6:45 PM"),c.Tb(),c.Ub(88,"td"),c.Ub(89,"button",29),c.Ub(90,"mat-icon"),c.wc(91,"more_horiz"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(92,"tr",28),c.Ub(93,"td"),c.wc(94,"Anxiety"),c.Tb(),c.Ub(95,"td"),c.wc(96,"Liz"),c.Tb(),c.Ub(97,"td"),c.wc(98,"18 May 6:00 PM - 6:45 PM"),c.Tb(),c.Ub(99,"td"),c.Ub(100,"button",29),c.Ub(101,"mat-icon"),c.wc(102,"more_horiz"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb()),2&t&&(c.Cb(1),c.jc("theme","light")("variant","client"),c.Cb(37),c.jc("disabled",!0))},directives:[b.d,d.a,b.e,b.a,b.c,l.a,f.a],styles:[".session-card[_ngcontent-%COMP%]{height:264px;background:#4fbbbc;border-radius:15px;padding:18px;box-shadow:0 2px 4px 0 rgba(0,0,0,.5)}.section-heading[_ngcontent-%COMP%]{font-size:24px;color:#000;font-weight:lighter;margin-top:16px}.topic-heading[_ngcontent-%COMP%]{font-size:32px;color:#fff;font-weight:700}.counsellor-name[_ngcontent-%COMP%]{font-size:21px;font-weight:lighter;color:#fff}.heading-starts-in[_ngcontent-%COMP%], .remaining-time-number[_ngcontent-%COMP%]{font-size:24px;font-weight:700;color:#fff}.remaining-time-unit[_ngcontent-%COMP%]{font-size:12px;font-weight:lighter;color:#fff}.need-help[_ngcontent-%COMP%]{font-size:32px}.help-text[_ngcontent-%COMP%], .need-help[_ngcontent-%COMP%]{font-weight:lighter;color:#fff}.help-text[_ngcontent-%COMP%]{font-size:18px}.table-style[_ngcontent-%COMP%]{text-align:center;width:100%}.header-row[_ngcontent-%COMP%]{height:60px;border-radius:5px;background:rgba(90,255,218,.35);font-size:18px;font-weight:700}.data-row[_ngcontent-%COMP%]{height:60px;font-size:24px;font-weight:lighter}"]}),T)},{path:"chat",component:w}]}],M=((U=function t(){_classCallCheck(this,t)}).\u0275mod=c.Mb({type:U}),U.\u0275inj=c.Lb({factory:function(t){return new(t||U)},imports:[[a.f.forChild(y)],a.f]}),U),v=n("PCNd"),P=n("0IaG");n("8LU1"),n("0EQZ"),n("cH1L"),n("nLfN"),n("XNiG"),n("2Vo4"),n("7+OI"),n("LRne"),n("1G5W");var _,k=((_=function t(){_classCallCheck(this,t)}).\u0275mod=c.Mb({type:_}),_.\u0275inj=c.Lb({factory:function(t){return new(t||_)}}),_),O=n("FKr1");n("quSY"),n("VRyK"),n("itXk"),n("lJxs");var L,z,j=((L=function t(){_classCallCheck(this,t)}).\u0275mod=c.Mb({type:L}),L.\u0275inj=c.Lb({factory:function(t){return new(t||L)},imports:[[k,O.c],O.c]}),L),S=n("f0Cb"),A=((z=function t(){_classCallCheck(this,t)}).\u0275mod=c.Mb({type:z}),z.\u0275inj=c.Lb({factory:function(t){return new(t||z)},imports:[[i.b,M,b.f,v.a,u.c,P.a,g.b,l.b,p.d,f.b,j,S.b]]}),z)}}]);