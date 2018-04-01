$(document).ready(function(){
    

function elementConvert(kiril){
	
	var latin = {'var1':{'А':'A','а':'a','Б':'B','б':'b','В':'V','в':'v','Г':'G','г':'g','Д':'D','д':'d','Е':'E','е':'e','Ж':'J','ж':'j','З':'Z','з':'z','К':'K','к':'k','Л':'L','л':'l','М':'M','м':'m','Н':'N','н':'n','О':'O','о':'o','П':'P','п':'p','Р':'R','р':'r','С':'S','с':'s','Т':'T','т':'t','Ф':'F','ф':'f','Х':'X','х':'x','Һ':'H','һ':'h','Ә':'Ä','ә':'ä','Ғ':'Ğ','ғ':'ğ','И':'Y','и':'y','Й':'Y','й':'y','Қ':'Q','қ':'q','Ң':'Ŋ','ң':'ŋ','Ө':'Ö','ө':'ö','Ү':'Ü','ү':'ü','Ұ':'U','ұ':'u','Ё':'Yo','ё':'yo','Ц':'Ts','ц':'ts','Ч':'Ç','ч':'ç','Ш':'Ş','ш':'ş','Щ':'Ş','щ':'ş','Ъ':'','ъ':'','Ы':'I','ы':'i','І':'I','і':'i','Ь':'','ь':'','Э':'E','э':'e','Ю':'Yiw','ю':'yiw','Я':'Ya','я':'ya'},'var2':{'А':'A','а':'a','Б':'B','б':'b','В':'V','в':'v','Г':'G','г':'g','Д':'D','д':'d','Е':'E','е':'e','Ж':'J','ж':'j','З':'Z','з':'z','К':'K','к':'k','Л':'L','л':'l','М':'M','м':'m','Н':'N','н':'n','О':'O','о':'o','П':'P','п':'p','Р':'R','р':'r','С':'S','с':'s','Т':'T','т':'t','Ф':'F','ф':'f','Х':'X','х':'x','Һ':'H','һ':'h','Ә':'A','ә':'a','Ғ':'Gh','ғ':'gh','И':'Y','и':'y','Й':'Y','й':'y','Қ':'Q','қ':'q','Ң':'Ng','ң':'ng','Ө':'O','ө':'o','Ү':'U','ү':'u','Ұ':'U','ұ':'u','Ё':'Yo','ё':'yo','Ц':'Ts','ц':'ts','Ч':'Ch','ч':'ch','Ш':'Sh','ш':'sh','Щ':'Sh','щ':'sh','Ъ':'','ъ':'','Ы':'I','ы':'i','І':'I','і':'i','Ь':'','ь':'','Э':'E','э':'e','Ю':'Yiw','ю':'yiw','Я':'Ya','я':'ya'}};
    
    var inDual ={'Ә':'Ai','ә':'ai','Ө':'Oi','ө':'oi','Ү':'Ui','ү':'ui','І':'Ii','і':'ii'};
	
	var forY = ['а','А','о','О','ұ','Ұ','ы','Ы','ә','Ә','ө','Ө','ү','Ү','і','І','е','Е','и','И','у','У'];
	
	var y = {'w':{'У':'W','у':'w'},'uw':{'У':'Uw','у':'uw'},'iw':{'У':'Iw','у':'iw'}};
    
    var keg = issetKEG(kiril);
    
    var firtsDual = false;
	
	var variant = $('input[type=radio]:checked').val();
		
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
			
		}else if(variant === 'var2' && inDual[symbol]!== undefined){
            
            if(keg === true){
                strLat = strLat + latin[variant][symbol];
            }else{
                if(firtsDual === true){
                    strLat = strLat + latin[variant][symbol];
                }else{
                    if(i === kiril.length && symbol.toLowerCase === 'i' ){
                        strLat = strLat + latin[variant][symbol];
                       }else{
                    strLat = strLat + inDual[symbol];
                    firtsDual = true;
                       }
                }
            }
            
        }else if(latin[variant][symbol]!==undefined){

			if(symbol.toLowerCase() === 'н' && variant === 'var2' && (kiril[i+1] !== undefined && kiril[i+1].toLowerCase() === 'г'))
			{
				strLat += latin[variant][symbol] + 'g';
			}else{
				strLat = strLat + latin[variant][symbol];
			}
										
		}else{
				strLat = strLat+symbol;
				inStr = false;
			}
		
		
		if(forY.indexOf(symbol)!== -1){
			
			inStr = true;
			
		}
	}
	
	return strLat;
}

function elementConvertThree(word){
	
//Массивы для замены
	
	var letter = {
		'Б':'B','б':'b',
		'В':'V','в':'v',
		'Г':'G','г':'g',
		'Д':'D','д':'d',
		'Е':'E','е':'e',
		'Ж':'J','ж':'j',
		'З':'Z','з':'z',
		'Й':'Y','й':'y',
		'К':'K','к':'k',
		'Л':'L','л':'l',
		'М':'M','м':'m',
		'Н':'N','н':'n',
		'П':'P','п':'p',
		'Р':'R','р':'r',
		'С':'S','с':'s',
		'Т':'T','т':'t',
		'Ф':'F','ф':'f',
		'Х':'Kh','х':'kh',
		'Һ':'H','һ':'h',
		'Э':'E','э':'e',
		'Ң':'Ng','ң':'ng',
		'Ч':'Ch','ч':'ch',
		'Ш':'Sh','ш':'sh',
		'Ц':'Ts','ц':'ts',
		'Ё':'Yo','ё':'yo',
		'Ю':'Yiw','ю':'yiw',
		'Я':'Ya','я':'ya',
		'Ъ':'','ъ':'',
		'Ь':'','ь':''
		};
		
	var letterForSh = {'a':{'щ':'sh', 'Щ':'Sh'},'b':{'щ':'shsh', 'Щ':'Shsh'}};
	
	var letterForI = {'a':{'и':'iy', 'И':'Iy'},'b':{'и':'y', 'И':'Y'}};
	
	var letterForY = {'a':{'у':'uw', 'У':'Uw'},'b':{'у':'iw', 'У':'Iw'},'c':{'у':'w', 'У':'W'}};

	var letterForAOI = {'ә':'a', 'Ә':'A','ө':'o', 'Ө':'O','і':'i', 'І':'I','ү':'u', 'Ү':'U'};

	var letterForAKU = {'А':'A','а':'a','О':'O','о':'o','Ұ':'U','ұ':'u','Ы':'I','ы':'i','Қ':'Q','қ':'q','Ғ':'Gh','ғ':'gh'};

//Массивы для сопоставления
    
	var letterOne = ['а','о','ы','ұ','қ','ғ'];
	
	var letterTwo = ['ә','ө','ү','і'];
	
	var letterThree = ['а','о','ө','ы','ұ','ә','ү','і','е'];

	var letterFour = ['к','г','е'];
	
	var letterFive = ['а','о','ө','ы','ұ','ә','ү','і','е','я','ю'];
	
	var letterSix = ['а','о','ө','ы','ұ','ә','ү','і','е','и','у'];

//Переменные для проверки	
	
	var issetLetterOne = false;
	
	var issetLetterTwo = false;
	
	var issetLetterThree = false;
	
	var issetLetterFour = false;

	var issetLetterFive = false;

	var afterApos =false;
	
	var issetApos =false;
	
	var wordLen = 0;
	
//Проверка на наличие
	var wordOrder = word.toLowerCase();
	
	var wordToOrder = wordOrder.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
	
	if(wordToOrder.substring(wordToOrder.length - 3) === "мен")
	{
		wordToOrder = wordToOrder.substring(0, wordToOrder.length - 3);
	}
	if(wordToOrder.substring(wordToOrder.length - 2) === "кі")
	{
		wordToOrder = wordToOrder.substring(0, wordToOrder.length - 2);
	}
	
	

	for( var lt in letterTwo)
	{
		if(wordToOrder.indexOf(letterTwo[lt]) >= 0)
		{
			issetLetterTwo = wordToOrder.indexOf(letterTwo[lt]);
			break;
		}
	}
	
	if(issetLetterTwo !== false || wordToOrder.indexOf("и") >= 0)
	{
		for( var lo in letterOne)
		{
			if(wordToOrder.indexOf(letterOne[lo]) >= 0)
			{
				issetLetterOne = wordToOrder.indexOf(letterOne[lo]);
				break;
			}
				
		}
	}

	if(issetLetterTwo !== false )
	{
		for( var lf in letterFour)
		{
			if(wordToOrder.indexOf(letterFour[lf]) >= 0)
			{
				issetLetterFour = wordToOrder.indexOf(letterFour[lf]);
				break;
			}
				
		}

	}
	
	var wordLat = '';
	
	for(i = 0; i<word.length; i++)
	{
		
		var symbol = word[i];
		
		if(letter[symbol] !== undefined)
		{
			if(symbol.toLowerCase() === 'н' && (word[i+1] !== undefined && word[i+1].toLowerCase() === 'г'))
			{
				wordLat += letter[symbol] + 'g';
			}else
			{
				wordLat += letter[symbol];
			}
			
		}else if(symbol === 'щ' || symbol === 'Щ') //Щш
		{
			if( i === 0 )
			{
				wordLat += letterForSh['a'][symbol];
			}else{
				wordLat += letterForSh['b'][symbol];
			}
		}else if(symbol === 'и' || symbol === 'И')
		{
			if(issetLetterOne !== false)
			{
				wordLat += letterForI['a'][symbol];
			}else{
				wordLat += letterForI['b'][symbol];
			}
		}else if(symbol === 'у' || symbol === 'У') //УУУ
		{
			
			if(i === 0 && (letterSix.indexOf(word[i+1].toLowerCase()) === -1 || word[i+1] === undefined ||  word[i+1].search(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g) !== -1))
			{
				wordLat += letterForY['a'][symbol];
			}else
			{
				for(var lf in letterFive)
				{
					if(wordToOrder.indexOf(letterFive[lf]) >= 0)
					{
						issetLetterFive = wordToOrder.indexOf(letterFive[lf]);
						break;
					}				
				}

				if(letterThree.indexOf(word[i-1].toLowerCase()) === -1 && (issetLetterFive === false || issetLetterFive > i))
				{
					wordLat += letterForY['a'][symbol];
				} else if(letterThree.indexOf(word[i-1].toLowerCase()) === -1 && (issetLetterFive !== false && issetLetterFive < i))
				{
					wordLat += letterForY['b'][symbol];
				}else
				{
					wordLat += letterForY['c'][symbol];
				}
				
			}
		
		}else if (letterTwo.indexOf(symbol.toLowerCase()) !== -1)
		{
			if(issetLetterOne === false && issetLetterFour !== false)
			{
			wordLat += letterForAOI[symbol]; 
		}else if(issetLetterOne === false && issetLetterFour === false)
		{
			wordLat += letterForAOI[symbol];
			afterApos = true;
		}else if(issetLetterOne !== false && issetLetterTwo > issetLetterOne)
		{
			if(issetApos === false)
			{
				wordLat += letterForAOI[symbol];
				wordLat+="'";
				issetApos = true;
			}else{
				wordLat += letterForAOI[symbol];
			}
		}else{
				wordLat += letterForAOI[symbol];
			}
	}else if(letterOne.indexOf(symbol.toLowerCase()) !== -1)
	{
		if(issetLetterTwo !== false && issetLetterOne > issetLetterTwo)
		{
			wordLat += "'";
			wordLat += letterForAKU[symbol];
		}else{
			wordLat += letterForAKU[symbol];
		}
	}else{
		wordLat += symbol;
	}

	}
	if(afterApos === true)
	{
		if(wordLat[wordLat.length - 1].search(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g) === -1)
		{
			wordLat += "'";			
		}else{
		
		for(var i = wordLat.length - 1;i >0 ; i--)
		{
			if(wordLat[i].search(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g) === -1)
			{
				var s = wordLat.substring(0,i+1);
				var ss = wordLat.substring(i+1);
				wordLat = s + "'" + ss;
				break;
			}
		}
			
		}

	}
	//alert(issetLetterOne+''+issetLetterTwo);
	return wordLat;
}

function elementConvertFour(word){
	
//Массивы для замены
	
	
	var letter = {
		'А':'A','а':'a',
		'Б':'B','б':'b',
		'В':'V','в':'v',
		'Г':'G','г':'g',
		'Д':'D','д':'d',
		'Е':'E','е':'e',
		'Ж':'J','ж':'j',
		'З':'Z','з':'z',
		'Й':'Y','й':'y',
		'К':'K','к':'k',
		'Қ':'Q','қ':'q',
		'Л':'L','л':'l',
		'М':'M','м':'m',
		'Н':'N','н':'n',
		'О':'O','о':'o',
		'П':'P','п':'p',
		'Р':'R','р':'r',
		'С':'S','с':'s',
		'Т':'T','т':'t',
		'Ұ':'U','ұ':'u',
		'Ф':'F','ф':'f',
		'Х':'Kh','х':'kh',
		'Һ':'H','һ':'h',
		'Ы':'I','ы':'i',
		'Э':'E','э':'e',
		'Ә':'Á','ә':'á',
		'Ө':'Ó','ө':'ó',
		'Ү':'Ú','ү':'ú',
		'І':'I','і':'i',
		'Ғ':'Gh','ғ':'gh',
		'Ң':'Ng','ң':'ng',
		'Ч':'Ch','ч':'ch',
		'Ш':'Sh','ш':'sh',
		'Ц':'Ts','ц':'ts',
		'Ё':'Yo','ё':'yo',
		'Ю':'Yiw','ю':'yiw',
		'Я':'Ya','я':'ya',
		'Ъ':'','ъ':'',
		'Ь':'','ь':''
		};
		
	var letterForSh = {'a':{'щ':'sh', 'Щ':'Sh'},'b':{'щ':'shsh', 'Щ':'Shsh'}};
	
	var letterForI = {'a':{'и':'iy', 'И':'Iy'},'b':{'и':'y', 'И':'Y'}};
	
	var letterForY = {'a':{'у':'uw', 'У':'Uw'},'b':{'у':'üw', 'У':'Üw'},'c':{'у':'iw', 'У':'Iw'},'d':{'у':'iw', 'У':'İw'},'e':{'у':'w', 'У':'W'}};


//Массивы для сопоставления
    
	var letterOne = ['а','о','ы','ұ','қ','ғ'];
	
	var letterTwo = ['ә','ө','ү','і','к','г','е'];
	
	var letterThree = ['а','о','ө','ы','ұ','ә','ү','і','е'];
	
	var letterFour = ['а','о','ө','ы','ұ','ә','ү','і','е','и','у'];
	
	var letterFive = ['а','о','ө','ы','ұ','ә','ү','і','е','я','ю'];
	
	

//Переменные для проверки	
	
	var issetLetterOne = false;
	
	var issetLetterTwo = false;
	
	var issetLetterThree = false;
	
	var issetLetterFour = false;

	var issetLetterFive = false;
		
	var wordLen = 0;
	
//Проверка на наличие
	var wordToOrder = word.toLowerCase();
	
	var wordToOrder = wordToOrder.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
	
		if(wordToOrder.substring(wordToOrder.length - 3) === "мен")
		{
			wordToOrder = wordToOrder.substring(0, wordToOrder.length - 3);
		}
		if(wordToOrder.substring(wordToOrder.length - 2) === "кі")
		{
			wordToOrder = wordToOrder.substring(0, wordToOrder.length - 2);
		}
	
	var wordLat = '';
	
	for(i = 0; i<word.length; i++)
	{
		
		var symbol = word[i];
		
		if(letter[symbol]!== undefined)
		{

			if(symbol.toLowerCase() === 'н' && (word[i+1] !== undefined && word[i+1].toLowerCase() === 'г'))
			{
				wordLat += letter[symbol] + 'g';
			}else
			{
				wordLat += letter[symbol];
			}
			
			if(letterFive.indexOf(symbol.toLowerCase()) >= 0 )
			{
				issetLetterFive = true;
			}
			
		}else if(symbol.toLowerCase() === 'щ') //Щш
		{
			if( i === 0 )
			{
				wordLat += letterForSh['a'][symbol];
			}else{
				wordLat += letterForSh['b'][symbol];
			}
		}else if(symbol === 'и' || symbol === 'И')
		{
			for( var indexOne in letterOne)
			{
				if(wordToOrder.indexOf(letterOne[indexOne]) >= 0)
				{
					issetLetterOne = wordToOrder.indexOf(letterOne[indexOne]);
					break;
				}
					
			}
			
			if(issetLetterOne !== false)
			{
				wordLat += letterForI['a'][symbol];
			}else{
				wordLat += letterForI['b'][symbol];
			}
			
		}else if(symbol.toLowerCase() === 'у') //УУУ
		{
			for( var indexTwo in letterTwo)
			{
				if(wordToOrder.indexOf(letterTwo[indexTwo]) >= 0)
				{
					issetLetterTwo = wordToOrder.indexOf(letterTwo[indexTwo]);
					break;
				}
					
			}
			
			if(i === 0 && ((word[i+1] === undefined || word[i+1].search(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g) !== -1) || (letterFour.indexOf(word[i+1].toLowerCase()) === -1 && issetLetterTwo === false)))
			{
				wordLat += letterForY['a'][symbol];
			}else if(i === 0 && ((word[i+1] === undefined || word[i+1].search(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g) !== -1) || (letterFour.indexOf(word[i+1].toLowerCase()) === -1 && issetLetterTwo !== false)))
				{
					wordLat += letterForY['b'][symbol];
				}else if((word[i-1] !== undefined && letterThree.indexOf(word[i-1].toLowerCase()) === -1) && issetLetterFive === false && issetLetterTwo === false)
				{
					wordLat += letterForY['a'][symbol];
				}else if((word[i-1] !== undefined && letterThree.indexOf(word[i-1].toLowerCase()) === -1) && issetLetterFive === false && issetLetterTwo !== false)
				{
					wordLat += letterForY['b'][symbol];
				}else if((word[i-1] !== undefined && letterThree.indexOf(word[i-1].toLowerCase()) === -1) && issetLetterFive !== false && issetLetterTwo === false)
				{
					wordLat += letterForY['c'][symbol];
				}else if((word[i-1] !== undefined && letterThree.indexOf(word[i-1].toLowerCase()) === -1) && issetLetterFive !== false && issetLetterTwo !== false)
				{
					wordLat += letterForY['d'][symbol];
				}else{
					wordLat += letterForY['e'][symbol];
				}
		
		}else{
				wordLat += symbol;
			}

	}

	return wordLat;
}

function StrSplit(str){
        
        var arr = str.split(' ');
        
        return arr;
        
    }

function issetKEG(str){
    
    var str = str.replace(/,/g, "");
    
     str = str.toLowerCase();
    
    var len = str.length;
    
    strEnd1 = str.substring(len - 3);
    
    strEnd2 = str.substring(len - 2);
    
    if(strEnd1 === 'мен'){
        
        str =  str.substring(0, str.length - 3);
        
    }else if(strEnd2 === 'кі'){
        
        str =  str.substring(0, str.length - 2);
    }
    
    if(str.indexOf('к')!== -1 || str.indexOf('е')!== -1 || str.indexOf('г')!== -1){
        
        return true;
    }else{
        return false;
    }
    
}
    

    
function translitter(str){
    
    var arr = StrSplit(str);
    
    for(j = 0; j < arr.length; j++){
        
        arr[j] = elementConvert(arr[j]);
        /*alert(arr.length);
        alert(j);*/
    }
    return arr.join(' ');
}

function translitterThree(str){
    
    var arr = StrSplit(str);
    
    for(j = 0; j < arr.length; j++){
        
        arr[j] = elementConvertThree(arr[j]);
        /*alert(arr.length);
        alert(j);*/
    }
    return arr.join(' ');
}

function translitterFour(str){
    
    var arr = StrSplit(str);
    
    for(j = 0; j < arr.length; j++){
        
        arr[j] = elementConvertFour(arr[j]);
        /*alert(arr.length);
        alert(j);*/
    }
    return arr.join(' ');
}

function convert(){
	
	var str = $('#ciril').val();
	
	var variant = $('input[type=radio]:checked').val();
	
	if(variant === "var4" )
	{
		strl = translitterFour(str);
	}else if(variant === "var3" )
	{
		strl = translitterThree(str);
	}else{
		strl = translitter(str);
	}
		
	$('#latin').val(strl);
}

$('input[type=radio]').on('change',function(){
	convert();
});

$('#ciril').keyup(function(){
	
	convert();

});

$('#enter').click(function(){
	
	convert();
});

})