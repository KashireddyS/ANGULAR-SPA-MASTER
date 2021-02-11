import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { EnrollmentService } from '../_services/enrollment.service';

@Component({
  selector: 'app-forms-example1',
  templateUrl: './forms-example1.component.html',
  styleUrls: ['./forms-example1.component.css']
})
export class FormsExample1Component implements OnInit {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  submitted = false;
  errorMsg = '';
  // Uncomment below line if topic dropdownlist should contain default value 
  userModel = new User('John', 'john@example.com', 9999988888, 'default', 'morning', true);
  //userModel = new User('John', 'john@example.com', 9999988888, 'Angular', 'morning', true);

  constructor( private enrollmentService: EnrollmentService) { }

  validateTopic(topic: string) {
    if(topic === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.enrollmentService.enroll(this.userModel)
        .subscribe(
          data => console.log('Success!', data),
          error => this.errorMsg = error.statusText
        );
  }
}
