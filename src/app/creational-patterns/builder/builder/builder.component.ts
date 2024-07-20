import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControlOptions, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, 
  ValidatorFn, AsyncValidatorFn, FormRecord, Validators } from '@angular/forms';


class NewDefinitionFormGroup extends FormGroup {
  constructor(controls: any, validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null) {
    super(controls);
    console.info('New definition keys',   Object.keys(controls));
  }
}

export class NewDefinitionFormBuilderPattern extends FormBuilder {
  override group<T extends {}>(controls: T, options?: AbstractControlOptions | null): FormGroup {
    return new NewDefinitionFormGroup(controls);
  }
}

@Component({
  selector: 'app-builder',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './builder.component.html',
  styleUrl: './builder.component.scss',
  providers: [{
    provide: FormBuilder,
    useClass: NewDefinitionFormBuilderPattern
  }]
})
export class BuilderComponent {
  private formBuilder = inject(FormBuilder)

  radios: string[] = ['Male', 'Female'];
  selects: string[] = ['USA', 'Canada', 'UK', 'Australia', 'Other'];

  formBuilderGroup: FormGroup = this.formBuilder.group({
    name: this.formBuilder.control('', [Validators.maxLength(10)]),
    number: this.formBuilder.control(0, { nonNullable: true, }),
    group: this.formBuilder.group({
      groupName: this.formBuilder.control('', [Validators.required]),
    }),
    groupRadioSelectArrayChcekBox: this.formBuilder.group({
      radio: this.formBuilder.control(''),
      select: this.formBuilder.control(''),
      checkBox: this.formBuilder.array([
        this.createOption('checkBox 1'),
        this.createOption('checkBox 2'),
        this.createOption('checkBox 3')
      ])
    }),
    record: this.formBuilder.array([this.createRecord()])
  });

  createOption(defaultvalue: string, selected = false) {
    return this.formBuilder.group({
      selected: this.formBuilder.control(selected),
      value: this.formBuilder.control(defaultvalue)
    })
  }

  get checkBox(): FormArray {
    return this.formBuilderGroup.get('groupRadioSelectArrayChcekBox.checkBox') as FormArray;
  }
  get record(): FormArray {
    return this.formBuilderGroup.get('record') as FormArray;
  }

  createRecord(): FormRecord {
    return this.formBuilder.record({
      key: this.formBuilder.control(''),
      value: this.formBuilder.control(''),
    });
  }
  addRecord(): void {
    this.record.push(this.createRecord());
  }

  save() {
    console.log(this.formBuilderGroup);
  }
  reset() {
    this.formBuilderGroup.reset()
  }
}
