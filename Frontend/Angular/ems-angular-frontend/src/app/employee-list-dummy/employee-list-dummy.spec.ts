import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListDummy } from './employee-list-dummy';

describe('EmployeeListDummy', () => {
  let component: EmployeeListDummy;
  let fixture: ComponentFixture<EmployeeListDummy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeListDummy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeListDummy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
