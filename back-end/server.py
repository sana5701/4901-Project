# save this as app.py
from flask import Flask
from flask_cors import CORS
from flask_restful import Api, Resource

app = Flask(__name__)
CORS(app)
api = Api(app)

class HelloWorld(Resource):
    def get(self):
        return {"data": "Hello World!"}

api.add_resource(HelloWorld, "/helloWorld")

if __name__ == "__main__":
    app.run(debug=True)