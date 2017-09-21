webpackJsonp([8],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RevisionsModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_revisions_modal_revisions_modal__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_author_modal_author_modal__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_global_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(104);
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
    function SettingsPage(navCtrl, http, revisionsModal, authorModal, global, platform, file) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.revisionsModal = revisionsModal;
        this.authorModal = authorModal;
        this.global = global;
        this.platform = platform;
        this.file = file;
        this.recentSubscribe = global.historyCountChange.subscribe(function (value) {
            console.log(value);
        });
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var url = "";
        if (this.platform.is('cordova')) {
            this.platform.ready().then(function () {
                url = _this.file.applicationDirectory + 'www/assets/revision.html';
                _this.http.get(url).map(function (res) { return res; }).subscribe(function (res) {
                    _this.revisionString = res["_body"];
                });
            });
        }
        else {
            url = '../assets/revision.html';
            this.http.get(url).map(function (res) { return res; }).subscribe(function (res) {
                _this.revisionString = res["_body"];
            });
            this.recentNum = this.global.getRecentCount();
        }
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__services_global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
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
    function InputModalPage(viewCtrl, inputParams, alertCtrl, toastCtrl) {
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.hymnList = new Array();
        this.inputType = "all_hymns";
        this.hymnLimit = 5;
        this.navParams = inputParams;
    }
    InputModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    InputModalPage.prototype.ionViewDidLoad = function () {
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
        this.origHymnList = this.navParams.get('allHymns').filter(function (x) {
            return !/f|s|t/ig.test(x['number']);
        });
        this.recentList = this.myGlobal.getRecentList();
        this.bookmarkList = this.myGlobal.getBookmarksList();
        this.origBkmkList = this.bookmarkList.map(function (x) { return Object.assign({}, x); });
        this.hymnList = this.origHymnList.map(function (x) { return Object.assign({}, x); });
        this.keyboardShow = "shown";
        this.hymnFilterString = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](this.hymnList, function (item) {
            return item.id == activeHymn;
        })[0].number;
    };
    InputModalPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.hymnFilterSearchbar.value = _this.hymnFilterString;
            _this.hymnFilterSearchbar.setFocus();
            _this.hymnFilterSearchbar._searchbarInput.nativeElement.select();
            _this.filterHymns(null);
        }, 500);
    };
    InputModalPage.prototype.filterHymns = function (event) {
        var st = "";
        if (event)
            st = event.target.value;
        else
            st = this.hymnFilterSearchbar.value;
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
    InputModalPage.prototype.preSetActiveHymn = function (event) {
        var tempId = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](this.hymnList, function (item) {
            return item.number == event;
        })[0].id;
        this.setActiveHymn(tempId);
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
    InputModalPage.prototype.hymnSelect = function () {
        var _this = this;
        setTimeout(function () {
            _this.hymnFilterSearchbar._searchbarInput.nativeElement.select();
            _this.hymnFilterSearchbar.setFocus();
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
        selector: 'page-input-modal',template:/*ion-inline-start:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\input-modal\input-modal.html"*/'<!--\n  Generated template for the InputModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="dismiss()" clear>\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-segment [(ngModel)]="inputType">\n        <ion-segment-button value="all_hymns" (click)="hymnSelect()">\n            All hymns\n        </ion-segment-button>\n        <ion-segment-button value="bookmarks">\n            Bookmarks\n        </ion-segment-button>\n        <ion-segment-button value="recent">\n            Recent\n        </ion-segment-button>\n    </ion-segment>\n</ion-header>\n\n\n<ion-content padding>\n    <div [ngSwitch]="inputType">\n        <div *ngSwitchCase="\'all_hymns\'" #allHymns>\n            <ion-searchbar (keyup.enter)="preSetActiveHymn(hymnFilter.value)" (ionInput)="filterHymns($event)" [showCancelButton]="true" placeholder="Search hymn" type="number" [(ngModel)]="hymnTextFilter" #hymnFilter></ion-searchbar>\n            <!-- <div class="input-labels">\n                <label class="input-label" (click)="showKeyboard()">\n                    {{ hymnFilterString }}\n                </label>\n            </div> -->\n            <ion-list>\n                <ion-item *ngFor="let hymn of hymnList | slice:0:hymnLimit;" (click)="setActiveHymn(hymn[\'id\'])">\n                    <h2>{{ \'Hymn #\' + hymn.number }}</h2>\n                    <p>{{ hymn.firstLine }}</p>\n                </ion-item>\n            </ion-list>\n            <p class="indicator">{{ getIndicator() }}</p>\n            <!-- <ion-infinite-scroll (ionInfinite)="hymnsInfinite($event)">\n                <ion-infinite-scroll-content></ion-infinite-scroll-content>\n            </ion-infinite-scroll> -->\n            <!-- <keyboard (outputChange)="handleKeyChange($event)" [(keyboardView)]="keyboardShow"></keyboard> -->\n        </div>\n        <div *ngSwitchCase="\'bookmarks\'">\n            <ion-searchbar (ionInput)="filterHymns($event)" [showCancelButton]="true" placeholder="Search bookmarks" type="number" [(ngModel)]="bkmkFilterText" #bkmkFilter></ion-searchbar>\n            <ion-list>\n                <ion-item-sliding *ngFor="let bkmk of bookmarkList" (click)="setActiveHymn(bkmk[\'hymnId\'])">\n                    <ion-item>\n                        <h2>{{ bkmk[\'firstLine\'] }}</h2>\n                        <p>Hymn #{{ bkmk[\'title\'] }}</p>\n                    </ion-item>\n                    <ion-item-options side="left">\n                        <button ion-button color="danger" (click)="presentConfirmUnbookmark()">\n                            <ion-icon name="close"></ion-icon>\n                            Remove\n                        </button>\n                    </ion-item-options>\n                </ion-item-sliding>\n            </ion-list>\n        </div>\n        <div *ngSwitchCase="\'recent\'">\n            <ion-list>\n                <ion-item *ngFor="let recent of recentList" (click)="setActiveHymn(recent[\'hymnId\'])">\n                    <h2>Hymn #{{ recent.hymnNumber }}</h2>\n                    <p>{{ recent.firstLine }}</p>\n                </ion-item>\n            </ion-list>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\input-modal\input-modal.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */]) === "function" && _f || Object])
], InputModalPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=input-modal.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
    function SettingsPopoverPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
    }
    SettingsPopoverPage.prototype.ionViewDidLoad = function () {
        var main = this.navParams.get('ctrl');
        this.global = main['myGlobal'];
        this.paddingText = this.global.getPadding();
        this.alignmentText = this.global.getActiveAlignment();
        //this.themeText = this.global.getTheme();
        this.themeText = this.global.getTheme();
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
        this.global.setTheme(theme);
    };
    return SettingsPopoverPage;
}());
SettingsPopoverPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings-popover',template:/*ion-inline-start:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\settings-popover\settings-popover.html"*/'<!--\n  Generated template for the SettingsPopoverPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding>\n  <ion-list>\n    <ion-row>\n      <ion-col>\n        <button ion-button small color="primary" *ngIf="alignmentText==\'left\'">\n          <span class="fa fa-align-left"></span>\n        </button>\n        <button ion-button small color="primary" clear (click)="alignmentChange(\'left\')" *ngIf="alignmentText!=\'left\'">\n          <span class="fa fa-align-left"></span>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button small color="primary" *ngIf="alignmentText==\'center\'">\n          <span class="fa fa-align-center"></span>\n        </button>\n        <button ion-button small color="primary" clear (click)="alignmentChange(\'center\')" *ngIf="alignmentText!=\'center\'">\n          <span class="fa fa-align-center"></span>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button small color="primary" *ngIf="alignmentText==\'right\'">\n          <span class="fa fa-align-right"></span>\n        </button>\n        <button ion-button small color="primary" clear (click)="alignmentChange(\'right\')" *ngIf="alignmentText!=\'right\'">\n          <span class="fa fa-align-right"></span>\n        </button>        \n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <button ion-fab class="button-theme theme-light" (click)="setTheme(\'light\')" [ngClass]="{ \'active\': themeText==\'light\' }"></button>\n      </ion-col>\n      <ion-col>\n        <button ion-fab class="button-theme theme-tan" (click)="setTheme(\'tan\')" [ngClass]="{ \'active\': themeText==\'tan\' }"></button>\n      </ion-col>\n      <ion-col>\n        <button ion-fab class="button-theme theme-dark" (click)="setTheme(\'dark\')" [ngClass]="{ \'active\': themeText==\'dark\' }"></button>\n      </ion-col>\n      <ion-col>\n          <button ion-fab class="button-theme theme-pic" (click)="setTheme(\'pic\')" [ngClass]="{ \'active\': themeText==\'pic\' }"></button>\n        </ion-col>\n    </ion-row>\n\n    <ion-list-header>\n      <ion-label>Extra space\n        <ion-badge>{{ paddingText }}</ion-badge>\n      </ion-label>\n      \n    </ion-list-header> \n    <ion-item>\n      \n      <ion-range min="0" max="500" [(ngModel)]="paddingText" step="10" snap="true" pin="true" (ionChange)="paddingChange()">\n        <ion-label range-left>0</ion-label>\n        <ion-label range-right>500</ion-label>\n      </ion-range>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\settings-popover\settings-popover.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], SettingsPopoverPage);

//# sourceMappingURL=settings-popover.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TunePopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
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
 * Generated class for the TunePopoverPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TunePopoverPage = (function () {
    function TunePopoverPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tunesString = ["-", "s", "t", "f"];
    }
    TunePopoverPage.prototype.ionViewDidLoad = function () {
        this.ctrl = this.navParams.get('ctrl');
        this.global = this.ctrl['myGlobal'];
        this.tunes = new Array();
        for (var i = 0; i < this.navParams.get('tunes').length + 1; i++) {
            var obj = {
                "name": (this.numToOrdinal(i + 1) + " tune"),
                "val": this.tunesString[i]
            };
            this.tunes.push(obj);
        }
        this.activeHymn = this.navParams.get('activeHymn');
        var activeHymn = this.activeHymn.replace(/[0-9]+/, "");
        if (activeHymn.length == 0)
            activeHymn = "-";
        this.activeTune = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](this.tunes, function (x) {
            return x['val'] == activeHymn;
        })[0]['val'];
    };
    TunePopoverPage.prototype.numToOrdinal = function (num) {
        return /1$/.test(num) ? (num + "st") :
            /2$/.test(num) ? (num + "nd") :
                /3$/.test(num) ? (num + "rd") :
                    (num + "th");
    };
    TunePopoverPage.prototype.tuneChange = function (myEvent) {
        if (this.activeTune) {
            var newNum_1 = this.activeHymn.replace(/f|s|t/, "") + "" + this.activeTune.replace("-", "");
            var hymnList = this.ctrl['hymnList'];
            var hymnId = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](hymnList, function (x) {
                return x['number'] == newNum_1;
            })[0]['id'];
            this.global.setActiveHymn(hymnId);
        }
    };
    return TunePopoverPage;
}());
TunePopoverPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tune-popover',template:/*ion-inline-start:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\tune-popover\tune-popover.html"*/'<ion-content>\n  <ion-list radio-group [(ngModel)]="activeTune" (ionChange)="tuneChange($event)">\n    <ion-item *ngFor="let t of tunes">\n      <ion-label>{{ t.name }}</ion-label>\n      <ion-radio value="{{ t.val }}"></ion-radio>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\tune-popover\tune-popover.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], TunePopoverPage);

//# sourceMappingURL=tune-popover.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReaderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_input_modal_input_modal__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_popover_settings_popover__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tune_popover_tune_popover__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
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
    function ReaderPage(readerCtrl, inputPopCtrl, tunePopCtrl, inputModalCtrl, global, alertCtrl, toastCtrl, platform) {
        var _this = this;
        this.readerCtrl = readerCtrl;
        this.inputPopCtrl = inputPopCtrl;
        this.tunePopCtrl = tunePopCtrl;
        this.inputModalCtrl = inputModalCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.scaleState = 'shown';
        this.slideUpState = 'down';
        this.extraSpace = 0;
        this.alignment = "left";
        this.fontSize = 1.4;
        this.themeString = "pic";
        this.myGlobal = global;
        this.paddingSubscribe = global.paddingChange.subscribe(function (value) {
            _this.extraSpace = value;
        });
        this.hymnSubscribe = global.activeHymnChange.subscribe(function (value) {
            var hymnList = _this.myGlobal.getHymnList()['hymnal' + _this.myGlobal.getActiveHymnal()];
            var activeHymn = _this.myGlobal.getActiveHymn();
            _this.currentHymn = __WEBPACK_IMPORTED_MODULE_7_lodash__["filter"](hymnList, function (item) {
                return item.id == activeHymn;
            })[0];
            var currentHymn = _this.currentHymn['number'].replace(/f|s|t/i, "");
            _this.tunes = __WEBPACK_IMPORTED_MODULE_7_lodash__["filter"](hymnList, function (item) {
                return new RegExp(currentHymn + "(f|s|t)", "i").test(item['number']);
            });
            _this.isBookmarked = global.isInBookmark(_this.activeHymnal, _this.currentHymn['id']);
        });
        this.bookmarksSubscribe = global.bookmarksChange.subscribe(function (value) {
            _this.isBookmarked = global.isInBookmark(_this.activeHymnal, _this.currentHymn['id']);
        });
        this.themeSubscribe = global.themeChange.subscribe(function (value) {
            _this.themeString = value;
        });
    }
    ReaderPage.prototype.presentPopover = function (myEvent) {
        var popover = this.inputPopCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_settings_popover_settings_popover__["a" /* SettingsPopoverPage */], {
            ctrl: this,
        });
        popover.present({
            ev: myEvent
        });
    };
    ReaderPage.prototype.presentTunePopover = function (myEvent) {
        var popover = this.inputPopCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pages_tune_popover_tune_popover__["a" /* TunePopoverPage */], {
            ctrl: this,
            tunes: this.tunes,
            activeHymn: this.currentHymn['number']
        });
        popover.present({
            ev: myEvent
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
        this.currentHymn = __WEBPACK_IMPORTED_MODULE_7_lodash__["filter"](hymnList, function (item) {
            return item.id == activeHymn;
        })[0];
        this.isBookmarked = this.myGlobal.isInBookmark(this.activeHymnal, this.currentHymn);
        this.fontSize = this.myGlobal.getFontSize();
        this.scrollContent = this.lyricsContainerRef._elementRef.nativeElement.querySelector('.scroll-content');
        this.divTab = this.readerCtrl.parent._elementRef.nativeElement.querySelector('.tabbar');
        var currentHymn = this.currentHymn;
        this.tunes = __WEBPACK_IMPORTED_MODULE_7_lodash__["filter"](hymnList, function (item) {
            return /[0-9]+(f|s|t)/i.test(currentHymn['number']);
        });
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
        this.zoom(Math.sign(event.scale));
    };
    ReaderPage.prototype.toggleFullLyrics = function (ev) {
        var margUp = "";
        var translateUp = "";
        if (this.platform.is('android') || this.platform.is('core')) {
            margUp = '63px 0';
            translateUp = 'translate(0, 63px)';
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
    ReaderPage.prototype.scroll = function (e) {
        if (e.ctrlKey) {
            e.preventDefault();
            this.zoom(Math.sign(e.wheelDelta));
        }
    };
    ReaderPage.prototype.zoom = function (sign) {
        var prod = (0.2 * sign);
        this.fontSize = parseFloat((this.fontSize + prod).toFixed(2));
        var fontSize = this.fontSize;
        this.myGlobal.setFontSize(fontSize);
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
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('mousewheel', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WheelEvent]),
    __metadata("design:returntype", void 0)
], ReaderPage.prototype, "scroll", null);
ReaderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-reader',template:/*ion-inline-start:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\reader\reader.html"*/'<!--\n  Generated template for the ReaderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header #readerHeader [@slideUp]="slideUpState">\n    <ion-navbar>\n        <ion-buttons start>\n            <button ion-button icon-only (click)="presentPopover($event)" id="settings">\n                <span class="fa fa-font"></span>\n            </button>\n        </ion-buttons>\n        <ion-title>MobiHymn</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="toggleBookmark()">\n                <ion-icon name="star-outline" *ngIf="!isBookmarked"></ion-icon>\n                <ion-icon name="star" *ngIf="isBookmarked"></ion-icon>\n            </button>\n            <button ion-button icon-only (click)="presentInputModal()">\n                <ion-icon name="musical-note"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding #lyricsContainer class="{{ \'theme-\' + themeString }}">\n    <div class="hymn-content" *ngIf="currentHymn" (pinch)="pinchZoom($event)" [ngStyle]="{\'paddingBottom.px\': extraSpace, \'text-align\': alignment, \'fontSize.em\': fontSize }">\n        <div class="hymn-title">\n            <h2 class="hymn-title" (click)="presentTunePopover($event)">Hymn #{{ currentHymn.title }}</h2>\n        </div>        \n        <div class="lyrics" [innerHTML]="currentHymn.lyrics" (click)="toggleFullLyrics($event)">\n        </div>\n    </div>\n\n    <ion-fab bottom right>\n        <button ion-fab #btnPlay [@scale]="scaleState">\n            <ion-icon name="play"></ion-icon>\n        </button>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\reader\reader.html"*/,
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
                    transform: 'translate(0px, -63px)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* state */])('down', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                    transform: 'translate(0px, 0px)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('up <=> down', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('500ms ease'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__services_global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */]])
], ReaderPage);

//# sourceMappingURL=reader.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global_service__ = __webpack_require__(42);
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
        var a1 = a.line.replace(/^(\"|\')/, "");
        var b1 = b.line.replace(/^(\"|\')/, "");
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
        selector: 'page-search',template:/*ion-inline-start:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\search\search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Search</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-searchbar (search)="getItems($event)" #searchHymn [showCancelButton]="true" [animated]="true" placeholder="Search this hymnal"></ion-searchbar>\n    <ion-list>\n        <ion-list-header *ngIf="searchItems">{{ searchItems.length }} Result(s)</ion-list-header>\n        <ion-item *ngFor="let item of searchItems" (click)="goToReader(item.id)">\n            <h2>{{ item.line }}</h2>\n            <h3>Hymn #{{ item.number }}</h3>\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\search\search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_global_service__["a" /* GlobalService */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/author-modal/author-modal.module": [
		585,
		7
	],
	"../pages/input-modal/input-modal.module": [
		587,
		6
	],
	"../pages/reader/reader.module": [
		590,
		5
	],
	"../pages/revisions-modal/revisions-modal.module": [
		584,
		4
	],
	"../pages/search/search.module": [
		591,
		3
	],
	"../pages/settings-popover/settings-popover.module": [
		588,
		2
	],
	"../pages/settings/settings.module": [
		586,
		1
	],
	"../pages/tune-popover/tune-popover.module": [
		589,
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
webpackAsyncContext.id = 194;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reader_reader__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_global_service__ = __webpack_require__(42);
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

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(74);
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
    function HomePage(homeCtrl, global, http, platform, loadingCtrl) {
        var _this = this;
        this.homeCtrl = homeCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
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
        if (global.getActiveHymnal()) {
            this.goToReader(true);
        }
    }
    HomePage.prototype.setActiveHymnal = function (hymnalId) {
        this.showLoader();
        var activeHymnal = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.hymnalList, function (h) {
            return h.id == hymnalId;
        })[0];
        this.myGlobal.setActiveHymnal(activeHymnal['id']);
        this.myGlobal.setActiveHymn('1');
        this.activeHymnal = activeHymnal['id'];
        this.dismissLoader();
        this.goToReader(true);
    };
    HomePage.prototype.goToReader = function (enable) {
        this.homeCtrl.parent.getByIndex(1).enabled = enable;
        this.homeCtrl.parent.getByIndex(2).enabled = enable;
        this.homeCtrl.parent.select(1);
    };
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            this.platform.ready().then(function () {
                _this.retrieveHymnals();
            });
        }
        else {
            this.retrieveHymnals();
        }
    };
    HomePage.prototype.retrieveHymnals = function () {
        var _this = this;
        this.myGlobal.getHymnals(this.myHttp).subscribe(function (res) {
            _this.myGlobal.setHymnals(res.output);
        });
        this.activeHymnal = this.myGlobal.getActiveHymnal();
    };
    HomePage.prototype.showLoader = function () {
        this.readerLoader = this.loadingCtrl.create({
            content: 'Loading...',
            spinner: 'circles'
        });
        this.readerLoader.present();
    };
    HomePage.prototype.dismissLoader = function () {
        this.readerLoader.dismiss();
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_web_animations_js_web_animations_min__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_web_animations_js_web_animations_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_web_animations_js_web_animations_min__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_global_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_reader_reader__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_search_search__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_input_modal_input_modal__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_author_modal_author_modal__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_revisions_modal_revisions_modal__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_settings_popover_settings_popover__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tune_popover_tune_popover__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(260);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//import { KeyboardComponent } from '../components/keyboard/keyboard';












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_reader_reader__["a" /* ReaderPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_input_modal_input_modal__["a" /* InputModalPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_settings_popover_settings_popover__["a" /* SettingsPopoverPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_author_modal_author_modal__["a" /* AuthorModalPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_revisions_modal_revisions_modal__["a" /* RevisionsModalPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_tune_popover_tune_popover__["a" /* TunePopoverPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/revisions-modal/revisions-modal.module#RevisionsModalPageModule', name: 'RevisionsModalPage', segment: 'revisions-modal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/author-modal/author-modal.module#AuthorModalPageModule', name: 'AuthorModalPage', segment: 'author-modal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/input-modal/input-modal.module#InputModalPageModule', name: 'InputModalPage', segment: 'input-modal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings-popover/settings-popover.module#SettingsPopoverPageModule', name: 'SettingsPopoverPage', segment: 'settings-popover', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tune-popover/tune-popover.module#TunePopoverPageModule', name: 'TunePopoverPage', segment: 'tune-popover', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/reader/reader.module#ReaderPageModule', name: 'ReaderPage', segment: 'reader', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_reader_reader__["a" /* ReaderPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_input_modal_input_modal__["a" /* InputModalPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_settings_popover_settings_popover__["a" /* SettingsPopoverPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_author_modal_author_modal__["a" /* AuthorModalPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_revisions_modal_revisions_modal__["a" /* RevisionsModalPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_tune_popover_tune_popover__["a" /* TunePopoverPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_7__services_global_service__["a" /* GlobalService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
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
    function GlobalService(file, platform) {
        this.file = file;
        this.platform = platform;
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
        this.theme = "pic";
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
        this.themeChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
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
    GlobalService.prototype.setTheme = function (newValue) {
        this.theme = newValue;
        this.themeChange.next(this.theme);
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
    GlobalService.prototype.getTheme = function () {
        return this.theme;
    };
    GlobalService.prototype.getHymnals = function (http) {
        var url = "";
        if (this.platform.is('cordova'))
            url = this.file.applicationDirectory + 'www/assets/hymnals.json';
        else
            url = '../assets/hymnals.json';
        return http.get(url).map(function (res) { return res.json(); });
    };
    GlobalService.prototype.getHymns = function (http, i) {
        var url = "";
        if (this.platform.is('cordova'))
            url = this.file.applicationDirectory + 'www/assets/hymnal ' + i + '.json';
        else
            url = '../assets/hymnal ' + i + '.json';
        return http.get(url).map(function (res) { return res.json(); });
    };
    GlobalService.prototype.isInBookmark = function (hymnalId, hymnId) {
        return this.bookmarks.findIndex(function (i) { return i['hymnalId'] == hymnalId && i['hymnId'] == hymnId; }) >= 0;
    };
    return GlobalService;
}());
GlobalService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* Platform */]])
], GlobalService);

//# sourceMappingURL=global-service.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_global_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(104);
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
            _this.file.createFile(_this.storage + '/' + _this.MAIN_FOLDER_NAME, _this.BOOKMARKS_JSON_NAME, false).then(function () {
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
        this.file.checkFile(this.storage + '/' + this.MAIN_FOLDER_NAME, this.HISTORY_JSON_NAME).then(function () {
            if (mode == "write")
                _this.writeHistory(true);
            else
                _this.readHistory();
        }).catch(function () {
            _this.file.createFile(_this.storage + '/' + _this.MAIN_FOLDER_NAME, _this.HISTORY_JSON_NAME, false).then(function () {
                if (mode == "write")
                    _this.writeHistory(false);
            }).catch(function (err) {
                alert(err);
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
        this.file.checkFile(this.storage + '/' + this.MAIN_FOLDER_NAME, this.SETTINGS_JSON_NAME).then(function () {
            if (mode == "write")
                _this.writeSettings(true);
            else
                _this.readSettings();
        }).catch(function () {
            _this.file.createFile(_this.storage + '/' + _this.MAIN_FOLDER_NAME, _this.SETTINGS_JSON_NAME, false).then(function () {
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
            'fontSize': this.global.getFontSize(),
            'theme': this.global.getTheme()
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
            _this.global.setTheme(jsonData['theme']);
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

},[263]);
//# sourceMappingURL=main.js.map