import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FirestoreSettingsToken} from '@angular/fire/firestore';   //to remove warning


var config = {
    apiKey: "AIzaSyBdTNetc9h65OlmniCj1nsBuDJ6d8LLPLU",
    authDomain: "exelligent-a0539.firebaseapp.com",
    databaseURL: "https://exelligent-a0539.firebaseio.com",
    projectId: "exelligent-a0539",
    storageBucket: "exelligent-a0539.appspot.com",
    messagingSenderId: "345419904905"
  };


import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { BasicComponent } from '../../basic/basic.component'
import { GkComponent } from '../../gk/gk.component';
import { ArtComponent } from '../../art/art.component';
import { SelfComponent } from '../../self/self.component';
import { LanguageComponent } from '../../language/language.component';
import { AboutusComponent } from '../../aboutus/aboutus.component';
import { FileuploadComponent } from '../../fileupload/fileupload.component';

import { FiledownloadService } from '../../filedownload/filedownload.service';

import { QuizComponent } from '../../dashboardcomponent/quiz/quiz.component';
import { PracticeComponent } from '../../dashboardcomponent/practice/practice.component';
import { TestComponent } from '../../dashboardcomponent/test/test.component';
import { AnalysisComponent } from '../../dashboardcomponent/analysis/analysis.component';
import { CommunityComponent } from '../../dashboardcomponent/community/community.component';

import { AlphabetComponent } from '../../basiccomponent/alphabet/alphabet.component';
import { AlphabetHindiComponent } from '../../basiccomponent/alphabet-hindi/alphabet-hindi.component';
import { CountingComponent } from '../../basiccomponent/counting/counting.component';
import { TableComponent } from '../../basiccomponent/table/table.component';
import { MathsComponent } from '../../basiccomponent/maths/maths.component';
import { DaysComponent } from '../../basiccomponent/days/days.component';
import { MonthComponent } from '../../basiccomponent/month/month.component';
import { NameComponent } from '../../basiccomponent/name/name.component';
import { BookComponent } from '../../basiccomponent/book/book.component';

import { Standard5Component } from '../../artcomponent/standard5/standard5.component';
import { Standard6Component } from '../../artcomponent/standard6/standard6.component';
import { Standard7Component } from '../../artcomponent/standard7/standard7.component';
import { Standard8Component } from '../../artcomponent/standard8/standard8.component';
import { Standard9Component } from '../../artcomponent/standard9/standard9.component';
import { Standard10Component } from '../../artcomponent/standard10/standard10.component';
import { ArtfyjcComponent } from '../../artcomponent/artfyjc/artfyjc.component';
import { ArtsyjcComponent } from '../../artcomponent/artsyjc/artsyjc.component';
import { ComfyjcComponent } from '../../artcomponent/comfyjc/comfyjc.component';
import { ComsyjcComponent } from '../../artcomponent/comsyjc/comsyjc.component';
import { ScifyjcComponent } from '../../artcomponent/scifyjc/scifyjc.component';
import { ScisyjcComponent } from '../../artcomponent/scisyjc/scisyjc.component';

import { MarathisubComponent } from '../../subjectcomponent/marathisub/marathisub.component';
import { HindisubComponent } from '../../subjectcomponent/hindisub/hindisub.component';
import { EnglishsubComponent } from '../../subjectcomponent/englishsub/englishsub.component';
import { HistorysubComponent } from '../../subjectcomponent/historysub/historysub.component';
import { SanskruitsubComponent } from '../../subjectcomponent/sanskruitsub/sanskruitsub.component';
import { MathmeticsComponent } from '../../subjectcomponent/mathmetics/mathmetics.component';
import { ScienceComponent } from '../../subjectcomponent/science/science.component';
import { CivicsComponent } from '../../subjectcomponent/civics/civics.component';
import { GeoComponent } from '../../subjectcomponent/geo/geo.component';
import { PhysicsComponent } from '../../subjectcomponent/physics/physics.component';
import { ChemistryComponent } from '../../subjectcomponent/chemistry/chemistry.component';
import { BioComponent } from '../../subjectcomponent/bio/bio.component';

import { PaintingComponent } from '../../artdesign/painting/painting.component';
import { DrawingComponent } from '../../artdesign/drawing/drawing.component';
import { PhotographComponent } from '../../artdesign/photograph/photograph.component';
import { CraftComponent } from '../../artdesign/craft/craft.component';
import { SculptureComponent } from '../../artdesign/sculpture/sculpture.component';
import { MusicComponent } from '../../artdesign/music/music.component';
import { DanceComponent } from '../../artdesign/dance/dance.component';
import { OperaComponent } from '../../artdesign/opera/opera.component';
import { DesignComponent } from '../../artdesign/design/design.component';

import { CummulativeComponent } from '../../storycomponent/cummulative/cummulative.component';
import { RealisticComponent } from '../../storycomponent/realistic/realistic.component';
import { ReligiousComponent } from '../../storycomponent/religious/religious.component';
import { MagicComponent } from '../../storycomponent/magic/magic.component';
import { HorrorComponent } from '../../storycomponent/horror/horror.component';
import { MotivationalComponent } from '../../storycomponent/motivational/motivational.component';
import { RomanceComponent } from '../../storycomponent/romance/romance.component';
import { MythComponent } from '../../storycomponent/myth/myth.component';
import { PanchtantraComponent } from '../../storycomponent/panchtantra/panchtantra.component';

import { MarathiComponent } from '../../languagecomponent/marathi/marathi.component';
import { HindiComponent } from '../../languagecomponent/hindi/hindi.component';
import { EnglishComponent } from '../../languagecomponent/english/english.component';
import { SanskruitComponent } from '../../languagecomponent/sanskruit/sanskruit.component';
import { GujratiComponent } from '../../languagecomponent/gujrati/gujrati.component';
import { TamilComponent } from '../../languagecomponent/tamil/tamil.component';
import { PanjabiComponent } from '../../languagecomponent/panjabi/panjabi.component';
import { KannadComponent } from '../../languagecomponent/kannad/kannad.component';
import { MalayalamComponent } from '../../languagecomponent/malayalam/malayalam.component';

import { MobtrickComponent } from '../../itcomponent/mobtrick/mobtrick.component';
import { MobappComponent } from '../../itcomponent/mobapp/mobapp.component';
import { ComtrickComponent } from '../../itcomponent/comtrick/comtrick.component';
import { WebComponent } from '../../itcomponent/web/web.component';
import { HackComponent } from '../../itcomponent/hack/hack.component';
import { SoftwareComponent } from '../../itcomponent/software/software.component';
import { SocialComponent } from '../../itcomponent/social/social.component';
import { LawComponent } from '../../itcomponent/law/law.component';
import { MarketingComponent } from '../../itcomponent/marketing/marketing.component';
import { EthicsComponent } from '../../itcomponent/ethics/ethics.component';
import { BussinessComponent } from '../../itcomponent/bussiness/bussiness.component';

import { IndiaComponent } from '../../gkcomponent/india/india.component';
import { WorldComponent } from '../../gkcomponent/world/world.component';
import { SportComponent } from '../../gkcomponent/sport/sport.component';
import { HistoryComponent } from '../../gkcomponent/history/history.component';
import { SciencegkComponent } from '../../gkcomponent/sciencegk/sciencegk.component';

import { YogaComponent } from '../../selfcomponent/yoga/yoga.component';
import { ExerciseComponent } from '../../selfcomponent/exercise/exercise.component';
import { BehavComponent } from '../../selfcomponent/behav/behav.component';
import { StyleComponent } from '../../selfcomponent/style/style.component';
import { CommunComponent } from '../../selfcomponent/commun/commun.component';

import { EntranceexamComponent } from '../../entranceexam/entranceexam.component';
import { JeemainComponent } from '../../Entranceexamcomponent/jeemain/jeemain.component';
import { JeeadvanceComponent } from '../../Entranceexamcomponent/jeeadvance/jeeadvance.component';
import { CetComponent } from '../../Entranceexamcomponent/cet/cet.component';
import { CatComponent } from '../../Entranceexamcomponent/cat/cat.component';
import { GateComponent } from '../../Entranceexamcomponent/gate/gate.component';
import { UpscComponent } from '../../Entranceexamcomponent/upsc/upsc.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    FileUploadModule,
    PdfViewerModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,


    AgmCoreModule.forRoot({apiKey: 'AIzaSyDULxfbmJ3rmoBw3LkLGqOy3g6kAlh8iFQ'}),
        
    ToastrModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    AboutusComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,
    BasicComponent,
    GkComponent,
    ArtComponent,
    SelfComponent,
    LanguageComponent,
    
    QuizComponent,
    PracticeComponent,
    TestComponent,
    AnalysisComponent,
    CommunityComponent,
    
    AlphabetComponent,
    AlphabetHindiComponent,
    CountingComponent,
    TableComponent,
    MathsComponent,
    DaysComponent,
    MonthComponent,
    NameComponent,
    BookComponent, 
    
    Standard5Component,
    Standard6Component,
    Standard7Component,
    Standard8Component,
    Standard9Component,
    Standard10Component,
    ArtfyjcComponent,
    ArtsyjcComponent,
    ComfyjcComponent,
    ComsyjcComponent,
    ScifyjcComponent,
    ScisyjcComponent,
    
    MarathisubComponent,
    HindisubComponent,
    EnglishsubComponent,
    HistorysubComponent,
    SanskruitsubComponent, 
    MathmeticsComponent,
    ScienceComponent,
    CivicsComponent,
    GeoComponent,
    PhysicsComponent,
    ChemistryComponent,
    BioComponent,
    
    PaintingComponent,
    DrawingComponent,
    PhotographComponent,
    CraftComponent,
    SculptureComponent,
    MusicComponent,
    DanceComponent,
    OperaComponent,
    DesignComponent,
    
    CummulativeComponent,
    RealisticComponent,
    ReligiousComponent,
    MagicComponent,
    HorrorComponent,
    MotivationalComponent,
    RomanceComponent,
    MythComponent,
    PanchtantraComponent,
    
    MarathiComponent,
    HindiComponent,
    EnglishComponent,
    SanskruitComponent,
    GujratiComponent,
    TamilComponent,
    PanjabiComponent,
    KannadComponent,
    MalayalamComponent,
    
    MobtrickComponent,
    MobappComponent,
    ComtrickComponent,
    WebComponent,
    HackComponent,
    SoftwareComponent,
    SocialComponent,
    LawComponent,
    MarketingComponent,
    EthicsComponent,
    BussinessComponent,
    
    IndiaComponent,
    WorldComponent,
    SportComponent,
    HistoryComponent,
    SciencegkComponent,
    
    YogaComponent,
    ExerciseComponent,
    BehavComponent,
    StyleComponent,
    CommunComponent, 
    
    EntranceexamComponent,
    JeemainComponent,
    JeeadvanceComponent,
    CetComponent,
    CatComponent,
    GateComponent,
    UpscComponent,

    FileuploadComponent,

  ],
  
  providers: [
    GoogleMapsAPIWrapper,
    FiledownloadService,
    { provide: FirestoreSettingsToken, useValue: {} }  //to remove warning
  ],
})

export class AdminLayoutModule {}
