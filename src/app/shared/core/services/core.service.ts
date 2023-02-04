import { Injectable } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";


import { SweetAlertService } from './sweet-alert.service';
import { DomSanitizer } from '@angular/platform-browser';
import { SplashScreenService } from '../../service/root/splash-screen.service';

@Injectable()
export class ToolService {
    constructor(
        public sweetAlert: SweetAlertService,
        public splash: SplashScreenService,
        public dialog: MatDialog,
        public sanitizer: DomSanitizer
    ) { }
}