# "Brain Games" (project-lvl1-s260)

<a href="https://codeclimate.com/github/codeclimate/codeclimate/maintainability"><img src="https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability" /></a>

<a href="https://codeclimate.com/github/codeclimate/codeclimate/test_coverage"><img src="https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/test_coverage" /></a>

[![Build Status](https://travis-ci.org/KyznecSPM/project-lvl1-s260.svg?branch=master)](https://travis-ci.org/KyznecSPM/project-lvl1-s260)



Набор мини-игр, запускаемых из консоли. 

### Игра: "Проверка на четность"
Пользователю показывается случайное число. И ему нужно ответить yes, если число четное, или no - если нечетное.

#### Пример игры:

$ brain-even

Welcome to the Brain Games!
Answer "yes" if number even otherwise answer "no".

May I have your name? Sam
Hello, Sam!

Question: 15
Your answer: no
Correct!
Question: 6
Your answer: yes
Correct!
Question: 7
Your answer: no
Correct!
Congratulations, Sam!

### Игра: "Калькулятор"

Пользователю показывается случайное математическое выражение, например 35 + 16, которое нужно вычислить и записать правильный ответ.

#### Пример игры:

$ brain-calc

Welcome to the Brain Games!
What is the result of the expression?

May I have your name? Sam
Hello, Sam!

Question: 4 + 10
Your answer: 14
Correct!
Question: 25 - 11
Your answer: 14
Correct!
Question: 25 * 7
Your answer: 175
Correct!
Congratulations, Sam!

### Игра "НОД"

Пользователю показывается два случайных числа, например, 25 50. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.

#### Пример игры:

$ brain-gcd

Welcome to the Brain Games!
Find the greatest common divisor of given numbers.

May I have your name? Sam
Hello, Sam!

Question: 25 50
Your answer: 25
Correct!
Question: 100 52
Your answer: 4
Correct!
Question: 3 9
Your answer: 3
Correct!
Congratulations, Sam!

### Игра "Баланс"

Необходимо сбалансировать число.

Сбалансированное число – это число, в котором наименьшая цифра отличается от наибольшей не более чем на единицу.

Примеры сбалансированных чисел: 111, 233, 55, 001, 9999, 0001.

А, например, число 123 не является сбалансированным, потому что наименьшая цифра в нем равна 1, а наибольшая - 3, а разница между ними - 2. При балансировке числа "большие" цифры отдают излишки "меньшим" так, чтобы в итоге число стало сбалансированным. В случае с числом 123 цифра 3 должна отдать единицу цифре 1, и в итоге получим число 222.

Порядок цифр в сбалансированном числе – по возрастанию. Например, вместо 322 и 232 нужно указывать 223.

#### Пример игры:

$ brain-balance

Welcome to the Brain Game!
Balance the given number.

May I have your name? Sam
Hello, Sam!

Question: 215
Your answer: 233
Correct!
Question: 4181
Your answer: 3344
Correct!
Question: 355
Your answer: 445
Correct!
Congratulations, Sam!


### Игра "Простое ли число?"

Определить является ли число [простым](https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D1%81%D1%82_%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D1%82%D1%8B). 

#### Пример игры:

Is this number prime? 15

### Игра "Арифметическая прогрессия"

Игроку показывается ряд чисел, образующий арифметическую прогрессию. Игрок должен определить число скрытое двумя точками.

#### Пример игры:

What number is missing in this progression?
5 7 9 11 13 .. 17 19 21 23
