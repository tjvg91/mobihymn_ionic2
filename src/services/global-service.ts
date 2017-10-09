import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { File } from '@ionic-native/file';
import { Platform } from 'ionic-angular';

import 'rxjs/Rx';

@Injectable()
export class GlobalService {
    hymnals:Array<object> = new Array<object>();
    hymns:object = {};

    activeHymnal:string = "";
    activeHymn:string = "";
    activeAlignment="left";

    bookmarks: Array<object> = new Array<object>();
    history: Array<object> = new Array<object>();
    
    recentCount:number = 5;
    padding: Number=0;
    fontSize: number = 1.4;
    fontName: string = "Roboto"
    theme: string = "pic";
    
    public hymnalChange : Subject<Array<object>> = new Subject<Array<object>>();
    public hymnChange : Subject<object> = new Subject<object>();
    public activeHymnalChange : Subject<string> = new Subject<string>(); 
    public activeHymnChange : Subject<string> = new Subject<string>(); 
    public bookmarksChange : Subject<Array<object>> = new Subject<Array<object>>(); 
    public historyChange : Subject<Array<object>> = new Subject<Array<object>>(); 
    public historyCountChange : Subject<number> = new Subject<number>(); 
    public paddingChange : Subject<Number> = new Subject<Number>(); 
    public activeAlignmentChange : Subject<string> = new Subject<string>(); 
    public fontSizeChange : Subject<number> = new Subject<number>();
    public fontNameChange : Subject<string> = new Subject<string>();
    public themeChange : Subject<string> = new Subject<string>();

    constructor(private file: File, private platform: Platform) {
     }

    setHymnals(newValue:Array<object>) {        
        this.hymnals = newValue;        
        this.hymnalChange.next(this.hymnals);
    }

    addToHymns(propName: string, newValue:Array<object>) {        
        this.hymns[propName] = newValue;        
        this.hymnChange.next(this.hymns);
    }

    addToBookmarks(newValue: object){
        this.bookmarks.push(newValue);
        this.bookmarksChange.next(this.bookmarks);
    }

    addToRecent(newValue: object){
        var index = this.history.findIndex(i => i['hymnalId'] == newValue['hymnalId'] &&
                                    i['hymnId'] == newValue['hymnId']);
        
        if(index >= 0)
            this.history.splice(index);

        this.history.splice(0, 0, newValue);
        if(index >= 0)
            this.history.splice(index);
            

        this.historyChange.next(this.history);
    }

    removeFromBookmarks(hymnalId: string, hymnId: string){
        let index = this.bookmarks.findIndex(i => i['hymnId'] == hymnId && i['hymnalId'] == hymnalId);
        this.bookmarks.splice(index);
        this.bookmarksChange.next(this.bookmarks);
    }

    setActiveHymnal(newValue:string){
        this.activeHymnal = newValue
        this.activeHymnalChange.next(this.activeHymnal);
    }

    setActiveHymn(newValue:string){
        this.activeHymn = newValue
        this.activeHymnChange.next(this.activeHymn);

        let activeHymn = this.activeHymn;
        let curHymn = this.hymns['hymnal' + this.activeHymnal].filter(function(item){
            return item['id'] == activeHymn;
        })[0];

        this.addToRecent({
            'hymnalId': this.activeHymnal,
            'hymnId': this.activeHymn,
            'hymnNumber': curHymn['number'],
            'hymnTitle': curHymn['title'],
            'firstLine': curHymn['firstLine']
        });
    }

    setRecentCount(newValue:number){
        this.recentCount = newValue
        this.historyCountChange.next(this.recentCount);

        var diff = this.history.length - newValue;
        if(diff > 0)
            this.history.splice(this.history.length - diff, diff);

    }

    setPadding(newValue: Number){
        this.padding = newValue;
        this.paddingChange.next(this.padding);
    }

    setActiveAlignment(newValue: string){
        this.activeAlignment = newValue;
        this.activeAlignmentChange.next(this.activeAlignment);
    }

    setFontSize(newValue: number){
        this.fontSize = newValue;
        this.fontSizeChange.next(this.fontSize);
    }

    setFontName(newValue: string){
        this.fontName = newValue;
        this.fontNameChange.next(this.fontName);
    }

    setTheme(newValue: string){
        this.theme = newValue;
        this.themeChange.next(this.theme);
    }

    getHymnalList() : Array<object>{
        return this.hymnals;
    }

    getHymnList() : object{
        return this.hymns;
    }

    getActiveHymnal() : string{
        return this.activeHymnal;
    }

    getActiveHymn() : string{
        return this.activeHymn;
    }

    getRecentCount() : number{
        return this.recentCount;
    }

    getBookmarksList() : Array<object>{
        let activeHymnal = this.activeHymnal
        return this.bookmarks.filter(x => {
            return x['hymnalId'] == activeHymnal;
        });
    }

    getRecentList() : Array<object>{
        let activeHymnal = this.activeHymnal
        return this.history.filter(x => {
            return x['hymnalId'] == activeHymnal;
        });
    }

    getPadding() : Number{
        return this.padding;
    }

    getActiveAlignment(): string{
        return this.activeAlignment;
    }

    getFontSize() : number{
        return this.fontSize;
    }

    getFontName() : string{
        return this.fontName;
    }

    getTheme() : string{
        return this.theme;
    }

    getHymnals(http: Http){
        let url = "";
        
        if(this.platform.is('cordova'))
            url = this.file.applicationDirectory + 'www/assets/hymnals.json';
        else
            url = '../assets/hymnals.json';
        return http.get(url).map(res => res.json());
    }

    getHymns(http: Http, i: number){
        let url = "";
        if(this.platform.is('cordova'))
            url = this.file.applicationDirectory + 'www/assets/hymnal ' + i + '.json';
        else
            url = '../assets/hymnal ' + i + '.json';
        http.get('../assets/midi/h1.mid').map(resp => resp.arrayBuffer()).subscribe(x => {
            console.log(x);
        });
        return http.get(url).map(res => res.json());
    }

    isInBookmark(hymnalId, hymnId){
        return this.bookmarks.findIndex(i => i['hymnalId'] == hymnalId && i['hymnId'] == hymnId) >= 0;
    }
}