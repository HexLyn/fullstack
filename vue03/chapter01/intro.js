let human = {
    name: 'dkdk',
    age: 39,
    intro: function () {
        document.write('name =' + this.name + '<br>');
        document.write('age =' + this.age + '<br>');
    },
};

human.intro();
