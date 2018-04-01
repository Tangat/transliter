$(document).ready(function(){

function translitter(kiril){
	
	var latin = {'var1':{'А':'A','а':'a','Б':'B','б':'b','В':'V','в':'v','Г':'G','г':'g','Д':'D','д':'d','Е':'E','е':'e','Ж':'J','ж':'j','З':'Z','з':'z','К':'K','к':'k','Л':'L','л':'l','М':'M','м':'m','Н':'N','н':'n','О':'O','о':'o','П':'P','п':'p','Р':'R','р':'r','С':'S','с':'s','Т':'T','т':'t','Ф':'F','ф':'f','Х':'X','х':'x','Һ':'H','һ':'h','Ә':'Ä','ә':'ä','Ғ':'Ğ','ғ':'ğ','И':'Y','и':'y','Й':'Y','й':'y','Қ':'Q','қ':'q','Ң':'Ŋ','ң':'ŋ','Ө':'Ö','ө':'ö','Ү':'Ü','ү':'ü','Ұ':'U','ұ':'u','Ё':'Yo','ё':'yo','Ц':'Ts','ц':'ts','Ч':'Ç','ч':'ç','Ш':'Ş','ш':'ş','Щ':'Ş','щ':'ş','Ъ':'','ъ':'','Ы':'I','ы':'i','І':'I','і':'i','Ь':'','ь':'','Э':'E','э':'e','Ю':'Yiw','ю':'yiw','Я':'Ya','я':'ya'},'var2':{'А':'A','а':'a','Б':'B','б':'b','В':'V','в':'v','Г':'G','г':'g','Д':'D','д':'d','Е':'E','е':'e','Ж':'J','ж':'j','З':'Z','з':'z','К':'K','к':'k','Л':'L','л':'l','М':'M','м':'m','Н':'N','н':'n','О':'O','о':'o','П':'P','п':'p','Р':'R','р':'r','С':'S','с':'s','Т':'T','т':'t','Ф':'F','ф':'f','Х':'X','х':'x','Һ':'H','һ':'h','Ә':'Ai','ә':'ai','Ғ':'Gh','ғ':'gh','И':'Y','и':'y','Й':'Y','й':'y','Қ':'Q','қ':'q','Ң':'Ng','ң':'ng','Ө':'Oi','ө':'oi','Ү':'Ui','ү':'ui','Ұ':'U','ұ':'u','Ё':'Yo','ё':'yo','Ц':'Ts','ц':'ts','Ч':'Ch','ч':'ch','Ш':'Sh','ш':'sh','Щ':'Sh','щ':'sh','Ъ':'','ъ':'','Ы':'I','ы':'i','І':'Ii','і':'ii','Ь':'','ь':'','Э':'E','э':'e','Ю':'Yiw','ю':'yiw','Я':'Ya','я':'ya'}};
	
	var forY = ['а','А','о','О','ұ','Ұ','ы','Ы','ә','Ә','ө','Ө','ү','Ү','і','І','е','Е','и','И','у','У'];
	
	var y = {'w':{'У':'W','у':'w'},'uw':{'У':'Uw','у':'uw'},'iw':{'У':'Iw','у':'iw'}};
	
	var variant = $('#select').val();
	
	var strLat = '';
	
	var inStr = false;
		
	for(i = 0; i<kiril.length; i++){
		
		var symbol = kiril[i];
		
		if(symbol === 'У' || symbol === 'у'){
			
			symbolBefore = kiril[i-1];
			
			symbolAfter = kiril[i+1];
						
			if(forY.indexOf(symbolAfter)!== -1 && latin[variant][symbolBefore]=== undefined){
				
				strLat = strLat + y['w'][symbol];
			}else if((forY.indexOf(symbolAfter)=== -1 || latin[variant][symbolAfter]=== undefined) && latin[variant][symbolBefore]=== undefined){
				
				strLat = strLat + y['uw'][symbol];
			}else if(forY.indexOf(symbolBefore)!== -1){
				
				strLat = strLat + y['w'][symbol];
			}else if(inStr === false && latin[variant][symbolBefore]!== undefined){
				
				strLat = strLat + y['uw'][symbol];			
			}else if(inStr === true && latin[variant][symbolBefore]!== undefined){
				
					strLat = strLat + y['iw'][symbol];				
			}
			
		}else{
			
			if(latin[variant][symbol]=== undefined){
				strLat = strLat+symbol;
				inStr = false;
				
			}else{
				strLat = strLat + latin[variant][symbol];
			}
		}
		
		if(forY.indexOf(symbol)!== -1){
			
			inStr = true;
			
		}
	}
	
	return strLat;
}

function convert(){
	
	var str = $('#ciril').val();
	
	strl = translitter(str);
	
	$('#latin').val(strl);
}

$('#ciril').keyup(function(){
	
	if ($('#check').is(':checked')){
		
	convert();

	}
});

$('#enter').click(function(){
	
	convert();
});

})