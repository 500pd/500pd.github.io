var template = ' \
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> \
<html> \
<head> \
<meta http-equiv="content-type" content="text/html" charset="utf-8"/> \
<meta charset="utf-8"> \
<link rel="shortcut icon" href=""> \
<meta name="robots" content="index,follow"> \
<!--<meta http-equiv="cache-control" content="no-cache">--> \
<title>500pds Cydia repositorie</title> \
</head> \
<body text="#000000" link="#404040" alink="#404040" vlink="#404040" style="background:none;"> \
 \
<div align="center" style="background-color:#77ffff"> \
<h1>500pds repositorie</h1> \
</div> \
 \
<div align="center" style="background-color:#FFFFFF;"> \
<table><td> \
';

var content = document.getElementById('content').innerHTML;

var bottom = '\
<h3><a href="https://github.com/500pd/" target="_blank">Min Github: 500pd</a><br> \
';
document.write(template + content + bottom);

/*
under var bottom = '\ sæt
<h3><a href="https://twitter.com/paadyhr/" target="_blank">Min Twitter: paadyhr</a><br> \
for at vise link til min twitter
Og
<a href="http://500pd.github.io/" target="_blank">Min hjemmeside</a></h3> \
for at vise link til hjemmeside
*/