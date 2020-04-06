# JavaScript Data Structures

This is the repo for the project used during the instructional data structures video for Frontend for Design.

## Problem Statement 1
Ham It 2 Me is a grocery delivery company. Right now, their users can see all of their past orders but have no easy way of downloading that data in an easy-to-read and reusable format. They could have users click on a button and receive a file from the backend, but they don't want to increase the number of web requests they get, since this could slow down their extremely popular service. Since all of the data is available on the frontend, they'd prefer it if JavaScript were used by the client to grab the data from the page and parse it into an appropriate format.

Your job is to do the following:
- Grab all of the past order data, including the order number, total cost, items, quantities, and individual costs from the page
- Put that data into an appropriate data structure
- For now, display that data in the div with class 'result' (Hint: use `JSON.stringify` to convert the data to a string)

You'll need to write your code in the function `convertOrders`.

Another developer will take care of making it possible for users to save that information to a downloadable file, like a spreadsheet.

## Problem Statement 2
Ham It 2 Me also needs help fixing the user profile page. Right now, it shows way more data about the user than it ought to. That's because it's grabbing all of the data from the backend without filtering out the data that only Ham It 2 Me needs to see. The backend engineers are currently on a very long vacation and this task simply can't wait. The company needs you to filter out the irrelevant data.

Your job is to ensure that only the following information appears on the User Profile page:
1. Username
2. Join Date
3. Past Orders (as a list that includes Order Number, Date and Total)
4. Total Spent over all orders (you'll need to calculate and add this to the data structure)

The data that needs to be transformed is stored in a variable called `userData`. You must also ensure that the data is shown in the order specified above. You'll be modifying the function `sanitize`. The original data stored in `userData` must not be destroyed.

**Note:** The Past Orders list is not clean. There are some empty (`null`) orders in it. Please remove the null items from the data.

# Problem Statement 3
The lead developer at Ham It 2 Me has decided to modernize the codebase. She has requested that developers convert current function definitions to function expressions. She also wants to see devs use at least one arrow function...just to prove that they know how to use them.

Your job is to choose a file and:
- Convert all of the function definitions to function expressions
- Convert at least one function definitiion to an arrow function
- Ensure the page still works
