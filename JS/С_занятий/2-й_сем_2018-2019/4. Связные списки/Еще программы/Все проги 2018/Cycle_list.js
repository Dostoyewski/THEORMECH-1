function Cycle_list(){
	this.head = null;
}

function Node_CL(data) {
	this.data = data;
	this.next = null;
}

Cycle_list.prototype.add = function(data) {
	var node = new Node_CL(data);
	
	if (this.head == null) {
		this.head = node;
		node.next = node;
	} else {
		var element_i = this.head;
		while (element_i.next != this.head) {
			element_i = element_i.next;
		}
		element_i.next = node;
		node.next = this.head;
	}
}

// 1.
Cycle_list.prototype.remove = function(n){
	if (this.head == null) {return false;}
	if (n == 0) {
		
		var e = this.head;
		while (e.next != this.head) {
			e = e.next;
		}
		this.head = this.head.next;
		e.next = this.head;
			
		return true;
	}
	var e = this.head;
	
	var i = 0;
	while (i < n-1) {
		i++;
		e = e.next;
		if (e.next == this.head) return false;
	}
	e.next = e.next.next;
	return true;
}
//2. 
// [1, 2, 3, 4, ..., 30] - [1, 2, ...]
// удалять каждый пятый элемент

//3*
// [12 -> 99 -> 37] -> [37 -> 99 -> 12]