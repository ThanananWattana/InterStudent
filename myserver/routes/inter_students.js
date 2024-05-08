const express = require('express');
const conn = require('../utils/dbconnect.js')
const router = express.Router();

//API
//show all inter_students
router.get('/api/inter_students', (req, res) => {
    let sql = "SELECT * FROM inter_students";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});


//show single inter_students
router.get('/api/inter_students/:id', (req, res) => {
    let sql = "SELECT * FROM `inter_students` WHERE applicant_no = " + req.params.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({
            "status": 200, "error": null,
            "response": results
        }));
    });
});

//Doughnut
router.get('/api/sumapplicant', (req, res) => {
    let sql = "SELECT gender, sum(applicant_no) sum_applicant FROM inter_students GROUP BY gender;";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

router.get('/api/sumprogramme', (req, res) => {
    let sql = "SELECT programme, sum(applicant_no) sum_applicant FROM inter_students GROUP BY programme;";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

//Bar Country
router.get('/api/sumcountry', (req, res) => {
    let sql = "SELECT country, sum(applicant_no) sum_applicant FROM inter_students GROUP BY country;";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});
//Bar School
router.get('/api/sumschool', (req, res) => {
    let sql = "SELECT school, sum(applicant_no) sum_applicant FROM inter_students GROUP BY school;";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

router.post('/api/inter_students', (req, res) => {
    let data = {
        applicant_no: req.body.applicant_no,
        type: req.body.type,
        subtype: req.body.subtype,
        academic_year: req.body.academic_year,
        result: req.body.result,
        conditions: req.body.conditions,
        english_type: req.body.english_type,
        english_score: req.body.english_score,
        title: req.body.title,
        first_name: req.body.first_name,
        middle_name: req.body.middle_name,
        last_name: req.body.last_name,
        gender: req.body.gender,
        apply_date: req.body.apply_date,
        sent_date: req.body.sent_date,
        accepted_date: req.body.accepted_date,
        country: req.body.country,
        city: req.body.city,
        school: req.body.school,
        degree: req.body.degree,
        programme: req.body.programme,
        news_online: req.body.news_online,
        news_embassy: req.body.news_embassy,
        news_university: req.body.news_university,
        news_exhibition: req.body.news_exhibition,
        news_newsletter: req.body.news_newsletter,
        news_friend: req.body.news_friend,
        news_agent: req.body.news_agent,
        contact_email: req.body.contact_email,
        contact_phone: req.body.contact_phone,
        contact_facebook: req.body.contact_facebook,
        contact_other: req.body.contact_other,
    };
    let sql = "INSERT INTO inter_students SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({
            "status": 200, "error": null,
            "response": results
        }));
    });
});

router.put('/api/inter_students/:id', (req, res) => {
    let sql = "UPDATE inter_students SET applicant_no ='" + req.body.applicant_no
        + "',type='" + req.body.type
        + "',subtype='" + req.body.subtype
        + "',academic_year='" + req.body.academic_year
        + "',result='" + req.body.result
        + "',conditions='" + req.body.conditions
        + "',english_type='" + req.body.english_type
        + "',english_score='" + req.body.english_score
        + "',title='" + req.body.title
        + "',first_name='" + req.body.first_name
        + "',middle_name='" + req.body.middle_name
        + "',last_name='" + req.body.last_name
        + "',gender='" + req.body.gender
        + "',apply_date='" + req.body.apply_date
        + "',sent_date='" + req.body.sent_date
        + "',accepted_date='" + req.body.accepted_date
        + "',country='" + req.body.country
        + "',city='" + req.body.city
        + "',school='" + req.body.school
        + "',degree='" + req.body.degree
        + "',programme='" + req.body.programme
        + "',news_online='" + req.body.news_online
        + "',news_embassy='" + req.body.news_embassy
        + "',news_university='" + req.body.news_university
        + "',news_exhibition='" + req.body.news_exhibition
        + "',news_newsletter='" + req.body.news_newsletter
        + "',news_friend='" + req.body.news_friend
        + "',news_agent='" + req.body.news_agent
        + "',contact_email='" + req.body.contact_email
        + "',contact_phone='" + req.body.contact_phone
        + "',contact_facebook='" + req.body.contact_facebook
        + "',contact_other='" + req.body.contact_other
        + "' WHERE applicant_no = " + req.params.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({
            "status": 200, "error": null,
            "response": results
        }));
    });
});

router.delete('/api/inter_students/:id', (req, res) => {
    let sql = "DELETE FROM inter_students WHERE applicant_no=" + req.params.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({
            "status": 200, "error": null,
            "response": results
        }));
    });
});

module.exports = router;