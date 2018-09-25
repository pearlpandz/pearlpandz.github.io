<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="js/jquery.js"></script>
	
	<!--Custom js-->
	<script src="js/main.js"></script>
	
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
	
	 <!--Shuffle-portfio-->
	<script src="js/isotope.min.js"></script>
	<script src="js/fancybox.js"></script>
	<script src="js/jquery.fancybox.pack.js"></script>
	
	
	<!-- Timeline-->
	<script src='js/scroll.js'></script>
	
	<!-- TextBox-->
	<script src="js/classie.js"></script>
	
	<!--Loading and page transition-->
	<script>window.jQuery || document.write('<script src="js/jquery-1.9.1.min.js"><\/script>')</script>
	<script src="js/modernizr-2.6.2.min.js"></script>
	<script type="text/javascript">
		// definition of setDefaultActive
    var setDefaultActive = function() {
        var path = window.location.pathname;
        var parts = path.split('/');
        var lastSegment = parts.pop() || parts.pop();  
        var element = $("#sidebar a[href='" + lastSegment + "']");
        $('#sidebar').find('li').removeClass('active');
        element.parent().addClass("active");
        console.log(element);
    }
    // when loading, active class added depends upon url
    setDefaultActive();

	</script>
  </body>
</html>