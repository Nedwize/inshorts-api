# inshorts-api

A Node.js wrapper around the inshorts.com website.

## Installation
Install using npm:
```sh
npm install inshorts-api
```

## Usage
Require library
```javascript
const inshorts= require('inshorts-api');
```
```javascript
var options = {
  lang: 'language',
  category: 'category',
  numOfResults: 5
}

inshorts.get(options, function(result){
  console.log(result);
});
```
Pass the 'options' object as a parameter to this function. Define keys lang, category and numOfResults.

Note: If numOfResults is not defined, it will return 25 articles as default. Any number above 25 will also return default 25 articles.

Default language is 'en'.

## Available Categories-
 - //Leave empty for getting all news
 - national (India)
 - business
 - sports
 - world
 - politics
 - technology
 - startup
 - entertainment
 - miscellaneous
 - hatke (unusual)
 - science
 - automobile


## Availabe Languages-
 - en (English)
 - hi (Hindi)

### Example Code Snippet
```javascript
var options = {
  lang: 'en',
  category: 'national'
  numOfResults: 6
}

inshorts.get(options ,function(result){
  console.log(result);
});
```

Response
```javascript
[
  {
    title: 'Take milk/banana to neutralise effect: Andhra Police after Vizag gas leak',
    author: 'Nandini Sinha',
    content: 'Andhra Pradesh Police shared a tweet listing preventive measures to be taken by locals following the gas leak in Visakhapatnam. Some of the measures include drinking more water, taking milk, banana and jaggery to neutralise the effect of gas and using wet cloth as mask even if people are at home. It also mentioned not consuming uncovered food or water.',
    postedAt: '05:15 pm 07 May',
    sourceURL: 'https://inshorts.com/en/read/'
  },
  {
    title: 'West Bengal starts online booking, home delivery of liquor',
    author: 'Aarushi Maheshwari',
    content: 'The West Bengal State Beverages Corporation (WBSBCL) has announced that it has launched a portal for online booking and home delivery of alcohol to minimise footfall at retail outlets and ensure social distancing. WBSBCL added that people, aged 21 or above, can register as buyers on the website. Earlier, Punjab and Chhattisgarh had started home delivery of liquor.',
    postedAt: '04:33 pm 07 May',
    sourceURL: 'https://inshorts.com/en/read/'
  },
  {
    title: 'Which states and UTs have reported more than 700 coronavirus cases?',
    author: 'Anmol Sharma',
    content: 'The total number of coronavirus cases in India crossed the 50,000-mark on Thursday, with cases reported from 33 states and Union Territories (UTs). A total of 12 states and UTs have reported more than 700 cases, which include Maharashtra, Gujarat, Delhi, Tamil Nadu, Rajasthan, Madhya Pradesh, Uttar Pradesh, Andhra Pradesh, Punjab, West Bengal, Telangana and Jammu and Kashmir.',
    postedAt: '04:33 pm 07 May',
    sourceURL: 'https://inshorts.com/en/read/'
  },
  {
    title: "Jaipur focussing on 'super-spreaders' to contain COVID-19 infection: Official",
    author: 'Apaar Sharma',
    content: 'Rajasthan has turned its focus on "super-spreaders" such as vegetable vendors, grocery and medical shops to contain coronavirus infections in Jaipur, said Principal Secretary, Department of Energy and Nodal Officer for Jaipur Ajitabh Sharma. He said that the district administration has "aggressively" started taking random samples after finding over 10 positive cases of super-spreaders in the city.',
    postedAt: '03:59 pm 07 May',
    sourceURL: 'https://inshorts.com/en/read/'
  },
  {
    title: '₹1 crore aid for kin of Delhi police constable who died due to COVID-19',
    author: 'Aarushi Maheshwari',
    content: 'Delhi Chief Minister Arvind Kejriwal on Thursday announced compensation of ₹1 crore for the family of a Delhi Police constable who died due to COVID-19. Kejriwal tweeted, "Without caring for his life, Amit ji continued to serve the people during the coronavirus pandemic. He got coronavirus and subsequently left us. We salute his martyrdom."',
    postedAt: '04:50 pm 07 May',
    sourceURL: 'https://inshorts.com/en/read/'
  },
  {
    title: 'Train fare for stranded Manipuris will be borne by state government: CM',
    author: 'Jigyasu',
    content: `Manipur CM N Biren Singh said his government will pay for the return journey of the Manipur residents stranded in other parts of the country. "After arriving, they'll be quarantined in community quarantine 
centres," he added. The state government will only bear the expenses of those returning from far-off states and not those coming from other Northeastern states, Singh clarified.`,
    postedAt: '04:16 pm 07 May',
    sourceURL: 'https://inshorts.com/en/read/'
  }
```
## People

Contact contributor [Nakshatra Saxena](https://www.linkedin.com/in/nakshatra-saxena-51825a152/)