angular.module('AppDemo', []).controller('TestCtrl', TestCtrl);




TestCtrl.prototype.compareUsers = function(user1) {
    this.user1 = {};

    var listCelebrities = [{
            firstname: "Angelina",
            lastname: "Jolie",
            age: 52
        },

        { firstname: "Brad", lastname: "Pitt", age: 54 },
        { firstname: "Jackie", lastname: "Chan", age: 60 }
    ];
    // Méthode qui permet de comparer deux valeurs entre elles 
    angular.forEach(listCelebrities, function(element, index) {
        if (user1.equals(element)) {

            this.result = angular.equals(user1, element);
        }
    });


};
TestCtrl.prototype.getUserName = function() {
    var name = "Angelo";
    return name;
};
//Cas d'un extend pour un objet pour preserver l'objet original et non l'altérer -->
//var object = angular.extend({}, object1, object2);
// object1 == objet destinataire et object2 == source object

// fonction qui néttoye la recherche à chaque fois
TestCtrl.prototype.clearQuiz = function($scope) {
    $scope.user1 = { firstname: '', lastname: '', age: null };

}



// Cas d'une boucle foreach 
function TestCtrl() {


    this.users = [{
            name: 'misko',
            gender: 'male'
        },
        {
            name: 'mike',
            gender: 'male'
        },
        {
            name: 'Kayli',
            gender: 'female'
        },
        {
            name: 'Eleanor',
            gender: 'female'
        }
    ];
    /* var values = {
        name: 'misko',
        gender: 'male',
        name: 'mike',
        gender: 'male',
        name: 'Kayli',
        gender: 'female',
        name: 'Eleanor',
        gender: 'female'
    };
    var log = [];
    // boucle qui parcourt le tableau nommé values plus haut
    angular.forEach(values, function(value, key) {
        this.push(key + ' : ' + value);
    }, log);
    // méthode qui check l'égalité
    expect(log).toEqual(['name: misko', 'gender: male']); */
};

// fonction qui te retourne le premier argument
function getResult(fn, input) {
    return (fn || angular.identity)(input);
}


// fonction qui vérifie si une date est bien une date
/* var date = new Date('2018/01/19');
var result = angular.isDate(date);
console.log(result); */

//Méthode qui permet changer l'input ==>  A FAIRE 
TestCtrl.prototype.checkBoxValue = function() {
    this.counter = 0;
    this.counter++;

};