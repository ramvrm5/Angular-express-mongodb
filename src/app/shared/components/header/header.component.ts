import {ChangeDetectorRef, Component, Input, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isMobile = false;
  @Input() theme: string = 'transparent';
  @Input() variant: string = 'default';
  @Input() showLogin: boolean = true;
  isLoggedIn = false;

  @ViewChild('navbar', { static: false }) navbar;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private ngxSpinnerService: NgxSpinnerService
  ) { }

  async signInWithGoogle() {
    
  }

  ngOnInit(): void {
    this.breakpointObserver.observe(Breakpoints.Handset).subscribe( result => {
      this.isMobile = result.matches;
    });
  }

  openFooter() {
    this.navbar.nativeElement.style.width = '100%';
  }

  closeFooter() {
    this.navbar.nativeElement.style.width = '0';
  }

  async logout() {
    
  }
}