// backgroundAnimation.js
(function () {
  let width,
    height,
    largeHeader,
    canvas,
    ctx,
    points,
    target,
    animateHeader = true;

  function initHeader() {
    width = window.innerWidth;
    height = window.innerHeight;
    target = { x: width / 2, y: height / 2 };

    largeHeader = document.getElementById("large-header");
    if (!largeHeader) return;
    largeHeader.style.height = height + "px";

    canvas = document.getElementById("demo-canvas");
    if (!canvas) return;
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext("2d");

    points = [];
    for (let x = 0; x < width; x += width / 20) {
      for (let y = 0; y < height; y += height / 20) {
        const px = x + (Math.random() * width) / 20;
        const py = y + (Math.random() * height) / 20;
        const p = { x: px, originX: px, y: py, originY: py };
        points.push(p);
      }
    }

    for (let i = 0; i < points.length; i++) {
      const p1 = points[i];
      const closest = [];
      for (let j = 0; j < points.length; j++) {
        const p2 = points[j];
        if (p1 !== p2) {
          let placed = false;
          for (let k = 0; k < 5; k++) {
            if (!placed && !closest[k]) {
              closest[k] = p2;
              placed = true;
            }
          }

          for (let k = 0; k < 5; k++) {
            if (!placed && getDistance(p1, p2) < getDistance(p1, closest[k])) {
              closest[k] = p2;
              placed = true;
            }
          }
        }
      }
      p1.closest = closest;
    }

    for (let i in points) {
      const c = new Circle(
        points[i],
        2 + Math.random() * 2,
        "rgba(255,255,255,0.3)"
      );
      points[i].circle = c;
    }
  }

  function initAnimation() {
    animate();
    for (let i in points) {
      shiftPoint(points[i]);
    }
  }

  function animate() {
    if (animateHeader && ctx) {
      ctx.clearRect(0, 0, width, height);
      for (let i in points) {
        const p = points[i];
        if (Math.abs(getDistance(target, p)) < 4000) {
          p.active = 0.3;
          p.circle.active = 0.6;
        } else if (Math.abs(getDistance(target, p)) < 20000) {
          p.active = 0.1;
          p.circle.active = 0.3;
        } else if (Math.abs(getDistance(target, p)) < 40000) {
          p.active = 0.02;
          p.circle.active = 0.1;
        } else {
          p.active = 0;
          p.circle.active = 0;
        }

        drawLines(p);
        p.circle.draw();
      }
    }
    requestAnimationFrame(animate);
  }

  function shiftPoint(p) {
    gsap.to(p, 1 + 1 * Math.random(), {
      x: p.originX - 50 + Math.random() * 100,
      y: p.originY - 50 + Math.random() * 100,
      ease: "circ.inOut",
      onComplete: () => shiftPoint(p),
    });
  }

  function drawLines(p) {
    if (!p.active) return;
    for (let i in p.closest) {
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.closest[i].x, p.closest[i].y);
      ctx.strokeStyle = "rgba(156,217,249," + p.active + ")";
      ctx.stroke();
    }
  }

  function Circle(pos, rad, color) {
    this.pos = pos;
    this.radius = rad;
    this.color = color;

    this.draw = function () {
      if (!this.active) return;
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = "rgba(156,217,249," + this.active + ")";
      ctx.fill();
    };
  }

  function getDistance(p1, p2) {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
  }

  function mouseMove(e) {
    let posx = e.clientX;
    let posy = e.clientY;
    target.x = posx;
    target.y = posy;
  }

  function scrollCheck() {
    animateHeader = document.body.scrollTop <= height;
  }

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    if (largeHeader) largeHeader.style.height = height + "px";
    if (canvas) {
      canvas.width = width;
      canvas.height = height;
    }
  }

  if (typeof window !== "undefined") {
    initHeader();
    initAnimation();
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("scroll", scrollCheck);
    window.addEventListener("resize", resize);
  }
})();
