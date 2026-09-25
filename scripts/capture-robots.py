"""Record real frames from the unmodified Python/Pygame simulator."""
import os, sys, subprocess, contextlib
from pathlib import Path
os.environ["SDL_VIDEODRIVER"]="dummy"
os.environ["SDL_AUDIODRIVER"]="dummy"
root=Path(__file__).resolve().parents[1]
source=root.parent/"Evolutionary-Algorithm-and-Following-Line-Robots-Simulation"
sys.path.insert(0,str(source))
import pygame
from simulationclass import Simulation
from constants import WIDTH,HEIGHT
pygame.init()
screen=pygame.display.set_mode((WIDTH,HEIGHT))
simulation=Simulation()
out=root/"public/media"
out.mkdir(parents=True,exist_ok=True)
encoder=subprocess.Popen(["ffmpeg","-y","-loglevel","error","-f","rawvideo","-pixel_format","rgb24","-video_size",f"{WIDTH}x{HEIGHT}","-framerate","25","-i","-","-c:v","libx264","-crf","23","-pix_fmt","yuv420p","-movflags","+faststart",str(out/"robots.mp4")],stdin=subprocess.PIPE)
with open(os.devnull,"w") as log,contextlib.redirect_stdout(log):
 for frame in range(1400):
  screen.fill((50,120,40))
  simulation.show(screen)
  if frame==600: pygame.image.save(screen,str(out/"robots.png"))
  if frame%4==0: encoder.stdin.write(pygame.image.tobytes(screen,"RGB"))
encoder.stdin.close()
assert encoder.wait()==0
pygame.quit()
print("Recorded 1400 simulator steps, 350 frames, 14 seconds at 25fps.")
