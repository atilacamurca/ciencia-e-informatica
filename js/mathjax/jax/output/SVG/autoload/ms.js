MathJax.Hub.Register.StartupHook("SVG Jax Ready",function(){var a=MathJax.ElementJax.mml,b=MathJax.OutputJax.SVG;a.ms.Augment({toSVG:function(){this.SVGgetStyles();var a=this.SVG();this.SVGhandleSpace(a);var b=this.getValues("lquote","rquote"),c=this.SVGgetVariant(),d=this.SVGgetScale(),e=this.data.join(""),f=[];return 1===b.lquote.length&&f.push(this.SVGquoteRegExp(b.lquote)),1===b.rquote.length&&f.push(this.SVGquoteRegExp(b.rquote)),f.length&&(e=e.replace(RegExp("("+f.join("|")+")","g"),"\\$1")),a.Add(this.SVGhandleVariant(c,d,b.lquote+e+b.rquote)),a.Clean(),this.SVGhandleColor(a),this.SVGsaveData(a),a},SVGquoteRegExp:function(a){return a.replace(/([.*+?|{}()\[\]\\])/g,"\\$1")}}),a.ms.prototype.defaults.mathvariant="monospace",MathJax.Hub.Startup.signal.Post("SVG ms Ready"),MathJax.Ajax.loadComplete(b.autoloadDir+"/ms.js")});