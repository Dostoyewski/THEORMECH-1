window.addEventListener("load", program_code, false);
function program_code() {

	function Node(data) {
		this.data = data;
		this.next = null;
	}

	function CycleList() {
		this.head = null;
	}

	CycleList.prototype.add = function(value) {
		var node = new Node(value);
		
		if (this.head == null) {
			this.head = node;
			node.next = this.head;
		} else {
			var current_node = this.head.next;
			while (current_node.next != this.head){
				current_node = current_node.next;
			}
			current_node.next = node;
			node.next = this.head;
		}
	}
	
	CycleList.prototype.len = function() {
		if (this.head == null) return 0;
		if (this.head.next == this.head) return 1;
		
		var len = 2;
		var current_node = this.head.next;
		while (current_node.next != this.head){
			current_node = current_node.next;
			len++;
		}
		return len;
	}
	
	
	clist = new CycleList();
	clist.add("a");
	clist.add("b");
	clist.add("c");
	clist.add("d");
	clist.add("e");
	console.log(clist)
	console.log(clist.len())
	
	
	
	
	
	
	
}