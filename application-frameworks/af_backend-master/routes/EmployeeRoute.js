var express = require('express')
var router = express.Router();
const Employee = require('../models/Employee')



router.delete('/delete/:id', (req, res) => {

    Employee.findById(req.params.id).then(emp => {

        if (emp) {
            emp.remove().then(employee => {
                res.send({
                    message: emp.firstname + ' deleted successfully',
                    data: employee
                });
            });

        }
        else {
            res.send('Invalid employee id')
        }


    }).catch(err => {
        console.log(err)
        res.send(err)
    })
})

router.get('/getByFirstName/:name', (req, res) => {

    Employee.find({
        firstname: req.params.name,
        lastname: 'Shehanka2'
    }).then(employee => {
        if (employee) {
            res.send(employee)
        }
        else {
            res.send("Invalid name")
        }

    })
})

router.get('/get/:id', (req, res) => {


    Employee.findById(req.params.id).then(employee => {
        res.status(200).send(employee)
    })
})

router.get('/getAll', (req, res) => {

    const emps = Employee.find().then(employees => {
        res.send(employees);
    });

});


/* 
    method : POST
    description : create new employee
    params : body {
        firstname, lastname, email,age, basicsalary
    }
*/
router.post('/create', (req, res) => {

console.log(req.body);


    const employee = new Employee({
        firstname: req.body.firstname,
        lastname: req.body.lastname, 
        email: req.body.email,
        age: req.body.age,
        basicsalary: req.body.basicsalary
    })

    try {
        employee.save()
            .then(emp => {
                console.log('Employee Added')
                // res.statsend(emp);
                res.status(200).send({
                    message: 'Employee created successfully',
                    data: emp
                })
            })
    } catch (err) {
        res.status(502).send({
            message: 'Ooooopzzz, server error',
            error: err
        })
    }




})



module.exports = router;