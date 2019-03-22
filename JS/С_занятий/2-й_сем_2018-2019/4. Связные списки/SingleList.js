function SingleList() {
		this.head = null;
		this.length = 0;
		
		this.add = function (value) {
			this.length++;
			var node = new Node(value);
			if (this.head == null) {
				this.head = node;
				return this.head;
			}
			else {
				var element_i = this.head;
				while(element_i.next != null){
					element_i = element_i.next;
				}
				element_i.next = node;
				return element_i.next;
			}
		}
		
		this.remove = function (value) {
			var element_i = this.head;
			while(element_i.next.data != value) {
				if (element_i.next != null){
					element_i = element_i.next;
				} else {
					console.error("Element is not found");
					return;
				}
			}
			var temp = element_i.next;
			element_i.next = temp.next;
			this.length--;
		}
	}

	function Node(data) {
		this.data = data;
		this.next = null;
	}