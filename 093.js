var userName = function (user) {
    if (user === void 0) { user = ""; }
    var userName = "Vladislav";
    userName += user;
    return user;
};
var student = userName() || "Natali";
/*Какое значение получит переменная student? */ 
console.log(student);