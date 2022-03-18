import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'List Student';
  subTitle = 'List student hard working';
  isEdit = false;
  students = [
    {
      id: 1,
      name: 'thuy',
      age: 20,
      phoneNumber: '0325500080',
      email: 'alex1@fpt.edu.vn',
      avatar: 'https://i.pinimg.com/originals/eb/22/d1/eb22d1f045e61322e92d1c68058c2cf0.gif'
    },
    {
      id: 2,
      name: 'phong',
      age: 20,
      phoneNumber: '0325500080',
      email: 'alex2@fpt.edu.vn',
      avatar: 'https://i.pinimg.com/originals/ed/7c/45/ed7c45fdc34d5a54d971bd633b53b64b.gif'
    },
    {
      id: 3,
      name: 'nguyen',
      age: 20,
      phoneNumber: '0325500080',
      email: 'alex3@fpt.edu.vn',
      avatar: 'https://i.pinimg.com/originals/59/29/26/59292684e13ac007abb00b535b235d61.gif'
    },
    {
      id: 4,
      name: 'quang',
      age: 20,
      phoneNumber: '0325500080',
      email: 'alex4@fpt.edu.vn',
      avatar: 'https://i.pinimg.com/originals/84/01/ed/8401ed8f1446c27cb9b9a39d6b9b2be3.gif'
    },
  ];
  newStudent = {
    id: 0,
    name: '',
    age: 0,
    phoneNumber: '',
    email: '',
    avatar: ''
  };
  delete(id: any) {
    const confirm = window.confirm("Bạn có chắc muốn xóa");
    if (confirm) {
      this.students = this.students.filter(student => student.id !== id);

    }
  };
  users = [
    {
      id: 1,
      name: 'Alex 1',
      weight: 20,
      height: 160,
      avatar: 'https://i.pinimg.com/originals/84/01/ed/8401ed8f1446c27cb9b9a39d6b9b2be3.gif',
    },
    {
      id: 2,
      name: 'Alex 2',
      weight: 50,
      height: 150,
      avatar: 'https://i.pinimg.com/originals/84/01/ed/8401ed8f1446c27cb9b9a39d6b9b2be3.gif',
    }
    ,
    {
      id: 3,
      name: 'Alex 3',
      weight: 25,
      height: 10,
      avatar: 'https://i.pinimg.com/originals/84/01/ed/8401ed8f1446c27cb9b9a39d6b9b2be3.gif',
    }
  ];
  deleteUser(id: any) {
    const confirm = window.confirm("Bạn có chắc muốn xóa");

    if (confirm) {
      this.users = this.users.filter(user => user.id !== id);
    }
  };
  searchValue = '';
  filterStudent = [
    ...this.students
  ];
  onSearch(event: any) {

    this.searchValue = event.target.value;
    this.students = this.filterStudent.filter(student => {
      //TODO Chuyển sang chữ thường và xóa khoảng trắng
      const content = this.searchValue.toLowerCase().trim();
      const name = student.name.toLowerCase();

      return name.indexOf(content) !== -1;
    });

  };
  show = (domElement: any, conponent: any) => {
    const elment = document.querySelector(domElement);
    if (elment) {
      elment.innerHTML = conponent;
    }
  }
  onChangeInput(event: any, key: any) {
    const inputValue = event.target.value;
    this.newStudent = {
      ...this.newStudent,
      [key]: inputValue
    };
  };
  onValidate(obj: any) {
    if (!obj.name || !obj.age || !obj.phoneNumber || !obj.email || !obj.avatar) {

      return false;
    }
    return true;
  };
  ThemMoi() {
    if (!this.onValidate(this.newStudent)) {
      return;
    }
    if (this.newStudent.id) {
      for (let index = 0; index < this.students.length; index++) {
        if (this.students[index].id === this.newStudent.id) {
          this.students[index] = this.newStudent;
        }
      }
    } else {
      let _id = Math.floor(Math.random() * 101);;
      const obj = this.students.find(item => item.id == _id);
      if (obj) {
        _id = _id * Math.floor(Math.random() * 101);;
      }
      this.newStudent = {
        ...this.newStudent, id: _id, age: Number(this.newStudent.age)
      };
      this.students.push(this.newStudent);
    }
    this.newStudent = {
      id: 0,
      name: '',
      age: 0,
      phoneNumber: '',
      email: '',
      avatar: ''
    };
  };
  edit(data: any) {
    this.newStudent = data;
  }
}
