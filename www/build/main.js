webpackJsonp([7],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RevisionsModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
<<<<<<< HEAD
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

=======
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
        selector: 'page-revisions-modal',template:/*ion-inline-start:"/Users/faid/mobihymn_ionic2/src/pages/revisions-modal/revisions-modal.html"*/'<!--\n  Generated template for the RevisionsModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Revisions</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="dismiss()" clear>\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="container" [innerHTML]="revisionString" *ngIf="revisionString">\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/faid/mobihymn_ionic2/src/pages/revisions-modal/revisions-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], RevisionsModalPage);

>>>>>>> android build
//# sourceMappingURL=revisions-modal.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
<<<<<<< HEAD
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
        selector: 'page-author-modal',template:/*ion-inline-start:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\author-modal\author-modal.html"*/'<!--\n  Generated template for the AuthorModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Author</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="dismiss()" clear>\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <img src="img/nin-live.png"/> \n    <ion-card-content>\n      <ion-card-title>\n        Timothy John V. Gandionco\n      </ion-card-title>\n      <p>\n        Software developer for desktop, web, and mobile platforms.\n      </p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\author-modal\author-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], AuthorModalPage);

=======
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
        selector: 'page-author-modal',template:/*ion-inline-start:"/Users/faid/mobihymn_ionic2/src/pages/author-modal/author-modal.html"*/'<!--\n  Generated template for the AuthorModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Author</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="dismiss()" clear>\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <img src="img/nin-live.png"/> \n    <ion-card-content>\n      <ion-card-title>\n        Timothy John V. Gandionco\n      </ion-card-title>\n      <p>\n        Software developer for desktop, web, and mobile platforms.\n      </p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/faid/mobihymn_ionic2/src/pages/author-modal/author-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], AuthorModalPage);

>>>>>>> android build
//# sourceMappingURL=author-modal.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_revisions_modal_revisions_modal__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_author_modal_author_modal__ = __webpack_require__(131);
<<<<<<< HEAD
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
    function SettingsPage(navCtrl, navParams, http, revisionsModal, authorModal, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__services_global_service__["a" /* GlobalService */]])
], SettingsPage);

=======
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
    function SettingsPage(navCtrl, navParams, http, revisionsModal, authorModal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.revisionsModal = revisionsModal;
        this.authorModal = authorModal;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.http.get('../assets/revision.html').map(function (res) { return res; }).subscribe(function (res) {
            _this.revisionString = res["_body"];
        });
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
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/Users/faid/mobihymn_ionic2/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Settings</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-list-header>\n            Data\n        </ion-list-header>\n        <ion-item>\n            <ion-icon name="time" item-start></ion-icon>\n            <ion-label>Recent items</ion-label>\n            <ion-select [(ngModel)]="recentNum">\n                <ion-option value="5">5</ion-option>\n                <ion-option value="6">6</ion-option>\n                <ion-option value="7">7</ion-option>\n                <ion-option value="8">8</ion-option>\n                <ion-option value="9">9</ion-option>\n                <ion-option value="10">10</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-list-header>\n            About\n        </ion-list-header>\n        <ion-item (click)="showAuthorModal()">\n            <ion-icon name="person" item-start></ion-icon>\n            <ion-label>Author</ion-label>\n        </ion-item>\n        <ion-item (click)="showRevisionModal()">\n            <ion-icon name="clock" item-start></ion-icon>\n            <ion-label>Revisions</ion-label>\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/faid/mobihymn_ionic2/src/pages/settings/settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */]])
], SettingsPage);

>>>>>>> android build
//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
<<<<<<< HEAD
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
        this.hymnList = this.navParams.get('allHymns');
        this.activeHymnal = this.navParams.get('activeHymnal');
        this.myGlobal = this.navParams.get('globalService');
        this.activeHymn = this.myGlobal.getActiveHymn();
        var activeHymn = this.activeHymn;
        this.hymnFilter = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](this.hymnList, function (item) {
            return item.id == activeHymn;
        })[0].number;
        this.origHymnList = this.hymnList.map(function (x) { return Object.assign({}, x); });
        this.recentList = this.myGlobal.getRecentList();
        this.bookmarkList = this.myGlobal.getBookmarksList();
    };
    InputModalPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.hymnFilterSearchbar.setFocus();
        }, 500);
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
    InputModalPage.prototype.setActiveHymn = function (hymnId) {
        this.myGlobal.setActiveHymn(hymnId);
        this.viewCtrl.dismiss();
    };
    InputModalPage.prototype.getIndicator = function () {
        var limit = this.hymnLimit;
        var length = this.hymnList.length;
        return 'Displaying ' + Math.min(+limit, length) + ' of ' + this.hymnList.length + ' hymns';
    };
    InputModalPage.prototype.allHymnSelect = function () {
        var _this = this;
        setTimeout(function () {
            _this.hymnFilterSearchbar.setFocus();
        }, 200);
    };
    InputModalPage.prototype.bkmkSelect = function () {
        var _this = this;
        setTimeout(function () {
            _this.bkmkFilterSearchbar.setFocus();
        }, 200);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('hymnFilter'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Searchbar */])
], InputModalPage.prototype, "hymnFilterSearchbar", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('bkmkFilter'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Searchbar */])
], InputModalPage.prototype, "bkmkFilterSearchbar", void 0);
InputModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-input-modal',template:/*ion-inline-start:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\input-modal\input-modal.html"*/'<!--\n  Generated template for the InputModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="dismiss()" clear>\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-segment [(ngModel)]="inputType">\n        <ion-segment-button value="all_hymns" (ionSelect)="allHymnSelect()">\n            All hymns\n        </ion-segment-button>\n        <ion-segment-button value="bookmarks">\n            Bookmarks\n        </ion-segment-button>\n        <ion-segment-button value="recent">\n            Recent\n        </ion-segment-button>\n    </ion-segment>\n</ion-header>\n\n\n<ion-content padding>\n    <div [ngSwitch]="inputType">\n        <div *ngSwitchCase="\'all_hymns\'" #allHymns>\n            <ion-searchbar (ionInput)="filterHymns($event)" [showCancelButton]="true" placeholder="Search hymn" type="number" [(ngModel)]="hymnTextFilter" #hymnFilter></ion-searchbar>\n            <ion-list>\n                <ion-item *ngFor="let hymn of hymnList | slice:0:hymnLimit;" (click)="setActiveHymn(hymn[\'id\'])">\n                    <h2>{{ \'Hymn #\' + hymn.title }}</h2>\n                    <p>{{ hymn.firstLine }}</p>\n                </ion-item>\n            </ion-list>\n            <p class="indicator">{{ getIndicator() }}</p>\n            <!-- <ion-infinite-scroll (ionInfinite)="hymnsInfinite($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll> -->\n        </div>\n        <div *ngSwitchCase="\'bookmarks\'">\n            <ion-searchbar (ionInput)="filterHymns($event)" [showCancelButton]="true" placeholder="Search bookmarks" type="number" [(ngModel)]="bkmkFilterText" #bkmkFilter></ion-searchbar>\n            <ion-list>\n                <ion-item-sliding *ngFor="let bkmk of bookmarkList" (click)="setActiveHymn(bkmk[\'hymnId\'])">\n                    <ion-item>\n                        <h2>{{ bkmk[\'firstLine\'] }}</h2>\n                        <p>Hymn #{{ bkmk[\'title\'] }}</p>\n                    </ion-item>\n                    <ion-item-options side="left">\n                        <button ion-button color="danger" (click)="presentConfirmUnbookmark()">\n                            <ion-icon name="close"></ion-icon>\n                            Remove\n                        </button>\n                    </ion-item-options>\n                </ion-item-sliding>\n            </ion-list>\n        </div>\n        <div *ngSwitchCase="\'recent\'">\n            <ion-list>\n                <ion-item *ngFor="let recent of recentList" (click)="setActiveHymn(recent[\'hymnId\'])">\n                    <h2>Hymn #{{ recent.hymnNumber }}</h2>\n                    <p>{{ recent.firstLine }}</p>\n                </ion-item>\n            </ion-list>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\input-modal\input-modal.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */]])
], InputModalPage);

=======
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
        this.hymnList = this.navParams.get('allHymns');
        this.activeHymnal = this.navParams.get('activeHymnal');
        this.myGlobal = this.navParams.get('globalService');
        this.activeHymn = this.myGlobal.getActiveHymn();
        var activeHymn = this.activeHymn;
        this.hymnFilter = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](this.hymnList, function (item) {
            return item.id == activeHymn;
        })[0].number;
        this.origHymnList = this.hymnList.map(function (x) { return Object.assign({}, x); });
        this.recentList = this.myGlobal.getRecentList();
        this.bookmarkList = this.myGlobal.getBookmarksList();
    };
    InputModalPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.hymnFilterSearchbar.setFocus();
        }, 500);
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
    InputModalPage.prototype.setActiveHymn = function (hymnId) {
        this.myGlobal.setActiveHymn(hymnId);
        this.viewCtrl.dismiss();
    };
    InputModalPage.prototype.getIndicator = function () {
        var limit = this.hymnLimit;
        var length = this.hymnList.length;
        return 'Displaying ' + Math.min(+limit, length) + ' of ' + this.hymnList.length + ' hymns';
    };
    InputModalPage.prototype.allHymnSelect = function () {
        var _this = this;
        setTimeout(function () {
            _this.hymnFilterSearchbar.setFocus();
        }, 200);
    };
    InputModalPage.prototype.bkmkSelect = function () {
        var _this = this;
        setTimeout(function () {
            _this.bkmkFilterSearchbar.setFocus();
        }, 200);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('hymnFilter'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Searchbar */])
], InputModalPage.prototype, "hymnFilterSearchbar", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('bkmkFilter'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Searchbar */])
], InputModalPage.prototype, "bkmkFilterSearchbar", void 0);
InputModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-input-modal',template:/*ion-inline-start:"/Users/faid/mobihymn_ionic2/src/pages/input-modal/input-modal.html"*/'<!--\n  Generated template for the InputModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="dismiss()" clear>\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-segment [(ngModel)]="inputType">\n        <ion-segment-button value="all_hymns" (ionSelect)="allHymnSelect()">\n            All hymns\n        </ion-segment-button>\n        <ion-segment-button value="bookmarks">\n            Bookmarks\n        </ion-segment-button>\n        <ion-segment-button value="recent">\n            Recent\n        </ion-segment-button>\n    </ion-segment>\n</ion-header>\n\n\n<ion-content padding>\n    <div [ngSwitch]="inputType">\n        <div *ngSwitchCase="\'all_hymns\'" #allHymns>\n            <ion-searchbar (ionInput)="filterHymns($event)" [showCancelButton]="true" placeholder="Search hymn" type="number" [(ngModel)]="hymnTextFilter" #hymnFilter></ion-searchbar>\n            <ion-list>\n                <ion-item *ngFor="let hymn of hymnList | slice:0:hymnLimit;" (click)="setActiveHymn(hymn[\'id\'])">\n                    <h2>{{ \'Hymn #\' + hymn.title }}</h2>\n                    <p>{{ hymn.firstLine }}</p>\n                </ion-item>\n            </ion-list>\n            <p class="indicator">{{ getIndicator() }}</p>\n            <!-- <ion-infinite-scroll (ionInfinite)="hymnsInfinite($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll> -->\n        </div>\n        <div *ngSwitchCase="\'bookmarks\'">\n            <ion-searchbar (ionInput)="filterHymns($event)" [showCancelButton]="true" placeholder="Search bookmarks" type="number" [(ngModel)]="bkmkFilterText" #bkmkFilter></ion-searchbar>\n            <ion-list>\n                <ion-item-sliding *ngFor="let bkmk of bookmarkList" (click)="setActiveHymn(bkmk[\'hymnId\'])">\n                    <ion-item>\n                        <h2>{{ bkmk[\'firstLine\'] }}</h2>\n                        <p>Hymn #{{ bkmk[\'title\'] }}</p>\n                    </ion-item>\n                    <ion-item-options side="left">\n                        <button ion-button color="danger" (click)="presentConfirmUnbookmark()">\n                            <ion-icon name="close"></ion-icon>\n                            Remove\n                        </button>\n                    </ion-item-options>\n                </ion-item-sliding>\n            </ion-list>\n        </div>\n        <div *ngSwitchCase="\'recent\'">\n            <ion-list>\n                <ion-item *ngFor="let recent of recentList" (click)="setActiveHymn(recent[\'hymnId\'])">\n                    <h2>Hymn #{{ recent.hymnNumber }}</h2>\n                    <p>{{ recent.firstLine }}</p>\n                </ion-item>\n            </ion-list>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/faid/mobihymn_ionic2/src/pages/input-modal/input-modal.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */]])
], InputModalPage);

>>>>>>> android build
//# sourceMappingURL=input-modal.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
<<<<<<< HEAD
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
    return SettingsPopoverPage;
}());
SettingsPopoverPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings-popover',template:/*ion-inline-start:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\settings-popover\settings-popover.html"*/'<!--\n  Generated template for the SettingsPopoverPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding>\n  <ion-list>\n    <ion-row>\n      <ion-col>\n        <button ion-button small color="primary" *ngIf="alignmentText==\'left\'">\n          <span class="fa fa-align-left"></span>\n        </button>\n        <button ion-button small color="primary" clear (click)="alignmentChange(\'left\')" *ngIf="alignmentText!=\'left\'">\n          <span class="fa fa-align-left"></span>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button small color="primary" *ngIf="alignmentText==\'center\'">\n          <span class="fa fa-align-center"></span>\n        </button>\n        <button ion-button small color="primary" clear (click)="alignmentChange(\'center\')" *ngIf="alignmentText!=\'center\'">\n          <span class="fa fa-align-center"></span>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button small color="primary" *ngIf="alignmentText==\'right\'">\n          <span class="fa fa-align-right"></span>\n        </button>\n        <button ion-button small color="primary" clear (click)="alignmentChange(\'right\')" *ngIf="alignmentText!=\'right\'">\n          <span class="fa fa-align-right"></span>\n        </button>        \n      </ion-col>\n    </ion-row>\n\n    <ion-list-header>\n      <ion-label>Extra space\n        <ion-badge>{{ paddingText }}</ion-badge>\n      </ion-label>\n      \n    </ion-list-header> \n    <ion-item>\n      \n      <ion-range min="0" max="500" [(ngModel)]="paddingText" step="10" snap="true" pin="true" (ionChange)="paddingChange()">\n        <ion-label range-left>0</ion-label>\n        <ion-label range-right>500</ion-label>\n      </ion-range>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\settings-popover\settings-popover.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_global_service__["a" /* GlobalService */]) === "function" && _c || Object])
], SettingsPopoverPage);

var _a, _b, _c;
=======
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
 * Generated class for the SettingsPopoverPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SettingsPopoverPage = (function () {
    function SettingsPopoverPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
    }
    SettingsPopoverPage.prototype.ionViewDidLoad = function () {
    };
    SettingsPopoverPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    return SettingsPopoverPage;
}());
SettingsPopoverPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings-popover',template:/*ion-inline-start:"/Users/faid/mobihymn_ionic2/src/pages/settings-popover/settings-popover.html"*/'<!--\n  Generated template for the SettingsPopoverPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding>\n  <ion-list>\n    <ion-list-header>\n      <ion-label>Extra space</ion-label>\n    </ion-list-header> \n    <ion-item>     \n      <ion-range min="0" max="200" [(ngModel)]="paddingText" step="10" snap="true">\n        <ion-label range-left>0</ion-label>\n        <ion-label range-right>500</ion-label>\n      </ion-range>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/faid/mobihymn_ionic2/src/pages/settings-popover/settings-popover.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], SettingsPopoverPage);

>>>>>>> android build
//# sourceMappingURL=settings-popover.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReaderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_input_modal_input_modal__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_popover_settings_popover__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
<<<<<<< HEAD
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
        if (this.platform.is('android')) {
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
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Content */]) === "function" && _a || Object)
], ReaderPage.prototype, "lyricsContainerRef", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('btnPlay'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* FabButton */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* FabButton */]) === "function" && _b || Object)
], ReaderPage.prototype, "btnPlayElemRef", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('readerHeader'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _c || Object)
], ReaderPage.prototype, "divHeader", void 0);
ReaderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-reader',template:/*ion-inline-start:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\reader\reader.html"*/'<!--\n  Generated template for the ReaderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header #readerHeader [@slideUp]="slideUpState">\n    <ion-navbar>\n        <ion-buttons start>\n            <button ion-button icon-only (click)="presentPopover($event)">\n                <span class="fa fa-font"></span>\n            </button>\n        </ion-buttons>\n        <ion-title>MobiHymn</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="toggleBookmark()">\n                <ion-icon name="star-outline" *ngIf="!isBookmarked"></ion-icon>\n                <ion-icon name="star" *ngIf="isBookmarked"></ion-icon>\n            </button>\n            <button ion-button icon-only (click)="presentInputModal()">\n                <ion-icon name="musical-note"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding (click)="toggleFullLyrics()" #lyricsContainer>\n    <div class="hymn-content" *ngIf="currentHymn" (pinch)="pinchZoom($event)" [ngStyle]="{\'paddingBottom.px\': extraSpace, \'text-align\': alignment}">\n        <h2 class="hymn-title">Hymn #{{ currentHymn.title }}</h2>\n        <div class="lyrics" [innerHTML]="currentHymn.lyrics">\n        </div>\n    </div>\n\n    <ion-fab bottom right>\n        <button ion-fab #btnPlay [@scale]="scaleState">\n            <ion-icon name="play"></ion-icon>\n        </button>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\pages\reader\reader.html"*/,
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* trigger */])('scale', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* state */])('hidden', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                    transform: 'scale(0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* state */])('shown', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                    transform: 'scale(1)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('hidden => shown', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('500ms ease')),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('shown => hidden', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('500ms ease'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* trigger */])('slideUp', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* state */])('up', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                    transform: 'translate(0px, -56px)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* state */])('down', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                    transform: 'translate(0px, 0px)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('up => down', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('500ms ease')),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('down => up', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('500ms ease'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* PopoverController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__services_global_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_global_service__["a" /* GlobalService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ToastController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */]) === "function" && _k || Object])
], ReaderPage);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
=======
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
    function ReaderPage(readerCtrl, inputPopCtrl, inputModalCtrl, global, alertCtrl, toastCtrl) {
        var _this = this;
        this.readerCtrl = readerCtrl;
        this.inputPopCtrl = inputPopCtrl;
        this.inputModalCtrl = inputModalCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.scaleState = 'shown';
        this.slideUpState = 'down';
        this.myGlobal = global;
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
        var popover = this.inputPopCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_settings_popover_settings_popover__["a" /* SettingsPopoverPage */]);
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
        this.currentHymn = __WEBPACK_IMPORTED_MODULE_6_lodash__["filter"](hymnList, function (item) {
            return item.id == activeHymn;
        })[0];
        this.isBookmarked = this.myGlobal.isInBookmark(this.activeHymnal, this.currentHymn);
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
        if (this.scaleState == 'shown') {
            this.scrollContent.animate([
                { offset: 0, 'margin': '56px 0 56px 0' },
                { offset: 1, 'margin': '0 0 0 0' }
            ], {
                duration: 500,
                easing: 'ease',
                fill: 'forwards'
            });
            this.divTab.animate([
                { offset: 0, 'transform': 'translate(0, 0)' },
                { offset: 1, 'transform': 'translate(0, 56px)' }
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
                { offset: 1, margin: '56px 0 56px 0' }
            ], {
                duration: 500,
                easing: 'ease',
                fill: 'forwards'
            });
            this.divTab.animate([
                { offset: 0, 'transform': 'translate(0, 56px)' },
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
        selector: 'page-reader',template:/*ion-inline-start:"/Users/faid/mobihymn_ionic2/src/pages/reader/reader.html"*/'<!--\n  Generated template for the ReaderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header #readerHeader [@slideUp]="slideUpState">\n    <ion-navbar>\n        <ion-buttons start>\n            <button ion-button icon-only (click)="presentPopover($event)">\n                <ion-icon name="brush"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>MobiHymn</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="toggleBookmark()">\n                <ion-icon name="star-outline" *ngIf="!isBookmarked"></ion-icon>\n                <ion-icon name="star" *ngIf="isBookmarked"></ion-icon>\n            </button>\n            <button ion-button icon-only (click)="presentInputModal()">\n                <ion-icon name="musical-note"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding (click)="toggleFullLyrics()" #lyricsContainer>\n    <div class="hymn-content" *ngIf="currentHymn" (pinch)="pinchZoom($event)">\n        <h2 class="hymn-title">Hymn #{{ currentHymn.title }}</h2>\n        <div class="lyrics" [innerHTML]="currentHymn.lyrics">\n        </div>\n    </div>\n\n    <ion-fab bottom right>\n        <button ion-fab mini #btnPlay [@scale]="scaleState">\n            <ion-icon name="play"></ion-icon>\n        </button>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/faid/mobihymn_ionic2/src/pages/reader/reader.html"*/,
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* trigger */])('scale', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* state */])('hidden', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                    transform: 'scale(0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* state */])('shown', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                    transform: 'scale(1)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('hidden => shown', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('500ms ease')),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('shown => hidden', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('500ms ease'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* trigger */])('slideUp', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* state */])('up', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                    transform: 'translate(0px, -56px)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* state */])('down', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* style */])({
                    transform: 'translate(0px, 0px)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('up => down', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('500ms ease')),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])('down => up', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* animate */])('500ms ease'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__services_global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ToastController */]])
], ReaderPage);

>>>>>>> android build
//# sourceMappingURL=reader.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
<<<<<<< HEAD
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

=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global_service__ = __webpack_require__(43);
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
    SearchPage.prototype.ngAfterViewInit = function () {
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
        selector: 'page-search',template:/*ion-inline-start:"/Users/faid/mobihymn_ionic2/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Search</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-searchbar (search)="getItems($event)" #searchHymn></ion-searchbar>\n    <ion-list>\n        <ion-list-header *ngIf="searchItems">{{ searchItems.length }} Result(s)</ion-list-header>\n        <ion-item *ngFor="let item of searchItems" (click)="goToReader(item.id)">\n            <h2>{{ item.line }}</h2>\n            <h3>Hymn #{{ item.number }}</h3>\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/faid/mobihymn_ionic2/src/pages/search/search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_global_service__["a" /* GlobalService */]])
], SearchPage);

>>>>>>> android build
//# sourceMappingURL=search.js.map

/***/ }),

/***/ 147:
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
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/author-modal/author-modal.module": [
		582,
		6
	],
	"../pages/input-modal/input-modal.module": [
		584,
		5
	],
	"../pages/reader/reader.module": [
		586,
		4
	],
	"../pages/revisions-modal/revisions-modal.module": [
		581,
		3
	],
	"../pages/search/search.module": [
		587,
		2
	],
	"../pages/settings-popover/settings-popover.module": [
		585,
		1
	],
	"../pages/settings/settings.module": [
		583,
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
webpackAsyncContext.id = 191;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reader_reader__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(136);
<<<<<<< HEAD
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

=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_global_service__ = __webpack_require__(43);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/faid/mobihymn_ionic2/src/pages/tabs/tabs.html"*/'<ion-tabs class="tabs-md-dark" #myTabs>\n    <ion-tab [root]="tab1Root" tabTitle="Library" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Read" tabIcon="glasses" enabled="activeHymnal"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Search" tabIcon="search" enabled="activeHymnal"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="Settings" tabIcon="settings"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/faid/mobihymn_ionic2/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_global_service__["a" /* GlobalService */]])
], TabsPage);

>>>>>>> android build
//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
<<<<<<< HEAD
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

=======
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
    };
    HomePage.prototype.ngOnDestroy = function () {
        this.hymnalSubscribe.unsubscribe();
        this.hymnSubscribe.unsubscribe();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/faid/mobihymn_ionic2/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Library</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-lg-4 col-md-6 col-sm-12 *ngFor="let hymnal of hymnalList">\n                <ion-card (click)="setActiveHymnal(hymnal.id)">\n                    <div class="card-image">\n                        <img src="{{ \'assets/\' + hymnal.image}}" />\n                    </div>\n                    <ion-card-content>\n                        <ion-card-title>\n                            {{hymnal.name}}\n                        </ion-card-title>\n                        <p>\n                            {{hymnal.count}} hymns\n                        </p>\n                    </ion-card-content>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/faid/mobihymn_ionic2/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], HomePage);

>>>>>>> android build
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_web_animations_js_web_animations_min__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_web_animations_js_web_animations_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_web_animations_js_web_animations_min__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_global_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_reader_reader__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_search_search__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_input_modal_input_modal__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_author_modal_author_modal__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_revisions_modal_revisions_modal__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_settings_popover_settings_popover__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(258);
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
            __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_reader_reader__["a" /* ReaderPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_input_modal_input_modal__["a" /* InputModalPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_settings_popover_settings_popover__["a" /* SettingsPopoverPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_author_modal_author_modal__["a" /* AuthorModalPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_revisions_modal_revisions_modal__["a" /* RevisionsModalPage */]
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
            __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_reader_reader__["a" /* ReaderPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_input_modal_input_modal__["a" /* InputModalPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_settings_popover_settings_popover__["a" /* SettingsPopoverPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_author_modal_author_modal__["a" /* AuthorModalPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_revisions_modal_revisions_modal__["a" /* RevisionsModalPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
<<<<<<< HEAD
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
        this.hymnalChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.hymnChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.activeHymnalChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.activeHymnChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.bookmarksChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.historyChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.historyCountChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.paddingChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.activeAlignmentChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
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

=======
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
        this.recentCount = 5;
        this.bookmarks = new Array();
        this.history = new Array();
        this.hymnalChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.hymnChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.activeHymnalChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.activeHymnChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.bookmarksChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.historyChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
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

>>>>>>> android build
//# sourceMappingURL=global-service.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_global_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(259);
<<<<<<< HEAD
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\timothy.v.gandionco\Source\Repos\mobihymn_ionic2\src\app\app.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_global_service__["a" /* GlobalService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

=======
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/faid/mobihymn_ionic2/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/faid/mobihymn_ionic2/src/app/app.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_global_service__["a" /* GlobalService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

>>>>>>> android build
//# sourceMappingURL=app.component.js.map

/***/ })

},[261]);
//# sourceMappingURL=main.js.map