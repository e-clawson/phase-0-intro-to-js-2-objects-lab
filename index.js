let employee = {

}
function updateEmployeeWithKeyAndValue(employee,key,value) {
    return Object.assign({}, employee,{ [key]: value})
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
    return Object.assign(employee,{ [key]: value})
}
function deleteFromEmployeeByKey(employee,key,value) {
    return Object.assign({}, employee,{ [key]: value})
}
function destructivelyDeleteFromEmployeeByKey(employee,key,value) {
    return Object.assign(employee,{ [key]: value})
}