
<!-- ++++++++++++++++++++++++++++++
Jquery images hover
-->
<script type='text/javascript'>
$(function() {
	$(&#39;.thumbs&#39;).hover(function(){
	$(this).find(&#39;img&#39;).animate({top:&#39;220px&#39;},{queue:false,duration:500});
		}, function(){
	$(this).find(&#39;img&#39;).animate({top:&#39;0px&#39;},{queue:false,duration:500});
		});
	})
</script>
