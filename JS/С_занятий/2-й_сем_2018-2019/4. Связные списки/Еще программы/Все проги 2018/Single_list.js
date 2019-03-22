function Single_list(){
	this.head = null;
}

function Node_SL(data) {
	this.data = data;
	this.next = null;
}

Single_list.prototype.add = function(data) {
	var node = new Node_SL(data);
	
	if (this.head == null) {
		this.head = node;
	} else {
		var element_i = this.head;
		while (element_i.next != null) {
			element_i = element_i.next;
		}
		element_i.next = node;
	}
}

Single_list.prototype.len = function() {
	// ...
	// return N;
}

Single_list.prototype.remove = function(n) {
	if (this.head == null) {return false;}
	if (n == 0) {
		this.head = this.head.next;
		return true;
	}
	var e = this.head;
	
	var i = 0;
	while (i < n-1) {
		if (e.next == null) return false;
		i++;
		e = e.next;
	}
	e.next = e.next.next;
	return true;
}