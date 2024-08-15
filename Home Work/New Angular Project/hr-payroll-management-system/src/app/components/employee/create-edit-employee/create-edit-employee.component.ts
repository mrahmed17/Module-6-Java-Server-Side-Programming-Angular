import { Component } from '@angular/core';

@Component({
  selector: 'app-create-edit-employee',
  templateUrl: './create-edit-employee.component.html',
  styleUrl: './create-edit-employee.component.css'
})
export class CreateEditEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  isEditMode = false;
  employeeId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      department: ['', Validators.required],
      position: ['', Validators.required],
      salary: ['', [Validators.required, Validators.min(0)]],
      hireDate: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.employeeId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.employeeId) {
      this.isEditMode = true;
      this.employeeService.getEmployeeById(this.employeeId).subscribe(
        (data) => {
          this.employeeForm.patchValue(data);
        },
        (error) => {
          console.error('Error fetching employee data:', error);
        }
      );
    }
  }

  onSubmit(): void {
    if (this.employeeForm.invalid) {
      return;
    }

    const employeeData: Employee = this.employeeForm.value;

    if (this.isEditMode) {
      this.employeeService.updateEmployee(this.employeeId!, employeeData).subscribe(
        () => this.router.navigate(['/employees']),
        (error) => console.error('Error updating employee:', error)
      );
    } else {
      this.employeeService.createEmployee(employeeData).subscribe(
        () => this.router.navigate(['/employees']),
        (error) => console.error('Error creating employee:', error)
      );
    }
  }

}
