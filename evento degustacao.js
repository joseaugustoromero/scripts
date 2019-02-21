evento blog

// Iniciou degustação
	if(location.pathname.match(/^\/degustacao/)){
		$('#validar').mousedown(function(){
			fg.sendGTMEvent('degustacao','validou-cpf',window.location.href);
			fbq('track', 'Lead');
		});
	}

// Iniciou degustação
	if(location.pathname.match(/^\/degustacao/)){
		$('#finalizar').mousedown(function(){
			fg.sendGTMEvent('degustacao','iniciou-degustacao',window.location.href);
			fbq('track', 'Lead');
		});
	}

// Pixel facebook
	<script type="text/javascript"> 
		jQuery('#finalizar').submit(function(){
	    	fbq('track', 'Lead');
		});
	</script>

// teste