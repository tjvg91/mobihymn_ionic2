webpackJsonp([11],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RevisionsModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-revisions-modal',template:/*ion-inline-start:"/Users/faid/mobihymn_ionic2/src/pages/revisions-modal/revisions-modal.html"*/'<!--\n  Generated template for the RevisionsModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Revisions</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="dismiss()" clear>\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="container" [innerHTML]="revisionString" *ngIf="revisionString">\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/faid/mobihymn_ionic2/src/pages/revisions-modal/revisions-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], RevisionsModalPage);

//# sourceMappingURL=revisions-modal.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-author-modal',template:/*ion-inline-start:"/Users/faid/mobihymn_ionic2/src/pages/author-modal/author-modal.html"*/'<!--\n  Generated template for the AuthorModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Author</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="dismiss()" clear>\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <!-- <img src="img/nin-live.png"/>  -->\n    <ion-card-content>\n      <ion-card-title>\n        Timothy John V. Gandionco\n      </ion-card-title>\n      <p>\n        Software developer for desktop, web, and mobile platforms.\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <div class="disclaimer">\n      <p>Disclaimer: hymnals here are not owned by application developer</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/faid/mobihymn_ionic2/src/pages/author-modal/author-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], AuthorModalPage);

//# sourceMappingURL=author-modal.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_revisions_modal_revisions_modal__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_author_modal_author_modal__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_global_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(44);
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
        this.recentNum = this.global.getRecentCount();
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
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/Users/faid/mobihymn_ionic2/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Settings</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-list-header>\n            Data\n        </ion-list-header>\n        <ion-item>\n            <ion-icon name="time" item-start></ion-icon>\n            <ion-label>Recent items</ion-label>\n            <ion-select [(ngModel)]="recentNum" (ionChange)="recentChange()">\n                <ion-option value="5">5</ion-option>\n                <ion-option value="6">6</ion-option>\n                <ion-option value="7">7</ion-option>\n                <ion-option value="8">8</ion-option>\n                <ion-option value="9">9</ion-option>\n                <ion-option value="10">10</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-list-header>\n            About\n        </ion-list-header>\n        <ion-item (tap)="showAuthorModal()">\n            <ion-icon name="person" item-start></ion-icon>\n            <ion-label>Author</ion-label>\n        </ion-item>\n        <ion-item (tap)="showRevisionModal()">\n            <ion-icon name="clock" item-start></ion-icon>\n            <ion-label>Revisions</ion-label>\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/faid/mobihymn_ionic2/src/pages/settings/settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__services_global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(75);
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





/**
 * Generated class for the InputModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var InputModalPage = (function () {
    function InputModalPage(viewCtrl, inputParams, alertCtrl, toastCtrl, file, platform, global) {
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.file = file;
        this.platform = platform;
        this.global = global;
        this.hymnList = new Array();
        this.MAIN_FOLDER_NAME = "MobiHymn";
        this.BOOKMARKS_JSON_NAME = "bookmarks.json";
        this.HISTORY_JSON_NAME = "history.json";
        this.inputType = "all_hymns";
        this.hymnLimit = 5;
        this.navParams = inputParams;
        this.fileRoot = platform.is('android') ? file.externalRootDirectory : file.documentsDirectory;
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
        this.hymnFilterString = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.hymnList, function (item) {
            return item.id == activeHymn;
        })[0].number.replace(/f|s|t/, '');
    };
    InputModalPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.hymnFilterSearchbar.value = _this.hymnFilterString;
            _this.filterHymns(null);
            _this.hymnFilterSearchbar.setFocus();
            _this.hymnFilterSearchbar._searchbarInput.nativeElement.select();
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
        var tempId = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.hymnList, function (item) {
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
        setTimeout(function () {
            //this.bkmkFilterSearchbar.setFocus();
        }, 200);
    };
    InputModalPage.prototype.hymnSelect = function () {
        var _this = this;
        setTimeout(function () {
            _this.hymnFilterSearchbar.setFocus();
            _this.hymnFilterSearchbar._searchbarInput.nativeElement.select();
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
    InputModalPage.prototype.refreshBookmarks = function () {
        var _this = this;
        var path = this.fileRoot + '/' + this.MAIN_FOLDER_NAME;
        this.file.readAsText(path, this.BOOKMARKS_JSON_NAME).then(function (data) {
            var jsonData = JSON.parse(data);
            _this.global.bookmarks = jsonData;
            _this.bookmarkList = jsonData;
        });
    };
    InputModalPage.prototype.refreshRecent = function () {
        var _this = this;
        var path = this.fileRoot + '/' + this.MAIN_FOLDER_NAME;
        this.file.readAsText(path, this.HISTORY_JSON_NAME).then(function (data) {
            var jsonData = JSON.parse(data);
            _this.global.history = jsonData;
            _this.recentList = jsonData;
        });
    };
    return InputModalPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('bkmkFilter'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Searchbar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Searchbar */]) === "function" && _a || Object)
], InputModalPage.prototype, "bkmkFilterSearchbar", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('hymnFilter'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Searchbar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Searchbar */]) === "function" && _b || Object)
], InputModalPage.prototype, "hymnFilterSearchbar", void 0);
InputModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-input-modal',template:/*ion-inline-start:"/Users/faid/mobihymn_ionic2/src/pages/input-modal/input-modal.html"*/'<!--\n  Generated template for the InputModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="dismiss()" clear>\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-segment [(ngModel)]="inputType">\n        <ion-segment-button value="all_hymns" (click)="hymnSelect()">\n            All hymns\n        </ion-segment-button>\n        <ion-segment-button value="bookmarks">\n            Bookmarks\n        </ion-segment-button>\n        <ion-segment-button value="recent">\n            Recent\n        </ion-segment-button>\n    </ion-segment>\n</ion-header>\n\n\n<ion-content padding>\n    <div [ngSwitch]="inputType">\n        <div *ngSwitchCase="\'all_hymns\'" #allHymns>\n            <ion-searchbar (keyup.enter)="preSetActiveHymn(hymnFilter.value)" (ionInput)="filterHymns($event)" [showCancelButton]="true" placeholder="Search hymn" type="number" [(ngModel)]="hymnTextFilter" #hymnFilter></ion-searchbar>\n            <!-- <div class="input-labels">\n                <label class="input-label" (click)="showKeyboard()">\n                    {{ hymnFilterString }}\n                </label>\n            </div> -->\n            <ion-list>\n                <ion-item *ngFor="let hymn of hymnList | slice:0:hymnLimit;" (click)="setActiveHymn(hymn[\'id\'])">\n                    <h2>{{ \'Hymn #\' + hymn.number }}</h2>\n                    <p>{{ hymn.firstLine }}</p>\n                </ion-item>\n            </ion-list>\n            <p class="indicator">{{ getIndicator() }}</p>\n            <!-- <ion-infinite-scroll (ionInfinite)="hymnsInfinite($event)">\n                <ion-infinite-scroll-content></ion-infinite-scroll-content>\n            </ion-infinite-scroll> -->\n            <!-- <keyboard (outputChange)="handleKeyChange($event)" [(keyboardView)]="keyboardShow"></keyboard> -->\n        </div>\n        <div *ngSwitchCase="\'bookmarks\'">\n            <!--<ion-refresher (ionRefresh)="refreshBookmarks()">\n                <ion-refresher-content\n                    pullingIcon="arrow-dropdown"\n                    pullingText="Pull to refresh"\n                    refreshingSpinner="circles"\n                    refreshingText="Refreshing...">\n                </ion-refresher-content>\n            </ion-refresher>-->\n            <ion-searchbar (ionInput)="filterHymns($event)" [showCancelButton]="true" placeholder="Search bookmarks" type="number" [(ngModel)]="bkmkFilterText" #bkmkFilter></ion-searchbar>\n            <ion-list>\n                <ion-item-sliding *ngFor="let bkmk of bookmarkList" (click)="setActiveHymn(bkmk[\'hymnId\'])">\n                    <ion-item>\n                        <h2>{{ bkmk[\'firstLine\'] }}</h2>\n                        <p>Hymn #{{ bkmk[\'title\'] }}</p>\n                    </ion-item>\n                    <ion-item-options side="left">\n                        <button ion-button color="danger" (click)="presentConfirmUnbookmark()">\n                            <ion-icon name="close"></ion-icon>\n                            Remove\n                        </button>\n                    </ion-item-options>\n                </ion-item-sliding>\n            </ion-list>\n        </div>\n        <div *ngSwitchCase="\'recent\'">\n            <!--<ion-refresher (ionRefresh)="refreshRecent()">\n                <ion-refresher-content\n                    pullingIcon="arrow-dropdown"\n                    pullingText="Pull to refresh"\n                    refreshingSpinner="circles"\n                    refreshingText="Refreshing...">\n                </ion-refresher-content>\n            </ion-refresher>-->\n            <ion-list>\n                <ion-item *ngFor="let recent of recentList" (click)="setActiveHymn(recent[\'hymnId\'])">\n                    <h2>Hymn #{{ recent.hymnNumber }}</h2>\n                    <p>{{ recent.firstLine }}</p>\n                </ion-item>\n            </ion-list>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/faid/mobihymn_ionic2/src/pages/input-modal/input-modal.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__services_global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_global_service__["a" /* GlobalService */]) === "function" && _j || Object])
], InputModalPage);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=input-modal.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPopoverItemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_popover_list_settings_popover_list__ = __webpack_require__(80);
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
 * Generated class for the SettingsPopoverItemsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SettingsPopoverItemsPage = (function () {
    function SettingsPopoverItemsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.activeList = "";
        this.fontSizes = [1.4, 1.9, 2.4, 2.9, 3.4];
        this.fontNames = ["Roboto", "Cookie", "Cormorant", "EB Garamond", "Give You Glory",
            "Princess Sofia", "Satisfy"];
        this.alignments = ["left", "center", "right"];
        this.themes = ["light", "tan", "dark", "black", "pic"];
        this.activeList = this.navParams.get('dest');
        this.global = this.navParams.get('global');
        this.data = JSON.parse(window.localStorage.getItem('data'));
        this.activeFontName = this.data['fontName'];
        this.alignmentText = this.data['alignment'];
        this.themeText = this.data['theme'];
        this.paddingText = this.data['extraSpace'];
        this.activeFontSize = parseFloat(this.data['fontSize']);
    }
    SettingsPopoverItemsPage.prototype.goBack = function () {
        //this.navCtrl.pop();
        this.navCtrl.popTo(__WEBPACK_IMPORTED_MODULE_2__settings_popover_list_settings_popover_list__["a" /* SettingsPopoverListPage */], {
            'global': this.global
        });
    };
    SettingsPopoverItemsPage.prototype.paddingChange = function () {
        this.global.setPadding(this.paddingText);
    };
    SettingsPopoverItemsPage.prototype.alignmentChange = function () {
        this.global.setActiveAlignment(this.alignmentText);
    };
    SettingsPopoverItemsPage.prototype.themeChange = function () {
        this.global.setTheme(this.themeText);
    };
    SettingsPopoverItemsPage.prototype.fontSizeChange = function () {
        this.global.setFontSize(this.activeFontSize);
    };
    SettingsPopoverItemsPage.prototype.fontNameChange = function () {
        this.global.setFontName(this.activeFontName);
    };
    return SettingsPopoverItemsPage;
}());
SettingsPopoverItemsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings-popover-items',template:/*ion-inline-start:"/Users/faid/mobihymn_ionic2/src/pages/settings-popover-items/settings-popover-items.html"*/'<!--\n  Generated template for the SettingsPopoverItemsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <button ion-button clear (click)="goBack()">\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div *ngIf="activeList == \'Alignment\'">\n    <ion-list radio-group [(ngModel)]="alignmentText" (ionChange)="alignmentChange()">\n        <ion-item *ngFor="let align of alignments" tappable>\n          <span class="fa fa-align-{{align}}"></span>\n          <ion-label>{{ align.charAt(0).toUpperCase() + align.slice(1) }}</ion-label>\n          <ion-radio value="{{ align }}"></ion-radio>\n        </ion-item>\n    </ion-list>\n  </div>\n  <div *ngIf="activeList == \'Theme\'">\n    <ion-list radio-group [(ngModel)]="themeText" (ionChange)="themeChange()">\n      <ion-item *ngFor="let theme of themes" tappable>\n          <ion-label>{{ theme.charAt(0).toUpperCase() + theme.slice(1) }}</ion-label>\n          <ion-radio value="{{ theme }}"></ion-radio>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div *ngIf="activeList == \'Font Size\'">\n    <ion-list radio-group [(ngModel)]="activeFontSize" (ionChange)="fontSizeChange()">\n      <ion-item *ngFor="let size of fontSizes" tappable>\n          <ion-label>{{ size }}</ion-label>\n          <ion-radio value="{{ size }}"></ion-radio>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div *ngIf="activeList == \'Font Name\'">\n    <ion-list radio-group [(ngModel)]="activeFontName" (ionChange)="fontNameChange()">\n      <ion-item *ngFor="let name of fontNames" tappable>\n          <ion-label [ngStyle]="{ \'fontFamily\': name }">{{ name }}</ion-label>\n          <ion-radio value="{{ name }}"></ion-radio>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div *ngIf="activeList == \'Extra Spacing\'">\n    <ion-range min="0" max="500" [(ngModel)]="paddingText" step="10" snap="true" pin="true" (ionChange)="paddingChange()">\n        <ion-label range-left>0</ion-label>\n        <ion-label range-right>500</ion-label>\n    </ion-range>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/faid/mobihymn_ionic2/src/pages/settings-popover-items/settings-popover-items.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], SettingsPopoverItemsPage);

//# sourceMappingURL=settings-popover-items.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_popover_list_settings_popover_list__ = __webpack_require__(80);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__settings_popover_list_settings_popover_list__["a" /* SettingsPopoverListPage */];
        var main = this.navParams.get('ctrl');
        this.global = main['myGlobal'];
    }
    return SettingsPopoverPage;
}());
SettingsPopoverPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings-popover',template:/*ion-inline-start:"/Users/faid/mobihymn_ionic2/src/pages/settings-popover/settings-popover.html"*/'<!--\n  Generated template for the SettingsPopoverPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n    <ion-nav [root]="rootPage" [rootParams]="{\'global\': global}"></ion-nav>\n</ion-content>'/*ion-inline-end:"/Users/faid/mobihymn_ionic2/src/pages/settings-popover/settings-popover.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], SettingsPopoverPage);

//# sourceMappingURL=settings-popover.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TunePopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(75);
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
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tune-popover',template:/*ion-inline-start:"/Users/faid/mobihymn_ionic2/src/pages/tune-popover/tune-popover.html"*/'<ion-content>\n  <ion-list radio-group [(ngModel)]="activeTune" (ionChange)="tuneChange($event)">\n    <ion-item *ngFor="let t of tunes">\n      <ion-label>{{ t.name }}</ion-label>\n      <ion-radio value="{{ t.val }}"></ion-radio>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/faid/mobihymn_ionic2/src/pages/tune-popover/tune-popover.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], TunePopoverPage);

//# sourceMappingURL=tune-popover.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReaderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_input_modal_input_modal__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_popover_settings_popover__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tune_popover_tune_popover__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_media__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash__);
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
    function ReaderPage(readerCtrl, inputPopCtrl, tunePopCtrl, inputModalCtrl, global, alertCtrl, toastCtrl, platform, statusBar, media, file) {
        var _this = this;
        this.readerCtrl = readerCtrl;
        this.inputPopCtrl = inputPopCtrl;
        this.tunePopCtrl = tunePopCtrl;
        this.inputModalCtrl = inputModalCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.statusBar = statusBar;
        this.media = media;
        this.file = file;
        this.scaleState = 'shown';
        this.slideUpState = 'down';
        this.extraSpace = 0;
        this.alignment = "left";
        this.fontSize = 1.4;
        this.themeString = "pic";
        this.fontName = "Roboto";
        this.curScale = 0;
        this.midi = {
            name: '',
            duration: 0
        };
        this.curTime = 0;
        this.myGlobal = global;
        this.paddingSubscribe = global.paddingChange.subscribe(function (value) {
            _this.extraSpace = value;
        });
        this.hymnSubscribe = global.activeHymnChange.subscribe(function (value) {
            _this.activeHymnal = _this.myGlobal.getActiveHymnal();
            var hymnList = _this.myGlobal.getHymnList()['hymnal' + _this.myGlobal.getActiveHymnal()];
            var activeHymn = _this.myGlobal.getActiveHymn();
            _this.currentHymn = __WEBPACK_IMPORTED_MODULE_10_lodash__["filter"](hymnList, function (item) {
                return item.id == activeHymn;
            })[0];
            var currentHymnNum = _this.currentHymn['number'].replace(/f|s|t/i, "");
            _this.tunes = __WEBPACK_IMPORTED_MODULE_10_lodash__["filter"](hymnList, function (item) {
                return new RegExp('^' + currentHymnNum + "(f|s|t)", "i").test(item['number']);
            });
            _this.isBookmarked = global.isInBookmark(_this.activeHymnal, _this.currentHymn['id']);
        });
        this.bookmarksSubscribe = global.bookmarksChange.subscribe(function (value) {
            _this.isBookmarked = global.isInBookmark(_this.activeHymnal, _this.currentHymn['id']);
        });
        this.themeSubscribe = global.themeChange.subscribe(function (value) {
            _this.themeString = value;
        });
        this.fontSizeSubscribe = global.fontSizeChange.subscribe(function (value) {
            _this.fontSize = value;
        });
        this.fontNameSubscribe = global.fontNameChange.subscribe(function (value) {
            _this.fontName = value;
        });
        this.alignmentSubscribe = global.activeAlignmentChange.subscribe(function (value) {
            _this.alignment = value;
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
        this.currentHymn = __WEBPACK_IMPORTED_MODULE_10_lodash__["filter"](hymnList, function (item) {
            return item.id == activeHymn;
        })[0];
        if (this.platform.is('cordova'))
            this.midi.name = this.file.applicationDirectory + "www/assets/midi/h" + this.currentHymn['number'] + '.mid';
        else
            this.midi.name = "../assets/midi/h" + this.currentHymn['number'] + '.mid';
        this.isBookmarked = this.myGlobal.isInBookmark(this.activeHymnal, this.currentHymn);
        this.fontSize = this.myGlobal.getFontSize();
        this.extraSpace = this.myGlobal.getPadding();
        this.themeString = this.myGlobal.getTheme();
        this.alignment = this.myGlobal.getActiveAlignment();
        this.fontName = this.myGlobal.getFontName();
        this.lyricsContainer = this.lyricsContainerRef._elementRef.nativeElement;
        this.scrollContent = this.lyricsContainerRef._elementRef.nativeElement.querySelector('.scroll-content');
        this.divTab = this.readerCtrl.parent._elementRef.nativeElement.querySelector('.tabbar');
        var currentHymn = this.currentHymn;
        this.tunes = __WEBPACK_IMPORTED_MODULE_10_lodash__["filter"](hymnList, function (item) {
            return new RegExp('^' + currentHymn['number'] + "(f|s|t)", "i").test(item['number']);
        });
        this.initializePlayer();
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
        var val = this.curScale > event.scale ? -1 : 1;
        this.zoom(val);
        this.curScale = event.scale;
    };
    ReaderPage.prototype.toggleFullLyrics = function (ev) {
        var margUp = "";
        var translateUpTab = "";
        var translateUpFooter = "";
        if (this.platform.is('android') || this.platform.is('core')) {
            margUp = '63px 0 100px';
            translateUpTab = 'translate(0, 63px)';
            translateUpFooter = 'translate(0, 123px)';
        }
        else if (this.platform.is('ios')) {
            margUp = '44px 0 80px';
            translateUpTab = 'translate(0, 51px)';
            translateUpFooter = 'translate(0, 115px)';
        }
        else {
            margUp = '115px 0 60px';
            translateUpTab = 'translate(0, -115px)';
            translateUpFooter = 'translate(0, 115px)';
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
                { offset: 1, 'transform': translateUpTab }
            ], {
                duration: 500,
                easing: 'ease',
                fill: 'forwards'
            });
            this.footerReader.nativeElement.animate([
                { offset: 0, 'transform': 'translate(0, 0)' },
                { offset: 1, 'transform': translateUpFooter }
            ], {
                duration: 500,
                easing: 'ease',
                fill: 'forwards'
            });
            this.slideUpState = 'up';
            this.scaleState = 'hidden';
            //this.statusBar.hide();
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
                { offset: 0, 'transform': translateUpTab },
                { offset: 1, 'transform': 'translate(0, 0)' }
            ], {
                duration: 500,
                easing: 'ease',
                fill: 'forwards'
            });
            this.footerReader.nativeElement.animate([
                { offset: 0, 'transform': translateUpFooter },
                { offset: 1, 'transform': 'translate(0, 0)' }
            ], {
                duration: 500,
                easing: 'ease',
                fill: 'forwards'
            });
            this.slideUpState = 'down';
            this.scaleState = 'shown';
            //this.statusBar.show();
        }
    };
    ReaderPage.prototype.scroll = function (e) {
        if (e.ctrlKey) {
            e.preventDefault();
            this.zoom(Math.sign(e.wheelDelta));
        }
    };
    ReaderPage.prototype.zoom = function (sign) {
        var prod = (0.1 * sign);
        var fontSize = sign < 0 ? Math.max(parseFloat((this.fontSize + prod).toFixed(2)), 1.4) :
            Math.min(parseFloat((this.fontSize + prod).toFixed(2)), 3.6);
        this.myGlobal.setFontSize(fontSize);
    };
    ReaderPage.prototype.initializePlayer = function () {
        var _this = this;
        try {
            var path = this.midi.name;
            this.midiFile = this.media.create(path);
            this.midiFile.onSuccess.subscribe(function () {
                _this.midi.duration = _this.midiFile.getDuration();
            });
            this.midiFile.onStatusUpdate.subscribe(function (status) { return console.log(status); });
        }
        catch (err) {
            console.log(err);
        }
    };
    ReaderPage.prototype.secsToMins = function (secs) {
        var num = parseInt(secs) / 60;
        return num + ":" + this.pad(secs % 60, 2);
    };
    ReaderPage.prototype.pad = function (num, size) {
        var s = String(num);
        while (s.length < (size || 2)) {
            s = "0" + s;
        }
        return s;
    };
    return ReaderPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('readerHeader'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], ReaderPage.prototype, "divHeader", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('lyricsContainer'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Content */])
], ReaderPage.prototype, "lyricsContainerRef", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('footerReader'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], ReaderPage.prototype, "footerReader", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('mousewheel', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WheelEvent]),
    __metadata("design:returntype", void 0)
], ReaderPage.prototype, "scroll", null);
ReaderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-reader',template:/*ion-inline-start:"/Users/faid/mobihymn_ionic2/src/pages/reader/reader.html"*/'<!--\n  Generated template for the ReaderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header #readerHeader [@slideUp]="slideUpState">\n    <ion-navbar color="dark">\n        <ion-buttons start>\n            <button ion-button icon-only (click)="presentPopover($event)" id="settings">\n                <span class="fa fa-font"></span>\n            </button>\n        </ion-buttons>\n        <ion-title>MobiHymn</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="toggleBookmark()">\n                <ion-icon name="star-outline" *ngIf="!isBookmarked"></ion-icon>\n                <ion-icon name="star" *ngIf="isBookmarked"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding #lyricsContainer class="{{ \'theme-\' + themeString }}">\n    <div class="hymn-content" *ngIf="currentHymn" (pinchmove)="pinchZoom($event)" (pinchend)="curScale = 0"\n        [ngStyle]="{\'paddingBottom.px\': extraSpace, \'text-align\': alignment, \'fontSize.em\': fontSize, \'fontFamily\': fontName}">\n        <div class="hymn-title">\n            <h2 class="hymn-title" (click)="presentTunePopover($event)">Hymn #{{ currentHymn.title }}</h2>\n        </div>\n        <div class="lyrics" [innerHTML]="currentHymn.lyrics" (tap)="toggleFullLyrics($event)">\n        </div>\n    </div>\n\n    <ion-fab bottom right>\n        <button ion-fab [@scale]="scaleState" (click)="presentInputModal()">\n            <ion-icon name="musical-note"></ion-icon>\n        </button>\n    </ion-fab>\n</ion-content>\n\n<ion-footer #footerReader>\n    <ion-toolbar>\n        <div class="player">\n            <button ion-button clear>\n                <ion-icon name="play"></ion-icon>\n            </button>\n            <ion-range min="0" max="{{midi.duration}}" value="0" ion-Change step="1" (ionChange)="playerChange($event)">\n                <ion-label range-left>{{ secsToMins(curTime) }}</ion-label>\n                <ion-label range-right>{{ secsToMins(midi.duration) }}</ion-label>\n            </ion-range>\n        </div>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/faid/mobihymn_ionic2/src/pages/reader/reader.html"*/,
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__services_global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_media__["a" /* Media */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */]])
], ReaderPage);

//# sourceMappingURL=reader.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(568);
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
        this.searchCtrl.parent.select(0);
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
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Searchbar */])
], SearchPage.prototype, "hymnFilterSearchbar", void 0);
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"/Users/faid/mobihymn_ionic2/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Search</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-searchbar (search)="getItems($event)" #searchHymn [showCancelButton]="true" [animated]="true" placeholder="Search this hymnal"></ion-searchbar>\n    <ion-list>\n        <ion-list-header *ngIf="searchItems">{{ searchItems.length }} Result(s)</ion-list-header>\n        <ion-item *ngFor="let item of searchItems" (click)="goToReader(item.id)">\n            <h2>{{ item.line }}</h2>\n            <h3>Hymn #{{ item.number }}</h3>\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/faid/mobihymn_ionic2/src/pages/search/search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_global_service__["a" /* GlobalService */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 153:
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
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/author-modal/author-modal.module": [
		589,
		10
	],
	"../pages/image-maker/image-maker.module": [
		598,
		9
	],
	"../pages/input-modal/input-modal.module": [
		591,
		8
	],
	"../pages/reader/reader.module": [
		596,
		7
	],
	"../pages/revisions-modal/revisions-modal.module": [
		588,
		6
	],
	"../pages/search/search.module": [
		597,
		5
	],
	"../pages/settings-popover-items/settings-popover-items.module": [
		592,
		4
	],
	"../pages/settings-popover-list/settings-popover-list.module": [
		593,
		3
	],
	"../pages/settings-popover/settings-popover.module": [
		594,
		2
	],
	"../pages/settings/settings.module": [
		590,
		1
	],
	"../pages/tune-popover/tune-popover.module": [
		595,
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
webpackAsyncContext.id = 197;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reader_reader__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(142);
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
    function TabsPage(myGlobal, navCtrl, platform) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__reader_reader__["a" /* ReaderPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */];
        this.activeHymnal = myGlobal.getActiveHymnal();
    }
    TabsPage.prototype.tabChange = function (event) {
        /*this.platform.registerBackButtonAction(() => {
          this.navCtrl.push(event);
        });*/
    };
    TabsPage.prototype.ionViewDidLoad = function () {
        /*this.platform.registerBackButtonAction(() => {
          this.navCtrl.push(this.tab1Root);
        })*/
    };
    return TabsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('#myTabs'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Tabs */])
], TabsPage.prototype, "tabRef", void 0);
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/faid/mobihymn_ionic2/src/pages/tabs/tabs.html"*/'<ion-tabs class="tabs-md-dark" #myTabs [selectedIndex]="0" (ionChange)="tabChange($event)">\n    <ion-tab [root]="tab2Root" tabTitle="Read" tabIcon="glasses" enabled="activeHymnal"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Search" tabIcon="search" enabled="activeHymnal"></ion-tab>\n    <ion-tab [root]="tab1Root" tabTitle="Library" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="Settings" tabIcon="settings"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/faid/mobihymn_ionic2/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(75);
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
        this.activeHymnalSubscribe = global.activeHymnalChange.subscribe(function (val) {
            if (val) {
                _this.activeHymnal = val;
                _this.goToReader(true);
            }
        });
    }
    HomePage.prototype.setActiveHymnal = function (hymnalId) {
        this.showLoader();
        var activeHymnal = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.hymnalList, function (h) {
            return h.id == hymnalId;
        })[0];
        this.dismissLoader();
        this.myGlobal.setActiveHymnal(activeHymnal['id']);
        this.myGlobal.setActiveHymn('1');
    };
    HomePage.prototype.goToReader = function (enable) {
        this.homeCtrl.parent.getByIndex(0).enabled = enable;
        this.homeCtrl.parent.getByIndex(1).enabled = enable;
        this.homeCtrl.parent.select(0);
    };
    HomePage.prototype.ionViewDidLoad = function () {
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
        this.activeHymnalSubscribe.unsubscribe();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/faid/mobihymn_ionic2/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Library</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-lg-4 col-md-6 col-sm-12 *ngFor="let hymnal of hymnalList">\n                <ion-card (tap)="setActiveHymnal(hymnal.id)" [ngClass]="{ \'active\': (activeHymnal == hymnal.id) }">\n                    <div class="card-image">\n                        <img src="{{ \'assets/\' + hymnal.image}}" />\n                    </div>\n                    <ion-card-content>\n                        <ion-card-title>\n                            {{hymnal.name}}\n                        </ion-card-title>\n                        <p>\n                            {{hymnal.count}} hymns\n                        </p>\n                    </ion-card-content>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/faid/mobihymn_ionic2/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageMakerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
 * Generated class for the ImageMakerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ImageMakerPage = (function () {
    function ImageMakerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ImageMakerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImageMakerPage');
    };
    return ImageMakerPage;
}());
ImageMakerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-image-maker',template:/*ion-inline-start:"/Users/faid/mobihymn_ionic2/src/pages/image-maker/image-maker.html"*/'<!--\n  Generated template for the ImageMakerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/faid/mobihymn_ionic2/src/pages/image-maker/image-maker.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], ImageMakerPage);

//# sourceMappingURL=image-maker.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_web_animations_js_web_animations_min__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_web_animations_js_web_animations_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_web_animations_js_web_animations_min__);




Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_20" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export HammerConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_global_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_reader_reader__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_search_search__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_input_modal_input_modal__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_author_modal_author_modal__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_revisions_modal_revisions_modal__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_settings_popover_settings_popover__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tune_popover_tune_popover__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_settings_popover_items_settings_popover_items__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_settings_popover_list_settings_popover_list__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_image_maker_image_maker__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_intro_slider_intro_slider__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_file__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_insomnia__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_media__ = __webpack_require__(223);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
            __WEBPACK_IMPORTED_MODULE_16__pages_tune_popover_tune_popover__["a" /* TunePopoverPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_settings_popover_items_settings_popover_items__["a" /* SettingsPopoverItemsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_settings_popover_list_settings_popover_list__["a" /* SettingsPopoverListPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_image_maker_image_maker__["a" /* ImageMakerPage */],
            __WEBPACK_IMPORTED_MODULE_21__components_intro_slider_intro_slider__["a" /* IntroSliderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/revisions-modal/revisions-modal.module#RevisionsModalPageModule', name: 'RevisionsModalPage', segment: 'revisions-modal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/author-modal/author-modal.module#AuthorModalPageModule', name: 'AuthorModalPage', segment: 'author-modal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/input-modal/input-modal.module#InputModalPageModule', name: 'InputModalPage', segment: 'input-modal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings-popover-items/settings-popover-items.module#SettingsPopoverItemsPageModule', name: 'SettingsPopoverItemsPage', segment: 'settings-popover-items', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings-popover-list/settings-popover-list.module#SettingsPopoverListPageModule', name: 'SettingsPopoverListPage', segment: 'settings-popover-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings-popover/settings-popover.module#SettingsPopoverPageModule', name: 'SettingsPopoverPage', segment: 'settings-popover', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tune-popover/tune-popover.module#TunePopoverPageModule', name: 'TunePopoverPage', segment: 'tune-popover', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/reader/reader.module#ReaderPageModule', name: 'ReaderPage', segment: 'reader', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/image-maker/image-maker.module#ImageMakerPageModule', name: 'ImageMakerPage', segment: 'image-maker', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* IonicApp */]],
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
            __WEBPACK_IMPORTED_MODULE_16__pages_tune_popover_tune_popover__["a" /* TunePopoverPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_settings_popover_items_settings_popover_items__["a" /* SettingsPopoverItemsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_settings_popover_list_settings_popover_list__["a" /* SettingsPopoverListPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_image_maker_image_maker__["a" /* ImageMakerPage */],
            __WEBPACK_IMPORTED_MODULE_21__components_intro_slider_intro_slider__["a" /* IntroSliderComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_insomnia__["a" /* Insomnia */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_26__ionic_native_media__["a" /* Media */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_7__services_global_service__["a" /* GlobalService */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* HAMMER_GESTURE_CONFIG */], useClass: __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* HammerGestureConfig */] }
        ]
    })
], AppModule);

var HammerConfig = (function (_super) {
    __extends(HammerConfig, _super);
    function HammerConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HammerConfig.prototype.buildHammer = function (element) {
        var mc = new Hammer(element, {
            touchAction: "pan-y",
        });
        return mc;
    };
    return HammerConfig;
}(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* HammerGestureConfig */]));

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(301);
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
        this.fontName = "Roboto";
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
        this.fontNameChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
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
        var diff = this.history.length - newValue;
        if (diff > 0)
            this.history.splice(this.history.length - diff, diff);
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
    GlobalService.prototype.setFontName = function (newValue) {
        this.fontName = newValue;
        this.fontNameChange.next(this.fontName);
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
        var activeHymnal = this.activeHymnal;
        return this.bookmarks.filter(function (x) {
            return x['hymnalId'] == activeHymnal;
        });
    };
    GlobalService.prototype.getRecentList = function () {
        var activeHymnal = this.activeHymnal;
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
    GlobalService.prototype.getFontName = function () {
        return this.fontName;
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* Platform */]])
], GlobalService);

//# sourceMappingURL=global-service.js.map

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_global_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_insomnia__ = __webpack_require__(266);
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
        if (platform.is('cordova')) {
            platform.ready().then(function () {
                // Okay, so the platform is ready and our plugins are available.
                // Here you can do any higher level native things you might need.
                statusBar.styleDefault();
                statusBar.hide();
                splashScreen.hide();
                insomnia.keepAwake();
                _this.android = platform.is('android');
                _this.ios = platform.is('ios');
                _this.wp = platform.is('wp');
                _this.storage = _this.android ? file.externalRootDirectory : file.documentsDirectory;
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
        }).catch(function (err) {
            _this.file.createFile(_this.storage + '/' + _this.MAIN_FOLDER_NAME, _this.BOOKMARKS_JSON_NAME, false).then(function () {
                if (mode == "write")
                    _this.writeBookmarks(false);
                else
                    _this.readBookmarks();
            }).catch(function (err) {
                if (err.message == "PATH_EXISTS_ERR")
                    if (mode == "write")
                        _this.writeBookmarks(true);
                    else
                        _this.readBookmarks();
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
        this.file.readAsText(this.storage + '/' + this.MAIN_FOLDER_NAME, this.BOOKMARKS_JSON_NAME).then(function (data) {
            var bkmkArray = JSON.parse(data);
            _this.global.bookmarks = bkmkArray;
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
                else
                    _this.readHistory();
            }).catch(function (err) {
                if (err.message == "PATH_EXISTS_ERR") {
                    if (mode == "write")
                        _this.writeHistory(true);
                    else
                        _this.readHistory();
                }
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
        this.file.readAsText(this.storage + '/' + this.MAIN_FOLDER_NAME, this.HISTORY_JSON_NAME).then(function (data) {
            var histArray = JSON.parse(data);
            _this.global.history = histArray;
        });
    };
    MyApp.prototype.checkSettings = function (mode) {
        var _this = this;
        var path = this.storage + '/' + this.MAIN_FOLDER_NAME;
        var filename = this.SETTINGS_JSON_NAME;
        this.file.checkFile(path, filename).then(function () {
            if (mode == "write")
                _this.writeSettings(true);
            else
                _this.readSettings();
        }).catch(function (err) {
            if (err.message = "PATH_EXISTS_ERR") {
                if (mode == "read")
                    _this.readSettings();
                else
                    _this.writeSettings(true);
            }
            else {
                _this.file.createFile(path, filename, false).then(function () {
                    if (mode = "write")
                        _this.writeSettings(false);
                });
            }
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
            'fontName': this.global.getFontName(),
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
        this.file.readAsText(this.storage + '/' + this.MAIN_FOLDER_NAME, this.SETTINGS_JSON_NAME).then(function (data) {
            var jsonData = JSON.parse(data);
            _this.global.setActiveHymnal(jsonData["activeHymnal"]);
            _this.global.activeHymn = jsonData["activeHymn"];
            if (jsonData["fontSize"])
                _this.global.setFontSize(jsonData["fontSize"]);
            if (jsonData["fontName"])
                _this.global.setFontName(jsonData["fontName"]);
            if (jsonData["recentCount"])
                _this.global.setRecentCount(jsonData["recentCount"]);
            if (jsonData["extraSpace"])
                _this.global.setPadding(jsonData["extraSpace"]);
            if (jsonData["alignment"])
                _this.global.setActiveAlignment(jsonData["alignment"]);
            if (jsonData["theme"])
                _this.global.setTheme(jsonData['theme']);
        });
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/faid/mobihymn_ionic2/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/faid/mobihymn_ionic2/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__services_global_service__["a" /* GlobalService */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_insomnia__["a" /* Insomnia */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroSliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
 * Generated class for the IntroSliderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var IntroSliderComponent = (function () {
    function IntroSliderComponent() {
        console.log('Hello IntroSliderComponent Component');
        this.text = 'Hello World';
    }
    return IntroSliderComponent;
}());
IntroSliderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'intro-slider',template:/*ion-inline-start:"/Users/faid/mobihymn_ionic2/src/components/intro-slider/intro-slider.html"*/'<!-- Generated template for the IntroSliderComponent component -->\n<ion-slides pager>\n\n  <ion-slide style="background-color: green">\n    <h2>Slide 1</h2>\n  </ion-slide>\n\n  <ion-slide style="background-color: blue">\n    <h2>Slide 2</h2>\n  </ion-slide>\n\n  <ion-slide style="background-color: red">\n    <h2>Slide 3</h2>\n  </ion-slide>\n\n</ion-slides>\n'/*ion-inline-end:"/Users/faid/mobihymn_ionic2/src/components/intro-slider/intro-slider.html"*/
    }),
    __metadata("design:paramtypes", [])
], IntroSliderComponent);

//# sourceMappingURL=intro-slider.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPopoverListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_popover_items_settings_popover_items__ = __webpack_require__(138);
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
 * Generated class for the SettingsPopoverListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SettingsPopoverListPage = (function () {
    function SettingsPopoverListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.settingsList = ["Alignment", "Theme", "Font Size", "Font Name", "Extra Spacing"];
    }
    SettingsPopoverListPage.prototype.ionViewDidEnter = function () {
        this.global = this.navParams.get('global');
        var data = {
            'extraSpace': this.global.getPadding(),
            'alignment': this.global.getActiveAlignment(),
            'fontSize': this.global.getFontSize(),
            'fontName': this.global.getFontName(),
            'theme': this.global.getTheme()
        };
        window.localStorage.setItem('data', JSON.stringify(data));
    };
    SettingsPopoverListPage.prototype.goToItems = function (setting) {
        var global = this.global;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__settings_popover_items_settings_popover_items__["a" /* SettingsPopoverItemsPage */], {
            'dest': setting,
            'global': global
        });
    };
    return SettingsPopoverListPage;
}());
SettingsPopoverListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings-popover-list',template:/*ion-inline-start:"/Users/faid/mobihymn_ionic2/src/pages/settings-popover-list/settings-popover-list.html"*/'<!--\n  Generated template for the SettingsPopoverListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let setting of settingsList" (tap)="goToItems(setting)" tappable>\n        {{ setting }}\n        <ion-icon name="arrow-forward"></ion-icon>\n    </ion-item>\n  </ion-list>\n  <!--<button ion-button (click)="alert(\'clicked\');">Test</button>-->\n</ion-content>\n'/*ion-inline-end:"/Users/faid/mobihymn_ionic2/src/pages/settings-popover-list/settings-popover-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], SettingsPopoverListPage);

//# sourceMappingURL=settings-popover-list.js.map

/***/ })

},[268]);
//# sourceMappingURL=main.js.map