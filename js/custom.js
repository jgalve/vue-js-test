// Creating a new Vue instance and pass in an options object.
var demo = new Vue({
  el: '#hello',
  data: {
    msg: 'Hello Vue.js! ' + new Date()
  }
})

// NAV DEMO
var demo = new Vue({

	// A DOM element to mount our view model.
	el: '#main',

    // This is the model.
	// Define properties and give them initial values.
	data: {
		active: 'home'
	},

	// Functions we will be using.
	methods: {
		makeActive: function(item){
			// When a model is changed, the view will be automatically updated.
			this.active = item;
		}
	}
});


// SHOPPING DEMO
// Define a custom filter called "currency".
Vue.filter('currency', function (value) {
    return '$' + value.toFixed(2);
});

var demo = new Vue({
    el: '#shop',
    data: {
    	// Define the model properties. The view will loop
        // through the services array and genreate a li
        // element for every one of its items.
        services: [
        	{
        		name: 'Web Development',
        		price: 300,
        		active:true
        	},{
        		name: 'Design',
        		price: 400,
        		active:false
        	},{
        		name: 'Integration',
        		price: 250,
        		active:false
        	},{
        		name: 'Training',
        		price: 220,
        		active:false
        	}
        ]
    },
    methods: {
    	toggleActive: function(s){
            s.active = !s.active;
    	},
    	total: function(){

        	var total = 0;

        	this.services.forEach(function(s){
        		if (s.active){
        			total+= s.price;
        		}
        	});

    	   return total;
        }
    }
});


//INSTA SEARCH
var demo = new Vue({
    el: '#instasearch',
    data: {
        searchString: "",

        // The data model. These items would normally be requested via AJAX,
        // but are hardcoded here for simplicity.


        articles: [
            {
                "title": "What You Need To Know About CSS Variables",
                "url": "http://www.google.com/",
                "image": "https://via.placeholder.com/60"
            },
            {
                "title": "Freebie: 4 Great Looking Pricing Tables",
                "url": "http://www.google.com/",
                "image": "https://via.placeholder.com/60"
            },
            {
                "title": "20 Interesting JavaScript and CSS Libraries for February 2016",
                "url": "http://www.google.com/",
                "image": "https://via.placeholder.com/60"
            },
            {
                "title": "Quick Tip: The Easiest Way To Make Responsive Headers",
                "url": "http://www.google.com/",
                "image": "https://via.placeholder.com/60"
            },
            {
                "title": "Learn SQL In 20 Minutes",
                "url": "http://www.google.com/",
                "image": "https://via.placeholder.com/60"
            },
            {
                "title": "Creating Your First Desktop App With HTML, JS and Electron",
                "url": "http://www.google.com/",
                "image": "https://via.placeholder.com/60"
            }
        ]
    },
    computed: {
        // A computed property that holds only those articles that match the searchString.
        filteredArticles: function () {
            var articles_array = this.articles,
                searchString = this.searchString;

            if(!searchString){
                return articles_array;
            }

            searchString = searchString.trim().toLowerCase();

            articles_array = articles_array.filter(function(item){
                if(item.title.toLowerCase().indexOf(searchString) !== -1){
                    return item;
                }
            })

            // Return an array with the filtered data.
            return articles_array;;
        }
    }
});

// GRID VIEW
var demo = new Vue({
	el: '#gview',
	data: {
        // The layout mode, possible values are "grid" or "list".
		layout: 'grid',

        articles: [{
            "title": "What You Need To Know About CSS Variables",
            "url": "http://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/",
            "image": {
                "large": "https://via.placeholder.com/280",
                "small": "https://via.placeholder.com/150"
            }
        },
        {
            "title": "Freebie: 4 Great Looking Pricing Tables",
            "url": "http://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/",
            "image": {
                "large": "https://via.placeholder.com/280",
                "small": "https://via.placeholder.com/150"
            }
        },
        {
            "title": "20 Interesting JavaScript and CSS Libraries for February 2016",
            "url": "http://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/",
            "image": {
                "large": "https://via.placeholder.com/280",
                "small": "https://via.placeholder.com/150"
            }
        },
        {
            "title": "Quick Tip: The Easiest Way To Make Responsive Headers",
            "url": "http://tutorialzine.com/2016/02/quick-tip-easiest-way-to-make-responsive-headers/",
            "image": {
                "large": "https://via.placeholder.com/280",
                "small": "https://via.placeholder.com/150"
            }
        },
        {
            "title": "Learn SQL In 20 Minutes",
            "url": "http://tutorialzine.com/2016/01/learn-sql-in-20-minutes/",
            "image": {
                "large": "https://via.placeholder.com/280",
                "small": "https://via.placeholder.com/150"
            }
        },
        {
            "title": "Creating Your First Desktop App With HTML, JS and Electron",
            "url": "http://tutorialzine.com/2015/12/creating-your-first-desktop-app-with-html-js-and-electron/",
            "image": {
                "large": "https://via.placeholder.com/280",
                "small": "https://via.placeholder.com/150"
            }
        }]

	}
});
