import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Student} from '../student-component/model/student';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private readonly baseUrl = 'http://localhost:8081/';
  private studentsEndpoint = 'students';

  constructor(private http: HttpClient) {
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseUrl + this.studentsEndpoint);
  }

  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl + this.studentsEndpoint}/${id}`);
  }

  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.baseUrl + this.studentsEndpoint, student);
  }

  updateStudent(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.baseUrl + this.studentsEndpoint}/${id}`, student);
  }

  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl + this.studentsEndpoint}/${id}`);
  }
}
