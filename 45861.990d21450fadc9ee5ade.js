"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[45861],{45861:(r,i,e)=>{e.r(i),e.d(i,{TextAlign:()=>s,default:()=>s});const s=e(40256).Extension.create({name:"textAlign",addOptions:()=>({types:[],alignments:["left","center","right","justify"],defaultAlignment:"left"}),addGlobalAttributes(){return[{types:this.options.types,attributes:{textAlign:{default:this.options.defaultAlignment,parseHTML:t=>t.style.textAlign||this.options.defaultAlignment,renderHTML:t=>t.textAlign===this.options.defaultAlignment?{}:{style:`text-align: ${t.textAlign}`}}}}]},addCommands(){return{setTextAlign:t=>({commands:n})=>!!this.options.alignments.includes(t)&&this.options.types.every(o=>n.updateAttributes(o,{textAlign:t})),unsetTextAlign:()=>({commands:t})=>this.options.types.every(n=>t.resetAttributes(n,"textAlign"))}},addKeyboardShortcuts(){return{"Mod-Shift-l":()=>this.editor.commands.setTextAlign("left"),"Mod-Shift-e":()=>this.editor.commands.setTextAlign("center"),"Mod-Shift-r":()=>this.editor.commands.setTextAlign("right"),"Mod-Shift-j":()=>this.editor.commands.setTextAlign("justify")}}})}}]);