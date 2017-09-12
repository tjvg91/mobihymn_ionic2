webpackJsonp([7],{119:function(t,n,e){"use strict";e(2),e(56)},141:function(t,n,e){"use strict";e.d(n,"a",function(){return a});e(2),e(15);var i=e(69),o=e(142),s=e(72),r=e(73),a=(e(26),function(){return function(t){this.tab1Root=o.a,this.tab2Root=s.a,this.tab3Root=r.a,this.tab4Root=i.a,this.activeHymnal=t.getActiveHymnal()}}())},142:function(t,n,e){"use strict";e.d(n,"a",function(){return o});e(2),e(57),e(15),e(26);var i=e(64),o=(e.n(i),function(){function t(t,n,e){var i=this;this.homeCtrl=t,this.title="MobiHymn",this.myGlobal=n,this.myHttp=e,this.hymnalSubscribe=n.hymnalChange.subscribe(function(t){i.hymnalList=t;for(var n=0;n<i.hymnalList.length;n++)!function(){var t=i.hymnalList[n].id;i.myGlobal.getHymns(i.myHttp,t).subscribe(function(n){i.myGlobal.addToHymns("hymnal"+t,n)})}()})}return t.prototype.setActiveHymnal=function(t){var n=i.filter(this.hymnalList,function(n){return n.id==t})[0];this.myGlobal.setActiveHymnal(n.id),this.myGlobal.setActiveHymn("1"),this.activeHymnal=n.id,this.goToReader(!0)},t.prototype.goToReader=function(t){this.homeCtrl.parent.getByIndex(1).enabled=t,this.homeCtrl.parent.getByIndex(2).enabled=t,this.homeCtrl.parent.select(1)},t.prototype.ngOnInit=function(){var t=this;this.myGlobal.getHymnals(this.myHttp).subscribe(function(n){t.myGlobal.setHymnals(n.output)}),this.activeHymnal=this.myGlobal.getActiveHymnal()},t.prototype.ngOnDestroy=function(){this.hymnalSubscribe.unsubscribe(),this.hymnSubscribe.unsubscribe()},t}())},143:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(144),o=e(148),s=e(466);e.n(s);Object(i.a)().bootstrapModule(o.a)},148:function(t,n,e){"use strict";e.d(n,"a",function(){return i});e(2),e(23),e(149),e(57),e(15),e(460),e(26),e(119),e(69),e(142),e(72),e(73),e(70),e(68),e(67),e(71),e(141),e(138),e(140);var i=function(){return function(){}}()},26:function(t,n,e){"use strict";var i=e(2),o=e(6),s=(e.n(o),e(165)),r=(e.n(s),this&&this.__decorate||function(t,n,e,i){var o,s=arguments.length,r=s<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(n,e,r):o(n,e))||r);return s>3&&r&&Object.defineProperty(n,e,r),r}),a=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},h=function(){function t(){this.hymnals=new Array,this.hymns={},this.activeHymnal="",this.activeHymn="",this.activeAlignment="left",this.bookmarks=new Array,this.history=new Array,this.recentCount=5,this.padding=0,this.fontSize=1.4,this.hymnalChange=new o.Subject,this.hymnChange=new o.Subject,this.activeHymnalChange=new o.Subject,this.activeHymnChange=new o.Subject,this.bookmarksChange=new o.Subject,this.historyChange=new o.Subject,this.historyCountChange=new o.Subject,this.paddingChange=new o.Subject,this.activeAlignmentChange=new o.Subject,this.fontSizeChange=new o.Subject}return t.prototype.setHymnals=function(t){this.hymnals=t,this.hymnalChange.next(this.hymnals)},t.prototype.addToHymns=function(t,n){this.hymns[t]=n,this.hymnChange.next(this.hymns)},t.prototype.addToBookmarks=function(t){this.bookmarks.push(t),this.bookmarksChange.next(this.bookmarks)},t.prototype.addToRecent=function(t){var n=this.history.findIndex(function(n){return n.hymnalId==t.hymnalId&&n.hymnId==t.hymnId});n>=0&&this.history.splice(n),this.history.splice(0,0,t),this.history.length>this.recentCount&&this.history.splice(this.history.length-1),this.historyChange.next(this.history)},t.prototype.removeFromBookmarks=function(t,n){var e=this.bookmarks.findIndex(function(e){return e.hymnId==n&&e.hymnalId==t});this.bookmarks.splice(e),this.bookmarksChange.next(this.bookmarks)},t.prototype.setActiveHymnal=function(t){this.activeHymnal=t,this.activeHymnalChange.next(this.activeHymnal)},t.prototype.setActiveHymn=function(t){this.activeHymn=t,this.activeHymnChange.next(this.activeHymn);var n=this.activeHymn,e=this.hymns["hymnal"+this.activeHymnal].filter(function(t){return t.id==n})[0];this.addToRecent({hymnalId:this.activeHymnal,hymnId:this.activeHymn,hymnNumber:e.number,hymnTitle:e.title,firstLine:e.firstLine})},t.prototype.setRecentCount=function(t){this.recentCount=t,this.historyCountChange.next(this.recentCount)},t.prototype.setPadding=function(t){this.padding=t,this.paddingChange.next(this.padding)},t.prototype.setActiveAlignment=function(t){this.activeAlignment=t,this.activeAlignmentChange.next(this.activeAlignment)},t.prototype.setFontSize=function(t){this.fontSize=t,this.fontSizeChange.next(this.fontSize)},t.prototype.getHymnalList=function(){return this.hymnals},t.prototype.getHymnList=function(){return this.hymns},t.prototype.getActiveHymnal=function(){return this.activeHymnal},t.prototype.getActiveHymn=function(){return this.activeHymn},t.prototype.getRecentCount=function(){return this.recentCount},t.prototype.getBookmarksList=function(){return this.bookmarks},t.prototype.getRecentList=function(){return this.history},t.prototype.getPadding=function(){return this.padding},t.prototype.getActiveAlignment=function(){return this.activeAlignment},t.prototype.getFontSize=function(){return this.fontSize},t.prototype.getHymnals=function(t){return t.get("../assets/hymnals.json").map(function(t){return t.json()})},t.prototype.getHymns=function(t,n){return t.get("../assets/hymnal "+n+".json").map(function(t){return t.json()})},t.prototype.isInBookmark=function(t,n){return this.bookmarks.findIndex(function(e){return e.hymnalId==t&&e.hymnId==n})>=0},t}();h=r([Object(i.A)(),a("design:paramtypes",[])],h)},460:function(t,n,e){"use strict";e(2),e(15),e(138),e(140),e(26),e(141),e(464),e(465)},67:function(t,n,e){"use strict";e.d(n,"a",function(){return i});e(2),e(15);var i=function(){function t(t,n){this.viewCtrl=t,this.navParams=n}return t.prototype.ionViewDidLoad=function(){this.revisionString=this.navParams.get("revisionString")},t.prototype.dismiss=function(){this.viewCtrl.dismiss()},t}()},68:function(t,n,e){"use strict";e.d(n,"a",function(){return i});e(2),e(15);var i=function(){function t(t,n){this.viewCtrl=t,this.navParams=n}return t.prototype.ionViewDidLoad=function(){},t.prototype.dismiss=function(){this.viewCtrl.dismiss()},t}()},69:function(t,n,e){"use strict";e.d(n,"a",function(){return s});e(2),e(57),e(15);var i=e(67),o=e(68),s=(e(26),function(){function t(t,n,e,i,o){this.navCtrl=t,this.http=n,this.revisionsModal=e,this.authorModal=i,this.global=o,this.recentSubscribe=o.historyCountChange.subscribe(function(t){console.log(t)})}return t.prototype.ionViewDidLoad=function(){var t=this;this.http.get("../assets/revision.html").map(function(t){return t}).subscribe(function(n){t.revisionString=n._body}),this.recentNum=this.global.getRecentCount()},t.prototype.showRevisionModal=function(){this.revisionsModal.create(i.a,{revisionString:this.revisionString}).present()},t.prototype.showAuthorModal=function(){this.authorModal.create(o.a).present()},t.prototype.recentChange=function(){this.global.setRecentCount(this.recentNum)},t}())},70:function(t,n,e){"use strict";e.d(n,"a",function(){return o});e(2),e(15),e(119);var i=e(64),o=(e.n(i),function(){function t(t,n,e,i,o){this.viewCtrl=t,this.alertCtrl=e,this.toastCtrl=i,this.keyboardComp=o,this.hymnList=new Array,this.inputType="all_hymns",this.hymnLimit=5,this.navParams=n}return t.prototype.dismiss=function(){this.viewCtrl.dismiss()},t.prototype.ionViewDidLoad=function(){this.hymnList=this.navParams.get("allHymns"),this.activeHymnal=this.navParams.get("activeHymnal"),this.myGlobal=this.navParams.get("globalService");var t=this.activeHymn=this.myGlobal.getActiveHymn();this.hymnFilter={number:"",tune:""},this.origHymnList=this.hymnList.map(function(t){return Object.assign({},t)}),this.recentList=this.myGlobal.getRecentList(),this.bookmarkList=this.myGlobal.getBookmarksList(),this.origBkmkList=this.bookmarkList.map(function(t){return Object.assign({},t)}),this.keyboardShow="shown",this.hymnFilterString=i.filter(this.hymnList,function(n){return n.id==t})[0].number},t.prototype.filterHymns=function(t){var n=t.target.value;this.hymnList=n?this.origHymnList.filter(function(t){return new RegExp(n).test(t.number)||new RegExp(n).test(t.firstLine)}):this.origHymnList},t.prototype.filterBookmarks=function(t){var n=t.target.value;this.bookmarkList=n?this.origBkmkList.filter(function(t){return new RegExp(n).test(t.number)||new RegExp(n).test(t.firstLine)}):this.origBkmkList},t.prototype.setActiveHymn=function(t){this.myGlobal.setActiveHymn(t),this.viewCtrl.dismiss()},t.prototype.getIndicator=function(){var t=this.hymnLimit,n=this.hymnList.length;return"Displaying "+Math.min(+t,n)+" of "+this.hymnList.length+" hymns"},t.prototype.bkmkSelect=function(){var t=this;setTimeout(function(){t.bkmkFilterSearchbar.setFocus()},200)},t.prototype.handleKeyChange=function(t){if(1!=t.go){this.number=t.outs,this.tune=t.tune,this.hymnFilter.number=this.number,this.hymnFilter.tune=this.tune,this.hymnFilterString=this.hymnFilter.number+this.hymnFilter.tune;var n=this.hymnFilter.number,e=this.hymnFilter.tune;this.hymnList=this.origHymnList.filter(function(t){return new RegExp(n+""+e).test(t.number)})}else{var i=this.hymnFilterString,o=this.origHymnList.filter(function(t){return t.number==i});o.length>0&&this.setActiveHymn(o[0].id)}},t.prototype.showKeyboard=function(){setTimeout(function(){this.keyboardShow="shown",console.log(this.keyboardShow)},100)},t.prototype.presentConfirmUnbookmark=function(){var t=this;this.alertCtrl.create({title:"Confirm removal",message:"Are you sure you want to remove bookmark?",buttons:[{text:"No",handler:function(){}},{text:"Yes",handler:function(){t.myGlobal.removeFromBookmarks(t.activeHymnal,t.activeHymn),t.presentUnbookmarkConfirmed()}}]}).present()},t.prototype.presentUnbookmarkConfirmed=function(){this.toastCtrl.create({message:"Bookmark removed",duration:3e3}).present()},t}())},71:function(t,n,e){"use strict";e.d(n,"a",function(){retur<<<<<<< HEAD
webpackJsonp([7],{119:function(t,n,e){"use strict";e(2),e(56)},141:function(t,n,e){"use strict";e.d(n,"a",function(){return a});e(2),e(15);var i=e(69),o=e(142),s=e(72),r=e(73),a=(e(26),function(){return function(t){this.tab1Root=o.a,this.tab2Root=s.a,this.tab3Root=r.a,this.tab4Root=i.a,this.activeHymnal=t.getActiveHymnal()}}())},142:function(t,n,e){"use strict";e.d(n,"a",function(){return o});e(2),e(57),e(15),e(26);var i=e(64),o=(e.n(i),function(){function t(t,n,e){var i=this;this.homeCtrl=t,this.title="MobiHymn",this.myGlobal=n,this.myHttp=e,this.hymnalSubscribe=n.hymnalChange.subscribe(function(t){i.hymnalList=t;for(var n=0;n<i.hymnalList.length;n++)!function(){var t=i.hymnalList[n].id;i.myGlobal.getHymns(i.myHttp,t).subscribe(function(n){i.myGlobal.addToHymns("hymnal"+t,n)})}()})}return t.prototype.setActiveHymnal=function(t){var n=i.filter(this.hymnalList,function(n){return n.id==t})[0];this.myGlobal.setActiveHymnal(n.id),this.myGlobal.setActiveHymn("1"),this.activeHymnal=n.id,this.goToReader(!0)},t.prototype.goToReader=function(t){this.homeCtrl.parent.getByIndex(1).enabled=t,this.homeCtrl.parent.getByIndex(2).enabled=t,this.homeCtrl.parent.select(1)},t.prototype.ngOnInit=function(){var t=this;this.myGlobal.getHymnals(this.myHttp).subscribe(function(n){t.myGlobal.setHymnals(n.output)}),this.activeHymnal=this.myGlobal.getActiveHymnal()},t.prototype.ngOnDestroy=function(){this.hymnalSubscribe.unsubscribe(),this.hymnSubscribe.unsubscribe()},t}())},143:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(144),o=e(148),s=e(466);e.n(s);Object(i.a)().bootstrapModule(o.a)},148:function(t,n,e){"use strict";e.d(n,"a",function(){return i});e(2),e(23),e(149),e(57),e(15),e(460),e(26),e(119),e(69),e(142),e(72),e(73),e(70),e(68),e(67),e(71),e(141),e(138),e(140);var i=function(){return function(){}}()},26:function(t,n,e){"use strict";var i=e(2),o=e(6),s=(e.n(o),e(165)),r=(e.n(s),this&&this.__decorate||function(t,n,e,i){var o,s=arguments.length,r=s<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,n,e,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(n,e,r):o(n,e))||r);return s>3&&r&&Object.defineProperty(n,e,r),r}),a=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},h=function(){function t(){this.hymnals=new Array,this.hymns={},this.activeHymnal="",this.activeHymn="",this.activeAlignment="left",this.bookmarks=new Array,this.history=new Array,this.recentCount=5,this.padding=0,this.fontSize=1.4,this.hymnalChange=new o.Subject,this.hymnChange=new o.Subject,this.activeHymnalChange=new o.Subject,this.activeHymnChange=new o.Subject,this.bookmarksChange=new o.Subject,this.historyChange=new o.Subject,this.historyCountChange=new o.Subject,this.paddingChange=new o.Subject,this.activeAlignmentChange=new o.Subject,this.fontSizeChange=new o.Subject}return t.prototype.setHymnals=function(t){this.hymnals=t,this.hymnalChange.next(this.hymnals)},t.prototype.addToHymns=function(t,n){this.hymns[t]=n,this.hymnChange.next(this.hymns)},t.prototype.addToBookmarks=function(t){this.bookmarks.push(t),this.bookmarksChange.next(this.bookmarks)},t.prototype.addToRecent=function(t){var n=this.history.findIndex(function(n){return n.hymnalId==t.hymnalId&&n.hymnId==t.hymnId});n>=0&&this.history.splice(n),this.history.splice(0,0,t),this.history.length>this.recentCount&&this.history.splice(this.history.length-1),this.historyChange.next(this.history)},t.prototype.removeFromBookmarks=function(t,n){var e=this.bookmarks.findIndex(function(e){return e.hymnId==n&&e.hymnalId==t});this.bookmarks.splice(e),this.bookmarksChange.next(this.bookmarks)},t.prototype.setActiveHymnal=function(t){this.activeHymnal=t,this.activeHymnalChange.next(this.activeHymnal)},t.prototype.setActiveHymn=function(t){this.activeHymn=t,this.activeHymnChange.next(this.activeHymn);var n=this.activeHymn,e=this.hymns["hymnal"+this.activeHymnal].filter(function(t){return t.id==n})[0];this.addToRecent({hymnalId:this.activeHymnal,hymnId:this.activeHymn,hymnNumber:e.number,hymnTitle:e.title,firstLine:e.firstLine})},t.prototype.setRecentCount=function(t){this.recentCount=t,this.historyCountChange.next(this.recentCount)},t.prototype.setPadding=function(t){this.padding=t,this.paddingChange.next(this.padding)},t.prototype.setActiveAlignment=function(t){this.activeAlignment=t,this.activeAlignmentChange.next(this.activeAlignment)},t.prototype.setFontSize=function(t){this.fontSize=t,this.fontSizeChange.next(this.fontSize)},t.prototype.getHymnalList=function(){return this.hymnals},t.prototype.getHymnList=function(){return this.hymns},t.prototype.getActiveHymnal=function(){return this.activeHymnal},t.prototype.getActiveHymn=function(){return this.activeHymn},t.prototype.getRecentCount=function(){return this.recentCount},t.prototype.getBookmarksList=function(){return this.bookmarks},t.prototype.getRecentList=function(){return this.history},t.prototype.getPadding=function(){return this.padding},t.prototype.getActiveAlignment=function(){return this.activeAlignment},t.prototype.getFontSize=function(){return this.fontSize},t.prototype.getHymnals=function(t){return t.get("../assets/hymnals.json").map(function(t){return t.json()})},t.prototype.getHymns=function(t,n){return t.get("../assets/hymnal "+n+".json").map(function(t){return t.json()})},t.prototype.isInBookmark=function(t,n){return this.bookmarks.findIndex(function(e){return e.hymnalId==t&&e.hymnId==n})>=0},t}();h=r([Object(i.A)(),a("design:paramtypes",[])],h)},460:function(t,n,e){"use strict";e(2),e(15),e(138),e(140),e(26),e(141),e(464),e(465)},67:function(t,n,e){"use strict";e.d(n,"a",function(){return i});e(2),e(15);var i=function(){function t(t,n){this.viewCtrl=t,this.navParams=n}return t.prototype.ionViewDidLoad=function(){this.revisionString=this.navParams.get("revisionString")},t.prototype.dismiss=function(){this.viewCtrl.dismiss()},t}()},68:function(t,n,e){"use strict";e.d(n,"a",function(){return i});e(2),e(15);var i=function(){function t(t,n){this.viewCtrl=t,this.navParams=n}return t.prototype.ionViewDidLoad=function(){},t.prototype.dismiss=function(){this.viewCtrl.dismiss()},t}()},69:function(t,n,e){"use strict";e.d(n,"a",function(){return s});e(2),e(57),e(15);var i=e(67),o=e(68),s=(e(26),function(){function t(t,n,e,i,o){this.navCtrl=t,this.http=n,this.revisionsModal=e,this.authorModal=i,this.global=o,this.recentSubscribe=o.historyCountChange.subscribe(function(t){console.log(t)})}return t.prototype.ionViewDidLoad=function(){var t=this;this.http.get("../assets/revision.html").map(function(t){return t}).subscribe(function(n){t.revisionString=n._body}),this.recentNum=this.global.getRecentCount()},t.prototype.showRevisionModal=function(){this.revisionsModal.create(i.a,{revisionString:this.revisionString}).present()},t.prototype.showAuthorModal=function(){this.authorModal.create(o.a).present()},t.prototype.recentChange=function(){this.global.setRecentCount(this.recentNum)},t}())},70:function(t,n,e){"use strict";e.d(n,"a",function(){return o});e(2),e(15),e(119);var i=e(64),o=(e.n(i),function(){function t(t,n,e,i,o){this.viewCtrl=t,this.alertCtrl=e,this.toastCtrl=i,this.keyboardComp=o,this.hymnList=new Array,this.inputType="all_hymns",this.hymnLimit=5,this.navParams=n}return t.prototype.dismiss=function(){this.viewCtrl.dismiss()},t.prototype.ionViewDidLoad=function(){this.hymnList=this.navParams.get("allHymns"),this.activeHymnal=this.navParams.get("activeHymnal"),this.myGlobal=this.navParams.get("globalService");var t=this.activeHymn=this.myGlobal.getActiveHymn();this.hymnFilter={number:"",tune:""},this.origHymnList=this.hymnList.map(function(t){return Object.assign({},t)}),this.recentList=this.myGlobal.getRecentList(),this.bookmarkList=this.myGlobal.getBookmarksList(),this.origBkmkList=this.bookmarkList.map(function(t){return Object.assign({},t)}),this.keyboardShow="shown",this.hymnFilterString=i.filter(this.hymnList,function(n){return n.id==t})[0].number},t.prototype.filterHymns=function(t){var n=t.target.value;this.hymnList=n?this.origHymnList.filter(function(t){return new RegExp(n).test(t.number)||new RegExp(n).test(t.firstLine)}):this.origHymnList},t.prototype.filterBookmarks=function(t){var n=t.target.value;this.bookmarkList=n?this.origBkmkList.filter(function(t){return new RegExp(n).test(t.number)||new RegExp(n).test(t.firstLine)}):this.origBkmkList},t.prototype.setActiveHymn=function(t){this.myGlobal.setActiveHymn(t),this.viewCtrl.dismiss()},t.prototype.getIndicator=function(){var t=this.hymnLimit,n=this.hymnList.length;return"Displaying "+Math.min(+t,n)+" of "+this.hymnList.length+" hymns"},t.prototype.bkmkSelect=function(){var t=this;setTimeout(function(){t.bkmkFilterSearchbar.setFocus()},200)},t.prototype.handleKeyChange=function(t){if(1!=t.go){this.number=t.outs,this.tune=t.tune,this.hymnFilter.number=this.number,this.hymnFilter.tune=this.tune,this.hymnFilterString=this.hymnFilter.number+this.hymnFilter.tune;var n=this.hymnFilter.number,e=this.hymnFilter.tune;this.hymnList=this.origHymnList.filter(function(t){return new RegExp(n+""+e).test(t.number)})}else{var i=this.hymnFilterString,o=this.origHymnList.filter(function(t){return t.number==i});o.length>0&&this.setActiveHymn(o[0].id)}},t.prototype.showKeyboard=function(){setTimeout(function(){this.keyboardShow="shown",console.log(this.keyboardShow)},100)},t.prototype.presentConfirmUnbookmark=function(){var t=this;this.alertCtrl.create({title:"Confirm removal",message:"Are you sure you want to remove bookmark?",buttons:[{text:"No",handler:function(){}},{text:"Yes",handler:function(){t.myGlobal.removeFromBookmarks(t.activeHymnal,t.activeHymn),t.presentUnbookmarkConfirmed()}}]}).present()},t.prototype.presentUnbookmarkConfirmed=function(){this.toastCtrl.create({message:"Bookmark removed",duration:3e3}).present()},t}())},71:function(t,n,e){"use strict";e.d(n,"a",function(){return i});e(2),e(15),e(26);var i=function(){function t(t,n,e){this.viewCtrl=t,this.navParams=n,this.global=e}return t.prototype.ionViewDidLoad=function(){this.paddingText=this.global.getPadding(),this.alignmentText=this.global.getActiveAlignment()},t.prototype.close=function(){this.viewCtrl.dismiss()},t.prototype.paddingChange=function(){this.global.setPadding(this.paddingText),this.navParams.get("ctrl").extraSpace=this.paddingText},t.prototype.alignmentChange=function(t){this.alignmentText=t,this.global.setActiveAlignment(t),this.navParams.get("ctrl").alignment=t},t}()},72:function(t,n,e){"use strict";e.d(n,"a",function(){return a});e(2),e(56);var i=e(15),o=(e(26),e(70)),s=e(71),r=e(64),a=(e.n(r),function(){function t(t,n,e,i,o,s,a){var h=this;this.readerCtrl=t,this.inputPopCtrl=n,this.inputModalCtrl=e,this.alertCtrl=o,this.toastCtrl=s,this.platform=a,this.scaleState="shown",this.slideUpState="down",this.extraSpace=0,this.alignment="left",this.fontSize=1.4,this.myGlobal=i,this.paddingSubscribe=i.paddingChange.subscribe(function(t){h.extraSpace=t}),this.hymnSubscribe=i.activeHymnChange.subscribe(function(t){var n=h.myGlobal.getHymnList()["hymnal"+h.myGlobal.getActiveHymnal()],e=h.myGlobal.getActiveHymn();h.currentHymn=r.filter(n,function(t){return t.id==e})[0],h.isBookmarked=i.isInBookmark(h.activeHymnal,h.currentHymn.id)}),this.bookmarksSubscribe=i.bookmarksChange.subscribe(function(t){h.isBookmarked=i.isInBookmark(h.activeHymnal,h.currentHymn.id)})}return t.prototype.presentPopover=function(t){this.inputPopCtrl.create(s.a,{ctrl:this}).present({ev:t})},t.prototype.presentInputModal=function(){var t=this.hymnList;this.inputModalCtrl.create(o.a,{allHymns:t,activeHymnal:this.activeHymnal,globalService:this.myGlobal}).present()},t.prototype.presentConfirmUnbookmark=function(){var t=this;this.alertCtrl.create({title:"Confirm removal",message:"Are you sure you want to remove bookmark?",buttons:[{text:"No",handler:function(){}},{text:"Yes",handler:function(){t.myGlobal.removeFromBookmarks(t.activeHymnal,t.currentHymn.id),t.presentUnbookmarkConfirmed()}}]}).present()},t.prototype.presentBookmarkConfirmed=function(){this.toastCtrl.create({message:"Bookmark added",duration:3e3}).present()},t.prototype.presentUnbookmarkConfirmed=function(){this.toastCtrl.create({message:"Bookmark removed",duration:3e3}).present()},t.prototype.ionViewDidLoad=function(){this.activeHymnal=this.myGlobal.getActiveHymnal();var t=this.myGlobal.getHymnList()["hymnal"+this.activeHymnal];this.hymnList=t;var n=this.myGlobal.getActiveHymn();this.currentHymn=r.filter(t,function(t){return t.id==n})[0],this.isBookmarked=this.myGlobal.isInBookmark(this.activeHymnal,this.currentHymn),this.fontSize=this.myGlobal.getFontSize(),this.scrollContent=this.lyricsContainerRef._elementRef.nativeElement.querySelector(".scroll-content"),this.divTab=this.readerCtrl.parent._elementRef.nativeElement.querySelector(".tabbar")},t.prototype.ngAfterViewInit=function(){var t=this;setTimeout(function(){t.lyricsContainer=t.lyricsContainerRef._elementRef.nativeElement,t.gesture=new i.a(t.lyricsContainer),t.gesture.listen(),t.gesture.on("pinch",function(n){return t.pinchZoom(n)})},500)},t.prototype.ngOnDestroy=function(){this.hymnSubscribe.unsubscribe(),this.bookmarksSubscribe.unsubscribe(),this.paddingSubscribe.unsubscribe(),this.gesture.destroy()},t.prototype.goToTab=function(t){this.readerCtrl.parent.select(t)},t.prototype.toggleBookmark=function(){this.isBookmarked?this.presentConfirmUnbookmark():(this.myGlobal.addToBookmarks({hymnalId:this.activeHymnal,hymnId:this.currentHymn.id,firstLine:this.currentHymn.firstLine,number:this.currentHymn.number,title:this.currentHymn.title}),this.presentBookmarkConfirmed())},t.prototype.pinchZoom=function(t){console.log(t)},t.prototype.toggleFullLyrics=function(){var t="",n="";this.platform.is("android")||this.platform.is("core")?(t="56px 0",n="translate(0, 56px)"):this.platform.is("ios")?(t="44px 0 49px",n="translate(0, 49px)"):(t="115px 0 0",n="translate(0, -115px)"),"shown"==this.scaleState?(this.scrollContent.animate([{offset:0,margin:t},{offset:1,margin:"0 0 0 0"}],{duration:500,easing:"ease",fill:"forwards"}),this.divTab.animate([{offset:0,transform:"translate(0, 0)"},{offset:1,transform:n}],{duration:500,easing:"ease",fill:"forwards"}),this.slideUpState="up",this.scaleState="hidden"):(this.scrollContent.animate([{offset:0,margin:"0 0 0 0"},{offset:1,margin:t}],{duration:500,easing:"ease",fill:"forwards"}),this.divTab.animate([{offset:0,transform:n},{offset:1,transform:"translate(0, 0)"}],{duration:500,easing:"ease",fill:"forwards"}),this.slideUpState="down",this.scaleState="shown")},t}())},73:function(t,n,e){"use strict";e.d(n,"a",function(){return o});e(2),e(15);var i=e(438),o=(e.n(i),e(26),function(){function t(t,n,e,i){this.searchCtrl=t,this.loadingCtrl=n,this.navParams=e,this.global=i,console.log(i),this.hymnList=i.getHymnList(),this.activeHymnal=i.getActiveHymnal()}return t.prototype.ionViewDidEnter=function(){var t=this;setTimeout(function(){t.hymnFilterSearchbar.setFocus()},500)},t.prototype.getItems=function(t){var n=this;setTimeout(function(){var e=t.target.value,o=n.activeHymnal;n.searchItems=new Array;var s=n.searchItems;n.hymnList["hymnal"+o].forEach(function(t){var n=i(t.lyrics).find(".hymn-line").filter(function(t,n){return new RegExp(e,"gi").test(n.textContent.replace(/,\;\.!\"\:\?/,""))});n.length>0&&n.each(function(n,e){s.findIndex(function(n){return n.number==t.number&&n.line==e.textContent})<0&&s.push({id:t.id,number:t.number,line:e.textContent})})}),n.searchItems.sort(n.sortByLine),n.closeLoader()},100),this.showLoader()},t.prototype.showLoader=function(){(this.searchLoader=this.loadingCtrl.create({content:"Searching...",spinner:"circles"})).present()},t.prototype.closeLoader=function(){this.searchLoader.dismiss()},t.prototype.goToReader=function(t){this.global.setActiveHymn(t),this.searchCtrl.parent.select(1)},t.prototype.sortByLine=function(t,n){var e=t.line.replace(/^\"/,""),i=n.line.replace(/^\"/,"");return e<i?-1:e>i?1:0},t}())},84:function(t,n){function e(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id=84},91:function(t,n,e){function i(t){var n=o[t];return n?e.e(n[1]).then(function(){return e(n[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var o={"../pages/author-modal/author-modal.module":[468,6],"../pages/input-modal/input-modal.module":[470,5],"../pages/reader/reader.module":[472,4],"../pages/revisions-modal/revisions-modal.module":[467,3],"../pages/search/search.module":[473,2],"../pages/settings-popover/settings-popover.module":[471,1],"../pages/settings/settings.module":[469,0]};i.keys=function(){return Object.keys(o)},i.id=91,t.exports=i}},[143]);
=======
webpackJsonp([7],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RevisionsModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RevisionsModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RevisionsModalPage = (function () {
    function RevisionsModalPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
    }
    RevisionsModalPage.prototype.ionViewDidLoad = function () {
        this.revisionString = this.navParams.get('revisionString');
    };
    RevisionsModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return RevisionsModalPage;
}());
RevisionsModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-revisions-modal',template:/*ion-inline-start:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\revisions-modal\revisions-modal.html"*/'<!--\n  Generated template for the RevisionsModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Revisions</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="dismiss()" clear>\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="container" [innerHTML]="revisionString" *ngIf="revisionString">\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\revisions-modal\revisions-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], RevisionsModalPage);

//# sourceMappingURL=revisions-modal.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AuthorModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AuthorModalPage = (function () {
    function AuthorModalPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
    }
    AuthorModalPage.prototype.ionViewDidLoad = function () {
    };
    AuthorModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return AuthorModalPage;
}());
AuthorModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-author-modal',template:/*ion-inline-start:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\author-modal\author-modal.html"*/'<!--\n  Generated template for the AuthorModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Author</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="dismiss()" clear>\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <img src="img/nin-live.png"/> \n    <ion-card-content>\n      <ion-card-title>\n        Timothy John V. Gandionco\n      </ion-card-title>\n      <p>\n        Software developer for desktop, web, and mobile platforms.\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <div class="disclaimer">\n      <p>Disclaimer: hymnals here are not owned by application developer</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\author-modal\author-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], AuthorModalPage);

//# sourceMappingURL=author-modal.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_revisions_modal_revisions_modal__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_author_modal_author_modal__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_global_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, http, revisionsModal, authorModal, global) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.revisionsModal = revisionsModal;
        this.authorModal = authorModal;
        this.global = global;
        this.recentSubscribe = global.historyCountChange.subscribe(function (value) {
            console.log(value);
        });
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.http.get('../assets/revision.html').map(function (res) { return res; }).subscribe(function (res) {
            _this.revisionString = res["_body"];
        });
        this.recentNum = this.global.getRecentCount();
    };
    SettingsPage.prototype.showRevisionModal = function () {
        var revModal = this.revisionsModal.create(__WEBPACK_IMPORTED_MODULE_3__pages_revisions_modal_revisions_modal__["a" /* RevisionsModalPage */], {
            "revisionString": this.revisionString
        });
        revModal.present();
    };
    SettingsPage.prototype.showAuthorModal = function () {
        var authModal = this.authorModal.create(__WEBPACK_IMPORTED_MODULE_4__pages_author_modal_author_modal__["a" /* AuthorModalPage */]);
        authModal.present();
    };
    SettingsPage.prototype.recentChange = function () {
        this.global.setRecentCount(this.recentNum);
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\settings\settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Settings</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-list-header>\n            Data\n        </ion-list-header>\n        <ion-item>\n            <ion-icon name="time" item-start></ion-icon>\n            <ion-label>Recent items</ion-label>\n            <ion-select [(ngModel)]="recentNum" (ion-change)="recentChange()">\n                <ion-option value="5">5</ion-option>\n                <ion-option value="6">6</ion-option>\n                <ion-option value="7">7</ion-option>\n                <ion-option value="8">8</ion-option>\n                <ion-option value="9">9</ion-option>\n                <ion-option value="10">10</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-list-header>\n            About\n        </ion-list-header>\n        <ion-item (click)="showAuthorModal()">\n            <ion-icon name="person" item-start></ion-icon>\n            <ion-label>Author</ion-label>\n        </ion-item>\n        <ion-item (click)="showRevisionModal()">\n            <ion-icon name="clock" item-start></ion-icon>\n            <ion-label>Revisions</ion-label>\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\settings\settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__services_global_service__["a" /* GlobalService */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_keyboard_keyboard__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the InputModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var InputModalPage = (function () {
    function InputModalPage(viewCtrl, inputParams, alertCtrl, toastCtrl, keyboardComp) {
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.keyboardComp = keyboardComp;
        this.hymnList = new Array();
        this.inputType = "all_hymns";
        this.hymnLimit = 5;
        this.navParams = inputParams;
    }
    InputModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    InputModalPage.prototype.ionViewDidLoad = function () {
        this.hymnList = this.navParams.get('allHymns');
        this.activeHymnal = this.navParams.get('activeHymnal');
        this.myGlobal = this.navParams.get('globalService');
        this.activeHymn = this.myGlobal.getActiveHymn();
        var activeHymn = this.activeHymn;
        /*this.hymnFilter = _.filter(this.hymnList, item => {
          return item.id == activeHymn;
        })[0].number;*/
        this.hymnFilter = {
            'number': '',
            'tune': ''
        };
        this.origHymnList = this.hymnList.filter(function (x) {
            return !/f|s|t/ig.test(x['number']);
        });
        this.recentList = this.myGlobal.getRecentList();
        this.bookmarkList = this.myGlobal.getBookmarksList();
        this.origBkmkList = this.bookmarkList.map(function (x) { return Object.assign({}, x); });
        this.keyboardShow = "shown";
        this.hymnFilterString = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](this.hymnList, function (item) {
            return item.id == activeHymn;
        })[0].number;
    };
    InputModalPage.prototype.filterHymns = function (event) {
        var st = event.target.value;
        if (st)
            this.hymnList = this.origHymnList.filter(function (item) {
                return new RegExp(st).test(item['number']) || new RegExp(st).test(item['firstLine']);
            });
        else
            this.hymnList = this.origHymnList;
    };
    InputModalPage.prototype.filterBookmarks = function (event) {
        var st = event.target.value;
        if (st)
            this.bookmarkList = this.origBkmkList.filter(function (item) {
                return new RegExp(st).test(item['number']) || new RegExp(st).test(item['firstLine']);
            });
        else
            this.bookmarkList = this.origBkmkList;
    };
    InputModalPage.prototype.setActiveHymn = function (hymnId) {
        this.myGlobal.setActiveHymn(hymnId);
        this.viewCtrl.dismiss();
    };
    InputModalPage.prototype.getIndicator = function () {
        var limit = this.hymnLimit;
        var length = this.hymnList.length;
        return 'Displaying ' + Math.min(+limit, length) + ' of ' + this.hymnList.length + ' hymns';
    };
    InputModalPage.prototype.bkmkSelect = function () {
        var _this = this;
        setTimeout(function () {
            _this.bkmkFilterSearchbar.setFocus();
        }, 200);
    };
    InputModalPage.prototype.handleKeyChange = function (inp) {
        if (inp.go != true) {
            this.number = inp.outs;
            this.tune = inp.tune;
            this.hymnFilter['number'] = this.number;
            this.hymnFilter['tune'] = this.tune;
            this.hymnFilterString = this.hymnFilter['number'] + this.hymnFilter['tune'];
            var num_1 = this.hymnFilter['number'];
            var tune_1 = this.hymnFilter['tune'];
            this.hymnList = this.origHymnList.filter(function (item) {
                return new RegExp(num_1 + '' + tune_1).test(item['number']);
            });
        }
        else {
            var activeHymn_1 = this.hymnFilterString;
            var hymnIds = this.origHymnList.filter(function (x) {
                return x['number'] == activeHymn_1;
            });
            if (hymnIds.length > 0)
                this.setActiveHymn(hymnIds[0]['id']);
        }
    };
    InputModalPage.prototype.showKeyboard = function () {
        setTimeout(function () {
            this.keyboardShow = "shown";
            console.log(this.keyboardShow);
        }, 100);
    };
    InputModalPage.prototype.presentConfirmUnbookmark = function () {
        var _this = this;
        var confirmUnbookmark = this.alertCtrl.create({
            title: 'Confirm removal',
            message: 'Are you sure you want to remove bookmark?',
            buttons: [
                {
                    text: 'No',
                    handler: function () { }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.myGlobal.removeFromBookmarks(_this.activeHymnal, _this.activeHymn);
                        _this.presentUnbookmarkConfirmed();
                    }
                }
            ]
        });
        confirmUnbookmark.present();
    };
    InputModalPage.prototype.presentUnbookmarkConfirmed = function () {
        var confirmedUnbookmark = this.toastCtrl.create({
            message: 'Bookmark removed',
            duration: 3000
        });
        confirmedUnbookmark.present();
    };
    return InputModalPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('bkmkFilter'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Searchbar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Searchbar */]) === "function" && _a || Object)
], InputModalPage.prototype, "bkmkFilterSearchbar", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('hymnFilter'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Searchbar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Searchbar */]) === "function" && _b || Object)
], InputModalPage.prototype, "hymnFilterSearchbar", void 0);
InputModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-input-modal',template:/*ion-inline-start:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\input-modal\input-modal.html"*/'<!--\n  Generated template for the InputModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="dismiss()" clear>\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-segment [(ngModel)]="inputType">\n        <ion-segment-button value="all_hymns">\n            All hymns\n        </ion-segment-button>\n        <ion-segment-button value="bookmarks">\n            Bookmarks\n        </ion-segment-button>\n        <ion-segment-button value="recent">\n            Recent\n        </ion-segment-button>\n    </ion-segment>\n</ion-header>\n\n\n<ion-content padding>\n    <div [ngSwitch]="inputType">\n        <div *ngSwitchCase="\'all_hymns\'" #allHymns>\n            <ion-searchbar (ionInput)="filterHymns($event)" [showCancelButton]="true" placeholder="Search hymn" type="number" [(ngModel)]="hymnTextFilter" #hymnFilter></ion-searchbar>\n            <!-- <div class="input-labels">\n                <label class="input-label" (click)="showKeyboard()">\n                    {{ hymnFilterString }}\n                </label>\n            </div> -->\n            <ion-list>\n                <ion-item *ngFor="let hymn of hymnList | slice:0:hymnLimit;" (click)="setActiveHymn(hymn[\'id\'])">\n                    <h2>{{ \'Hymn #\' + hymn.title }}</h2>\n                    <p>{{ hymn.firstLine }}</p>\n                </ion-item>\n            </ion-list>\n            <p class="indicator">{{ getIndicator() }}</p>\n            <!-- <ion-infinite-scroll (ionInfinite)="hymnsInfinite($event)">\n                <ion-infinite-scroll-content></ion-infinite-scroll-content>\n            </ion-infinite-scroll> -->            \n            <keyboard (outputChange)="handleKeyChange($event)" [(keyboardView)]="keyboardShow"></keyboard>            \n        </div>\n        <div *ngSwitchCase="\'bookmarks\'">\n            <ion-searchbar (ionInput)="filterHymns($event)" [showCancelButton]="true" placeholder="Search bookmarks" type="number" [(ngModel)]="bkmkFilterText" #bkmkFilter></ion-searchbar>\n            <ion-list>\n                <ion-item-sliding *ngFor="let bkmk of bookmarkList" (click)="setActiveHymn(bkmk[\'hymnId\'])">\n                    <ion-item>\n                        <h2>{{ bkmk[\'firstLine\'] }}</h2>\n                        <p>Hymn #{{ bkmk[\'title\'] }}</p>\n                    </ion-item>\n                    <ion-item-options side="left">\n                        <button ion-button color="danger" (click)="presentConfirmUnbookmark()">\n                            <ion-icon name="close"></ion-icon>\n                            Remove\n                        </button>\n                    </ion-item-options>\n                </ion-item-sliding>\n            </ion-list>\n        </div>\n        <div *ngSwitchCase="\'recent\'">\n            <ion-list>\n                <ion-item *ngFor="let recent of recentList" (click)="setActiveHymn(recent[\'hymnId\'])">\n                    <h2>Hymn #{{ recent.hymnNumber }}</h2>\n                    <p>{{ recent.firstLine }}</p>\n                </ion-item>\n            </ion-list>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\input-modal\input-modal.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__components_keyboard_keyboard__["a" /* KeyboardComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__components_keyboard_keyboard__["a" /* KeyboardComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__components_keyboard_keyboard__["a" /* KeyboardComponent */]) === "function" && _g || Object])
], InputModalPage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=input-modal.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPopoverPage = (function () {
    function SettingsPopoverPage(viewCtrl, navParams, global) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.global = global;
    }
    SettingsPopoverPage.prototype.ionViewDidLoad = function () {
        this.paddingText = this.global.getPadding();
        this.alignmentText = this.global.getActiveAlignment();
        //this.themeText = this.global.getTheme();
        this.themeText = "pic";
    };
    SettingsPopoverPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    SettingsPopoverPage.prototype.paddingChange = function () {
        this.global.setPadding(this.paddingText);
        var reader = this.navParams.get('ctrl');
        reader.extraSpace = this.paddingText;
    };
    SettingsPopoverPage.prototype.alignmentChange = function (align) {
        this.alignmentText = align;
        this.global.setActiveAlignment(align);
        var reader = this.navParams.get('ctrl');
        reader.alignment = align;
    };
    SettingsPopoverPage.prototype.setTheme = function (theme) {
        this.themeText = theme;
    };
    return SettingsPopoverPage;
}());
SettingsPopoverPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings-popover',template:/*ion-inline-start:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\settings-popover\settings-popover.html"*/'<!--\n  Generated template for the SettingsPopoverPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding>\n  <ion-list>\n    <ion-row>\n      <ion-col>\n        <button ion-button small color="primary" *ngIf="alignmentText==\'left\'">\n          <span class="fa fa-align-left"></span>\n        </button>\n        <button ion-button small color="primary" clear (click)="alignmentChange(\'left\')" *ngIf="alignmentText!=\'left\'">\n          <span class="fa fa-align-left"></span>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button small color="primary" *ngIf="alignmentText==\'center\'">\n          <span class="fa fa-align-center"></span>\n        </button>\n        <button ion-button small color="primary" clear (click)="alignmentChange(\'center\')" *ngIf="alignmentText!=\'center\'">\n          <span class="fa fa-align-center"></span>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button small color="primary" *ngIf="alignmentText==\'right\'">\n          <span class="fa fa-align-right"></span>\n        </button>\n        <button ion-button small color="primary" clear (click)="alignmentChange(\'right\')" *ngIf="alignmentText!=\'right\'">\n          <span class="fa fa-align-right"></span>\n        </button>        \n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <button ion-fab class="button-theme theme-light" (click)="setTheme(\'light\')" [ngClass]="{ \'active\': themeText==\'light\' }"></button>\n      </ion-col>\n      <ion-col>\n        <button ion-fab class="button-theme theme-tan" (click)="setTheme(\'tan\')" [ngClass]="{ \'active\': themeText==\'tan\' }"></button>\n      </ion-col>\n      <ion-col>\n        <button ion-fab class="button-theme theme-dark" (click)="setTheme(\'dark\')" [ngClass]="{ \'active\': themeText==\'dark\' }"></button>\n      </ion-col>\n      <ion-col>\n          <button ion-fab class="button-theme theme-pic" (click)="setTheme(\'pic\')" [ngClass]="{ \'active\': themeText==\'pic\' }"></button>\n        </ion-col>\n    </ion-row>\n\n    <ion-list-header>\n      <ion-label>Extra space\n        <ion-badge>{{ paddingText }}</ion-badge>\n      </ion-label>\n      \n    </ion-list-header> \n    <ion-item>\n      \n      <ion-range min="0" max="500" [(ngModel)]="paddingText" step="10" snap="true" pin="true" (ionChange)="paddingChange()">\n        <ion-label range-left>0</ion-label>\n        <ion-label range-right>500</ion-label>\n      </ion-range>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\settings-popover\settings-popover.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_global_service__["a" /* GlobalService */]) === "function" && _c || Object])
], SettingsPopoverPage);

var _a, _b, _c;
//# sourceMappingURL=settings-popover.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReaderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_input_modal_input_modal__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_popover_settings_popover__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ReaderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ReaderPage = (function () {
    function ReaderPage(readerCtrl, inputPopCtrl, inputModalCtrl, global, alertCtrl, toastCtrl, platform) {
        var _this = this;
        this.readerCtrl = readerCtrl;
        this.inputPopCtrl = inputPopCtrl;
        this.inputModalCtrl = inputModalCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.scaleState = 'shown';
        this.slideUpState = 'down';
        this.extraSpace = 0;
        this.alignment = "left";
        this.fontSize = 1.4;
        this.myGlobal = global;
        this.paddingSubscribe = global.paddingChange.subscribe(function (value) {
            _this.extraSpace = value;
        });
        this.hymnSubscribe = global.activeHymnChange.subscribe(function (value) {
            var hymnList = _this.myGlobal.getHymnList()['hymnal' + _this.myGlobal.getActiveHymnal()];
            var activeHymn = _this.myGlobal.getActiveHymn();
            _this.currentHymn = __WEBPACK_IMPORTED_MODULE_6_lodash__["filter"](hymnList, function (item) {
                return item.id == activeHymn;
            })[0];
            _this.isBookmarked = global.isInBookmark(_this.activeHymnal, _this.currentHymn['id']);
        });
        this.bookmarksSubscribe = global.bookmarksChange.subscribe(function (value) {
            _this.isBookmarked = global.isInBookmark(_this.activeHymnal, _this.currentHymn['id']);
        });
    }
    ReaderPage.prototype.presentPopover = function (myEvent) {
        var popover = this.inputPopCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_settings_popover_settings_popover__["a" /* SettingsPopoverPage */], {
            ctrl: this
        });
        popover.present({
            'ev': myEvent
        });
    };
    ReaderPage.prototype.presentInputModal = function () {
        var hymns = this.hymnList;
        var inputModal = this.inputModalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_input_modal_input_modal__["a" /* InputModalPage */], {
            allHymns: hymns,
            activeHymnal: this.activeHymnal,
            globalService: this.myGlobal
        });
        inputModal.present();
    };
    ReaderPage.prototype.presentConfirmUnbookmark = function () {
        var _this = this;
        var confirmUnbookmark = this.alertCtrl.create({
            title: 'Confirm removal',
            message: 'Are you sure you want to remove bookmark?',
            buttons: [
                {
                    text: 'No',
                    handler: function () { }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.myGlobal.removeFromBookmarks(_this.activeHymnal, _this.currentHymn['id']);
                        _this.presentUnbookmarkConfirmed();
                    }
                }
            ]
        });
        confirmUnbookmark.present();
    };
    ReaderPage.prototype.presentBookmarkConfirmed = function () {
        var confirmedBookmark = this.toastCtrl.create({
            message: 'Bookmark added',
            duration: 3000
        });
        confirmedBookmark.present();
    };
    ReaderPage.prototype.presentUnbookmarkConfirmed = function () {
        var confirmedUnbookmark = this.toastCtrl.create({
            message: 'Bookmark removed',
            duration: 3000
        });
        confirmedUnbookmark.present();
    };
    ReaderPage.prototype.ionViewDidLoad = function () {
        this.activeHymnal = this.myGlobal.getActiveHymnal();
        var hymnList = this.myGlobal.getHymnList()['hymnal' + this.activeHymnal];
        this.hymnList = hymnList;
        var activeHymn = this.myGlobal.getActiveHymn();
        this.currentHymn = __WEBPACK_IMPORTED_MODULE_6_lodash__["filter"](hymnList, function (item) {
            return item.id == activeHymn;
        })[0];
        this.isBookmarked = this.myGlobal.isInBookmark(this.activeHymnal, this.currentHymn);
        this.fontSize = this.myGlobal.getFontSize();
        this.scrollContent = this.lyricsContainerRef._elementRef.nativeElement.querySelector('.scroll-content');
        this.divTab = this.readerCtrl.parent._elementRef.nativeElement.querySelector('.tabbar');
    };
    ReaderPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.lyricsContainer = _this.lyricsContainerRef._elementRef.nativeElement;
            _this.gesture = new __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Gesture */](_this.lyricsContainer);
            _this.gesture.listen();
            _this.gesture.on('pinch', function (e) { return _this.pinchZoom(e); });
        }, 500);
    };
    ReaderPage.prototype.ngOnDestroy = function () {
        this.hymnSubscribe.unsubscribe();
        this.bookmarksSubscribe.unsubscribe();
        this.paddingSubscribe.unsubscribe();
        this.gesture.destroy();
    };
    ReaderPage.prototype.goToTab = function (index) {
        this.readerCtrl.parent.select(index);
    };
    ReaderPage.prototype.toggleBookmark = function () {
        if (this.isBookmarked) {
            this.presentConfirmUnbookmark();
        }
        else {
            this.myGlobal.addToBookmarks({
                'hymnalId': this.activeHymnal,
                'hymnId': this.currentHymn['id'],
                'firstLine': this.currentHymn['firstLine'],
                'number': this.currentHymn['number'],
                'title': this.currentHymn['title']
            });
            this.presentBookmarkConfirmed();
        }
    };
    ReaderPage.prototype.pinchZoom = function (event) {
        console.log(event);
    };
    ReaderPage.prototype.toggleFullLyrics = function () {
        var margUp = "";
        var translateUp = "";
        if (this.platform.is('android') || this.platform.is('core')) {
            margUp = '56px 0';
            translateUp = 'translate(0, 56px)';
        }
        else if (this.platform.is('ios')) {
            margUp = '44px 0 49px';
            translateUp = 'translate(0, 49px)';
        }
        else {
            margUp = '115px 0 0';
            translateUp = 'translate(0, -115px)';
        }
        if (this.scaleState == 'shown') {
            this.scrollContent.animate([
                { offset: 0, 'margin': margUp },
                { offset: 1, 'margin': '0 0 0 0' }
            ], {
                duration: 500,
                easing: 'ease',
                fill: 'forwards'
            });
            this.divTab.animate([
                { offset: 0, 'transform': 'translate(0, 0)' },
                { offset: 1, 'transform': translateUp }
            ], {
                duration: 500,
                easing: 'ease',
                fill: 'forwards'
            });
            this.slideUpState = 'up';
            this.scaleState = 'hidden';
        }
        else {
            this.scrollContent.animate([
                { offset: 0, margin: '0 0 0 0' },
                { offset: 1, margin: margUp }
            ], {
                duration: 500,
                easing: 'ease',
                fill: 'forwards'
            });
            this.divTab.animate([
                { offset: 0, 'transform': translateUp },
                { offset: 1, 'transform': 'translate(0, 0)' }
            ], {
                duration: 500,
                easing: 'ease',
                fill: 'forwards'
            });
            this.slideUpState = 'down';
            this.scaleState = 'shown';
        }
    };
    return ReaderPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('lyricsContainer'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Content */])
], ReaderPage.prototype, "lyricsContainerRef", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('btnPlay'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* FabButton */])
], ReaderPage.prototype, "btnPlayElemRef", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('readerHeader'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], ReaderPage.prototype, "divHeader", void 0);
ReaderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-reader',template:/*ion-inline-start:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\reader\reader.html"*/'<!--\n  Generated template for the ReaderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header #readerHeader [@slideUp]="slideUpState">\n    <ion-navbar>\n        <ion-buttons start>\n            <button ion-button icon-only (click)="presentPopover($event)">\n                <span class="fa fa-font"></span>\n            </button>\n        </ion-buttons>\n        <ion-title>MobiHymn</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="toggleBookmark()">\n                <ion-icon name="star-outline" *ngIf="!isBookmarked"></ion-icon>\n                <ion-icon name="star" *ngIf="isBookmarked"></ion-icon>\n            </button>\n            <button ion-button icon-only (click)="presentInputModal()">\n                <ion-icon name="musical-note"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding (click)="toggleFullLyrics()" #lyricsContainer>\n    <div class="hymn-content" *ngIf="currentHymn" (pinch)="pinchZoom($event)" [ngStyle]="{\'paddingBottom.px\': extraSpace, \'text-align\': alignment, \'font-size\': fontSize }">\n        <h2 class="hymn-title">Hymn #{{ currentHymn.title }}</h2>\n        <div class="lyrics" [innerHTML]="currentHymn.lyrics">\n        </div>\n    </div>\n\n    <ion-fab bottom right>\n        <button ion-fab #btnPlay [@scale]="scaleState">\n            <ion-icon name="play"></ion-icon>\n        </button>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\reader\reader.html"*/,
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* trigger */])('scale', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* state */])('hidden', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                    transform: 'scale(0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* state */])('shown', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                    transform: 'scale(1)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('hidden <=> shown', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('500ms ease'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* trigger */])('slideUp', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* state */])('up', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                    transform: 'translate(0px, -56px)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* state */])('down', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                    transform: 'translate(0px, 0px)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('up <=> down', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('500ms ease'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__services_global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */]])
], ReaderPage);

//# sourceMappingURL=reader.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SearchPage = (function () {
    function SearchPage(searchCtrl, loadingCtrl, navParams, global) {
        this.searchCtrl = searchCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.global = global;
        console.log(global);
        this.hymnList = global.getHymnList();
        this.activeHymnal = global.getActiveHymnal();
    }
    SearchPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.hymnFilterSearchbar.setFocus();
        }, 500);
    };
    SearchPage.prototype.getItems = function (event) {
        var th = this;
        setTimeout(function () {
            var st = event.target.value;
            var activeHymnal = th.activeHymnal;
            th.searchItems = new Array();
            var searchItems = th.searchItems;
            th.hymnList['hymnal' + activeHymnal].forEach(function (hymn) {
                var lyrics = __WEBPACK_IMPORTED_MODULE_2_jquery__(hymn.lyrics);
                var lines = lyrics.find('.hymn-line').filter(function (index, item) {
                    return new RegExp(st, "gi").test(item.textContent.replace(/,\;\.!\"\:\?/, ""));
                });
                if (lines.length > 0) {
                    lines.each(function (ind, line) {
                        if (searchItems.findIndex(function (i) { return i['number'] == hymn['number'] && i['line'] == line.textContent; }) < 0) {
                            searchItems.push({
                                'id': hymn['id'],
                                'number': hymn['number'],
                                'line': line.textContent
                            });
                        }
                    });
                }
            });
            th.searchItems.sort(th.sortByLine);
            th.closeLoader();
        }, 100);
        this.showLoader();
    };
    SearchPage.prototype.showLoader = function () {
        this.searchLoader = this.loadingCtrl.create({
            content: 'Searching...',
            spinner: 'circles'
        });
        this.searchLoader.present();
    };
    SearchPage.prototype.closeLoader = function () {
        this.searchLoader.dismiss();
    };
    SearchPage.prototype.goToReader = function (hymnId) {
        this.global.setActiveHymn(hymnId);
        this.searchCtrl.parent.select(1);
    };
    SearchPage.prototype.sortByLine = function (a, b) {
        var a1 = a.line.replace(/^\"/, "");
        var b1 = b.line.replace(/^\"/, "");
        if (a1 < b1)
            return -1;
        if (a1 > b1)
            return 1;
        return 0;
    };
    return SearchPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('searchHymn'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Searchbar */])
], SearchPage.prototype, "hymnFilterSearchbar", void 0);
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\search\search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Search</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-searchbar (search)="getItems($event)" #searchHymn></ion-searchbar>\n    <ion-list>\n        <ion-list-header *ngIf="searchItems">{{ searchItems.length }} Result(s)</ion-list-header>\n        <ion-item *ngFor="let item of searchItems" (click)="goToReader(item.id)">\n            <h2>{{ item.line }}</h2>\n            <h3>Hymn #{{ item.number }}</h3>\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\search\search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_global_service__["a" /* GlobalService */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/author-modal/author-modal.module": [
		585,
		6
	],
	"../pages/input-modal/input-modal.module": [
		587,
		5
	],
	"../pages/reader/reader.module": [
		589,
		4
	],
	"../pages/revisions-modal/revisions-modal.module": [
		584,
		3
	],
	"../pages/search/search.module": [
		590,
		2
	],
	"../pages/settings-popover/settings-popover.module": [
		588,
		1
	],
	"../pages/settings/settings.module": [
		586,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 192;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the KeyboardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var KeyboardComponent = (function () {
    function KeyboardComponent() {
        this.outputChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.keyboardShown = "hidden";
        this.key = "";
        this.tune = "";
        this.append = false;
    }
    Object.defineProperty(KeyboardComponent.prototype, "keyboardView", {
        get: function () {
            return this.keyboardShown;
        },
        set: function (value) {
            this.keyboardShown = value;
        },
        enumerable: true,
        configurable: true
    });
    KeyboardComponent.prototype.hideKeyboard = function () {
        this.keyboardView = "hidden";
    };
    KeyboardComponent.prototype.showKeyboard = function () {
        this.keyboardView = "shown";
    };
    KeyboardComponent.prototype.isHidden = function () {
        return this.keyboardView == "hidden";
    };
    KeyboardComponent.prototype.isShown = function () {
        return this.keyboardView == "shown";
    };
    KeyboardComponent.prototype.keyChange = function (key) {
        var go = false;
        if (!parseInt(key)) {
            if (/f|s|t/.test(key))
                this.tune = key;
            else if (key == 'b') {
                if (this.tune)
                    this.tune = "";
                else if (this.key.length == 1) {
                    this.key = "1";
                    this.append = false;
                }
                else
                    this.key = this.key.substr(0, this.key.length - 1);
            }
            else if (key == 'e') {
                go = true;
            }
        }
        else {
            if (this.append)
                this.key += key;
            else {
                this.key = key;
                this.append = true;
            }
        }
        this.outputChange.emit({
            outs: this.key,
            tune: this.tune,
            go: go
        });
    };
    return KeyboardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], KeyboardComponent.prototype, "outputChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('keyboardView'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], KeyboardComponent.prototype, "keyboardView", null);
KeyboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'keyboard',template:/*ion-inline-start:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\components\keyboard\keyboard.html"*/'<div class="keyboard" [@slideUp]="keyboardShown">\n    <div class="buttons">\n        <button ion-button color="primary" class="slide up" *ngIf="keyboardShown == \'hidden\'" (click)="showKeyboard()">\n            <i class="fa fa-caret-up"></i>\n        </button>\n    </div>\n    <div class="keys">\n         <button class="key" aria-valuetext="1" (click)="keyChange(\'1\')">1</button>\n        <button class="key" aria-valuetext="2" (click)="keyChange(\'2\')">2</button>\n        <button class="key" aria-valuetext="3" (click)="keyChange(\'3\')">3</button>\n        <button class="key" aria-valuetext="s" (click)="keyChange(\'s\')">s</button>\n    </div>\n    <div class="keys">\n        <button class="key" aria-valuetext="4" (click)="keyChange(\'4\')">4</button>\n        <button class="key" aria-valuetext="5" (click)="keyChange(\'5\')">5</button>\n        <button class="key" aria-valuetext="6" (click)="keyChange(\'6\')">6</button>\n        <button class="key" aria-valuetext="t" (click)="keyChange(\'t\')">t</button>\n    </div>\n    <div class="keys">\n        <button class="key" aria-valuetext="7" (click)="keyChange(\'7\')">7</button>\n        <button class="key" aria-valuetext="8" (click)="keyChange(\'8\')">8</button>\n        <button class="key" aria-valuetext="9" (click)="keyChange(\'9\')">9</button>\n        <button class="key" aria-valuetext="f" (click)="keyChange(\'f\')">f</button>\n    </div>\n    <div class="keys">\n        <button class="key" aria-valuetext="b" (click)="keyChange(\'b\')">\n            <span class="fa fa-long-arrow-left"></span>\n        </button>\n        <button class="key" aria-valuetext="0" (click)="keyChange(\'0\')">0</button>\n        <button class="key" aria-valuetext="e" (click)="keyChange(\'e\')">\n            <span class="fa fa-check"></span>\n        </button>\n        <button class="key" aria-valuetext="c" (click)="hideKeyboard()">\n            <span class="fa fa-arrow-down"></span>\n        </button>\n    </div>\n</div>'/*ion-inline-end:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\components\keyboard\keyboard.html"*/,
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* trigger */])('slideUp', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* state */])('hidden', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                    bottom: '-12em'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* state */])('shown', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                    bottom: '0em'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('hidden <=> shown', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('500ms ease'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], KeyboardComponent);

//# sourceMappingURL=keyboard.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reader_reader__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_global_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = (function () {
    function TabsPage(myGlobal) {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__reader_reader__["a" /* ReaderPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */];
        this.activeHymnal = myGlobal.getActiveHymnal();
    }
    return TabsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('#myTabs'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Tabs */])
], TabsPage.prototype, "tabRef", void 0);
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\tabs\tabs.html"*/'<ion-tabs class="tabs-md-dark" #myTabs>\n    <ion-tab [root]="tab1Root" tabTitle="Library" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Read" tabIcon="glasses" enabled="activeHymnal"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Search" tabIcon="search" enabled="activeHymnal"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="Settings" tabIcon="settings"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_global_service__["a" /* GlobalService */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(homeCtrl, global, http) {
        var _this = this;
        this.homeCtrl = homeCtrl;
        this.title = "MobiHymn";
        this.myGlobal = global;
        this.myHttp = http;
        this.hymnalSubscribe = global.hymnalChange.subscribe(function (value) {
            _this.hymnalList = value;
            var _loop_1 = function () {
                var hymnalID = _this.hymnalList[i]['id'];
                _this.myGlobal.getHymns(_this.myHttp, hymnalID).subscribe(function (res1) {
                    _this.myGlobal.addToHymns('hymnal' + hymnalID, res1);
                });
            };
            for (var i = 0; i < _this.hymnalList.length; i++) {
                _loop_1();
            }
        });
    }
    HomePage.prototype.setActiveHymnal = function (hymnalId) {
        var activeHymnal = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.hymnalList, function (h) {
            return h.id == hymnalId;
        })[0];
        this.myGlobal.setActiveHymnal(activeHymnal['id']);
        this.myGlobal.setActiveHymn('1');
        this.activeHymnal = activeHymnal['id'];
        this.goToReader(true);
    };
    HomePage.prototype.goToReader = function (enable) {
        this.homeCtrl.parent.getByIndex(1).enabled = enable;
        this.homeCtrl.parent.getByIndex(2).enabled = enable;
        this.homeCtrl.parent.select(1);
    };
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.myGlobal.getHymnals(this.myHttp).subscribe(function (res) {
            _this.myGlobal.setHymnals(res.output);
        });
        this.activeHymnal = this.myGlobal.getActiveHymnal();
    };
    HomePage.prototype.ngOnDestroy = function () {
        this.hymnalSubscribe.unsubscribe();
        this.hymnSubscribe.unsubscribe();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Library</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-lg-4 col-md-6 col-sm-12 *ngFor="let hymnal of hymnalList">\n                <ion-card (click)="setActiveHymnal(hymnal.id)" [ngClass]="{ \'active\': (activeHymnal == hymnal.id) }">\n                    <div class="card-image">\n                        <img src="{{ \'assets/\' + hymnal.image}}" />\n                    </div>\n                    <ion-card-content>\n                        <ion-card-title>\n                            {{hymnal.name}}\n                        </ion-card-title>\n                        <p>\n                            {{hymnal.count}} hymns\n                        </p>\n                    </ion-card-content>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_web_animations_js_web_animations_min__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_web_animations_js_web_animations_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_web_animations_js_web_animations_min__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_global_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_keyboard_keyboard__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_reader_reader__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_search_search__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_input_modal_input_modal__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_author_modal_author_modal__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_revisions_modal_revisions_modal__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_settings_popover_settings_popover__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(259);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__components_keyboard_keyboard__["a" /* KeyboardComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_reader_reader__["a" /* ReaderPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_input_modal_input_modal__["a" /* InputModalPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_settings_popover_settings_popover__["a" /* SettingsPopoverPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_author_modal_author_modal__["a" /* AuthorModalPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_revisions_modal_revisions_modal__["a" /* RevisionsModalPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/revisions-modal/revisions-modal.module#RevisionsModalPageModule', name: 'RevisionsModalPage', segment: 'revisions-modal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/author-modal/author-modal.module#AuthorModalPageModule', name: 'AuthorModalPage', segment: 'author-modal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/input-modal/input-modal.module#InputModalPageModule', name: 'InputModalPage', segment: 'input-modal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings-popover/settings-popover.module#SettingsPopoverPageModule', name: 'SettingsPopoverPage', segment: 'settings-popover', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/reader/reader.module#ReaderPageModule', name: 'ReaderPage', segment: 'reader', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_reader_reader__["a" /* ReaderPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_input_modal_input_modal__["a" /* InputModalPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_settings_popover_settings_popover__["a" /* SettingsPopoverPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_author_modal_author_modal__["a" /* AuthorModalPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_revisions_modal_revisions_modal__["a" /* RevisionsModalPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_6__services_global_service__["a" /* GlobalService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GlobalService = (function () {
    function GlobalService() {
        this.hymnals = new Array();
        this.hymns = {};
        this.activeHymnal = "";
        this.activeHymn = "";
        this.activeAlignment = "left";
        this.bookmarks = new Array();
        this.history = new Array();
        this.recentCount = 5;
        this.padding = 0;
        this.fontSize = 1.4;
        this.hymnalChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.hymnChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.activeHymnalChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.activeHymnChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.bookmarksChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.historyChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.historyCountChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.paddingChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.activeAlignmentChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.fontSizeChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    GlobalService.prototype.setHymnals = function (newValue) {
        this.hymnals = newValue;
        this.hymnalChange.next(this.hymnals);
    };
    GlobalService.prototype.addToHymns = function (propName, newValue) {
        this.hymns[propName] = newValue;
        this.hymnChange.next(this.hymns);
    };
    GlobalService.prototype.addToBookmarks = function (newValue) {
        this.bookmarks.push(newValue);
        this.bookmarksChange.next(this.bookmarks);
    };
    GlobalService.prototype.addToRecent = function (newValue) {
        var index = this.history.findIndex(function (i) { return i['hymnalId'] == newValue['hymnalId'] &&
            i['hymnId'] == newValue['hymnId']; });
        if (index >= 0)
            this.history.splice(index);
        this.history.splice(0, 0, newValue);
        if (this.history.length > this.recentCount)
            this.history.splice(this.history.length - 1);
        this.historyChange.next(this.history);
    };
    GlobalService.prototype.removeFromBookmarks = function (hymnalId, hymnId) {
        var index = this.bookmarks.findIndex(function (i) { return i['hymnId'] == hymnId && i['hymnalId'] == hymnalId; });
        this.bookmarks.splice(index);
        this.bookmarksChange.next(this.bookmarks);
    };
    GlobalService.prototype.setActiveHymnal = function (newValue) {
        this.activeHymnal = newValue;
        this.activeHymnalChange.next(this.activeHymnal);
    };
    GlobalService.prototype.setActiveHymn = function (newValue) {
        this.activeHymn = newValue;
        this.activeHymnChange.next(this.activeHymn);
        var activeHymn = this.activeHymn;
        var curHymn = this.hymns['hymnal' + this.activeHymnal].filter(function (item) {
            return item['id'] == activeHymn;
        })[0];
        this.addToRecent({
            'hymnalId': this.activeHymnal,
            'hymnId': this.activeHymn,
            'hymnNumber': curHymn['number'],
            'hymnTitle': curHymn['title'],
            'firstLine': curHymn['firstLine']
        });
    };
    GlobalService.prototype.setRecentCount = function (newValue) {
        this.recentCount = newValue;
        this.historyCountChange.next(this.recentCount);
    };
    GlobalService.prototype.setPadding = function (newValue) {
        this.padding = newValue;
        this.paddingChange.next(this.padding);
    };
    GlobalService.prototype.setActiveAlignment = function (newValue) {
        this.activeAlignment = newValue;
        this.activeAlignmentChange.next(this.activeAlignment);
    };
    GlobalService.prototype.setFontSize = function (newValue) {
        this.fontSize = newValue;
        this.fontSizeChange.next(this.fontSize);
    };
    GlobalService.prototype.getHymnalList = function () {
        return this.hymnals;
    };
    GlobalService.prototype.getHymnList = function () {
        return this.hymns;
    };
    GlobalService.prototype.getActiveHymnal = function () {
        return this.activeHymnal;
    };
    GlobalService.prototype.getActiveHymn = function () {
        return this.activeHymn;
    };
    GlobalService.prototype.getRecentCount = function () {
        return this.recentCount;
    };
    GlobalService.prototype.getBookmarksList = function () {
        return this.bookmarks;
    };
    GlobalService.prototype.getRecentList = function () {
        return this.history;
    };
    GlobalService.prototype.getPadding = function () {
        return this.padding;
    };
    GlobalService.prototype.getActiveAlignment = function () {
        return this.activeAlignment;
    };
    GlobalService.prototype.getFontSize = function () {
        return this.fontSize;
    };
    GlobalService.prototype.getHymnals = function (http) {
        return http.get('../assets/hymnals.json').map(function (res) { return res.json(); });
    };
    GlobalService.prototype.getHymns = function (http, i) {
        return http.get('../assets/hymnal ' + i + '.json').map(function (res) { return res.json(); });
    };
    GlobalService.prototype.isInBookmark = function (hymnalId, hymnId) {
        return this.bookmarks.findIndex(function (i) { return i['hymnalId'] == hymnalId && i['hymnId'] == hymnId; }) >= 0;
    };
    return GlobalService;
}());
GlobalService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GlobalService);

//# sourceMappingURL=global-service.js.map

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_global_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_insomnia__ = __webpack_require__(582);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, global, file, insomnia) {
        var _this = this;
        this.global = global;
        this.file = file;
        this.insomnia = insomnia;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        this.MAIN_FOLDER_NAME = "MobiHymn";
        this.BOOKMARKS_JSON_NAME = "bookmarks.json";
        this.HISTORY_JSON_NAME = "history.json";
        this.SETTINGS_JSON_NAME = "settings.json";
        if (!platform.is('core')) {
            platform.ready().then(function () {
                // Okay, so the platform is ready and our plugins are available.
                // Here you can do any higher level native things you might need.
                statusBar.styleDefault();
                splashScreen.hide();
                insomnia.keepAwake();
                _this.android = platform.is('android');
                _this.ios = platform.is('ios');
                _this.wp = platform.is('wp');
                _this.storage = _this.android ? file.externalRootDirectory : file.dataDirectory;
                _this.file.checkDir(_this.storage, _this.MAIN_FOLDER_NAME).then(function () {
                    _this.checkBookmarks("read");
                    _this.checkHistory("read");
                    _this.checkSettings("read");
                }).catch(function () {
                    _this.file.createDir(_this.storage, _this.MAIN_FOLDER_NAME, false).then(function () {
                        _this.checkBookmarks("read");
                        _this.checkHistory("read");
                        _this.checkSettings("read");
                    });
                });
                _this.onPauseSubscription = platform.pause.subscribe(function () {
                    _this.file.checkDir(_this.storage, _this.MAIN_FOLDER_NAME).then(function () {
                        _this.checkBookmarks("write");
                        _this.checkHistory("write");
                        _this.checkSettings("write");
                    }).catch(function () {
                        _this.file.createDir(_this.storage, _this.MAIN_FOLDER_NAME, false).then(function () {
                            _this.checkBookmarks("write");
                            _this.checkHistory("write");
                            _this.checkSettings("write");
                        });
                    });
                });
            });
        }
    }
    MyApp.prototype.checkBookmarks = function (mode) {
        var _this = this;
        this.file.checkFile(this.storage, this.BOOKMARKS_JSON_NAME).then(function () {
            if (mode == "write")
                _this.writeBookmarks(true);
            else if (mode == "read")
                _this.readBookmarks();
        }).catch(function () {
            _this.file.createDir(_this.storage, _this.BOOKMARKS_JSON_NAME, false).then(function () {
                if (mode == "write")
                    _this.writeBookmarks(false);
            });
        });
    };
    MyApp.prototype.writeBookmarks = function (exists) {
        var data = this.global.getBookmarksList();
        if (!exists)
            this.file.writeFile(this.storage + '/' + this.MAIN_FOLDER_NAME, this.BOOKMARKS_JSON_NAME, JSON.stringify(data), {
                append: false, replace: true
            });
        else
            this.file.writeExistingFile(this.storage + '/' + this.MAIN_FOLDER_NAME, this.BOOKMARKS_JSON_NAME, JSON.stringify(data));
    };
    MyApp.prototype.readBookmarks = function () {
        var _this = this;
        this.file.readAsText(this.storage, this.BOOKMARKS_JSON_NAME).then(function (data) {
            _this.global.addToBookmarks(JSON.parse(data));
        });
    };
    MyApp.prototype.checkHistory = function (mode) {
        var _this = this;
        this.file.checkFile(this.storage, this.MAIN_FOLDER_NAME + '/' + this.HISTORY_JSON_NAME).then(function () {
            if (mode == "write")
                _this.writeHistory(true);
            else
                _this.readHistory();
        }).catch(function () {
            _this.file.createDir(_this.storage, _this.MAIN_FOLDER_NAME + '/' + _this.HISTORY_JSON_NAME, false).then(function () {
                if (mode == "write")
                    _this.writeHistory(false);
            });
        });
    };
    MyApp.prototype.writeHistory = function (exists) {
        var data = this.global.getRecentList();
        if (!exists)
            this.file.writeFile(this.storage + '/' + this.MAIN_FOLDER_NAME, this.HISTORY_JSON_NAME, JSON.stringify(data), {
                append: false, replace: true
            });
        else
            this.file.writeExistingFile(this.storage + '/' + this.MAIN_FOLDER_NAME, this.HISTORY_JSON_NAME, JSON.stringify(data));
    };
    MyApp.prototype.readHistory = function () {
        var _this = this;
        this.file.readAsText(this.storage, this.HISTORY_JSON_NAME).then(function (data) {
            _this.global.addToRecent(JSON.parse(data));
        });
    };
    MyApp.prototype.checkSettings = function (mode) {
        var _this = this;
        this.file.checkFile(this.storage, this.MAIN_FOLDER_NAME + '/' + this.SETTINGS_JSON_NAME).then(function () {
            if (mode == "write")
                _this.writeSettings(true);
            else
                _this.readSettings();
        }).catch(function () {
            _this.file.createDir(_this.storage, _this.SETTINGS_JSON_NAME, false).then(function () {
                _this.writeSettings(false);
            });
        });
    };
    MyApp.prototype.writeSettings = function (exists) {
        var data = {
            'activeHymnal': this.global.getActiveHymnal(),
            'activeHymn': this.global.getActiveHymn(),
            'recentCount': this.global.getRecentCount(),
            'extraSpace': this.global.getPadding(),
            'alignment': this.global.getActiveAlignment(),
            'fontSize': this.global.getFontSize()
        };
        if (!exists)
            this.file.writeFile(this.storage + '/' + this.MAIN_FOLDER_NAME, this.SETTINGS_JSON_NAME, JSON.stringify(data), {
                append: false, replace: true
            });
        else
            this.file.writeExistingFile(this.storage + '/' + this.MAIN_FOLDER_NAME, this.SETTINGS_JSON_NAME, JSON.stringify(data));
    };
    MyApp.prototype.readSettings = function () {
        var _this = this;
        this.file.readAsText(this.storage, this.HISTORY_JSON_NAME).then(function (data) {
            var jsonData = JSON.parse(data);
            _this.global.setActiveHymnal(jsonData["activeHymnal"]);
            _this.global.setActiveHymn(jsonData["activeHymn"]);
            _this.global.setFontSize(jsonData["fontSize"]);
            _this.global.setRecentCount(jsonData["recentCount"]);
            _this.global.setPadding(jsonData["extraSpace"]);
            _this.global.setActiveAlignment(jsonData["alignment"]);
        });
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\app\app.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_insomnia__["a" /* Insomnia */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__services_global_service__["a" /* GlobalService */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_insomnia__["a" /* Insomnia */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[262]);
//# sourceMappingURL=main.js.map
