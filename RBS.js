const can = document.createElement("canvas");
const c = can.getContext("2d", {alpha: false});

document.body.appendChild(can);
can.width = window.innerWidth;
can.height = window.innerHeight;
c.lineWidth = 2;
