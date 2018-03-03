import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Problem } from '../problem.model';
import { ProblemService } from '../problem.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-problem-detail',
  templateUrl: './problem-detail.component.html',
  styleUrls: ['./problem-detail.component.css'],
  providers: [ProblemService]
})
export class ProblemDetailComponent implements OnInit {

  problemId: string;
  problemToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private problemService: ProblemService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.problemId = urlParameters['id'];
    })
    this.problemToDisplay = this.problemService.getProblemById(this.problemId);
  }

}
