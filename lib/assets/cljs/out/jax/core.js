// Compiled by ClojureScript 1.7.107 {}
goog.provide('jax.core');
goog.require('cljs.core');
goog.require('ajax.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Hello world!");
jax.core.handler = (function jax$core$handler(response){
return console.log([cljs.core.str(response)].join(''));
});
jax.core.error_handler = (function jax$core$error_handler(p__10142){
var map__10145 = p__10142;
var map__10145__$1 = ((((!((map__10145 == null)))?((((map__10145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10145):map__10145);
var status = cljs.core.get.call(null,map__10145__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__10145__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
ajax.core.GET.call(null,"/posts",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),jax.core.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),jax.core.error_handler], null));

//# sourceMappingURL=core.js.map