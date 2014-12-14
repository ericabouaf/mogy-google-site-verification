# mogy-google-site-verification

Google Site Verification API activities for [mogy](https://github.com/neyric/mogy).

## Installation

In your mogy project, install the dependency using npm :

$ npm install mogy-google-site-verification --save

To register the activities to Amazon Simple Workflow :

$ mogy register

## Config

In your mogy environment config file, under the `activities` key, add :

````json
"google-site-verification": {
    "clientEmail": "xxx@developer.gserviceaccount.com",
    "key": "...content of your pem file..."
}
````

And specify your Pushover appToken.

## Sample Decider Usage

````javascript
activity({
    name: 'my-task',
    activity: 'google-site-verification_list',
    input: {}
})
````
