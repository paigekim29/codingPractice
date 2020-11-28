// 문제
// 학생의 정보가 담긴 객체를 요소로 갖는 배열을 입력받아 아래 조건에 맞게 변형된 배열을 리턴해야 합니다.

// 남학생들의 정보는 리턴하는 배열에서 제외합니다.
// 'grades' 속성값은 평균값(number 타입)으로 바꿉니다.
// 입력
// 인자 1 : students
// 객체를 요소로 갖는 배열
// arr[i]는 'name', 'gender' 등의 속성을 갖는 객체
// 'grades' 속성은 number 타입을 요소로 갖는 배열
// 'grades' 속성이 빈 배열인 경우는 없다고 가정합니다.
// 출력
// 반복문(for, while) 사용은 금지됩니다.
// 배열을 리턴해야 합니다.
// 배열로 되어 있는 학생들의 성적을 number 타입의 평균값으로 변형해야 합니다.
// 주의 사항
// 'female'는 여학생, 'male'는 남학생입니다.
// 입출력 예시
// let studentList = [
//   {
//     name: 'Anna',
//     gender: 'female',
//     grades: [4.5, 3.5, 4],
//   },
//   {
//     name: 'Dennis',
//     gender: 'male',
//     country: 'Germany',
//     grades: [5, 1.5, 4],
//   },
//   {
//     name: 'Martha',
//     gender: 'female',
//     grades: [5, 4, 4, 3],
//   },
//   {
//     name: 'Brock',
//     gender: 'male',
//     grades: [4, 3, 2],
//   },
// ];

// let output = studentReports(studentList);

// console.log(output); // -->
// [
//   { name: 'Anna', gender: 'female', grades: 4 },
//   { name: 'Martha', gender: 'female', grades: 4 },
// ];

function studentReports(students) {
  const filtered = students.filter(v=>v.gender==='female')
  return filtered.map(function(el){
    const avg = el.grades.reduce((acc,cur)=>acc+cur,0)/el.grades.length
    el.grades = avg
    return el
  })
}

function studentReports(students) {
  const female = students.filter(function(el) {
    return el.gender === 'female';
  });
  return female.map(function(el) { //평균값을 넣어주는 역할
    const sum = el.grades.reduce(function(acc, cur) {
      return acc + cur;
    }, 0);
    const avg = sum / el.grades.length;

    el.grades = avg;
    return el;
  });
}

function studentReports(students) {
  const avg = function(arr) {
    return arr.reduce(function(acc, cur) {
      return acc + cur;
    }) / arr.length; //avg function 만들음
  };
  students.forEach(function(v) {
    v.grades = avg(v.grades);
  });
  return students.filter(function(v) {
    return v.gender === 'female';
  });
}

// {name: 'mari', ...obj}
// 합칠 때 Obj에 name이 있으면, 'mari'가 덮여씌여짐


function studentReports(students) {
  const avg= function(arr){
    return arr.reduce(function(acc, cur){
      return acc + cur
    }, 0)/arr.length
  }
  return student = students.reduce(function(acc, cur){
    if(cur.gender === 'female'){
      return [...acc, {...cur, grades : avg(cur.grades)}]
    }
    //객체도 spread syntax 가능한데,
    else{
      return acc // 아무것도 없을 때 빈배열이여야 가능
    }
  }, [])//cur.gender만 검사하고 싶으니깐 Initval 필요
}