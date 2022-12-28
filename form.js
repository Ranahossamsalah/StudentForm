//addEventListener(click)
//prompt +save added names
//add names to the prompt div
let btn1 = document.getElementsByClassName("btnprompt")[0]; //important of[0]
let parentstud = document.getElementsByClassName("parentstu")[0];
let clickprompt = btn1.addEventListener("click", promptfunc);
let classprompt = document.getElementsByClassName("prompt")[0];
let studentarray = [];


function promptfunc() {
  let stuName = prompt("please enter the student name");
  if (stuName) {
    let newStudent = document.createElement("div");
    let p = document.createElement("p");
    parentstud.appendChild(newStudent); //parentfirt then appendchild then child
    newStudent.appendChild(p);
    p.innerHTML = stuName;
    //create new class
    let newattr = document.createAttribute("class");
    newattr.value = "newattr";
    newStudent.setAttributeNode(newattr);
    let deletebtn = document.createElement("button");
    newStudent.appendChild(deletebtn);
    deletebtn.innerText = "X";
    deletebtn.addEventListener("click", delateStu);
    function delateStu() {
      newStudent.remove();
    }
    let xbtn = document.createAttribute("style");
    deletebtn.setAttributeNode(xbtn);
    xbtn.value = "width:30px";
    studentarray.push(stuName);
    // xbtn.value = "color:red";  //problem : overwright
  }
}

//search for student names
//addEventListener(click)
//if condition (if the search input value === the added nestudent names )
let allstud = document.getElementsByClassName("newattr");
let btn2 = document.getElementsByClassName("btnOk")[0];
let inputsearch = document.getElementById("searchinput");
btn2.addEventListener("click", searchStud);
function searchStud() {
  for (stud of allstud) {
    //very important
    stud.style.display = "block"; //need it to get values back after displaynone
    if (
      inputsearch.value === stud.children[0].innerText ||
      !inputsearch.value
    ) {
      // need || if i p
      stud.style.display = "block";
    } else {
      stud.style.display = "none";
    }
  }
}
