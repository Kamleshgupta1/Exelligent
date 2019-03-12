import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { EntranceexamComponent } from '../../entranceexam/entranceexam.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { BasicComponent } from '../../basic/basic.component'
import { GkComponent } from '../../gk/gk.component';
import { ArtComponent } from '../../art/art.component';
import { SelfComponent } from '../../self/self.component';
import { LanguageComponent } from '../../language/language.component';
import { AboutusComponent } from '../../aboutus/aboutus.component';

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

import { JeemainComponent } from '../../Entranceexamcomponent/jeemain/jeemain.component';
import { JeeadvanceComponent } from '../../Entranceexamcomponent/jeeadvance/jeeadvance.component';
import { CetComponent } from '../../Entranceexamcomponent/cet/cet.component';
import { CatComponent } from '../../Entranceexamcomponent/cat/cat.component';
import { GateComponent } from '../../Entranceexamcomponent/gate/gate.component';
import { UpscComponent } from '../../Entranceexamcomponent/upsc/upsc.component';

import { FileuploadComponent } from '../../fileupload/fileupload.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',                     component: DashboardComponent,
        data: {
            breadcrumb: 'dashboard'
        }
    },
    { path: 'user-profile',                  component: UserProfileComponent,
        data: {
            breadcrumb: 'user-profile'
        }
    },
    { path: 'table-list',                    component: TableListComponent,
        data: {
            breadcrumb: 'table-list'
        }
    },
    { path: 'typography',                    component: TypographyComponent,
        data: {
            breadcrumb: 'typography'
        }
    },
    { path: 'entranceexam',                  component: EntranceexamComponent,
        data: {
            breadcrumb: 'entranceexam'
        }
    },
    { path: 'icons',                         component: IconsComponent,
        data: {
            breadcrumb: 'icons'
        }
    },
    { path: 'notifications',                 component: NotificationsComponent,
        data: {
                breadcrumb: 'notifications'
            }
    },
    { path: 'basic',                         component: BasicComponent,
        data: {
                breadcrumb: 'basic'
            }
    },
    { path: 'gk',                            component: GkComponent,
        data: {
            breadcrumb: 'gk'
        }
    },
    { path: 'art',                           component: ArtComponent,
        data: {
            breadcrumb: 'art'
        }
    },
    { path: 'self',                          component: SelfComponent,
        data: {
            breadcrumb: 'self'
        }
    },
    { path: 'language',                      component: LanguageComponent,
        data: {
            breadcrumb: 'language'
        }
    },
    { path: 'aboutus',                       component: AboutusComponent,
        data: {
            breadcrumb: 'aboutus'
        }
    },
    
    { path: 'dashboardcomponent/quiz',       component: QuizComponent },
    { path: 'dashboardcomponent/practice',   component: PracticeComponent },
    { path: 'dashboardcomponent/test',       component: TestComponent },
    { path: 'dashboardcomponent/analysis',   component: AnalysisComponent },
    { path: 'dashboardcomponent/community',  component: CommunityComponent },
    
    { path: 'basiccomponent/alphabet',       component: AlphabetComponent },
    { path: 'basiccomponent/alphabet-hindi', component: AlphabetHindiComponent },
    { path: 'basiccomponent/counting',       component: CountingComponent },
    { path: 'basiccomponent/table',          component: TableComponent },
    { path: 'basiccomponent/maths',          component: MathsComponent },
    { path: 'basiccomponent/days',           component: DaysComponent },
    { path: 'basiccomponent/month',          component: MonthComponent },
    { path: 'basiccomponent/name',           component: NameComponent },
    { path: 'basiccomponent/book',           component: BookComponent },
    
    { path: 'artcomponent/standard5',        component: Standard5Component },
    { path: 'artcomponent/standard6',        component: Standard6Component },
    { path: 'artcomponent/standard7',        component: Standard7Component },
    { path: 'artcomponent/standard8',        component: Standard8Component },
    { path: 'artcomponent/standard9',        component: Standard9Component },
    { path: 'artcomponent/standard10',       component: Standard10Component },
    { path: 'artcomponent/artfyjc',          component: ArtfyjcComponent },
    { path: 'artcomponent/artsyjc',          component: ArtsyjcComponent },
    { path: 'artcomponent/comfyjc',          component: ComfyjcComponent },
    { path: 'artcomponent/comsyjc',          component: ComsyjcComponent },
    { path: 'artcomponent/scifyjc',          component: ScifyjcComponent },
    { path: 'artcomponent/scisyjc',          component: ScisyjcComponent },
    
    { path: 'subjectcomponent/marathisub',   component: MarathisubComponent },
    { path: 'subjectcomponent/hindisub',     component: HindisubComponent },
    { path: 'subjectcomponent/englishsub',   component: EnglishsubComponent },
    { path: 'subjectcomponent/historysub',   component: HistorysubComponent },
    { path: 'subjectcomponent/sanskruitsub', component: SanskruitsubComponent },
    { path: 'subjectcomponent/mathmetics',   component: MathmeticsComponent },
    { path: 'subjectcomponent/science',      component: ScienceComponent },
    { path: 'subjectcomponent/civics',       component: CivicsComponent },
    { path: 'subjectcomponent/geo',          component: GeoComponent },
    { path: 'subjectcomponent/physics',      component: PhysicsComponent },
    { path: 'subjectcomponent/chemistry',    component: ChemistryComponent },
    { path: 'subjectcomponent/bio',          component: BioComponent },
    
    { path: 'artdesign/painting',            component: PaintingComponent },
    { path: 'artdesign/drawing',             component: DrawingComponent },
    { path: 'artdesign/photograph',          component: PhotographComponent },
    { path: 'artdesign/craft',               component: CraftComponent },
    { path: 'artdesign/sculpture',           component: SculptureComponent },
    { path: 'artdesign/music',               component: MusicComponent },
    { path: 'artdesign/dance',               component: DanceComponent },
    { path: 'artdesign/opera',               component: OperaComponent },
    { path: 'artdesign/design',              component: DesignComponent },
    
    { path: 'storycomponent/cummulative',    component: CummulativeComponent },
    { path: 'storycomponent/realistic',      component: RealisticComponent },
    { path: 'storycomponent/religious',      component: ReligiousComponent },
    { path: 'storycomponent/magic',          component: MagicComponent },
    { path: 'storycomponent/horror',         component: HorrorComponent },
    { path: 'storycomponent/motivational',   component: MotivationalComponent },
    { path: 'storycomponent/romance',        component: RomanceComponent },
    { path: 'storycomponent/myth',           component: MythComponent },
    { path: 'storycomponent/panchtantra',    component: PanchtantraComponent },
    
    { path: 'languagecomponent/marathi',     component: MarathiComponent },
    { path: 'languagecomponent/hindi',       component: HindiComponent },
    { path: 'languagecomponent/english',     component: EnglishComponent },
    { path: 'languagecomponent/sanskruit',   component: SanskruitComponent },
    { path: 'languagecomponent/gujrati',     component: GujratiComponent },
    { path: 'languagecomponent/tamil',       component: TamilComponent },
    { path: 'languagecomponent/panjabi',     component: PanjabiComponent },
    { path: 'languagecomponent/kannad',      component: KannadComponent },
    { path: 'languagecomponent/malayalam',   component: MalayalamComponent },
    
    { path: 'itcomponent/mobtrick',          component: MobtrickComponent },
    { path: 'itcomponent/mobapp',            component: MobappComponent },
    { path: 'itcomponent/comtrick',          component: ComtrickComponent },
    { path: 'itcomponent/web',               component: WebComponent },
    { path: 'itcomponent/hack',              component: HackComponent },
    { path: 'itcomponent/software',          component: SoftwareComponent },
    { path: 'itcomponent/social',            component: SocialComponent },
    { path: 'itcomponent/law',               component: LawComponent },
    { path: 'itcomponent/marketing',         component: MarketingComponent },
    { path: 'itcomponent/ethics',            component: EthicsComponent },
    { path: 'itcomponent/bussiness',         component: BussinessComponent },
    
    { path: 'gkcomponent/india',             component: IndiaComponent },
    { path: 'gkcomponent/world',             component: WorldComponent },
    { path: 'gkcomponent/sport',             component: SportComponent },
    { path: 'gkcomponent/history',           component: HistoryComponent },
    { path: 'gkcomponent/sciencegk',           component: SciencegkComponent },
    
    { path: 'selfcomponent/yoga',            component: YogaComponent },
    { path: 'selfcomponent/exercise',        component: ExerciseComponent },
    { path: 'selfcomponent/behav',           component: BehavComponent },
    { path: 'selfcomponent/style',           component: StyleComponent },
    { path: 'selfcomponent/commun',          component: CommunComponent },
    
    { path: 'Entranceexamcomponent/jeemain', component: JeemainComponent },
    { path: 'Entranceexamcomponent/jeeadvance',component: JeeadvanceComponent },
    { path: 'Entranceexamcomponent/cet',     component: CetComponent },
    { path: 'Entranceexamcomponent/cat',     component: CatComponent },
    { path: 'Entranceexamcomponent/gate',    component: GateComponent },
    { path: 'Entranceexamcomponent/upsc',    component: UpscComponent },

    { path: 'fileupload',    component: FileuploadComponent },

];
