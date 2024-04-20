var expect = require("chai").expect;
var request = require("request");

var url = "http://localhost:8080/api/food";
let food = {
    path: 'https://github.com/KaushiRajapakshe/SIT725-2024-T1-prac3-2/blob/main/public/images/Desserts.jpeg?raw=true',
    title: 'Desserts',
    subTitle: 'About Desserts',
    description: 'Hello There! <br/> This is Strawberry Cheesecake. <br/> Dessert is the last course of your meal :)'
}

describe('Food Post API', function () {
    it('post food to database', function (done) {
        request.post({ url: url, form: food }, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    it("returns statusCode in body to check if api give right responed should be 200", function (done) {
        request(url, function (error, response, body) {
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(200);
            done()
        });
    });
});

describe('Food Post API', function () {
    it("returns the result of food object", function (done) {
        request(url, function (error, response, body) {
            body = JSON.parse(body)
            expect(body.data[0].subTitle).to.be.a('string'); 
            done()
        });
    });
    it("returns the result of food object", function (done) {
        request(url, function (error, response, body) {
            body = JSON.parse(body)
            expect(body.data[0].title).to.be.equal("Desserts"); 
            done()
        });
    });
});

describe("Food Get API", function () {
    it("returns status 200 to check if api works", function (done) {
        request(url, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done()
        });
    });
    it("returns statusCode in body to check if api give right responed should be 200", function (done) {
        request(url, function (error, response, body) {
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(200);
            done()
        });
    });
    it("returns the result of food object", function (done) {
        request(url, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            body = JSON.parse(body)
            expect(body.data[0].subTitle).to.be.a('string'); 
            done()
        });
    });
    it("returns the result of food object", function (done) {
        request(url, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            body = JSON.parse(body)
            expect(body.data[0].title).to.be.equal("Desserts"); 
            done()
        });
    });

});