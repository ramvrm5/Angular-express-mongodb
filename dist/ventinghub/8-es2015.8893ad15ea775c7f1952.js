(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"2izp":function(e,t,n){"use strict";n.r(t),n.d(t,"CounsellorModule",(function(){return P}));var o=n("ofXK"),s=n("tyNb"),i=n("fXoL");let c=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Ib({type:e,selectors:[["app-counsellor"]],decls:1,vars:0,template:function(e,t){1&e&&i.Pb(0,"router-outlet")},directives:[s.g],styles:[""]}),e})();var a=n("be2r"),r=n("XiUz"),g=n("aZ8m"),d=n("kmnG"),p=n("qFsG"),m=n("3Pt+"),b=n("bTqV"),u=n("NFeN");function l(e,t){if(1&e&&(i.Ub(0,"div",19),i.wc(1),i.Tb()),2&e){const e=i.gc().$implicit,t=i.gc();i.jc("ngClass",e.id===t.user.id?"right join":"left join"),i.Cb(1),i.yc(" ",e.message," ")}}function h(e,t){if(1&e&&(i.Ub(0,"div",19),i.wc(1),i.Tb()),2&e){const e=i.gc().$implicit,t=i.gc();i.jc("ngClass",e.id===t.user.id?"right message":"left message"),i.Cb(1),i.yc(" ",e.message," ")}}function f(e,t){if(1&e&&(i.Ub(0,"div"),i.uc(1,l,2,2,"div",18),i.uc(2,h,2,2,"div",18),i.Tb()),2&e){const e=t.$implicit;i.Cb(1),i.jc("ngIf","JOIN"===e.type),i.Cb(1),i.jc("ngIf","JOIN"!==e.type)}}function x(e,t){if(1&e){const e=i.Vb();i.Ub(0,"div",20),i.Ub(1,"p",21),i.wc(2," Active Sessions "),i.Tb(),i.Ub(3,"div"),i.Ub(4,"mat-form-field",22),i.Ub(5,"input",23),i.cc("ngModelChange",(function(t){return i.nc(e),i.gc().accessCode=t})),i.Tb(),i.Tb(),i.Ub(6,"button",24),i.cc("click",(function(){return i.nc(e),i.gc().joinSession()})),i.wc(7," Join Session"),i.Tb(),i.Tb(),i.Tb()}if(2&e){const e=i.gc();i.Cb(5),i.jc("ngModel",e.accessCode)}}const C=[{path:"",component:c,children:[{path:"",redirectTo:"chat",pathMatch:"full"},{path:"chat",component:(()=>{class e{constructor(e){this.socketService=e,this.user={room:"",name:"",id:0,message:"",type:""},this.sessions=["Test"],this.messageList=[],this.showSession=!0,this.client=""}ngOnInit(){}joinSession(){this.user.room=this.accessCode,this.user.id=Math.random(),this.user.name=prompt("Enter username"),this.socketConnection(),this.getMessages()}socketConnection(){this.socketService.setupSocketConnection(),this.socketService.joinRoom(this.user),this.socketService.roomConfirmation().subscribe(e=>{e.message=`${e.name} has joined`,e.type="JOIN",this.messageList.push(e)})}senMessageOnEnter(e){13===e.keyCode&&(this.socketService.sendMessage(this.user),this.user.message="")}sendMessage(){this.socketService.sendMessage(this.user),this.user.message="",this.scroll()}getMessages(){this.socketService.getMessages().subscribe(e=>{e.id!=this.user.id&&(this.client=e.name),this.messageList.push(e),this.scroll()})}scroll(){setTimeout(()=>{document.getElementById("chatContainer").scrollTop=document.getElementById("chatContainer").scrollHeight},100)}}return e.\u0275fac=function(t){return new(t||e)(i.Ob(a.a))},e.\u0275cmp=i.Ib({type:e,selectors:[["app-chat"]],decls:20,vars:7,consts:[["fxLayout","column"],[3,"theme","variant"],["fxLayout","column",1,"container"],["fxLayout","","fxLayoutAlign","start center",1,"chat-header"],["fxLayout","","fxLayoutAlign","center center",2,"height","40px","width","40px","background","white","margin-left","8px","border-radius","24px"],["src","../../../assets/icons/chat-header.png","height","24",2,"position","absolute"],[1,"username"],["fxFlex",""],["fxLayout","column","fxLayoutAlign","space-between",1,"chat-main"],["fxFlex","","fxLayout","column","id","chatContainer"],[4,"ngFor","ngForOf"],["fxLayout","","fxLayoutGap","12px","fxLayoutAlign","start center",1,"send-message"],["src","../../../assets/icons/mood.svg",1,"mood-icon"],["fxFlex","","appearance","fill"],["matInput","","placeholder","Enter a message",3,"ngModel","ngModelChange","keyup"],["mat-button","",1,"send-button",3,"disabled","click"],[2,"color","white"],["id","session-container",4,"ngIf"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],["id","session-container"],[2,"height","40px"],["id","accessCode"],["matInput","","placeholder","Enter Access Code",3,"ngModel","ngModelChange"],["mat-raised-button","",3,"click"]],template:function(e,t){1&e&&(i.Ub(0,"div",0),i.Pb(1,"app-header",1),i.Ub(2,"div",2),i.Ub(3,"div",3),i.Ub(4,"div",4),i.Pb(5,"img",5),i.Tb(),i.Ub(6,"p",6),i.wc(7),i.Tb(),i.Tb(),i.Ub(8,"div",7),i.Ub(9,"div",8),i.Ub(10,"div",9),i.uc(11,f,3,2,"div",10),i.Tb(),i.Ub(12,"div",11),i.Pb(13,"img",12),i.Ub(14,"mat-form-field",13),i.Ub(15,"input",14),i.cc("ngModelChange",(function(e){return t.user.message=e}))("keyup",(function(e){return t.senMessageOnEnter(e)})),i.Tb(),i.Tb(),i.Ub(16,"button",15),i.cc("click",(function(){return t.sendMessage()})),i.Ub(17,"mat-icon",16),i.wc(18,"send"),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.uc(19,x,8,1,"div",17)),2&e&&(i.Cb(1),i.jc("theme","light")("variant","client"),i.Cb(6),i.xc(t.client?t.client:"Client"),i.Cb(4),i.jc("ngForOf",t.messageList),i.Cb(4),i.jc("ngModel",t.user.message),i.Cb(1),i.jc("disabled",!t.user.message),i.Cb(3),i.jc("ngIf",t.showSession&&!t.user.room))},directives:[r.d,g.a,r.c,r.a,o.i,r.e,d.a,p.a,m.b,m.h,m.j,b.a,u.a,o.j,o.h],styles:[".username[_ngcontent-%COMP%]{font-size:18px;margin-bottom:0;margin-left:24px;color:#fff;font-weight:700}.chat-header[_ngcontent-%COMP%]{background:#00b4ad;border-radius:32px;height:50px}#message-container[_ngcontent-%COMP%]{margin-top:2px;margin-bottom:2px}.left[_ngcontent-%COMP%]{float:left}.message[_ngcontent-%COMP%]{padding:8px 0 8px 10px;background:#fff}.join[_ngcontent-%COMP%], .message[_ngcontent-%COMP%]{width:250px;border-radius:8px;margin-top:10px;margin-bottom:10px}.join[_ngcontent-%COMP%]{padding:5px 0 5px 10px;font-size:14px}.right[_ngcontent-%COMP%]{float:right}#message[_ngcontent-%COMP%]{background:#00b4ad;margin-top:2px}.chat-main[_ngcontent-%COMP%]{min-height:calc(100vh - 136px);border-radius:32px;background:#def3f1}.from-chat[_ngcontent-%COMP%]{background:#fff}.from-chat[_ngcontent-%COMP%], .to-chat[_ngcontent-%COMP%]{height:160px;width:360px;border-radius:12px 24px 24px 24px}.to-chat[_ngcontent-%COMP%]{background:#00afaa}#session-container[_ngcontent-%COMP%]{width:320px;padding:10px;overflow-y:auto;box-shadow:1px 1px 2px 2px #b6b6b6;position:absolute;left:0;top:40%;right:0;margin:auto;height:160px}#accessCode[_ngcontent-%COMP%]{margin-top:10px}.send-message[_ngcontent-%COMP%]{bottom:0;background:#00b6af;border-radius:32px}.mood-icon[_ngcontent-%COMP%]{padding-left:18px;height:32px}.send-icon[_ngcontent-%COMP%]{padding-right:18px;height:32px}[_nghost-%COMP%]     .mat-form-field-wrapper{padding-bottom:0!important;background:#fff;border-radius:32px;margin-top:8px;margin-bottom:8px}[_nghost-%COMP%]     .mat-form-field-underline{display:none}[_nghost-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-infix{padding:.25em 0 .75em .5em}[_nghost-%COMP%]     .mat-form-field-infix{border-top:0}[_nghost-%COMP%]     .mat-form-field{font-size:14px;text-align:center!important}@media only screen and (min-width:1200px){.container[_ngcontent-%COMP%], .container-lg[_ngcontent-%COMP%], .container-md[_ngcontent-%COMP%], .container-sm[_ngcontent-%COMP%], .container-xl[_ngcontent-%COMP%]{max-width:1024px}}#chatContainer[_ngcontent-%COMP%]{padding:25px;overflow-y:scroll;margin-bottom:10px}.send-button[_ngcontent-%COMP%]{text-align:left!important}"]}),e})()}]}];let M=(()=>{class e{}return e.\u0275mod=i.Mb({type:e}),e.\u0275inj=i.Lb({factory:function(t){return new(t||e)},imports:[[s.f.forChild(C)],s.f]}),e})();var O=n("PCNd"),v=n("0IaG");let P=(()=>{class e{}return e.\u0275mod=i.Mb({type:e}),e.\u0275inj=i.Lb({factory:function(t){return new(t||e)},imports:[[o.b,M,d.c,p.b,b.b,r.f,O.a,m.d,v.a,u.b]]}),e})()}}]);