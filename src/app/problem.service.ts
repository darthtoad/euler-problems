import { Injectable } from '@angular/core';
import { Problem } from './problem.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProblemService {

  problems: FirebaseListObservable<any[]>

  constructor(private database: AngularFireDatabase) {
    this.problems = database.list('problems');
  }

  getProblems() {
    return this.problems;
  }

  getProblemById(problemId: string) {
    return this.database.object('problems/' + problemId)
  }

  //adding other CRUD routes. May delete

  addProblem(newProblem: Problem) {
    //I may need to add an API to convert my string into JSON
    this.problems.push(newProblem);
  }


  updateProblem(problemToUpdate){
    let problemInFirebase = this.getProblemById(problemToUpdate.$key);
    problemInFirebase.update({name: problemToUpdate.name,
                              number: problemToUpdate.number,
                              answer: problemToUpdate.answer,
                              solution: problemToUpdate.solution
    })
  }

  deleteProblem(problemToDelete){
    let problemInFirebase = this.getProblemById(problemToDelete.$key);
    problemInFirebase.remove();
  }

}
