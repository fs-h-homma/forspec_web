$(function() {
    $("#ruleBtn").click(function(){
		$.pgwModal({
			target: '#modalContent_rule',
			titleBar: false,
			maxWidth: 990
		});
		return false;
    });
    $("#announceBtn").click(function(){
		$.pgwModal({
			target: '#modalContent_announce',
			titleBar: false,
			maxWidth: 990
		});
		return false;
    });
});
