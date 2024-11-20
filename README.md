# coding-challenge

## Task1
My approach to solving this task was to solve it with the least lines of code in an efficient manner. I thought about doing some type checks for the input value but decided against it since the prompt for the task stated the input would specifically be a string. I chose to write it with the three different built-in methods to showcase my knowledge of JavaScript methods.

## Task2
Originally, I had an else statement at the end of the "if" statement that set the variable message to "i". The message variable initially had an empty string as its value. However, I felt the else statement cluttered the if logic, so I removed it. To handle this, I initially removed the default value for the message variable and added a nullish coalescing operator (??) in the console.log call to check if the message variable was undefined. If it was, it would print "i".

However, I found this approach unclear and disliked that the message no longer had a default value. To simplify the code and make it more readable, I decided to initialize the message variable with the default value of "i" at the beginning of each loop iteration.

## Task3
Similarly to Task1, I wanted to solve this task with as few lines of code as I could while still writing an efficient solution. I decided to use a ternary statement because I felt it would make it easier to read. I did some testing and confirmed that this solution works with several edge cases including if the integer is a 0 or if the integer is negative.

## Task4
I ran into an issue while making the header’s font size responsive. Initially, I tried using the clamp() function to set a minimum and maximum size. However, I realized that not all browsers support it, and I would need to provide a fallback. On the other hand, using responsive units alone removed the ability to set a minimum font size.

As a solution, I opted for a calc() function that allows the font size to have a minimum value while still scaling up based on the viewport width. This approach provides the responsiveness I wanted while ensuring the text doesn't get too small.

