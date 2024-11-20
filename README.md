# coding-challenge

## Task1
My approach to solving this task was to solve it with the least lines of code in an efficient manner. I thought about doing some type checks for the input value but decided against it since the prompt for the task stated the input would specifically be a string.

## Task2
Originally, I had an else statement at the end of the "if" statement that set the variable message to "i". The message variable initially had an empty string as its value. However, I felt the else statement cluttered the if logic, so I removed it. To handle this, I initially removed the default value for message and added a nullish coalescing operator (??) in the console.log call to check if message was undefined. If it was, it would print "i".

However, I found this approach unclear and disliked that message no longer had a default value. To simplify the code and make it more readable, I decided to initialize message with the default value of "i" at the beginning of each loop iteration.

## Task3
I decided to use a ternary statement because I felt it would make it easier to read.


## Task4

