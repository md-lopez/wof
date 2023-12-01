var padding = {top:20, right:40, bottom:0, left:0},
            w = 500 - padding.left - padding.right,
            h = 500 - padding.top  - padding.bottom,
            r = Math.min(w, h)/2,
            rotation = 0,
            oldrotation = 0,
            picked = 100000,
            oldpick = [],
            color = d3.scale.category20();//category20c()
            //randomNumbers = getRandomNumbers();
        //http://osric.com/bingo-card-generator/?title=HTML+and+CSS+BINGO!&words=padding%2Cfont-family%2Ccolor%2Cfont-weight%2Cfont-size%2Cbackground-color%2Cnesting%2Cbottom%2Csans-serif%2Cperiod%2Cpound+sign%2C%EF%B9%A4body%EF%B9%A5%2C%EF%B9%A4ul%EF%B9%A5%2C%EF%B9%A4h1%EF%B9%A5%2Cmargin%2C%3C++%3E%2C{+}%2C%EF%B9%A4p%EF%B9%A5%2C%EF%B9%A4!DOCTYPE+html%EF%B9%A5%2C%EF%B9%A4head%EF%B9%A5%2Ccolon%2C%EF%B9%A4style%EF%B9%A5%2C.html%2CHTML%2CCSS%2CJavaScript%2Cborder&freespace=true&freespaceValue=Web+Design+Master&freespaceRandom=false&width=5&height=5&number=35#results
        var data = [
                    {"label":"Flores, Aira Cyrell",  "value":1,  "question":"Flores, Aira Cyrell - ACCOUNTING"},
                    {"label":"Guyud, Rowena",  "value":2,  "question":"Guyud, Rowena - ACCOUNTING"},
                    {"label":"Dela Cruz, Leslie",  "value":3,  "question":"Dela Cruz, Leslie - ADMINISTRATIVE SUPPORT"},
                    {"label":"Dela Cruz Lenice",  "value":4,  "question":"Dela Cruz Lenice - ADMINISTRATIVE SUPPORT"},
                    {"label":"Rodriguez, Lowella ",  "value":5,  "question":"Rodriguez, Lowella - ADMINISTRATIVE SUPPORT"},
                    {"label":"Dunggon, Rosa Cathrina D.",  "value":6,  "question":"Dunggon, Rosa Cathrina D. - ADMINISTRATIVE SUPPORT"},
                    {"label":"Capistrano, Realit",  "value":7,  "question":"Capistrano, Realit - ADMINISTRATIVE SUPPORT"},
                    {"label":"Tamayo Rundstedt",  "value":8,  "question":"Tamayo Rundstedt - ADMINISTRATIVE SUPPORT"},
                    {"label":"Lee Mary Ai Angel Joy",  "value":9,  "question":"Lee Mary Ai Angel Joy - ADMINISTRATIVE SUPPORT"},
                    {"label":"Pearl Amistoso",  "value":10,  "question":"Pearl Amistoso - BUSINESS DEVELOPMENT"},
                    {"label":"Quirante, Jayrod King",  "value":11,  "question":"Quirante, Jayrod King - BUSINESS DEVELOPMENT"},
                    {"label":"De Lima, Lyka",  "value":12,  "question":"De Lima, Lyka - BUSINESS DEVELOPMENT"},
                    {"label":"Bautista, Rowe Brian",  "value":13,  "question":"BUSINESS DEVELOPMENT"},
                    {"label":"Rowlem Asuncion",  "value":14,  "question":"Rowlem Asuncion - BUSINESS DEVELOPMENT"},
                    {"label":"Quejada, Roxanne",  "value":15,  "question":"Quejada, Roxanne- BUSINESS DEVELOPMENT"},
                    {"label":"Ferrer, Chrismar",  "value":16,  "question":"Ferrer, Chrismar - BUSINESS DEVELOPMENT"},
                    {"label":"Umali Alvin",  "value":17,  "question":"Umali Alvin - BUSINESS DEVELOPMENT"},
                    {"label":"Mamuyac, Benz Jenson",  "value":18,  "question":"Mamuyac, Benz Jenson - BUSINESS DEVELOPMENT"},
                    {"label":"Ayop, Juliane Loise",  "value":19,  "question":"Ayop, Juliane Loise- BUSINESS DEVELOPMENT"},
                    {"label":"Lorenzana, Miles",  "value":20,  "question":"Lorenzana, Miles - BUSINESS DEVELOPMENT"},
                    {"label":"Jerex Rivera",  "value":21,  "question":"Jerex Rivera - BUSINESS DEVELOPMENT"},
                    {"label":"Jericho James Reyes",  "value":22,  "question":"Jericho James Reyes - Design4mula"},
                    {"label":"Motio, Heubert",  "value":23,  "question":"Motio, Heubert - GRAFIC MASTERS"},
                    {"label":"Ocampo, Aira Jaime ",  "value":24,  "question":"Ocampo, Aira Jaime - GRAFIC MASTERS"},
                    {"label":"Penos, Dulce ",  "value":25,  "question":"Penos, Dulce - GRAFIC MASTERS"},
                    {"label":"Cultura, Elma Karyne ",  "value":26,  "question":"Cultura, Elma Karyne  - GRAFIC MASTERS"},
                    {"label":"Teodones, Reijant Kirche P.",  "value":27,  "question":"Teodones, Reijant Kirche P. - GRAFIC MASTERS"},
                    {"label":"Aberin, Jaemee",  "value":28,  "question":"Aberin, Jaemee - GRAFIC MASTERS"},
                    {"label":"Rayel, Albert",  "value":29,  "question":"Rayel, Albert - GRAFIC MASTERS"},
                    {"label":"Rodriguez, Patrick",  "value":30,  "question":"Rodriguez, Patrick - "},
                    {"label":"Rigor, Anne",  "value":31,  "question":"Rigor, Anne - GRAFIC MASTERS"},
                    {"label":"San Antonio, Krizzel Gail",  "value":32,  "question":"San Antonio, Krizzel Gail - GRAFIC MASTERS"},
                    {"label":"Melitante Lyca",  "value":33,  "question":"Melitante Lyca - HUMAN RESOURCE"},
                    {"label":"Samillano Eunice",  "value":34,  "question":"Samillano Eunice - HUMAN RESOURCE"},
                    {"label":"Araza Renelle ",  "value":35,  "question":"Araza Renelle - HUMAN RESOURCE"},
                    {"label":"Gurion Mary Margaret ",  "value":36,  "question":"Gurion Mary Margaret  - HUMAN RESOURCE"},
                    {"label":"Ramos, Rosemar",  "value":37,  "question":"Ramos, Rosemar - HUMAN RESOURCE"},
                    {"label":"Reyes Alan D.",  "value":38,  "question":"Reyes Alan D. - HUMAN RESOURCE"},
                    {"label":"Federio, Claire",  "value":39,  "question":"Federio, Claire - HUMAN RESOURCE"},
                    {"label":"Horca, Harvey Stephen ",  "value":40,  "question":"Horca, Harvey Stephen - HUMAN RESOURCE"},
                    {"label":"De Jesus, Rose ",  "value":41,  "question":"De Jesus, Rose - HUMAN RESOURCE"},
                    {"label":"Icamina Mary Lani",  "value":42,  "question":"Icamina Mary Lani - HUMAN RESOURCE"},
                    {"label":"Lemen, Jon Kevin",  "value":43,  "question":"Lemen, Jon Kevin - HYPERNATION"},
                    {"label":"Aguilar, Fausto Rafael Manuel",  "value":44,  "question":"Aguilar, Fausto Rafael Manuel - HYPERNATION"},
                    {"label":"Frias, Amiel",  "value":45,  "question":"Frias, Amiel - HYPERNATION"},
                    {"label":"Javier, Napoleon",  "value":46,  "question":"Javier, Napoleon - HYPERNATION"},
                    {"label":"Miradora, Gian Raphael",  "value":47,  "question":"Miradora, Gian Raphael - HYPERNATION"},
                    {"label":"Vallar, Baeron Jaus",  "value":48,  "question":"Vallar, Baeron Jaus - HYPERNATION"},
                    {"label":"Natividad, Abegail",  "value":49,  "question":"Natividad, Abegail - HYPERNATION"},
                    {"label":"Diego, Datu Elias",  "value":50,  "question":"Diego, Datu Elias - HYPERNATION"},
                    {"label":"Mendoza, John Karlo",  "value":51,  "question":"Mendoza, John Karlo - HYPERNATION"},
                    {"label":"Christian Otico",  "value":52,  "question":"Christian Otico - HYPERNATION"},
                    {"label":"Cadag, Khemberly",  "value":53,  "question":"Cadag, Khemberly - IT"},
                    {"label":"Tubungan Ian Joseph",  "value":54,  "question":"Tubungan Ian Joseph - IT"},
                    {"label":"Gian, Magdadaro",  "value":55,  "question":"Gian Magdadaro - IT"},
                    {"label":"Feliciano Rennan",  "value":56,  "question":"Feliciano Rennan - MADNESS FACTORY"},
                    {"label":"Badillo, Jefferson",  "value":57,  "question":"Badillo, Jefferson - MADNESS FACTORY"},
                    {"label":"Gio Evangelista",  "value":58,  "question":"Gio Evangelista"},
                    {"label":"Lanot, John Julio",  "value":59,  "question":"Lanot, John Julio - OPERATIONS"},
                    {"label":"Alfante, Angela Grace",  "value":60,  "question":"Alfante, Angela Grace - OPERATIONS"},
                    {"label":"Zamora, Jugs",  "value":61,  "question":"Zamora, Jugs - OPERATIONS"},
                    {"label":"Oliva Rodney",  "value":62,  "question":"Oliva Rodney - OPERATIONS"},
                    {"label":"Nicko Fernandez",  "value":63,  "question":"Nicko Fernandez - OPERATIONS"},
                    {"label":"Baclayo, Jyxie",  "value":64,  "question":"Baclayo, Jyxie - PENSAMURAI"},
                    {"label":"Edillo, Carlzhuan",  "value":65,  "question":"Edillo, Carlzhuan - PENSAMURAI"},
                    {"label":"Bernardo, Bernard",  "value":66,  "question":"Bernardo, Bernard - PENSAMURAI"},
                    {"label":"Lorenzo, Christine Joy",  "value":67,  "question":"Lorenzo, Christine Joy - POLYSPARTANS"},
                    {"label":"Jasmin Yap",  "value":68,  "question":"Jasmin Yap - POLYSPARTANS"},
                    {"label":"Bueno, Tomas",  "value":69,  "question":"Bueno, Tomas - POLYSPARTANS"},
                    {"label":"Artificio, Thaddeus Ted",  "value":70,  "question":"Artificio, Thaddeus Ted - POLYSPARTANS"},
                    {"label":"Simon, Joshua Andrew P.",  "value":71,  "question":"Simon, Joshua Andrew P. - POLYSPARTANS"},
                    {"label":"Castuera, Elvis",  "value":72,  "question":"Castuera, Elvis - POLYSPARTANS"},
                    {"label":"Mabbayad, Jerome Christopher",  "value":73,  "question":"Mabbayad, Jerome Christopher - POLYSPARTANS"},
                    {"label":"Ignacio, Jenemart",  "value":74,  "question":"Ignacio, Jenemart - POLYSPARTANS"},
                    {"label":"Nathanel Chua",  "value":75,  "question":"Nathanel Chua - POLYSPARTANS"},
                    {"label":"Marie Ellinore Tabaranza",  "value":76,  "question":"Marie Ellinore Tabaranza - POLYSPARTANS"},
                    {"label":"Bonifacio, Emmerdale",  "value":77,  "question":"Bonifacio, Emmerdale - POSITION 5"},
                    {"label":"Agustin, David",  "value":78,  "question":"Agustin, David - POSITION 5"},
                    {"label":"Bigayan, Noel",  "value":79,  "question":"Bigayan, Noel - PRINTING MAFIA"},
                    {"label":"Menzero, Bong Christopher T.",  "value":80,  "question":"Menzero, Bong Christopher T. - PROJECT MANAGEMENT"},
                    {"label":"Pragacha, Junar",  "value":81,  "question":"Pragacha, Junar - PROJECT MANAGEMENT"},
                    {"label":"Escamillas, Derick Allen",  "value":82,  "question":"Escamillas, Derick Allen - PROJECT MANAGEMENT"},
                    {"label":"Rocabo",  "value":83,  "question":"Rocabo - PROJECT MANAGEMENT"},
                    {"label":"Jeremiah Rey Felipe",  "value":84,  "question":"Jeremiah Rey Felipe - PROJECT MANAGEMENT"},
                    {"label":"Manaog, David Floyd",  "value":85,  "question":"Manaog, David Floyd - PROJECT MANAGEMENT"},
                    {"label":"David Bryan Bamba",  "value":86,  "question":"David Bryan Bamba - PROJECT MANAGEMENT"},
                    {"label":"Joyce Lanot",  "value":87,  "question":"Joyce Lanot - PROJECT MANAGEMENT"},
                    {"label":"Siy, Lawrence",  "value":88,  "question":"Siy, Lawrence - SWAT"},
                    {"label":"Frivaldo, Charls Jude",  "value":89,  "question":"Frivaldo, Charls Jude - SWAT"},
                    {"label":"Venus Camille Torres",  "value":90,  "question":"Venus Camille Torres - SWAT"},
                    {"label":"Guinte, Omerlee",  "value":91,  "question":"Guinte, Omerlee - SWAT"},
                    {"label":"Gatchalian, Rem",  "value":92,  "question":"Gatchalian, Rem - SWAT"},
                    {"label":"Domalaon, Gladys",  "value":93,  "question":"Domalaon, Gladys - SWAT"},
                    {"label":"Ayop, Christine Kelly",  "value":94,  "question":"Ayop, Christine Kelly - TOONEXPERTS"},
                    {"label":"Banzon, Miguel Louis",  "value":95,  "question":"Banzon, Miguel Louis - TOONEXPERTS"},
                    {"label":"Jasper Yu",  "value":96,  "question":"Jasper Yu - TOONEXPERTS"},
                    {"label":"Adam Valenzuela",  "value":97,  "question":"Adam Valenzuela - TOONEXPERTS"},
                    {"label":"Janine Bo",  "value":98,  "question":"Janine Bo - TOONEXPERTS"},
                    {"label":"Hilton Ace Tuvilla",  "value":99,  "question":"Hilton Ace Tuvilla - TOONEXPERTS"},
                    {"label":"Reyes, Laura Izabel",  "value":100,  "question":"Reyes, Laura Izabel - TOONEXPERTS"},
                    {"label":"Dela Pena, Keno Ivann M.",  "value":101,  "question":"Dela Pena, Keno Ivann M. - TOONEXPERTS"},
                    {"label":"Sanchez, Sebastian Karl",  "value":102,  "question":"Sanchez, Sebastian Karl - TOONEXPERTS"},
                    {"label":"matito nav",  "value":103,  "question":"matito nav - TOONEXPERTS"},
                    {"label":"Venida , Jhon Raven",  "value":104,  "question":"Venida , Jhon Raven - TOONEXPERTS"},
                    {"label":"Bernardo, Jessie S.",  "value":105,  "question":"Bernardo, Jessie S. - TOONEXPERTS"},
                    {"label":"CAÑETE JOAQUIN",  "value":106,  "question":"CAÑETE JOAQUIN - TOONEXPERTS"},
                    {"label":"Felicilda, Josiah Maxwell",  "value":107,  "question":"Felicilda, Josiah Maxwell - TOONEXPERTS"},
                    {"label":"Amigo, Geber",  "value":108,  "question":"Amigo, Geber - TOONEXPERTS"},
                    {"label":"ABIAS, BRYAN KENT",  "value":109,  "question":"ABIAS, BRYAN KENT - TOONEXPERTS"},
                    {"label":"Gasga, Alvin Joshua",  "value":110,  "question":"Gasga, Alvin Joshua - TOONEXPERTS"},
                    {"label":"Sadsad, Johann",  "value":111,  "question":"Sadsad, Johann - TOONEXPERTS"},
                    {"label":"Pelaez, Mark Gerald",  "value":112,  "question":"Pelaez, Mark Gerald - TOONEXPERTS"},
                    {"label":"Salcedo Khyle",  "value":113,  "question":"Salcedo Khyle - TOONEXPERTS"},
                    {"label":"Dela Pena, Keno Ivann ",  "value":114,  "question":"Dela Pena, Keno Ivann  - TOONEXPERTS"},
                    {"label":"Regencia, Jan Bryan",  "value":115,  "question":"Regencia, Jan Bryan - TOONEXPERTS"},
                    {"label":"Salud, Kenneth",  "value":116,  "question":"Salud, Kenneth - TOONEXPERTS"},
                    {"label":"Emberga, Rochelle Janica",  "value":117,  "question":"Emberga, Rochelle Janica - TOONEXPERTS"},
                    {"label":"Santiago, Louise Joyce L.",  "value":118,  "question":"Santiago, Louise Joyce L. - TOONEXPERTS"},
                    {"label":"Ponce, Cenon John",  "value":119,  "question":"Ponce, Cenon John - TOONEXPERTS"},
                    {"label":"Ramos, Christian Roi",  "value":120,  "question":"Ramos, Christian Roi - TOONEXPERTS"},
                    {"label":"Arcega, Zybion Jether T.",  "value":121,  "question":"Arcega, Zybion Jether T. - TOONEXPERTS"},
                    {"label":"Soriano, Corizza",  "value":122,  "question":"Soriano, Corizza - TOONEXPERTS"},
                    {"label":"Argañosa, Nicole Anne",  "value":123,  "question":"Argañosa, Nicole Anne - TOONEXPERTS"},
                    {"label":"Villaflores, Anamarie",  "value":124,  "question":"Villaflores, Anamarie - TOONEXPERTS"},
                    {"label":"Estella Reymart",  "value":125,  "question":"Estella Reymart - TOONEXPERTS"},
                    {"label":"See, Ritchmond Jan",  "value":126,  "question":"See, Ritchmond Jan - TOONEXPERTS"},
                    {"label":"Salud, Kevin",  "value":127,  "question":"Salud, Kevin - TOONEXPERTS"},
                    {"label":"Santillan, Raphael james M.",  "value":128,  "question":"Santillan, Raphael james M. - TOONEXPERTS"},
                    {"label":"Bonto, Jerry",  "value":129,  "question":"Bonto, Jerry - UTILITY"},
                    {"label":"Abelada, Lee",  "value":130,  "question":"Abelada, Lee - UTILITY"},
                    {"label":"Morada Miley",  "value":131,  "question":"Morada Miley - VIRAL JEDI"},
                    {"label":"Balatbat, John Carl",  "value":132,  "question":"Balatbat, John Carl - VIRAL JEDI"},
                    {"label":"Gunda, Gian Carlo",  "value":133,  "question":"Gunda, Gian Carlo - VIRAL JEDI"},
                    {"label":"Vito, John Xaviery",  "value":134,  "question":"Vito, John Xaviery - VISUAL MONITORING"},
                    {"label":"Lorenzana EJ",  "value":135,  "question":"Lorenzana EJ - VISUAL MONITORING"},
                    {"label":"Ortego, Albert",  "value":136,  "question":"Ortego, Albert - VISUAL MONITORING"},
 
        ];
        var svg = d3.select('#chart')
            .append("svg")
            .data([data])
            .attr("width",  w + padding.left + padding.right)
            .attr("height", h + padding.top + padding.bottom);
        var container = svg.append("g")
            .attr("class", "chartholder")
            .attr("transform", "translate(" + (w/2 + padding.left) + "," + (h/2 + padding.top) + ")");
        var vis = container
            .append("g");
            
        var pie = d3.layout.pie().sort(null).value(function(d){return 1;});
        // declare an arc generator function
        var arc = d3.svg.arc().outerRadius(r);
        // select paths, use arc generator to draw
        var arcs = vis.selectAll("g.slice")
            .data(pie)
            .enter()
            .append("g")
            .attr("class", "slice");
            
        arcs.append("path")
            .attr("fill", function(d, i){ return color(i); })
            .attr("d", function (d) { return arc(d); });
        // add the text
        arcs.append("text").attr("transform", function(d){
                d.innerRadius = 0;
                d.outerRadius = r;
                d.angle = (d.startAngle + d.endAngle)/2;
                return "rotate(" + (d.angle * 180.3 / Math.PI - 90) + ")translate(" + (d.outerRadius - 2) +")";
            })
            .attr("text-anchor", "end")
            .text( function(d, i) {
                return data[i].label;
            });
        container.on("click", spin);
        function spin(d){
            
            container.on("click", null);
            //all slices have been seen, all done
            console.log("OldPick: " + oldpick.length, "Data length: " + data.length);
            if(oldpick.length == data.length){
                console.log("done");
                container.on("click", null);
                return;
            }
            var  ps       = 360/data.length,
                 pieslice = Math.round(1440/data.length),
                 rng      = Math.floor((Math.random() * 7200) + 360);
                
            rotation = (Math.round(rng / ps) * ps);
            
            picked = Math.round(data.length - (rotation % 360)/ps);
            picked = picked >= data.length ? (picked % data.length) : picked;
            if(oldpick.indexOf(picked) !== -1){
                d3.select(this).call(spin);
                return;
            } else {
                oldpick.push(picked);
            }
            rotation += 90 - Math.round(ps/2);
            vis.transition()
                .duration(10000)
                .attrTween("transform", rotTween)
                .each("end", function(){
                    //mark question as seen
                    d3.select(".slice:nth-child(" + (picked + 1) + ") path")
                        .attr("fill", "#111");
                    //populate question
                    d3.select("#question h1")
                        .text(data[picked].question);
                    oldrotation = rotation;
              
                    /* Get the result value from object "data" */
                    console.log(data[picked].value)
              
                    /* Comment the below line for restrict spin to sngle time */
                    container.on("click", spin);
                });
        }
        //make arrow
        svg.append("g")
            .attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h/2)+padding.top) + ")")
            .append("path")
            .attr("d", "M-" + (r*.15) + ",0L0," + (r*.05) + "L0,-" + (r*.05) + "Z")
            .style({"fill":"black"});
        //draw spin circle
        container.append("circle")
            .attr("cx", 0)
            .attr("cy", 0)
            .attr("r", 60)
            .style({"fill":"white","cursor":"pointer"});
        //spin text
        container.append("text")
            .attr("x", 0)
            .attr("y", 15)
            .attr("text-anchor", "middle")
            .text("SPIN")
            .style({"font-weight":"bold", "font-size":"30px"});
        
        
        function rotTween(to) {
          var i = d3.interpolate(oldrotation % 360, rotation);
          return function(t) {
            return "rotate(" + i(t) + ")";
          };
        }
        
        
        function getRandomNumbers(){
            var array = new Uint16Array(1000);
            var scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);
            if(window.hasOwnProperty("crypto") && typeof window.crypto.getRandomValues === "function"){
                window.crypto.getRandomValues(array);
                console.log("works");
            } else {
                //no support for crypto, get crappy random numbers
                for(var i=0; i < 1000; i++){
                    array[i] = Math.floor(Math.random() * 100000) + 1;
                }
            }
            return array;
        }