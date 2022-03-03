const products =
[
    {
        id: "1",
        nombre: "m1065",
        tipo:"Bullet",
        marca: "Axis",
        precio: 1200,
        cantidad:10,
        img: '../img/camaras/bullet/m1065.jpg'
    },
    {
        id: "2",
        nombre: "m1134",
        marca: "Axis",
        tipo:"Bullet",
        precio: 1500,
        cantidad:10,
        img:'../img/camaras/bullet/m1134.jpg'
    },
    {
        id: "3",
        nombre: "m1137",
        tipo:"Bullet",
        marca: "Axis",
        precio: 1000,
        cantidad:10,
        img: '../img/camaras/bullet/m1137.jpg'
    },
    {
        id: "4",
        nombre: "p1375",
        tipo:"Bullet",
        marca: "Axis",
        precio: 1000,
        cantidad:10,
        img: '../img/camaras/bullet/p1375.jpg'
    },
    {
        id: "5",
        nombre: "m3058",
        tipo: "Panorámica",
        marca: "Axis",
        precio: 1200,
        cantidad:10,
        img: '../img/camaras/panoramicas/m3058.jpg'
    },
    {
        id: "6",
        nombre: "p38",
        tipo: "Panorámica",
        marca: "Axis",
        precio: 1000,
        cantidad:10,
        img: '../img/camaras/panoramicas/p38.jpg'
    },
    {
        id: "7",
        nombre: "p3717",
        tipo: "Panorámica",
        marca: "Axis",
        precio: 1000,
        cantidad:10,
        img: '../img/camaras/panoramicas/p3717.jpg'
    },
    {
        id: "8",
        nombre: "q6100",
        tipo: "Panorámica",
        marca: "Axis",
        precio: 1000,
        cantidad:10,
        img: '../img/camaras/panoramicas/q6100.jpg'
    },
    {
        id: "9",
        nombre: "m5525",
        tipo: "PTZ",
        marca: "Axis",
        precio: 1200,
        cantidad:10,
        img: '../img/camaras/ptz/m5525.jpg'
    },
    {
        id: "10",
        nombre: "p5655",
        tipo: "PTZ",
        marca: "Axis",
        precio: 1000,
        cantidad:10,
        img: '../img/camaras/ptz/p5655.jpg'
    },
    {
        id: "11",
        nombre: "q6075",
        tipo: "PTZ",
        marca: "Axis",
        precio: 1000,
        cantidad:10,
        img: '../img/camaras/ptz/q6075.jpg'
    },
    {
        id: "12",
        nombre: "q6315",
        tipo: "PTZ",
        marca: "Axis",
        precio: 1000,
        cantidad:10,
        img: '../img/camaras/ptz/q6315.jpg'
    },
    {
        id: "13",
        nombre: "p1290",
        tipo: "Térmica",
        marca: "Axis",
        precio: 1200,
        cantidad:10,
        img: '../img/camaras/termicas/p1290.jpg'
    },
    {
        id: "14",
        nombre: "q8641",
        tipo: "Térmica",
        marca: "Axis",
        precio: 1000,
        cantidad:10,
        img: '../img/camaras/termicas/q8641.jpg'
    },
    {
        id: "15",
        nombre: "q8642",
        tipo: "Térmica",
        marca: "Axis",
        precio: 1000,
        cantidad:10,
        img: '../img/camaras/termicas/q8642.jpg'
    },
    {
        id: "16",
        nombre: "q8741",
        tipo: "Térmica",
        marca: "Axis",
        precio: 1000,
        cantidad:10,
        img: '../img/camaras/termicas/q8741.jpg'
    },
    {
        id: "17",
        nombre: "Branch 4000",
        tipo: "Router",
        marca: "Cisco",
        precio: 1000,
        cantidad:10,
        img: '../img/router/branch/4000-series.webp'
    },
    {
        id: "18",
        nombre: "Branch 8200",
        tipo: "Router",
        marca: "Cisco",
        precio: 1000,
        cantidad:10,
        img: '../img/router/branch/8200-series.webp'
    },
    {
        id: "19",
        nombre: "8200-uCPE",
        tipo: "Router",
        marca: "Cisco",
        precio: 1000,
        cantidad:10,
        img: '../img/router/branch/8200-uCPE.webp'
    },
    {
        id: "20",
        nombre: "Branch 8300",
        tipo: "Router",
        marca: "Cisco",
        precio: 1200,
        cantidad:10,
        img: '../img/router/branch/8300-series.webp'
    },
    {
        id: "21",
        nombre: "Wan aggregation NCS-500",
        tipo: "Router",
        marca: "Cisco",
        precio: 1000,
        cantidad:10,
        img: '../img/router/wan_aggregation/NCS-500.webp'
    },
    {
        id: "22",
        nombre: "Wan aggregation NCS-5000",
        tipo: "Router",
        marca: "Cisco",
        precio: 1000,
        cantidad:10,
        img: '../img/router/wan_aggregation/NCS-5000.webp'
    },
    {
        id: "23",
        nombre: "Wan aggregation NCS-5500",
        tipo: "Router",
        marca: "Cisco",
        precio: 1000,
        cantidad:10,
        img: '../img/router/wan_aggregation/NCS-5500.webp'
    },
    {
        id: "24",
        nombre: "Wan aggregation NCS-5700",
        tipo: "Router",
        marca: "Cisco",
        precio: 1000,
        cantidad:10,
        img: '../img/router/wan_aggregation/NCS-5700.webp'
    },
    {
        id: "25",
        nombre: "Core Catalyst 9300",
        tipo: "Switch",
        marca: "Cisco",
        precio: 1000,
        cantidad:10,
        img: '../img/switch/core/catalyst_9300.webp'
    },
    {
        id: "26",
        nombre: "Core Catalyst 9400",
        tipo: "Switch",
        marca: "Cisco",
        precio: 1000,
        cantidad:10,
        img: '../img/switch/core/catalyst_9400.webp'
    },
    {
        id: "27",
        nombre: "Core Catalyst 9500",
        tipo: "Switch",
        marca: "Cisco",
        precio: 1000,
        cantidad:10,
        img: '../img/switch/core/catalyst_9500.webp'
    },
    {
        id: "28",
        nombre: "Core Catalyst 9600",
        tipo: "Switch",
        marca: "Cisco",
        precio: 1200,
        cantidad:10,
        img: '../img/switch/core/catalyst_9600.webp'
    },
    {
        id: "29",
        nombre: "Business 110",
        tipo: "Switch",
        marca: "Cisco",
        precio: 1000,
        cantidad:10,
        img: '../img/switch/business/business_110.webp'
    },
    {
        id: "30",
        nombre: "Business b250",
        tipo: "Switch",
        marca: "Cisco",
        precio: 1000,
        cantidad:10,
        img: '../img/switch/business/business_250.webp'
    },
    {
        id: "31",
        nombre: "Business Catalyst 350",
        tipo: "Switch",
        marca: "Cisco",
        precio: 1000,
        cantidad:10,
        img: '../img/switch/business/catalyst_350.webp'
    },
    {
        id: "32",
        nombre: "Business Catalyst 1000",
        tipo: "Switch",
        marca: "Cisco",
        precio: 1000,
        cantidad:10,
        img: '../img/switch/business/catalyst_1000.webp'
    },
    {
        id: "33",
        nombre: "LAN Access Catalyst 1000",
        tipo: "Switch",
        marca: "Cisco",
        precio: 1000,
        cantidad:10,
        img: '../img/switch/lan_access/catalyst_1000.webp'
    },
    {
        id: "34",
        nombre: "Lan Access Catalyst 9200",
        tipo: "Switch",
        marca: "Cisco",
        precio: 1000,
        cantidad:10,
        img: '../img/switch/lan_access/catalyst_9200.webp'
    },
    {
        id: "35",
        nombre: "LAN access Catalyst 9300",
        tipo: "Switch",
        marca: "Cisco",
        precio: 1200,
        cantidad:10,
        img: '../img/switch/lan_access/catalyst_9300.webp'
    },
    {
        id: "36",
        nombre: "LAN Access M120",
        tipo: "Switch",
        marca: "Cisco",
        precio: 1000,
        cantidad:10,
        img: '../img/switch/lan_access/m120.png'
    },
    {
        id: "37",
        nombre: "LAN Access M120",
        tipo: "Switch",
        marca: "Sonicwall",
        precio: 1000,
        cantidad:10,
        img: '../img/switch/lan_access/m120.png'
    },
    {
        id: "38",
        nombre: "LAN Access M120",
        tipo: "Switch",
        marca: "Sonicwall",
        precio: 1000,
        cantidad:10,
        img: '../img/switch/lan_access/m120.png'
    },
    {
        id: "39",
        nombre: "LAN Access M120",
        tipo: "Switch",
        marca: "Sonicwall",
        precio: 1000,
        cantidad:10,
        img: '../img/switch/lan_access/m120.png'
    },
    {
        id: "40",
        nombre: "LAN Access M120",
        tipo: "Switch",
        marca: "Sonicwall",
        precio: 1000,
        cantidad:10,
        img: '../img/switch/lan_access/m120.png'
    },
    {
        id: "41",
        nombre: "LAN Access M120",
        tipo: "Switch",
        marca: "Sonicwall",
        precio: 1000,
        cantidad:10,
        img: '../img/switch/lan_access/m120.png'
    },
    {
        id: "42",
        nombre: "LAN Access M120",
        tipo: "Switch",
        marca: "Sonicwall",
        precio: 1000,
        cantidad:10,
        img: '../img/switch/lan_access/m120.png'
    },
    {
        id: "43",
        nombre: "LAN Access M120",
        tipo: "Switch",
        marca: "Sonicwall",
        precio: 1000,
        cantidad:10,
        img: '../img/switch/lan_access/m120.png'
    },
    {
        id: "44",
        nombre: "LAN Access M120",
        tipo: "Switch",
        marca: "Sonicwall",
        precio: 1000,
        cantidad:10,
        img: '../img/switch/lan_access/m120.png'
    },
    {
        id: "45",
        nombre: "LAN Access M120",
        tipo: "Switch",
        marca: "Sonicwall",
        precio: 1000,
        cantidad:10,
        img: '../img/switch/lan_access/m120.png'
    },
    {
        id: "46",
        nombre: "LAN Access M120",
        tipo: "Switch",
        marca: "Sonicwall",
        precio: 1000,
        cantidad:10,
        img: '../img/switch/lan_access/m120.png'
    },
    {
        id: "47",
        nombre: "LAN Access M120",
        tipo: "Switch",
        marca: "Sonicwall",
        precio: 1000,
        cantidad:10,
        img: '../img/switch/lan_access/m120.png'
    },
    {
        id: "48",
        nombre: "LAN Access M120",
        tipo: "Switch",
        marca: "Sonicwall",
        precio: 1000,
        cantidad:10,
        img: '../img/switch/lan_access/m120.png'
    }
]

export default products;

