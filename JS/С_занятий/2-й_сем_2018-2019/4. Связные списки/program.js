window.addEventListener("load", program_code, false);
function program_code() {
	
	function Node(data) {
		this.data = data;
		this.next = null;
		this.prev = null;
	}
	
	function DoubleList() {
		this.head = null;
		this.length = 0;
		
		this.add = function(value) {
			this.length++;
			var node = new Node(value);
			if (this.head == null){
				this.head = node;
			}
			else{
				var element_i = this.head;
				while(element_i.next != null){
					element_i = element_i.next;
				}
				node.prev = element_i;
				element_i.next = node;
			}
		}
		
		this.remove = function(index) {
			if (index > 0 && index <= this.length){
				this.length--;
				var element_i = this.head;
				for(var i = 0; i < index; i++){
					element_i = element_i.next;
				}
				element_i.prev.next = element_i.next;
				element_i.next.prev = element_i.prev;
			}
		}
		
		this.getData = function(index) {
			if (index > 0 && index <= this.length){
				var element_i = this.head;
				for(var i = 0; i < index; i++){
					element_i = element_i.next;
				}
				return element_i.data;
			}
		}
		
		this.insert = function(value, index){
			if (index > 0 && index <= this.length){
				this.length++;
				var element_i = this.head;
				for(var i = 0; i < index; i++){
					element_i = element_i.next;
				}
				var node = new Node(value);
				
				node.prev = element_i.prev;
				node.next = element_i;
				element_i.prev.next = node;
				element_i.prev = node;
				
				if (index == 0){
					this.head = node;
				}
			}
		}
	}
	
	var a = new DoubleList();
	a.add(1);
	a.add(2);
	a.add(3);
	a.add(4);
	a.add(5);
	a.insert(8, 2);
	console.log(a);
}