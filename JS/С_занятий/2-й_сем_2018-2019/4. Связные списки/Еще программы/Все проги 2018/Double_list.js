function Double_list(){
	this.head = null;
}

function Node_DL(data) {
	this.data = data;
	this.next = null;
	this.prev = null;
}

Double_list.prototype.add = function(data) {
	var node = new Node_DL(data);
	
	if (this.head == null) {
		this.head = node;
	} else {
		var element_i = this.head;
		while (element_i.next != null) {
			element_i = element_i.next;
		}
		element_i.next = node;
		node.prev = element_i;
	}
}



Double_list.prototype.remove = function(n) {
	if (this.head == null) {return false;}
	if (n == 0) {
		this.head = this.head.next;
		if (this.head != null) this.head.prev = null;
		return true;
	}
	var e = this.head;
	
	var i = 0;
	while (i < n-1) {
		i++;
		e = e.next;
		if (e.next == null) return false;
	}
	e.next = e.next.next;
	if (e.next != null) e.next.prev = e;
	return true;
}

Double_list.prototype.remove_if_more_than = function(x) {
	var M = [];
	var e = this.head;
	var i = 0;
	while (e != null) {
		if (e.data > x) M.push(i);
		i++;
		e = e.next;
	}
	for (var i = M.length-1; i >= 0; i--) {
		console.log(M[i], this.remove(M[i]))
	}
}