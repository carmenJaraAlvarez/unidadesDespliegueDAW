import { Routes } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import { IdentificationComponent } from './body/unit1/identification/identification.component';
import { JustificationComponent } from './body/unit1/justification/justification.component';
import { DuaComponent } from './body/unit1/dua/dua.component';
import { DescriptionComponent } from './body/unit1/description/description.component';
import { SpecificationComponent } from './body/unit1/specification/specification.component';
import { SequencingComponent } from './body/unit1/sequencing/sequencing/sequencing.component';
import { EvaluationComponent } from './body/unit1/evaluation/evaluation.component';
import { IdentificationComponent as Unit2IdentificationComponent } from './body/unit2/identification/identification.component';
import { JustificationComponent as Unit2JustificationComponent } from './body/unit2/justification/justification.component';
import { DuaComponent as Unit2DuaComponent } from './body/unit2/dua/dua.component';
import { DescriptionComponent as Unit2DescriptionComponent } from './body/unit2/description/description.component';
import { SpecificationComponent as Unit2SpecificationComponent } from './body/unit2/specification/specification.component';
import { SequencingComponent as Unit2SequencingComponent } from './body/unit2/sequencing/sequencing/sequencing.component';
import { EvaluationComponent as Unit2EvaluationComponent } from './body/unit2/evaluation/evaluation.component';
import { IdentificationComponent as Unit3IdentificationComponent } from './body/unit3/identification/identification.component';
import { JustificationComponent as Unit3JustificationComponent } from './body/unit3/justification/justification.component';
import { DuaComponent as Unit3DuaComponent } from './body/unit3/dua/dua.component';
import { DescriptionComponent as Unit3DescriptionComponent } from './body/unit3/description/description.component';
import { SpecificationComponent as Unit3SpecificationComponent } from './body/unit3/specification/specification.component';
import { SequencingComponent as Unit3SequencingComponent } from './body/unit3/sequencing/sequencing/sequencing.component';
import { EvaluationComponent as Unit3EvaluationComponent } from './body/unit3/evaluation/evaluation.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent },
  { 
    path: 'unidad1',
    children: [
      { path: '', redirectTo: 'identificacion', pathMatch: 'full' },
      { path: 'identificacion', component: IdentificationComponent },
      { path: 'justificacion', component: JustificationComponent },
      { path: 'principiosdua', component: DuaComponent },
      { path: 'descripcion', component: DescriptionComponent },
      { path: 'concrecion', component: SpecificationComponent },
      { path: 'secuenciacion', component: SequencingComponent },
      { path: 'evaluacion', component: EvaluationComponent }
    ]
  },
  {
    path: 'unidad2',
    children: [
      { path: '', redirectTo: 'identificacion', pathMatch: 'full' },
      { path: 'identificacion', component: Unit2IdentificationComponent },
      { path: 'justificacion', component: Unit2JustificationComponent },
      { path: 'principiosdua', component: Unit2DuaComponent },
      { path: 'descripcion', component: Unit2DescriptionComponent },
      { path: 'concrecion', component: Unit2SpecificationComponent },
      { path: 'secuenciacion', component: Unit2SequencingComponent },
      { path: 'evaluacion', component: Unit2EvaluationComponent }
    ]
  },
  {
    path: 'unidad3',
    children: [
      { path: '', redirectTo: 'identificacion', pathMatch: 'full' },
      { path: 'identificacion', component: Unit3IdentificationComponent },
      { path: 'justificacion', component: Unit3JustificationComponent },
      { path: 'principiosdua', component: Unit3DuaComponent },
      { path: 'descripcion', component: Unit3DescriptionComponent },
      { path: 'concrecion', component: Unit3SpecificationComponent },
      { path: 'secuenciacion', component: Unit3SequencingComponent },
      { path: 'evaluacion', component: Unit3EvaluationComponent }
    ]
  }
];
