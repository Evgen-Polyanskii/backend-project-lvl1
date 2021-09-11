### Hexlet tests and linter status:

[![Actions Status](https://github.com/Evgen-Polyanskii/backend-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/Evgen-Polyanskii/backend-project-lvl1/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/dfc50c2d88cd46d069c1/maintainability)](https://codeclimate.com/github/Evgen-Polyanskii/backend-project-lvl1)
[![Node CI](https://github.com/Evgen-Polyanskii/backend-project-lvl1/actions/workflows/ci.yml/badge.svg)](https://github.com/Evgen-Polyanskii/backend-project-lvl1/actions)

### Описание

"Игры разума" – набор из 5 консольных игр построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы на которые нужно дать правильные ответы. После трех правильных ответов считается что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново. 

Игры:
* Калькулятор. Арифметические выражения, которые необходимо вычислить.
* Прогрессия. Поиск пропущенных чисел в последовательности чисел.
* Определение четного числа.
* Определение наибольшего общего делителя.
* Определение простого числа.

Пример игры:

```
$ brain-progression

Welcome to the Brain Game!
What number is missing in this progression?

May I have your name? Alex
Hello, Alex!

Question: 14 .. 18 20 22 24 26 28
Your answer: 16 # Пользователь вводит ответ
Correct!
Question: 5 6 7 8 9 .. 11 12
Your answer: 10 # Пользователь вводит ответ
Correct!
Question: 12 15 18 21 .. 27 30 33
Your answer: 24 # Пользователь вводит ответ
Correct!
Congratulations, Alex!
```

### Установка

```sh
$ make install
$ make publish
$ npm link 
```

### Запуск игр

```sh
$ brain-even
$ brain-calc
$ brain-gcd
$ brain-progression
$ brain-prime
``` 


### Демонстрации:

Пример установки и запуска игры "brain-even"
```sh
$ brain-even
```  
[![asciicast](https://asciinema.org/a/n9tfn1Y6UzyzZyIumFu2o1csM.svg)](https://asciinema.org/a/n9tfn1Y6UzyzZyIumFu2o1csM)

Пример запуска игры "brain-calc"
```sh
$ brain-calc
```  
[![asciicast](https://asciinema.org/a/77lgDCMJCdI5dyrB20fZLhdcg.svg)](https://asciinema.org/a/77lgDCMJCdI5dyrB20fZLhdcg)

Пример запуска игры "brain-gcd"
```sh
$ brain-gcd
``` 
[![asciicast](https://asciinema.org/a/Ws4Ja1vHgPTeWe4h18lMj7xwY.svg)](https://asciinema.org/a/Ws4Ja1vHgPTeWe4h18lMj7xwY)

Пример запуска игры "brain-progression"
```sh
$ brain-progression
```  
[![asciicast](https://asciinema.org/a/hUVXP8EL3sY9ipE0l0VvRwpQI.svg)](https://asciinema.org/a/hUVXP8EL3sY9ipE0l0VvRwpQI)

Пример запуска игры "brain-prime"
```sh
$ brain-prime
```  
[![asciicast](https://asciinema.org/a/00Fbn5KyB7CFUW0FH8W7BU5lq.svg)](https://asciinema.org/a/00Fbn5KyB7CFUW0FH8W7BU5lq)
