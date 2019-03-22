window.addEventListener("load", program_code, false);
function program_code() {
	
	var cycle_list = new Cycle_list();
	
	for (var i = 1; i <= 30; i++) {
		cycle_list.add(i);
	}
	
	
	// var e = cycle_list.head;
	// var k = 1;
	// while (e.next != e) {
		// while (k < 4) {
			// e = e.next;
			// k++;
		// }
		// k = 0;
		// console.log(e.next.data)
		// e.next = e.next.next;
	// }
	// cycle_list.head = e;
	// console.log(cycle_list);
	
	
	
	
	// var element_i = single_list.head;
	// while (element_i != null) {
		// console.log(element_i.data);
		// element_i = element_i.next;
	// }
	
	var e = cycle_list.head;
	var m = 0;
	for (var i = cycle_list.len(); i > 1; i--) {
		m = m + 4;
		while (m >= i) m = m - i;
		cycle_list.remove(m)
	}
	
	
	
	
	
}