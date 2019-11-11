
let knygos =
[
	{
			'Grožinė':[{

				isbn: "52648",
				leidimoMetai: "2000",
				pavadinimas: "Pasakų šaly",
				puslapiuSkaicius: "236"
		},
		{
				isbn: "59231",
				leidimoMetai: "2015",
				pavadinimas: "Žaidimų aikštelė",
				puslapiuSkaicius: "365"
		},
		{
				isbn: "69853",
				leidimoMetai: "1997",
				pavadinimas: "Nežinomasis",
				puslapiuSkaicius: "302"
		},
		{
				isbn: "89564",
				leidimoMetai: "2005",
				pavadinimas: "Oras",
				puslapiuSkaicius: "400"
		}
		]
	},
	{
			'Romanas':[{

				isbn: "54812",
				leidimoMetai: "2019",
				pavadinimas: "Dviračių karalius",
				puslapiuSkaicius: "569"
		},
		{
				isbn: "69853",
				leidimoMetai: "2016",
				pavadinimas: "Tarp dviejų pasaulių",
				puslapiuSkaicius: "453"
		},
		{
				isbn: "69852",
				leidimoMetai: "2009",
				pavadinimas: "Melo pradžiamokslis",
				puslapiuSkaicius: "598"
		},
		{
				isbn: "69420",
				leidimoMetai: "2008",
				pavadinimas: "Laukiniai arkliai",
				puslapiuSkaicius: "689"
		}
		]
	},
	{
			'Drama':[{

				isbn: "78512",
				leidimoMetai: "1999",
				pavadinimas: "Nuobodulys",
				puslapiuSkaicius: "780"
		},
		{
				isbn: "84562",
				leidimoMetai: "2001",
				pavadinimas: "Toliau nuo čia",
				puslapiuSkaicius: "326"
		},
		{
				isbn: "25461",
				leidimoMetai: "2002",
				pavadinimas: "Pabaigos pradžia",
				puslapiuSkaicius: "245"
		},
		{
				isbn: "35629",
				leidimoMetai: "2017",
				pavadinimas: "Obuolys",
				puslapiuSkaicius: "560"
		}
		]
	}
]
for(kategorija of knygos){
	for(duomenys in kategorija)
			console.log("Kategorija - " + duomenys)

	for(apie in duomenys)
		for(info in kategorija[duomenys][apie])
			console.log(info + ' : ' + kategorija[duomenys][apie][info])
}