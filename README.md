# cic2020interns_wk2 - Implementing COVID-19 API
## Node.js Mini-Challenge - Rest API - 
https://api.covid19api.com/summary

## Steps
1. Create new repository from https://github.ibm.com/Jamie-Scott-Richardson/cic2020interns_wk2.git (Same instructions from Week 1)
2. Add your certificate of completion for Serverless Framework Bootcamp: Node.js, AWS & Microservices to the /certs directory
3. Create new Node.js application exposing APIs 1, 2, 3 and add to /src directory
4. Invoke/test APIs from Postman to ensure functionality
5. Commit and push change to your master branch
6. Create a new branch name feature_api_4 from the master branch
7. Add API 4 to the feature branch
8. Invoke/test APIs from Postman to ensure functionality
9. Commit and push change to your feature branch
10. Create a pull request in GitHub merging your feature branch changes into your master branch
- link

## Deliverables
### 1. API 1 - Top 10 countries with highest total recovered cases
The API should be accessible via the following endpoint: **GET /totalrecovered**

Example Response:
```
[{
		"country": "Country B",
		"totalRecoveredCases": 97
	},
	{
		"country": "Country C",
		"totalRecoveredCases": 97
	},
	{
		"country": "Country A",
		"totalRecoveredCases": 90
	},
	{
		"country": "Country D",
		"totalRecoveredCases": 72
	}
]
```

### 2. API 2 - Top 10 countries with lowest new confirmed cases
The API should be accessible via the following endpoint: **GET /newconfirmed**

Example Response:
```
[{
		"country": "Country B",
		"newConfirmedCases": 1
	},
	{
		"country": "Country C",
		"newConfirmedCases": 5
	},
	{
		"country": "Country D",
		"newConfirmedCases": 5
	},
	{
		"country": "Country A",
		"newConfirmedCases": 7
	}
]
```

### 3. API 3 - Percentage between country with highest total confirmed cases and country with lowest total confirmed cases
The API should be accessible via the following endpoint: **GET /differenceconfirmed**

Example Response:
```
[{
	"countryWithHighest": "Country B",
	"countryWithLowest": "Country G",
	"difference": 0.67
}]
```

### 4. API 4 - Percentage of total confirmed cases by country
The API should be accessible via the following endpoint: **GET /percentageconfirmed**

Example Response:
```
[{
		"country": "Country A",
		"percentageOfTotalConfirmedCases": 0.096
	},
	{
		"country": "Country B",
		"percentageOfTotalConfirmedCases": 0.056
	},
	{
		"country": "Country C",
		"percentageOfTotalConfirmedCases": 0.058
	},
	{
		"country": "Country D",
		"percentageOfTotalConfirmedCases": 0.078
	}
]
```

## Snippets
The /snippets directory contains useful examples.