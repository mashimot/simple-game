angular.module('arithmetic.game', [])
    .directive('arithmeticGame', function($timeout){
        return {
            restrict: 'E',
            templateUrl: 'template/game.html',
            controllerAs: 'vm',
            bindToController: true,
            controller: function(){
                var vm = this;
                vm.next = function(){
                    vm.step++;
                };
                vm.init = function(){
                    vm.step = 0;
                    vm.speed = 0;
                    vm.game = {
                        value : "",
                        display : "",
                        end: true,
                        mode : 0,
                        difficult: {
                            Easy: {
                                speed: 5000
                            },
                            Normal: {
                                speed: 3000
                            },
                            Hard: {
                                speed: 800
                            }
                        },
                        counter : 0,
                        matchSize : 10,
                        score : {
                            points: []
                        }
                    }
                };
                vm.restart = function(){
                    vm.start(false);
                }
                vm.start = function(start){
                    if(!start){
                        vm.init();
                        return false;
                    }
                    if(vm.game.counter != vm.game.matchSize)
                    {
                        vm.game.counter++;
                        var arithmetic = new Calculate(new Randomizer(10).randomInt(), new Randomizer(10).randomInt());
                        switch(new Randomizer(3).randomInt()){
                            case 1:
                                arithmetic.subtraction();
                                break;
                            case 2:
                                arithmetic.product();
                                break;
                            case 3:
                                arithmetic.addition();
                                break;
                            default:
                                arithmetic.addition();
                                break;
                        }
                        var resultado = arithmetic.getResult();
                        vm.game.display = arithmetic.getExpression();
                        var speed = vm.game.mode;
                        if(speed > 0){
                            document.getElementById("value").focus();
                            document.getElementById("value").value = '';
                            document.body.style.background = "rgb("+ new Randomizer(255).randomInt() + "," + new Randomizer(255).randomInt() + "," + new Randomizer(255).randomInt()+")";
                            $timeout(function(){
                                vm.game.isCorrect = (resultado == vm.game.value)? true : false;
                                vm.game.score.name = vm.game.name;
                                vm.game.score.mode = vm.game.mode;
                                vm.game.score.points.push({
                                    isCorrect : vm.game.isCorrect,
                                    expression : vm.game.display,
                                    result : resultado,
                                    value : vm.game.value
                                });
                                vm.start(true);
                            }, speed);
                        } else {
                            vm.start(false);
                        }
                    }
                }
                vm.init();
            }
        }
    });