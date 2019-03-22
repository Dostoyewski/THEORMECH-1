window.addEventListener("load", main, false);

function main(){
	var a = new single_list();
	a.add(1);
	a.add(2);
	a.add(3);
	a.remove(2);
	console.log(a);
}

function single_list(){							//Класс связанных списков
		this.head = null;
		this.length = 0;
		
		this.add = function(value){				//Функция добавления
			this.length++;
			var node = new Node(value);
			if(this.head == null){
				this.head = node;
				return;
			}
			else{
				element_i = this.head;
				while(element_i.next != null){
					element_i = element_i.next;
				}
				element_i.next = node;
			}
		}
		this.remove = function(value){
			var element_i = this.head;
			while(element_i.next.data != value){
				if(element_i.next.next != null){
					element_i = element_i.next;
				}
				else{
					console.error("Not found");
					return;
				}
			}
			var temp = element_i.next;
			element_i.next = temp.next;
			this.length--;
		}
		
		
	
	function Node(data){
		this.data = data;
		this.next = null;
	}
}

