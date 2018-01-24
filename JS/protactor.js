 var users = element.all(by.repeater('user in users'));

 it('should render initial data set', function() {
     expect(users.count()).toBe(10);
     expect(users.get(0).getText()).toEqual('[1] John who is 25 years old.');
     expect(users.get(1).getText()).toEqual('[2] Jessie who is 30 years old.');
     expect(users.last().getText()).toEqual('[10] Samantha who is 60 years old.');
     expect(element(by.binding('users.length')).getText())
         .toMatch("I have 10 users. They are:");
 });

 it('should update repeater when filter predicate changes', function() {
     expect(users.count()).toBe(10);

     element(by.model('q')).sendKeys('ma');

     expect(users.count()).toBe(2);
     expect(users.get(0).getText()).toEqual('[1] Mary who is 28 years old.');
     expect(users.last().getText()).toEqual('[2] Samantha who is 60 years old.');
 });


 
 var counter = element(by.binding('counter'));
 var debug = element(by.binding('confirmed'));

 it('should evaluate the expression if changing from view', function() {
     expect(counter.getText()).toContain('0');

     element(by.id('ng-change-example1')).click();

     expect(counter.getText()).toContain('1');
     expect(debug.getText()).toContain('true');
 });

 it('should not evaluate the expression if changing from model', function() {
     element(by.id('ng-change-example2')).click();

     expect(counter.getText()).toContain('0');
     expect(debug.getText()).toContain('true');
 });