import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Project } from './pages/project/project';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "project/:id",
        component: Project
    },
];
