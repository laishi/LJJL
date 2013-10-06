
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_sym-ljjl}","click",function(sym,e){sym.getSymbol("sym-ljjl").play();sym.getSymbol("sym-ljjlfs").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sym-ljjlfs}","click",function(sym,e){sym.getSymbol("sym-ljjl").playReverse();sym.getSymbol("sym-ljjlfs").playReverse();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'sym-ljjlfs'
(function(symbolName){})("sym-ljjlfs");
//Edge symbol end:'sym-ljjlfs'

//=========================================================

//Edge symbol: 'sym-ljjl'
(function(symbolName){})("sym-ljjl");
//Edge symbol end:'sym-ljjl'
})(jQuery,AdobeEdge,"EDGE-3088055");