import React from "react";

const LocationSelect = ({ value, change }) => {
  return (
    <>
      <select name="city" value={value} onChange={change}>
      <option value="">Select City</option>
        <option value="1">Delhi</option>
        <option value="2">Gurgaon</option>
        <option value="3">Bangalore</option>
        <option value="4">Noida</option>
        <option value="5">Chandigarh</option>
        <option value="6">Hyderabad</option>
        <option value="7">Chennai</option>
        <option value="8">Pune</option>
        <option value="9">Kolkata</option>
        <option value="10">Mumbai</option>
        <option value="12">Indore</option>
        <option value="14">Ahmedabad</option>
        <option value="99">Singapore</option>
        <option value="100">San Francisco</option>
        <option value="101">Sydney</option>
        <option value="102">New York</option>
        <option value="103">Boston</option>
        <option value="104">Los Angeles</option>
        <option value="105">Melbourne</option>
        <option value="1001">Tokyo</option>
        <option value="1002">Mexico City</option>
        <option value="1003">Sao Paulo</option>
        <option value="1004">Shanghai</option>
        <option value="1005">Dhaka</option>
        <option value="1006">Buenos Aires</option>
        <option value="1007">Karachi</option>
        <option value="1008">Cairo</option>
        <option value="1009">Rio de Janeiro</option>
        <option value="1010">Osaka</option>
        <option value="1011">Beijing</option>
        <option value="1012">Manila</option>
        <option value="1013">Moscow</option>
        <option value="1014">Istanbul</option>
        <option value="1015">Paris</option>
        <option value="1016">Seoul</option>
        <option value="1017">Jakarta</option>
        <option value="1018">Guangzhou</option>
        <option value="1019">Chicago</option>
        <option value="1020">London</option>
        <option value="1021">Lima</option>
        <option value="1022">Tehran</option>
        <option value="1023">Shenzhen</option>
        <option value="1024">Wuhan</option>
        <option value="1025">Hong Kong</option>
        <option value="1026">Tianjin</option>
        <option value="1027">Taipei</option>
        <option value="1028">Bangkok</option>
        <option value="1029">Lahore</option>
        <option value="1030">Miami</option>
        <option value="1031">Dallas</option>
        <option value="1032">Santiago</option>
        <option value="1033">Philadelphia</option>
        <option value="1034">Madrid</option>
        <option value="1035">Houston</option>
        <option value="1036">Ho Chi Minh City</option>
        <option value="1037">Washington</option>
        <option value="1038">Atlanta</option>
        <option value="1039">Toronto</option>
        <option value="1040">Baghdad</option>
        <option value="1041">Barcelona</option>
        <option value="1042">St. Petersburg</option>
        <option value="1044">Riyadh</option>
        <option value="1045">Hanoi</option>
        <option value="1047">Alexandria</option>
        <option value="1048">Rangoon</option>
        <option value="1049">Phoenix</option>
        <option value="1050">Surat</option>
        <option value="1051">Ankara</option>
        <option value="1052">Monterrey</option>
        <option value="1053">Yokohama</option>
        <option value="1054">Montreal</option>
        <option value="1055">Seattle</option>
        <option value="1056">Detroit</option>
        <option value="1057">Busan</option>
        <option value="1058">Johannesburg</option>
        <option value="1059">Berlin</option>
        <option value="1060">Rome</option>
        <option value="1061">Kabul</option>
        <option value="1062">Athens</option>
        <option value="1063">Cape Town</option>
        <option value="1064">San Diego</option>
        <option value="1065">Casablanca</option>
        <option value="1066">Kanpur</option>
        <option value="1068">Tel Aviv</option>
        <option value="1070">Jeddah</option>
        <option value="1071">Nairobi</option>
        <option value="1072">Benoni</option>
        <option value="1073">Caracas</option>
        <option value="1074">Milan</option>
        <option value="1075">Stuttgart</option>
        <option value="1076">Minneapolis</option>
        <option value="1077">Jaipur</option>
        <option value="1078">Frankfurt</option>
        <option value="1079">Lisbon</option>
        <option value="1080">Tampa</option>
        <option value="1081">Denver</option>
        <option value="1082">Katowice</option>
        <option value="1083">Durban</option>
        <option value="1084">Kiev</option>
        <option value="1085">Lucknow</option>
        <option value="1086">Brooklyn</option>
        <option value="1087">Incheon</option>
        <option value="1089">George Town</option>
        <option value="1090">Nagpur</option>
        <option value="1091">Tunis</option>
        <option value="1092">Vienna</option>
        <option value="1093">Mannheim</option>
        <option value="1094">Queens</option>
        <option value="1095">Vancouver</option>
        <option value="1096">Birmingham</option>
        <option value="1097">Naples</option>
        <option value="1098">Manchester</option>
        <option value="1100">Tashkent</option>
        <option value="1101">Havana</option>
        <option value="1102">Baltimore</option>
        <option value="1103">Patna</option>
        <option value="1104">Santo Domingo</option>
        <option value="1105">Accra</option>
        <option value="1106">Riverside</option>
        <option value="1107">Saint Louis</option>
        <option value="1108">Las Vegas</option>
        <option value="1109">Kuwait</option>
        <option value="1110">Portland</option>
        <option value="1111">San Antonio</option>
        <option value="1112">Bucharest</option>
        <option value="1113">Brisbane</option>
        <option value="1114">Sacramento</option>
        <option value="1115">Beirut</option>
        <option value="1116">San Jose</option>
        <option value="1117">Minsk</option>
        <option value="1118">Kyoto</option>
        <option value="1119">Orlando</option>
        <option value="1120">Hamburg</option>
        <option value="1121">Vadodara</option>
        <option value="1122">Brussels</option>
        <option value="1123">Essen</option>
        <option value="1124">Cleveland</option>
        <option value="1125">Bhopal</option>
        <option value="1126">Pittsburgh</option>
        <option value="1127">Warsaw</option>
        <option value="1129">Coimbatore</option>
        <option value="1130">Budapest</option>
        <option value="1131">Turin</option>
        <option value="1132">Ludhiana</option>
        <option value="1133">Cincinnati</option>
        <option value="1136">Austin</option>
        <option value="1137">Kansas City</option>
        <option value="1138">Agra</option>
        <option value="1140">Indianapolis</option>
        <option value="1141">Tijuana</option>
        <option value="1142">Santiago</option>
        <option value="1143">Perth</option>
        <option value="1144">Toluca</option>
        <option value="1145">Leeds</option>
        <option value="1146">Vizag</option>
        <option value="1147">Columbus</option>
        <option value="1148">Kochi</option>
        <option value="1149">Montevideo</option>
        <option value="1150">Florence</option>
        <option value="1151">Virginia Beach</option>
        <option value="1152">Nasik</option>
        <option value="1153">Charlotte</option>
        <option value="1154">Bronx</option>
        <option value="1155">Doha</option>
        <option value="1156">Kuala Lumpur</option>
        <option value="1157">Lyon</option>
        <option value="1158">Kampala</option>
        <option value="1159">The Hague</option>
        <option value="1160">Marseille</option>
        <option value="1161">Faridabad</option>
        <option value="1163">Dubai</option>
        <option value="1164">Milwaukee</option>
        <option value="1165">Auckland</option>
        <option value="1166">Varanasi</option>
        <option value="1167">Ghaziabad</option>
        <option value="1169">Lusaka</option>
        <option value="1172">Sheffield</option>
        <option value="1174">Duisburg</option>
        <option value="1175">Munich</option>
        <option value="1176">Stockholm</option>
        <option value="1177">Geneva</option>
        <option value="1178">Dusseldorf</option>
        <option value="1179">Seville</option>
        <option value="1180">Amritsar</option>
        <option value="1181">Providence</option>
        <option value="1182">Warangal</option>
        <option value="1183">Allahabad</option>
        <option value="1184">Sofia</option>
        <option value="1185">Prague</option>
        <option value="1186">Glasgow</option>
        <option value="1187">Jacksonville</option>
        <option value="1188">Adelaide</option>
        <option value="1189">Ottawa</option>
        <option value="1190">Srinagar</option>
        <option value="1191">Newcastle</option>
        <option value="1192">Helsinki</option>
        <option value="1193">Calgary</option>
        <option value="1194">Zurich</option>
        <option value="1195">Sharjah</option>
        <option value="1196">Belgrade</option>
        <option value="1197">Salt Lake City</option>
        <option value="1198">Copenhagen</option>
        <option value="1199">Nashville</option>
        <option value="1200">Memphis</option>
        <option value="1201">Richmond</option>
        <option value="1202">Dublin</option>
        <option value="1203">Edmonton</option>
        <option value="1204">Lille</option>
        <option value="1205">Amsterdam</option>
        <option value="1206">Jerusalem</option>
        <option value="1207">New Orleans</option>
        <option value="1208">Raleigh</option>
        <option value="1209">Louisville</option>
        <option value="1211">Rotterdam</option>
        <option value="1212">Cologne</option>
        <option value="1213">Jodhpur</option>
        <option value="1214">Guwahati</option>
        <option value="1215">Gwalior</option>
        <option value="1216">Kelang</option>
        <option value="1217">Oklahoma City</option>
        <option value="1218">Salerno</option>
        <option value="1219">Thiruvananthapuram</option>
        <option value="1220">Kozhikode</option>
        <option value="1221">Tiruchirappalli</option>
        <option value="1222">Bridgeport</option>
        <option value="1223">Kingston</option>
        <option value="1225">Nice</option>
        <option value="1226">Buffalo</option>
        <option value="1227">Managua</option>
        <option value="1228">Antwerp</option>
        <option value="1229">Hartford</option>
        <option value="1230">Kathmandu</option>
        <option value="1232">Mysore</option>
        <option value="1233">Newcastle</option>
        <option value="1236">Fort Worth</option>
        <option value="1238">Tucson</option>
        <option value="1240">Cardiff</option>
        <option value="1243">El Paso</option>
        <option value="1244">Bhubaneshwar</option>
        <option value="1245">Oslo</option>
        <option value="1246">Honolulu</option>
        <option value="1249">Omaha</option>
        <option value="1251">Nottingham</option>
        <option value="1252">Liverpool</option>
        <option value="1253">Bordeaux</option>
        <option value="1254">McAllen</option>
        <option value="1257">Albuquerque</option>
        <option value="1259">Birmingham</option>
        <option value="1261">Muscat</option>
        <option value="1262">Bremen</option>
        <option value="1263">Zagreb</option>
        <option value="1264">Hannover</option>
        <option value="1265">Hamilton</option>
        <option value="1266">Dayton</option>
        <option value="1268">Rochester</option>
        <option value="1269">Sarasota</option>
        <option value="1271">Fresno</option>
        <option value="1272">Allentown</option>
        <option value="1273">Bonn</option>
        <option value="1275">Tulsa</option>
        <option value="1276">Concord</option>
        <option value="1278">Utrecht</option>
        <option value="1279">Winnipeg</option>
        <option value="1280">Cape Coral</option>
        <option value="1281">Springfield</option>
        <option value="1282">Quebec</option>
        <option value="1283">Colorado Springs</option>
        <option value="1284">Southend-on-Sea</option>
        <option value="1285">Dresden</option>
        <option value="1287">Charleston</option>
        <option value="1288">Abu Dhabi</option>
        <option value="1289">Grand Rapids</option>
        <option value="1290">Mission Viejo</option>
        <option value="1291">Albany</option>
        <option value="1292">Port Louis</option>
        <option value="1293">Dortmund</option>
        <option value="1294">Knoxville</option>
        <option value="1295">Baton Rouge</option>
        <option value="1296">Bakersfield</option>
        <option value="1297">Ogden</option>
        <option value="1298">Macau</option>
        <option value="1299">New Haven</option>
        <option value="1300">Columbia</option>
        <option value="1301">Akron</option>
        <option value="1302">Manama</option>
        <option value="1304">Bristol</option>
        <option value="1305">Leipzig</option>
        <option value="1309">Gold Coast</option>
        <option value="1310">Edinburgh</option>
        <option value="1311">Provo</option>
        <option value="1312">ViÃ±a del Mar</option>
        <option value="1313">Brighton</option>
        <option value="1314">Bradford</option>
        <option value="1315">Bari</option>
        <option value="1316">Worcester</option>
        <option value="1317">Mesa</option>
        <option value="1318">Palm Bay</option>
        <option value="1319">Toledo</option>
        <option value="1320">Bologna</option>
        <option value="1321">Murrieta</option>
        <option value="1322">Wichita</option>
        <option value="1323">Des Moines</option>
        <option value="1324">Homyel</option>
        <option value="1325">Nazret</option>
        <option value="1326">Staten Island</option>
        <option value="1327">Long Beach</option>
        <option value="1328">Greenville</option>
        <option value="1330">Cranbourne</option>
        <option value="1331">Leicester</option>
        <option value="1333">Sunderland</option>
        <option value="1334">Oshawa</option>
        <option value="1335">Belfast</option>
        <option value="1336">Gent</option>
        <option value="1337">Little Rock</option>
        <option value="1338">Portsmouth</option>
        <option value="1339">Harrisburg</option>
        <option value="1340">Denton</option>
        <option value="1341">Strasbourg</option>
        <option value="1342">Madison</option>
        <option value="1344">Nantes</option>
        <option value="1345">Reno</option>
        <option value="1347">Port Saint Lucie</option>
        <option value="1348">Bournemouth</option>
        <option value="1349">Heidelberg</option>
        <option value="1350">Oakland</option>
        <option value="1351">Bratislava</option>
        <option value="1354">Middlesbrough</option>
        <option value="1366">Eindhoven</option>
        <option value="1367">Chiang Mai</option>
        <option value="1374">Tallinn</option>
        <option value="1375">Wellington</option>
        <option value="1376">Stoke</option>
        <option value="1381">Grenoble</option>
        <option value="1382">Coventry</option>
        <option value="1383">Alajuela</option>
        <option value="1385">Southampton</option>
        <option value="1396">Christchurch</option>
        <option value="1397">Tamale</option>
        <option value="1398">Halifax</option>
        <option value="1424">Canberra</option>
        <option value="1425">Montpellier</option>
        <option value="1426">Goa</option>
        <option value="1427">Douala</option>
        <option value="1428">Colombo</option>
        <option value="1429">Dehradun</option>
        <option value="1430">Karwar</option>
        <option value="1431">Erode</option>
        <option value="1432">Sangli</option>
        <option value="1433">Vijayawada</option>
        <option value="1434">Shimla</option>
        <option value="1435">Jamshedpur</option>
        <option value="1436">Blackpool</option>
        <option value="1437">Bangalore</option>
        <option value="1438">Bilaspur</option>
        <option value="1439">Rwanda </option>
        <option value="1440">Patiala</option>
        <option value="1441">Abu Dhabi</option>
        <option value="1442">SWEDEN</option>
        <option value="1443">SOLAPUR</option>
        <option value="1444">Andhra Pradesh</option>
        <option value="1445">VIZIANAGARAM</option>
        <option value="1446">Aurangabad</option>
        <option value="1447">Hubballi</option>
        <option value="1448">Raipur</option>
        <option value="1449">Ranchi</option>
        <option value="1450">BAREILLY</option>
        <option value="1451">Dhupguri</option>
        <option value="1452">Gorakhpur</option>
        <option value="1453">Jammu</option>
        <option value="1454">Udaipur</option>
        <option value="1455">Pondicherry</option>
        <option value="1456">Greymouth</option>
        <option value="1457">Mirzapur</option>
        <option value="1458">Lagos</option>
        <option value="1459">Algiers</option>
        <option value="1460">Luxembourg</option>
        <option value="1461">Abidjan</option>
        <option value="1462">Kohima</option>
        <option value="1463">Cavan</option>
        <option value="1464">Cambridge</option>
        <option value="1465">Islamabad</option>
        <option value="1466">Milton Keyne</option>
        <option value="1467">Kyiv</option>
        <option value="1468">Darjeeling</option>
        <option value="1469">Blantyre</option>
        <option value="1470">Shillong</option>
        <option value="1471">Asansol</option>
        <option value="1473">Harare</option>
        <option value="1474">Jamnagar</option>
        <option value="1476">Kottayam</option>
        <option value="1477">Rajkot</option>
        <option value="1478">Jhansi</option>
        <option value="1479">Vilnius</option>
        <option value="1480">Amman</option>
        <option value="1481">Male</option>
        <option value="1482">Nainital</option>
        <option value="1483">Satara</option>
        <option value="1484">Kodaikanal</option>
        <option value="1485">Limassol</option>
        <option value="1486">Addis Ababa</option>
        <option value="1487">Chandrapur</option>
        <option value="1488">Siliguri</option>
        <option value="1489">Dar es Salaam</option>
        <option value="1490">Dodoma</option>
        <option value="1491">Madurai</option>
        <option value="1492">Imphal</option>
        <option value="1494">Dharamshala</option>
        <option value="1495">Mangalore</option>
        <option value="1496">Agartala</option>
        <option value="1497">Jaunpur</option>
        <option value="1498">Jalgaon</option>
        <option value="1499">Botswana</option>
        <option value="1500">Akola</option>
        <option value="1501">Kolhapur</option>
        <option value="1502">Amravati</option>
        <option value="1503">Haridwar</option>
        <option value="1504">Karnal</option>
        <option value="1505">Gurdaspur</option>
        <option value="1506">Sindhudurg</option>
        <option value="1507">Jalandhar</option>
        <option value="1508">Kakinada</option>
        <option value="1509">Kurukshetra</option>
        <option value="1510">Ratlam</option>
        <option value="1511">Kota</option>
        <option value="1512">Bhavnagar</option>
        <option value="1513">Aizawl</option>
        <option value="1514">Raichur</option>
        <option value="1515">Aligarh</option>
        <option value="1516">Cary</option>
        <option value="1518">Motihari</option>
        <option value="1519">Bathinda</option>
        <option value="1520">Valsad</option>
        <option value="1522">Trivandrum</option>
        <option value="1523">Kerala</option>
        <option value="1524">Ratnagiri</option>
        <option value="1525">Andaman and Nicobar</option>
        <option value="1526">Rohtak</option>
      </select>
    </>
  );
};

export default LocationSelect;