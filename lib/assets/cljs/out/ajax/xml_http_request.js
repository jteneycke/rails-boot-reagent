// Compiled by ClojureScript 1.7.107 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__10104,handler){
var map__10105 = p__10104;
var map__10105__$1 = ((((!((map__10105 == null)))?((((map__10105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10105):map__10105);
var uri = cljs.core.get.call(null,map__10105__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__10105__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__10105__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__10105__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__10105__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__10105__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__10105__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__10105,map__10105__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__10103_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__10103_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__10105,map__10105__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___10113 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___10113)){
var response_type_10114 = temp__4425__auto___10113;
this$__$1.responseType = cljs.core.name.call(null,response_type_10114);
} else {
}

var seq__10107_10115 = cljs.core.seq.call(null,headers);
var chunk__10108_10116 = null;
var count__10109_10117 = (0);
var i__10110_10118 = (0);
while(true){
if((i__10110_10118 < count__10109_10117)){
var vec__10111_10119 = cljs.core._nth.call(null,chunk__10108_10116,i__10110_10118);
var k_10120 = cljs.core.nth.call(null,vec__10111_10119,(0),null);
var v_10121 = cljs.core.nth.call(null,vec__10111_10119,(1),null);
this$__$1.setRequestHeader(k_10120,v_10121);

var G__10122 = seq__10107_10115;
var G__10123 = chunk__10108_10116;
var G__10124 = count__10109_10117;
var G__10125 = (i__10110_10118 + (1));
seq__10107_10115 = G__10122;
chunk__10108_10116 = G__10123;
count__10109_10117 = G__10124;
i__10110_10118 = G__10125;
continue;
} else {
var temp__4425__auto___10126 = cljs.core.seq.call(null,seq__10107_10115);
if(temp__4425__auto___10126){
var seq__10107_10127__$1 = temp__4425__auto___10126;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10107_10127__$1)){
var c__8159__auto___10128 = cljs.core.chunk_first.call(null,seq__10107_10127__$1);
var G__10129 = cljs.core.chunk_rest.call(null,seq__10107_10127__$1);
var G__10130 = c__8159__auto___10128;
var G__10131 = cljs.core.count.call(null,c__8159__auto___10128);
var G__10132 = (0);
seq__10107_10115 = G__10129;
chunk__10108_10116 = G__10130;
count__10109_10117 = G__10131;
i__10110_10118 = G__10132;
continue;
} else {
var vec__10112_10133 = cljs.core.first.call(null,seq__10107_10127__$1);
var k_10134 = cljs.core.nth.call(null,vec__10112_10133,(0),null);
var v_10135 = cljs.core.nth.call(null,vec__10112_10133,(1),null);
this$__$1.setRequestHeader(k_10134,v_10135);

var G__10136 = cljs.core.next.call(null,seq__10107_10127__$1);
var G__10137 = null;
var G__10138 = (0);
var G__10139 = (0);
seq__10107_10115 = G__10136;
chunk__10108_10116 = G__10137;
count__10109_10117 = G__10138;
i__10110_10118 = G__10139;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__7356__auto__ = body;
if(cljs.core.truth_(or__7356__auto__)){
return or__7356__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map