import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { PlayersListComponent } from './components/team-management/players-list/players-list.component';
import { SquadComponent } from './components/team-management/squad/squad.component';
import { TacticsComponent } from './components/team-management/tactics/tactics.component';
import { TrainingCenterComponent } from './components/training-center/training-center/training-center.component';
import { PlayersSelectorComponent } from './components/training-center/players-selector/players-selector.component';
import { TrainingExercisesSelectorComponent } from './components/training-center/training-exercises-selector/training-exercises-selector.component';
import { TransferMarketComponent } from './components/transfer-market/transfer-market/transfer-market.component';
import { PlayersTransferMarketComponent } from './components/transfer-market/players-transfer-market/players-transfer-market.component';
import { HeadCoachTransferMarketComponent } from './components/transfer-market/head-coach-transfer-market/head-coach-transfer-market.component';
import { HeadCoachAssistentTransferMarketComponent } from './components/transfer-market/head-coach-assistent-transfer-market/head-coach-assistent-transfer-market.component';
import { MedicTransferMarketComponent } from './components/transfer-market/medic-transfer-market/medic-transfer-market.component';
import { PsychologistTransferMarketComponent } from './components/transfer-market/psychologist-transfer-market/psychologist-transfer-market.component';
import { ScoutTransferMarketComponent } from './components/transfer-market/scout-transfer-market/scout-transfer-market.component';
import { MatchesComponent } from './components/matches/matches/matches.component';
import { LeagueComponent } from './components/league/league/league.component';
import { LeagueStandingsComponent } from './components/league/league-standings/league-standings.component';
import { LeagueRoundsComponent } from './components/league/league-rounds/league-rounds.component';
import { LeagueBestPlayersComponent } from './components/league/league-best-players/league-best-players.component';
import { SuperLeagueComponent } from './components/super-league/super-league/super-league.component';
import { SuperLeagueBestPlayersComponent } from './components/super-league/super-league-best-players/super-league-best-players.component';
import { SuperLeagueRoundsComponent } from './components/super-league/super-league-rounds/super-league-rounds.component';
import { SuperLeagueStandingsComponent } from './components/super-league/super-league-standings/super-league-standings.component';
import { ClubComponent } from './components/club/club/club.component';
import { HistoryComponent } from './components/club/history/history.component';
import { HollOfFameComponent } from './components/club/holl-of-fame/holl-of-fame.component';
import { InfrastructureComponent } from './components/infrastructure/infrastructure/infrastructure.component';
import { AcademyComponent } from './components/infrastructure/academy/academy.component';
import { FanClubComponent } from './components/infrastructure/fan-club/fan-club.component';
import { MedicalCenterComponent } from './components/infrastructure/medical-center/medical-center.component';
import { StadiumComponent } from './components/infrastructure/stadium/stadium.component';
import { ShopComponent } from './components/shop/shop/shop.component';
import { SettingsComponent } from './components/settings/settings/settings.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    SquadComponent,
    TacticsComponent,
    TrainingCenterComponent,
    PlayersSelectorComponent,
    TrainingExercisesSelectorComponent,
    TransferMarketComponent,
    PlayersTransferMarketComponent,
    HeadCoachTransferMarketComponent,
    HeadCoachAssistentTransferMarketComponent,
    MedicTransferMarketComponent,
    PsychologistTransferMarketComponent,
    ScoutTransferMarketComponent,
    MatchesComponent,
    LeagueComponent,
    LeagueStandingsComponent,
    LeagueRoundsComponent,
    LeagueBestPlayersComponent,
    SuperLeagueComponent,
    SuperLeagueBestPlayersComponent,
    SuperLeagueRoundsComponent,
    SuperLeagueStandingsComponent,
    ClubComponent,
    HistoryComponent,
    HollOfFameComponent,
    InfrastructureComponent,
    AcademyComponent,
    FanClubComponent,
    MedicalCenterComponent,
    StadiumComponent,
    ShopComponent,
    SettingsComponent,
    MainHeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule, AlertModule.forRoot(), RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
