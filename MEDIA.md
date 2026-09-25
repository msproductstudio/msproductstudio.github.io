# Research media provenance

## Line-following robots

- Source: https://github.com/msproductstudio/Evolutionary-Algorithm-and-Following-Line-Robots-Simulation
- Source commit: df665cb578c601114b0430f2394d1d3aba09062a
- Author: Matheus Luis Oliveira da Silva.
- Recording: Ubuntu WSL, Python 3.14, Pygame 2.6.1, FFmpeg. September 25, 2026.
- `scripts/capture-robots.py` imports the unchanged simulation, calls its original `Simulation.show` method and captures the actual Pygame surface. SDL's offscreen video driver is used; the simulation behavior is not recreated.
- 1,400 simulator steps, one frame per four steps, 350 encoded frames at 25 fps, 14 seconds. This timing is presentation timing, not a performance benchmark.
- `robots.png`: actual frame at step 600. `robots.mp4`: H.264 recording, no audio.
- The project owner explicitly authorized execution and portfolio capture.

## Ant Colony / ENXAME

- Source: https://github.com/msproductstudio/Hardware-Accelerated-Ant-Colony-Based-Swarm-System
- Source commit: e56a603 (main at inspection).
- `ants-report.png`: original embedded image, figure 2, PDF page 8 (printed page 7) of `Documentation/PUB1/Relatório FInal .pdf`. Extracted without changing the depicted simulation.
- Report author: Matheus Luis Oliveira da Silva. Supervisor: Prof. Dr. Eduardo do Valle Simões. PUB/USP, ICMC-USP.
- This is historical research media supplied by the owner's public repository, used in his portfolio under his explicit authorization. It is not presented as a new runtime capture or a generally licensed stock image.
- Repository contributors and source history remain intact.
- The current code compiled successfully in Ubuntu after installing GLFW and GLM. The application opened in Xvfb with software OpenGL. The new capture only showed the initial interface and is not used as evidence of a full running swarm. No fabricated animation is used.
- No separate reuse license is inferred for either research repository.

## Original graphics and fonts

The leaf and studio icon are original SVG graphics created for this site. No portrait was fabricated.
Manrope and IBM Plex Mono are self-hosted with license files in `public/fonts/`.
