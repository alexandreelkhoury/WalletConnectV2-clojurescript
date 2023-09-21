goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__22342,p__22343){
var map__22344 = p__22342;
var map__22344__$1 = cljs.core.__destructure_map(map__22344);
var svc = map__22344__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22344__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22344__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22344__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__22345 = p__22343;
var map__22345__$1 = cljs.core.__destructure_map(map__22345);
var msg = map__22345__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22345__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22345__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22345__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22345__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__22354,p__22355){
var map__22356 = p__22354;
var map__22356__$1 = cljs.core.__destructure_map(map__22356);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22356__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__22357 = p__22355;
var map__22357__$1 = cljs.core.__destructure_map(map__22357);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22357__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__22362,p__22363){
var map__22364 = p__22362;
var map__22364__$1 = cljs.core.__destructure_map(map__22364);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22364__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22364__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__22365 = p__22363;
var map__22365__$1 = cljs.core.__destructure_map(map__22365);
var msg = map__22365__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22365__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__22369,tid){
var map__22370 = p__22369;
var map__22370__$1 = cljs.core.__destructure_map(map__22370);
var svc = map__22370__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22370__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__22378 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__22379 = null;
var count__22380 = (0);
var i__22381 = (0);
while(true){
if((i__22381 < count__22380)){
var vec__22396 = chunk__22379.cljs$core$IIndexed$_nth$arity$2(null,i__22381);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22396,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22396,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__22436 = seq__22378;
var G__22437 = chunk__22379;
var G__22438 = count__22380;
var G__22439 = (i__22381 + (1));
seq__22378 = G__22436;
chunk__22379 = G__22437;
count__22380 = G__22438;
i__22381 = G__22439;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22378);
if(temp__5804__auto__){
var seq__22378__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22378__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22378__$1);
var G__22440 = cljs.core.chunk_rest(seq__22378__$1);
var G__22441 = c__5568__auto__;
var G__22442 = cljs.core.count(c__5568__auto__);
var G__22443 = (0);
seq__22378 = G__22440;
chunk__22379 = G__22441;
count__22380 = G__22442;
i__22381 = G__22443;
continue;
} else {
var vec__22416 = cljs.core.first(seq__22378__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22416,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22416,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__22448 = cljs.core.next(seq__22378__$1);
var G__22449 = null;
var G__22450 = (0);
var G__22451 = (0);
seq__22378 = G__22448;
chunk__22379 = G__22449;
count__22380 = G__22450;
i__22381 = G__22451;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__22371_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__22371_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__22372_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__22372_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__22373_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__22373_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__22374_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__22374_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__22423){
var map__22424 = p__22423;
var map__22424__$1 = cljs.core.__destructure_map(map__22424);
var svc = map__22424__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22424__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22424__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
