import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {StudentModel} from '../model/studentModel';
import {AssignmentModel} from '../model/assignmentModel';
import {GroupModel} from '../model/group.model';
import {environment} from '../../environment';
import {AddAssignmentModel} from '../model/add-assignment-model';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private readonly baseUrl = environment.apiUrl + '/';
  private studentsEndpoint = 'students';
  private assignementsEndpoint = 'assignments';
  private groupsEndpoint = 'baseData/groups';
  private addAssignment = "/addAssignments"

  constructor(private http: HttpClient) {
  }

  getStudents(): Observable<StudentModel[]> {
    return this.http.get<StudentModel[]>(this.baseUrl + this.studentsEndpoint);
  }

  getAssignments(): Observable<AssignmentModel[]> {
    return this.http.get<AssignmentModel[]>(this.baseUrl + this.assignementsEndpoint);
  }

  getStudentById(id: number): Observable<StudentModel> {
    return this.http.get<StudentModel>(`${this.baseUrl + this.studentsEndpoint}/${id}`);
  }

  getAssignmentById(id: number): Observable<AssignmentModel> {
    return this.http.get<AssignmentModel>(`${this.baseUrl + this.assignementsEndpoint}/${id}`);
  }

  createStudent(student: StudentModel): Observable<StudentModel> {
    return this.http.post<StudentModel>(this.baseUrl + this.studentsEndpoint, student);
  }

  createAssignement(student: StudentModel): Observable<StudentModel> {
    return this.http.post<StudentModel>(this.baseUrl + this.studentsEndpoint, student);
  }


  addAssignementToStudent(assignment: AddAssignmentModel): Observable<void> {

    return this.http.put<void>(this.baseUrl + this.studentsEndpoint + this.addAssignment, assignment);
  }

  updateStudent(student: StudentModel): Observable<StudentModel> {
    return this.http.put<StudentModel>(this.baseUrl + this.studentsEndpoint, student);
  }

  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl + this.studentsEndpoint}/${id}`);
  }

  getAllGroups(): Observable<GroupModel[]> {

    return this.http.get<GroupModel[]>(this.baseUrl + this.groupsEndpoint);
  }
}
