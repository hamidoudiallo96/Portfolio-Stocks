# Stockfolio

Stockfolio is a web-based stock portfolio app where users can purchase stocks, using up to date pricing information.

I built this application using React/Redux for the frontend and Ruby on Rails for the backend, with PostgreSQL to manage my database. I used active model serializer to format my JSON responses, and implemented JSON web user authentication using JSON Web Tokens and the BCrypt library to one-way encrypt user passwords. All styling was accomplished with Sass-compiled CSS and Material UI. All stock information was provided to me through the IEX API.



### Live: [StockFolio](https://stockfolio-frontend.herokuapp.com/)


## User Story:
1. As a user, I want to create a new account with my name, email, and password so that I can buy and
trade stocks.
   - Default the user’s cash account balance to $5000.00 USD.
   - A user can only register once with any given email.
    
2. As a user, I want to authenticate via email and password so that I can access my account.
 
3. As a user, I want to buy shares of stock at its current price by specifying its ticker symbol and the
number of shares so that I can invest.
   - A user can only buy whole number quantities of shares.
   - A user can only buy shares if they have enough cash in their account for a given purchase.
   - A user can only buy shares if the ticker symbol is valid.
    
4. As a user, I want to view a list of all transactions I’ve made to date (trades) so that I can perform an
audit.
 
5. As a user, I want to view my portfolio (a list of all the stocks I own along with their current values) so
that I can review performance.
   - Current values should be based on the latest price and quantity owned for a given stock.
   - Each stock owned should only appear once.
 
6. As a user, I’d like to see the font color of stock symbols and current prices in my portfolio change
dynamically to indicate performance.
   - Display red when the current price is less than the day’s open price.
   - Display grey when the current price is equal to the day’s open price.
   - Display green when the current price is greater than the day’s open price.


## Current Features:
* User Authentication: Users can securely create a new account and log on onto their existing accounts.
* Once logged in the user is directed to the dashboard, where they can begin purchasing their desired stock.
* Users have a default balance of $50000 and can purchase as many stocks as they wish, as long as, their transaction totals do not exceed their remaining balance.
* Users can specify the amount of shares they want to purchase for a given stock, depending on their remaining balance.




### Demo: [Stockfolio Demo](https://www.youtube.com/watch?v=pgEFZm5F2lk&feature=youtu.be)
