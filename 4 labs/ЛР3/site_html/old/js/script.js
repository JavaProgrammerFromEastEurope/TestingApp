var tabs = Array();
tabs[0] = 'tab_0';
tabs[1] = 'tab_1';
tabs[2] = 'tab_2';

var tabs_controls = Array();
tabs_controls[0] = 'tab_control_0';
tabs_controls[1] = 'tab_control_1';
tabs_controls[2] = 'tab_control_2';

var tabs_cont = Array();
tabs_cont[0] = 'tab_cont_0';
tabs_cont[1] = 'tab_cont_1';
tabs_cont[2] = 'tab_cont_2';

function showtab(tab_num)
{
	for (i=0;i<tabs.length;i++) {
		document.getElementById(tabs[i]).style.display = 'none';
		document.getElementById(tabs_controls[i]).style.background = 'url(images/tab_'+i+'.gif) no-repeat';
		document.getElementById(tabs_cont[i]).style.background = 'url(images/tabs_cont.gif) repeat-x 0% 100%';
		document.getElementById(tabs_cont[i]).style.color = '#003876';
	}
	document.getElementById(tabs[tab_num]).style.display = 'block';
	document.getElementById(tabs_controls[tab_num]).style.background = 'url(images/tab_sel_'+tab_num+'.gif) no-repeat';
	document.getElementById(tabs_cont[tab_num]).style.background = 'none';
	document.getElementById(tabs_cont[tab_num]).style.color = '#000';
}