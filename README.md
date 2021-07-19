# CryptoMon
<img src="https://img.shields.io/badge/-react%20js-blue" /> <img src="https://img.shields.io/badge/-open%20%20source-blue" />

This is a mozilla firefox extension which tells the latest cryptocurrency rates.

You can get the extension [here](https://addons.mozilla.org/en-US/firefox/addon/crypto-monitor/). (The extension is only available for Mozilla Firefox)

## Installation
Create a clone or download the code, whichever suits you best.

Install modules, go to the folder which has the files and run the below command 
```
npm install
```

After all the modules are installed we need to build the extension
```
npm run build
```

The build folder will include all the necessary files we need for the extension. Now to run the extension locally on your firefox browser you need to follow the below steps.

#### Steps
1. Go to `Add-ons and Themes` 
2. Go to `Extensions` section 
3. Click the settings icon on the `top-right`
4. Click on `Debug Add-ons`
5. Click on `Load Temporary Add-ons` and select in the `manifest.json` file which is present in the `build` folder

Your extension should be running locally.
