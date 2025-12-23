// destructuring happens for array and objects
// here we talk about objects only

const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "Vijay"
}

//course.courseInstructor

const {courseInstructor: instructor} = course

//console.log(courseInstructor) // after doing courseInstructor: instructor this console.log will not run why?
console.log(instructor)

// APIs -- apna kaam kisi aur pe daal dena 
// earliar time data use to come in xml but now it comes in api

// json; - object has names, variable names
// {
//     "name": "Vijay",
//     "coursename": "Js in hindi",
//     "price": "free"
// }

