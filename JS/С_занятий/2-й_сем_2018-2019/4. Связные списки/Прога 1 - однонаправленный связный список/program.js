window.addEventListener("load", program_code, false);
function program_code() {

	// Узел связного списка
	function Node(data) {
		this.data = data;
		this.next = null;
	}

	// Объект связного списка (содержит ссылку на первый элемент СС)
	function SinglyList() {
		this.head = null;
	}

	// Функция добавления элемента в связный список
	SinglyList.prototype.add = function(value) {
		var node = new Node(value);
		
		if (this.head == null) {
			this.head = node;
			return;		// Можно возвращать ссылку на добавленную ноду
		}
		
		var current_node = this.head;
		while (current_node.next != null){
			current_node = current_node.next;
		}
		current_node.next = node;
		
		// Можно возвращать ссылку на добавленную ноду
	}
	
	// Функция поиска длины связного списка
	SinglyList.prototype.len = function() {
		if (this.head == null) return 0;
		
		var len = 1;
		var current_node = this.head;
		while (current_node.next != null){
			current_node = current_node.next;
			len++;
		}
		return len;
	}

	SinglyList.prototype.searchNodeAt = function(pos) {
		// Можно написать функцию возвращения ноды по индексу
	};

	// Удалить ноду по индексу
	SinglyList.prototype.remove = function(pos) {
		// 3 случая:
		// 	- элемент pos не существует
		// 	- удаляем 1ый элемент (head)
		// 	- удаляем не 1ый элемент
		
		if (pos < 0 || pos >= this.len()) return false;		// >= ??
		
		if (pos == 0) {
			this.head = this.head.next;
			return true;
		}
		
		var element = this.head;
		while (pos > 0) {
			pos--;
			element = element.next;
		}
		e.next = e.next.next;
		return true;
		
	}
	
	
	
	
	
	
}