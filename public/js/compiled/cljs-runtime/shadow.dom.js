goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_20584 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_20584(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_20585 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_20585(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__19487 = coll;
var G__19488 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__19487,G__19488) : shadow.dom.lazy_native_coll_seq.call(null,G__19487,G__19488));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__19540 = arguments.length;
switch (G__19540) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__19550 = arguments.length;
switch (G__19550) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__19568 = arguments.length;
switch (G__19568) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__19587 = arguments.length;
switch (G__19587) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__19604 = arguments.length;
switch (G__19604) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__19623 = arguments.length;
switch (G__19623) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e19644){if((e19644 instanceof Object)){
var e = e19644;
return console.log("didnt support attachEvent",el,e);
} else {
throw e19644;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__19656 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__19657 = null;
var count__19658 = (0);
var i__19659 = (0);
while(true){
if((i__19659 < count__19658)){
var el = chunk__19657.cljs$core$IIndexed$_nth$arity$2(null,i__19659);
var handler_20596__$1 = ((function (seq__19656,chunk__19657,count__19658,i__19659,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__19656,chunk__19657,count__19658,i__19659,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_20596__$1);


var G__20598 = seq__19656;
var G__20599 = chunk__19657;
var G__20600 = count__19658;
var G__20601 = (i__19659 + (1));
seq__19656 = G__20598;
chunk__19657 = G__20599;
count__19658 = G__20600;
i__19659 = G__20601;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19656);
if(temp__5804__auto__){
var seq__19656__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19656__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19656__$1);
var G__20605 = cljs.core.chunk_rest(seq__19656__$1);
var G__20606 = c__5568__auto__;
var G__20607 = cljs.core.count(c__5568__auto__);
var G__20608 = (0);
seq__19656 = G__20605;
chunk__19657 = G__20606;
count__19658 = G__20607;
i__19659 = G__20608;
continue;
} else {
var el = cljs.core.first(seq__19656__$1);
var handler_20611__$1 = ((function (seq__19656,chunk__19657,count__19658,i__19659,el,seq__19656__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__19656,chunk__19657,count__19658,i__19659,el,seq__19656__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_20611__$1);


var G__20612 = cljs.core.next(seq__19656__$1);
var G__20613 = null;
var G__20614 = (0);
var G__20615 = (0);
seq__19656 = G__20612;
chunk__19657 = G__20613;
count__19658 = G__20614;
i__19659 = G__20615;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__19690 = arguments.length;
switch (G__19690) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__19712 = cljs.core.seq(events);
var chunk__19713 = null;
var count__19714 = (0);
var i__19715 = (0);
while(true){
if((i__19715 < count__19714)){
var vec__19725 = chunk__19713.cljs$core$IIndexed$_nth$arity$2(null,i__19715);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19725,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19725,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__20618 = seq__19712;
var G__20619 = chunk__19713;
var G__20620 = count__19714;
var G__20621 = (i__19715 + (1));
seq__19712 = G__20618;
chunk__19713 = G__20619;
count__19714 = G__20620;
i__19715 = G__20621;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19712);
if(temp__5804__auto__){
var seq__19712__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19712__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19712__$1);
var G__20624 = cljs.core.chunk_rest(seq__19712__$1);
var G__20625 = c__5568__auto__;
var G__20626 = cljs.core.count(c__5568__auto__);
var G__20627 = (0);
seq__19712 = G__20624;
chunk__19713 = G__20625;
count__19714 = G__20626;
i__19715 = G__20627;
continue;
} else {
var vec__19728 = cljs.core.first(seq__19712__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19728,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19728,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__20638 = cljs.core.next(seq__19712__$1);
var G__20639 = null;
var G__20640 = (0);
var G__20641 = (0);
seq__19712 = G__20638;
chunk__19713 = G__20639;
count__19714 = G__20640;
i__19715 = G__20641;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__19735 = cljs.core.seq(styles);
var chunk__19736 = null;
var count__19737 = (0);
var i__19738 = (0);
while(true){
if((i__19738 < count__19737)){
var vec__19755 = chunk__19736.cljs$core$IIndexed$_nth$arity$2(null,i__19738);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19755,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19755,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__20643 = seq__19735;
var G__20644 = chunk__19736;
var G__20645 = count__19737;
var G__20646 = (i__19738 + (1));
seq__19735 = G__20643;
chunk__19736 = G__20644;
count__19737 = G__20645;
i__19738 = G__20646;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19735);
if(temp__5804__auto__){
var seq__19735__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19735__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19735__$1);
var G__20647 = cljs.core.chunk_rest(seq__19735__$1);
var G__20648 = c__5568__auto__;
var G__20649 = cljs.core.count(c__5568__auto__);
var G__20650 = (0);
seq__19735 = G__20647;
chunk__19736 = G__20648;
count__19737 = G__20649;
i__19738 = G__20650;
continue;
} else {
var vec__19762 = cljs.core.first(seq__19735__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19762,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19762,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__20654 = cljs.core.next(seq__19735__$1);
var G__20655 = null;
var G__20656 = (0);
var G__20657 = (0);
seq__19735 = G__20654;
chunk__19736 = G__20655;
count__19737 = G__20656;
i__19738 = G__20657;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__19773_20659 = key;
var G__19773_20660__$1 = (((G__19773_20659 instanceof cljs.core.Keyword))?G__19773_20659.fqn:null);
switch (G__19773_20660__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_20664 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_20664,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_20664,"aria-");
}
})())){
el.setAttribute(ks_20664,value);
} else {
(el[ks_20664] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__19810){
var map__19811 = p__19810;
var map__19811__$1 = cljs.core.__destructure_map(map__19811);
var props = map__19811__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19811__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__19812 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19812,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19812,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19812,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__19817 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__19817,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__19817;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__19821 = arguments.length;
switch (G__19821) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__19828){
var vec__19829 = p__19828;
var seq__19830 = cljs.core.seq(vec__19829);
var first__19831 = cljs.core.first(seq__19830);
var seq__19830__$1 = cljs.core.next(seq__19830);
var nn = first__19831;
var first__19831__$1 = cljs.core.first(seq__19830__$1);
var seq__19830__$2 = cljs.core.next(seq__19830__$1);
var np = first__19831__$1;
var nc = seq__19830__$2;
var node = vec__19829;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19833 = nn;
var G__19834 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__19833,G__19834) : create_fn.call(null,G__19833,G__19834));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19838 = nn;
var G__19839 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__19838,G__19839) : create_fn.call(null,G__19838,G__19839));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__19845 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19845,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19845,(1),null);
var seq__19848_20668 = cljs.core.seq(node_children);
var chunk__19849_20669 = null;
var count__19850_20670 = (0);
var i__19851_20671 = (0);
while(true){
if((i__19851_20671 < count__19850_20670)){
var child_struct_20672 = chunk__19849_20669.cljs$core$IIndexed$_nth$arity$2(null,i__19851_20671);
var children_20673 = shadow.dom.dom_node(child_struct_20672);
if(cljs.core.seq_QMARK_(children_20673)){
var seq__19879_20675 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_20673));
var chunk__19881_20676 = null;
var count__19882_20677 = (0);
var i__19883_20678 = (0);
while(true){
if((i__19883_20678 < count__19882_20677)){
var child_20679 = chunk__19881_20676.cljs$core$IIndexed$_nth$arity$2(null,i__19883_20678);
if(cljs.core.truth_(child_20679)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20679);


var G__20680 = seq__19879_20675;
var G__20681 = chunk__19881_20676;
var G__20682 = count__19882_20677;
var G__20683 = (i__19883_20678 + (1));
seq__19879_20675 = G__20680;
chunk__19881_20676 = G__20681;
count__19882_20677 = G__20682;
i__19883_20678 = G__20683;
continue;
} else {
var G__20684 = seq__19879_20675;
var G__20685 = chunk__19881_20676;
var G__20686 = count__19882_20677;
var G__20687 = (i__19883_20678 + (1));
seq__19879_20675 = G__20684;
chunk__19881_20676 = G__20685;
count__19882_20677 = G__20686;
i__19883_20678 = G__20687;
continue;
}
} else {
var temp__5804__auto___20688 = cljs.core.seq(seq__19879_20675);
if(temp__5804__auto___20688){
var seq__19879_20689__$1 = temp__5804__auto___20688;
if(cljs.core.chunked_seq_QMARK_(seq__19879_20689__$1)){
var c__5568__auto___20690 = cljs.core.chunk_first(seq__19879_20689__$1);
var G__20692 = cljs.core.chunk_rest(seq__19879_20689__$1);
var G__20693 = c__5568__auto___20690;
var G__20694 = cljs.core.count(c__5568__auto___20690);
var G__20695 = (0);
seq__19879_20675 = G__20692;
chunk__19881_20676 = G__20693;
count__19882_20677 = G__20694;
i__19883_20678 = G__20695;
continue;
} else {
var child_20697 = cljs.core.first(seq__19879_20689__$1);
if(cljs.core.truth_(child_20697)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20697);


var G__20698 = cljs.core.next(seq__19879_20689__$1);
var G__20699 = null;
var G__20700 = (0);
var G__20701 = (0);
seq__19879_20675 = G__20698;
chunk__19881_20676 = G__20699;
count__19882_20677 = G__20700;
i__19883_20678 = G__20701;
continue;
} else {
var G__20702 = cljs.core.next(seq__19879_20689__$1);
var G__20703 = null;
var G__20704 = (0);
var G__20705 = (0);
seq__19879_20675 = G__20702;
chunk__19881_20676 = G__20703;
count__19882_20677 = G__20704;
i__19883_20678 = G__20705;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_20673);
}


var G__20706 = seq__19848_20668;
var G__20707 = chunk__19849_20669;
var G__20708 = count__19850_20670;
var G__20709 = (i__19851_20671 + (1));
seq__19848_20668 = G__20706;
chunk__19849_20669 = G__20707;
count__19850_20670 = G__20708;
i__19851_20671 = G__20709;
continue;
} else {
var temp__5804__auto___20710 = cljs.core.seq(seq__19848_20668);
if(temp__5804__auto___20710){
var seq__19848_20711__$1 = temp__5804__auto___20710;
if(cljs.core.chunked_seq_QMARK_(seq__19848_20711__$1)){
var c__5568__auto___20712 = cljs.core.chunk_first(seq__19848_20711__$1);
var G__20713 = cljs.core.chunk_rest(seq__19848_20711__$1);
var G__20714 = c__5568__auto___20712;
var G__20715 = cljs.core.count(c__5568__auto___20712);
var G__20716 = (0);
seq__19848_20668 = G__20713;
chunk__19849_20669 = G__20714;
count__19850_20670 = G__20715;
i__19851_20671 = G__20716;
continue;
} else {
var child_struct_20717 = cljs.core.first(seq__19848_20711__$1);
var children_20718 = shadow.dom.dom_node(child_struct_20717);
if(cljs.core.seq_QMARK_(children_20718)){
var seq__19906_20719 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_20718));
var chunk__19908_20720 = null;
var count__19909_20721 = (0);
var i__19910_20722 = (0);
while(true){
if((i__19910_20722 < count__19909_20721)){
var child_20724 = chunk__19908_20720.cljs$core$IIndexed$_nth$arity$2(null,i__19910_20722);
if(cljs.core.truth_(child_20724)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20724);


var G__20725 = seq__19906_20719;
var G__20726 = chunk__19908_20720;
var G__20727 = count__19909_20721;
var G__20728 = (i__19910_20722 + (1));
seq__19906_20719 = G__20725;
chunk__19908_20720 = G__20726;
count__19909_20721 = G__20727;
i__19910_20722 = G__20728;
continue;
} else {
var G__20729 = seq__19906_20719;
var G__20730 = chunk__19908_20720;
var G__20731 = count__19909_20721;
var G__20732 = (i__19910_20722 + (1));
seq__19906_20719 = G__20729;
chunk__19908_20720 = G__20730;
count__19909_20721 = G__20731;
i__19910_20722 = G__20732;
continue;
}
} else {
var temp__5804__auto___20733__$1 = cljs.core.seq(seq__19906_20719);
if(temp__5804__auto___20733__$1){
var seq__19906_20734__$1 = temp__5804__auto___20733__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19906_20734__$1)){
var c__5568__auto___20735 = cljs.core.chunk_first(seq__19906_20734__$1);
var G__20736 = cljs.core.chunk_rest(seq__19906_20734__$1);
var G__20737 = c__5568__auto___20735;
var G__20738 = cljs.core.count(c__5568__auto___20735);
var G__20739 = (0);
seq__19906_20719 = G__20736;
chunk__19908_20720 = G__20737;
count__19909_20721 = G__20738;
i__19910_20722 = G__20739;
continue;
} else {
var child_20740 = cljs.core.first(seq__19906_20734__$1);
if(cljs.core.truth_(child_20740)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20740);


var G__20741 = cljs.core.next(seq__19906_20734__$1);
var G__20742 = null;
var G__20743 = (0);
var G__20744 = (0);
seq__19906_20719 = G__20741;
chunk__19908_20720 = G__20742;
count__19909_20721 = G__20743;
i__19910_20722 = G__20744;
continue;
} else {
var G__20745 = cljs.core.next(seq__19906_20734__$1);
var G__20746 = null;
var G__20747 = (0);
var G__20748 = (0);
seq__19906_20719 = G__20745;
chunk__19908_20720 = G__20746;
count__19909_20721 = G__20747;
i__19910_20722 = G__20748;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_20718);
}


var G__20749 = cljs.core.next(seq__19848_20711__$1);
var G__20750 = null;
var G__20751 = (0);
var G__20752 = (0);
seq__19848_20668 = G__20749;
chunk__19849_20669 = G__20750;
count__19850_20670 = G__20751;
i__19851_20671 = G__20752;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__19952 = cljs.core.seq(node);
var chunk__19953 = null;
var count__19954 = (0);
var i__19955 = (0);
while(true){
if((i__19955 < count__19954)){
var n = chunk__19953.cljs$core$IIndexed$_nth$arity$2(null,i__19955);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__20762 = seq__19952;
var G__20763 = chunk__19953;
var G__20764 = count__19954;
var G__20765 = (i__19955 + (1));
seq__19952 = G__20762;
chunk__19953 = G__20763;
count__19954 = G__20764;
i__19955 = G__20765;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19952);
if(temp__5804__auto__){
var seq__19952__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19952__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19952__$1);
var G__20766 = cljs.core.chunk_rest(seq__19952__$1);
var G__20767 = c__5568__auto__;
var G__20768 = cljs.core.count(c__5568__auto__);
var G__20769 = (0);
seq__19952 = G__20766;
chunk__19953 = G__20767;
count__19954 = G__20768;
i__19955 = G__20769;
continue;
} else {
var n = cljs.core.first(seq__19952__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__20770 = cljs.core.next(seq__19952__$1);
var G__20771 = null;
var G__20772 = (0);
var G__20773 = (0);
seq__19952 = G__20770;
chunk__19953 = G__20771;
count__19954 = G__20772;
i__19955 = G__20773;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__19993 = arguments.length;
switch (G__19993) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__20003 = arguments.length;
switch (G__20003) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__20027 = arguments.length;
switch (G__20027) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20781 = arguments.length;
var i__5770__auto___20782 = (0);
while(true){
if((i__5770__auto___20782 < len__5769__auto___20781)){
args__5775__auto__.push((arguments[i__5770__auto___20782]));

var G__20783 = (i__5770__auto___20782 + (1));
i__5770__auto___20782 = G__20783;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__20085_20784 = cljs.core.seq(nodes);
var chunk__20086_20785 = null;
var count__20087_20786 = (0);
var i__20088_20787 = (0);
while(true){
if((i__20088_20787 < count__20087_20786)){
var node_20788 = chunk__20086_20785.cljs$core$IIndexed$_nth$arity$2(null,i__20088_20787);
fragment.appendChild(shadow.dom._to_dom(node_20788));


var G__20789 = seq__20085_20784;
var G__20790 = chunk__20086_20785;
var G__20791 = count__20087_20786;
var G__20792 = (i__20088_20787 + (1));
seq__20085_20784 = G__20789;
chunk__20086_20785 = G__20790;
count__20087_20786 = G__20791;
i__20088_20787 = G__20792;
continue;
} else {
var temp__5804__auto___20793 = cljs.core.seq(seq__20085_20784);
if(temp__5804__auto___20793){
var seq__20085_20794__$1 = temp__5804__auto___20793;
if(cljs.core.chunked_seq_QMARK_(seq__20085_20794__$1)){
var c__5568__auto___20795 = cljs.core.chunk_first(seq__20085_20794__$1);
var G__20796 = cljs.core.chunk_rest(seq__20085_20794__$1);
var G__20797 = c__5568__auto___20795;
var G__20798 = cljs.core.count(c__5568__auto___20795);
var G__20799 = (0);
seq__20085_20784 = G__20796;
chunk__20086_20785 = G__20797;
count__20087_20786 = G__20798;
i__20088_20787 = G__20799;
continue;
} else {
var node_20800 = cljs.core.first(seq__20085_20794__$1);
fragment.appendChild(shadow.dom._to_dom(node_20800));


var G__20801 = cljs.core.next(seq__20085_20794__$1);
var G__20802 = null;
var G__20803 = (0);
var G__20804 = (0);
seq__20085_20784 = G__20801;
chunk__20086_20785 = G__20802;
count__20087_20786 = G__20803;
i__20088_20787 = G__20804;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq20074){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20074));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__20123_20806 = cljs.core.seq(scripts);
var chunk__20124_20807 = null;
var count__20125_20808 = (0);
var i__20126_20809 = (0);
while(true){
if((i__20126_20809 < count__20125_20808)){
var vec__20148_20811 = chunk__20124_20807.cljs$core$IIndexed$_nth$arity$2(null,i__20126_20809);
var script_tag_20812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20148_20811,(0),null);
var script_body_20813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20148_20811,(1),null);
eval(script_body_20813);


var G__20814 = seq__20123_20806;
var G__20815 = chunk__20124_20807;
var G__20816 = count__20125_20808;
var G__20817 = (i__20126_20809 + (1));
seq__20123_20806 = G__20814;
chunk__20124_20807 = G__20815;
count__20125_20808 = G__20816;
i__20126_20809 = G__20817;
continue;
} else {
var temp__5804__auto___20818 = cljs.core.seq(seq__20123_20806);
if(temp__5804__auto___20818){
var seq__20123_20820__$1 = temp__5804__auto___20818;
if(cljs.core.chunked_seq_QMARK_(seq__20123_20820__$1)){
var c__5568__auto___20822 = cljs.core.chunk_first(seq__20123_20820__$1);
var G__20823 = cljs.core.chunk_rest(seq__20123_20820__$1);
var G__20824 = c__5568__auto___20822;
var G__20825 = cljs.core.count(c__5568__auto___20822);
var G__20826 = (0);
seq__20123_20806 = G__20823;
chunk__20124_20807 = G__20824;
count__20125_20808 = G__20825;
i__20126_20809 = G__20826;
continue;
} else {
var vec__20156_20827 = cljs.core.first(seq__20123_20820__$1);
var script_tag_20828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20156_20827,(0),null);
var script_body_20829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20156_20827,(1),null);
eval(script_body_20829);


var G__20830 = cljs.core.next(seq__20123_20820__$1);
var G__20831 = null;
var G__20832 = (0);
var G__20833 = (0);
seq__20123_20806 = G__20830;
chunk__20124_20807 = G__20831;
count__20125_20808 = G__20832;
i__20126_20809 = G__20833;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__20167){
var vec__20169 = p__20167;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20169,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20169,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__20180 = arguments.length;
switch (G__20180) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__20200 = cljs.core.seq(style_keys);
var chunk__20201 = null;
var count__20202 = (0);
var i__20203 = (0);
while(true){
if((i__20203 < count__20202)){
var it = chunk__20201.cljs$core$IIndexed$_nth$arity$2(null,i__20203);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__20841 = seq__20200;
var G__20842 = chunk__20201;
var G__20843 = count__20202;
var G__20844 = (i__20203 + (1));
seq__20200 = G__20841;
chunk__20201 = G__20842;
count__20202 = G__20843;
i__20203 = G__20844;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20200);
if(temp__5804__auto__){
var seq__20200__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20200__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20200__$1);
var G__20846 = cljs.core.chunk_rest(seq__20200__$1);
var G__20847 = c__5568__auto__;
var G__20848 = cljs.core.count(c__5568__auto__);
var G__20849 = (0);
seq__20200 = G__20846;
chunk__20201 = G__20847;
count__20202 = G__20848;
i__20203 = G__20849;
continue;
} else {
var it = cljs.core.first(seq__20200__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__20850 = cljs.core.next(seq__20200__$1);
var G__20851 = null;
var G__20852 = (0);
var G__20853 = (0);
seq__20200 = G__20850;
chunk__20201 = G__20851;
count__20202 = G__20852;
i__20203 = G__20853;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20208,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20215 = k20208;
var G__20215__$1 = (((G__20215 instanceof cljs.core.Keyword))?G__20215.fqn:null);
switch (G__20215__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20208,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20222){
var vec__20225 = p__20222;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20225,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20225,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20207){
var self__ = this;
var G__20207__$1 = this;
return (new cljs.core.RecordIter((0),G__20207__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20209,other20210){
var self__ = this;
var this20209__$1 = this;
return (((!((other20210 == null)))) && ((((this20209__$1.constructor === other20210.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20209__$1.x,other20210.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20209__$1.y,other20210.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20209__$1.__extmap,other20210.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20208){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20251 = k20208;
var G__20251__$1 = (((G__20251 instanceof cljs.core.Keyword))?G__20251.fqn:null);
switch (G__20251__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20208);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20207){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20257 = cljs.core.keyword_identical_QMARK_;
var expr__20258 = k__5352__auto__;
if(cljs.core.truth_((pred__20257.cljs$core$IFn$_invoke$arity$2 ? pred__20257.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__20258) : pred__20257.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__20258)))){
return (new shadow.dom.Coordinate(G__20207,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20257.cljs$core$IFn$_invoke$arity$2 ? pred__20257.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__20258) : pred__20257.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__20258)))){
return (new shadow.dom.Coordinate(self__.x,G__20207,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20207),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20207){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__20207,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__20211){
var extmap__5385__auto__ = (function (){var G__20276 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20211,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__20211)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20276);
} else {
return G__20276;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__20211),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__20211),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20288,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20299 = k20288;
var G__20299__$1 = (((G__20299 instanceof cljs.core.Keyword))?G__20299.fqn:null);
switch (G__20299__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20288,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20306){
var vec__20307 = p__20306;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20307,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20307,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20287){
var self__ = this;
var G__20287__$1 = this;
return (new cljs.core.RecordIter((0),G__20287__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20289,other20290){
var self__ = this;
var this20289__$1 = this;
return (((!((other20290 == null)))) && ((((this20289__$1.constructor === other20290.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20289__$1.w,other20290.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20289__$1.h,other20290.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20289__$1.__extmap,other20290.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20288){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20334 = k20288;
var G__20334__$1 = (((G__20334 instanceof cljs.core.Keyword))?G__20334.fqn:null);
switch (G__20334__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20288);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20287){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20338 = cljs.core.keyword_identical_QMARK_;
var expr__20339 = k__5352__auto__;
if(cljs.core.truth_((pred__20338.cljs$core$IFn$_invoke$arity$2 ? pred__20338.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__20339) : pred__20338.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__20339)))){
return (new shadow.dom.Size(G__20287,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20338.cljs$core$IFn$_invoke$arity$2 ? pred__20338.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__20339) : pred__20338.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__20339)))){
return (new shadow.dom.Size(self__.w,G__20287,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20287),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20287){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__20287,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__20293){
var extmap__5385__auto__ = (function (){var G__20356 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20293,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__20293)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20356);
} else {
return G__20356;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__20293),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__20293),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__20912 = (i + (1));
var G__20913 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__20912;
ret = G__20913;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20378){
var vec__20379 = p__20378;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20379,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20379,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__20397 = arguments.length;
switch (G__20397) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__20920 = ps;
var G__20921 = (i + (1));
el__$1 = G__20920;
i = G__20921;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__20430 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20430,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20430,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20430,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__20433_20930 = cljs.core.seq(props);
var chunk__20434_20931 = null;
var count__20435_20932 = (0);
var i__20436_20933 = (0);
while(true){
if((i__20436_20933 < count__20435_20932)){
var vec__20448_20934 = chunk__20434_20931.cljs$core$IIndexed$_nth$arity$2(null,i__20436_20933);
var k_20935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20448_20934,(0),null);
var v_20936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20448_20934,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_20935);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_20935),v_20936);


var G__20937 = seq__20433_20930;
var G__20938 = chunk__20434_20931;
var G__20939 = count__20435_20932;
var G__20940 = (i__20436_20933 + (1));
seq__20433_20930 = G__20937;
chunk__20434_20931 = G__20938;
count__20435_20932 = G__20939;
i__20436_20933 = G__20940;
continue;
} else {
var temp__5804__auto___20941 = cljs.core.seq(seq__20433_20930);
if(temp__5804__auto___20941){
var seq__20433_20942__$1 = temp__5804__auto___20941;
if(cljs.core.chunked_seq_QMARK_(seq__20433_20942__$1)){
var c__5568__auto___20943 = cljs.core.chunk_first(seq__20433_20942__$1);
var G__20944 = cljs.core.chunk_rest(seq__20433_20942__$1);
var G__20945 = c__5568__auto___20943;
var G__20946 = cljs.core.count(c__5568__auto___20943);
var G__20947 = (0);
seq__20433_20930 = G__20944;
chunk__20434_20931 = G__20945;
count__20435_20932 = G__20946;
i__20436_20933 = G__20947;
continue;
} else {
var vec__20451_20951 = cljs.core.first(seq__20433_20942__$1);
var k_20952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20451_20951,(0),null);
var v_20953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20451_20951,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_20952);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_20952),v_20953);


var G__20954 = cljs.core.next(seq__20433_20942__$1);
var G__20955 = null;
var G__20956 = (0);
var G__20957 = (0);
seq__20433_20930 = G__20954;
chunk__20434_20931 = G__20955;
count__20435_20932 = G__20956;
i__20436_20933 = G__20957;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__20455 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20455,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20455,(1),null);
var seq__20458_20960 = cljs.core.seq(node_children);
var chunk__20460_20961 = null;
var count__20461_20962 = (0);
var i__20462_20963 = (0);
while(true){
if((i__20462_20963 < count__20461_20962)){
var child_struct_20964 = chunk__20460_20961.cljs$core$IIndexed$_nth$arity$2(null,i__20462_20963);
if((!((child_struct_20964 == null)))){
if(typeof child_struct_20964 === 'string'){
var text_20965 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_20965),child_struct_20964].join(''));
} else {
var children_20968 = shadow.dom.svg_node(child_struct_20964);
if(cljs.core.seq_QMARK_(children_20968)){
var seq__20494_20969 = cljs.core.seq(children_20968);
var chunk__20496_20970 = null;
var count__20497_20971 = (0);
var i__20498_20972 = (0);
while(true){
if((i__20498_20972 < count__20497_20971)){
var child_20973 = chunk__20496_20970.cljs$core$IIndexed$_nth$arity$2(null,i__20498_20972);
if(cljs.core.truth_(child_20973)){
node.appendChild(child_20973);


var G__20974 = seq__20494_20969;
var G__20975 = chunk__20496_20970;
var G__20976 = count__20497_20971;
var G__20977 = (i__20498_20972 + (1));
seq__20494_20969 = G__20974;
chunk__20496_20970 = G__20975;
count__20497_20971 = G__20976;
i__20498_20972 = G__20977;
continue;
} else {
var G__20978 = seq__20494_20969;
var G__20979 = chunk__20496_20970;
var G__20980 = count__20497_20971;
var G__20981 = (i__20498_20972 + (1));
seq__20494_20969 = G__20978;
chunk__20496_20970 = G__20979;
count__20497_20971 = G__20980;
i__20498_20972 = G__20981;
continue;
}
} else {
var temp__5804__auto___20982 = cljs.core.seq(seq__20494_20969);
if(temp__5804__auto___20982){
var seq__20494_20983__$1 = temp__5804__auto___20982;
if(cljs.core.chunked_seq_QMARK_(seq__20494_20983__$1)){
var c__5568__auto___20984 = cljs.core.chunk_first(seq__20494_20983__$1);
var G__20985 = cljs.core.chunk_rest(seq__20494_20983__$1);
var G__20986 = c__5568__auto___20984;
var G__20987 = cljs.core.count(c__5568__auto___20984);
var G__20988 = (0);
seq__20494_20969 = G__20985;
chunk__20496_20970 = G__20986;
count__20497_20971 = G__20987;
i__20498_20972 = G__20988;
continue;
} else {
var child_20989 = cljs.core.first(seq__20494_20983__$1);
if(cljs.core.truth_(child_20989)){
node.appendChild(child_20989);


var G__20990 = cljs.core.next(seq__20494_20983__$1);
var G__20991 = null;
var G__20992 = (0);
var G__20993 = (0);
seq__20494_20969 = G__20990;
chunk__20496_20970 = G__20991;
count__20497_20971 = G__20992;
i__20498_20972 = G__20993;
continue;
} else {
var G__20994 = cljs.core.next(seq__20494_20983__$1);
var G__20995 = null;
var G__20996 = (0);
var G__20997 = (0);
seq__20494_20969 = G__20994;
chunk__20496_20970 = G__20995;
count__20497_20971 = G__20996;
i__20498_20972 = G__20997;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_20968);
}
}


var G__20998 = seq__20458_20960;
var G__20999 = chunk__20460_20961;
var G__21000 = count__20461_20962;
var G__21001 = (i__20462_20963 + (1));
seq__20458_20960 = G__20998;
chunk__20460_20961 = G__20999;
count__20461_20962 = G__21000;
i__20462_20963 = G__21001;
continue;
} else {
var G__21002 = seq__20458_20960;
var G__21003 = chunk__20460_20961;
var G__21004 = count__20461_20962;
var G__21005 = (i__20462_20963 + (1));
seq__20458_20960 = G__21002;
chunk__20460_20961 = G__21003;
count__20461_20962 = G__21004;
i__20462_20963 = G__21005;
continue;
}
} else {
var temp__5804__auto___21006 = cljs.core.seq(seq__20458_20960);
if(temp__5804__auto___21006){
var seq__20458_21007__$1 = temp__5804__auto___21006;
if(cljs.core.chunked_seq_QMARK_(seq__20458_21007__$1)){
var c__5568__auto___21008 = cljs.core.chunk_first(seq__20458_21007__$1);
var G__21009 = cljs.core.chunk_rest(seq__20458_21007__$1);
var G__21010 = c__5568__auto___21008;
var G__21011 = cljs.core.count(c__5568__auto___21008);
var G__21012 = (0);
seq__20458_20960 = G__21009;
chunk__20460_20961 = G__21010;
count__20461_20962 = G__21011;
i__20462_20963 = G__21012;
continue;
} else {
var child_struct_21014 = cljs.core.first(seq__20458_21007__$1);
if((!((child_struct_21014 == null)))){
if(typeof child_struct_21014 === 'string'){
var text_21015 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21015),child_struct_21014].join(''));
} else {
var children_21019 = shadow.dom.svg_node(child_struct_21014);
if(cljs.core.seq_QMARK_(children_21019)){
var seq__20505_21020 = cljs.core.seq(children_21019);
var chunk__20507_21021 = null;
var count__20508_21022 = (0);
var i__20509_21023 = (0);
while(true){
if((i__20509_21023 < count__20508_21022)){
var child_21024 = chunk__20507_21021.cljs$core$IIndexed$_nth$arity$2(null,i__20509_21023);
if(cljs.core.truth_(child_21024)){
node.appendChild(child_21024);


var G__21025 = seq__20505_21020;
var G__21026 = chunk__20507_21021;
var G__21027 = count__20508_21022;
var G__21028 = (i__20509_21023 + (1));
seq__20505_21020 = G__21025;
chunk__20507_21021 = G__21026;
count__20508_21022 = G__21027;
i__20509_21023 = G__21028;
continue;
} else {
var G__21029 = seq__20505_21020;
var G__21030 = chunk__20507_21021;
var G__21031 = count__20508_21022;
var G__21032 = (i__20509_21023 + (1));
seq__20505_21020 = G__21029;
chunk__20507_21021 = G__21030;
count__20508_21022 = G__21031;
i__20509_21023 = G__21032;
continue;
}
} else {
var temp__5804__auto___21034__$1 = cljs.core.seq(seq__20505_21020);
if(temp__5804__auto___21034__$1){
var seq__20505_21035__$1 = temp__5804__auto___21034__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20505_21035__$1)){
var c__5568__auto___21036 = cljs.core.chunk_first(seq__20505_21035__$1);
var G__21037 = cljs.core.chunk_rest(seq__20505_21035__$1);
var G__21038 = c__5568__auto___21036;
var G__21039 = cljs.core.count(c__5568__auto___21036);
var G__21040 = (0);
seq__20505_21020 = G__21037;
chunk__20507_21021 = G__21038;
count__20508_21022 = G__21039;
i__20509_21023 = G__21040;
continue;
} else {
var child_21041 = cljs.core.first(seq__20505_21035__$1);
if(cljs.core.truth_(child_21041)){
node.appendChild(child_21041);


var G__21042 = cljs.core.next(seq__20505_21035__$1);
var G__21043 = null;
var G__21044 = (0);
var G__21045 = (0);
seq__20505_21020 = G__21042;
chunk__20507_21021 = G__21043;
count__20508_21022 = G__21044;
i__20509_21023 = G__21045;
continue;
} else {
var G__21046 = cljs.core.next(seq__20505_21035__$1);
var G__21047 = null;
var G__21048 = (0);
var G__21049 = (0);
seq__20505_21020 = G__21046;
chunk__20507_21021 = G__21047;
count__20508_21022 = G__21048;
i__20509_21023 = G__21049;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21019);
}
}


var G__21050 = cljs.core.next(seq__20458_21007__$1);
var G__21051 = null;
var G__21052 = (0);
var G__21053 = (0);
seq__20458_20960 = G__21050;
chunk__20460_20961 = G__21051;
count__20461_20962 = G__21052;
i__20462_20963 = G__21053;
continue;
} else {
var G__21054 = cljs.core.next(seq__20458_21007__$1);
var G__21055 = null;
var G__21056 = (0);
var G__21057 = (0);
seq__20458_20960 = G__21054;
chunk__20460_20961 = G__21055;
count__20461_20962 = G__21056;
i__20462_20963 = G__21057;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21058 = arguments.length;
var i__5770__auto___21059 = (0);
while(true){
if((i__5770__auto___21059 < len__5769__auto___21058)){
args__5775__auto__.push((arguments[i__5770__auto___21059]));

var G__21060 = (i__5770__auto___21059 + (1));
i__5770__auto___21059 = G__21060;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq20522){
var G__20523 = cljs.core.first(seq20522);
var seq20522__$1 = cljs.core.next(seq20522);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20523,seq20522__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__20528 = arguments.length;
switch (G__20528) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__15888__auto___21069 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15889__auto__ = (function (){var switch__15704__auto__ = (function (state_20541){
var state_val_20542 = (state_20541[(1)]);
if((state_val_20542 === (1))){
var state_20541__$1 = state_20541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20541__$1,(2),once_or_cleanup);
} else {
if((state_val_20542 === (2))){
var inst_20538 = (state_20541[(2)]);
var inst_20539 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_20541__$1 = (function (){var statearr_20549 = state_20541;
(statearr_20549[(7)] = inst_20538);

return statearr_20549;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20541__$1,inst_20539);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__15705__auto__ = null;
var shadow$dom$state_machine__15705__auto____0 = (function (){
var statearr_20550 = [null,null,null,null,null,null,null,null];
(statearr_20550[(0)] = shadow$dom$state_machine__15705__auto__);

(statearr_20550[(1)] = (1));

return statearr_20550;
});
var shadow$dom$state_machine__15705__auto____1 = (function (state_20541){
while(true){
var ret_value__15706__auto__ = (function (){try{while(true){
var result__15707__auto__ = switch__15704__auto__(state_20541);
if(cljs.core.keyword_identical_QMARK_(result__15707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15707__auto__;
}
break;
}
}catch (e20555){var ex__15708__auto__ = e20555;
var statearr_20556_21070 = state_20541;
(statearr_20556_21070[(2)] = ex__15708__auto__);


if(cljs.core.seq((state_20541[(4)]))){
var statearr_20560_21071 = state_20541;
(statearr_20560_21071[(1)] = cljs.core.first((state_20541[(4)])));

} else {
throw ex__15708__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21073 = state_20541;
state_20541 = G__21073;
continue;
} else {
return ret_value__15706__auto__;
}
break;
}
});
shadow$dom$state_machine__15705__auto__ = function(state_20541){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__15705__auto____0.call(this);
case 1:
return shadow$dom$state_machine__15705__auto____1.call(this,state_20541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__15705__auto____0;
shadow$dom$state_machine__15705__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__15705__auto____1;
return shadow$dom$state_machine__15705__auto__;
})()
})();
var state__15890__auto__ = (function (){var statearr_20564 = f__15889__auto__();
(statearr_20564[(6)] = c__15888__auto___21069);

return statearr_20564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15890__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
