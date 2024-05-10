var i_arrowLong = `
<svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<path vector-effect="non-scaling-stroke" d="M 0,50 H 100"/>
	<path vector-effect="non-scaling-stroke" d="M 64.644658,14.64466 100,50 64.644657,85.355339"/>
</svg>
`;

var i_arrowShort = `
<svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<path vector-effect="non-scaling-stroke" d="M 50,0 V 100"/>
	<path vector-effect="non-scaling-stroke" d="M 0,50 50,0 100,50"/>
</svg>
`;

var i_cube = `
<svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<path vector-effect="non-scaling-stroke" transform="matrix(1.980203,0,0,1.980203,-4.1643466,-13.42321)" d="M 27.352927,57.278578 5.4858397,44.65361 5.485839,19.403673 27.352926,6.7787037 49.220013,19.403672 l 10e-7,25.249937 z"/>
	<path vector-effect="non-scaling-stroke" d="M 6.6987282,25 50,50"/>
	<path vector-effect="non-scaling-stroke" d="M 50,100 50,50"/>
	<path vector-effect="non-scaling-stroke" d="M 93.301267,25 50,50"/>
</svg>
`;

var i_verified = `
<svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<path vector-effect="non-scaling-stroke" transform="matrix(1.1682754,0,0,1.1682754,25.420082,25.420082)" d="M -21.758636,21.039488 -11.523258,10.459212 -13.584921,-4.1166193 0.91460463,-6.6600372 7.8141433,-19.663948 21.039489,-13.199009 34.26484,-19.663946 41.164374,-6.6600379 55.663902,-4.1166161 53.602237,10.459211 63.837616,21.039492 53.602237,31.619767 55.6639,46.195599 41.164375,48.739017 34.264836,61.742927 21.03949,55.277988 7.8141395,61.742926 0.91460568,48.739017 -13.584923,46.195596 -11.523257,31.619768 Z"/>
	<path vector-effect="non-scaling-stroke" d="M 71.213205,35.857875 42.928934,64.142146 28.786797,50"/>
</svg>
`;

var i_box = `
<svg viewBox="0 0 100 77.717285" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<path vector-effect="non-scaling-stroke" d="M 0,28.857422 V 48.858398 H 0.03222656 C 16.693711,58.477818 33.354246,68.097667 50.015625,77.717285 66.677106,68.097869 83.339111,58.478017 100,48.858398 V 28.857422"/>
	<path vector-effect="non-scaling-stroke" d="M 50.015865,0 C 33.354371,9.6192922 16.692924,19.238662 0.03152106,28.85811 16.693022,38.477539 33.354469,48.097057 50.015865,57.71668 66.677363,48.097259 83.33881,38.477738 100,28.85811 83.33891,19.238465 66.677463,9.6190952 50.015865,0 Z"/>
	<path vector-effect="non-scaling-stroke" d="m 50.015865,57.71668 0,20"/>
</svg>
`;

/* var i_globe = `
<svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<path vector-effect="non-scaling-stroke" d="M 100,50 A 50,50 0 0 1 50,100 50,50 0 0 1 0,50 50,50 0 0 1 50,0 50,50 0 0 1 100,50 Z"/>
	<path vector-effect="non-scaling-stroke" d="m 12.863404,16.581638 c 9.150047,5.013883 22.386093,8.166277 37.111802,8.166277 14.752904,0 28.009579,-3.164432 37.16139,-8.194463"/>
	<path vector-effect="non-scaling-stroke" d="M 0,50 H 100"/>
	<path vector-effect="non-scaling-stroke" d="M 50,0 V 100"/>
	<path vector-effect="non-scaling-stroke" d="M 87.136602,83.418293 C 77.986545,78.404407 64.75051,75.252016 50.024802,75.252015 35.2719,75.252014 22.015214,78.416464 12.863397,83.446472"/>
	<path vector-effect="non-scaling-stroke" d="M 74.747984,50 A 24.747984,50 0 0 1 50,100 24.747984,50 0 0 1 25.252016,50 24.747984,50 0 0 1 50,0 24.747984,50 0 0 1 74.747984,50 Z"/>
</svg>
`; */
var i_globe = `
<svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<path vector-effect="non-scaling-stroke" d="M 100,50 A 50,50 0 0 1 50,100 50,50 0 0 1 0,50 50,50 0 0 1 50,0 50,50 0 0 1 100,50 Z"/>
	<path vector-effect="non-scaling-stroke" d="M 0,50 H 100"/>
	<path vector-effect="non-scaling-stroke" d="M 50,0 V 100"/>
	<path vector-effect="non-scaling-stroke" d="M 74.747984,50 A 24.747984,50 0 0 1 50,100 24.747984,50 0 0 1 25.252016,50 24.747984,50 0 0 1 50,0 24.747984,50 0 0 1 74.747984,50 Z"/>
</svg>
`;

var i_bot = `
<svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<path d="M 18 18 L 18 82.000488 L 82.000488 82.000488 L 82.000488 18 L 18 18 z M 27.999023 67.999512 A 3.999722 4 0 0 1 31.999512 72 A 3.999722 4 0 0 1 27.999023 76.000488 A 3.999722 4 0 0 1 24 72 A 3.999722 4 0 0 1 27.999023 67.999512 z "/>
	<path d="m 36.500366,0 v 7.000488 h -1.750488 v 6.999024 h 7.000488 V 7.000488 H 39.999878 V 0 Z"/>
	<path d="m 48.250244,0 v 7.000488 h -1.750488 v 6.999024 h 7.000488 V 7.000488 H 51.749756 V 0 Z"/>
	<path d="m 60.000122,0 v 7.000488 h -1.750488 v 6.999024 h 7.000488 V 7.000488 H 63.499634 V 0 Z"/>
	<path d="M 24.750488,0 V 7.000488 H 23 v 6.999024 h 7.000488 V 7.000488 H 28.25 V 0 Z"/>
	<path d="m 71.75,0 v 7.000488 h -1.750488 v 6.999024 H 77 V 7.000488 H 75.249512 V 0 Z"/>
	<path d="m 63.499634,100 v -7.000485 h 1.750488 v -6.999024 h -7.000488 v 6.999024 h 1.750488 V 100 Z"/>
	<path d="m 51.749756,100 v -7.000485 h 1.750488 v -6.999024 h -7.000488 v 6.999024 h 1.750488 V 100 Z"/>
	<path d="m 39.999878,100 v -7.000485 h 1.750488 v -6.999024 h -7.000488 v 6.999024 h 1.750488 V 100 Z"/>
	<path d="M 75.249512,100 V 92.999515 H 77 v -6.999024 h -7.000488 v 6.999024 H 71.75 V 100 Z"/>
	<path d="m 28.25,100 v -7.000485 h 1.750488 V 86.000491 H 23 v 6.999024 h 1.750488 V 100 Z"/>
	<path d="m 99.999998,36.500361 h -7.00049 v -1.750488 h -6.99902 v 7.000488 h 6.99902 v -1.750488 h 7.00049 z"/>
	<path d="m 99.999998,48.250239 h -7.00049 v -1.750488 h -6.99902 v 7.000488 h 6.99902 v -1.750488 h 7.00049 z"/>
	<path d="m 99.999998,60.000124 h -7.00049 v -1.750495 h -6.99902 v 7.000495 h 6.99902 v -1.75049 h 7.00049 z"/>
	<path d="m 99.999998,24.750483 h -7.00049 v -1.750487 h -6.99902 v 7.000487 h 6.99902 v -1.750488 h 7.00049 z"/>
	<path d="m 99.999998,71.750004 h -7.00049 v -1.75049 h -6.99902 v 7.00049 h 6.99902 v -1.75049 h 7.00049 z"/>
	<path d="m 2e-6,63.499634 h 7.000485 v 1.75049 h 6.999024 V 58.249629 H 7.000487 v 1.750495 H 2e-6 Z"/>
	<path d="m 2e-6,51.749751 h 7.000485 v 1.750488 h 6.999024 V 46.499751 H 7.000487 v 1.750488 H 2e-6 Z"/>
	<path d="m 2e-6,39.999873 h 7.000485 v 1.750488 h 6.999024 V 34.749873 H 7.000487 v 1.750488 H 2e-6 Z"/>
	<path d="m 2e-6,75.249514 h 7.000485 v 1.75049 h 6.999024 v -7.00049 H 7.000487 v 1.75049 H 2e-6 Z"/>
	<path d="m 2e-6,28.249995 h 7.000485 v 1.750488 h 6.999024 V 22.999996 H 7.000487 v 1.750487 H 2e-6 Z"/>
</svg>
`;

var i_user = `
<svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<path d="M 9.89476,56.55854 C 7.75911,54.66057 6.23936,52.08042 5.68475,49.1664 4.06578,48.04002 2.70814,46.55957 1.72627,44.83827 0.62844,42.91434 -1e-5,40.69691 -1e-5,38.34608 c 0,-2.77701 0.87104,-5.36148 2.35343,-7.49454 1.29685,-1.86552 3.07029,-3.3849 5.14421,-4.38365 0.3783,-2.02272 1.39817,-3.82479 2.83809,-5.18553 1.43437,-1.35497 3.28482,-2.27223 5.33214,-2.53399 0.64568,-1.50714 1.66858,-2.8174 2.94798,-3.80893 1.6171,-1.2533 3.63954,-2.00109 5.82437,-2.00109 h 5.1771 c 0.94372,-1.35137 2.16875,-2.49001 3.58682,-3.3265 1.70132,-1.00307 3.67674,-1.57996 5.77518,-1.57996 1.12783,0 2.23546,0.17306 3.29693,0.49612 0.58627,0.17812 1.15235,0.40094 1.69318,0.66559 0.89634,-0.7413 1.89653,-1.35786 2.97532,-1.8237 1.4927,-0.64467 3.13468,-1.00235 4.8531,-1.00235 1.74582,0 3.41375,0.36994 4.92953,1.03697 1.22157,0.53651 2.34146,1.26772 3.32146,2.15469 0.15864,-0.0274 0.32017,-0.0512 0.48459,-0.0736 0.55597,-0.0728 1.09176,-0.11105 1.60303,-0.11105 1.97657,0 3.85508,0.47666 5.52518,1.32036 1.37732,0.6966 2.60899,1.64486 3.63225,2.78422 l 0.013,-7.2e-4 c 0.42834,-0.0411 0.81846,-0.0627 1.16748,-0.0627 2.37823,0 4.60576,0.68505 6.49724,1.86696 1.60952,1.00523 2.97315,2.37246 3.97478,3.9856 1.73789,0.0714 3.30919,0.80981 4.4637,1.96431 1.14369,1.14369 1.87922,2.69697 1.96215,4.41538 1.35786,0.47089 2.55779,1.2807 3.49668,2.32632 1.33551,1.48693 2.15036,3.44836 2.15036,5.58863 0,1.08456 -0.21417,2.13089 -0.60285,3.09935 -0.14206,0.35407 -0.30719,0.69588 -0.49396,1.02398 1.66433,1.50064 3.05392,3.2991 4.08079,5.30957 1.27637,2.49866 1.99676,5.31172 1.99676,8.27262 0,3.08925 -0.78241,6.01409 -2.15974,8.5863 -1.2605,2.35372 -3.02003,4.40384 -5.13361,6.00544 v 2.62269 c 0,2.64289 -1.08023,5.04492 -2.82028,6.78496 -1.74005,1.74006 -4.14208,2.82028 -6.78496,2.82028 -1.04057,0 -2.05518,-0.17451 -3.01714,-0.49612 -0.22788,2.78999 -1.4617,5.30523 -3.33515,7.17869 -2.08186,2.08185 -4.95478,3.37337 -8.11687,3.37337 -2.94719,0 -5.64416,-1.12278 -7.68274,-2.96162 v 5.04275 c 0,0.93889 -0.3822,1.79125 -0.99947,2.4078 -0.61655,0.61728 -1.46891,0.99947 -2.4078,0.99947 h -2.9133 c -0.93889,0 -1.79125,-0.38219 -2.40852,-0.99947 C 51.60892,92.02148 51.22746,91.1785 51.22168,90.24826 50.04483,72.5413 36.97896,71.50939 35.47529,71.44882 c -0.0375,0.002 -0.0752,0.004 -0.11328,0.004 -2.54142,0 -4.85043,-1.03841 -6.52327,-2.71139 -1.67277,-1.67299 -2.7111,-3.98199 -2.7111,-6.5232 0,-0.79827 0.10492,-1.5778 0.30171,-2.32559 h -7.7964 c -3.34315,0 -6.40666,-1.26195 -8.73817,-3.33371"/>
</svg>
`;

var i_exit = `
<svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<path vector-effect="non-scaling-stroke" d="m 70,0 h 30 V 100 H 70"/>
	<path vector-effect="non-scaling-stroke" d="M 0,50 H 70 Z"/>
	<path vector-effect="non-scaling-stroke" d="M 35,15 0,50 35,85"/>
</svg>
`;

var i_restart = `
<svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<path vector-effect="non-scaling-stroke" d="M 94.426976,0 V 28.572713 H 65.85426"/>
	<path vector-effect="non-scaling-stroke" d="M 94.426976,28.572713 C 81.279185,5.7990385 52.158753,-2.003757 29.385595,11.144929 6.6136397,24.29351 -1.1879071,53.412695 11.96023,76.184908 25.107474,98.957637 54.2262,106.76089 76.999186,93.614095 84.241316,89.426752 90.252364,83.405213 94.427071,76.155791"/>
</svg>
`;

var i_flag = `
<svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<path vector-effect="non-scaling-stroke" d="M 10.5,100 V 0"/>
	<path vector-effect="non-scaling-stroke" d="m 10.5,67.046036 c 5.680336,-4.161433 12.581375,-6.425286 19.681641,-6.454869 7.146646,0.001 14.100412,2.266376 19.817871,6.454869 5.717455,4.188492 12.671217,6.452429 19.817871,6.453476 7.100264,-0.02957 14.002771,-2.292044 19.683105,-6.453476 V 9.9543811 C 83.820152,14.115813 76.917647,16.378284 69.817383,16.407857 62.670736,16.406812 55.716969,14.142874 49.999512,9.9543811 44.282054,5.7658885 37.328287,3.5005584 30.181641,3.4995117 23.081376,3.5290852 16.180337,5.7929499 10.5,9.9543811"/>
</svg>
`;

var i_tilebag = `
<svg viewBox="0 0 82.02623 91.807907" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<path vector-effect="non-scaling-stroke" d="m 37.270228,25.57068 -2.988272,6.033744"/>
	<path vector-effect="non-scaling-stroke" d="M 31.700043,19.379699 C 27.604552,14.70165 21.061847,11.785446 22.789728,7.1679383 c 1.18445,-3.16527 6.506899,-1.874075 6.506899,-1.874075"/>
	<path vector-effect="non-scaling-stroke" d="m 41.031707,25.57068 h 9.331664 c 1.714902,0 3.095491,-1.380589 3.095491,-3.095491 0,-1.7149 -1.380589,-3.095489 -3.095491,-3.095489 h -9.331664 m 0,6.19098 h -9.331664 c -1.714902,0 -3.095491,-1.380589 -3.095491,-3.095491 0,-1.714901 1.380589,-3.09549 3.095491,-3.09549 h 9.331664"/>
	<path vector-effect="non-scaling-stroke" d="m 49.928344,25.576512 c 5.776774,2.294722 15.718676,11.202015 21.870371,21.384762 6.579123,10.890258 7.187346,21.990105 6.162827,30.04671"/>
	<path vector-effect="non-scaling-stroke" d="m 77.961542,77.007984 c 1.395034,1.896129 5.42859,4.920551 3.59541,8.8651 -2.197152,4.727726 -9.561216,0.753841 -20.490173,3.266969 M 73.449123,82.418867 C 66.884035,88.94173 53.705342,91.864126 41.031707,91.80709 M 4.3057529,76.804103 c -1.235938,2.352269 -5.817305,5.171873 -3.79929,9.21634 1.848596,3.704923 7.702669,1.739123 14.3247931,2.330205 6.622124,0.591082 13.983107,3.456444 26.200451,3.456444"/>
	<path vector-effect="non-scaling-stroke" d="m 44.793186,25.57068 2.988272,6.033744"/>
	<path vector-effect="non-scaling-stroke" d="m 45.436896,19.3797 c 0,0 10.6,-13.8751767 6.524651,-18.2356167 -2.548596,-2.726883 -7.026788,0.276981 -10.92984,0.276981 M 36.626518,19.379699 c 0,0 -10.6,-13.8751757 -6.524651,-18.2356157 2.548596,-2.726883 7.026788,0.27698 10.92984,0.27698"/>
	<path vector-effect="non-scaling-stroke" d="M 32.139394,25.574795 C 26.363259,27.866787 16.41793,36.775985 10.264699,46.961274 3.6855759,57.851532 0.5076869,75.588001 7.5648229,83.147247"/>
	<path vector-effect="non-scaling-stroke" d="m 50.363371,19.3797 c 4.095491,-4.67805 10.638196,-7.594254 8.910315,-12.2117617 -1.18445,-3.165269 -6.506899,-1.874075 -6.506899,-1.874075"/>
	<path vector-effect="non-scaling-stroke" d="M 41.031707,13.030591 V 19.3797"/>
</svg>
`;

var i_shuffle = `
<svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<path vector-effect="non-scaling-stroke" d="m 85,60 15,15 -15,15"/>
	<path vector-effect="non-scaling-stroke" d="m 85,10 15,15 -15,15"/>
	<path vector-effect="non-scaling-stroke" d="M 0,75 H 33.333333 L 66.666666,25 h 33.333333"/>
	<path vector-effect="non-scaling-stroke" d="M 0,25 H 33.333333 L 66.666666,75 H 100"/>
</svg>
`;

var i_cross = `
<svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<path vector-effect="non-scaling-stroke" d="M 0,0 100,100"/>
	<path vector-effect="non-scaling-stroke" d="M 100,0 0,100"/>
</svg>
`;

var i_skip = `
<svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<path vector-effect="non-scaling-stroke" d="M 0,0 V 100 L 50,50 Z"/>
	<path vector-effect="non-scaling-stroke" d="M 50,0 V 100 l 50,-50 z"/>
	<path vector-effect="non-scaling-stroke" d="M 100,0 V 100"/>
</svg>
`;

var i_exchange = `
<svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<path vector-effect="non-scaling-stroke" d="M 0,75 H 100"/>
	<path vector-effect="non-scaling-stroke" d="M 25,50 0,75 25,100"/>
	<path vector-effect="non-scaling-stroke" d="M 100,25 H 0"/>
	<path vector-effect="non-scaling-stroke" d="M 75,50 100,25 75,0"/>
</svg>
`;

var i_play = `
<svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<path vector-effect="non-scaling-stroke" transform="matrix(1.4908027,0,0,1.4908027,-3.883816,-11.366762)" d="m 65.189772,41.16357 -58.0912174,33.53898 0,-67.0779594 z"/>
</svg>
`;

var i_star = `
<svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<path vector-effect="non-scaling-stroke" d="M 50,2.4477542 34.549804,33.754394 0,38.774415 25,63.143554 19.098633,97.552735 50,81.306152 80.901855,97.552735 75,63.143554 100,38.774415 65.450684,33.754394 Z"/>
</svg>
`;



$(`.btn[class*="back-btn"]`).prepend(i_arrowLong);
$(`.btn[class*="continue-btn"]`).append(i_arrowLong);

// Edition screen
$(".edition-icon-info-row").eq(0).prepend(i_cube);
$(".edition-icon-info-row").eq(1).prepend(i_verified);
$(".edition-icon-info-row").eq(2).prepend(i_globe);
$(".edition-box").prepend(i_box);
$(".edition-globe").prepend(i_globe);

// Play screen
$(".user-score-box .player-icon").append(i_user);
$(".bot-score-box .player-icon").append(i_bot);
$(".quit-btn").prepend(i_exit);
$(".start-over-btn").prepend(i_restart);
$(".resign-btn").prepend(i_flag);
$(".shuffle-btn").prepend(i_shuffle);
$(".recall-btn").prepend(i_cross);
$(".skip-btn").prepend(i_skip);
$(".exchange-btn").prepend(i_exchange);
$(".play-btn").prepend(i_play);
$(".tilebag-icon").append(i_tilebag);
$(".tilebag-scroll-text").append(i_arrowLong);
$(".play-history-send-btn").append(i_arrowShort);