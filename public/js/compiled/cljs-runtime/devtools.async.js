goog.provide('devtools.async');
devtools.async.available_QMARK_ = (function devtools$async$available_QMARK_(){
return (typeof Promise !== 'undefined');
});
devtools.async._STAR_installed_STAR_ = false;
devtools.async._STAR_original_set_immediate_STAR_ = null;
devtools.async.rethrow_outside_promise = (function devtools$async$rethrow_outside_promise(e){
return setTimeout((function (){
throw e;
}),(0));
});
devtools.async.promise_based_set_immediate = (function devtools$async$promise_based_set_immediate(callback){
var o__11445__auto___12832 = (function (){var o__11445__auto___12832 = (function (){var o__11445__auto___12832 = Promise;
return (o__11445__auto___12832["resolve"]).call(o__11445__auto___12832);
})();
return (o__11445__auto___12832["then"]).call(o__11445__auto___12832,callback);
})();
(o__11445__auto___12832["catch"]).call(o__11445__auto___12832,devtools.async.rethrow_outside_promise);

return null;
});
devtools.async.install_async_set_immediate_BANG_ = (function devtools$async$install_async_set_immediate_BANG_(){
(devtools.async._STAR_original_set_immediate_STAR_ = goog.async.nextTick.setImmediate_);

return (goog.async.nextTick.setImmediate_ = devtools.async.promise_based_set_immediate);
});
devtools.async.uninstall_async_set_immediate_BANG_ = (function devtools$async$uninstall_async_set_immediate_BANG_(){
return (goog.async.nextTick.setImmediate_ = devtools.async._STAR_original_set_immediate_STAR_);
});
devtools.async.installed_QMARK_ = (function devtools$async$installed_QMARK_(){
return devtools.async._STAR_installed_STAR_;
});
devtools.async.install_BANG_ = (function devtools$async$install_BANG_(){
if(cljs.core.truth_(devtools.async._STAR_installed_STAR_)){
return null;
} else {
(devtools.async._STAR_installed_STAR_ = true);

var G__12827_12838 = Error;
var target__11462__auto___12839 = G__12827_12838;
if(cljs.core.truth_(target__11462__auto___12839)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12827_12838)].join(''),"\n","target__11462__auto__"].join('')));
}

(target__11462__auto___12839["stackTraceLimit"] = Infinity);


devtools.async.install_async_set_immediate_BANG_();

return true;
}
});
devtools.async.uninstall_BANG_ = (function devtools$async$uninstall_BANG_(){
if(cljs.core.truth_(devtools.async._STAR_installed_STAR_)){
(devtools.async._STAR_installed_STAR_ = false);

return devtools.async.uninstall_async_set_immediate_BANG_();
} else {
return null;
}
});

//# sourceMappingURL=devtools.async.js.map
