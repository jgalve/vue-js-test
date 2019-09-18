<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>VUE APP</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/custom.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <!-- CANVAS CHART JS -->
    <section class="testChart">
      <div class="container">
        <h3>CANVAS USING CHART.JS</h3>
        <canvas id="myChart" width="400" height="400"></canvas>
      </div>
    </section>

    <!-- HELLO WORLD -->
    <section id="hello">
      <h3>VUE JS FRAMEWORK</h3>
      <p>{{ msg }}</p>
    </section>

    <!-- NAVIGATION -->
    <section id="main">

      <h3>DATA BINDING</h3>
        <!-- The navigation menu will get the value of the "active" variable as a class. -->

        <!-- To stops the page from jumping when a link is clicked
            we use the "prevent" modifier (short for preventDefault). -->

    	<nav v-bind:class="active" v-on:click.prevent>

    		<!-- When a link in the menu is clicked, we call the makeActive method,
            defined in the JavaScript Vue instance. It will change the value of "active". -->

    		<a href="#" class="home" v-on:click="makeActive('home')">Home</a>
    		<a href="#" class="projects" v-on:click="makeActive('men')">Men</a>
    		<a href="#" class="services" v-on:click="makeActive('women')">Women</a>
    		<a href="#" class="contact" v-on:click="makeActive('toddlers')">Toddlers</a>
    	</nav>

     	<!-- The mustache expression will be replaced with the value of "active".
     		 It will automatically update to reflect any changes. -->

    	<p>CATEGORY: <b>{{active}}</b></p>
    </section>


    <!-- ORDER FORM -->
    <section class="shopping">
      <form id="shop" v-cloak>

      	<h1>Services Order Form</h1>

      	<ul>
      		<!-- Loop through the services array, assign a click handler, and set or
      			 remove the "active" css class if needed -->
      		<li v-for="service in services" v-on:click="toggleActive(service)" v-bind:class="{ 'active': service.active}">
      			<!-- Display the name and price for every entry in the array .
                      Vue.js has a built in currency filter for formatting the price -->
      			{{service.name}} <span>{{service.price | currency}}</span>
      		</li>
      	</ul>

      	<div class="total">
      		<!-- Calculate the total price of all chosen services. Format it as currency. -->
      		Total: <span>{{total() | currency}}</span>
      	</div>

      </form>
    </section>

    <!-- INSTA SEARCH -->
    <section class="instaSearch">
      <h3>INSTANT SEARCH SIMILAR TO GOOGLE.COM</h3>
      <form id="instasearch" v-cloak>

          <div class="bar">
              <!-- Create a binding between the searchString model and the text field -->

              <input type="text" v-model="searchString" placeholder="Enter your search terms" />
          </div>

          <ul>
              <!-- Render a li element for every entry in the computed filteredArticles array. -->

              <li v-for="article in filteredArticles">
                  <a v-bind:href="article.url"><img v-bind:src="article.image" /></a>
                  <p>{{article.title}}</p>
              </li>
          </ul>

      </form>
    </section>


    <!-- GRID VIEW -->
    <section class="gridView">

      <h3 class="text-center">CHANGE LAYOUT</h3>

      <form id="gview" v-cloak>

      	<div class="bar">

      		<!-- These two buttons switch the layout variable,
      			 which causes the correct UL to be shown. -->

      		<a class="list-icon" v-bind:class="{ 'active': layout == 'list'}" v-on:click="layout = 'list'"></a>
      		<a class="grid-icon" v-bind:class="{ 'active': layout == 'grid'}" v-on:click="layout = 'grid'"></a>
      	</div>

      	<!-- We have two layouts. We choose which one to show depending on the "layout" binding -->

      	<ul v-if="layout == 'grid'" class="grid">
      		<!-- A view with big photos and no text -->
      		<li v-for="a in articles">
      			<a v-bind:href="a.url" target="_blank"><img v-bind:src="a.image.large" /></a>
      		</li>
      	</ul>

      	<ul v-if="layout == 'list'" class="list">
      		<!-- A compact view smaller photos and titles -->
      		<li v-for="a in articles">
      			<a v-bind:href="a.url" target="_blank"><img v-bind:src="a.image.small" /></a>
      			<p>{{a.title}}</p>
      		</li>
      	</ul>

      </form>

    </section>





    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.10/vue.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.js"></script>
    <script src="js/custom.js"></script>

    <!-- CHART JS -->
    <script>
      var ctx = $("#myChart");
      var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
              datasets: [{
                  label: '# of Votes',
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255,99,132,1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              }
          }
      });
      </script>

  </body>
</html>
