import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/users/User';

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {
  user!: User;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.user = this.router.getCurrentNavigation()?.extras.state as User;
    });
  }

  goToPost(): void {
    this.router.navigate(['posts'], {relativeTo: this.activatedRoute, state: this.user});
  }

  ngOnInit(): void {
  }


}
