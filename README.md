## Browser-Sync for VCCW

Browser-Sync Setting for VCCW.

[VCCW](http://vccw.cc/) is Vagrant configuration designed for development of WordPress plugins, themes, or websites.

## Usage

### Clone to your VCCW directory. 

	git clone git@github.com:gaspanik/bs4vccw.git
		
### Edit your vhost name and theme path in 'gulpfile.js'.

> var paths = {  
>   "vhost": "wordpress.local",  
>   "themes": "../www/wordpress/wp-content/themes/twentyfourteen/**"  
> }


### Install some dependencies.

	npm install

### Run gulp.

	npm start

### Open browser

Connect to 'http://localhost:3000'

---
MIT
