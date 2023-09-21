goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15984 = (function (f,blockable,meta15985){
this.f = f;
this.blockable = blockable;
this.meta15985 = meta15985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15986,meta15985__$1){
var self__ = this;
var _15986__$1 = this;
return (new cljs.core.async.t_cljs$core$async15984(self__.f,self__.blockable,meta15985__$1));
}));

(cljs.core.async.t_cljs$core$async15984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15986){
var self__ = this;
var _15986__$1 = this;
return self__.meta15985;
}));

(cljs.core.async.t_cljs$core$async15984.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15984.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15984.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15984.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15984.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15985","meta15985",-947776530,null)], null);
}));

(cljs.core.async.t_cljs$core$async15984.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15984.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15984");

(cljs.core.async.t_cljs$core$async15984.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15984");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15984.
 */
cljs.core.async.__GT_t_cljs$core$async15984 = (function cljs$core$async$__GT_t_cljs$core$async15984(f,blockable,meta15985){
return (new cljs.core.async.t_cljs$core$async15984(f,blockable,meta15985));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15980 = arguments.length;
switch (G__15980) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async15984(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__16054 = arguments.length;
switch (G__16054) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__16081 = arguments.length;
switch (G__16081) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__16108 = arguments.length;
switch (G__16108) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_19435 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19435) : fn1.call(null,val_19435));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19435) : fn1.call(null,val_19435));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__16123 = arguments.length;
switch (G__16123) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___19439 = n;
var x_19441 = (0);
while(true){
if((x_19441 < n__5636__auto___19439)){
(a[x_19441] = x_19441);

var G__19442 = (x_19441 + (1));
x_19441 = G__19442;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16130 = (function (flag,meta16131){
this.flag = flag;
this.meta16131 = meta16131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16132,meta16131__$1){
var self__ = this;
var _16132__$1 = this;
return (new cljs.core.async.t_cljs$core$async16130(self__.flag,meta16131__$1));
}));

(cljs.core.async.t_cljs$core$async16130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16132){
var self__ = this;
var _16132__$1 = this;
return self__.meta16131;
}));

(cljs.core.async.t_cljs$core$async16130.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16130.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async16130.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16130.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async16130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta16131","meta16131",-1630893665,null)], null);
}));

(cljs.core.async.t_cljs$core$async16130.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16130");

(cljs.core.async.t_cljs$core$async16130.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16130");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16130.
 */
cljs.core.async.__GT_t_cljs$core$async16130 = (function cljs$core$async$__GT_t_cljs$core$async16130(flag,meta16131){
return (new cljs.core.async.t_cljs$core$async16130(flag,meta16131));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async16130(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16145 = (function (flag,cb,meta16146){
this.flag = flag;
this.cb = cb;
this.meta16146 = meta16146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16147,meta16146__$1){
var self__ = this;
var _16147__$1 = this;
return (new cljs.core.async.t_cljs$core$async16145(self__.flag,self__.cb,meta16146__$1));
}));

(cljs.core.async.t_cljs$core$async16145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16147){
var self__ = this;
var _16147__$1 = this;
return self__.meta16146;
}));

(cljs.core.async.t_cljs$core$async16145.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16145.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async16145.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16145.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async16145.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta16146","meta16146",-1260757205,null)], null);
}));

(cljs.core.async.t_cljs$core$async16145.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16145.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16145");

(cljs.core.async.t_cljs$core$async16145.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16145");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16145.
 */
cljs.core.async.__GT_t_cljs$core$async16145 = (function cljs$core$async$__GT_t_cljs$core$async16145(flag,cb,meta16146){
return (new cljs.core.async.t_cljs$core$async16145(flag,cb,meta16146));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async16145(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16161_SHARP_){
var G__16163 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16161_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16163) : fret.call(null,G__16163));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16162_SHARP_){
var G__16170 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16162_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16170) : fret.call(null,G__16170));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19453 = (i + (1));
i = G__19453;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19454 = arguments.length;
var i__5770__auto___19455 = (0);
while(true){
if((i__5770__auto___19455 < len__5769__auto___19454)){
args__5775__auto__.push((arguments[i__5770__auto___19455]));

var G__19456 = (i__5770__auto___19455 + (1));
i__5770__auto___19455 = G__19456;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16181){
var map__16183 = p__16181;
var map__16183__$1 = cljs.core.__destructure_map(map__16183);
var opts = map__16183__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16171){
var G__16172 = cljs.core.first(seq16171);
var seq16171__$1 = cljs.core.next(seq16171);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16172,seq16171__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__16193 = arguments.length;
switch (G__16193) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15888__auto___19458 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15889__auto__ = (function (){var switch__15704__auto__ = (function (state_16236){
var state_val_16237 = (state_16236[(1)]);
if((state_val_16237 === (7))){
var inst_16227 = (state_16236[(2)]);
var state_16236__$1 = state_16236;
var statearr_16245_19459 = state_16236__$1;
(statearr_16245_19459[(2)] = inst_16227);

(statearr_16245_19459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16237 === (1))){
var state_16236__$1 = state_16236;
var statearr_16247_19461 = state_16236__$1;
(statearr_16247_19461[(2)] = null);

(statearr_16247_19461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16237 === (4))){
var inst_16209 = (state_16236[(7)]);
var inst_16209__$1 = (state_16236[(2)]);
var inst_16211 = (inst_16209__$1 == null);
var state_16236__$1 = (function (){var statearr_16248 = state_16236;
(statearr_16248[(7)] = inst_16209__$1);

return statearr_16248;
})();
if(cljs.core.truth_(inst_16211)){
var statearr_16253_19463 = state_16236__$1;
(statearr_16253_19463[(1)] = (5));

} else {
var statearr_16254_19464 = state_16236__$1;
(statearr_16254_19464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16237 === (13))){
var state_16236__$1 = state_16236;
var statearr_16255_19465 = state_16236__$1;
(statearr_16255_19465[(2)] = null);

(statearr_16255_19465[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16237 === (6))){
var inst_16209 = (state_16236[(7)]);
var state_16236__$1 = state_16236;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16236__$1,(11),to,inst_16209);
} else {
if((state_val_16237 === (3))){
var inst_16233 = (state_16236[(2)]);
var state_16236__$1 = state_16236;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16236__$1,inst_16233);
} else {
if((state_val_16237 === (12))){
var state_16236__$1 = state_16236;
var statearr_16258_19466 = state_16236__$1;
(statearr_16258_19466[(2)] = null);

(statearr_16258_19466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16237 === (2))){
var state_16236__$1 = state_16236;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16236__$1,(4),from);
} else {
if((state_val_16237 === (11))){
var inst_16220 = (state_16236[(2)]);
var state_16236__$1 = state_16236;
if(cljs.core.truth_(inst_16220)){
var statearr_16260_19467 = state_16236__$1;
(statearr_16260_19467[(1)] = (12));

} else {
var statearr_16261_19468 = state_16236__$1;
(statearr_16261_19468[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16237 === (9))){
var state_16236__$1 = state_16236;
var statearr_16262_19469 = state_16236__$1;
(statearr_16262_19469[(2)] = null);

(statearr_16262_19469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16237 === (5))){
var state_16236__$1 = state_16236;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16263_19470 = state_16236__$1;
(statearr_16263_19470[(1)] = (8));

} else {
var statearr_16265_19471 = state_16236__$1;
(statearr_16265_19471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16237 === (14))){
var inst_16225 = (state_16236[(2)]);
var state_16236__$1 = state_16236;
var statearr_16267_19472 = state_16236__$1;
(statearr_16267_19472[(2)] = inst_16225);

(statearr_16267_19472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16237 === (10))){
var inst_16217 = (state_16236[(2)]);
var state_16236__$1 = state_16236;
var statearr_16268_19473 = state_16236__$1;
(statearr_16268_19473[(2)] = inst_16217);

(statearr_16268_19473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16237 === (8))){
var inst_16214 = cljs.core.async.close_BANG_(to);
var state_16236__$1 = state_16236;
var statearr_16269_19474 = state_16236__$1;
(statearr_16269_19474[(2)] = inst_16214);

(statearr_16269_19474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15705__auto__ = null;
var cljs$core$async$state_machine__15705__auto____0 = (function (){
var statearr_16270 = [null,null,null,null,null,null,null,null];
(statearr_16270[(0)] = cljs$core$async$state_machine__15705__auto__);

(statearr_16270[(1)] = (1));

return statearr_16270;
});
var cljs$core$async$state_machine__15705__auto____1 = (function (state_16236){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__(state_16236);
if(cljs.core.keyword_identical_QMARK_(result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e16272){var ex__15708__auto__ = e16272;
var statearr_16273_19479 = state_16236;
(statearr_16273_19479[(2)] = ex__15708__auto__);


if(cljs.core.seq((state_16236[(4)]))){
var statearr_16274_19480 = state_16236;
(statearr_16274_19480[(1)] = cljs.core.first((state_16236[(4)])));

} else {
throw ex__15708__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19485 = state_16236;
state_16236 = G__19485;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$state_machine__15705__auto__ = function(state_16236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15705__auto____1.call(this,state_16236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15705__auto____0;
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15705__auto____1;
return cljs$core$async$state_machine__15705__auto__;
})()
})();
var state__15890__auto__ = (function (){var statearr_16278 = f__15889__auto__();
(statearr_16278[(6)] = c__15888__auto___19458);

return statearr_16278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15890__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__16282){
var vec__16283 = p__16282;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16283,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16283,(1),null);
var job = vec__16283;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15888__auto___19489 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15889__auto__ = (function (){var switch__15704__auto__ = (function (state_16290){
var state_val_16291 = (state_16290[(1)]);
if((state_val_16291 === (1))){
var state_16290__$1 = state_16290;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16290__$1,(2),res,v);
} else {
if((state_val_16291 === (2))){
var inst_16287 = (state_16290[(2)]);
var inst_16288 = cljs.core.async.close_BANG_(res);
var state_16290__$1 = (function (){var statearr_16302 = state_16290;
(statearr_16302[(7)] = inst_16287);

return statearr_16302;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16290__$1,inst_16288);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____0 = (function (){
var statearr_16305 = [null,null,null,null,null,null,null,null];
(statearr_16305[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__);

(statearr_16305[(1)] = (1));

return statearr_16305;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____1 = (function (state_16290){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__(state_16290);
if(cljs.core.keyword_identical_QMARK_(result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e16306){var ex__15708__auto__ = e16306;
var statearr_16307_19490 = state_16290;
(statearr_16307_19490[(2)] = ex__15708__auto__);


if(cljs.core.seq((state_16290[(4)]))){
var statearr_16308_19491 = state_16290;
(statearr_16308_19491[(1)] = cljs.core.first((state_16290[(4)])));

} else {
throw ex__15708__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19492 = state_16290;
state_16290 = G__19492;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__ = function(state_16290){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____1.call(this,state_16290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__;
})()
})();
var state__15890__auto__ = (function (){var statearr_16310 = f__15889__auto__();
(statearr_16310[(6)] = c__15888__auto___19489);

return statearr_16310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15890__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__16311){
var vec__16313 = p__16311;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16313,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16313,(1),null);
var job = vec__16313;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___19500 = n;
var __19501 = (0);
while(true){
if((__19501 < n__5636__auto___19500)){
var G__16316_19502 = type;
var G__16316_19503__$1 = (((G__16316_19502 instanceof cljs.core.Keyword))?G__16316_19502.fqn:null);
switch (G__16316_19503__$1) {
case "compute":
var c__15888__auto___19505 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19501,c__15888__auto___19505,G__16316_19502,G__16316_19503__$1,n__5636__auto___19500,jobs,results,process__$1,async){
return (function (){
var f__15889__auto__ = (function (){var switch__15704__auto__ = ((function (__19501,c__15888__auto___19505,G__16316_19502,G__16316_19503__$1,n__5636__auto___19500,jobs,results,process__$1,async){
return (function (state_16341){
var state_val_16342 = (state_16341[(1)]);
if((state_val_16342 === (1))){
var state_16341__$1 = state_16341;
var statearr_16351_19507 = state_16341__$1;
(statearr_16351_19507[(2)] = null);

(statearr_16351_19507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16342 === (2))){
var state_16341__$1 = state_16341;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16341__$1,(4),jobs);
} else {
if((state_val_16342 === (3))){
var inst_16335 = (state_16341[(2)]);
var state_16341__$1 = state_16341;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16341__$1,inst_16335);
} else {
if((state_val_16342 === (4))){
var inst_16327 = (state_16341[(2)]);
var inst_16328 = process__$1(inst_16327);
var state_16341__$1 = state_16341;
if(cljs.core.truth_(inst_16328)){
var statearr_16354_19508 = state_16341__$1;
(statearr_16354_19508[(1)] = (5));

} else {
var statearr_16358_19509 = state_16341__$1;
(statearr_16358_19509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16342 === (5))){
var state_16341__$1 = state_16341;
var statearr_16364_19510 = state_16341__$1;
(statearr_16364_19510[(2)] = null);

(statearr_16364_19510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16342 === (6))){
var state_16341__$1 = state_16341;
var statearr_16366_19511 = state_16341__$1;
(statearr_16366_19511[(2)] = null);

(statearr_16366_19511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16342 === (7))){
var inst_16333 = (state_16341[(2)]);
var state_16341__$1 = state_16341;
var statearr_16369_19512 = state_16341__$1;
(statearr_16369_19512[(2)] = inst_16333);

(statearr_16369_19512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19501,c__15888__auto___19505,G__16316_19502,G__16316_19503__$1,n__5636__auto___19500,jobs,results,process__$1,async))
;
return ((function (__19501,switch__15704__auto__,c__15888__auto___19505,G__16316_19502,G__16316_19503__$1,n__5636__auto___19500,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____0 = (function (){
var statearr_16372 = [null,null,null,null,null,null,null];
(statearr_16372[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__);

(statearr_16372[(1)] = (1));

return statearr_16372;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____1 = (function (state_16341){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__(state_16341);
if(cljs.core.keyword_identical_QMARK_(result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e16374){var ex__15708__auto__ = e16374;
var statearr_16375_19517 = state_16341;
(statearr_16375_19517[(2)] = ex__15708__auto__);


if(cljs.core.seq((state_16341[(4)]))){
var statearr_16376_19518 = state_16341;
(statearr_16376_19518[(1)] = cljs.core.first((state_16341[(4)])));

} else {
throw ex__15708__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19519 = state_16341;
state_16341 = G__19519;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__ = function(state_16341){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____1.call(this,state_16341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__;
})()
;})(__19501,switch__15704__auto__,c__15888__auto___19505,G__16316_19502,G__16316_19503__$1,n__5636__auto___19500,jobs,results,process__$1,async))
})();
var state__15890__auto__ = (function (){var statearr_16386 = f__15889__auto__();
(statearr_16386[(6)] = c__15888__auto___19505);

return statearr_16386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15890__auto__);
});})(__19501,c__15888__auto___19505,G__16316_19502,G__16316_19503__$1,n__5636__auto___19500,jobs,results,process__$1,async))
);


break;
case "async":
var c__15888__auto___19520 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19501,c__15888__auto___19520,G__16316_19502,G__16316_19503__$1,n__5636__auto___19500,jobs,results,process__$1,async){
return (function (){
var f__15889__auto__ = (function (){var switch__15704__auto__ = ((function (__19501,c__15888__auto___19520,G__16316_19502,G__16316_19503__$1,n__5636__auto___19500,jobs,results,process__$1,async){
return (function (state_16407){
var state_val_16408 = (state_16407[(1)]);
if((state_val_16408 === (1))){
var state_16407__$1 = state_16407;
var statearr_16413_19525 = state_16407__$1;
(statearr_16413_19525[(2)] = null);

(statearr_16413_19525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16408 === (2))){
var state_16407__$1 = state_16407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16407__$1,(4),jobs);
} else {
if((state_val_16408 === (3))){
var inst_16404 = (state_16407[(2)]);
var state_16407__$1 = state_16407;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16407__$1,inst_16404);
} else {
if((state_val_16408 === (4))){
var inst_16396 = (state_16407[(2)]);
var inst_16397 = async(inst_16396);
var state_16407__$1 = state_16407;
if(cljs.core.truth_(inst_16397)){
var statearr_16419_19526 = state_16407__$1;
(statearr_16419_19526[(1)] = (5));

} else {
var statearr_16422_19527 = state_16407__$1;
(statearr_16422_19527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16408 === (5))){
var state_16407__$1 = state_16407;
var statearr_16423_19528 = state_16407__$1;
(statearr_16423_19528[(2)] = null);

(statearr_16423_19528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16408 === (6))){
var state_16407__$1 = state_16407;
var statearr_16426_19529 = state_16407__$1;
(statearr_16426_19529[(2)] = null);

(statearr_16426_19529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16408 === (7))){
var inst_16402 = (state_16407[(2)]);
var state_16407__$1 = state_16407;
var statearr_16428_19531 = state_16407__$1;
(statearr_16428_19531[(2)] = inst_16402);

(statearr_16428_19531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19501,c__15888__auto___19520,G__16316_19502,G__16316_19503__$1,n__5636__auto___19500,jobs,results,process__$1,async))
;
return ((function (__19501,switch__15704__auto__,c__15888__auto___19520,G__16316_19502,G__16316_19503__$1,n__5636__auto___19500,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____0 = (function (){
var statearr_16430 = [null,null,null,null,null,null,null];
(statearr_16430[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__);

(statearr_16430[(1)] = (1));

return statearr_16430;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____1 = (function (state_16407){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__(state_16407);
if(cljs.core.keyword_identical_QMARK_(result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e16431){var ex__15708__auto__ = e16431;
var statearr_16432_19536 = state_16407;
(statearr_16432_19536[(2)] = ex__15708__auto__);


if(cljs.core.seq((state_16407[(4)]))){
var statearr_16433_19537 = state_16407;
(statearr_16433_19537[(1)] = cljs.core.first((state_16407[(4)])));

} else {
throw ex__15708__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19539 = state_16407;
state_16407 = G__19539;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__ = function(state_16407){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____1.call(this,state_16407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__;
})()
;})(__19501,switch__15704__auto__,c__15888__auto___19520,G__16316_19502,G__16316_19503__$1,n__5636__auto___19500,jobs,results,process__$1,async))
})();
var state__15890__auto__ = (function (){var statearr_16436 = f__15889__auto__();
(statearr_16436[(6)] = c__15888__auto___19520);

return statearr_16436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15890__auto__);
});})(__19501,c__15888__auto___19520,G__16316_19502,G__16316_19503__$1,n__5636__auto___19500,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16316_19503__$1)].join('')));

}

var G__19541 = (__19501 + (1));
__19501 = G__19541;
continue;
} else {
}
break;
}

var c__15888__auto___19542 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15889__auto__ = (function (){var switch__15704__auto__ = (function (state_16462){
var state_val_16463 = (state_16462[(1)]);
if((state_val_16463 === (7))){
var inst_16455 = (state_16462[(2)]);
var state_16462__$1 = state_16462;
var statearr_16465_19543 = state_16462__$1;
(statearr_16465_19543[(2)] = inst_16455);

(statearr_16465_19543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16463 === (1))){
var state_16462__$1 = state_16462;
var statearr_16470_19545 = state_16462__$1;
(statearr_16470_19545[(2)] = null);

(statearr_16470_19545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16463 === (4))){
var inst_16440 = (state_16462[(7)]);
var inst_16440__$1 = (state_16462[(2)]);
var inst_16441 = (inst_16440__$1 == null);
var state_16462__$1 = (function (){var statearr_16472 = state_16462;
(statearr_16472[(7)] = inst_16440__$1);

return statearr_16472;
})();
if(cljs.core.truth_(inst_16441)){
var statearr_16473_19546 = state_16462__$1;
(statearr_16473_19546[(1)] = (5));

} else {
var statearr_16474_19547 = state_16462__$1;
(statearr_16474_19547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16463 === (6))){
var inst_16445 = (state_16462[(8)]);
var inst_16440 = (state_16462[(7)]);
var inst_16445__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16446 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16447 = [inst_16440,inst_16445__$1];
var inst_16448 = (new cljs.core.PersistentVector(null,2,(5),inst_16446,inst_16447,null));
var state_16462__$1 = (function (){var statearr_16477 = state_16462;
(statearr_16477[(8)] = inst_16445__$1);

return statearr_16477;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16462__$1,(8),jobs,inst_16448);
} else {
if((state_val_16463 === (3))){
var inst_16457 = (state_16462[(2)]);
var state_16462__$1 = state_16462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16462__$1,inst_16457);
} else {
if((state_val_16463 === (2))){
var state_16462__$1 = state_16462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16462__$1,(4),from);
} else {
if((state_val_16463 === (9))){
var inst_16452 = (state_16462[(2)]);
var state_16462__$1 = (function (){var statearr_16480 = state_16462;
(statearr_16480[(9)] = inst_16452);

return statearr_16480;
})();
var statearr_16481_19549 = state_16462__$1;
(statearr_16481_19549[(2)] = null);

(statearr_16481_19549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16463 === (5))){
var inst_16443 = cljs.core.async.close_BANG_(jobs);
var state_16462__$1 = state_16462;
var statearr_16482_19551 = state_16462__$1;
(statearr_16482_19551[(2)] = inst_16443);

(statearr_16482_19551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16463 === (8))){
var inst_16445 = (state_16462[(8)]);
var inst_16450 = (state_16462[(2)]);
var state_16462__$1 = (function (){var statearr_16483 = state_16462;
(statearr_16483[(10)] = inst_16450);

return statearr_16483;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16462__$1,(9),results,inst_16445);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____0 = (function (){
var statearr_16484 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16484[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__);

(statearr_16484[(1)] = (1));

return statearr_16484;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____1 = (function (state_16462){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__(state_16462);
if(cljs.core.keyword_identical_QMARK_(result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e16486){var ex__15708__auto__ = e16486;
var statearr_16487_19552 = state_16462;
(statearr_16487_19552[(2)] = ex__15708__auto__);


if(cljs.core.seq((state_16462[(4)]))){
var statearr_16488_19557 = state_16462;
(statearr_16488_19557[(1)] = cljs.core.first((state_16462[(4)])));

} else {
throw ex__15708__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19558 = state_16462;
state_16462 = G__19558;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__ = function(state_16462){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____1.call(this,state_16462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__;
})()
})();
var state__15890__auto__ = (function (){var statearr_16489 = f__15889__auto__();
(statearr_16489[(6)] = c__15888__auto___19542);

return statearr_16489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15890__auto__);
}));


var c__15888__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15889__auto__ = (function (){var switch__15704__auto__ = (function (state_16529){
var state_val_16530 = (state_16529[(1)]);
if((state_val_16530 === (7))){
var inst_16525 = (state_16529[(2)]);
var state_16529__$1 = state_16529;
var statearr_16532_19562 = state_16529__$1;
(statearr_16532_19562[(2)] = inst_16525);

(statearr_16532_19562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (20))){
var state_16529__$1 = state_16529;
var statearr_16533_19563 = state_16529__$1;
(statearr_16533_19563[(2)] = null);

(statearr_16533_19563[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (1))){
var state_16529__$1 = state_16529;
var statearr_16534_19565 = state_16529__$1;
(statearr_16534_19565[(2)] = null);

(statearr_16534_19565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (4))){
var inst_16492 = (state_16529[(7)]);
var inst_16492__$1 = (state_16529[(2)]);
var inst_16493 = (inst_16492__$1 == null);
var state_16529__$1 = (function (){var statearr_16537 = state_16529;
(statearr_16537[(7)] = inst_16492__$1);

return statearr_16537;
})();
if(cljs.core.truth_(inst_16493)){
var statearr_16538_19567 = state_16529__$1;
(statearr_16538_19567[(1)] = (5));

} else {
var statearr_16539_19569 = state_16529__$1;
(statearr_16539_19569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (15))){
var inst_16507 = (state_16529[(8)]);
var state_16529__$1 = state_16529;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16529__$1,(18),to,inst_16507);
} else {
if((state_val_16530 === (21))){
var inst_16520 = (state_16529[(2)]);
var state_16529__$1 = state_16529;
var statearr_16540_19570 = state_16529__$1;
(statearr_16540_19570[(2)] = inst_16520);

(statearr_16540_19570[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (13))){
var inst_16522 = (state_16529[(2)]);
var state_16529__$1 = (function (){var statearr_16541 = state_16529;
(statearr_16541[(9)] = inst_16522);

return statearr_16541;
})();
var statearr_16543_19571 = state_16529__$1;
(statearr_16543_19571[(2)] = null);

(statearr_16543_19571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (6))){
var inst_16492 = (state_16529[(7)]);
var state_16529__$1 = state_16529;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16529__$1,(11),inst_16492);
} else {
if((state_val_16530 === (17))){
var inst_16515 = (state_16529[(2)]);
var state_16529__$1 = state_16529;
if(cljs.core.truth_(inst_16515)){
var statearr_16546_19572 = state_16529__$1;
(statearr_16546_19572[(1)] = (19));

} else {
var statearr_16547_19573 = state_16529__$1;
(statearr_16547_19573[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (3))){
var inst_16527 = (state_16529[(2)]);
var state_16529__$1 = state_16529;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16529__$1,inst_16527);
} else {
if((state_val_16530 === (12))){
var inst_16503 = (state_16529[(10)]);
var state_16529__$1 = state_16529;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16529__$1,(14),inst_16503);
} else {
if((state_val_16530 === (2))){
var state_16529__$1 = state_16529;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16529__$1,(4),results);
} else {
if((state_val_16530 === (19))){
var state_16529__$1 = state_16529;
var statearr_16551_19578 = state_16529__$1;
(statearr_16551_19578[(2)] = null);

(statearr_16551_19578[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (11))){
var inst_16503 = (state_16529[(2)]);
var state_16529__$1 = (function (){var statearr_16552 = state_16529;
(statearr_16552[(10)] = inst_16503);

return statearr_16552;
})();
var statearr_16553_19579 = state_16529__$1;
(statearr_16553_19579[(2)] = null);

(statearr_16553_19579[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (9))){
var state_16529__$1 = state_16529;
var statearr_16554_19580 = state_16529__$1;
(statearr_16554_19580[(2)] = null);

(statearr_16554_19580[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (5))){
var state_16529__$1 = state_16529;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16555_19582 = state_16529__$1;
(statearr_16555_19582[(1)] = (8));

} else {
var statearr_16556_19583 = state_16529__$1;
(statearr_16556_19583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (14))){
var inst_16509 = (state_16529[(11)]);
var inst_16507 = (state_16529[(8)]);
var inst_16507__$1 = (state_16529[(2)]);
var inst_16508 = (inst_16507__$1 == null);
var inst_16509__$1 = cljs.core.not(inst_16508);
var state_16529__$1 = (function (){var statearr_16559 = state_16529;
(statearr_16559[(11)] = inst_16509__$1);

(statearr_16559[(8)] = inst_16507__$1);

return statearr_16559;
})();
if(inst_16509__$1){
var statearr_16560_19588 = state_16529__$1;
(statearr_16560_19588[(1)] = (15));

} else {
var statearr_16561_19589 = state_16529__$1;
(statearr_16561_19589[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (16))){
var inst_16509 = (state_16529[(11)]);
var state_16529__$1 = state_16529;
var statearr_16562_19591 = state_16529__$1;
(statearr_16562_19591[(2)] = inst_16509);

(statearr_16562_19591[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (10))){
var inst_16499 = (state_16529[(2)]);
var state_16529__$1 = state_16529;
var statearr_16563_19595 = state_16529__$1;
(statearr_16563_19595[(2)] = inst_16499);

(statearr_16563_19595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (18))){
var inst_16512 = (state_16529[(2)]);
var state_16529__$1 = state_16529;
var statearr_16564_19597 = state_16529__$1;
(statearr_16564_19597[(2)] = inst_16512);

(statearr_16564_19597[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16530 === (8))){
var inst_16496 = cljs.core.async.close_BANG_(to);
var state_16529__$1 = state_16529;
var statearr_16565_19598 = state_16529__$1;
(statearr_16565_19598[(2)] = inst_16496);

(statearr_16565_19598[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____0 = (function (){
var statearr_16567 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16567[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__);

(statearr_16567[(1)] = (1));

return statearr_16567;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____1 = (function (state_16529){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__(state_16529);
if(cljs.core.keyword_identical_QMARK_(result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e16569){var ex__15708__auto__ = e16569;
var statearr_16570_19599 = state_16529;
(statearr_16570_19599[(2)] = ex__15708__auto__);


if(cljs.core.seq((state_16529[(4)]))){
var statearr_16571_19600 = state_16529;
(statearr_16571_19600[(1)] = cljs.core.first((state_16529[(4)])));

} else {
throw ex__15708__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19603 = state_16529;
state_16529 = G__19603;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__ = function(state_16529){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____1.call(this,state_16529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15705__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15705__auto__;
})()
})();
var state__15890__auto__ = (function (){var statearr_16572 = f__15889__auto__();
(statearr_16572[(6)] = c__15888__auto__);

return statearr_16572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15890__auto__);
}));

return c__15888__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__16578 = arguments.length;
switch (G__16578) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__16587 = arguments.length;
switch (G__16587) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__16591 = arguments.length;
switch (G__16591) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15888__auto___19616 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15889__auto__ = (function (){var switch__15704__auto__ = (function (state_16624){
var state_val_16625 = (state_16624[(1)]);
if((state_val_16625 === (7))){
var inst_16619 = (state_16624[(2)]);
var state_16624__$1 = state_16624;
var statearr_16626_19617 = state_16624__$1;
(statearr_16626_19617[(2)] = inst_16619);

(statearr_16626_19617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16625 === (1))){
var state_16624__$1 = state_16624;
var statearr_16628_19618 = state_16624__$1;
(statearr_16628_19618[(2)] = null);

(statearr_16628_19618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16625 === (4))){
var inst_16599 = (state_16624[(7)]);
var inst_16599__$1 = (state_16624[(2)]);
var inst_16600 = (inst_16599__$1 == null);
var state_16624__$1 = (function (){var statearr_16630 = state_16624;
(statearr_16630[(7)] = inst_16599__$1);

return statearr_16630;
})();
if(cljs.core.truth_(inst_16600)){
var statearr_16632_19620 = state_16624__$1;
(statearr_16632_19620[(1)] = (5));

} else {
var statearr_16633_19621 = state_16624__$1;
(statearr_16633_19621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16625 === (13))){
var state_16624__$1 = state_16624;
var statearr_16634_19622 = state_16624__$1;
(statearr_16634_19622[(2)] = null);

(statearr_16634_19622[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16625 === (6))){
var inst_16599 = (state_16624[(7)]);
var inst_16605 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16599) : p.call(null,inst_16599));
var state_16624__$1 = state_16624;
if(cljs.core.truth_(inst_16605)){
var statearr_16637_19624 = state_16624__$1;
(statearr_16637_19624[(1)] = (9));

} else {
var statearr_16638_19625 = state_16624__$1;
(statearr_16638_19625[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16625 === (3))){
var inst_16622 = (state_16624[(2)]);
var state_16624__$1 = state_16624;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16624__$1,inst_16622);
} else {
if((state_val_16625 === (12))){
var state_16624__$1 = state_16624;
var statearr_16644_19626 = state_16624__$1;
(statearr_16644_19626[(2)] = null);

(statearr_16644_19626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16625 === (2))){
var state_16624__$1 = state_16624;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16624__$1,(4),ch);
} else {
if((state_val_16625 === (11))){
var inst_16599 = (state_16624[(7)]);
var inst_16610 = (state_16624[(2)]);
var state_16624__$1 = state_16624;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16624__$1,(8),inst_16610,inst_16599);
} else {
if((state_val_16625 === (9))){
var state_16624__$1 = state_16624;
var statearr_16655_19630 = state_16624__$1;
(statearr_16655_19630[(2)] = tc);

(statearr_16655_19630[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16625 === (5))){
var inst_16602 = cljs.core.async.close_BANG_(tc);
var inst_16603 = cljs.core.async.close_BANG_(fc);
var state_16624__$1 = (function (){var statearr_16664 = state_16624;
(statearr_16664[(8)] = inst_16602);

return statearr_16664;
})();
var statearr_16665_19632 = state_16624__$1;
(statearr_16665_19632[(2)] = inst_16603);

(statearr_16665_19632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16625 === (14))){
var inst_16617 = (state_16624[(2)]);
var state_16624__$1 = state_16624;
var statearr_16668_19633 = state_16624__$1;
(statearr_16668_19633[(2)] = inst_16617);

(statearr_16668_19633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16625 === (10))){
var state_16624__$1 = state_16624;
var statearr_16669_19634 = state_16624__$1;
(statearr_16669_19634[(2)] = fc);

(statearr_16669_19634[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16625 === (8))){
var inst_16612 = (state_16624[(2)]);
var state_16624__$1 = state_16624;
if(cljs.core.truth_(inst_16612)){
var statearr_16670_19635 = state_16624__$1;
(statearr_16670_19635[(1)] = (12));

} else {
var statearr_16671_19636 = state_16624__$1;
(statearr_16671_19636[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15705__auto__ = null;
var cljs$core$async$state_machine__15705__auto____0 = (function (){
var statearr_16675 = [null,null,null,null,null,null,null,null,null];
(statearr_16675[(0)] = cljs$core$async$state_machine__15705__auto__);

(statearr_16675[(1)] = (1));

return statearr_16675;
});
var cljs$core$async$state_machine__15705__auto____1 = (function (state_16624){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__(state_16624);
if(cljs.core.keyword_identical_QMARK_(result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e16677){var ex__15708__auto__ = e16677;
var statearr_16678_19641 = state_16624;
(statearr_16678_19641[(2)] = ex__15708__auto__);


if(cljs.core.seq((state_16624[(4)]))){
var statearr_16679_19642 = state_16624;
(statearr_16679_19642[(1)] = cljs.core.first((state_16624[(4)])));

} else {
throw ex__15708__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19643 = state_16624;
state_16624 = G__19643;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$state_machine__15705__auto__ = function(state_16624){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15705__auto____1.call(this,state_16624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15705__auto____0;
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15705__auto____1;
return cljs$core$async$state_machine__15705__auto__;
})()
})();
var state__15890__auto__ = (function (){var statearr_16688 = f__15889__auto__();
(statearr_16688[(6)] = c__15888__auto___19616);

return statearr_16688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15890__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15888__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15889__auto__ = (function (){var switch__15704__auto__ = (function (state_16718){
var state_val_16719 = (state_16718[(1)]);
if((state_val_16719 === (7))){
var inst_16714 = (state_16718[(2)]);
var state_16718__$1 = state_16718;
var statearr_16720_19645 = state_16718__$1;
(statearr_16720_19645[(2)] = inst_16714);

(statearr_16720_19645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16719 === (1))){
var inst_16694 = init;
var inst_16695 = inst_16694;
var state_16718__$1 = (function (){var statearr_16721 = state_16718;
(statearr_16721[(7)] = inst_16695);

return statearr_16721;
})();
var statearr_16722_19649 = state_16718__$1;
(statearr_16722_19649[(2)] = null);

(statearr_16722_19649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16719 === (4))){
var inst_16698 = (state_16718[(8)]);
var inst_16698__$1 = (state_16718[(2)]);
var inst_16699 = (inst_16698__$1 == null);
var state_16718__$1 = (function (){var statearr_16724 = state_16718;
(statearr_16724[(8)] = inst_16698__$1);

return statearr_16724;
})();
if(cljs.core.truth_(inst_16699)){
var statearr_16726_19651 = state_16718__$1;
(statearr_16726_19651[(1)] = (5));

} else {
var statearr_16727_19652 = state_16718__$1;
(statearr_16727_19652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16719 === (6))){
var inst_16705 = (state_16718[(9)]);
var inst_16698 = (state_16718[(8)]);
var inst_16695 = (state_16718[(7)]);
var inst_16705__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16695,inst_16698) : f.call(null,inst_16695,inst_16698));
var inst_16706 = cljs.core.reduced_QMARK_(inst_16705__$1);
var state_16718__$1 = (function (){var statearr_16729 = state_16718;
(statearr_16729[(9)] = inst_16705__$1);

return statearr_16729;
})();
if(inst_16706){
var statearr_16730_19653 = state_16718__$1;
(statearr_16730_19653[(1)] = (8));

} else {
var statearr_16732_19654 = state_16718__$1;
(statearr_16732_19654[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16719 === (3))){
var inst_16716 = (state_16718[(2)]);
var state_16718__$1 = state_16718;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16718__$1,inst_16716);
} else {
if((state_val_16719 === (2))){
var state_16718__$1 = state_16718;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16718__$1,(4),ch);
} else {
if((state_val_16719 === (9))){
var inst_16705 = (state_16718[(9)]);
var inst_16695 = inst_16705;
var state_16718__$1 = (function (){var statearr_16744 = state_16718;
(statearr_16744[(7)] = inst_16695);

return statearr_16744;
})();
var statearr_16746_19655 = state_16718__$1;
(statearr_16746_19655[(2)] = null);

(statearr_16746_19655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16719 === (5))){
var inst_16695 = (state_16718[(7)]);
var state_16718__$1 = state_16718;
var statearr_16757_19660 = state_16718__$1;
(statearr_16757_19660[(2)] = inst_16695);

(statearr_16757_19660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16719 === (10))){
var inst_16712 = (state_16718[(2)]);
var state_16718__$1 = state_16718;
var statearr_16771_19661 = state_16718__$1;
(statearr_16771_19661[(2)] = inst_16712);

(statearr_16771_19661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16719 === (8))){
var inst_16705 = (state_16718[(9)]);
var inst_16708 = cljs.core.deref(inst_16705);
var state_16718__$1 = state_16718;
var statearr_16783_19663 = state_16718__$1;
(statearr_16783_19663[(2)] = inst_16708);

(statearr_16783_19663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__15705__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15705__auto____0 = (function (){
var statearr_16790 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16790[(0)] = cljs$core$async$reduce_$_state_machine__15705__auto__);

(statearr_16790[(1)] = (1));

return statearr_16790;
});
var cljs$core$async$reduce_$_state_machine__15705__auto____1 = (function (state_16718){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__(state_16718);
if(cljs.core.keyword_identical_QMARK_(result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e16800){var ex__15708__auto__ = e16800;
var statearr_16801_19664 = state_16718;
(statearr_16801_19664[(2)] = ex__15708__auto__);


if(cljs.core.seq((state_16718[(4)]))){
var statearr_16802_19665 = state_16718;
(statearr_16802_19665[(1)] = cljs.core.first((state_16718[(4)])));

} else {
throw ex__15708__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19666 = state_16718;
state_16718 = G__19666;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15705__auto__ = function(state_16718){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15705__auto____1.call(this,state_16718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15705__auto____0;
cljs$core$async$reduce_$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15705__auto____1;
return cljs$core$async$reduce_$_state_machine__15705__auto__;
})()
})();
var state__15890__auto__ = (function (){var statearr_16816 = f__15889__auto__();
(statearr_16816[(6)] = c__15888__auto__);

return statearr_16816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15890__auto__);
}));

return c__15888__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15888__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15889__auto__ = (function (){var switch__15704__auto__ = (function (state_16844){
var state_val_16845 = (state_16844[(1)]);
if((state_val_16845 === (1))){
var inst_16837 = cljs.core.async.reduce(f__$1,init,ch);
var state_16844__$1 = state_16844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16844__$1,(2),inst_16837);
} else {
if((state_val_16845 === (2))){
var inst_16839 = (state_16844[(2)]);
var inst_16841 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16839) : f__$1.call(null,inst_16839));
var state_16844__$1 = state_16844;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16844__$1,inst_16841);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__15705__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15705__auto____0 = (function (){
var statearr_16857 = [null,null,null,null,null,null,null];
(statearr_16857[(0)] = cljs$core$async$transduce_$_state_machine__15705__auto__);

(statearr_16857[(1)] = (1));

return statearr_16857;
});
var cljs$core$async$transduce_$_state_machine__15705__auto____1 = (function (state_16844){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__(state_16844);
if(cljs.core.keyword_identical_QMARK_(result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e16862){var ex__15708__auto__ = e16862;
var statearr_16863_19671 = state_16844;
(statearr_16863_19671[(2)] = ex__15708__auto__);


if(cljs.core.seq((state_16844[(4)]))){
var statearr_16865_19672 = state_16844;
(statearr_16865_19672[(1)] = cljs.core.first((state_16844[(4)])));

} else {
throw ex__15708__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19673 = state_16844;
state_16844 = G__19673;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15705__auto__ = function(state_16844){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15705__auto____1.call(this,state_16844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15705__auto____0;
cljs$core$async$transduce_$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15705__auto____1;
return cljs$core$async$transduce_$_state_machine__15705__auto__;
})()
})();
var state__15890__auto__ = (function (){var statearr_16876 = f__15889__auto__();
(statearr_16876[(6)] = c__15888__auto__);

return statearr_16876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15890__auto__);
}));

return c__15888__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__16891 = arguments.length;
switch (G__16891) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15888__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15889__auto__ = (function (){var switch__15704__auto__ = (function (state_16926){
var state_val_16927 = (state_16926[(1)]);
if((state_val_16927 === (7))){
var inst_16906 = (state_16926[(2)]);
var state_16926__$1 = state_16926;
var statearr_16938_19679 = state_16926__$1;
(statearr_16938_19679[(2)] = inst_16906);

(statearr_16938_19679[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16927 === (1))){
var inst_16897 = cljs.core.seq(coll);
var inst_16899 = inst_16897;
var state_16926__$1 = (function (){var statearr_16942 = state_16926;
(statearr_16942[(7)] = inst_16899);

return statearr_16942;
})();
var statearr_16943_19680 = state_16926__$1;
(statearr_16943_19680[(2)] = null);

(statearr_16943_19680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16927 === (4))){
var inst_16899 = (state_16926[(7)]);
var inst_16904 = cljs.core.first(inst_16899);
var state_16926__$1 = state_16926;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16926__$1,(7),ch,inst_16904);
} else {
if((state_val_16927 === (13))){
var inst_16919 = (state_16926[(2)]);
var state_16926__$1 = state_16926;
var statearr_16948_19684 = state_16926__$1;
(statearr_16948_19684[(2)] = inst_16919);

(statearr_16948_19684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16927 === (6))){
var inst_16909 = (state_16926[(2)]);
var state_16926__$1 = state_16926;
if(cljs.core.truth_(inst_16909)){
var statearr_16950_19686 = state_16926__$1;
(statearr_16950_19686[(1)] = (8));

} else {
var statearr_16953_19688 = state_16926__$1;
(statearr_16953_19688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16927 === (3))){
var inst_16923 = (state_16926[(2)]);
var state_16926__$1 = state_16926;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16926__$1,inst_16923);
} else {
if((state_val_16927 === (12))){
var state_16926__$1 = state_16926;
var statearr_16963_19689 = state_16926__$1;
(statearr_16963_19689[(2)] = null);

(statearr_16963_19689[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16927 === (2))){
var inst_16899 = (state_16926[(7)]);
var state_16926__$1 = state_16926;
if(cljs.core.truth_(inst_16899)){
var statearr_16971_19691 = state_16926__$1;
(statearr_16971_19691[(1)] = (4));

} else {
var statearr_16973_19692 = state_16926__$1;
(statearr_16973_19692[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16927 === (11))){
var inst_16916 = cljs.core.async.close_BANG_(ch);
var state_16926__$1 = state_16926;
var statearr_16978_19693 = state_16926__$1;
(statearr_16978_19693[(2)] = inst_16916);

(statearr_16978_19693[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16927 === (9))){
var state_16926__$1 = state_16926;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16980_19697 = state_16926__$1;
(statearr_16980_19697[(1)] = (11));

} else {
var statearr_16984_19698 = state_16926__$1;
(statearr_16984_19698[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16927 === (5))){
var inst_16899 = (state_16926[(7)]);
var state_16926__$1 = state_16926;
var statearr_16989_19699 = state_16926__$1;
(statearr_16989_19699[(2)] = inst_16899);

(statearr_16989_19699[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16927 === (10))){
var inst_16921 = (state_16926[(2)]);
var state_16926__$1 = state_16926;
var statearr_16992_19701 = state_16926__$1;
(statearr_16992_19701[(2)] = inst_16921);

(statearr_16992_19701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16927 === (8))){
var inst_16899 = (state_16926[(7)]);
var inst_16912 = cljs.core.next(inst_16899);
var inst_16899__$1 = inst_16912;
var state_16926__$1 = (function (){var statearr_16995 = state_16926;
(statearr_16995[(7)] = inst_16899__$1);

return statearr_16995;
})();
var statearr_16996_19702 = state_16926__$1;
(statearr_16996_19702[(2)] = null);

(statearr_16996_19702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15705__auto__ = null;
var cljs$core$async$state_machine__15705__auto____0 = (function (){
var statearr_17000 = [null,null,null,null,null,null,null,null];
(statearr_17000[(0)] = cljs$core$async$state_machine__15705__auto__);

(statearr_17000[(1)] = (1));

return statearr_17000;
});
var cljs$core$async$state_machine__15705__auto____1 = (function (state_16926){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__(state_16926);
if(cljs.core.keyword_identical_QMARK_(result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e17001){var ex__15708__auto__ = e17001;
var statearr_17002_19703 = state_16926;
(statearr_17002_19703[(2)] = ex__15708__auto__);


if(cljs.core.seq((state_16926[(4)]))){
var statearr_17003_19704 = state_16926;
(statearr_17003_19704[(1)] = cljs.core.first((state_16926[(4)])));

} else {
throw ex__15708__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19705 = state_16926;
state_16926 = G__19705;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$state_machine__15705__auto__ = function(state_16926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15705__auto____1.call(this,state_16926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15705__auto____0;
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15705__auto____1;
return cljs$core$async$state_machine__15705__auto__;
})()
})();
var state__15890__auto__ = (function (){var statearr_17009 = f__15889__auto__();
(statearr_17009[(6)] = c__15888__auto__);

return statearr_17009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15890__auto__);
}));

return c__15888__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__17023 = arguments.length;
switch (G__17023) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_19711 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_19711(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19719 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_19719(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19720 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_19720(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19724 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_19724(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17069 = (function (ch,cs,meta17070){
this.ch = ch;
this.cs = cs;
this.meta17070 = meta17070;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17071,meta17070__$1){
var self__ = this;
var _17071__$1 = this;
return (new cljs.core.async.t_cljs$core$async17069(self__.ch,self__.cs,meta17070__$1));
}));

(cljs.core.async.t_cljs$core$async17069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17071){
var self__ = this;
var _17071__$1 = this;
return self__.meta17070;
}));

(cljs.core.async.t_cljs$core$async17069.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17069.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17069.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17069.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async17069.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async17069.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async17069.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17070","meta17070",-1341342983,null)], null);
}));

(cljs.core.async.t_cljs$core$async17069.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17069.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17069");

(cljs.core.async.t_cljs$core$async17069.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17069");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17069.
 */
cljs.core.async.__GT_t_cljs$core$async17069 = (function cljs$core$async$__GT_t_cljs$core$async17069(ch,cs,meta17070){
return (new cljs.core.async.t_cljs$core$async17069(ch,cs,meta17070));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async17069(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__15888__auto___19739 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15889__auto__ = (function (){var switch__15704__auto__ = (function (state_17243){
var state_val_17244 = (state_17243[(1)]);
if((state_val_17244 === (7))){
var inst_17231 = (state_17243[(2)]);
var state_17243__$1 = state_17243;
var statearr_17255_19743 = state_17243__$1;
(statearr_17255_19743[(2)] = inst_17231);

(statearr_17255_19743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (20))){
var inst_17125 = (state_17243[(7)]);
var inst_17137 = cljs.core.first(inst_17125);
var inst_17138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17137,(0),null);
var inst_17139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17137,(1),null);
var state_17243__$1 = (function (){var statearr_17261 = state_17243;
(statearr_17261[(8)] = inst_17138);

return statearr_17261;
})();
if(cljs.core.truth_(inst_17139)){
var statearr_17263_19745 = state_17243__$1;
(statearr_17263_19745[(1)] = (22));

} else {
var statearr_17264_19746 = state_17243__$1;
(statearr_17264_19746[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (27))){
var inst_17175 = (state_17243[(9)]);
var inst_17170 = (state_17243[(10)]);
var inst_17168 = (state_17243[(11)]);
var inst_17090 = (state_17243[(12)]);
var inst_17175__$1 = cljs.core._nth(inst_17168,inst_17170);
var inst_17176 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17175__$1,inst_17090,done);
var state_17243__$1 = (function (){var statearr_17276 = state_17243;
(statearr_17276[(9)] = inst_17175__$1);

return statearr_17276;
})();
if(cljs.core.truth_(inst_17176)){
var statearr_17280_19747 = state_17243__$1;
(statearr_17280_19747[(1)] = (30));

} else {
var statearr_17281_19748 = state_17243__$1;
(statearr_17281_19748[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (1))){
var state_17243__$1 = state_17243;
var statearr_17284_19749 = state_17243__$1;
(statearr_17284_19749[(2)] = null);

(statearr_17284_19749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (24))){
var inst_17125 = (state_17243[(7)]);
var inst_17144 = (state_17243[(2)]);
var inst_17145 = cljs.core.next(inst_17125);
var inst_17103 = inst_17145;
var inst_17104 = null;
var inst_17105 = (0);
var inst_17106 = (0);
var state_17243__$1 = (function (){var statearr_17290 = state_17243;
(statearr_17290[(13)] = inst_17104);

(statearr_17290[(14)] = inst_17105);

(statearr_17290[(15)] = inst_17144);

(statearr_17290[(16)] = inst_17103);

(statearr_17290[(17)] = inst_17106);

return statearr_17290;
})();
var statearr_17297_19753 = state_17243__$1;
(statearr_17297_19753[(2)] = null);

(statearr_17297_19753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (39))){
var state_17243__$1 = state_17243;
var statearr_17312_19754 = state_17243__$1;
(statearr_17312_19754[(2)] = null);

(statearr_17312_19754[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (4))){
var inst_17090 = (state_17243[(12)]);
var inst_17090__$1 = (state_17243[(2)]);
var inst_17093 = (inst_17090__$1 == null);
var state_17243__$1 = (function (){var statearr_17316 = state_17243;
(statearr_17316[(12)] = inst_17090__$1);

return statearr_17316;
})();
if(cljs.core.truth_(inst_17093)){
var statearr_17321_19758 = state_17243__$1;
(statearr_17321_19758[(1)] = (5));

} else {
var statearr_17323_19759 = state_17243__$1;
(statearr_17323_19759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (15))){
var inst_17104 = (state_17243[(13)]);
var inst_17105 = (state_17243[(14)]);
var inst_17103 = (state_17243[(16)]);
var inst_17106 = (state_17243[(17)]);
var inst_17121 = (state_17243[(2)]);
var inst_17122 = (inst_17106 + (1));
var tmp17309 = inst_17104;
var tmp17310 = inst_17105;
var tmp17311 = inst_17103;
var inst_17103__$1 = tmp17311;
var inst_17104__$1 = tmp17309;
var inst_17105__$1 = tmp17310;
var inst_17106__$1 = inst_17122;
var state_17243__$1 = (function (){var statearr_17330 = state_17243;
(statearr_17330[(13)] = inst_17104__$1);

(statearr_17330[(14)] = inst_17105__$1);

(statearr_17330[(18)] = inst_17121);

(statearr_17330[(16)] = inst_17103__$1);

(statearr_17330[(17)] = inst_17106__$1);

return statearr_17330;
})();
var statearr_17335_19760 = state_17243__$1;
(statearr_17335_19760[(2)] = null);

(statearr_17335_19760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (21))){
var inst_17148 = (state_17243[(2)]);
var state_17243__$1 = state_17243;
var statearr_17341_19761 = state_17243__$1;
(statearr_17341_19761[(2)] = inst_17148);

(statearr_17341_19761[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (31))){
var inst_17175 = (state_17243[(9)]);
var inst_17179 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17175);
var state_17243__$1 = state_17243;
var statearr_17342_19765 = state_17243__$1;
(statearr_17342_19765[(2)] = inst_17179);

(statearr_17342_19765[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (32))){
var inst_17169 = (state_17243[(19)]);
var inst_17170 = (state_17243[(10)]);
var inst_17167 = (state_17243[(20)]);
var inst_17168 = (state_17243[(11)]);
var inst_17181 = (state_17243[(2)]);
var inst_17182 = (inst_17170 + (1));
var tmp17338 = inst_17169;
var tmp17339 = inst_17167;
var tmp17340 = inst_17168;
var inst_17167__$1 = tmp17339;
var inst_17168__$1 = tmp17340;
var inst_17169__$1 = tmp17338;
var inst_17170__$1 = inst_17182;
var state_17243__$1 = (function (){var statearr_17350 = state_17243;
(statearr_17350[(19)] = inst_17169__$1);

(statearr_17350[(10)] = inst_17170__$1);

(statearr_17350[(21)] = inst_17181);

(statearr_17350[(20)] = inst_17167__$1);

(statearr_17350[(11)] = inst_17168__$1);

return statearr_17350;
})();
var statearr_17353_19766 = state_17243__$1;
(statearr_17353_19766[(2)] = null);

(statearr_17353_19766[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (40))){
var inst_17201 = (state_17243[(22)]);
var inst_17206 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17201);
var state_17243__$1 = state_17243;
var statearr_17354_19767 = state_17243__$1;
(statearr_17354_19767[(2)] = inst_17206);

(statearr_17354_19767[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (33))){
var inst_17191 = (state_17243[(23)]);
var inst_17193 = cljs.core.chunked_seq_QMARK_(inst_17191);
var state_17243__$1 = state_17243;
if(inst_17193){
var statearr_17360_19768 = state_17243__$1;
(statearr_17360_19768[(1)] = (36));

} else {
var statearr_17362_19769 = state_17243__$1;
(statearr_17362_19769[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (13))){
var inst_17115 = (state_17243[(24)]);
var inst_17118 = cljs.core.async.close_BANG_(inst_17115);
var state_17243__$1 = state_17243;
var statearr_17364_19770 = state_17243__$1;
(statearr_17364_19770[(2)] = inst_17118);

(statearr_17364_19770[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (22))){
var inst_17138 = (state_17243[(8)]);
var inst_17141 = cljs.core.async.close_BANG_(inst_17138);
var state_17243__$1 = state_17243;
var statearr_17371_19772 = state_17243__$1;
(statearr_17371_19772[(2)] = inst_17141);

(statearr_17371_19772[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (36))){
var inst_17191 = (state_17243[(23)]);
var inst_17195 = cljs.core.chunk_first(inst_17191);
var inst_17197 = cljs.core.chunk_rest(inst_17191);
var inst_17198 = cljs.core.count(inst_17195);
var inst_17167 = inst_17197;
var inst_17168 = inst_17195;
var inst_17169 = inst_17198;
var inst_17170 = (0);
var state_17243__$1 = (function (){var statearr_17376 = state_17243;
(statearr_17376[(19)] = inst_17169);

(statearr_17376[(10)] = inst_17170);

(statearr_17376[(20)] = inst_17167);

(statearr_17376[(11)] = inst_17168);

return statearr_17376;
})();
var statearr_17378_19775 = state_17243__$1;
(statearr_17378_19775[(2)] = null);

(statearr_17378_19775[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (41))){
var inst_17191 = (state_17243[(23)]);
var inst_17208 = (state_17243[(2)]);
var inst_17209 = cljs.core.next(inst_17191);
var inst_17167 = inst_17209;
var inst_17168 = null;
var inst_17169 = (0);
var inst_17170 = (0);
var state_17243__$1 = (function (){var statearr_17379 = state_17243;
(statearr_17379[(19)] = inst_17169);

(statearr_17379[(25)] = inst_17208);

(statearr_17379[(10)] = inst_17170);

(statearr_17379[(20)] = inst_17167);

(statearr_17379[(11)] = inst_17168);

return statearr_17379;
})();
var statearr_17380_19776 = state_17243__$1;
(statearr_17380_19776[(2)] = null);

(statearr_17380_19776[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (43))){
var state_17243__$1 = state_17243;
var statearr_17384_19777 = state_17243__$1;
(statearr_17384_19777[(2)] = null);

(statearr_17384_19777[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (29))){
var inst_17217 = (state_17243[(2)]);
var state_17243__$1 = state_17243;
var statearr_17386_19778 = state_17243__$1;
(statearr_17386_19778[(2)] = inst_17217);

(statearr_17386_19778[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (44))){
var inst_17228 = (state_17243[(2)]);
var state_17243__$1 = (function (){var statearr_17387 = state_17243;
(statearr_17387[(26)] = inst_17228);

return statearr_17387;
})();
var statearr_17388_19779 = state_17243__$1;
(statearr_17388_19779[(2)] = null);

(statearr_17388_19779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (6))){
var inst_17159 = (state_17243[(27)]);
var inst_17158 = cljs.core.deref(cs);
var inst_17159__$1 = cljs.core.keys(inst_17158);
var inst_17160 = cljs.core.count(inst_17159__$1);
var inst_17161 = cljs.core.reset_BANG_(dctr,inst_17160);
var inst_17166 = cljs.core.seq(inst_17159__$1);
var inst_17167 = inst_17166;
var inst_17168 = null;
var inst_17169 = (0);
var inst_17170 = (0);
var state_17243__$1 = (function (){var statearr_17399 = state_17243;
(statearr_17399[(19)] = inst_17169);

(statearr_17399[(27)] = inst_17159__$1);

(statearr_17399[(10)] = inst_17170);

(statearr_17399[(20)] = inst_17167);

(statearr_17399[(11)] = inst_17168);

(statearr_17399[(28)] = inst_17161);

return statearr_17399;
})();
var statearr_17407_19780 = state_17243__$1;
(statearr_17407_19780[(2)] = null);

(statearr_17407_19780[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (28))){
var inst_17191 = (state_17243[(23)]);
var inst_17167 = (state_17243[(20)]);
var inst_17191__$1 = cljs.core.seq(inst_17167);
var state_17243__$1 = (function (){var statearr_17408 = state_17243;
(statearr_17408[(23)] = inst_17191__$1);

return statearr_17408;
})();
if(inst_17191__$1){
var statearr_17413_19781 = state_17243__$1;
(statearr_17413_19781[(1)] = (33));

} else {
var statearr_17414_19782 = state_17243__$1;
(statearr_17414_19782[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (25))){
var inst_17169 = (state_17243[(19)]);
var inst_17170 = (state_17243[(10)]);
var inst_17172 = (inst_17170 < inst_17169);
var inst_17173 = inst_17172;
var state_17243__$1 = state_17243;
if(cljs.core.truth_(inst_17173)){
var statearr_17439_19783 = state_17243__$1;
(statearr_17439_19783[(1)] = (27));

} else {
var statearr_17440_19784 = state_17243__$1;
(statearr_17440_19784[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (34))){
var state_17243__$1 = state_17243;
var statearr_17441_19785 = state_17243__$1;
(statearr_17441_19785[(2)] = null);

(statearr_17441_19785[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (17))){
var state_17243__$1 = state_17243;
var statearr_17443_19786 = state_17243__$1;
(statearr_17443_19786[(2)] = null);

(statearr_17443_19786[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (3))){
var inst_17233 = (state_17243[(2)]);
var state_17243__$1 = state_17243;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17243__$1,inst_17233);
} else {
if((state_val_17244 === (12))){
var inst_17153 = (state_17243[(2)]);
var state_17243__$1 = state_17243;
var statearr_17450_19787 = state_17243__$1;
(statearr_17450_19787[(2)] = inst_17153);

(statearr_17450_19787[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (2))){
var state_17243__$1 = state_17243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17243__$1,(4),ch);
} else {
if((state_val_17244 === (23))){
var state_17243__$1 = state_17243;
var statearr_17452_19788 = state_17243__$1;
(statearr_17452_19788[(2)] = null);

(statearr_17452_19788[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (35))){
var inst_17215 = (state_17243[(2)]);
var state_17243__$1 = state_17243;
var statearr_17453_19789 = state_17243__$1;
(statearr_17453_19789[(2)] = inst_17215);

(statearr_17453_19789[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (19))){
var inst_17125 = (state_17243[(7)]);
var inst_17129 = cljs.core.chunk_first(inst_17125);
var inst_17130 = cljs.core.chunk_rest(inst_17125);
var inst_17131 = cljs.core.count(inst_17129);
var inst_17103 = inst_17130;
var inst_17104 = inst_17129;
var inst_17105 = inst_17131;
var inst_17106 = (0);
var state_17243__$1 = (function (){var statearr_17456 = state_17243;
(statearr_17456[(13)] = inst_17104);

(statearr_17456[(14)] = inst_17105);

(statearr_17456[(16)] = inst_17103);

(statearr_17456[(17)] = inst_17106);

return statearr_17456;
})();
var statearr_17459_19790 = state_17243__$1;
(statearr_17459_19790[(2)] = null);

(statearr_17459_19790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (11))){
var inst_17125 = (state_17243[(7)]);
var inst_17103 = (state_17243[(16)]);
var inst_17125__$1 = cljs.core.seq(inst_17103);
var state_17243__$1 = (function (){var statearr_17461 = state_17243;
(statearr_17461[(7)] = inst_17125__$1);

return statearr_17461;
})();
if(inst_17125__$1){
var statearr_17462_19791 = state_17243__$1;
(statearr_17462_19791[(1)] = (16));

} else {
var statearr_17463_19792 = state_17243__$1;
(statearr_17463_19792[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (9))){
var inst_17155 = (state_17243[(2)]);
var state_17243__$1 = state_17243;
var statearr_17467_19793 = state_17243__$1;
(statearr_17467_19793[(2)] = inst_17155);

(statearr_17467_19793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (5))){
var inst_17101 = cljs.core.deref(cs);
var inst_17102 = cljs.core.seq(inst_17101);
var inst_17103 = inst_17102;
var inst_17104 = null;
var inst_17105 = (0);
var inst_17106 = (0);
var state_17243__$1 = (function (){var statearr_17471 = state_17243;
(statearr_17471[(13)] = inst_17104);

(statearr_17471[(14)] = inst_17105);

(statearr_17471[(16)] = inst_17103);

(statearr_17471[(17)] = inst_17106);

return statearr_17471;
})();
var statearr_17473_19794 = state_17243__$1;
(statearr_17473_19794[(2)] = null);

(statearr_17473_19794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (14))){
var state_17243__$1 = state_17243;
var statearr_17474_19795 = state_17243__$1;
(statearr_17474_19795[(2)] = null);

(statearr_17474_19795[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (45))){
var inst_17225 = (state_17243[(2)]);
var state_17243__$1 = state_17243;
var statearr_17475_19796 = state_17243__$1;
(statearr_17475_19796[(2)] = inst_17225);

(statearr_17475_19796[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (26))){
var inst_17159 = (state_17243[(27)]);
var inst_17219 = (state_17243[(2)]);
var inst_17220 = cljs.core.seq(inst_17159);
var state_17243__$1 = (function (){var statearr_17476 = state_17243;
(statearr_17476[(29)] = inst_17219);

return statearr_17476;
})();
if(inst_17220){
var statearr_17477_19797 = state_17243__$1;
(statearr_17477_19797[(1)] = (42));

} else {
var statearr_17478_19798 = state_17243__$1;
(statearr_17478_19798[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (16))){
var inst_17125 = (state_17243[(7)]);
var inst_17127 = cljs.core.chunked_seq_QMARK_(inst_17125);
var state_17243__$1 = state_17243;
if(inst_17127){
var statearr_17483_19799 = state_17243__$1;
(statearr_17483_19799[(1)] = (19));

} else {
var statearr_17486_19800 = state_17243__$1;
(statearr_17486_19800[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (38))){
var inst_17212 = (state_17243[(2)]);
var state_17243__$1 = state_17243;
var statearr_17491_19801 = state_17243__$1;
(statearr_17491_19801[(2)] = inst_17212);

(statearr_17491_19801[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (30))){
var state_17243__$1 = state_17243;
var statearr_17496_19802 = state_17243__$1;
(statearr_17496_19802[(2)] = null);

(statearr_17496_19802[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (10))){
var inst_17104 = (state_17243[(13)]);
var inst_17106 = (state_17243[(17)]);
var inst_17114 = cljs.core._nth(inst_17104,inst_17106);
var inst_17115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17114,(0),null);
var inst_17116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17114,(1),null);
var state_17243__$1 = (function (){var statearr_17502 = state_17243;
(statearr_17502[(24)] = inst_17115);

return statearr_17502;
})();
if(cljs.core.truth_(inst_17116)){
var statearr_17503_19803 = state_17243__$1;
(statearr_17503_19803[(1)] = (13));

} else {
var statearr_17504_19804 = state_17243__$1;
(statearr_17504_19804[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (18))){
var inst_17151 = (state_17243[(2)]);
var state_17243__$1 = state_17243;
var statearr_17511_19805 = state_17243__$1;
(statearr_17511_19805[(2)] = inst_17151);

(statearr_17511_19805[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (42))){
var state_17243__$1 = state_17243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17243__$1,(45),dchan);
} else {
if((state_val_17244 === (37))){
var inst_17201 = (state_17243[(22)]);
var inst_17191 = (state_17243[(23)]);
var inst_17090 = (state_17243[(12)]);
var inst_17201__$1 = cljs.core.first(inst_17191);
var inst_17203 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17201__$1,inst_17090,done);
var state_17243__$1 = (function (){var statearr_17525 = state_17243;
(statearr_17525[(22)] = inst_17201__$1);

return statearr_17525;
})();
if(cljs.core.truth_(inst_17203)){
var statearr_17526_19806 = state_17243__$1;
(statearr_17526_19806[(1)] = (39));

} else {
var statearr_17527_19807 = state_17243__$1;
(statearr_17527_19807[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (8))){
var inst_17105 = (state_17243[(14)]);
var inst_17106 = (state_17243[(17)]);
var inst_17108 = (inst_17106 < inst_17105);
var inst_17109 = inst_17108;
var state_17243__$1 = state_17243;
if(cljs.core.truth_(inst_17109)){
var statearr_17530_19808 = state_17243__$1;
(statearr_17530_19808[(1)] = (10));

} else {
var statearr_17531_19809 = state_17243__$1;
(statearr_17531_19809[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__15705__auto__ = null;
var cljs$core$async$mult_$_state_machine__15705__auto____0 = (function (){
var statearr_17538 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17538[(0)] = cljs$core$async$mult_$_state_machine__15705__auto__);

(statearr_17538[(1)] = (1));

return statearr_17538;
});
var cljs$core$async$mult_$_state_machine__15705__auto____1 = (function (state_17243){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__(state_17243);
if(cljs.core.keyword_identical_QMARK_(result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e17546){var ex__15708__auto__ = e17546;
var statearr_17547_19815 = state_17243;
(statearr_17547_19815[(2)] = ex__15708__auto__);


if(cljs.core.seq((state_17243[(4)]))){
var statearr_17556_19816 = state_17243;
(statearr_17556_19816[(1)] = cljs.core.first((state_17243[(4)])));

} else {
throw ex__15708__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19818 = state_17243;
state_17243 = G__19818;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15705__auto__ = function(state_17243){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15705__auto____1.call(this,state_17243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15705__auto____0;
cljs$core$async$mult_$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15705__auto____1;
return cljs$core$async$mult_$_state_machine__15705__auto__;
})()
})();
var state__15890__auto__ = (function (){var statearr_17574 = f__15889__auto__();
(statearr_17574[(6)] = c__15888__auto___19739);

return statearr_17574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15890__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__17583 = arguments.length;
switch (G__17583) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_19822 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_19822(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19824 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_19824(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19826 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19826(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19827 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_19827(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19832 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19832(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19835 = arguments.length;
var i__5770__auto___19836 = (0);
while(true){
if((i__5770__auto___19836 < len__5769__auto___19835)){
args__5775__auto__.push((arguments[i__5770__auto___19836]));

var G__19837 = (i__5770__auto___19836 + (1));
i__5770__auto___19836 = G__19837;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17772){
var map__17774 = p__17772;
var map__17774__$1 = cljs.core.__destructure_map(map__17774);
var opts = map__17774__$1;
var statearr_17782_19842 = state;
(statearr_17782_19842[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_17793_19843 = state;
(statearr_17793_19843[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_17795_19844 = state;
(statearr_17795_19844[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17739){
var G__17740 = cljs.core.first(seq17739);
var seq17739__$1 = cljs.core.next(seq17739);
var G__17741 = cljs.core.first(seq17739__$1);
var seq17739__$2 = cljs.core.next(seq17739__$1);
var G__17742 = cljs.core.first(seq17739__$2);
var seq17739__$3 = cljs.core.next(seq17739__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17740,G__17741,G__17742,seq17739__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17822 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17823){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17823 = meta17823;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17824,meta17823__$1){
var self__ = this;
var _17824__$1 = this;
return (new cljs.core.async.t_cljs$core$async17822(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17823__$1));
}));

(cljs.core.async.t_cljs$core$async17822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17824){
var self__ = this;
var _17824__$1 = this;
return self__.meta17823;
}));

(cljs.core.async.t_cljs$core$async17822.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17822.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async17822.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17822.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17822.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17822.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17822.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17822.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17822.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta17823","meta17823",-642054075,null)], null);
}));

(cljs.core.async.t_cljs$core$async17822.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17822.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17822");

(cljs.core.async.t_cljs$core$async17822.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17822");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17822.
 */
cljs.core.async.__GT_t_cljs$core$async17822 = (function cljs$core$async$__GT_t_cljs$core$async17822(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17823){
return (new cljs.core.async.t_cljs$core$async17822(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17823));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async17822(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__15888__auto___19866 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15889__auto__ = (function (){var switch__15704__auto__ = (function (state_17951){
var state_val_17953 = (state_17951[(1)]);
if((state_val_17953 === (7))){
var inst_17908 = (state_17951[(2)]);
var state_17951__$1 = state_17951;
if(cljs.core.truth_(inst_17908)){
var statearr_17957_19867 = state_17951__$1;
(statearr_17957_19867[(1)] = (8));

} else {
var statearr_17958_19868 = state_17951__$1;
(statearr_17958_19868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17953 === (20))){
var inst_17896 = (state_17951[(7)]);
var state_17951__$1 = state_17951;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17951__$1,(23),out,inst_17896);
} else {
if((state_val_17953 === (1))){
var inst_17871 = calc_state();
var inst_17872 = cljs.core.__destructure_map(inst_17871);
var inst_17873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17872,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17872,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17872,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17876 = inst_17871;
var state_17951__$1 = (function (){var statearr_17964 = state_17951;
(statearr_17964[(8)] = inst_17876);

(statearr_17964[(9)] = inst_17874);

(statearr_17964[(10)] = inst_17875);

(statearr_17964[(11)] = inst_17873);

return statearr_17964;
})();
var statearr_17967_19869 = state_17951__$1;
(statearr_17967_19869[(2)] = null);

(statearr_17967_19869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17953 === (24))){
var inst_17883 = (state_17951[(12)]);
var inst_17876 = inst_17883;
var state_17951__$1 = (function (){var statearr_17969 = state_17951;
(statearr_17969[(8)] = inst_17876);

return statearr_17969;
})();
var statearr_17970_19870 = state_17951__$1;
(statearr_17970_19870[(2)] = null);

(statearr_17970_19870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17953 === (4))){
var inst_17902 = (state_17951[(13)]);
var inst_17896 = (state_17951[(7)]);
var inst_17895 = (state_17951[(2)]);
var inst_17896__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17895,(0),null);
var inst_17897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17895,(1),null);
var inst_17902__$1 = (inst_17896__$1 == null);
var state_17951__$1 = (function (){var statearr_17974 = state_17951;
(statearr_17974[(13)] = inst_17902__$1);

(statearr_17974[(14)] = inst_17897);

(statearr_17974[(7)] = inst_17896__$1);

return statearr_17974;
})();
if(cljs.core.truth_(inst_17902__$1)){
var statearr_17975_19871 = state_17951__$1;
(statearr_17975_19871[(1)] = (5));

} else {
var statearr_17978_19872 = state_17951__$1;
(statearr_17978_19872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17953 === (15))){
var inst_17884 = (state_17951[(15)]);
var inst_17922 = (state_17951[(16)]);
var inst_17922__$1 = cljs.core.empty_QMARK_(inst_17884);
var state_17951__$1 = (function (){var statearr_17980 = state_17951;
(statearr_17980[(16)] = inst_17922__$1);

return statearr_17980;
})();
if(inst_17922__$1){
var statearr_17983_19873 = state_17951__$1;
(statearr_17983_19873[(1)] = (17));

} else {
var statearr_17985_19874 = state_17951__$1;
(statearr_17985_19874[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17953 === (21))){
var inst_17883 = (state_17951[(12)]);
var inst_17876 = inst_17883;
var state_17951__$1 = (function (){var statearr_17986 = state_17951;
(statearr_17986[(8)] = inst_17876);

return statearr_17986;
})();
var statearr_17987_19875 = state_17951__$1;
(statearr_17987_19875[(2)] = null);

(statearr_17987_19875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17953 === (13))){
var inst_17915 = (state_17951[(2)]);
var inst_17916 = calc_state();
var inst_17876 = inst_17916;
var state_17951__$1 = (function (){var statearr_17988 = state_17951;
(statearr_17988[(8)] = inst_17876);

(statearr_17988[(17)] = inst_17915);

return statearr_17988;
})();
var statearr_17989_19876 = state_17951__$1;
(statearr_17989_19876[(2)] = null);

(statearr_17989_19876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17953 === (22))){
var inst_17943 = (state_17951[(2)]);
var state_17951__$1 = state_17951;
var statearr_17993_19877 = state_17951__$1;
(statearr_17993_19877[(2)] = inst_17943);

(statearr_17993_19877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17953 === (6))){
var inst_17897 = (state_17951[(14)]);
var inst_17905 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17897,change);
var state_17951__$1 = state_17951;
var statearr_18000_19885 = state_17951__$1;
(statearr_18000_19885[(2)] = inst_17905);

(statearr_18000_19885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17953 === (25))){
var state_17951__$1 = state_17951;
var statearr_18007_19886 = state_17951__$1;
(statearr_18007_19886[(2)] = null);

(statearr_18007_19886[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17953 === (17))){
var inst_17897 = (state_17951[(14)]);
var inst_17885 = (state_17951[(18)]);
var inst_17924 = (inst_17885.cljs$core$IFn$_invoke$arity$1 ? inst_17885.cljs$core$IFn$_invoke$arity$1(inst_17897) : inst_17885.call(null,inst_17897));
var inst_17925 = cljs.core.not(inst_17924);
var state_17951__$1 = state_17951;
var statearr_18011_19888 = state_17951__$1;
(statearr_18011_19888[(2)] = inst_17925);

(statearr_18011_19888[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17953 === (3))){
var inst_17947 = (state_17951[(2)]);
var state_17951__$1 = state_17951;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17951__$1,inst_17947);
} else {
if((state_val_17953 === (12))){
var state_17951__$1 = state_17951;
var statearr_18014_19889 = state_17951__$1;
(statearr_18014_19889[(2)] = null);

(statearr_18014_19889[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17953 === (2))){
var inst_17876 = (state_17951[(8)]);
var inst_17883 = (state_17951[(12)]);
var inst_17883__$1 = cljs.core.__destructure_map(inst_17876);
var inst_17884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17883__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17883__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17883__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17951__$1 = (function (){var statearr_18016 = state_17951;
(statearr_18016[(15)] = inst_17884);

(statearr_18016[(18)] = inst_17885);

(statearr_18016[(12)] = inst_17883__$1);

return statearr_18016;
})();
return cljs.core.async.ioc_alts_BANG_(state_17951__$1,(4),inst_17886);
} else {
if((state_val_17953 === (23))){
var inst_17934 = (state_17951[(2)]);
var state_17951__$1 = state_17951;
if(cljs.core.truth_(inst_17934)){
var statearr_18020_19890 = state_17951__$1;
(statearr_18020_19890[(1)] = (24));

} else {
var statearr_18021_19891 = state_17951__$1;
(statearr_18021_19891[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17953 === (19))){
var inst_17929 = (state_17951[(2)]);
var state_17951__$1 = state_17951;
var statearr_18029_19892 = state_17951__$1;
(statearr_18029_19892[(2)] = inst_17929);

(statearr_18029_19892[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17953 === (11))){
var inst_17897 = (state_17951[(14)]);
var inst_17912 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17897);
var state_17951__$1 = state_17951;
var statearr_18041_19893 = state_17951__$1;
(statearr_18041_19893[(2)] = inst_17912);

(statearr_18041_19893[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17953 === (9))){
var inst_17897 = (state_17951[(14)]);
var inst_17919 = (state_17951[(19)]);
var inst_17884 = (state_17951[(15)]);
var inst_17919__$1 = (inst_17884.cljs$core$IFn$_invoke$arity$1 ? inst_17884.cljs$core$IFn$_invoke$arity$1(inst_17897) : inst_17884.call(null,inst_17897));
var state_17951__$1 = (function (){var statearr_18051 = state_17951;
(statearr_18051[(19)] = inst_17919__$1);

return statearr_18051;
})();
if(cljs.core.truth_(inst_17919__$1)){
var statearr_18052_19898 = state_17951__$1;
(statearr_18052_19898[(1)] = (14));

} else {
var statearr_18055_19899 = state_17951__$1;
(statearr_18055_19899[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17953 === (5))){
var inst_17902 = (state_17951[(13)]);
var state_17951__$1 = state_17951;
var statearr_18060_19900 = state_17951__$1;
(statearr_18060_19900[(2)] = inst_17902);

(statearr_18060_19900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17953 === (14))){
var inst_17919 = (state_17951[(19)]);
var state_17951__$1 = state_17951;
var statearr_18063_19901 = state_17951__$1;
(statearr_18063_19901[(2)] = inst_17919);

(statearr_18063_19901[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17953 === (26))){
var inst_17939 = (state_17951[(2)]);
var state_17951__$1 = state_17951;
var statearr_18065_19902 = state_17951__$1;
(statearr_18065_19902[(2)] = inst_17939);

(statearr_18065_19902[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17953 === (16))){
var inst_17931 = (state_17951[(2)]);
var state_17951__$1 = state_17951;
if(cljs.core.truth_(inst_17931)){
var statearr_18073_19903 = state_17951__$1;
(statearr_18073_19903[(1)] = (20));

} else {
var statearr_18076_19904 = state_17951__$1;
(statearr_18076_19904[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17953 === (10))){
var inst_17945 = (state_17951[(2)]);
var state_17951__$1 = state_17951;
var statearr_18081_19905 = state_17951__$1;
(statearr_18081_19905[(2)] = inst_17945);

(statearr_18081_19905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17953 === (18))){
var inst_17922 = (state_17951[(16)]);
var state_17951__$1 = state_17951;
var statearr_18085_19912 = state_17951__$1;
(statearr_18085_19912[(2)] = inst_17922);

(statearr_18085_19912[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17953 === (8))){
var inst_17896 = (state_17951[(7)]);
var inst_17910 = (inst_17896 == null);
var state_17951__$1 = state_17951;
if(cljs.core.truth_(inst_17910)){
var statearr_18088_19914 = state_17951__$1;
(statearr_18088_19914[(1)] = (11));

} else {
var statearr_18089_19915 = state_17951__$1;
(statearr_18089_19915[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__15705__auto__ = null;
var cljs$core$async$mix_$_state_machine__15705__auto____0 = (function (){
var statearr_18093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18093[(0)] = cljs$core$async$mix_$_state_machine__15705__auto__);

(statearr_18093[(1)] = (1));

return statearr_18093;
});
var cljs$core$async$mix_$_state_machine__15705__auto____1 = (function (state_17951){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__(state_17951);
if(cljs.core.keyword_identical_QMARK_(result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e18094){var ex__15708__auto__ = e18094;
var statearr_18095_19917 = state_17951;
(statearr_18095_19917[(2)] = ex__15708__auto__);


if(cljs.core.seq((state_17951[(4)]))){
var statearr_18100_19918 = state_17951;
(statearr_18100_19918[(1)] = cljs.core.first((state_17951[(4)])));

} else {
throw ex__15708__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19920 = state_17951;
state_17951 = G__19920;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15705__auto__ = function(state_17951){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15705__auto____1.call(this,state_17951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15705__auto____0;
cljs$core$async$mix_$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15705__auto____1;
return cljs$core$async$mix_$_state_machine__15705__auto__;
})()
})();
var state__15890__auto__ = (function (){var statearr_18105 = f__15889__auto__();
(statearr_18105[(6)] = c__15888__auto___19866);

return statearr_18105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15890__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_19923 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_19923(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_19924 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_19924(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_19925 = (function() {
var G__19926 = null;
var G__19926__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__19926__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__19926 = function(p,v){
switch(arguments.length){
case 1:
return G__19926__1.call(this,p);
case 2:
return G__19926__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19926.cljs$core$IFn$_invoke$arity$1 = G__19926__1;
G__19926.cljs$core$IFn$_invoke$arity$2 = G__19926__2;
return G__19926;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18170 = arguments.length;
switch (G__18170) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19925(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19925(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18247 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18248){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18248 = meta18248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18249,meta18248__$1){
var self__ = this;
var _18249__$1 = this;
return (new cljs.core.async.t_cljs$core$async18247(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18248__$1));
}));

(cljs.core.async.t_cljs$core$async18247.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18249){
var self__ = this;
var _18249__$1 = this;
return self__.meta18248;
}));

(cljs.core.async.t_cljs$core$async18247.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18247.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18247.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18247.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18247.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async18247.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18247.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18247.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18248","meta18248",-42809188,null)], null);
}));

(cljs.core.async.t_cljs$core$async18247.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18247.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18247");

(cljs.core.async.t_cljs$core$async18247.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18247");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18247.
 */
cljs.core.async.__GT_t_cljs$core$async18247 = (function cljs$core$async$__GT_t_cljs$core$async18247(ch,topic_fn,buf_fn,mults,ensure_mult,meta18248){
return (new cljs.core.async.t_cljs$core$async18247(ch,topic_fn,buf_fn,mults,ensure_mult,meta18248));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__18229 = arguments.length;
switch (G__18229) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__18215_SHARP_){
if(cljs.core.truth_((p1__18215_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18215_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18215_SHARP_.call(null,topic)))){
return p1__18215_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18215_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async18247(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__15888__auto___19956 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15889__auto__ = (function (){var switch__15704__auto__ = (function (state_18407){
var state_val_18412 = (state_18407[(1)]);
if((state_val_18412 === (7))){
var inst_18400 = (state_18407[(2)]);
var state_18407__$1 = state_18407;
var statearr_18417_19957 = state_18407__$1;
(statearr_18417_19957[(2)] = inst_18400);

(statearr_18417_19957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18412 === (20))){
var state_18407__$1 = state_18407;
var statearr_18420_19958 = state_18407__$1;
(statearr_18420_19958[(2)] = null);

(statearr_18420_19958[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18412 === (1))){
var state_18407__$1 = state_18407;
var statearr_18422_19959 = state_18407__$1;
(statearr_18422_19959[(2)] = null);

(statearr_18422_19959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18412 === (24))){
var inst_18381 = (state_18407[(7)]);
var inst_18392 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18381);
var state_18407__$1 = state_18407;
var statearr_18426_19960 = state_18407__$1;
(statearr_18426_19960[(2)] = inst_18392);

(statearr_18426_19960[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18412 === (4))){
var inst_18311 = (state_18407[(8)]);
var inst_18311__$1 = (state_18407[(2)]);
var inst_18313 = (inst_18311__$1 == null);
var state_18407__$1 = (function (){var statearr_18427 = state_18407;
(statearr_18427[(8)] = inst_18311__$1);

return statearr_18427;
})();
if(cljs.core.truth_(inst_18313)){
var statearr_18428_19961 = state_18407__$1;
(statearr_18428_19961[(1)] = (5));

} else {
var statearr_18429_19962 = state_18407__$1;
(statearr_18429_19962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18412 === (15))){
var inst_18375 = (state_18407[(2)]);
var state_18407__$1 = state_18407;
var statearr_18430_19963 = state_18407__$1;
(statearr_18430_19963[(2)] = inst_18375);

(statearr_18430_19963[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18412 === (21))){
var inst_18397 = (state_18407[(2)]);
var state_18407__$1 = (function (){var statearr_18432 = state_18407;
(statearr_18432[(9)] = inst_18397);

return statearr_18432;
})();
var statearr_18433_19964 = state_18407__$1;
(statearr_18433_19964[(2)] = null);

(statearr_18433_19964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18412 === (13))){
var inst_18353 = (state_18407[(10)]);
var inst_18357 = cljs.core.chunked_seq_QMARK_(inst_18353);
var state_18407__$1 = state_18407;
if(inst_18357){
var statearr_18435_19970 = state_18407__$1;
(statearr_18435_19970[(1)] = (16));

} else {
var statearr_18438_19972 = state_18407__$1;
(statearr_18438_19972[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18412 === (22))){
var inst_18387 = (state_18407[(2)]);
var state_18407__$1 = state_18407;
if(cljs.core.truth_(inst_18387)){
var statearr_18439_19976 = state_18407__$1;
(statearr_18439_19976[(1)] = (23));

} else {
var statearr_18440_19977 = state_18407__$1;
(statearr_18440_19977[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18412 === (6))){
var inst_18383 = (state_18407[(11)]);
var inst_18381 = (state_18407[(7)]);
var inst_18311 = (state_18407[(8)]);
var inst_18381__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18311) : topic_fn.call(null,inst_18311));
var inst_18382 = cljs.core.deref(mults);
var inst_18383__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18382,inst_18381__$1);
var state_18407__$1 = (function (){var statearr_18446 = state_18407;
(statearr_18446[(11)] = inst_18383__$1);

(statearr_18446[(7)] = inst_18381__$1);

return statearr_18446;
})();
if(cljs.core.truth_(inst_18383__$1)){
var statearr_18448_19983 = state_18407__$1;
(statearr_18448_19983[(1)] = (19));

} else {
var statearr_18449_19984 = state_18407__$1;
(statearr_18449_19984[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18412 === (25))){
var inst_18394 = (state_18407[(2)]);
var state_18407__$1 = state_18407;
var statearr_18450_19986 = state_18407__$1;
(statearr_18450_19986[(2)] = inst_18394);

(statearr_18450_19986[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18412 === (17))){
var inst_18353 = (state_18407[(10)]);
var inst_18366 = cljs.core.first(inst_18353);
var inst_18367 = cljs.core.async.muxch_STAR_(inst_18366);
var inst_18368 = cljs.core.async.close_BANG_(inst_18367);
var inst_18369 = cljs.core.next(inst_18353);
var inst_18326 = inst_18369;
var inst_18327 = null;
var inst_18328 = (0);
var inst_18329 = (0);
var state_18407__$1 = (function (){var statearr_18454 = state_18407;
(statearr_18454[(12)] = inst_18327);

(statearr_18454[(13)] = inst_18368);

(statearr_18454[(14)] = inst_18328);

(statearr_18454[(15)] = inst_18326);

(statearr_18454[(16)] = inst_18329);

return statearr_18454;
})();
var statearr_18456_19991 = state_18407__$1;
(statearr_18456_19991[(2)] = null);

(statearr_18456_19991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18412 === (3))){
var inst_18402 = (state_18407[(2)]);
var state_18407__$1 = state_18407;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18407__$1,inst_18402);
} else {
if((state_val_18412 === (12))){
var inst_18377 = (state_18407[(2)]);
var state_18407__$1 = state_18407;
var statearr_18458_19994 = state_18407__$1;
(statearr_18458_19994[(2)] = inst_18377);

(statearr_18458_19994[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18412 === (2))){
var state_18407__$1 = state_18407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18407__$1,(4),ch);
} else {
if((state_val_18412 === (23))){
var state_18407__$1 = state_18407;
var statearr_18471_19995 = state_18407__$1;
(statearr_18471_19995[(2)] = null);

(statearr_18471_19995[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18412 === (19))){
var inst_18383 = (state_18407[(11)]);
var inst_18311 = (state_18407[(8)]);
var inst_18385 = cljs.core.async.muxch_STAR_(inst_18383);
var state_18407__$1 = state_18407;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18407__$1,(22),inst_18385,inst_18311);
} else {
if((state_val_18412 === (11))){
var inst_18353 = (state_18407[(10)]);
var inst_18326 = (state_18407[(15)]);
var inst_18353__$1 = cljs.core.seq(inst_18326);
var state_18407__$1 = (function (){var statearr_18477 = state_18407;
(statearr_18477[(10)] = inst_18353__$1);

return statearr_18477;
})();
if(inst_18353__$1){
var statearr_18478_19996 = state_18407__$1;
(statearr_18478_19996[(1)] = (13));

} else {
var statearr_18479_19997 = state_18407__$1;
(statearr_18479_19997[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18412 === (9))){
var inst_18379 = (state_18407[(2)]);
var state_18407__$1 = state_18407;
var statearr_18483_19999 = state_18407__$1;
(statearr_18483_19999[(2)] = inst_18379);

(statearr_18483_19999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18412 === (5))){
var inst_18323 = cljs.core.deref(mults);
var inst_18324 = cljs.core.vals(inst_18323);
var inst_18325 = cljs.core.seq(inst_18324);
var inst_18326 = inst_18325;
var inst_18327 = null;
var inst_18328 = (0);
var inst_18329 = (0);
var state_18407__$1 = (function (){var statearr_18497 = state_18407;
(statearr_18497[(12)] = inst_18327);

(statearr_18497[(14)] = inst_18328);

(statearr_18497[(15)] = inst_18326);

(statearr_18497[(16)] = inst_18329);

return statearr_18497;
})();
var statearr_18506_20001 = state_18407__$1;
(statearr_18506_20001[(2)] = null);

(statearr_18506_20001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18412 === (14))){
var state_18407__$1 = state_18407;
var statearr_18519_20002 = state_18407__$1;
(statearr_18519_20002[(2)] = null);

(statearr_18519_20002[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18412 === (16))){
var inst_18353 = (state_18407[(10)]);
var inst_18359 = cljs.core.chunk_first(inst_18353);
var inst_18360 = cljs.core.chunk_rest(inst_18353);
var inst_18361 = cljs.core.count(inst_18359);
var inst_18326 = inst_18360;
var inst_18327 = inst_18359;
var inst_18328 = inst_18361;
var inst_18329 = (0);
var state_18407__$1 = (function (){var statearr_18533 = state_18407;
(statearr_18533[(12)] = inst_18327);

(statearr_18533[(14)] = inst_18328);

(statearr_18533[(15)] = inst_18326);

(statearr_18533[(16)] = inst_18329);

return statearr_18533;
})();
var statearr_18538_20004 = state_18407__$1;
(statearr_18538_20004[(2)] = null);

(statearr_18538_20004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18412 === (10))){
var inst_18327 = (state_18407[(12)]);
var inst_18328 = (state_18407[(14)]);
var inst_18326 = (state_18407[(15)]);
var inst_18329 = (state_18407[(16)]);
var inst_18340 = cljs.core._nth(inst_18327,inst_18329);
var inst_18343 = cljs.core.async.muxch_STAR_(inst_18340);
var inst_18344 = cljs.core.async.close_BANG_(inst_18343);
var inst_18345 = (inst_18329 + (1));
var tmp18511 = inst_18327;
var tmp18512 = inst_18328;
var tmp18513 = inst_18326;
var inst_18326__$1 = tmp18513;
var inst_18327__$1 = tmp18511;
var inst_18328__$1 = tmp18512;
var inst_18329__$1 = inst_18345;
var state_18407__$1 = (function (){var statearr_18540 = state_18407;
(statearr_18540[(12)] = inst_18327__$1);

(statearr_18540[(17)] = inst_18344);

(statearr_18540[(14)] = inst_18328__$1);

(statearr_18540[(15)] = inst_18326__$1);

(statearr_18540[(16)] = inst_18329__$1);

return statearr_18540;
})();
var statearr_18543_20009 = state_18407__$1;
(statearr_18543_20009[(2)] = null);

(statearr_18543_20009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18412 === (18))){
var inst_18372 = (state_18407[(2)]);
var state_18407__$1 = state_18407;
var statearr_18547_20010 = state_18407__$1;
(statearr_18547_20010[(2)] = inst_18372);

(statearr_18547_20010[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18412 === (8))){
var inst_18328 = (state_18407[(14)]);
var inst_18329 = (state_18407[(16)]);
var inst_18333 = (inst_18329 < inst_18328);
var inst_18334 = inst_18333;
var state_18407__$1 = state_18407;
if(cljs.core.truth_(inst_18334)){
var statearr_18548_20014 = state_18407__$1;
(statearr_18548_20014[(1)] = (10));

} else {
var statearr_18549_20015 = state_18407__$1;
(statearr_18549_20015[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15705__auto__ = null;
var cljs$core$async$state_machine__15705__auto____0 = (function (){
var statearr_18550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18550[(0)] = cljs$core$async$state_machine__15705__auto__);

(statearr_18550[(1)] = (1));

return statearr_18550;
});
var cljs$core$async$state_machine__15705__auto____1 = (function (state_18407){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__(state_18407);
if(cljs.core.keyword_identical_QMARK_(result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e18551){var ex__15708__auto__ = e18551;
var statearr_18552_20017 = state_18407;
(statearr_18552_20017[(2)] = ex__15708__auto__);


if(cljs.core.seq((state_18407[(4)]))){
var statearr_18554_20019 = state_18407;
(statearr_18554_20019[(1)] = cljs.core.first((state_18407[(4)])));

} else {
throw ex__15708__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20021 = state_18407;
state_18407 = G__20021;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$state_machine__15705__auto__ = function(state_18407){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15705__auto____1.call(this,state_18407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15705__auto____0;
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15705__auto____1;
return cljs$core$async$state_machine__15705__auto__;
})()
})();
var state__15890__auto__ = (function (){var statearr_18563 = f__15889__auto__();
(statearr_18563[(6)] = c__15888__auto___19956);

return statearr_18563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15890__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__18567 = arguments.length;
switch (G__18567) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__18574 = arguments.length;
switch (G__18574) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__18582 = arguments.length;
switch (G__18582) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__15888__auto___20039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15889__auto__ = (function (){var switch__15704__auto__ = (function (state_18631){
var state_val_18632 = (state_18631[(1)]);
if((state_val_18632 === (7))){
var state_18631__$1 = state_18631;
var statearr_18633_20040 = state_18631__$1;
(statearr_18633_20040[(2)] = null);

(statearr_18633_20040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (1))){
var state_18631__$1 = state_18631;
var statearr_18634_20043 = state_18631__$1;
(statearr_18634_20043[(2)] = null);

(statearr_18634_20043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (4))){
var inst_18589 = (state_18631[(7)]);
var inst_18590 = (state_18631[(8)]);
var inst_18592 = (inst_18590 < inst_18589);
var state_18631__$1 = state_18631;
if(cljs.core.truth_(inst_18592)){
var statearr_18637_20049 = state_18631__$1;
(statearr_18637_20049[(1)] = (6));

} else {
var statearr_18638_20052 = state_18631__$1;
(statearr_18638_20052[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (15))){
var inst_18617 = (state_18631[(9)]);
var inst_18622 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18617);
var state_18631__$1 = state_18631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18631__$1,(17),out,inst_18622);
} else {
if((state_val_18632 === (13))){
var inst_18617 = (state_18631[(9)]);
var inst_18617__$1 = (state_18631[(2)]);
var inst_18618 = cljs.core.some(cljs.core.nil_QMARK_,inst_18617__$1);
var state_18631__$1 = (function (){var statearr_18640 = state_18631;
(statearr_18640[(9)] = inst_18617__$1);

return statearr_18640;
})();
if(cljs.core.truth_(inst_18618)){
var statearr_18641_20054 = state_18631__$1;
(statearr_18641_20054[(1)] = (14));

} else {
var statearr_18642_20055 = state_18631__$1;
(statearr_18642_20055[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (6))){
var state_18631__$1 = state_18631;
var statearr_18643_20058 = state_18631__$1;
(statearr_18643_20058[(2)] = null);

(statearr_18643_20058[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (17))){
var inst_18624 = (state_18631[(2)]);
var state_18631__$1 = (function (){var statearr_18656 = state_18631;
(statearr_18656[(10)] = inst_18624);

return statearr_18656;
})();
var statearr_18657_20063 = state_18631__$1;
(statearr_18657_20063[(2)] = null);

(statearr_18657_20063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (3))){
var inst_18629 = (state_18631[(2)]);
var state_18631__$1 = state_18631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18631__$1,inst_18629);
} else {
if((state_val_18632 === (12))){
var _ = (function (){var statearr_18661 = state_18631;
(statearr_18661[(4)] = cljs.core.rest((state_18631[(4)])));

return statearr_18661;
})();
var state_18631__$1 = state_18631;
var ex18652 = (state_18631__$1[(2)]);
var statearr_18663_20065 = state_18631__$1;
(statearr_18663_20065[(5)] = ex18652);


if((ex18652 instanceof Object)){
var statearr_18664_20066 = state_18631__$1;
(statearr_18664_20066[(1)] = (11));

(statearr_18664_20066[(5)] = null);

} else {
throw ex18652;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (2))){
var inst_18588 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18589 = cnt;
var inst_18590 = (0);
var state_18631__$1 = (function (){var statearr_18668 = state_18631;
(statearr_18668[(7)] = inst_18589);

(statearr_18668[(11)] = inst_18588);

(statearr_18668[(8)] = inst_18590);

return statearr_18668;
})();
var statearr_18670_20073 = state_18631__$1;
(statearr_18670_20073[(2)] = null);

(statearr_18670_20073[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (11))){
var inst_18594 = (state_18631[(2)]);
var inst_18595 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18631__$1 = (function (){var statearr_18671 = state_18631;
(statearr_18671[(12)] = inst_18594);

return statearr_18671;
})();
var statearr_18673_20075 = state_18631__$1;
(statearr_18673_20075[(2)] = inst_18595);

(statearr_18673_20075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (9))){
var inst_18590 = (state_18631[(8)]);
var _ = (function (){var statearr_18674 = state_18631;
(statearr_18674[(4)] = cljs.core.cons((12),(state_18631[(4)])));

return statearr_18674;
})();
var inst_18603 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18590) : chs__$1.call(null,inst_18590));
var inst_18604 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18590) : done.call(null,inst_18590));
var inst_18605 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18603,inst_18604);
var ___$1 = (function (){var statearr_18675 = state_18631;
(statearr_18675[(4)] = cljs.core.rest((state_18631[(4)])));

return statearr_18675;
})();
var state_18631__$1 = state_18631;
var statearr_18676_20080 = state_18631__$1;
(statearr_18676_20080[(2)] = inst_18605);

(statearr_18676_20080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (5))){
var inst_18615 = (state_18631[(2)]);
var state_18631__$1 = (function (){var statearr_18678 = state_18631;
(statearr_18678[(13)] = inst_18615);

return statearr_18678;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18631__$1,(13),dchan);
} else {
if((state_val_18632 === (14))){
var inst_18620 = cljs.core.async.close_BANG_(out);
var state_18631__$1 = state_18631;
var statearr_18681_20083 = state_18631__$1;
(statearr_18681_20083[(2)] = inst_18620);

(statearr_18681_20083[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (16))){
var inst_18627 = (state_18631[(2)]);
var state_18631__$1 = state_18631;
var statearr_18682_20089 = state_18631__$1;
(statearr_18682_20089[(2)] = inst_18627);

(statearr_18682_20089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (10))){
var inst_18590 = (state_18631[(8)]);
var inst_18608 = (state_18631[(2)]);
var inst_18609 = (inst_18590 + (1));
var inst_18590__$1 = inst_18609;
var state_18631__$1 = (function (){var statearr_18684 = state_18631;
(statearr_18684[(14)] = inst_18608);

(statearr_18684[(8)] = inst_18590__$1);

return statearr_18684;
})();
var statearr_18685_20094 = state_18631__$1;
(statearr_18685_20094[(2)] = null);

(statearr_18685_20094[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18632 === (8))){
var inst_18613 = (state_18631[(2)]);
var state_18631__$1 = state_18631;
var statearr_18687_20097 = state_18631__$1;
(statearr_18687_20097[(2)] = inst_18613);

(statearr_18687_20097[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15705__auto__ = null;
var cljs$core$async$state_machine__15705__auto____0 = (function (){
var statearr_18689 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18689[(0)] = cljs$core$async$state_machine__15705__auto__);

(statearr_18689[(1)] = (1));

return statearr_18689;
});
var cljs$core$async$state_machine__15705__auto____1 = (function (state_18631){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__(state_18631);
if(cljs.core.keyword_identical_QMARK_(result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e18690){var ex__15708__auto__ = e18690;
var statearr_18691_20099 = state_18631;
(statearr_18691_20099[(2)] = ex__15708__auto__);


if(cljs.core.seq((state_18631[(4)]))){
var statearr_18692_20100 = state_18631;
(statearr_18692_20100[(1)] = cljs.core.first((state_18631[(4)])));

} else {
throw ex__15708__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20103 = state_18631;
state_18631 = G__20103;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$state_machine__15705__auto__ = function(state_18631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15705__auto____1.call(this,state_18631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15705__auto____0;
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15705__auto____1;
return cljs$core$async$state_machine__15705__auto__;
})()
})();
var state__15890__auto__ = (function (){var statearr_18694 = f__15889__auto__();
(statearr_18694[(6)] = c__15888__auto___20039);

return statearr_18694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15890__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__18700 = arguments.length;
switch (G__18700) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15888__auto___20110 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15889__auto__ = (function (){var switch__15704__auto__ = (function (state_18735){
var state_val_18736 = (state_18735[(1)]);
if((state_val_18736 === (7))){
var inst_18713 = (state_18735[(7)]);
var inst_18711 = (state_18735[(8)]);
var inst_18711__$1 = (state_18735[(2)]);
var inst_18713__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18711__$1,(0),null);
var inst_18714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18711__$1,(1),null);
var inst_18716 = (inst_18713__$1 == null);
var state_18735__$1 = (function (){var statearr_18737 = state_18735;
(statearr_18737[(9)] = inst_18714);

(statearr_18737[(7)] = inst_18713__$1);

(statearr_18737[(8)] = inst_18711__$1);

return statearr_18737;
})();
if(cljs.core.truth_(inst_18716)){
var statearr_18738_20114 = state_18735__$1;
(statearr_18738_20114[(1)] = (8));

} else {
var statearr_18739_20115 = state_18735__$1;
(statearr_18739_20115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18736 === (1))){
var inst_18701 = cljs.core.vec(chs);
var inst_18702 = inst_18701;
var state_18735__$1 = (function (){var statearr_18741 = state_18735;
(statearr_18741[(10)] = inst_18702);

return statearr_18741;
})();
var statearr_18742_20120 = state_18735__$1;
(statearr_18742_20120[(2)] = null);

(statearr_18742_20120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18736 === (4))){
var inst_18702 = (state_18735[(10)]);
var state_18735__$1 = state_18735;
return cljs.core.async.ioc_alts_BANG_(state_18735__$1,(7),inst_18702);
} else {
if((state_val_18736 === (6))){
var inst_18731 = (state_18735[(2)]);
var state_18735__$1 = state_18735;
var statearr_18743_20127 = state_18735__$1;
(statearr_18743_20127[(2)] = inst_18731);

(statearr_18743_20127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18736 === (3))){
var inst_18733 = (state_18735[(2)]);
var state_18735__$1 = state_18735;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18735__$1,inst_18733);
} else {
if((state_val_18736 === (2))){
var inst_18702 = (state_18735[(10)]);
var inst_18704 = cljs.core.count(inst_18702);
var inst_18705 = (inst_18704 > (0));
var state_18735__$1 = state_18735;
if(cljs.core.truth_(inst_18705)){
var statearr_18745_20132 = state_18735__$1;
(statearr_18745_20132[(1)] = (4));

} else {
var statearr_18746_20134 = state_18735__$1;
(statearr_18746_20134[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18736 === (11))){
var inst_18702 = (state_18735[(10)]);
var inst_18724 = (state_18735[(2)]);
var tmp18744 = inst_18702;
var inst_18702__$1 = tmp18744;
var state_18735__$1 = (function (){var statearr_18747 = state_18735;
(statearr_18747[(10)] = inst_18702__$1);

(statearr_18747[(11)] = inst_18724);

return statearr_18747;
})();
var statearr_18749_20138 = state_18735__$1;
(statearr_18749_20138[(2)] = null);

(statearr_18749_20138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18736 === (9))){
var inst_18713 = (state_18735[(7)]);
var state_18735__$1 = state_18735;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18735__$1,(11),out,inst_18713);
} else {
if((state_val_18736 === (5))){
var inst_18729 = cljs.core.async.close_BANG_(out);
var state_18735__$1 = state_18735;
var statearr_18751_20142 = state_18735__$1;
(statearr_18751_20142[(2)] = inst_18729);

(statearr_18751_20142[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18736 === (10))){
var inst_18727 = (state_18735[(2)]);
var state_18735__$1 = state_18735;
var statearr_18752_20144 = state_18735__$1;
(statearr_18752_20144[(2)] = inst_18727);

(statearr_18752_20144[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18736 === (8))){
var inst_18714 = (state_18735[(9)]);
var inst_18702 = (state_18735[(10)]);
var inst_18713 = (state_18735[(7)]);
var inst_18711 = (state_18735[(8)]);
var inst_18718 = (function (){var cs = inst_18702;
var vec__18707 = inst_18711;
var v = inst_18713;
var c = inst_18714;
return (function (p1__18695_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18695_SHARP_);
});
})();
var inst_18720 = cljs.core.filterv(inst_18718,inst_18702);
var inst_18702__$1 = inst_18720;
var state_18735__$1 = (function (){var statearr_18754 = state_18735;
(statearr_18754[(10)] = inst_18702__$1);

return statearr_18754;
})();
var statearr_18755_20154 = state_18735__$1;
(statearr_18755_20154[(2)] = null);

(statearr_18755_20154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15705__auto__ = null;
var cljs$core$async$state_machine__15705__auto____0 = (function (){
var statearr_18757 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18757[(0)] = cljs$core$async$state_machine__15705__auto__);

(statearr_18757[(1)] = (1));

return statearr_18757;
});
var cljs$core$async$state_machine__15705__auto____1 = (function (state_18735){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__(state_18735);
if(cljs.core.keyword_identical_QMARK_(result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e18758){var ex__15708__auto__ = e18758;
var statearr_18759_20166 = state_18735;
(statearr_18759_20166[(2)] = ex__15708__auto__);


if(cljs.core.seq((state_18735[(4)]))){
var statearr_18760_20168 = state_18735;
(statearr_18760_20168[(1)] = cljs.core.first((state_18735[(4)])));

} else {
throw ex__15708__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20172 = state_18735;
state_18735 = G__20172;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$state_machine__15705__auto__ = function(state_18735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15705__auto____1.call(this,state_18735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15705__auto____0;
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15705__auto____1;
return cljs$core$async$state_machine__15705__auto__;
})()
})();
var state__15890__auto__ = (function (){var statearr_18761 = f__15889__auto__();
(statearr_18761[(6)] = c__15888__auto___20110);

return statearr_18761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15890__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__18765 = arguments.length;
switch (G__18765) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15888__auto___20174 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15889__auto__ = (function (){var switch__15704__auto__ = (function (state_18792){
var state_val_18793 = (state_18792[(1)]);
if((state_val_18793 === (7))){
var inst_18773 = (state_18792[(7)]);
var inst_18773__$1 = (state_18792[(2)]);
var inst_18774 = (inst_18773__$1 == null);
var inst_18775 = cljs.core.not(inst_18774);
var state_18792__$1 = (function (){var statearr_18797 = state_18792;
(statearr_18797[(7)] = inst_18773__$1);

return statearr_18797;
})();
if(inst_18775){
var statearr_18798_20175 = state_18792__$1;
(statearr_18798_20175[(1)] = (8));

} else {
var statearr_18799_20176 = state_18792__$1;
(statearr_18799_20176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18793 === (1))){
var inst_18767 = (0);
var state_18792__$1 = (function (){var statearr_18800 = state_18792;
(statearr_18800[(8)] = inst_18767);

return statearr_18800;
})();
var statearr_18801_20177 = state_18792__$1;
(statearr_18801_20177[(2)] = null);

(statearr_18801_20177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18793 === (4))){
var state_18792__$1 = state_18792;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18792__$1,(7),ch);
} else {
if((state_val_18793 === (6))){
var inst_18787 = (state_18792[(2)]);
var state_18792__$1 = state_18792;
var statearr_18805_20178 = state_18792__$1;
(statearr_18805_20178[(2)] = inst_18787);

(statearr_18805_20178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18793 === (3))){
var inst_18789 = (state_18792[(2)]);
var inst_18790 = cljs.core.async.close_BANG_(out);
var state_18792__$1 = (function (){var statearr_18809 = state_18792;
(statearr_18809[(9)] = inst_18789);

return statearr_18809;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18792__$1,inst_18790);
} else {
if((state_val_18793 === (2))){
var inst_18767 = (state_18792[(8)]);
var inst_18769 = (inst_18767 < n);
var state_18792__$1 = state_18792;
if(cljs.core.truth_(inst_18769)){
var statearr_18811_20181 = state_18792__$1;
(statearr_18811_20181[(1)] = (4));

} else {
var statearr_18812_20182 = state_18792__$1;
(statearr_18812_20182[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18793 === (11))){
var inst_18767 = (state_18792[(8)]);
var inst_18779 = (state_18792[(2)]);
var inst_18780 = (inst_18767 + (1));
var inst_18767__$1 = inst_18780;
var state_18792__$1 = (function (){var statearr_18816 = state_18792;
(statearr_18816[(10)] = inst_18779);

(statearr_18816[(8)] = inst_18767__$1);

return statearr_18816;
})();
var statearr_18817_20183 = state_18792__$1;
(statearr_18817_20183[(2)] = null);

(statearr_18817_20183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18793 === (9))){
var state_18792__$1 = state_18792;
var statearr_18818_20184 = state_18792__$1;
(statearr_18818_20184[(2)] = null);

(statearr_18818_20184[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18793 === (5))){
var state_18792__$1 = state_18792;
var statearr_18819_20186 = state_18792__$1;
(statearr_18819_20186[(2)] = null);

(statearr_18819_20186[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18793 === (10))){
var inst_18784 = (state_18792[(2)]);
var state_18792__$1 = state_18792;
var statearr_18821_20190 = state_18792__$1;
(statearr_18821_20190[(2)] = inst_18784);

(statearr_18821_20190[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18793 === (8))){
var inst_18773 = (state_18792[(7)]);
var state_18792__$1 = state_18792;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18792__$1,(11),out,inst_18773);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15705__auto__ = null;
var cljs$core$async$state_machine__15705__auto____0 = (function (){
var statearr_18822 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18822[(0)] = cljs$core$async$state_machine__15705__auto__);

(statearr_18822[(1)] = (1));

return statearr_18822;
});
var cljs$core$async$state_machine__15705__auto____1 = (function (state_18792){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__(state_18792);
if(cljs.core.keyword_identical_QMARK_(result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e18823){var ex__15708__auto__ = e18823;
var statearr_18824_20193 = state_18792;
(statearr_18824_20193[(2)] = ex__15708__auto__);


if(cljs.core.seq((state_18792[(4)]))){
var statearr_18825_20194 = state_18792;
(statearr_18825_20194[(1)] = cljs.core.first((state_18792[(4)])));

} else {
throw ex__15708__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20195 = state_18792;
state_18792 = G__20195;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$state_machine__15705__auto__ = function(state_18792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15705__auto____1.call(this,state_18792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15705__auto____0;
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15705__auto____1;
return cljs$core$async$state_machine__15705__auto__;
})()
})();
var state__15890__auto__ = (function (){var statearr_18826 = f__15889__auto__();
(statearr_18826[(6)] = c__15888__auto___20174);

return statearr_18826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15890__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18835 = (function (f,ch,meta18831,_,fn1,meta18836){
this.f = f;
this.ch = ch;
this.meta18831 = meta18831;
this._ = _;
this.fn1 = fn1;
this.meta18836 = meta18836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18837,meta18836__$1){
var self__ = this;
var _18837__$1 = this;
return (new cljs.core.async.t_cljs$core$async18835(self__.f,self__.ch,self__.meta18831,self__._,self__.fn1,meta18836__$1));
}));

(cljs.core.async.t_cljs$core$async18835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18837){
var self__ = this;
var _18837__$1 = this;
return self__.meta18836;
}));

(cljs.core.async.t_cljs$core$async18835.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18835.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async18835.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18835.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__18829_SHARP_){
var G__18845 = (((p1__18829_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18829_SHARP_) : self__.f.call(null,p1__18829_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18845) : f1.call(null,G__18845));
});
}));

(cljs.core.async.t_cljs$core$async18835.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18831","meta18831",2050788903,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18830","cljs.core.async/t_cljs$core$async18830",1194812636,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18836","meta18836",-1684339758,null)], null);
}));

(cljs.core.async.t_cljs$core$async18835.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18835.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18835");

(cljs.core.async.t_cljs$core$async18835.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18835");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18835.
 */
cljs.core.async.__GT_t_cljs$core$async18835 = (function cljs$core$async$__GT_t_cljs$core$async18835(f,ch,meta18831,_,fn1,meta18836){
return (new cljs.core.async.t_cljs$core$async18835(f,ch,meta18831,_,fn1,meta18836));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18830 = (function (f,ch,meta18831){
this.f = f;
this.ch = ch;
this.meta18831 = meta18831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18832,meta18831__$1){
var self__ = this;
var _18832__$1 = this;
return (new cljs.core.async.t_cljs$core$async18830(self__.f,self__.ch,meta18831__$1));
}));

(cljs.core.async.t_cljs$core$async18830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18832){
var self__ = this;
var _18832__$1 = this;
return self__.meta18831;
}));

(cljs.core.async.t_cljs$core$async18830.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18830.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18830.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18830.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18830.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async18835(self__.f,self__.ch,self__.meta18831,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18850 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18850) : self__.f.call(null,G__18850));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async18830.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18830.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18830.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18831","meta18831",2050788903,null)], null);
}));

(cljs.core.async.t_cljs$core$async18830.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18830.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18830");

(cljs.core.async.t_cljs$core$async18830.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18830");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18830.
 */
cljs.core.async.__GT_t_cljs$core$async18830 = (function cljs$core$async$__GT_t_cljs$core$async18830(f,ch,meta18831){
return (new cljs.core.async.t_cljs$core$async18830(f,ch,meta18831));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18830(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18865 = (function (f,ch,meta18866){
this.f = f;
this.ch = ch;
this.meta18866 = meta18866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18867,meta18866__$1){
var self__ = this;
var _18867__$1 = this;
return (new cljs.core.async.t_cljs$core$async18865(self__.f,self__.ch,meta18866__$1));
}));

(cljs.core.async.t_cljs$core$async18865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18867){
var self__ = this;
var _18867__$1 = this;
return self__.meta18866;
}));

(cljs.core.async.t_cljs$core$async18865.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18865.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18865.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18865.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18865.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18865.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async18865.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18866","meta18866",25739577,null)], null);
}));

(cljs.core.async.t_cljs$core$async18865.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18865");

(cljs.core.async.t_cljs$core$async18865.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18865");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18865.
 */
cljs.core.async.__GT_t_cljs$core$async18865 = (function cljs$core$async$__GT_t_cljs$core$async18865(f,ch,meta18866){
return (new cljs.core.async.t_cljs$core$async18865(f,ch,meta18866));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18865(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18874 = (function (p,ch,meta18875){
this.p = p;
this.ch = ch;
this.meta18875 = meta18875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18876,meta18875__$1){
var self__ = this;
var _18876__$1 = this;
return (new cljs.core.async.t_cljs$core$async18874(self__.p,self__.ch,meta18875__$1));
}));

(cljs.core.async.t_cljs$core$async18874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18876){
var self__ = this;
var _18876__$1 = this;
return self__.meta18875;
}));

(cljs.core.async.t_cljs$core$async18874.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18874.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18874.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18874.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18874.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18874.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18874.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async18874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18875","meta18875",-943520119,null)], null);
}));

(cljs.core.async.t_cljs$core$async18874.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18874");

(cljs.core.async.t_cljs$core$async18874.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18874");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18874.
 */
cljs.core.async.__GT_t_cljs$core$async18874 = (function cljs$core$async$__GT_t_cljs$core$async18874(p,ch,meta18875){
return (new cljs.core.async.t_cljs$core$async18874(p,ch,meta18875));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async18874(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__18882 = arguments.length;
switch (G__18882) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15888__auto___20216 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15889__auto__ = (function (){var switch__15704__auto__ = (function (state_18903){
var state_val_18904 = (state_18903[(1)]);
if((state_val_18904 === (7))){
var inst_18899 = (state_18903[(2)]);
var state_18903__$1 = state_18903;
var statearr_18906_20220 = state_18903__$1;
(statearr_18906_20220[(2)] = inst_18899);

(statearr_18906_20220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18904 === (1))){
var state_18903__$1 = state_18903;
var statearr_18907_20221 = state_18903__$1;
(statearr_18907_20221[(2)] = null);

(statearr_18907_20221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18904 === (4))){
var inst_18885 = (state_18903[(7)]);
var inst_18885__$1 = (state_18903[(2)]);
var inst_18886 = (inst_18885__$1 == null);
var state_18903__$1 = (function (){var statearr_18908 = state_18903;
(statearr_18908[(7)] = inst_18885__$1);

return statearr_18908;
})();
if(cljs.core.truth_(inst_18886)){
var statearr_18909_20223 = state_18903__$1;
(statearr_18909_20223[(1)] = (5));

} else {
var statearr_18910_20224 = state_18903__$1;
(statearr_18910_20224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18904 === (6))){
var inst_18885 = (state_18903[(7)]);
var inst_18890 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18885) : p.call(null,inst_18885));
var state_18903__$1 = state_18903;
if(cljs.core.truth_(inst_18890)){
var statearr_18911_20228 = state_18903__$1;
(statearr_18911_20228[(1)] = (8));

} else {
var statearr_18912_20229 = state_18903__$1;
(statearr_18912_20229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18904 === (3))){
var inst_18901 = (state_18903[(2)]);
var state_18903__$1 = state_18903;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18903__$1,inst_18901);
} else {
if((state_val_18904 === (2))){
var state_18903__$1 = state_18903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18903__$1,(4),ch);
} else {
if((state_val_18904 === (11))){
var inst_18893 = (state_18903[(2)]);
var state_18903__$1 = state_18903;
var statearr_18914_20230 = state_18903__$1;
(statearr_18914_20230[(2)] = inst_18893);

(statearr_18914_20230[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18904 === (9))){
var state_18903__$1 = state_18903;
var statearr_18915_20231 = state_18903__$1;
(statearr_18915_20231[(2)] = null);

(statearr_18915_20231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18904 === (5))){
var inst_18888 = cljs.core.async.close_BANG_(out);
var state_18903__$1 = state_18903;
var statearr_18916_20232 = state_18903__$1;
(statearr_18916_20232[(2)] = inst_18888);

(statearr_18916_20232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18904 === (10))){
var inst_18896 = (state_18903[(2)]);
var state_18903__$1 = (function (){var statearr_18917 = state_18903;
(statearr_18917[(8)] = inst_18896);

return statearr_18917;
})();
var statearr_18918_20233 = state_18903__$1;
(statearr_18918_20233[(2)] = null);

(statearr_18918_20233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18904 === (8))){
var inst_18885 = (state_18903[(7)]);
var state_18903__$1 = state_18903;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18903__$1,(11),out,inst_18885);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15705__auto__ = null;
var cljs$core$async$state_machine__15705__auto____0 = (function (){
var statearr_18920 = [null,null,null,null,null,null,null,null,null];
(statearr_18920[(0)] = cljs$core$async$state_machine__15705__auto__);

(statearr_18920[(1)] = (1));

return statearr_18920;
});
var cljs$core$async$state_machine__15705__auto____1 = (function (state_18903){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__(state_18903);
if(cljs.core.keyword_identical_QMARK_(result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e18921){var ex__15708__auto__ = e18921;
var statearr_18922_20234 = state_18903;
(statearr_18922_20234[(2)] = ex__15708__auto__);


if(cljs.core.seq((state_18903[(4)]))){
var statearr_18923_20235 = state_18903;
(statearr_18923_20235[(1)] = cljs.core.first((state_18903[(4)])));

} else {
throw ex__15708__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20236 = state_18903;
state_18903 = G__20236;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$state_machine__15705__auto__ = function(state_18903){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15705__auto____1.call(this,state_18903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15705__auto____0;
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15705__auto____1;
return cljs$core$async$state_machine__15705__auto__;
})()
})();
var state__15890__auto__ = (function (){var statearr_18924 = f__15889__auto__();
(statearr_18924[(6)] = c__15888__auto___20216);

return statearr_18924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15890__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18927 = arguments.length;
switch (G__18927) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15888__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15889__auto__ = (function (){var switch__15704__auto__ = (function (state_18991){
var state_val_18992 = (state_18991[(1)]);
if((state_val_18992 === (7))){
var inst_18986 = (state_18991[(2)]);
var state_18991__$1 = state_18991;
var statearr_18993_20238 = state_18991__$1;
(statearr_18993_20238[(2)] = inst_18986);

(statearr_18993_20238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (20))){
var inst_18956 = (state_18991[(7)]);
var inst_18967 = (state_18991[(2)]);
var inst_18968 = cljs.core.next(inst_18956);
var inst_18942 = inst_18968;
var inst_18943 = null;
var inst_18944 = (0);
var inst_18945 = (0);
var state_18991__$1 = (function (){var statearr_18994 = state_18991;
(statearr_18994[(8)] = inst_18943);

(statearr_18994[(9)] = inst_18944);

(statearr_18994[(10)] = inst_18945);

(statearr_18994[(11)] = inst_18967);

(statearr_18994[(12)] = inst_18942);

return statearr_18994;
})();
var statearr_18995_20239 = state_18991__$1;
(statearr_18995_20239[(2)] = null);

(statearr_18995_20239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (1))){
var state_18991__$1 = state_18991;
var statearr_18997_20240 = state_18991__$1;
(statearr_18997_20240[(2)] = null);

(statearr_18997_20240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (4))){
var inst_18931 = (state_18991[(13)]);
var inst_18931__$1 = (state_18991[(2)]);
var inst_18932 = (inst_18931__$1 == null);
var state_18991__$1 = (function (){var statearr_18998 = state_18991;
(statearr_18998[(13)] = inst_18931__$1);

return statearr_18998;
})();
if(cljs.core.truth_(inst_18932)){
var statearr_18999_20241 = state_18991__$1;
(statearr_18999_20241[(1)] = (5));

} else {
var statearr_19000_20242 = state_18991__$1;
(statearr_19000_20242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (15))){
var state_18991__$1 = state_18991;
var statearr_19004_20243 = state_18991__$1;
(statearr_19004_20243[(2)] = null);

(statearr_19004_20243[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (21))){
var state_18991__$1 = state_18991;
var statearr_19005_20245 = state_18991__$1;
(statearr_19005_20245[(2)] = null);

(statearr_19005_20245[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (13))){
var inst_18943 = (state_18991[(8)]);
var inst_18944 = (state_18991[(9)]);
var inst_18945 = (state_18991[(10)]);
var inst_18942 = (state_18991[(12)]);
var inst_18952 = (state_18991[(2)]);
var inst_18953 = (inst_18945 + (1));
var tmp19001 = inst_18943;
var tmp19002 = inst_18944;
var tmp19003 = inst_18942;
var inst_18942__$1 = tmp19003;
var inst_18943__$1 = tmp19001;
var inst_18944__$1 = tmp19002;
var inst_18945__$1 = inst_18953;
var state_18991__$1 = (function (){var statearr_19007 = state_18991;
(statearr_19007[(8)] = inst_18943__$1);

(statearr_19007[(9)] = inst_18944__$1);

(statearr_19007[(10)] = inst_18945__$1);

(statearr_19007[(12)] = inst_18942__$1);

(statearr_19007[(14)] = inst_18952);

return statearr_19007;
})();
var statearr_19008_20249 = state_18991__$1;
(statearr_19008_20249[(2)] = null);

(statearr_19008_20249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (22))){
var state_18991__$1 = state_18991;
var statearr_19009_20250 = state_18991__$1;
(statearr_19009_20250[(2)] = null);

(statearr_19009_20250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (6))){
var inst_18931 = (state_18991[(13)]);
var inst_18940 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18931) : f.call(null,inst_18931));
var inst_18941 = cljs.core.seq(inst_18940);
var inst_18942 = inst_18941;
var inst_18943 = null;
var inst_18944 = (0);
var inst_18945 = (0);
var state_18991__$1 = (function (){var statearr_19010 = state_18991;
(statearr_19010[(8)] = inst_18943);

(statearr_19010[(9)] = inst_18944);

(statearr_19010[(10)] = inst_18945);

(statearr_19010[(12)] = inst_18942);

return statearr_19010;
})();
var statearr_19011_20252 = state_18991__$1;
(statearr_19011_20252[(2)] = null);

(statearr_19011_20252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (17))){
var inst_18956 = (state_18991[(7)]);
var inst_18960 = cljs.core.chunk_first(inst_18956);
var inst_18961 = cljs.core.chunk_rest(inst_18956);
var inst_18962 = cljs.core.count(inst_18960);
var inst_18942 = inst_18961;
var inst_18943 = inst_18960;
var inst_18944 = inst_18962;
var inst_18945 = (0);
var state_18991__$1 = (function (){var statearr_19013 = state_18991;
(statearr_19013[(8)] = inst_18943);

(statearr_19013[(9)] = inst_18944);

(statearr_19013[(10)] = inst_18945);

(statearr_19013[(12)] = inst_18942);

return statearr_19013;
})();
var statearr_19014_20260 = state_18991__$1;
(statearr_19014_20260[(2)] = null);

(statearr_19014_20260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (3))){
var inst_18988 = (state_18991[(2)]);
var state_18991__$1 = state_18991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18991__$1,inst_18988);
} else {
if((state_val_18992 === (12))){
var inst_18976 = (state_18991[(2)]);
var state_18991__$1 = state_18991;
var statearr_19015_20261 = state_18991__$1;
(statearr_19015_20261[(2)] = inst_18976);

(statearr_19015_20261[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (2))){
var state_18991__$1 = state_18991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18991__$1,(4),in$);
} else {
if((state_val_18992 === (23))){
var inst_18984 = (state_18991[(2)]);
var state_18991__$1 = state_18991;
var statearr_19018_20262 = state_18991__$1;
(statearr_19018_20262[(2)] = inst_18984);

(statearr_19018_20262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (19))){
var inst_18971 = (state_18991[(2)]);
var state_18991__$1 = state_18991;
var statearr_19019_20263 = state_18991__$1;
(statearr_19019_20263[(2)] = inst_18971);

(statearr_19019_20263[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (11))){
var inst_18956 = (state_18991[(7)]);
var inst_18942 = (state_18991[(12)]);
var inst_18956__$1 = cljs.core.seq(inst_18942);
var state_18991__$1 = (function (){var statearr_19020 = state_18991;
(statearr_19020[(7)] = inst_18956__$1);

return statearr_19020;
})();
if(inst_18956__$1){
var statearr_19021_20264 = state_18991__$1;
(statearr_19021_20264[(1)] = (14));

} else {
var statearr_19022_20265 = state_18991__$1;
(statearr_19022_20265[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (9))){
var inst_18978 = (state_18991[(2)]);
var inst_18979 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18991__$1 = (function (){var statearr_19023 = state_18991;
(statearr_19023[(15)] = inst_18978);

return statearr_19023;
})();
if(cljs.core.truth_(inst_18979)){
var statearr_19024_20266 = state_18991__$1;
(statearr_19024_20266[(1)] = (21));

} else {
var statearr_19025_20267 = state_18991__$1;
(statearr_19025_20267[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (5))){
var inst_18934 = cljs.core.async.close_BANG_(out);
var state_18991__$1 = state_18991;
var statearr_19026_20268 = state_18991__$1;
(statearr_19026_20268[(2)] = inst_18934);

(statearr_19026_20268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (14))){
var inst_18956 = (state_18991[(7)]);
var inst_18958 = cljs.core.chunked_seq_QMARK_(inst_18956);
var state_18991__$1 = state_18991;
if(inst_18958){
var statearr_19029_20269 = state_18991__$1;
(statearr_19029_20269[(1)] = (17));

} else {
var statearr_19030_20270 = state_18991__$1;
(statearr_19030_20270[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (16))){
var inst_18974 = (state_18991[(2)]);
var state_18991__$1 = state_18991;
var statearr_19031_20271 = state_18991__$1;
(statearr_19031_20271[(2)] = inst_18974);

(statearr_19031_20271[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18992 === (10))){
var inst_18943 = (state_18991[(8)]);
var inst_18945 = (state_18991[(10)]);
var inst_18950 = cljs.core._nth(inst_18943,inst_18945);
var state_18991__$1 = state_18991;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18991__$1,(13),out,inst_18950);
} else {
if((state_val_18992 === (18))){
var inst_18956 = (state_18991[(7)]);
var inst_18965 = cljs.core.first(inst_18956);
var state_18991__$1 = state_18991;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18991__$1,(20),out,inst_18965);
} else {
if((state_val_18992 === (8))){
var inst_18944 = (state_18991[(9)]);
var inst_18945 = (state_18991[(10)]);
var inst_18947 = (inst_18945 < inst_18944);
var inst_18948 = inst_18947;
var state_18991__$1 = state_18991;
if(cljs.core.truth_(inst_18948)){
var statearr_19032_20273 = state_18991__$1;
(statearr_19032_20273[(1)] = (10));

} else {
var statearr_19033_20274 = state_18991__$1;
(statearr_19033_20274[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15705__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15705__auto____0 = (function (){
var statearr_19034 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19034[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15705__auto__);

(statearr_19034[(1)] = (1));

return statearr_19034;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15705__auto____1 = (function (state_18991){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__(state_18991);
if(cljs.core.keyword_identical_QMARK_(result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e19035){var ex__15708__auto__ = e19035;
var statearr_19036_20277 = state_18991;
(statearr_19036_20277[(2)] = ex__15708__auto__);


if(cljs.core.seq((state_18991[(4)]))){
var statearr_19037_20278 = state_18991;
(statearr_19037_20278[(1)] = cljs.core.first((state_18991[(4)])));

} else {
throw ex__15708__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20279 = state_18991;
state_18991 = G__20279;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15705__auto__ = function(state_18991){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15705__auto____1.call(this,state_18991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15705__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15705__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15705__auto__;
})()
})();
var state__15890__auto__ = (function (){var statearr_19040 = f__15889__auto__();
(statearr_19040[(6)] = c__15888__auto__);

return statearr_19040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15890__auto__);
}));

return c__15888__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19042 = arguments.length;
switch (G__19042) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19044 = arguments.length;
switch (G__19044) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19050 = arguments.length;
switch (G__19050) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15888__auto___20286 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15889__auto__ = (function (){var switch__15704__auto__ = (function (state_19082){
var state_val_19083 = (state_19082[(1)]);
if((state_val_19083 === (7))){
var inst_19075 = (state_19082[(2)]);
var state_19082__$1 = state_19082;
var statearr_19089_20291 = state_19082__$1;
(statearr_19089_20291[(2)] = inst_19075);

(statearr_19089_20291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19083 === (1))){
var inst_19056 = null;
var state_19082__$1 = (function (){var statearr_19091 = state_19082;
(statearr_19091[(7)] = inst_19056);

return statearr_19091;
})();
var statearr_19092_20292 = state_19082__$1;
(statearr_19092_20292[(2)] = null);

(statearr_19092_20292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19083 === (4))){
var inst_19059 = (state_19082[(8)]);
var inst_19059__$1 = (state_19082[(2)]);
var inst_19060 = (inst_19059__$1 == null);
var inst_19061 = cljs.core.not(inst_19060);
var state_19082__$1 = (function (){var statearr_19096 = state_19082;
(statearr_19096[(8)] = inst_19059__$1);

return statearr_19096;
})();
if(inst_19061){
var statearr_19098_20294 = state_19082__$1;
(statearr_19098_20294[(1)] = (5));

} else {
var statearr_19099_20295 = state_19082__$1;
(statearr_19099_20295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19083 === (6))){
var state_19082__$1 = state_19082;
var statearr_19102_20296 = state_19082__$1;
(statearr_19102_20296[(2)] = null);

(statearr_19102_20296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19083 === (3))){
var inst_19077 = (state_19082[(2)]);
var inst_19078 = cljs.core.async.close_BANG_(out);
var state_19082__$1 = (function (){var statearr_19105 = state_19082;
(statearr_19105[(9)] = inst_19077);

return statearr_19105;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19082__$1,inst_19078);
} else {
if((state_val_19083 === (2))){
var state_19082__$1 = state_19082;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19082__$1,(4),ch);
} else {
if((state_val_19083 === (11))){
var inst_19059 = (state_19082[(8)]);
var inst_19069 = (state_19082[(2)]);
var inst_19056 = inst_19059;
var state_19082__$1 = (function (){var statearr_19109 = state_19082;
(statearr_19109[(7)] = inst_19056);

(statearr_19109[(10)] = inst_19069);

return statearr_19109;
})();
var statearr_19111_20297 = state_19082__$1;
(statearr_19111_20297[(2)] = null);

(statearr_19111_20297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19083 === (9))){
var inst_19059 = (state_19082[(8)]);
var state_19082__$1 = state_19082;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19082__$1,(11),out,inst_19059);
} else {
if((state_val_19083 === (5))){
var inst_19056 = (state_19082[(7)]);
var inst_19059 = (state_19082[(8)]);
var inst_19064 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19059,inst_19056);
var state_19082__$1 = state_19082;
if(inst_19064){
var statearr_19117_20298 = state_19082__$1;
(statearr_19117_20298[(1)] = (8));

} else {
var statearr_19118_20300 = state_19082__$1;
(statearr_19118_20300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19083 === (10))){
var inst_19072 = (state_19082[(2)]);
var state_19082__$1 = state_19082;
var statearr_19122_20301 = state_19082__$1;
(statearr_19122_20301[(2)] = inst_19072);

(statearr_19122_20301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19083 === (8))){
var inst_19056 = (state_19082[(7)]);
var tmp19115 = inst_19056;
var inst_19056__$1 = tmp19115;
var state_19082__$1 = (function (){var statearr_19123 = state_19082;
(statearr_19123[(7)] = inst_19056__$1);

return statearr_19123;
})();
var statearr_19125_20302 = state_19082__$1;
(statearr_19125_20302[(2)] = null);

(statearr_19125_20302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15705__auto__ = null;
var cljs$core$async$state_machine__15705__auto____0 = (function (){
var statearr_19129 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19129[(0)] = cljs$core$async$state_machine__15705__auto__);

(statearr_19129[(1)] = (1));

return statearr_19129;
});
var cljs$core$async$state_machine__15705__auto____1 = (function (state_19082){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__(state_19082);
if(cljs.core.keyword_identical_QMARK_(result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e19132){var ex__15708__auto__ = e19132;
var statearr_19135_20310 = state_19082;
(statearr_19135_20310[(2)] = ex__15708__auto__);


if(cljs.core.seq((state_19082[(4)]))){
var statearr_19136_20311 = state_19082;
(statearr_19136_20311[(1)] = cljs.core.first((state_19082[(4)])));

} else {
throw ex__15708__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20312 = state_19082;
state_19082 = G__20312;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$state_machine__15705__auto__ = function(state_19082){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15705__auto____1.call(this,state_19082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15705__auto____0;
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15705__auto____1;
return cljs$core$async$state_machine__15705__auto__;
})()
})();
var state__15890__auto__ = (function (){var statearr_19141 = f__15889__auto__();
(statearr_19141[(6)] = c__15888__auto___20286);

return statearr_19141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15890__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19147 = arguments.length;
switch (G__19147) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15888__auto___20317 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15889__auto__ = (function (){var switch__15704__auto__ = (function (state_19201){
var state_val_19202 = (state_19201[(1)]);
if((state_val_19202 === (7))){
var inst_19194 = (state_19201[(2)]);
var state_19201__$1 = state_19201;
var statearr_19206_20318 = state_19201__$1;
(statearr_19206_20318[(2)] = inst_19194);

(statearr_19206_20318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19202 === (1))){
var inst_19156 = (new Array(n));
var inst_19157 = inst_19156;
var inst_19158 = (0);
var state_19201__$1 = (function (){var statearr_19208 = state_19201;
(statearr_19208[(7)] = inst_19157);

(statearr_19208[(8)] = inst_19158);

return statearr_19208;
})();
var statearr_19210_20319 = state_19201__$1;
(statearr_19210_20319[(2)] = null);

(statearr_19210_20319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19202 === (4))){
var inst_19161 = (state_19201[(9)]);
var inst_19161__$1 = (state_19201[(2)]);
var inst_19163 = (inst_19161__$1 == null);
var inst_19164 = cljs.core.not(inst_19163);
var state_19201__$1 = (function (){var statearr_19214 = state_19201;
(statearr_19214[(9)] = inst_19161__$1);

return statearr_19214;
})();
if(inst_19164){
var statearr_19215_20320 = state_19201__$1;
(statearr_19215_20320[(1)] = (5));

} else {
var statearr_19216_20321 = state_19201__$1;
(statearr_19216_20321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19202 === (15))){
var inst_19188 = (state_19201[(2)]);
var state_19201__$1 = state_19201;
var statearr_19226_20322 = state_19201__$1;
(statearr_19226_20322[(2)] = inst_19188);

(statearr_19226_20322[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19202 === (13))){
var state_19201__$1 = state_19201;
var statearr_19230_20324 = state_19201__$1;
(statearr_19230_20324[(2)] = null);

(statearr_19230_20324[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19202 === (6))){
var inst_19158 = (state_19201[(8)]);
var inst_19184 = (inst_19158 > (0));
var state_19201__$1 = state_19201;
if(cljs.core.truth_(inst_19184)){
var statearr_19231_20325 = state_19201__$1;
(statearr_19231_20325[(1)] = (12));

} else {
var statearr_19233_20326 = state_19201__$1;
(statearr_19233_20326[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19202 === (3))){
var inst_19196 = (state_19201[(2)]);
var state_19201__$1 = state_19201;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19201__$1,inst_19196);
} else {
if((state_val_19202 === (12))){
var inst_19157 = (state_19201[(7)]);
var inst_19186 = cljs.core.vec(inst_19157);
var state_19201__$1 = state_19201;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19201__$1,(15),out,inst_19186);
} else {
if((state_val_19202 === (2))){
var state_19201__$1 = state_19201;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19201__$1,(4),ch);
} else {
if((state_val_19202 === (11))){
var inst_19177 = (state_19201[(2)]);
var inst_19178 = (new Array(n));
var inst_19157 = inst_19178;
var inst_19158 = (0);
var state_19201__$1 = (function (){var statearr_19238 = state_19201;
(statearr_19238[(10)] = inst_19177);

(statearr_19238[(7)] = inst_19157);

(statearr_19238[(8)] = inst_19158);

return statearr_19238;
})();
var statearr_19240_20327 = state_19201__$1;
(statearr_19240_20327[(2)] = null);

(statearr_19240_20327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19202 === (9))){
var inst_19157 = (state_19201[(7)]);
var inst_19175 = cljs.core.vec(inst_19157);
var state_19201__$1 = state_19201;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19201__$1,(11),out,inst_19175);
} else {
if((state_val_19202 === (5))){
var inst_19167 = (state_19201[(11)]);
var inst_19157 = (state_19201[(7)]);
var inst_19158 = (state_19201[(8)]);
var inst_19161 = (state_19201[(9)]);
var inst_19166 = (inst_19157[inst_19158] = inst_19161);
var inst_19167__$1 = (inst_19158 + (1));
var inst_19169 = (inst_19167__$1 < n);
var state_19201__$1 = (function (){var statearr_19244 = state_19201;
(statearr_19244[(11)] = inst_19167__$1);

(statearr_19244[(12)] = inst_19166);

return statearr_19244;
})();
if(cljs.core.truth_(inst_19169)){
var statearr_19245_20328 = state_19201__$1;
(statearr_19245_20328[(1)] = (8));

} else {
var statearr_19246_20329 = state_19201__$1;
(statearr_19246_20329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19202 === (14))){
var inst_19191 = (state_19201[(2)]);
var inst_19192 = cljs.core.async.close_BANG_(out);
var state_19201__$1 = (function (){var statearr_19251 = state_19201;
(statearr_19251[(13)] = inst_19191);

return statearr_19251;
})();
var statearr_19252_20330 = state_19201__$1;
(statearr_19252_20330[(2)] = inst_19192);

(statearr_19252_20330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19202 === (10))){
var inst_19181 = (state_19201[(2)]);
var state_19201__$1 = state_19201;
var statearr_19254_20331 = state_19201__$1;
(statearr_19254_20331[(2)] = inst_19181);

(statearr_19254_20331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19202 === (8))){
var inst_19167 = (state_19201[(11)]);
var inst_19157 = (state_19201[(7)]);
var tmp19249 = inst_19157;
var inst_19157__$1 = tmp19249;
var inst_19158 = inst_19167;
var state_19201__$1 = (function (){var statearr_19255 = state_19201;
(statearr_19255[(7)] = inst_19157__$1);

(statearr_19255[(8)] = inst_19158);

return statearr_19255;
})();
var statearr_19256_20333 = state_19201__$1;
(statearr_19256_20333[(2)] = null);

(statearr_19256_20333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15705__auto__ = null;
var cljs$core$async$state_machine__15705__auto____0 = (function (){
var statearr_19260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19260[(0)] = cljs$core$async$state_machine__15705__auto__);

(statearr_19260[(1)] = (1));

return statearr_19260;
});
var cljs$core$async$state_machine__15705__auto____1 = (function (state_19201){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__(state_19201);
if(cljs.core.keyword_identical_QMARK_(result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e19262){var ex__15708__auto__ = e19262;
var statearr_19263_20336 = state_19201;
(statearr_19263_20336[(2)] = ex__15708__auto__);


if(cljs.core.seq((state_19201[(4)]))){
var statearr_19264_20337 = state_19201;
(statearr_19264_20337[(1)] = cljs.core.first((state_19201[(4)])));

} else {
throw ex__15708__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20341 = state_19201;
state_19201 = G__20341;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$state_machine__15705__auto__ = function(state_19201){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15705__auto____1.call(this,state_19201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15705__auto____0;
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15705__auto____1;
return cljs$core$async$state_machine__15705__auto__;
})()
})();
var state__15890__auto__ = (function (){var statearr_19269 = f__15889__auto__();
(statearr_19269[(6)] = c__15888__auto___20317);

return statearr_19269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15890__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19280 = arguments.length;
switch (G__19280) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15888__auto___20344 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15889__auto__ = (function (){var switch__15704__auto__ = (function (state_19338){
var state_val_19340 = (state_19338[(1)]);
if((state_val_19340 === (7))){
var inst_19334 = (state_19338[(2)]);
var state_19338__$1 = state_19338;
var statearr_19345_20345 = state_19338__$1;
(statearr_19345_20345[(2)] = inst_19334);

(statearr_19345_20345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19340 === (1))){
var inst_19289 = [];
var inst_19290 = inst_19289;
var inst_19291 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19338__$1 = (function (){var statearr_19348 = state_19338;
(statearr_19348[(7)] = inst_19290);

(statearr_19348[(8)] = inst_19291);

return statearr_19348;
})();
var statearr_19350_20346 = state_19338__$1;
(statearr_19350_20346[(2)] = null);

(statearr_19350_20346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19340 === (4))){
var inst_19295 = (state_19338[(9)]);
var inst_19295__$1 = (state_19338[(2)]);
var inst_19296 = (inst_19295__$1 == null);
var inst_19297 = cljs.core.not(inst_19296);
var state_19338__$1 = (function (){var statearr_19352 = state_19338;
(statearr_19352[(9)] = inst_19295__$1);

return statearr_19352;
})();
if(inst_19297){
var statearr_19353_20347 = state_19338__$1;
(statearr_19353_20347[(1)] = (5));

} else {
var statearr_19354_20348 = state_19338__$1;
(statearr_19354_20348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19340 === (15))){
var inst_19290 = (state_19338[(7)]);
var inst_19326 = cljs.core.vec(inst_19290);
var state_19338__$1 = state_19338;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19338__$1,(18),out,inst_19326);
} else {
if((state_val_19340 === (13))){
var inst_19320 = (state_19338[(2)]);
var state_19338__$1 = state_19338;
var statearr_19359_20349 = state_19338__$1;
(statearr_19359_20349[(2)] = inst_19320);

(statearr_19359_20349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19340 === (6))){
var inst_19290 = (state_19338[(7)]);
var inst_19322 = inst_19290.length;
var inst_19323 = (inst_19322 > (0));
var state_19338__$1 = state_19338;
if(cljs.core.truth_(inst_19323)){
var statearr_19363_20350 = state_19338__$1;
(statearr_19363_20350[(1)] = (15));

} else {
var statearr_19364_20351 = state_19338__$1;
(statearr_19364_20351[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19340 === (17))){
var inst_19331 = (state_19338[(2)]);
var inst_19332 = cljs.core.async.close_BANG_(out);
var state_19338__$1 = (function (){var statearr_19366 = state_19338;
(statearr_19366[(10)] = inst_19331);

return statearr_19366;
})();
var statearr_19367_20352 = state_19338__$1;
(statearr_19367_20352[(2)] = inst_19332);

(statearr_19367_20352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19340 === (3))){
var inst_19336 = (state_19338[(2)]);
var state_19338__$1 = state_19338;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19338__$1,inst_19336);
} else {
if((state_val_19340 === (12))){
var inst_19290 = (state_19338[(7)]);
var inst_19313 = cljs.core.vec(inst_19290);
var state_19338__$1 = state_19338;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19338__$1,(14),out,inst_19313);
} else {
if((state_val_19340 === (2))){
var state_19338__$1 = state_19338;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19338__$1,(4),ch);
} else {
if((state_val_19340 === (11))){
var inst_19299 = (state_19338[(11)]);
var inst_19295 = (state_19338[(9)]);
var inst_19290 = (state_19338[(7)]);
var inst_19310 = inst_19290.push(inst_19295);
var tmp19371 = inst_19290;
var inst_19290__$1 = tmp19371;
var inst_19291 = inst_19299;
var state_19338__$1 = (function (){var statearr_19375 = state_19338;
(statearr_19375[(12)] = inst_19310);

(statearr_19375[(7)] = inst_19290__$1);

(statearr_19375[(8)] = inst_19291);

return statearr_19375;
})();
var statearr_19377_20357 = state_19338__$1;
(statearr_19377_20357[(2)] = null);

(statearr_19377_20357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19340 === (9))){
var inst_19291 = (state_19338[(8)]);
var inst_19305 = cljs.core.keyword_identical_QMARK_(inst_19291,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19338__$1 = state_19338;
var statearr_19379_20358 = state_19338__$1;
(statearr_19379_20358[(2)] = inst_19305);

(statearr_19379_20358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19340 === (5))){
var inst_19301 = (state_19338[(13)]);
var inst_19299 = (state_19338[(11)]);
var inst_19295 = (state_19338[(9)]);
var inst_19291 = (state_19338[(8)]);
var inst_19299__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19295) : f.call(null,inst_19295));
var inst_19301__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19299__$1,inst_19291);
var state_19338__$1 = (function (){var statearr_19384 = state_19338;
(statearr_19384[(13)] = inst_19301__$1);

(statearr_19384[(11)] = inst_19299__$1);

return statearr_19384;
})();
if(inst_19301__$1){
var statearr_19386_20359 = state_19338__$1;
(statearr_19386_20359[(1)] = (8));

} else {
var statearr_19387_20360 = state_19338__$1;
(statearr_19387_20360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19340 === (14))){
var inst_19299 = (state_19338[(11)]);
var inst_19295 = (state_19338[(9)]);
var inst_19315 = (state_19338[(2)]);
var inst_19316 = [];
var inst_19317 = inst_19316.push(inst_19295);
var inst_19290 = inst_19316;
var inst_19291 = inst_19299;
var state_19338__$1 = (function (){var statearr_19394 = state_19338;
(statearr_19394[(14)] = inst_19317);

(statearr_19394[(15)] = inst_19315);

(statearr_19394[(7)] = inst_19290);

(statearr_19394[(8)] = inst_19291);

return statearr_19394;
})();
var statearr_19395_20361 = state_19338__$1;
(statearr_19395_20361[(2)] = null);

(statearr_19395_20361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19340 === (16))){
var state_19338__$1 = state_19338;
var statearr_19397_20362 = state_19338__$1;
(statearr_19397_20362[(2)] = null);

(statearr_19397_20362[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19340 === (10))){
var inst_19307 = (state_19338[(2)]);
var state_19338__$1 = state_19338;
if(cljs.core.truth_(inst_19307)){
var statearr_19399_20363 = state_19338__$1;
(statearr_19399_20363[(1)] = (11));

} else {
var statearr_19402_20364 = state_19338__$1;
(statearr_19402_20364[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19340 === (18))){
var inst_19328 = (state_19338[(2)]);
var state_19338__$1 = state_19338;
var statearr_19403_20366 = state_19338__$1;
(statearr_19403_20366[(2)] = inst_19328);

(statearr_19403_20366[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19340 === (8))){
var inst_19301 = (state_19338[(13)]);
var state_19338__$1 = state_19338;
var statearr_19405_20370 = state_19338__$1;
(statearr_19405_20370[(2)] = inst_19301);

(statearr_19405_20370[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15705__auto__ = null;
var cljs$core$async$state_machine__15705__auto____0 = (function (){
var statearr_19409 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19409[(0)] = cljs$core$async$state_machine__15705__auto__);

(statearr_19409[(1)] = (1));

return statearr_19409;
});
var cljs$core$async$state_machine__15705__auto____1 = (function (state_19338){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__(state_19338);
if(cljs.core.keyword_identical_QMARK_(result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e19411){var ex__15708__auto__ = e19411;
var statearr_19412_20371 = state_19338;
(statearr_19412_20371[(2)] = ex__15708__auto__);


if(cljs.core.seq((state_19338[(4)]))){
var statearr_19413_20372 = state_19338;
(statearr_19413_20372[(1)] = cljs.core.first((state_19338[(4)])));

} else {
throw ex__15708__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20373 = state_19338;
state_19338 = G__20373;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
cljs$core$async$state_machine__15705__auto__ = function(state_19338){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15705__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15705__auto____1.call(this,state_19338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15705__auto____0;
cljs$core$async$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15705__auto____1;
return cljs$core$async$state_machine__15705__auto__;
})()
})();
var state__15890__auto__ = (function (){var statearr_19418 = f__15889__auto__();
(statearr_19418[(6)] = c__15888__auto___20344);

return statearr_19418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15890__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
