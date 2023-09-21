goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__17302){
var map__17308 = p__17302;
var map__17308__$1 = cljs.core.__destructure_map(map__17308);
var runtime = map__17308__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17308__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_17702 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_17702)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__17336 = runtime;
var G__17337 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_17702);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__17336,G__17337) : shadow.remote.runtime.shared.process.call(null,G__17336,G__17337));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__17343,res){
var map__17344 = p__17343;
var map__17344__$1 = cljs.core.__destructure_map(map__17344);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17344__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17344__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__17348 = res;
var G__17348__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17348,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__17348);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17348__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__17348__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__17357 = arguments.length;
switch (G__17357) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__17368,msg,handlers,timeout_after_ms){
var map__17372 = p__17368;
var map__17372__$1 = cljs.core.__destructure_map(map__17372);
var runtime = map__17372__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17372__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17720 = arguments.length;
var i__5770__auto___17722 = (0);
while(true){
if((i__5770__auto___17722 < len__5769__auto___17720)){
args__5775__auto__.push((arguments[i__5770__auto___17722]));

var G__17724 = (i__5770__auto___17722 + (1));
i__5770__auto___17722 = G__17724;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__17389,ev,args){
var map__17390 = p__17389;
var map__17390__$1 = cljs.core.__destructure_map(map__17390);
var runtime = map__17390__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17390__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__17391 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17394 = null;
var count__17395 = (0);
var i__17396 = (0);
while(true){
if((i__17396 < count__17395)){
var ext = chunk__17394.cljs$core$IIndexed$_nth$arity$2(null,i__17396);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17731 = seq__17391;
var G__17732 = chunk__17394;
var G__17733 = count__17395;
var G__17734 = (i__17396 + (1));
seq__17391 = G__17731;
chunk__17394 = G__17732;
count__17395 = G__17733;
i__17396 = G__17734;
continue;
} else {
var G__17735 = seq__17391;
var G__17736 = chunk__17394;
var G__17737 = count__17395;
var G__17738 = (i__17396 + (1));
seq__17391 = G__17735;
chunk__17394 = G__17736;
count__17395 = G__17737;
i__17396 = G__17738;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17391);
if(temp__5804__auto__){
var seq__17391__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17391__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17391__$1);
var G__17743 = cljs.core.chunk_rest(seq__17391__$1);
var G__17744 = c__5568__auto__;
var G__17745 = cljs.core.count(c__5568__auto__);
var G__17746 = (0);
seq__17391 = G__17743;
chunk__17394 = G__17744;
count__17395 = G__17745;
i__17396 = G__17746;
continue;
} else {
var ext = cljs.core.first(seq__17391__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17748 = cljs.core.next(seq__17391__$1);
var G__17749 = null;
var G__17750 = (0);
var G__17751 = (0);
seq__17391 = G__17748;
chunk__17394 = G__17749;
count__17395 = G__17750;
i__17396 = G__17751;
continue;
} else {
var G__17752 = cljs.core.next(seq__17391__$1);
var G__17753 = null;
var G__17754 = (0);
var G__17755 = (0);
seq__17391 = G__17752;
chunk__17394 = G__17753;
count__17395 = G__17754;
i__17396 = G__17755;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq17381){
var G__17382 = cljs.core.first(seq17381);
var seq17381__$1 = cljs.core.next(seq17381);
var G__17383 = cljs.core.first(seq17381__$1);
var seq17381__$2 = cljs.core.next(seq17381__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17382,G__17383,seq17381__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__17454,p__17455){
var map__17457 = p__17454;
var map__17457__$1 = cljs.core.__destructure_map(map__17457);
var runtime = map__17457__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17457__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17458 = p__17455;
var map__17458__$1 = cljs.core.__destructure_map(map__17458);
var msg = map__17458__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17458__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__17460 = cljs.core.deref(state_ref);
var map__17460__$1 = cljs.core.__destructure_map(map__17460);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17460__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17460__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__17470,msg){
var map__17472 = p__17470;
var map__17472__$1 = cljs.core.__destructure_map(map__17472);
var runtime = map__17472__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17472__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__17484,key,p__17485){
var map__17487 = p__17484;
var map__17487__$1 = cljs.core.__destructure_map(map__17487);
var state = map__17487__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17487__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__17488 = p__17485;
var map__17488__$1 = cljs.core.__destructure_map(map__17488);
var spec = map__17488__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17488__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__17505,key,spec){
var map__17506 = p__17505;
var map__17506__$1 = cljs.core.__destructure_map(map__17506);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17506__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__17514_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__17514_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__17515_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__17515_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__17519_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__17519_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__17520_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__17520_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__17521_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__17521_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__17540,key){
var map__17541 = p__17540;
var map__17541__$1 = cljs.core.__destructure_map(map__17541);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17541__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__17579,msg){
var map__17580 = p__17579;
var map__17580__$1 = cljs.core.__destructure_map(map__17580);
var runtime = map__17580__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17580__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__17587,p__17588){
var map__17589 = p__17587;
var map__17589__$1 = cljs.core.__destructure_map(map__17589);
var runtime = map__17589__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17589__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17590 = p__17588;
var map__17590__$1 = cljs.core.__destructure_map(map__17590);
var msg = map__17590__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17590__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17590__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__17600 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17602 = null;
var count__17603 = (0);
var i__17604 = (0);
while(true){
if((i__17604 < count__17603)){
var map__17635 = chunk__17602.cljs$core$IIndexed$_nth$arity$2(null,i__17604);
var map__17635__$1 = cljs.core.__destructure_map(map__17635);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17635__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17840 = seq__17600;
var G__17841 = chunk__17602;
var G__17842 = count__17603;
var G__17843 = (i__17604 + (1));
seq__17600 = G__17840;
chunk__17602 = G__17841;
count__17603 = G__17842;
i__17604 = G__17843;
continue;
} else {
var G__17844 = seq__17600;
var G__17845 = chunk__17602;
var G__17846 = count__17603;
var G__17847 = (i__17604 + (1));
seq__17600 = G__17844;
chunk__17602 = G__17845;
count__17603 = G__17846;
i__17604 = G__17847;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17600);
if(temp__5804__auto__){
var seq__17600__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17600__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17600__$1);
var G__17848 = cljs.core.chunk_rest(seq__17600__$1);
var G__17849 = c__5568__auto__;
var G__17850 = cljs.core.count(c__5568__auto__);
var G__17851 = (0);
seq__17600 = G__17848;
chunk__17602 = G__17849;
count__17603 = G__17850;
i__17604 = G__17851;
continue;
} else {
var map__17649 = cljs.core.first(seq__17600__$1);
var map__17649__$1 = cljs.core.__destructure_map(map__17649);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17649__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17852 = cljs.core.next(seq__17600__$1);
var G__17853 = null;
var G__17854 = (0);
var G__17855 = (0);
seq__17600 = G__17852;
chunk__17602 = G__17853;
count__17603 = G__17854;
i__17604 = G__17855;
continue;
} else {
var G__17856 = cljs.core.next(seq__17600__$1);
var G__17857 = null;
var G__17858 = (0);
var G__17859 = (0);
seq__17600 = G__17856;
chunk__17602 = G__17857;
count__17603 = G__17858;
i__17604 = G__17859;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
