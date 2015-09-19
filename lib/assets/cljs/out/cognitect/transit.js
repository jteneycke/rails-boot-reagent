// Compiled by ClojureScript 1.7.107 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__9953_9957 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__9954_9958 = null;
var count__9955_9959 = (0);
var i__9956_9960 = (0);
while(true){
if((i__9956_9960 < count__9955_9959)){
var k_9961 = cljs.core._nth.call(null,chunk__9954_9958,i__9956_9960);
var v_9962 = (b[k_9961]);
(a[k_9961] = v_9962);

var G__9963 = seq__9953_9957;
var G__9964 = chunk__9954_9958;
var G__9965 = count__9955_9959;
var G__9966 = (i__9956_9960 + (1));
seq__9953_9957 = G__9963;
chunk__9954_9958 = G__9964;
count__9955_9959 = G__9965;
i__9956_9960 = G__9966;
continue;
} else {
var temp__4425__auto___9967 = cljs.core.seq.call(null,seq__9953_9957);
if(temp__4425__auto___9967){
var seq__9953_9968__$1 = temp__4425__auto___9967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9953_9968__$1)){
var c__8159__auto___9969 = cljs.core.chunk_first.call(null,seq__9953_9968__$1);
var G__9970 = cljs.core.chunk_rest.call(null,seq__9953_9968__$1);
var G__9971 = c__8159__auto___9969;
var G__9972 = cljs.core.count.call(null,c__8159__auto___9969);
var G__9973 = (0);
seq__9953_9957 = G__9970;
chunk__9954_9958 = G__9971;
count__9955_9959 = G__9972;
i__9956_9960 = G__9973;
continue;
} else {
var k_9974 = cljs.core.first.call(null,seq__9953_9968__$1);
var v_9975 = (b[k_9974]);
(a[k_9974] = v_9975);

var G__9976 = cljs.core.next.call(null,seq__9953_9968__$1);
var G__9977 = null;
var G__9978 = (0);
var G__9979 = (0);
seq__9953_9957 = G__9976;
chunk__9954_9958 = G__9977;
count__9955_9959 = G__9978;
i__9956_9960 = G__9979;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__7954__auto__,writer__7955__auto__,opt__7956__auto__){
return cljs.core._write.call(null,writer__7955__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__7954__auto__,writer__7955__auto__,opt__7956__auto__){
return cljs.core._write.call(null,writer__7955__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args9980 = [];
var len__8414__auto___9983 = arguments.length;
var i__8415__auto___9984 = (0);
while(true){
if((i__8415__auto___9984 < len__8414__auto___9983)){
args9980.push((arguments[i__8415__auto___9984]));

var G__9985 = (i__8415__auto___9984 + (1));
i__8415__auto___9984 = G__9985;
continue;
} else {
}
break;
}

var G__9982 = args9980.length;
switch (G__9982) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9980.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__9987 = (i + (2));
var G__9988 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__9987;
ret = G__9988;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__7954__auto__,writer__7955__auto__,opt__7956__auto__){
return cljs.core._write.call(null,writer__7955__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__7954__auto__,writer__7955__auto__,opt__7956__auto__){
return cljs.core._write.call(null,writer__7955__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__9989_9993 = cljs.core.seq.call(null,v);
var chunk__9990_9994 = null;
var count__9991_9995 = (0);
var i__9992_9996 = (0);
while(true){
if((i__9992_9996 < count__9991_9995)){
var x_9997 = cljs.core._nth.call(null,chunk__9990_9994,i__9992_9996);
ret.push(x_9997);

var G__9998 = seq__9989_9993;
var G__9999 = chunk__9990_9994;
var G__10000 = count__9991_9995;
var G__10001 = (i__9992_9996 + (1));
seq__9989_9993 = G__9998;
chunk__9990_9994 = G__9999;
count__9991_9995 = G__10000;
i__9992_9996 = G__10001;
continue;
} else {
var temp__4425__auto___10002 = cljs.core.seq.call(null,seq__9989_9993);
if(temp__4425__auto___10002){
var seq__9989_10003__$1 = temp__4425__auto___10002;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9989_10003__$1)){
var c__8159__auto___10004 = cljs.core.chunk_first.call(null,seq__9989_10003__$1);
var G__10005 = cljs.core.chunk_rest.call(null,seq__9989_10003__$1);
var G__10006 = c__8159__auto___10004;
var G__10007 = cljs.core.count.call(null,c__8159__auto___10004);
var G__10008 = (0);
seq__9989_9993 = G__10005;
chunk__9990_9994 = G__10006;
count__9991_9995 = G__10007;
i__9992_9996 = G__10008;
continue;
} else {
var x_10009 = cljs.core.first.call(null,seq__9989_10003__$1);
ret.push(x_10009);

var G__10010 = cljs.core.next.call(null,seq__9989_10003__$1);
var G__10011 = null;
var G__10012 = (0);
var G__10013 = (0);
seq__9989_9993 = G__10010;
chunk__9990_9994 = G__10011;
count__9991_9995 = G__10012;
i__9992_9996 = G__10013;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__7954__auto__,writer__7955__auto__,opt__7956__auto__){
return cljs.core._write.call(null,writer__7955__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__7954__auto__,writer__7955__auto__,opt__7956__auto__){
return cljs.core._write.call(null,writer__7955__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__10014_10018 = cljs.core.seq.call(null,v);
var chunk__10015_10019 = null;
var count__10016_10020 = (0);
var i__10017_10021 = (0);
while(true){
if((i__10017_10021 < count__10016_10020)){
var x_10022 = cljs.core._nth.call(null,chunk__10015_10019,i__10017_10021);
ret.push(x_10022);

var G__10023 = seq__10014_10018;
var G__10024 = chunk__10015_10019;
var G__10025 = count__10016_10020;
var G__10026 = (i__10017_10021 + (1));
seq__10014_10018 = G__10023;
chunk__10015_10019 = G__10024;
count__10016_10020 = G__10025;
i__10017_10021 = G__10026;
continue;
} else {
var temp__4425__auto___10027 = cljs.core.seq.call(null,seq__10014_10018);
if(temp__4425__auto___10027){
var seq__10014_10028__$1 = temp__4425__auto___10027;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10014_10028__$1)){
var c__8159__auto___10029 = cljs.core.chunk_first.call(null,seq__10014_10028__$1);
var G__10030 = cljs.core.chunk_rest.call(null,seq__10014_10028__$1);
var G__10031 = c__8159__auto___10029;
var G__10032 = cljs.core.count.call(null,c__8159__auto___10029);
var G__10033 = (0);
seq__10014_10018 = G__10030;
chunk__10015_10019 = G__10031;
count__10016_10020 = G__10032;
i__10017_10021 = G__10033;
continue;
} else {
var x_10034 = cljs.core.first.call(null,seq__10014_10028__$1);
ret.push(x_10034);

var G__10035 = cljs.core.next.call(null,seq__10014_10028__$1);
var G__10036 = null;
var G__10037 = (0);
var G__10038 = (0);
seq__10014_10018 = G__10035;
chunk__10015_10019 = G__10036;
count__10016_10020 = G__10037;
i__10017_10021 = G__10038;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__7954__auto__,writer__7955__auto__,opt__7956__auto__){
return cljs.core._write.call(null,writer__7955__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__10039_10043 = cljs.core.seq.call(null,v);
var chunk__10040_10044 = null;
var count__10041_10045 = (0);
var i__10042_10046 = (0);
while(true){
if((i__10042_10046 < count__10041_10045)){
var x_10047 = cljs.core._nth.call(null,chunk__10040_10044,i__10042_10046);
ret.push(x_10047);

var G__10048 = seq__10039_10043;
var G__10049 = chunk__10040_10044;
var G__10050 = count__10041_10045;
var G__10051 = (i__10042_10046 + (1));
seq__10039_10043 = G__10048;
chunk__10040_10044 = G__10049;
count__10041_10045 = G__10050;
i__10042_10046 = G__10051;
continue;
} else {
var temp__4425__auto___10052 = cljs.core.seq.call(null,seq__10039_10043);
if(temp__4425__auto___10052){
var seq__10039_10053__$1 = temp__4425__auto___10052;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10039_10053__$1)){
var c__8159__auto___10054 = cljs.core.chunk_first.call(null,seq__10039_10053__$1);
var G__10055 = cljs.core.chunk_rest.call(null,seq__10039_10053__$1);
var G__10056 = c__8159__auto___10054;
var G__10057 = cljs.core.count.call(null,c__8159__auto___10054);
var G__10058 = (0);
seq__10039_10043 = G__10055;
chunk__10040_10044 = G__10056;
count__10041_10045 = G__10057;
i__10042_10046 = G__10058;
continue;
} else {
var x_10059 = cljs.core.first.call(null,seq__10039_10053__$1);
ret.push(x_10059);

var G__10060 = cljs.core.next.call(null,seq__10039_10053__$1);
var G__10061 = null;
var G__10062 = (0);
var G__10063 = (0);
seq__10039_10043 = G__10060;
chunk__10040_10044 = G__10061;
count__10041_10045 = G__10062;
i__10042_10046 = G__10063;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__7954__auto__,writer__7955__auto__,opt__7956__auto__){
return cljs.core._write.call(null,writer__7955__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__7954__auto__,writer__7955__auto__,opt__7956__auto__){
return cljs.core._write.call(null,writer__7955__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args10064 = [];
var len__8414__auto___10075 = arguments.length;
var i__8415__auto___10076 = (0);
while(true){
if((i__8415__auto___10076 < len__8414__auto___10075)){
args10064.push((arguments[i__8415__auto___10076]));

var G__10077 = (i__8415__auto___10076 + (1));
i__8415__auto___10076 = G__10077;
continue;
} else {
}
break;
}

var G__10066 = args10064.length;
switch (G__10066) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10064.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__10067 = obj;
G__10067.push(kfn.call(null,k),vfn.call(null,v));

return G__10067;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x10068 = cljs.core.clone.call(null,handlers);
x10068.forEach = ((function (x10068,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__10069 = cljs.core.seq.call(null,coll);
var chunk__10070 = null;
var count__10071 = (0);
var i__10072 = (0);
while(true){
if((i__10072 < count__10071)){
var vec__10073 = cljs.core._nth.call(null,chunk__10070,i__10072);
var k = cljs.core.nth.call(null,vec__10073,(0),null);
var v = cljs.core.nth.call(null,vec__10073,(1),null);
f.call(null,v,k);

var G__10079 = seq__10069;
var G__10080 = chunk__10070;
var G__10081 = count__10071;
var G__10082 = (i__10072 + (1));
seq__10069 = G__10079;
chunk__10070 = G__10080;
count__10071 = G__10081;
i__10072 = G__10082;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__10069);
if(temp__4425__auto__){
var seq__10069__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10069__$1)){
var c__8159__auto__ = cljs.core.chunk_first.call(null,seq__10069__$1);
var G__10083 = cljs.core.chunk_rest.call(null,seq__10069__$1);
var G__10084 = c__8159__auto__;
var G__10085 = cljs.core.count.call(null,c__8159__auto__);
var G__10086 = (0);
seq__10069 = G__10083;
chunk__10070 = G__10084;
count__10071 = G__10085;
i__10072 = G__10086;
continue;
} else {
var vec__10074 = cljs.core.first.call(null,seq__10069__$1);
var k = cljs.core.nth.call(null,vec__10074,(0),null);
var v = cljs.core.nth.call(null,vec__10074,(1),null);
f.call(null,v,k);

var G__10087 = cljs.core.next.call(null,seq__10069__$1);
var G__10088 = null;
var G__10089 = (0);
var G__10090 = (0);
seq__10069 = G__10087;
chunk__10070 = G__10088;
count__10071 = G__10089;
i__10072 = G__10090;
continue;
}
} else {
return null;
}
}
break;
}
});})(x10068,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x10068;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args10091 = [];
var len__8414__auto___10097 = arguments.length;
var i__8415__auto___10098 = (0);
while(true){
if((i__8415__auto___10098 < len__8414__auto___10097)){
args10091.push((arguments[i__8415__auto___10098]));

var G__10099 = (i__8415__auto___10098 + (1));
i__8415__auto___10098 = G__10099;
continue;
} else {
}
break;
}

var G__10093 = args10091.length;
switch (G__10093) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10091.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit10094 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit10094 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta10095){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta10095 = meta10095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit10094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10096,meta10095__$1){
var self__ = this;
var _10096__$1 = this;
return (new cognitect.transit.t_cognitect$transit10094(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta10095__$1));
});

cognitect.transit.t_cognitect$transit10094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10096){
var self__ = this;
var _10096__$1 = this;
return self__.meta10095;
});

cognitect.transit.t_cognitect$transit10094.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit10094.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit10094.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit10094.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit10094.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta10095","meta10095",1859666709,null)], null);
});

cognitect.transit.t_cognitect$transit10094.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit10094.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit10094";

cognitect.transit.t_cognitect$transit10094.cljs$lang$ctorPrWriter = (function (this__7954__auto__,writer__7955__auto__,opt__7956__auto__){
return cljs.core._write.call(null,writer__7955__auto__,"cognitect.transit/t_cognitect$transit10094");
});

cognitect.transit.__GT_t_cognitect$transit10094 = (function cognitect$transit$__GT_t_cognitect$transit10094(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta10095){
return (new cognitect.transit.t_cognitect$transit10094(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta10095));
});

}

return (new cognitect.transit.t_cognitect$transit10094(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map