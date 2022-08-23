from flask import Flask, send_from_directory
from flask_cors import CORS

app = Flask(__name__, static_url_path='', static_folder='frontend/build')
CORS(app)

# home page
@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder, 'index.html')

# get fridge items
@app.route("/<fridge_uuid>/items")
def get_fridge_items(fridge_uuid):
    return 'fridge'

# set item
@app.route("/<fridge_uuid>/set", methods=['POST'])
def create_item(fridge_uuid):
    # TODO: set item in database
    return fridge_uuid