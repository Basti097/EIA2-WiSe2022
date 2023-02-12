

class Particle {
    x: number;
    y: number;
    speed: number;
    direction: number;
    color: string;

    constructor(x: number, y: number, speed: number, direction: number, color: string) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.direction = direction;
        this.color = color;
    }

    move() {
        this.x += Math.cos(this.direction) * this.speed;
        this.y += Math.sin(this.direction) * this.speed;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, 5, 5);
    }
}

class ParticleSystem {
    particles: Particle[];

    constructor(x: number, y: number, count: number) {
        this.particles = [];
        for (let i = 0; i < count; i++) {
            let direction = Math.random() * Math.PI * 2;
            let speed = Math.random() * 5 + 2;
            let color = rgb(${ Math.floor(Math.random() * 255) }, ${ Math.floor(Math.random() * 255) }, ${ Math.floor(Math.random() * 255) });
            this.particles.push(new Particle(x, y, speed, direction, color));
        }
    }



    update() {
        for (let particle of this.particles) {
            particle.move();
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        for (let particle of this.particles) {
            particle.draw(ctx);
        }
    }
}

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const particleSystem = new ParticleSystem(canvas.width / 2, canvas.height / 2, 100);

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particleSystem.update();
    particleSystem.draw(ctx);
    requestAnimationFrame(update);
}

update();