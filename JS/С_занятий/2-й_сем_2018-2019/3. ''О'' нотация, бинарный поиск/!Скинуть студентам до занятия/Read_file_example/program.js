window.addEventListener("load", program_code, false);
function program_code() {
	// Считывание файла
	function readSingleFile(e) {
		var f = e.target.files[0];
		
		if (f) {
			var r = new FileReader();
			r.onload = function(env) {
				var content = env.target.result;
				process_file(content)
			}
			r.readAsText(f);
		} else {
			console.log("ERROR READING FILE")
		}
	}
	fileinput.addEventListener('change', readSingleFile, false);
	
	// Работа с содержимым файла
	function process_file(content) {	
		console.log(content)
	}
}