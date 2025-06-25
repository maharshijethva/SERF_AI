import os
import sqlite3
import struct
import time
from playsound import playsound
import eel
import pvporcupine
import pyaudio
from engine.config import ASSISTANT_NAME
from engine.command import speak
import pywhatkit as kit
from engine.db import *
import webbrowser

from engine.helper import extract_yt_term


#Playing assistant sound function

con = sqlite3.connect("serf.db")
cursor = con.cursor()

@eel.expose
def playassistantSound():
    music_dir = "www\\assets\\audio\\start_sound.mp3"
    playsound(music_dir)
    
def openCommand(query):
    query = query.replace(ASSISTANT_NAME, "")
    query = query.replace("open", "")
    query.lower()

    app_name = query.strip()

    if app_name != "":

        try:
           cursor.execute(
               'SELECT path FROM sys_command WHERE name IN (?)', (app_name,))
           results = cursor.fetchall()

           if len(results) != 0:
              speak("Opening "+query)
              os.startfile(results[0][0])

           elif len(results) == 0: 
                cursor.execute(
                'SELECT url FROM web_command WHERE name IN (?)', (app_name,))
                results = cursor.fetchall()
                
                if len(results) != 0:
                   speak("Opening "+query)
                   webbrowser.open(results[0][0])
 
                else:
                    speak("Opening "+query)
                    try:
                        os.system('start '+query)
                    except:
                        speak("not found")
        except:
            speak("some thing went wrong")
        
def PlayYoutube(query):
    search_term = extract_yt_term(query)
    speak("Playing "+search_term+" on YouTube")
    kit.playonyt(search_term)


