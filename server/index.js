import express from "express"
import cors from "cors"

const app = express()
const port = 3000

app.use(cors())
app.use(express.json());

app.listen(port, () => {
    console.log(`App started at http://localhost:${port}`)
})

/*
- User:-
Full Name
Number
Email
Password

- User Information:-
DOB
PAN
Salutation
Full Name

- Bank Account:-
Acct. Num.
Acct. Type
IFSC Code

- Nominee (if any):-
relationship
name
dob
address

- Info:-
Country of birth
city of birth
salary/Income

- 

*/