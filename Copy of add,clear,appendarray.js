add:function(target){
			let targetDiv = $('.'+target);
			viewDependencies[target] = $(targetDiv).parent().html();
			v.clear(target);
		}


clear : function(target){
			let targetDiv = $('.'+target);
			targetDiv.parent().empty();
		},


appendArray:function(target,arr,template){
			for(property in arr){
				v.appendData(target,arr[property],template)
				if(template == 'singleSlider' && property == 0){
					property++
					$('.'+target).find('.'+template).addClass('active')
				}
			}
		},




