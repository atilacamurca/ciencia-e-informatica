MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",function(){var a=MathJax.ElementJax.mml,b=MathJax.OutputJax["HTML-CSS"],c=MathJax.Localization;a.mglyph.Augment({toHTML:function(d,e){var f,g=d,h=this.getValues("src","width","height","valign","alt");if(d=this.HTMLcreateSpan(d),""===h.src){var i=this.Get("index");if(i){e=this.HTMLgetVariant();var j=e.defaultFont;j&&(j.noStyleChar=!0,j.testString=String.fromCharCode(i)+"ABCabc",b.Font.testFont(j)?this.HTMLhandleVariant(d,e,String.fromCharCode(i)):(""===h.alt&&(h.alt=c._(["MathML","BadMglyphFont"],"Bad font: %1",j.family)),f=a.Error(h.alt,{mathsize:"75%"}),this.Append(f),f.toHTML(d),this.data.pop(),d.bbox=f.HTMLspanElement().bbox))}}else{if(this.img||(this.img=a.mglyph.GLYPH[h.src]),!this.img){this.img=a.mglyph.GLYPH[h.src]={img:new Image,status:"pending"};var k=this.img.img;k.onload=MathJax.Callback(["HTMLimgLoaded",this]),k.onerror=MathJax.Callback(["HTMLimgError",this]),k.src=h.src,MathJax.Hub.RestartAfter(k.onload)}if("OK"!==this.img.status)f=a.Error(c._(["MathML","BadMglyph"],"Bad mglyph: %1",h.src),{mathsize:"75%"}),this.Append(f),f.toHTML(d),this.data.pop(),d.bbox=f.HTMLspanElement().bbox;else{var l=this.HTMLgetMu(d);k=b.addElement(d,"img",{isMathJax:!0,src:h.src,alt:h.alt,title:h.alt}),h.width&&(String(h.width).match(/^\s*-?\d+\s*$/)&&(h.width+="px"),k.style.width=b.Em(b.length2em(h.width,l,this.img.img.width/b.em))),h.height&&(String(h.height).match(/^\s*-?\d+\s*$/)&&(h.height+="px"),k.style.height=b.Em(b.length2em(h.height,l,this.img.img.height/b.em))),d.bbox.w=d.bbox.rw=k.offsetWidth/b.em,d.bbox.h=k.offsetHeight/b.em,h.valign&&(String(h.valign).match(/^\s*-?\d+\s*$/)&&(h.valign+="px"),d.bbox.d=-b.length2em(h.valign,l,this.img.img.height/b.em),k.style.verticalAlign=b.Em(-d.bbox.d),d.bbox.h-=d.bbox.d)}}return g.bbox?d.bbox&&(g.bbox.w+=d.bbox.w,g.bbox.w>g.bbox.rw&&(g.bbox.rw=g.bbox.w),d.bbox.h>g.bbox.h&&(g.bbox.h=d.bbox.h),d.bbox.d>g.bbox.d&&(g.bbox.d=d.bbox.d)):g.bbox={w:d.bbox.w,h:d.bbox.h,d:d.bbox.d,rw:d.bbox.rw,lw:d.bbox.lw},this.HTMLhandleSpace(d),this.HTMLhandleColor(d),d},HTMLimgLoaded:function(a,b){"string"==typeof a&&(b=a),this.img.status=b||"OK"},HTMLimgError:function(){this.img.img.onload("error")}},{GLYPH:{}}),MathJax.Hub.Startup.signal.Post("HTML-CSS mglyph Ready"),MathJax.Ajax.loadComplete(b.autoloadDir+"/mglyph.js")});