# Project Feedback + Evaluation

Good job on Project 1.  A good, solid project.  You kept it simple, and wrote good, clean code.

## Project Workflow:

>Did you complete the user stories, wireframes, task tracking, and/or ERDs, as specified above? Did you use source control as expected for the phase of the program you’re in (detailed above)?


**Exceeds expectations:**
Nice readme.  "Approach Taken" is a clear, concise explanation of what you expect of your code.  This is a great example of detailed pseudocode.  It shows that you have an obvious understanding of what is required.  Good job with many, small commits. It can be helpful to order your User Stories, so that the basic (or bronze) functionality is first.  This list starts at the Silver (or Gold) level.

<aside>When we asked for your "approach", we were looking for your project workflow.  How did you tackle the problem, overall?  We'll work on making this request clearer.</aside>


## Technical Requirements

>Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?

**Exceeds Expectations:**
You did what was required and added the complexity of choosing the number of cards.

For future projects, please do not clone the GA project repo.  Start with a fresh `git init`.  It makes grading harder and there's no benefit (no start code, no solution, etc).  Our instructions were not clear on this.

## Code Quality

>Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code as your instructors have in class?

**Meets expectations:**
You code is well organized and uses semantic names.  The `playGame` function is getting a bit long.  I recommend you extract some functions, to simplify the method and move your code toward self-documenting.  When you feel you need to use a comment to indicate which loop/conditional is ending, consider that a smell.  Your loop/conditional is probably too long.

Make sure to take a look at the inline code comments I made in this [pull request](https://github.com/MattLeeStevens/project1/pull/1/files).

## Problem Solving

>Are you able to defend why you implemented your solution in a certain way? Can you demonstrate that you thought through alternative implementations?

**Meets requirements:**
Good job on the choosable deck size. Due to your code organization, it looks like implementation was pretty straightforward.


## Unsolved Problems

If I were to work on it more, I would add a way to store people's scores and add them to a high scores board for each amount of cards.

You can use sessionStorage or [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) for this:
