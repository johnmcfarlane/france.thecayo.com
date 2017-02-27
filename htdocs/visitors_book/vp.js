var first=1
var last=28
var current=0
function viewFirst() { updatePage(first) }
function viewLast() { updatePage(last) }
function viewPrev() { updatePage(current-1) }
function viewNext() { updatePage(current+1) }
function viewJump() { updatePage(parseInt(document.getElementById("page_jump").value)) }
function updatePage(page_num) {
	if (isNaN(page_num)) page_num=current
	if (page_num<first) page_num=first
	else if (page_num>last) page_num=last
	if (page_num!=current) {
		current=page_num
		var fn='Page '+current+'.jpg'
		document.getElementById("page_thumb").src = fn
		document.getElementById("page_link").href = fn
		var prev_disabled=(page_num==first)?"disabled":"";
		document.getElementById("first_button").disabled=prev_disabled;
		document.getElementById("prev_button").disabled=prev_disabled;
		var next_disabled=(page_num==last)?"disabled":"";
		document.getElementById("last_button").disabled=next_disabled;
		document.getElementById("next_button").disabled=next_disabled;
	}
	document.getElementById("page_jump").value = current
}