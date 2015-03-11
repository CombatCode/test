# English vocabulary exercises

[Demo](http://apphost.co.pl/#/?ex=0)

## Basic requirements:

 - grunt
 - npm
 - bower

## Installation
 
```$: git clone https://github.com/CombatCode/test.git```

```$: cd test/```

```$: npm install```

```$: bower install```


## Launch

### By Grunt web server
```$: grunt server```

### Local, without the server
Only Firefox is able to load external files by XMLHttpRequest, Chrome is failing because of CORS.

Download minified application by ```$: grunt build``` from [http://apphost.co.pl/dist.zip](http://apphost.co.pl/dist.zip),
unzip and open index.html in your Firefox browser.

Check this out, how applications looks live: [Demo](http://apphost.co.pl/#/?ex=0)
