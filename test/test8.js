/*jshint unused: false, jquery: true, expr: true*/
/*global $: true, fixtures:true, describe:true, it:true, chai:true, before, after, beforeEach, afterEach, sinon, expect */


// AEM Unit Tests

// Please use BDD should style tests
// see: http://chaijs.com/api/bdd/

// var should = require('chai').should() //actually call the the function
//   , foo = 'bar'
//   , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

// foo.should.be.a('string');
// foo.should.equal('bar');
// foo.should.have.length(3);
// beverages.should.have.property('tea').with.length(3);

var should = chai.should();


(function () {
'use strict';


    var $$, doit;

    describe('It should have an external label', function () {

        this.timeout(3000);

        beforeEach(function (done){

            fixtures.path = 'base/test';

            fixtures.load('test8.html', function(){
                $$ = fixtures.window().jQuery; // access the jquery instance from within the fixtures context

                /**
                 * IT SHOULD HAVE
                 * role="region"
                 * aria-atomic="false"
                 * aria-live="polite"
                 * aria-busy="false"
                 * aria-relevant="additions"
                 * aria-labelledby="label"
                 */

                doit = fixtures.window().doit;
                done();
            });
        });

        afterEach(function (done){
            fixtures.cleanUp(); // cleans up the fixture for the next test
            done();
        });


        it('doit should reutrn true when called', function(){
          doit().should.equal(true);
        });


    });

})();