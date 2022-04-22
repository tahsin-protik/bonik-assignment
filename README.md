# Bonik Assignment

## How to run the project

- Clone the project Repository
```
git clone https://github.com/tahsin-protik/bonik-assignment.git

```

- Enter the project folder and install the required modules
``` 
$ npm install

```


- Configure the environment variables.

- Migrate database tables
``` 
$ node migration.js

```


- Run the project

``` 
npm start
``` 

## API Description

### Get the counts for all dates in range for a specific status:
- Method: GET
- Example return value:
 [
    {
            status: 1,
            count: 2,
            date: 2022-02-03
    }
]

- Endpoint:
```
/start_date/end_date/status
```




