// Compiled by ClojureScript 1.7.107 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__8512_8526 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8513_8527 = null;
var count__8514_8528 = (0);
var i__8515_8529 = (0);
while(true){
if((i__8515_8529 < count__8514_8528)){
var f_8530 = cljs.core._nth.call(null,chunk__8513_8527,i__8515_8529);
cljs.core.println.call(null,"  ",f_8530);

var G__8531 = seq__8512_8526;
var G__8532 = chunk__8513_8527;
var G__8533 = count__8514_8528;
var G__8534 = (i__8515_8529 + (1));
seq__8512_8526 = G__8531;
chunk__8513_8527 = G__8532;
count__8514_8528 = G__8533;
i__8515_8529 = G__8534;
continue;
} else {
var temp__4425__auto___8535 = cljs.core.seq.call(null,seq__8512_8526);
if(temp__4425__auto___8535){
var seq__8512_8536__$1 = temp__4425__auto___8535;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8512_8536__$1)){
var c__8159__auto___8537 = cljs.core.chunk_first.call(null,seq__8512_8536__$1);
var G__8538 = cljs.core.chunk_rest.call(null,seq__8512_8536__$1);
var G__8539 = c__8159__auto___8537;
var G__8540 = cljs.core.count.call(null,c__8159__auto___8537);
var G__8541 = (0);
seq__8512_8526 = G__8538;
chunk__8513_8527 = G__8539;
count__8514_8528 = G__8540;
i__8515_8529 = G__8541;
continue;
} else {
var f_8542 = cljs.core.first.call(null,seq__8512_8536__$1);
cljs.core.println.call(null,"  ",f_8542);

var G__8543 = cljs.core.next.call(null,seq__8512_8536__$1);
var G__8544 = null;
var G__8545 = (0);
var G__8546 = (0);
seq__8512_8526 = G__8543;
chunk__8513_8527 = G__8544;
count__8514_8528 = G__8545;
i__8515_8529 = G__8546;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_8547 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7356__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7356__auto__)){
return or__7356__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_8547);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_8547)))?cljs.core.second.call(null,arglists_8547):arglists_8547));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__8516 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8517 = null;
var count__8518 = (0);
var i__8519 = (0);
while(true){
if((i__8519 < count__8518)){
var vec__8520 = cljs.core._nth.call(null,chunk__8517,i__8519);
var name = cljs.core.nth.call(null,vec__8520,(0),null);
var map__8521 = cljs.core.nth.call(null,vec__8520,(1),null);
var map__8521__$1 = ((((!((map__8521 == null)))?((((map__8521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8521):map__8521);
var doc = cljs.core.get.call(null,map__8521__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8521__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8548 = seq__8516;
var G__8549 = chunk__8517;
var G__8550 = count__8518;
var G__8551 = (i__8519 + (1));
seq__8516 = G__8548;
chunk__8517 = G__8549;
count__8518 = G__8550;
i__8519 = G__8551;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8516);
if(temp__4425__auto__){
var seq__8516__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8516__$1)){
var c__8159__auto__ = cljs.core.chunk_first.call(null,seq__8516__$1);
var G__8552 = cljs.core.chunk_rest.call(null,seq__8516__$1);
var G__8553 = c__8159__auto__;
var G__8554 = cljs.core.count.call(null,c__8159__auto__);
var G__8555 = (0);
seq__8516 = G__8552;
chunk__8517 = G__8553;
count__8518 = G__8554;
i__8519 = G__8555;
continue;
} else {
var vec__8523 = cljs.core.first.call(null,seq__8516__$1);
var name = cljs.core.nth.call(null,vec__8523,(0),null);
var map__8524 = cljs.core.nth.call(null,vec__8523,(1),null);
var map__8524__$1 = ((((!((map__8524 == null)))?((((map__8524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8524):map__8524);
var doc = cljs.core.get.call(null,map__8524__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8524__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8556 = cljs.core.next.call(null,seq__8516__$1);
var G__8557 = null;
var G__8558 = (0);
var G__8559 = (0);
seq__8516 = G__8556;
chunk__8517 = G__8557;
count__8518 = G__8558;
i__8519 = G__8559;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map