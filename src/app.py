from flask import flask, send_from_directory

app = Flask(__name__, static_url_path='', static_folder='frontend/build')

# home page
@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder, 'index.html')

# get fridge items
@app.route("/<fridge_uuid>/items")
def get_fridge_items(fridge_uuid):
    return 'fridge'

# get item
@app.route("<fridge_uuid>/set")
def create_item(fridge_uuid):
    return