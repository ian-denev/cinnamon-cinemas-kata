# cinnamon-cinemas-kata
A solution for the Cinnamon Cinemas Kata 
## Problem description
You have a special task from Cinnamon Cinemas to develop a program to allocate seats to customers purchasing tickets for a movie theatre.
## Prerequisites / dependencies
* **npm install** - use to install the following modules:
  * jest
  * jest-extended
## How to run
* **node index.js** - use to run task sheet example
* **npm test** - use to run unit tests
## Version control practices
* Commit messages will follow the Conventional Commits specification:
  * https://www.conventionalcommits.org/
## Solution approach
* While the task mentions that rows and seats are assigned letters and numbers e.g. A4, B2, C1, this notation can be ignored. Since the auditorium is always filled from left to right and front to back, the auditorium can be thought of as 15 consecutive seats.
* The task only requires that an auditorium's seats continuously fill until there are no longer any available seats.
  * This does not necessarily mean that all 15 seats will be occupied every time. The final number of occupied seats can either be 13, 14 or 15. This is because a single allocation of seats is for either 1, 2 or 3 seats. If, for example, there are currently 14 seats occupied and there is a request for 3 more to be occupied, the program should then halt without filling any more seats.
  * No output format is specified therefore the program returns a string containing the final number of allocated seats before the program halts.
