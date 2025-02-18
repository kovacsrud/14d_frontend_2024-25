import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { LocationsComponent } from './components/locations/locations.component';
import { CharactersComponent } from './components/characters/characters.component';

export const routes: Routes = [
    {path:'',component:MainComponent},
    {path:'episodes',component:EpisodesComponent},
    {path:'locations',component:LocationsComponent},
    {path:'characters',component:CharactersComponent}
];
