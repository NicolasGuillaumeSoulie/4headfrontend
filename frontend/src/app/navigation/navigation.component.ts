import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';
import { CharClass } from '../spell.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public name: string | undefined;
  public charClasses: { index: string, level: number }[];

  constructor(private profileService: ProfileService) {
    this.charClasses = [];
  }

  ngOnInit() {
    this.name = this.profileService.getName();
    
    let classes = this.profileService.getClasses();
    if (classes !== undefined){
      this.charClasses = classes;
    }
  }

}
