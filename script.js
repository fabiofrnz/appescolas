document.addEventListener('DOMContentLoaded', () => {

    // --- DADOS DAS ESCOLAS (Seu CSV original) ---
    const dados_csv_string = `firmware e p2a,INEP,IP,Colégio,Município,Educatrons,Pontos lógicos,Positivo D3400,Ed.Especial,Tablet,Chromebooks,Chromebooks novos2025,Dell,BR Profissionalizante,Qtd. Computadores,Situação da internet,AP edge-core,TP-link,Edge-core,Observações,Lenovo 2025
p5x,41059891,10.218.164.0/22,CARLOS VENTURA C E EF M,CARAMBEI,13,13,23,1,40,11,50,0,0,22,Fibra,,ok,ok,,
p5x,41387007,10.160.76.0/24,DARLENE DE JP MOREIRA E E PROF EF,CARAMBEI,4,10,18,1,0,0,,0,0,9,Satélite,10.160.76.21,ok,ok,,
p5x,41352718,10.130.168.0/23,EURICO BATISTA ROSAS C E EF M,CARAMBEI,9,9,3,1,30,11,,20,0,25,Fibra,,ok,ok(está em primeiro),,
p5x,41060296,10.214.180.0/22,JULIA WANDERLEY C E EF M PROFIS,CARAMBEI,12,12,0,1,40,11,,0,22,49,Fibra,,ok,ok,"Obs.: A conexão de internet da Ligga está apresentando instabilidade. É um problema recorrente que está acontecendo em quase todo o Estado.",,
p5x,41148630,10.130.212.0/23,ZILDA ARNS NEUMANN C E C DRA EFM,CARAMBEI,7,7,13,0,15,5,,0,0,10,fibra,,ok,ok,,
p5x,41059620,10.214.216.0/22,AMANDA CARNEIRO DE MELLO C E EF M,CASTRO,12,12,23,1,30,11,,0,0,62,Fibra,,,,,
p5x,41059638,10.215.152.0/22,ANTONIO E MARCOS CAVANIS C E EF M,CASTRO,12,12,24,1,40,2,,0,0,29,Fibra,,,,,
p5x,41059778,10.131.16.0/23,BASILIO CHRUM C E PROF EF M,CASTRO,5,5,18,1,15,11,,0,0,20,Fibra,,,,,
p5x,41059905,10.131.10.0/23,CASTROLANDA E E DO C EF,CASTRO,6 + 2,5,21,0,15,5,,0,0,15,Fibra,,,,,
p5x,41143671,10.131.34.0/23,CEEBJA PROFA AMELIA MADAL S B VAZ EF M,CASTRO,8,9,2,1,15,22,,0,0,34,Fibra,,,,,
p5x,41374029,10.211.84.0/22,CENTRO EST EDUC PROFIS OLEGARIO MACEDO,CASTRO,11,11,4,0,20,0,,0,0,34,Fibra,,,,,
p5x,41059972,10.220.232.0/22,EDINA W SVIERCOSKI C E C PROFA EF M,CASTRO,10,12,0,2,20,22,,0,0,51,Fibra,,,,,
p5x,41060040,10.160.84.0/24,FABIANA PIMENTEL C E DO C PROF EF M,CASTRO,12,16,22,1,30,15,,0,0,34,Satélite,,,,,
p5x,41143680,10.131.12.0/23,JARDIM DAS ARAUCARIAS E E EF,CASTRO,9,10,3,1,30,0,,20,0,37,Fibra,,,,,
p5x,41060253,10.212.100.0/22,JOANA T PEREIRA C E PROF EF M,CASTRO,10,10,3,1,30,11,,20,0,35,Fibra,,,,,
p5x,41060415,10.132.52.0/22,MARIA AP NISGOSKI C E PROFA EF M PROFIS,CASTRO,8,8,4,2,30,0,,20,0,39,Fibra,,,,,
p5x,41060458,10.131.14.0/23,MATILDE BAER E E PROFA EF,CASTRO,4,6,1,1,15,0,,20,0,25,Fibra,,,,,
p5x,41060466,10.131.30.0/23,NICOLAU BALTASAR C E PE EF M,CASTRO,9,9,3,1,20,11,,20,0,30,Fibra,,,,,
p5x,41373960,10.131.32.0/23,NICOLAU HAMPF C E PROF EF M,CASTRO,6,9,2,1,20,10,,20,0,39,Fibra,,,,,
p5x,41060725,10.160.86.0/24,SALVADOR A SOBRINHO C E C PROF EF M,CASTRO,5,5,18,1,15,11,,0,0,8,satélite,,,,,
p5x,41060814,10.220.236.0/22,SAO SEBASTIAO DO MARACANA C E C EF M,CASTRO,4,4,10,1,15,5,,0,0,5,Fibra,,,,,
p5x,41060911,10.217.128.0/22,VESPASIANO C MELLO C E MJR EF M PROFIS N,CASTRO,18,18,0,1,50,11,,0,22,33,Fibra,,,,,
p5x,41109570,10.215.96.0/22,ALCIDES MUNHOZ C E EF M,IMBITUVA,13,13,22,2,40,11,,0,0,55,Fibra,,,,,
p5x,41379667,10.211.72.0/22,JEOCONDO WALDEMAR BOBATO C E C EFM,IMBITUVA,13,16,4,0,30,5,,20,0,29,Fibra,,,,,
p5x,41369475,10.135.126.0/23,MARIA EUGENIA DE C LEJAMBRE E E DO C EF,IMBITUVA,4,4,13,0,0,0,,0,0,14,Fibra,,,,,
p5x,41110080,10.223.120.0/21,SANTO ANTONIO C E EF M,IMBITUVA,18,18,25,3,50,11,,0,0,70,Fibra,,,,,
p5x,41110200,10.215.164.0/22,CLAUDINO DOS SANTOS CE DR EF M N PROFIS,IPIRANGA,13,14,25,1,40,11,,0,0,24,Fibra,,,,,
p2a,41385659,10.160.164.0/24,HENRIQUE DENCK C E C EFM,IPIRANGA,7,7,18,1,15,0,,0,0,14,Satélite,,,,,
p5x,41110366,10.221.8.0/22,LUIZ DE JESUS CORREIA C E C E F M,IPIRANGA,8,10,11,0,15,5,,0,0,15,fibra,,,,,
p5x,41387066,10.160.166.0/24,LUSTOSA C E C DE EF M,IPIRANGA,8,8,18,1,15,0,,0,0,35,Satélite,,,,,
p5x,41110609,10.213.12.0/22,ARTHUR DA C E SILVA C E EF M,IVAI,10,10,22,1,30,11,,0,0,52,Fibra,,,,,
p5x,41110684,10.221.156.0/22,GIL STEIN FERREIRA E E EF,IVAI,9,10,20,1,20,0,,0,0,39,Fibra,,,,,
p5x,41110714,10.135.242.0/23,INE MESSIAS ERDMANN C E PROFA EF M,IVAI,9,11,0,1,15,10,,20,0,28,Fibra,,,,,
p5x,41110862,10.221.16.0/22,SAGRADO CORACAO DE MARIA C E EF M,IVAI,7,7,1,0,15,11,,20,0,28,Fibra,,,,,
p5x,41060997,10.219.252.0/22,ALBERTO GONCALVES C E D EF M PROFIS N,PALMEIRA,14,14,25,1,40,0,,0,0,71,Fibra,,,,,
,41061012,,AMADEU MARIO MARGRAF C E EF M,PALMEIRA,5,11,19,1,0,0,,0,0,14,Fibra,,,,,
p5x,41061098,10.221.80.0/22,BOM JESUS DO MONTE C E C EF M,PALMEIRA,4,7,9,1,0,10,,0,0,13,Fibra,,,,,
p5x,41374070,10.211.180.0/22,CENTRO EST EDUC PROFIS AG GETULIO VARGAS,PALMEIRA,10,10,20,0,20,0,,0,0,54,Fibra,,,,,
p5x,41061217,10.139.58.0/23,DAVID CARNEIRO C E CEL EF M,PALMEIRA,8,10,1,1,15,11,,20,0,39,Fibra,,,,,
,41061284,10.161.21.0/24,FLAVIO SANTOS E E C EF,PALMEIRA,4,4,18,1,0,0,,0,0,9,Satélite,,,,,
p5x,41061330,10.221.92.0/22,FRITZ KLIEWER C E C EF M,PALMEIRA,9,9,19,1,15,5,,0,0,13,Fibra,,,,,
p5x,41061381,10.221.84.0/22,GUARAUNINHA E E DO C DE EF,PALMEIRA,4,4,19,1,0,0,,0,0,9,Fibra,,,,,
p5x,41061390,10.221.76.0/22,HENRIQUE STADLER C E C EF M,PALMEIRA,8,8,19,1,15,11,,0,0,36,Fibra,,,,,
,41061470,10.161.23.0/24,JOAO SIDORKO E E C EF,PALMEIRA,4,4,17,1,0,0,,0,0,10,Fibra,,,,,
p5x,41359992,10.221.96.0/22,LEONARDO SALATA E E C PROF EF,PALMEIRA,4,5,18,1,0,0,,0,0,6,Fibra,,,,,
p5x,41061624,10.221.72.0/22,PINHEIRAL DE BAIXO C E C DE EF M,PALMEIRA,8,8,11,0,15,11,,0,0,5,Fibra,,,,,
,41061683,10.161.25.0/24,QUERO QUERO E E DO C EF,PALMEIRA,4,4,11,1,0,0,,0,0,11,Satélite,,,,,
p5x,41061748,10.215.28.0/22,SAO JUDAS TADEU C E EF M,PALMEIRA,12,12,0,1,30,0,,0,22,44,Fibra,,,,,
,41383060,10.161.53.0/24,ESCOLA ESTADUAL DO CAMPO DE PIRAI MIRIM PEDRO SOLEK- EF,PIRAI DO SUL,4,6,20,0,0,0,,0,0,8,Satélite,,,,,
,41383761,10.161.52.0/24,EURIDES MARTINS E E C EF,PIRAI DO SUL,4,4,20,0,0,0,,0,0,11,Satélite,,,,,
p5x,41058810,10.218.52.0/22,JORGE Q NETTO C E EF M PROFIS,PIRAI DO SUL,13,16,21,3,40,4,,0,0,50,Fibra,,,,,
p5x,41058844,10.212.140.0/22,LEANDRO M DA COSTA C E PROF EF M,PIRAI DO SUL,11,11,23,1,30,5,,0,0,41,Fibra,,,,,
,41383966,10.131.64.0/22,RESSACA PADRE ANCHIETA E E DA EF,PIRAI DO SUL,5,5,20,0,0,0,,0,0,5,fibra,,,,,
p5x,41059034,10.140.64.0/23,RIVADAVIA VARGAS C E EF M,PIRAI DO SUL,8,8,19,1,20,0,,0,0,44,Fibra,,,,,
p5x,41063503,10.140.206.0/23,31 DE MARCO C E EF M,PONTA GROSSA,11,11,16,1,40,0,,0,0,37,Fibra,,,,,
p5x,41061888,10.140.208.0/23,ALBERTO REBELLO VALENTE E E EF*,PONTA GROSSA,4,4,19,1,15,0,,0,0,11,Fibra,,,,,
p5x,41061969,10.140.148.0/23,AMALIO PINHEIRO C E PROF EF M,PONTA GROSSA,10 + 4,12,3,1,30,11,,20,0,48,Fibra,,,,,
p5x,41378962,10.140.174.0/23,ANA DIVANIR BORATTO C E EFM,PONTA GROSSA,6,6,4,1,30,5,,20,0,30,Fibra,,,,,
p5x,41062000,10.213.156.0/22,ANTONIO SAMPAIO C E GAL EF M,PONTA GROSSA,11,11,23,1,30,11,,0,0,44,Fibra,,,,,
p5x,41062051,10.210.40.0/22,ARNALDO JANSEN C E PE EF M,PONTA GROSSA,9,9,24,1,40,9,,0,0,53,Fibra,,,,,
p5x,41062086,10.210.212.0/22,AUGUSTO RIBAS C A E EM PROFIS,PONTA GROSSA,9,9,23,0,20,0,,0,0,24,Fibra,,,,,
p5x,41062108,10.210.84.0/22,BECKER E SILVA C E PROF EF M,PONTA GROSSA,12,12,0,1,30,5,,0,22,20,Fibra,,,,,
p5x,41062124,10.140.210.0/23,BENTO MOSSURUNGA C E MTO EFM,PONTA GROSSA,6,6,21,1,30,10,,0,0,14,Fibra,,,,,
p5x,41378920,10.221.120.0/22,BRASILIO A DA SILVA C E C EF M,PONTA GROSSA,5,5,19,1,15,0,,0,0,5,Fibra,,,,,
p2a,41062191,10.219.148.0/22,CARLOS ZELESNY C E PE EF M,PONTA GROSSA,15,15,24,1,50,11,,0,0,48,Fibra,,,,,
p5x,41387910,10.140.170.0/23,CEEBJA PROF ODAIR PASQUALINI EF M,PONTA GROSSA,8,8,20,0,0,0,,0,0,16,Fibra,"IP Hidelbrando","10.137.250.0/24",,,
p5x,41361881,10.140.188.0/23,CEEBJA PROF PASCHOAL S ROSA EF M,PONTA GROSSA,16,20,15,2,30,0,,0,0,42,Fibra,,,,,
p5x,41588894,10.223.104.0/21,CENTRO EST EDUC PROFIS DE PONTA GROSSA,PONTA GROSSA,8,8,0,0,50,10,,0,22,57,Fibra,,,,,
p5x,41062302,10.215.200.0/22,COLARES C E PROF EF M,PONTA GROSSA,12,15,6,1,40,11,,20,0,30,Fibra,,,,,
Não vou fazer,41148622,10.209.112.0/23,COLONIA DONA LUIZA C E EM,PONTA GROSSA,8,8,18,2,15,22,,0,0,29,Fibra,,,,,
p5x,41062310,10.212.72.0/22,CORREIA C E SEN EF M PROFIS,PONTA GROSSA,13,13,1,2,20,33,,18,0,33,Fibra,,,,,
p5x,41378946,10.140.240.0/23,DE VILA VELHA E E C EF,PONTA GROSSA,2,2,9,1,0,0,,0,0,7,Fibra,,,,,
p5x,41361768,10.130.180.0/22,DORAH G DAITSCHMAN C E EF M,PONTA GROSSA,8,8,2,1,20,11,,20,0,27,Fibra,,,,,
p5x,41063236,10.214.232.0/22,DOROTEU DE PADUA C E FR EF M,PONTA GROSSA,12,12,5,1,30,11,,20,0,28,Fibra,,,,,
p5x,41354273,10.140.160.0/23,EDISON PIETROBELLI C E PROF EF M,PONTA GROSSA,9,9,4,1,30,10,,20,0,45,Fibra,,,,,
p5x,41062450,10.222.168.0/21,ELZIRA C DE SA C E PROFA EF M PROFIS,PONTA GROSSA,23,23,14,1,60,11,,0,0,43,Fibra,,,,,
p5x,41062469,10.213.4.0/22,EPAMINONDAS N RIBAS C E DR EF M PROFIS,PONTA GROSSA,12,13,0,1,30,11,,0,22,44,Fibra,,,,,
p5x,41062540,10.140.212.0/23,ESPIRITO SANTO C E EF M,PONTA GROSSA,6,6,16,1,20,10,,0,0,44,Fibra,,,,,
p2a,41062558,10.140.236.0/23,EUGENIO MALANSKI C E PROF EF M,PONTA GROSSA,9,9,21,1,40,11,,0,0,45,Fibra,,,,,
p5x,41378938,10.140.234.0/23,FRANCISCO PIRES MACHADO C E EF M,PONTA GROSSA,15,6,2,2,30,33,,20,0,23,Fibra,,,,,
p5x,41145151,10.140.232.0/23,HALIA T GRUBA E E PROFA EF,PONTA GROSSA,6,6,2,1,20,0,,20,0,35,Fibra,,,,,
p5x,41062272,10.222.136.0/21,INST ED E PROF CESAR P MARTINEZ F M N P,PONTA GROSSA,22,22,26,2,50,11,,0,0,25,Fibra,,,,,
p5x,41378954,10.140.162.0/23,IOLANDO TAQUES FONSECA E E PROF EF,PONTA GROSSA,5,7,0,1,15,0,,20,0,26,Fibra,,,,,
p5x,41062744,10.214.44.0/22,JESUS DIVINO OPERARIO E E EF,PONTA GROSSA,12,12,5,1,30,0,,20,0,30,Fibra,,,,,
p5x,41062809,10.217.208.0/22,JOAO R V B DU VERNAY CE PROF EF M PROFIS,PONTA GROSSA,20,20,11,1,60,11,,27,0,95,Fibra,,,,,
p5x,41062833,10.212.12.0/22,JOSE ELIAS DA ROCHA C E EF M,PONTA GROSSA,10 + 1,11,9,1,30,5,,27,0,38,Fibra,,,,,
p5x,41062850,10.214.80.0/22,JOSE GOMES DO AMARAL C E PROF EFM,PONTA GROSSA,12,12,26,1,50,11,,0,0,52,Fibra,,,,,
p5x,41062892,10.211.124.0/22,JULIO TEODORICO C E PROF EF M PROFIS,PONTA GROSSA,11,11,22,1,30,0,,0,0,29,Fibra,,,,,
p5x,41062914,10.216.240.0/22,KENNEDY C E PRES EF M PROFIS,PONTA GROSSA,13,15,0,1,40,11,,60,22,75,Fibra,,,,,
p2a,41062949,10.213.92.0/22,LINDA S BACILA C E PROFA EF M,PONTA GROSSA,10,11,5,1,30,8,,20,0,35,Fibra,,,,,
,41378911,10.161.65.0/24,MARGARETE M MAZUR E E C PROFA EF,PONTA GROSSA,4,4,11,0,0,0,,0,0,11,Satélite,,,,,
p5x,41063023,10.211.252.0/22,MEDALHA MILAGROSA E E EF,PONTA GROSSA,10,10,23,1,30,0,,0,0,32,Fibra,,,,,
p5x,41063031,10.211.92.0/22,MENELEU A TORRES C E PROF EF M PROFIS,PONTA GROSSA,9 + 4,9,22,1,30,11,,0,0,43,Fibra,,,,,
p5x,41063058,10.221.152.0/22,MONTEIRO LOBATO E E EF,PONTA GROSSA,6,6,12,1,20,10,,0,0,42,Fibra,,,,,
p5x,41063082,10.221.124.0/22,MUNHOZ DA ROCHA C E DO C DR EF M,PONTA GROSSA,4,4,0,1,15,5,,27,0,30,Fibra,,,,,
p5x,41063139,10.213.160.0/22,NOSSA SRA DA GLORIA C E EF M,PONTA GROSSA,10,10,22,1,30,0,,0,0,42,Fibra,,,,,
p5x,41063147,10.211.76.0/22,NOSSA SRA DAS GRACAS C E EF M,PONTA GROSSA,8,8,24,1,40,6,,0,0,34,Fibra,,,,,
,_00002077,10.74.9.0/23,NRE PONTA GROSSA,PONTA GROSSA,2,20,,,1,39,,0,0,,,Fibra,,,,,
p5x,41063155,10.214.188.0/22,OSORIO C E GAL EF M,PONTA GROSSA,14,14,24,1,30,11,,0,0,42,Fibra,,,,,
p5x,41063201,10.140.230.0/23,PEDRO GRZELCZAKI C E PE EF M,PONTA GROSSA,6 + 1,6,22,1,30,11,,0,0,38,Fibra,,,,,
p5x,41063287,10.210.240.0/22,POLIVALENTE C E EF M PROFIS,PONTA GROSSA,12,15,17,4,30,46,,0,0,51,Fibra,,,,,
p5x,41063325,10.222.240.0/21,REGENTE FEIJO C E EM PROFIS,PONTA GROSSA,17,24,0,1,60,11,,0,22,60,Fibra,,,,,
p5x,41063384,10.140.218.0/23,SANTA MARIA C E EF M,PONTA GROSSA,7,7,4,1,30,0,,27,0,52,Fibra,,,,,
p5x,41063481,10.130.172.0/22,SIRLEY JAGAS C E PROFA EF M,PONTA GROSSA,10,10,5,1,30,11,,20,0,32,Fibra,,,,,
p5x,41122453,10.141.2.0/23,AMAZONAS C E CEL EF M,PORTO AMAZONAS,7,7,19,1,20,11,,0,0,55,Fibra,,,,,
p5x,41122550,10.141.0.0/23,OLIVIO BELICH E E EF,PORTO AMAZONAS,4,5,18,1,0,10,,0,0,26,Fibra,,,,,
p5x,41145410,10.220.180.0/22,ADELAIDE W PRINS C E DO C PROF EF M,SAO JOAO DO TRIUNFO,4,4,19,1,15,5,,0,0,30,Fibra,,,,,
p5x,41118855,10.220.176.0/22,ARGEMIRO L DE LIMA C E DO C PROF EF M,SAO JOAO DO TRIUNFO,5,5,19,1,15,11,,0,0,16,Fibra,,,,,
p5x,41119088,10.214.48.0/22,FRANCISCO NEVES FILHO C E EF M N,SAO JOAO DO TRIUNFO,14,14,22,2,30,11,,0,0,30,Fibra,,,,,
p5x,41598164,10.220.184.0/22,VILA PALMIRA C E C DE EF M,SAO JOAO DO TRIUNFO,4,4,0,1,15,11,,20,0,20,Fibra,,,,,
p5x,41357051,10.161.195.0/24,BALDOMERO B TAQUES C E C E F M P,TIBAGI,9,9,20,1,20,11,,0,0,41,Satélite,,,,,
p5x,41056922,10.211.156.0/22,IRENIO M NASCIMENTO C E EF M N,TIBAGI,11,11,22,1,30,5,,0,0,52,Fibra,,,,,
p5x,41357035,10.161.196.0/24,JOAO FRANCISCO DA SILVA C E C EF M,TIBAGI,7,7,2,1,20,11,,20,0,32,Satélite,10161196146,,,
p5x,41056957,10.212.112.0/22,LEOPOLDINA B PEDROSO C E PROFA EF M,TIBAGI,12,12,25,0,30,11,,0,0,41,Fibra,,,,,
`;

    // --- DADOS DOS ACCESS POINTS (Extraído do arquivo enviado) ---
    const dados_ap_string = `AP Group,IP Address,AP MAC,AP Name,Model,Status,Model,Channel (2.4G),Channel (5G),External IP,AP Firmware,Serial,Configuration Status,PoE Port,Management VLAN,Location,WLAN Group (2.4G),WLAN Group (5G)
31 DE MARCO,10.140.206.42,38:45:3B:07:DB:00,RuckusAP,R320,Online,R320,11 (20MHz),161 (80MHz),10.140.206.42,6.1.0.0.1595,442109002851,Up-to-date,1000Mbps,1,,default,default
31 DE MARCO,10.140.206.43,38:45:3B:07:C3:30,RuckusAP,R320,Online,R320,11 (20MHz),60 (80MHz),10.140.206.43,6.1.0.0.1595,442109002627,Up-to-date,1000Mbps,1,,default,default
31 DE MARCO,10.140.206.44,38:45:3B:07:19:A0,RuckusAP,R320,Online,R320,6 (20MHz),108 (80MHz),10.140.206.44,6.1.0.0.1595,442109002209,Up-to-date,1000Mbps,1,,default,default
31 DE MARCO,10.140.206.45,38:45:3B:07:22:10,RuckusAP,R320,Online,R320,6 (20MHz),116 (80MHz),10.140.206.45,6.1.0.0.1595,442109002495,Up-to-date,1000Mbps,1,,default,default
31 DE MARCO,10.140.206.46,38:45:3B:07:25:30,RuckusAP,R320,Online,R320,1 (20MHz),108 (80MHz),10.140.206.46,6.1.0.0.1595,442109002167,Up-to-date,1000Mbps,1,,default,default
31 DE MARCO,10.140.206.47,38:45:3B:07:29:E0,RuckusAP,R320,Online,R320,1 (20MHz),36 (80MHz),10.140.206.47,6.1.0.0.1595,442109002279,Up-to-date,1000Mbps,1,,default,default
31 DE MARCO,10.140.206.48,38:45:3B:07:25:E0,RuckusAP,R320,Online,R320,11 (20MHz),44 (80MHz),10.140.206.48,6.1.0.0.1595,442109002221,Up-to-date,1000Mbps,1,,default,default
31 DE MARCO,10.140.206.49,38:45:3B:07:20:90,RuckusAP,R320,Online,R320,6 (20MHz),52 (80MHz),10.140.206.49,6.1.0.0.1595,442109002243,Up-to-date,1000Mbps,1,,default,default
31 DE MARCO,10.140.206.50,38:45:3B:07:C8:40,RuckusAP,R320,Online,R320,1 (20MHz),124 (80MHz),10.140.206.50,6.1.0.0.1595,442109002635,Up-to-date,1000Mbps,1,,default,default
31 DE MARCO,10.140.206.51,38:45:3B:07:C3:50,RuckusAP,R320,Online,R320,6 (20MHz),140 (80MHz),10.140.206.51,6.1.0.0.1595,442109002621,Up-to-date,1000Mbps,1,,default,default
31 DE MARCO,10.140.206.52,38:45:3B:07:D2:00,RuckusAP,R320,Online,R320,11 (20MHz),40 (80MHz),10.140.206.52,6.1.0.0.1595,442109002517,Up-to-date,1000Mbps,1,,default,default
ZILDA ARNS,10.130.212.30,CC:1B:5A:07:29:40,RuckusAP,R350,Online,R350,1 (20MHz),40 (80MHz),10.130.212.30,6.1.0.0.1595,392373005325,Up-to-date,1000Mbps,1,,default,default
ZILDA ARNS,10.130.212.31,38:45:3B:07:22:50,RuckusAP,R320,Online,R320,6 (20MHz),149 (80MHz),10.130.212.31,6.1.0.0.1595,442109003509,Up-to-date,1000Mbps,1,,default,default
ZILDA ARNS,10.130.212.32,38:45:3B:07:22:90,RuckusAP,R320,Online,R320,1 (20MHz),136 (80MHz),10.130.212.32,6.1.0.0.1595,442109003537,Up-to-date,1000Mbps,1,,default,default
ZILDA ARNS,10.130.212.33,38:45:3B:07:FC:00,RuckusAP,R320,Online,R320,1 (20MHz),124 (80MHz),10.130.212.33,6.1.0.0.1595,442109003883,Up-to-date,1000Mbps,1,,default,default
ZILDA ARNS,10.130.212.34,CC:1B:5A:07:2A:00,RuckusAP,R350,Online,R350,1 (20MHz),153 (80MHz),10.130.212.34,6.1.0.0.1595,392373005359,Up-to-date,1000Mbps,1,,default,default
ZILDA ARNS,10.130.212.35,CC:1B:5A:06:EA:20,RuckusAP,R350,Online,R350,11 (20MHz),104 (80MHz),10.130.212.35,6.1.0.0.1595,392373001843,Up-to-date,1000Mbps,1,,default,default
ZILDA ARNS,10.130.212.36,CC:1B:5A:07:29:E0,RuckusAP,R350,Online,R350,6 (20MHz),116 (80MHz),10.130.212.36,6.1.0.0.1595,392373005367,Up-to-date,1000Mbps,1,,default,default
ZILDA ARNS,10.130.212.37,38:45:3B:07:23:60,RuckusAP,R320,Online,R320,11 (20MHz),48 (80MHz),10.130.212.37,6.1.0.0.1595,442109003525,Up-to-date,1000Mbps,1,,default,default
ZILDA ARNS,10.130.212.38,38:45:3B:07:24:D0,RuckusAP,R320,Online,R320,6 (20MHz),56 (80MHz),10.130.212.38,6.1.0.0.1595,442109003541,Up-to-date,1000Mbps,1,,default,default
`;

    // Pega a referência da biblioteca jsPDF carregada no HTML
    const { jsPDF } = window.jspdf;

    let escolas = [];
    let escolasComAPs = []; // Lista de escolas com APs já vinculados
    let cabecalho = [];
    let escolaAtual = null;

    const outputEl = document.getElementById('output');
    const inputEl = document.getElementById('input-area');

    
    function parseCSVLine(line) {
        const regex = /,(?=(?:(?:[^"]*"){2})*[^"]*$)/;
        let values = line.split(regex);
        return values.map(val => {
            val = (val || '').trim();
            if (val.startsWith('"') && val.endsWith('"')) {
                return val.substring(1, val.length - 1).replace(/""/g, '"');
            }
            return val;
        });
    }

    // Função genérica para carregar CSV em array de objetos
    function carregarCSVGenerico(csvString) {
        const linhas = csvString.trim().split('\n');
        const headers = parseCSVLine(linhas[0]).map(h => h.trim());
        const result = [];
        
        for (let i = 1; i < linhas.length; i++) {
            const linhaLimpa = linhas[i].trim();
            if (!linhaLimpa) continue;

            const valores = parseCSVLine(linhaLimpa);
            let obj = {};
            
            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = (valores[j] || '').trim();
            }
            result.push(obj);
        }
        return result;
    }

    function carregarDados() {
        // 1. Carrega Escolas
        escolas = carregarCSVGenerico(dados_csv_string);
        // Ajuste específico do INEP
        escolas.forEach(e => {
            if (e['INEP'] && e['INEP'].endsWith('.0')) {
                e['INEP'] = e['INEP'].slice(0, -2);
            }
            // Inicializa lista de APs vazia para cada escola
            e.lista_aps = [];
        });

        // 2. Carrega APs
        const todosAPs = carregarCSVGenerico(dados_ap_string);

        // 3. Vincula APs às Escolas
        // Lógica: Se o nome do "AP Group" está contido no nome do "Colégio", vinculamos.
        todosAPs.forEach(ap => {
            const apGroup = (ap['AP Group'] || '').toUpperCase();
            if (!apGroup) return;

            // Tenta encontrar a escola correspondente
            // Normalizamos removendo acentos para facilitar o match (opcional, mas recomendado)
            const escolaEncontrada = escolas.find(escola => {
                const nomeEscola = (escola['Colégio'] || '').toUpperCase();
                // Verifica se o nome da escola contém o nome do grupo do AP
                return nomeEscola.includes(apGroup);
            });

            if (escolaEncontrada) {
                escolaEncontrada.lista_aps.push(ap);
            }
        });
    }

    function mostrarRelatorioEscola(escola) {
        escolaAtual = escola;
        
        let htmlTabela = '<h2>Relatório da Escola</h2>';
        htmlTabela += '<table>';
        htmlTabela += '<tr><th>Campo</th><th>Valor</th></tr>';

        // Mostra campos normais da escola
        for (const [chave, valor] of Object.entries(escola)) {
            if (chave === 'lista_aps') continue; // Não mostra a lista bruta na tabela principal

            const chaveFormatada = chave.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            const valorFormatado = valor ? valor : '<span class="italic">Não informado</span>';
            
            htmlTabela += `<tr><td>${chaveFormatada}</td><td>${valorFormatado}</td></tr>`;
        }
        
        // Adiciona linha de resumo dos APs
        const qtdAPs = escola.lista_aps ? escola.lista_aps.length : 0;
        htmlTabela += `<tr><td class="bold">Access Points (Wifi)</td><td><span class="bold">${qtdAPs}</span> dispositivos vinculados</td></tr>`;

        htmlTabela += '</table>';
        outputEl.innerHTML = htmlTabela;

        let botoesHTML = `
            <button id="btn-editar" class="edit-btn">Editar Relatório</button>
        `;

        // Se tiver APs, mostra botão para vê-los
        if (qtdAPs > 0) {
            botoesHTML += `<button id="btn-ver-aps" class="blue">Ver Access Points</button>`;
        }

        botoesHTML += `<button id="btn-voltar-menu" class="back-btn">Voltar ao Menu</button>`;
        inputEl.innerHTML = botoesHTML;
    }

    function mostrarTabelaAPs(escola) {
        const aps = escola.lista_aps;
        
        let html = `<h2>Access Points - ${escola['Colégio']}</h2>`;
        html += `<p>Grupo AP: <strong>${aps[0]['AP Group']}</strong></p>`;
        
        html += '<div class="ap-table-container"><table class="table-ap">';
        html += `<thead>
                    <tr>
                        <th>Status</th>
                        <th>IP Address</th>
                        <th>MAC</th>
                        <th>Modelo</th>
                        <th>Canal 2.4G</th>
                        <th>Canal 5G</th>
                        <th>Serial</th>
                    </tr>
                 </thead><tbody>`;
        
        aps.forEach(ap => {
            const statusClass = (ap['Status'] === 'Online') ? 'status-online' : 'status-offline';
            html += `<tr>
                <td class="${statusClass}">${ap['Status']}</td>
                <td>${ap['IP Address']}</td>
                <td>${ap['AP MAC']}</td>
                <td>${ap['Model']}</td>
                <td>${ap['Channel (2.4G)']}</td>
                <td>${ap['Channel (5G)']}</td>
                <td>${ap['Serial']}</td>
            </tr>`;
        });
        
        html += '</tbody></table></div>';
        
        outputEl.innerHTML = html;
        inputEl.innerHTML = `
            <button id="btn-voltar-relatorio" class="back-btn">Voltar ao Relatório da Escola</button>
        `;
    }

    function mostrarMenuEdicao(escola) {
        let htmlEdicao = '<h2 class="bold">--- Modo de Edição ---</h2>';
        htmlEdicao += `<h3 class="blue">${escola['Colégio']}</h3>`;

        const campos = Object.keys(escola).filter(k => k !== 'lista_aps');
        
        htmlEdicao += '<label for="campo-select">Selecione o campo para editar:</label>';
        htmlEdicao += '<select id="campo-select">';
        campos.forEach((campo, i) => {
            htmlEdicao += `<option value="${campo}">[${i + 1}] ${campo}</option>`;
        });
        htmlEdicao += '</select>';
        
        htmlEdicao += '<label for="campo-valor-atual">Valor Atual:</label>';
        htmlEdicao += `<input type="text" id="campo-valor-atual" value="${escola[campos[0]]}" readonly class="dim">`;

        htmlEdicao += '<label for="campo-valor-novo">Digite o novo valor:</label>';
        htmlEdicao += '<input type="text" id="campo-valor-novo" placeholder="Novo valor...">';

        outputEl.innerHTML = htmlEdicao;

        inputEl.innerHTML = `
            <button id="btn-salvar-edicao" class="save-btn">Salvar Alterações e Voltar</button>
            <button id="btn-cancelar-edicao" class="back-btn">Cancelar Edição</button>
        `;

        document.getElementById('campo-select').addEventListener('change', (e) => {
            const campoSelecionado = e.target.value;
            document.getElementById('campo-valor-atual').value = escola[campoSelecionado];
        });
    }

    function mostrarMenuBusca() {
        escolaAtual = null;
        
        outputEl.innerHTML = `
            <h2 class="bold">--- Opções de Busca ---</h2>
            <label for="criterio-busca">Escolha o critério de busca:</label>
            <select id="criterio-busca">
                <option value="INEP">Por número INEP</option>
                <option value="Colégio">Por Nome do Colégio</option>
                <option value="Município">Por Município</option>
                <option value="IP">Por Endereço IP</option>
            </select>
            
            <label for="termo-busca">Digite o termo para buscar:</label>
            <input type="text" id="termo-busca" placeholder="Digite sua busca aqui...">
        `;
        
        inputEl.innerHTML = `
            <button id="btn-buscar-submit">Buscar</button>
            <button id="btn-voltar-menu" class="back-btn">Voltar ao Menu</button>
        `;
    }

    function executarBusca() {
        const criterio = document.getElementById('criterio-busca').value;
        const termo = document.getElementById('termo-busca').value.toLowerCase();
        
        if (!termo) {
            outputEl.innerHTML += '<p class="red">Por favor, digite um termo para a busca.</p>';
            return;
        }

        const resultados = escolas.filter(e => {
            const valor = e[criterio] || '';
            return valor.toLowerCase().includes(termo);
        });

        if (resultados.length === 0) {
            outputEl.innerHTML += '<p class="red bold">Nenhuma escola encontrada com o termo fornecido.</p>';
        } else if (resultados.length === 1) {
            mostrarRelatorioEscola(resultados[0]);
        } else {
            let htmlResultados = `<h3 class="bold">Múltiplos resultados encontrados (${resultados.length}). Selecione um:</h3>`;
            resultados.forEach((escola) => {
                const escolaIndex = escolas.indexOf(escola);
                const qtdAp = escola.lista_aps ? escola.lista_aps.length : 0;
                const badgeAp = qtdAp > 0 ? `[AP: ${qtdAp}]` : '';

                htmlResultados += `
                    <button class="btn-resultado" data-index="${escolaIndex}">
                        <span class="blue">${escola['Colégio']}</span> 
                        (<span class="cyan">${escola['Município']}</span>) 
                        - INEP: <span class="green">${escola['INEP']}</span>
                        <span class="bold" style="font-size: 0.8em; color: #555;">${badgeAp}</span>
                    </button>
                `;
            });
            outputEl.innerHTML = htmlResultados;
            inputEl.innerHTML = `<button id="btn-voltar-menu" class="back-btn">Voltar ao Menu</button>`;
        }
    }

    function mostrarMenuPrincipal() {
        escolaAtual = null;
        
        outputEl.innerHTML = `
            <h2 class="bold">--- MENU PRINCIPAL ---</h2>
            <p class="bold">Bem-vindo! ${escolas.length} registros de escolas foram carregados.</p>
        `;
        
        inputEl.innerHTML = `
            <button id="btn-menu-buscar">Buscar Escola (Individual)</button>
            <button id="btn-menu-filtrar" class="report-btn">Filtrar Relatórios (Múltiplos)</button>
        `;
    }

    // --- FUNÇÕES DE FILTRAGEM (Mantidas da versão anterior) ---
    function getUniqueValues(field) {
        const values = escolas.map(e => (e[field] || '').trim());
        return [...new Set(values)].filter(v => v).sort();
    }

    function mostrarMenuFiltro() {
        const municipios = getUniqueValues('Município');
        const situacoes = getUniqueValues('Situação da internet');

        let htmlFiltro = `<h2 class="bold">--- Filtrar Relatórios ---</h2>`;
        htmlFiltro += '<div class="filter-container">';
        
        htmlFiltro += '<div class="filter-group">';
        htmlFiltro += '<label for="filtro-municipio">Município:</label>';
        htmlFiltro += '<select id="filtro-municipio"><option value="">-- Todos --</option>';
        municipios.forEach(m => {
            htmlFiltro += `<option value="${m}">${m}</option>`;
        });
        htmlFiltro += '</select></div>';
        
        htmlFiltro += '<div class="filter-group">';
        htmlFiltro += '<label for="filtro-situacao">Situação da Internet:</label>';
        htmlFiltro += '<select id="filtro-situacao"><option value="">-- Todas --</option>';
        situacoes.forEach(s => {
            const situacaoCapitalizada = s.charAt(0).toUpperCase() + s.slice(1);
            htmlFiltro += `<option value="${s}">${situacaoCapitalizada}</option>`;
        });
        htmlFiltro += '</select></div>';
        htmlFiltro += '</div>';

        outputEl.innerHTML = htmlFiltro;

        inputEl.innerHTML = `
            <button id="btn-gerar-browser" class="report-btn">Gerar Relatório (Navegador)</button>
            <button id="btn-gerar-pdf" class="pdf-btn">Gerar Relatório (PDF)</button>
            <button id="btn-voltar-menu" class="back-btn">Voltar ao Menu</button>
        `;
    }

    function getFilteredData() {
        const municipio = document.getElementById('filtro-municipio').value;
        const situacao = document.getElementById('filtro-situacao').value;

        const criterios = {};
        if (municipio) criterios['Município'] = municipio;
        if (situacao) criterios['Situação da internet'] = situacao;
        
        return escolas.filter(escola => {
            for (const [key, value] of Object.entries(criterios)) {
                if ((escola[key] || '').toLowerCase() !== value.toLowerCase()) {
                    return false;
                }
            }
            return true;
        });
    }

    function executarFiltro(gerarPDF = false) {
        const resultados = getFilteredData();

        if (resultados.length === 0) {
            outputEl.innerHTML = `
                <h2 class="bold">--- Filtrar Relatórios ---</h2>
                <p class="red bold">Nenhum resultado encontrado para estes filtros.</p>
            `;
            mostrarMenuFiltro();
            outputEl.innerHTML += '<p class="red bold">Nenhum resultado encontrado para estes filtros.</p>';
            return;
        }

        if (gerarPDF) {
            gerarRelatorioPDF(resultados);
            outputEl.innerHTML += '<p class="green bold">Relatório PDF gerado com sucesso!</p>';
        } else {
            mostrarRelatorioFiltrado(resultados);
        }
    }

    function mostrarRelatorioFiltrado(resultados) {
        const reportColumns = ['INEP', 'Colégio', 'Município', 'IP', 'Educatrons', 'Situação da internet'];

        let tableHTML = `<h2>Relatório Filtrado (${resultados.length} escolas)</h2>`;
        tableHTML += '<table id="report-table">';
        
        tableHTML += '<thead><tr>';
        reportColumns.forEach(col => {
            tableHTML += `<th>${col.replace('_', ' ')}</th>`;
        });
        tableHTML += '<th>Qtd APs</th>'; // Nova coluna para APs
        tableHTML += '</tr></thead>';
        
        tableHTML += '<tbody>';
        resultados.forEach(escola => {
            tableHTML += '<tr>';
            reportColumns.forEach(col => {
                tableHTML += `<td>${escola[col] || ''}</td>`;
            });
            tableHTML += `<td>${escola.lista_aps.length}</td>`; // Mostra qtd de APs
            tableHTML += '</tr>';
        });
        tableHTML += '</tbody></table>';

        outputEl.innerHTML = tableHTML;
    }

    function gerarRelatorioPDF(resultados) {
        const doc = new jsPDF({ orientation: 'landscape' });
        const reportColumns = ['INEP', 'Colégio', 'Município', 'IP', 'Educatrons', 'Situação da internet'];
        
        const tableHeaders = [...reportColumns.map(col => col.replace('_', ' ')), 'Qtd APs'];
        const tableBody = resultados.map(escola => {
            const linha = reportColumns.map(col => escola[col] || '');
            linha.push(escola.lista_aps.length.toString());
            return linha;
        });

        doc.text("Relatório de Escolas Filtrado", 14, 15);
        doc.setFontSize(10);
        doc.text(`Total de escolas: ${resultados.length}`, 14, 20);

        doc.autoTable({
            startY: 25,
            head: [tableHeaders],
            body: tableBody,
            theme: 'striped',
            styles: { fontSize: 8, cellPadding: 2 },
            headStyles: { fillColor: [74, 90, 112] }
        });

        doc.save('relatorio_escolas_filtrado.pdf');
    }


    // --- Gerenciador de Eventos Principal ---
    
    document.body.addEventListener('click', (e) => {
        const target = e.target.closest('button');
        if (!target) return;

        const targetId = target.id;

        // Menu e Busca
        if (targetId === 'btn-menu-buscar') mostrarMenuBusca();
        else if (targetId === 'btn-voltar-menu') mostrarMenuPrincipal();
        else if (targetId === 'btn-buscar-submit') executarBusca();
        else if (target.classList.contains('btn-resultado')) {
            const index = target.dataset.index;
            mostrarRelatorioEscola(escolas[index]);
        }
        
        // Edição
        else if (targetId === 'btn-editar') {
            if (escolaAtual) mostrarMenuEdicao(escolaAtual);
        }
        else if (targetId === 'btn-cancelar-edicao') mostrarRelatorioEscola(escolaAtual);
        else if (targetId === 'btn-salvar-edicao') {
            const campo = document.getElementById('campo-select').value;
            const novoValor = document.getElementById('campo-valor-novo').value;
            escolaAtual[campo] = novoValor;
            outputEl.innerHTML = '<p class="green bold">Relatório atualizado com sucesso!</p>';
            mostrarRelatorioEscola(escolaAtual);
        }

        // Filtros e PDF
        else if (targetId === 'btn-menu-filtrar') mostrarMenuFiltro();
        else if (targetId === 'btn-gerar-browser') executarFiltro(false);
        else if (targetId === 'btn-gerar-pdf') executarFiltro(true);

        // === NOVOS EVENTOS PARA APs ===
        else if (targetId === 'btn-ver-aps') {
            if (escolaAtual) mostrarTabelaAPs(escolaAtual);
        }
        else if (targetId === 'btn-voltar-relatorio') {
            if (escolaAtual) mostrarRelatorioEscola(escolaAtual);
        }
    });

    // --- Inicialização ---
    carregarDados();
    mostrarMenuPrincipal();
});