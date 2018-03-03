import { Component, OnInit } from '@angular/core';
import { Problem } from '../problem.model';
import { Router } from '@angular/router';
import { ProblemService } from '../problem.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css'],
  providers: [ProblemService]
})
export class ProblemListComponent implements OnInit {
  problems: FirebaseListObservable<any[]>
  currentRoute: string = this.router.url;

  constructor(private router: Router, private problemService: ProblemService) { }

  ngOnInit() {
    this.problems = this.problemService.getProblems();
  }

  seeDetails(clickedproblem) {
    this.router.navigate(['problems', clickedproblem.$key])
  }

}
