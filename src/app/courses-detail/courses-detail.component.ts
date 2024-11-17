import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.scss']
})
export class CoursesDetailComponent {

  constructor(private route: ActivatedRoute) {
  }

  slug: string = '';

  ngOnInit() {
    this.getParamRoute();
  }

  getParamRoute() {
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
    });
  }
}
