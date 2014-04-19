# English vocabulary exercises

[Demo](http://hostadmin.pl/#/?ex=0)

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

### Local, without server
Only Firefox is able to load external files by XMLHttpRequest, Chrome is crashing website because of CORS.

Download minified application by ```$: grunt build``` from [http://hostadmin.pl/dist.zip](http://hostadmin.pl/dist.zip),
unzip and open index.html in your Firefox browser.

Check this out, how applications looks live: [Demo](http://hostadmin.pl/#/?ex=0)