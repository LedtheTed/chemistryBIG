import { drawCanvas } from "./render.js";

let canvas = document.getElementById("sim-canvas");
const ctx = canvas.getContext("2d");
let DEBUG = true; // switch this to true/false depending on 


let Game = {

  // GAME VARIABLES
  fps: 60,
  lastRender: Date.now(),
  deltaTime: 0,
  frame: 0,

  // METHODS
  /**
   * contains all updates the website will receive on this loop
   * NOTE: Put any changes here in subfunctions, lets try and keep update() clean
   */
  update: () => {
    Game.lastRender = Date.now();
    debug(`Frame ${Game.frame}: Loaded in ${Game.deltaTime} ms`);
  },


  /**
   * causes program to continuously loop, mostly reserved for looping logic and not actual code
   * NOTE: to be updated to a more robust version based on date/time
   * @param {*} timestamp 
   */
  shouldRenderFrame: () => {
    let now = Date.now();
    Game.deltaTime = now - Game.lastRender;
    let mspf = (1 / Game.fps) * 1000;
    return Game.deltaTime >= mspf
  },

  loop: () => {
    if (Game.shouldRenderFrame()) {
      Game.update();
      Game.frame += 1;
    }
    window.requestAnimationFrame(Game.loop);
  }
}

function debug(message) {
  if (DEBUG) console.log(message);
}

// Begin looping
window.requestAnimationFrame(Game.loop);


/*****
COMMENTED OUT OLD ATOM CODE - REMOVE IF WANTED
*****/
// document.addEventListener('DOMContentLoaded', () => {
//   const sim = document.getElementById('sim-area');
//   if (!sim) return;

//   const particles = [];

//   function _clientToLocal(clientX, clientY) {
//     const rect = sim.getBoundingClientRect();
//     return { x: clientX - rect.left, y: clientY - rect.top };
//   }

//   function createParticleAt(clientX, clientY, opts = {}) {
//     const { x, y } = _clientToLocal(clientX, clientY);
//     const el = document.createElement('div');
//     el.className = 'particle';
//     if (opts.size === 'small') el.classList.add('small');
//     if (opts.size === 'large') el.classList.add('large');
//     el.style.left = x + 'px';
//     el.style.top = y + 'px';
//     el.dataset.type = opts.type || '';

//     sim.appendChild(el);
//     particles.push({ el, x, y, vx: 0, vy: 0 });

//     // simple fade-out after some time (placeholder behaviour)
//     if (opts.lifetime) {
//       setTimeout(() => {
//         el.style.opacity = '0';
//         setTimeout(() => el.remove(), 400);
//       }, opts.lifetime);
//     }

//     return el;
//   }

//   // Click inside sim area spawns a particle at click location
//   sim.addEventListener('click', (ev) => {
//     // Only respond to primary button
//     if (ev.button !== 0) return;
//     createParticleAt(ev.clientX, ev.clientY, { size: 'small' });
//   });

//   // expose helper for console/other scripts
//   window.createParticleAt = createParticleAt;
// });
