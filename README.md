# cic2020interns_wk2 - Implementing COVID-19 API
## Node.js Mini-Challenge - Rest API - 
https://api.covid19api.com/summary

## Steps
- Create new repository from https://github.ibm.com/Jamie-Scott-Richardson/cic2020interns_wk2.git (Same instructions from Week 1)
- Add your certificate of completion for Serverless Framework Bootcamp: Node.js, AWS & Microservices to the /certs directory
- Create new Node.js application exposing 4 APIs and add to /src directory

### API 1 - Top 10 countries with total recovered cases
GET /totalrecovered

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