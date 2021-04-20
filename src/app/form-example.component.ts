import { Component } from "@angular/core";
import { FormArray, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-forms",
  templateUrl: "./form-example.component.html",
  styleUrls: ["./form-example.component.css"]
})
export class FormExampleComponent {
  form;
  constructor(private _fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.form = this._fb.group({
      name: [""],
      age: [""],
      technologyStack: this._fb.array([])
    });
  }

  get technologyStack() {
    return this.form.controls["technologyStack"];
  }

  addDynamicControl() {
    const controlaDD = this._fb.group({
      title: ["", Validators.required],
      description: ["description", Validators.required]
    });
    console.log(controlaDD, "sss");
    this.technologyStack.push(controlaDD);
  }
  deleteTechnology(lessonIndex: number) {
    this.technologyStack.removeAt(lessonIndex);
  }
}
