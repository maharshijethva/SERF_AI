import csv
import sqlite3

con = sqlite3.connect("serf.db")
cursor = con.cursor()

query = "CREATE TABLE IF NOT EXISTS sys_command(id integer primary key, name VARCHAR(100), path VARCHAR(1000))"
cursor.execute(query)

#query = "INSERT INTO sys_command VALUES (null,'spotify', 'C:\\Users\\USER\\AppData\\Roaming\\Spotify\\Spotify.exe')"
#cursor.execute(query)
#con.commit()

# query = "CREATE TABLE IF NOT EXISTS web_command(id integer primary key, name VARCHAR(100), url VARCHAR(1000))"
# cursor.execute(query)

# query = "INSERT INTO web_command VALUES (null,'youtube', 'https://www.youtube.com/')"
# cursor.execute(query)
# con.commit()
