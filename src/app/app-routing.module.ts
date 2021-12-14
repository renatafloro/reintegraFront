import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { PostagensComponent } from './postagens/postagens.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { TemasComponent } from './temas/temas.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
{path: 'login', component: LoginComponent},
{path: 'cadastro', component: CadastrarComponent},
{path: 'postagens', component: PostagensComponent},
{path: 'sobrenos', component: SobreNosComponent},
{path: 'temas', component: TemasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
