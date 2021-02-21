from flask import Flask
from flask_socketio import SocketIO, send, emit
import json, random

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")


### Overall State ###
users = []
current_activity = None


### FIBBAGE ###
FIBBAGE_DATA = None
with open("fibbage_data.json") as f:
    FIBBAGE_DATA = json.load(f)

fibbage_prompt = "Yehaw"
fibbage_answer = ""
fibbage_alternates = ""
fibbage_user_lies = {}
fibbage_user_scores = {}

@socketio.on('login')
def login(username):
    users.append(username)
    emit("change-activity", "Menu")

def start_fibbage_game():
    current_game_data = random.choice(FIBBAGE_DATA)
    fibbage_prompt = current_game_data["question"]
    fibbage_answer = current_game_data["answer"]
    fibbage_alternates = current_game_data["alternates"]

    # Notify Everyone of the Prompt
    socketio.emit("fibbage-prompt", fibbage_prompt)


@socketio.on('fibbage-response')
def receive_fibbage_response(data):
    # add user response to the list AND check if everyone answered
    global fibbage_user_lies
    fibbage_user_lies[data["username"]] = data["lie"]
    if len(fibbage_user_lies.keys()) == len(users):
        socketio.emit("fibbage-lies", fibbage_user_lies)
        fibbage_user_lies = {}

@socketio.on('select-activity')
def select_activity(game):
    socketio.emit("change-activity", game)
    if game == "Fibbrick":
        start_fibbage_game()



if __name__ == "__main__":
    socketio.run(app, host='127.0.0.1', debug=True)