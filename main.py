import os
import eel
import subprocess
from threading import Thread
from engine.features import *
from engine.command import *



eel.init("www")

def start_node_server():
    subprocess.run(["node", "server.js"], shell=True)

if __name__ == "__main__":
    # Start Node.js server in a separate thread
    Thread(target=start_node_server, daemon=True).start()
    
    playassistantSound()
    os.system('start chrome.exe --app="http://localhost:8000/index.html"')
    eel.start('index.html', mode=None, host='localhost', block=True)